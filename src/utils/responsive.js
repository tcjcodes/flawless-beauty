import React from 'react';
import Responsive from 'react-responsive';

// matches spectre variables
const xs = 480;
const sm = 600;
const md = 840;
const lg = 960;
const xl = 1280;
const xxl = 1440; // 2x

// https://github.com/contra/react-responsive#common-use-cases

export const DesktopXl = (props) => {
  return <Responsive {...props} minWidth={xxl + 1} />;
};
export const DesktopLg = (props) => {
  return <Responsive {...props} minWidth={xl + 1} maxWidth={xxl} />;
};
export const Desktop = (props) => {
  return <Responsive {...props} minWidth={lg + 1} maxWidth={xl} />;
};
export const Tablet = (props) => {
  return <Responsive {...props} minWidth={md + 1} maxWidth={lg} />;
};
export const Phablet = (props) => {
  return <Responsive {...props} minWidth={sm + 1} maxWidth={md} />;
};
export const Phone = (props) => {
  return <Responsive {...props} minWidth={xs + 1} maxWidth={sm} />;
};
export const Mini = (props) => {
  return <Responsive {...props} maxWidth={xs} />;
};

// Mobile
export const PhoneRange = (props) => {
  return <Responsive {...props} maxWidth={640} />;
};
//  Mobile to Tablet
export const PhabletRange = (props) => {
  return <Responsive {...props} maxWidth={lg} />;
};
// Desktop
export const DesktopRange = (props) => {
  return <Responsive {...props} minWidth={lg + 1} />;
};
