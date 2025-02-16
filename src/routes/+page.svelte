<script lang="ts">
  import Navigation from '$lib/components/shared/Navigation.svelte';
  import Hero from '$lib/components/shared/Hero.svelte';
  import SearchFlights from '$lib/components/SearchFlights.svelte';
  import TopFlights from '$lib/components/TopFlights.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import {
    animate,
    stagger,
    type AnimationSequence,
    type Segment,
  } from 'motion';
  import SplitType from 'split-type';
  import { Plane } from 'lucide-svelte';
  import FlightInfo from '$lib/components/FlightInfo.svelte';
  import { TAB } from '$lib/utils/types';
  import { activeTab } from '$lib/components/store';
  import FlightMain from '$lib/components/FlightMain.svelte';

  let mainTag: any;
  let subTag: any;
  let countryTag: any;
  let countryCTA: any;
  let loaderTag: any;
  let loaderBG: any;
  let loaderPlane: any;
  let loaderContainer: any;

  // let animationPlayed = false;

  onMount(() => {
    const animationPlayed = sessionStorage.getItem('animationPlayed');
    const splitLoaderTag = new SplitType(loaderTag, {
      lineClass: 'overflow-hidden',
    });
    const splitMain = new SplitType(mainTag, {
      lineClass: 'overflow-hidden',
    });
    const splitSub = new SplitType(subTag, { lineClass: 'overflow-hidden' });

    if (!animationPlayed) {
      // animationPlayed = true;
      sessionStorage.setItem('animationPlayed', 'true');

      const revealLoader = [
        loaderContainer,
        { opacity: ['1'] },
        { duration: 0 },
      ];
      const loaderTagAnimateIn = [
        splitLoaderTag.words,
        { y: ['100%', '0%'] },
        { delay: stagger(0.1), duration: 1, easing: ['0.62,-0.01, 0.37,0.99'] },
      ];
      const loaderTagAnimateOut = [
        splitLoaderTag.words,
        { y: ['-100%'] },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: ['0.62,-0.01, 0.37,0.99'],
          at: '+0.5',
        },
      ];

      const loaderPlaneAnimateIn = [
        loaderPlane,
        { opacity: ['0', '1'] },
        { delay: stagger(0.1), duration: 1, easing: ['0.62,-0.01, 0.37,0.99'] },
      ];

      const loaderPlaneRotate = [
        loaderPlane,
        { rotate: -90 },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: ['0.62,-0.01, 0.37,0.99'],
          at: '<',
        },
      ];
      const loaderPlaneAnimateOut = [
        loaderPlane,
        { rotate: -90, y: ['-1000%'], x: ['-1000%'], opacity: ['0'] },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: ['0.62,-0.01, 0.37,0.99'],
          at: '+0.5',
        },
      ];

      const loaderBGAnimate = [
        loaderBG,
        { y: ['0', '-100%'] },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: ['0.62,-0.01, 0.37,0.99'],
          at: '<',
        },
      ];
      const mainAnimate = [
        splitMain.words,
        { y: ['150%', '0%'] },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: ['0.62,-0.01, 0.37,0.99'],
          at: '-0.35',
        },
      ];
      const subAnimate = [
        splitSub.words,
        { y: ['150%', '0%'] },
        {
          delay: stagger(0.1),
          duration: 1,
          easing: ['0.62,-0.01, 0.37,0.99'],
          at: '<',
        },
      ];

      const sequence: AnimationSequence[] = [
        revealLoader,
        loaderTagAnimateIn,
        loaderPlaneAnimateIn,
        loaderTagAnimateOut,
        loaderPlaneRotate,
        loaderPlaneAnimateOut,
        loaderBGAnimate,
        mainAnimate,
        subAnimate,
      ];
      animate(sequence as Segment[]);
      console.log('tags', mainTag, subTag);
    } else {
      const loaderBGAnimate = [loaderBG, { y: ['-100%'] }, { duration: 0 }];
      const mainAnimate = [
        splitMain.words,
        { y: ['0%'] },
        {
          duration: 0,
        },
      ];
      const subAnimate = [
        splitSub.words,
        { y: ['0%'] },
        {
          duration: 0,
        },
      ];

      const sequence = [loaderBGAnimate, mainAnimate, subAnimate];
      animate(sequence as Segment[]);
      console.log('tags', mainTag, subTag);
    }
  });
</script>

<svelte:head>
  <title>Peace | Home</title>
  <meta name="Home" content="Explore the richness in global exploration" />
</svelte:head>

<div>
  <div>
    <Hero bind:mainTag bind:subTag bind:countryTag bind:countryCTA />
    <div class="mt-14 pb-10 bg-slate-50">
      <FlightMain />
    </div>
    <Footer />
  </div>
  <div
    bind:this={loaderBG}
    class="z-50 fixed top-0 left-0 w-screen overflow-hidden h-screen flex items-center justify-center"
  >
    <div
      bind:this={loaderBG}
      class="bg-slate-50 absolute left-0 top-0 h-full w-full"
    ></div>
    <span
      bind:this={loaderContainer}
      class="z-50 flex items-center gap-1 opacity-0"
    >
      <div bind:this={loaderPlane}>
        <Plane />
      </div>
      <h1 bind:this={loaderTag} class="font-oswald text-lg font-bold uppercase">
        Peace.
      </h1>
    </span>
  </div>
</div>
