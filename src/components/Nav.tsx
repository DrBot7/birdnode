// LuminescentDev Navbar Component Dec 11

import { component$, $, Slot, useStore } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { LogoDiscord, LogoGithub, LogoTwitter, GlobeOutline, ChevronDown, Menu, ServerOutline, ListOutline, CubeOutline } from 'qwik-ionicons';

import type { SpeakLocale } from 'qwik-speak';
import { inlineTranslate, useSpeakConfig } from 'qwik-speak';

import { languages } from '~/speak-config';
import LoadingIcon from './icons/LoadingIcon';

import Birdflop from './icons/Birdflop';

export default component$(() => {
  const t = inlineTranslate();
  const store = useStore({ mobilemenu: false });
  const location = useLocation();

  return (
    <Nav>
      <MainNav>
        <Dropdown name='Hosting' Icon={ServerOutline} extraClass={{ 'hidden sm:flex': true }}>
          <NavButton type="external" href="https://panel.birdflop.com/">
            Panel
          </NavButton>
          <NavButton type="external" href="https://client.birdflop.com/">
            Billing
          </NavButton>
          <NavButton href="/node-stats">
            Node Stats
          </NavButton>
        </Dropdown>
        <Dropdown name="Resources" Icon={CubeOutline} extraClass={{ 'hidden sm:flex': true }}>
          <NavButton href="/resources/gradients">
            {t('nav.hexGradient@@Hex Gradients')}
          </NavButton>
          <NavButton href="/resources/animtab">
            {t('nav.animatedTAB@@Animated TAB')}
          </NavButton>
          <NavButton href="/resources/sparkprofile">
            {t('nav.sparkProfile@@Spark Profile')}
          </NavButton>
          <NavButton href="/resources/flags">
            {t('nav.flags@@Flags')}
          </NavButton>
          <NavButton href="/resources">
            {t('nav.more@@More Resources')}
          </NavButton>
        </Dropdown>
        <LangPicker extraClass={{ 'hidden': !location.url.pathname.includes('resources') }} />
        <SocialButtons />
        <NavButton type="div" icon title="Menu" onClick$={() => { store.mobilemenu = !store.mobilemenu; }} extraClass={{ 'flex sm:hidden fill-current hover:fill-white': true }}>
          <Menu width="24" />
        </NavButton>
      </MainNav>
      <MobileNav store={store}>
        <NavButton type="external" href="https://panel.birdflop.com/">
          Panel
        </NavButton>
        <NavButton type="external" href="https://client.birdflop.com/">
          Billing
        </NavButton>
        <NavButton type="external" href="https://www.birdflop.com/node-stats/">
          Node Stats
        </NavButton>
        <NavButton store={store} href="/resources/gradients">
          {t('nav.hexGradient@@Hex Gradients')}
        </NavButton>
        <NavButton store={store} href="/resources/animtab">
          {t('nav.animatedTAB@@Animated TAB')}
        </NavButton>
        <NavButton store={store} href="/resources/animpreview">
          {t('nav.tabAnimationPreview@@TAB Animation Previewer')}
        </NavButton>
        <NavButton store={store} href="/resources/sparkprofile">
          {t('nav.sparkProfile@@Spark Profile')}
        </NavButton>
        <NavButton store={store} href="/resources/papertimings">
          {t('nav.paperTimings@@Paper Timings')}
        </NavButton>
        <NavButton store={store} href="/resources/flags">
          {t('nav.flags@@Flags')}
        </NavButton>
        <NavButton href="/resources">
          More Resources
        </NavButton>
        <div class="flex justify-evenly">
          <SocialButtons />
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen backdrop-blur-xl">
      <div class="transition-all">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  const location = useLocation();
  return (
    <div class="flex items-center justify-start">
      <Link href="/" class="transition ease-in-out text-gray-300 hover:bg-blue-700/20 hover:text-white drop-shadow-2xl px-3 pb-3 pt-3 rounded-lg text-lg flex tracking-wider items-center">
        <Birdflop width={32} />
        <span class="ml-3 text-bold">Birdflop</span>
        <div class={{
          'transition-all': true,
          '-ml-7 opacity-0': !location.isNavigating,
        }}>
          <LoadingIcon />
        </div>
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class={'bg-blue-700/20 py-2'}>
      <div class={'mx-auto relative flex items-center justify-between max-w-7xl px-2'}>
        <Brand />
        <div class="flex flex-1 items-center justify-end">
          <div class="flex gap-1 text-gray-300 whitespace-nowrap">
            <Slot />
          </div>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(({ store }: any) => {
  return (
    <div id="mobile-menu" class={{
      'gap-2 px-3 flex flex-col sm:hidden transition-all duration-300 bg-blue-700/20 ': true,
      'opacity-100 max-h-screen pt-2 pb-8': store.mobilemenu,
      'opacity-0 max-h-0 py-0 pointer-events-none': !store.mobilemenu,
    }}>
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, type, extraClass, style, store, onClick$ }: any) => {
  const _class = {
    'group transition ease-in-out hover:bg-blue-700/20 hover:text-white py-3 rounded-lg items-center cursor-pointer': true,
    'text-3xl px-3': icon,
    'px-4 flex gap-3': !icon,
    ...extraClass,
  };

  return <>
    {type == 'external' &&
      <a href={href} title={title} style={style} class={_class}>
        <Slot />
      </a>
    }
    {type == 'div' &&
      <div title={title} style={style} class={_class} onClick$={onClick$}>
        <Slot />
      </div>
    }
    {!type &&
      <Link href={href} title={title} style={style} class={_class} onClick$={() => { store ? store.mobilemenu = false : undefined; }}>
        <Slot />
      </Link>
    }
  </>;
});

export const Dropdown = component$(({ name, Icon, extraClass }: any) => {
  return (
    <div class={{
      'cursor-pointer transition ease-in-out gap-3 hover:bg-blue-700/20 hover:text-white drop-shadow-2xl group rounded-lg items-center': true,
      ...extraClass,
    }}>
      <div class="px-4 py-2 flex gap-2.5 items-center">
        {Icon && <Icon width="24" />}
        {name}
        <ChevronDown width="16" class="transform group-hover:-rotate-180 transition ease-in-out" />
      </div>
      <div class="absolute top-8 left-0 z-10 hidden group-hover:flex pt-5 text-base">
        <div class="bg-gray-900 border border-gray-800 rounded-xl px-3 py-4 flex flex-col gap-2 font-medium whitespace-nowrap overflow-y-auto max-h-[calc(100svh-128px)]">
          <Slot />
        </div>
      </div>
    </div>
  );
});

export const LangPicker = component$(({ extraClass }: any) => {
  const config = useSpeakConfig();

  const changeLocale$ = $(async (newLocale: SpeakLocale) => {
    document.cookie = `locale=${JSON.stringify(newLocale)};max-age=86400;path=/`;
    location.reload();
  });

  return (
    <div class={{
      'cursor-pointer transition ease-in-out flex hover:bg-blue-700/20 hover:text-white drop-shadow-2xl group rounded-lg text-3xl items-center gap-4': true,
      ...extraClass,
    }}>
      <div class="p-3">
        <GlobeOutline width="24" class="transform group-hover:rotate-180 group-hover:text-white transition ease-in-out" />
      </div>
      <div class={'absolute top-8 z-10 hidden group-hover:flex pt-5 text-base right-0'}>
        <div class="bg-gray-900 border border-gray-800 rounded-xl px-3 py-4 flex flex-col gap-2 font-medium whitespace-nowrap overflow-y-auto max-h-[calc(100svh-128px)]">
          {config.supportedLocales.map(value => (
            <NavButton type="div" key={value.lang} onClick$={async () => await changeLocale$(value)}>
              {languages[value.lang as keyof typeof languages]}
            </NavButton>
          ))}
        </div>
      </div>
    </div>
  );
});

export const SocialButtons = component$(() => {
  return <>
    <NavButton type="external" icon href="https://github.com/LuminescentDev/SimplyMC" title="GitHub" extraClass={{ 'flex fill-current hover:fill-white': true }}>
      <LogoGithub width="24" />
    </NavButton>
    <NavButton type="external" icon href="https://discord.gg/nmgtX5z" title="Discord" extraClass={{ 'flex fill-current hover:fill-white': true }}>
      <LogoDiscord width="24" />
    </NavButton>
    <NavButton type="external" icon href="https://twitter.com/birdflop" title="Twitter" extraClass={{ 'flex fill-current hover:fill-white': true }}>
      <LogoTwitter width="24" />
    </NavButton>
  </>;
});