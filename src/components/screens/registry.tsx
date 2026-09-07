import React from 'react';
import * as adswar from './adswar';
import * as meridian from './meridian';
import * as ferro from './ferro';
import * as qubeso from './qubeso';
import * as optical from './optical';
import * as nocturne from './nocturne';
import * as atlas from './atlas';

type Renderer = () => JSX.Element;

/**
 * Every product screen is real, rendered UI — keyed by `${project}/${screen}`.
 * Nothing here is an image, so screens stay crisp at any zoom level.
 */
const registry: Record<string, Renderer> = {
  'adswar/splash': adswar.Splash,
  'adswar/login': adswar.Login,
  'adswar/home': adswar.Home,
  'adswar/search': adswar.Search,
  'adswar/details': adswar.Details,
  'adswar/profile': adswar.Profile,
  'adswar/settings': adswar.Settings,
  'adswar/success': adswar.Success,

  'meridian/overview': meridian.Overview,
  'meridian/accounts': meridian.Accounts,
  'meridian/transfer': meridian.Transfer,
  'meridian/card': meridian.Card,
  'meridian/insights': meridian.Insights,
  'meridian/confirm': meridian.Confirm,

  'ferro/today': ferro.Today,
  'ferro/workout': ferro.Workout,
  'ferro/timer': ferro.Timer,
  'ferro/progress': ferro.Progress,
  'ferro/profile': ferro.Profile,

  'qubeso/login': qubeso.Login,
  'qubeso/dashboard': qubeso.Dashboard,
  'qubeso/create': qubeso.Create,
  'qubeso/questions': qubeso.Questions,
  'qubeso/students': qubeso.Students,
  'qubeso/results': qubeso.Results,
  'qubeso/settings': qubeso.Settings,

  'optical/home': optical.Home,
  'optical/catalog': optical.Catalog,
  'optical/product': optical.Product,
  'optical/tryon': optical.Tryon,
  'optical/cart': optical.Cart,
  'optical/checkout': optical.Checkout,

  'nocturne/discover': nocturne.Discover,
  'nocturne/player': nocturne.Player,
  'nocturne/playlist': nocturne.Playlist,
  'nocturne/artist': nocturne.Artist,
  'nocturne/library': nocturne.Library,

  'atlas/tokens': atlas.Tokens,
  'atlas/components': atlas.Components,
  'atlas/typography': atlas.Typography,
  'atlas/motion': atlas.Motion,
  'atlas/export': atlas.Export
};

export function ScreenRender({ slug, screenId }: {slug: string;screenId: string;}) {
  const Cmp = registry[`${slug}/${screenId}`];
  if (!Cmp) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-ink">
        <span className="rt-meta text-mid">SCREEN NOT LOADED</span>
      </div>);

  }
  return <Cmp />;
}

export function hasScreen(slug: string, screenId: string) {
  return Boolean(registry[`${slug}/${screenId}`]);
}