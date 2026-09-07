import React from 'react';
import type { DeviceType } from '../../types/project';
import { PHONE, PhoneMockup } from './PhoneMockup';
import { BROWSER, BrowserMockup } from './BrowserMockup';
import { DESKTOP, DesktopMockup } from './DesktopMockup';

export function deviceSize(type: DeviceType) {
  if (type === 'mobile') return { w: PHONE.w + PHONE.bezel * 2, h: PHONE.h + PHONE.bezel * 2 };
  if (type === 'web') return { w: BROWSER.w, h: BROWSER.h + BROWSER.chrome };
  return {
    w: DESKTOP.w + DESKTOP.bezel * 2,
    h: DESKTOP.h + DESKTOP.bezel * 2 + DESKTOP.stand
  };
}

/** Never shows a mobile UI in a desktop frame, or the reverse — type decides. */
export function Device({
  type,
  domain,
  scale = 1,
  shadow = true,
  glare = true,
  children







}: {type: DeviceType;domain?: string;scale?: number;shadow?: boolean;glare?: boolean;children: React.ReactNode;}) {
  if (type === 'mobile') {
    return (
      <PhoneMockup scale={scale} shadow={shadow} glare={glare}>
        {children}
      </PhoneMockup>);

  }
  if (type === 'web') {
    return (
      <BrowserMockup scale={scale} shadow={shadow} domain={domain}>
        {children}
      </BrowserMockup>);

  }
  return (
    <DesktopMockup scale={scale} shadow={shadow}>
      {children}
    </DesktopMockup>);

}

/** Scales a device to fit a box without ever exceeding 1:1 relevance. */
export function fitScale(type: DeviceType, boxW: number, boxH: number, max = 1) {
  const { w, h } = deviceSize(type);
  return Math.min(boxW / w, boxH / h, max);
}