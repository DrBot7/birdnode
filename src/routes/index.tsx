import { component$, $, useOnWindow, useVisibleTask$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { CartOutline, CashOutline, ColorPaletteOutline, CubeOutline, EyeOutline, GlobeOutline, HeartOutline, PersonOutline, RocketOutline, ServerOutline, StarOutline } from 'qwik-ionicons';
import Card, { CardHeader } from '~/components/elements/Card';
import Chart from '~/components/elements/Chart';
import Birdflop from '~/components/icons/Birdflop';
import { initiateTyper } from '~/components/util/Typer';

import background from '~/components/images/background.png';

export default component$(() => {

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    initiateTyper();
  });

  useOnWindow('scroll', $(() => {
    const bg = document.getElementById('bg')!;
    bg.style.bottom = `${window.scrollY / 2}px`;
    bg.style.filter = `blur(${window.scrollY * 2 / 100}px)`;
  }));

  return <>
    <section class="flex mx-auto max-w-7xl px-6 items-center justify-center min-h-[calc(100dvh-56px)]">
      <picture class="fixed bottom-0 scale-110 overflow-hidden -z-10 h-[100lvh] w-[100lvw]" id="bg">
        <img
          width={1920}
          height={1080}
          src={background}
          class="object-cover object-center h-full w-full opacity-55"
          alt="Background"
        />
      </picture>
      <div class="text-center justify-center flex relative align-center w-full">
        <div class="flex flex-col gap-2 sm:gap-6 w-full px-4">
          <div class="flex relative justify-center align-center fade-in animation-delay-100 mb-8 drop-shadow-2xl">
            <div class="hidden sm:flex">
              <Birdflop width={200} />
            </div>
            <div class="sm:hidden">
              <Birdflop width={100} />
            </div>
          </div>
          <h1 class="text-gray-100 text-3xl sm:text-6xl font-bold fade-in animation-delay-200">
            Birdflop Hosting
          </h1>
          <h2 class="text-gray-300 text-lg sm:text-2xl fade-in animation-delay-300">
            The only 501(c)(3) nonprofit server host dedicated to <span
              class="typer"
              id="main"
              data-words={'minecraft hosting,public resources,communities,you.'}
              data-colors="#5487CB,#54B1DF,#54DAF4,#54EEFF"
              data-delay="50"
              data-deleteDelay="1500"
            >
            </span>
            <span class="cursor" data-owner="main" data-cursor-display="|"></span>
          </h2>
          <div class="flex flex-col gap-2 mt-8 fade-in animation-delay-400">
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="https://client.birdflop.com/order/forms/" class="flex transition ease-in-out rounded-xl shadow-lg backdrop-blur-lg bg-sky-700/80 hover:bg-sky-700 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center">
                <ServerOutline width="30" class="text-3xl" /> Hosting
              </a>
              <Link href="/resources" class="flex transition ease-in-out rounded-xl shadow-lg backdrop-blur-lg bg-purple-700/80 hover:bg-purple-700 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center">
                <CubeOutline width="30" class="text-3xl" /> Resources
              </Link>
            </div>
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="https://www.paypal.com/donate/?hosted_button_id=6NJAD4KW8V28U" class="flex transition ease-in-out rounded-xl shadow-lg backdrop-blur-lg bg-pink-900/80 hover:bg-pink-700 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center">
                <CashOutline width="30" class="text-3xl" /> Donate Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 sitems-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-4xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Our Nonprofit Mission
          </h2>
          <p class="text-gray-200 sm:text-lg">
            At the heart of our mission, we are dedicated to igniting and nurturing a passion for technology and computer science. We uniquely approach our mission by offering affordable and accessible hosting resources, not just as a service, but as a catalyst for technological curiosity. Our belief is rooted in the idea that the hands-on experience of creating and managing a game server can be a gateway to a lifelong interest in technology and computer science. By ensuring this journey is engaging and frustration-free, we significantly enhance the likelihood of sparking a deeper interest in technological fields.
          </p>
          <p class="text-gray-200 sm:text-lg">
            Birdflop goes beyond mere hosting; we actively foster a community of learning and growth, exemplified through the wealth of public resources available on our <Link href="/resources" class="text-blue-400 hover:underline">Resources</Link> page. Looking ahead, we are committed to expanding our reach, investing in initiatives that fuel a passion for computer science and technology, and making a lasting impact in shaping future innovators. If you would like to further our mission, please consider making a <a href="https://www.paypal.com/donate/?hosted_button_id=6NJAD4KW8V28U" class="text-blue-400 hover:underline">charitable donation</a>, tax-deductible in the United States.
          </p>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 items-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-4xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Where do my payments go?
          </h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="">
              <Chart />
              <p class="text-gray-400 text-center py-2 text-xs sm:text-base">
                Plot shows revenue (inner ring) and expenditures (outer ring) for Q4 2023. Some numbers may be approximations.
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <p class="text-gray-300 sm:text-lg">
                Birdflop is a 501(c)(3) nonprofit organization with no paid employees or directors. As such, all profit generated is reinvested into improving our services and accomplishing our mission. Your service fees are used for covering our server costs, including building new servers, colocation fees, server rental fees, and software licensing fees. Our quarterly financial report is proudly displayed on the left.
              </p>
              <p class="text-gray-300 sm:text-lg">
                Your payments get you the best possible rate while contributing to the development of our <Link href="/resources" class="text-blue-400 hover:underline">free public resources</Link>. We reimburse clients based on excess profit, and we never overload our servers. View our server statistics on the <Link href="/node-stats" class="text-blue-400 hover:underline">Node Stats</Link> page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 items-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-5xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Plans
          </h2>
          <div class="grid md:grid-cols-2 gap-4">
            <Card darker>
              <p>
                Last quarter, clients paid <strong>$1.88/GB RAM</strong> after reimbursements.
              </p>
              <CardHeader subheader="Capped at $2/GB RAM">
                EU Premium
              </CardHeader>
              <ul class="list-disc ml-5 space-y-2">
                <li>
                  Falkenstein, Germany
                </li>
                <li>
                  4 vCores
                </li>
                <li>
                  Ryzen 9 5950X
                </li>
                <li>
                  DDR4 ECC RAM
                </li>
                <li>
                  Unmetered* NVMe Storage
                </li>
                <li>
                  3 Off-site Backups
                </li>
                <li>
                  DDoS Protection
                </li>
                <li>
                  1 Gbps uplink
                </li>
                <li>
                  Pterodactyl v1 Panel
                </li>
                <li>
                  Dedicated IP on 8GB+ plans
                </li>
                <li>
                  3-day Satisfaction Guarantee
                </li>
                <li>
                  Starting at $8/mo (~$7.52 after reimbursements)
                </li>
              </ul>
              <div>
                <a href="https://client.birdflop.com/order/main/index/eu-premium/" class="flex transition ease-in-out rounded-lg shadow-lg backdrop-blur-lg bg-blue-500/80 hover:bg-blue-500 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center mt-5">
                  <CartOutline width="30" class="text-3xl" /> Order Now
                </a>
              </div>
            </Card>
            <Card darker>
              <p>
                Last quarter, clients paid <strong>$1.95/GB RAM</strong> after reimbursements.
              </p>
              <CardHeader subheader="Capped at $3/GB RAM">
                US Premium
              </CardHeader>
              <ul class="list-disc ml-5 space-y-2">
                <li>
                  New York City, USA
                </li>
                <li>
                  4 vCores
                </li>
                <li>
                  Ryzen 9 3900XT
                </li>
                <li>
                  DDR4 RAM
                </li>
                <li>
                  Up to 200 GB NVMe Storage
                </li>
                <li>
                  3 Off-site Backups
                </li>
                <li>
                  DDoS Protection
                </li>
                <li>
                  1 Gbps uplink
                </li>
                <li>
                  Pterodactyl v1 Panel
                </li>
                <li>
                  Dedicated IP on 8GB+ plans
                </li>
                <li>
                  3-day Satisfaction Guarantee
                </li>
                <li>
                  Starting at $12/mo (~$7.80 after reimbursements)
                </li>
              </ul>
              <div>
                <a href="https://client.birdflop.com/order/main/index/us-premium/" class="flex transition ease-in-out rounded-lg shadow-lg backdrop-blur-lg bg-blue-500/80 hover:bg-blue-500 px-6 py-3 text-pink-100 md:py-4 md:px-8 text-sm md:text-lg whitespace-nowrap gap-5 items-center mt-5">
                  <CartOutline width="30" class="text-3xl" /> Order Now
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 items-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-5xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Features
          </h2>
          <div class="grid md:grid-cols-2 gap-4">
            <Card darker>
              <CardHeader>
                <RocketOutline width="36" /> Sheer Performance
              </CardHeader>
              <p>
                We don't make compromises. Choose from our blazing fast Ryzen 9 processors and NVMe SSDs. All plans include a satisfaction guarantee.
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <ColorPaletteOutline width="36" /> Fully Configurable
              </CardHeader>
              <p>
                You'll have full access to your server. You can set your startup flags, change your java version, upload custom jars, and create reverse proxies.
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <EyeOutline width="36" /> Transparent
              </CardHeader>
              <p>
                We don't oversell, and we're transparent about that. View our public <Link href="/node-stats" class="text-blue-400 hover:underline">detailed server statistics</Link> or financial breakdown.
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <GlobeOutline width="36" /> Price Matching
              </CardHeader>
              <p>
                We're confident that we have the best plans available. If you locate a similar plan at a lower price, ask us about our price matching.
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <HeartOutline width="36" /> Instant Support
              </CardHeader>
              <p>
                You can contact support at any time through our <a href="https://discord.gg/nmgtX5z" class="text-blue-400 hover:underline">Discord server</a>.
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <CashOutline width="36" /> Nonprofit
              </CardHeader>
              <p>
                Our nonprofit status helps us keep our services affordable and accessible. Clients receive periodic reimbursements for excess profit.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 sitems-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-4xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            How do reimbursements work?
          </h2>
          <p class="text-gray-200 sm:text-lg">
            As a nonprofit, Birdflop periodically reimburses clients based on excess profit. At the end of each reimbursement period, active clients receive a reimbursement for excess profit from their plan. These reimbursements are dependent on usage, maximally lowering prices at high service utilization. Last quarter, US clients received a 35% reimbursement and EU clients received a 6% reimbursement, effectively lowering prices to $1.95/GB RAM and $1.88/GB RAM for the US and EU, respectively. Not good enough? Find a competitor with similar specifications and inquire about our price matching.
          </p>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 items-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-5xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Testimonials
          </h2>
          <div class="grid md:grid-cols-3 gap-4">
            <Card darker>
              <CardHeader>
                <PersonOutline width="36" /> Mikkel Hansen
              </CardHeader>
              <p>
                I'm happy with my subscription, providing nearly full system access at a great price point. They've proven to be reliable, trustworthy and transparent. It's clear that actual humans run this place and their support is S tier (if you don't mind the need to be part of their Discord server).
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <PersonOutline width="36" /> Wizzy SMP
              </CardHeader>
              <p>
                Birdflop is the best Minecraft server hosting out there! Unbeatable pricing (due to their tax-exempt 501(c)3 non-profit status), amazing support on their Discord server and great servers! We have 24/7 access to all stats that we'd need to know like in/out network speed, average CPU usage per node, and a lot more. Birdflop is my recommendation to all my friends!
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <PersonOutline width="36" /> Beau
              </CardHeader>
              <p>
                I've been using Birdflop for several months and I believe it is loads better than any other hosting company I've used. I recommend this company over any other
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <PersonOutline width="36" /> Jmaster
              </CardHeader>
              <p>
                Amazing hosting, amazing staff, and top of the line performance. 11/10, and I recommend it to everyone. I can say with confidence, this is a valid host and has no cringe features.
              </p>
            </Card>
            <Card darker>
              <CardHeader>
                <PersonOutline width="36" /> Oliver Flynn
              </CardHeader>
              <p>
                Best hosting I have ever used. great owners, fast help, amazing servers. all around a good host.
              </p>
            </Card>
            <Card darker link="https://www.trustpilot.com/review/birdflop.com">
              <CardHeader>
                <StarOutline width="36" /> Trustpilot
              </CardHeader>
              <p>
                Check out our Trustpilot page for more testimonials.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 sitems-center justify-center bg-gray-800">
      <div class="justify-center flex relative align-center max-w-4xl px-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Want More Info?
          </h2>
          <p class="text-gray-200 sm:text-lg">
            Create a ticket on our <a href="https://discord.gg/nmgtX5z" class="text-blue-400 hover:underline">Discord server</a> to ask for more information or request a free trial. All plans include a 3-day refund guarantee if you're not satisfied for any reason. On the Discord, you'll also find several more happy clients who can tell you about their experiences with Birdflop.
          </p>
        </div>
      </div>
    </section>
    <div class="pt-16 bg-gray-800" />
  </>;
});

export const head: DocumentHead = {
  title: 'Minecraft Hosting & Resources',
  meta: [
    {
      name: 'description',
      content: 'Minecraft Hosting & Resources',
    },
    {
      name: 'og:description',
      content: 'Minecraft Hosting & Resources',
    },
    {
      name: 'og:image',
      content: '/images/icon.png',
    },
  ],
};
