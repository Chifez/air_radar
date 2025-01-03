<script lang="ts">
  import { MoveUpRight } from 'lucide-svelte';
  import { Button } from '../ui/button';

  let HERO_IDX = $state(0);

  const links = [
    {
      id: 1,
      country: 'United Kingdom',
      mainBannerUrl: '/uk-main.jpg',
      subBannerUrl: '/uk-sub.jpg',
    },
    {
      id: 2,
      country: 'Canada',
      mainBannerUrl: '/canada-main.jpg',
      subBannerUrl: '/canada-sub.jpg',
    },
    {
      id: 3,
      country: 'Indonesia',
      mainBannerUrl: '/ind-main.jpg',
      subBannerUrl: '/ind-sub.jpg',
    },
    // {
    //   country: 'France',
    //   mainBannerUrl: '/uk-one.jpg',
    //   subBannerUrl: '/uk-one.jpg',
    // },
  ];

  //   $effect(()=>{

  //   })
</script>

<section class="h-[80vh] mx-auto p-6">
  <div
    style="background-image: url({links[HERO_IDX]
      .mainBannerUrl}); background-size: cover; background-position: center;"
    class="relative rounded-3xl object-cover h-[80vh]"
  >
    <div class="flex gap-2 absolute bottom-4 left-4">
      {#each links as item, idx}
        <button
          style="background-image: url({item.mainBannerUrl}); background-size:cover; background-position:center"
          class={`size-14 border ${HERO_IDX == idx ? 'border-black' : ''} rounded-full `}
          onclick={() => (HERO_IDX = idx)}
        >
          <!-- {#if HERO_IDX == idx}
            <div
              class={`${HERO_IDX == idx ? 'flex items-center justify-center text-white absolute inset-0 bg-black rounded-full size-14' : ''}`}
            >
              ...
            </div>
          {/if} -->
        </button>
      {/each}
    </div>
    <div>
      <span
        class="tag text-5xl font-bold font-mono absolute top-0 left-0 rounded-tl-3xl rounded-br-3xl"
      >
        <div class="bg-white px-6 pb-4 pt-6 rounded-br-3xl">
          <h1>EXPERIENCE THE RICHNESS OF GLOBAL</h1>
        </div>
        <div class="bg-white px-6 pb-4 w-fit rounded-br-3xl title-tag relative">
          <h1>EXPLORATION</h1>
        </div>
      </span>
    </div>

    <div
      class="absolute flex items-center justify-center top-8 right-[18%] bg-white size-16 rounded-xl p-4"
    >
      <MoveUpRight size={32} />
    </div>
    <div
      class="sub-tag rounded-tl-3xl rounded-br-3xl absolute pt-6 pl-6 flex items-center justify-center bottom-0 right-0 bg-white h-60 w-[23rem]"
    >
      <div
        style="background-image: url({links[HERO_IDX]
          .subBannerUrl}); background-size: cover; background-position: center;"
        class="relative w-full h-full rounded-3xl"
      >
        <div class="flex flex-col justify-between w-[70%] h-full px-10 py-4">
          <h1 class="text-white uppercase font-semibold text-lg">
            {links[HERO_IDX].country}
          </h1>

          <Button class="py-2 px-6 bg-white text-black">See more</Button>
        </div>

        <div
          class="btn absolute flex items-center justify-center bottom-0 right-0 bg-white rounded-tl-3xl rounded-br-xl pt-4 pl-4"
        >
          <div
            class="bg-black size-16 flex items-center justify-center rounded-xl"
          >
            <MoveUpRight class="stroke-white" size={32} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .tag::before {
    content: '';
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 30px;
    transform: rotate(180deg);
    background: radial-gradient(circle at 0 0, transparent 30px, white 31px);
  }

  .tag::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 30px;
    height: 30px;
    transform: rotate(180deg);
    background: radial-gradient(circle at 0 0, transparent 30px, white 31px);
  }

  .title-tag::before {
    content: '';
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 30px;
    transform: rotate(180deg);
    background: radial-gradient(circle at 0 0, transparent 30px, white 31px);
  }

  .sub-tag::after {
    content: '';
    position: absolute;
    top: 88%;
    left: -30px;
    width: 30px;
    height: 30px;
    /* transform: rotate(180deg); */
    background: radial-gradient(circle at 0 0, transparent 30px, white 31px);
  }

  .sub-tag::before {
    content: '';
    position: absolute;
    top: -30px;
    right: 0px;
    width: 30px;
    height: 30px;
    /* transform: rotate(180deg); */
    background: radial-gradient(circle at 0 0, transparent 30px, white 31px);
  }
  .sub-tag .btn::after {
    content: '';
    position: absolute;
    top: -30px;
    right: 0px;
    width: 30px;
    height: 30px;
    /* transform: rotate(180deg); */
    background: radial-gradient(circle at 0 0, transparent 30px, white 31px);
  }

  .sub-tag .btn::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -25px;
    width: 25px;
    height: 25px;
    /* transform: rotate(180deg); */
    background: radial-gradient(circle at 0 0, transparent 25px, white 26px);
  }
</style>
