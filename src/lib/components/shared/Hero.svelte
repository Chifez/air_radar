<script>
  import { MoveUpRight } from 'lucide-svelte';
  import { Button } from '../ui/button';

  const links = [
    {
      country: 'United Kingdom',
      mainBannerUrl: '/uk-one.jpg',
      subBannerUrl: '/uk-one.jpg',
    },
    {
      country: 'Canada',
      mainBannerUrl: '/uk-one.jpg',
      subBannerUrl: '/uk-one.jpg',
    },
    {
      country: 'Indonesia',
      mainBannerUrl: '/uk-one.jpg',
      subBannerUrl: '/uk-one.jpg',
    },
    {
      country: 'France',
      mainBannerUrl: '/uk-one.jpg',
      subBannerUrl: '/uk-one.jpg',
    },
  ];
</script>

<section class="h-[80vh] mx-auto p-6">
  <div
    style="background-image: url('/uk-one.jpg'); background-size: cover; background-position: center;"
    class="relative rounded-3xl object-cover h-[80vh]"
  >
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
        style="background-image: url('/uk-three.jpg'); background-size: cover; background-position: center;"
        class="relative w-full h-full rounded-3xl"
      >
        <div class="flex flex-col justify-between w-[70%] h-full px-10 py-4">
          <h1 class="text-white uppercase font-semibold text-lg">
            United Kingdom
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
