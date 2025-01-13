<script>
  import { Plane } from 'lucide-svelte';
  import Button from './ui/button/button.svelte';
  let links = [
    {
      title: 'Destination',
      sublinks: [
        {
          title: 'Dubai',
          link: '/bookings/dubai',
        },
        {
          title: 'Paris',
          link: '/bookings/paris',
        },
        {
          title: 'Amsterdam',
          link: '/bookings/amsterdm',
        },
        {
          title: 'Tokyo',
          link: '/bookings/tokyo',
        },
        {
          title: 'Kyoto',
          link: '/bookings/kyoto',
        },
        {
          title: 'Singapore',
          link: '/bookings/singapore',
        },
      ],
    },
    {
      title: 'Company',
      sublinks: [
        {
          title: 'Agency Access',
          link: '/agency',
        },
        {
          title: 'Reviews',
          link: '/reviews',
        },
        {
          title: 'Scholarship',
          link: '/scholarship',
        },
      ],
    },
    {
      title: 'Legal',
      sublinks: [
        {
          title: 'Terms of Use',
          link: '/terms',
        },
        {
          title: 'Privacy Policy',
          link: '/privacy',
        },
        {
          title: 'Refund Policy',
          link: '/refund',
        },
      ],
    },
  ];
</script>

<section class="relative bg-[#010218]">
  <div class="bg-blue-500 w-[90%] mx-auto p-4 rounded-xl relative -top-20">
    <div class="flex items-center justify-between p-8">
      <span class="space-y-3 w-[60%]">
        <p class="leading-[3rem] text-5xl text-white font-semibold">
          Bookings discounted fares airlines can't show online has never been <span
            class="italic">this</span
          > easy.
        </p>
        <p class="text-sm font-light text-white">
          find your perfect flight, without the hassle. see what you can today
        </p>
      </span>
      <Button class="text-sm px-6 py-4 text-blue-500 hover:bg-white bg-white"
        >Search Now</Button
      >
    </div>
  </div>

  <div
    class="relative -top-10 w-[90%] mx-auto bg-[#314bff] border border-red-500 flex items-start justify-between rounded-xl p-4"
  >
    <div class="w-full">
      <span>
        <Plane />
      </span>
      <p>other things here</p>
    </div>
    <div class="w-full flex items-start justify-between">
      {#each links as section}
        <div class="text-white">
          <h4 class="font-semibold">{section.title}</h4>
          <ul class="font-light">
            {#each section.sublinks as sublink}
              <li>
                <a href={sublink.link} class="footer-link">{sublink.title}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
