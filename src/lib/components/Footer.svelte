<script>
  import { Plane } from 'lucide-svelte';
  import Button from './ui/button/button.svelte';
  import Brand from './shared/Brand.svelte';
  import Input from './ui/input/input.svelte';
  import Label from './ui/label/label.svelte';
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
  <div class="bg-blue-500 w-[90%] mx-auto p-4 rounded-xl relative -top-32">
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
    class="relative -top-16 w-[90%] mx-auto bg-[#3334434e] flex items-start gap-4 justify-between rounded-xl p-10"
  >
    <div class="flex flex-col space-y-4 items-start w-[40%]">
      <div>
        <Brand bgColor="bg-white" fill="black" text="text-white" />
      </div>
      <span>
        <div class="space-y-1">
          <Label for="subscribe" class="text-sm font-semibold text-white"
            >Skip the line. Get our top daily deal</Label
          >
          <div class="flex items-center gap-2">
            <Input
              name="subscribe"
              class="text-gray-400"
              placeholder="Enter your email"
            />
            <Button class="bg-blue-500 hover:bg-blue-500 text-white"
              >Subscribe</Button
            >
          </div>
          <p class="text-sm font-light text-gray-400">
            By subscribing you accept our privacy policy and provide consent to
            receive updates from our company
          </p>
        </div>
      </span>
    </div>
    <div class="flex items-start gap-20 justify-between">
      {#each links as section}
        <div class="text-white space-y-2">
          <h4 class="font-semibold">{section.title}</h4>
          <ul class="font-light space-y-2">
            {#each section.sublinks as sublink}
              <li>
                <a href={sublink.link} class="text-sm text-gray-400"
                  >{sublink.title}</a
                >
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
