import React from 'react';
import type { SVGProps } from "react";

const Awfext326051_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M22 4h2m-3 1h1m2 0h2m-6 1h1m5 0h2M12 7h4m3 0h1m8 0h2M10 8h2m4 0h3m11 0h1M8 9h2m4 0h2m1 0h1m13 0h1M7 10h1m4 0h2m2 0h2M6 11h1m4 0h1m6 0h2M5 12h1m4 0h1m9 0h2m6 0h2M4 13h1m4 0h1m3 0h1m8 0h2m6 0h1M3 14h1m4 0h1m6 0h1m8 0h2m2 0h3M2 15h1m4 0h1m3 0h1m5 0h1m8 0h5M1 16h1m4 0h1m6 0h1m10 0h7M0 17h1m1 0h1m2 0h1m3 0h1m5 0h1m6 0h9M0 18h1m3 0h1m6 0h1m9 0h10M0 19h3m1 0h1m8 0h1m6 0h11M0 20h1m3 0h1m14 0h12M4 21h1m13 0h12m-13 1h11m-12 1h10m-10 1h8m-8 1h6m-6 1h4m-4 1h2" /><path stroke="#fff" d="M22 5h2m-3 1h5m-6 1h8M12 8h1m6 0h11M10 9h1m5 0h1m1 0h12M8 10h1m5 0h1m3 0h11M7 11h1m4 0h1m7 0h8M6 12h1m4 0h1m10 0h5M5 13h1m4 0h1m13 0h2M4 14h1m4 0h1m3 0h1M3 15h1m4 0h1m6 0h1M2 16h1m4 0h1m3 0h1m5 0h1M1 17h1m1 0h1m2 0h1m6 0h1M1 18h2m2 0h1m3 0h1m5 0h1M5 19h3m3 0h1m-7 1h1m2 0h2m3 0h1m-9 1h1m4 0h2m-7 1h1m6 0h2m0 1h2" /><path stroke="silver" d="M13 8h3m-5 1h3m-5 1h3m3 0h1m-8 1h3m2 0h5M7 12h3m2 0h8M6 13h3m2 0h2m2 0h7m5 0h3M5 14h3m2 0h3m4 0h7m2 0h2M4 15h3m2 0h2m2 0h2m4 0h7M3 16h3m2 0h3m4 0h2m2 0h5M4 17h1m2 0h2m2 0h2m4 0h5M3 18h1m2 0h3m4 0h2m2 0h4M3 19h1m4 0h3m4 0h5M2 20h2m2 0h2m2 0h3m2 0h4M6 21h4m2 0h6M6 22h6m2 0h3M6 23h8m-6 1h8m-6 1h6m-4 1h4m-2 1h2" /><path stroke="#000" d="M31 8h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-14 1h1m11 0h1m-13 1h1m1 0h1m14 0h1m-20 1h1m3 0h1m1 0h1m12 0h1m-20 1h1m1 0h1m3 0h1m12 0h1m-22 1h1m3 0h1m1 0h1m14 0h1m-22 1h1m1 0h1m3 0h1m14 0h1m-20 1h1m1 0h1m16 0h1M1 20h1m12 0h1m16 0h1M0 21h1m1 0h2m26 0h1M1 22h1m2 0h1m23 0h2M2 23h1m2 0h1m20 0h2M1 24h1m1 0h1m2 0h2m16 0h2M0 25h1m1 0h1m5 0h2m12 0h2M1 26h1m8 0h2m8 0h2m-10 1h2m4 0h2m-6 1h4" /></svg>;

export const awfext326051Data = {
  '32x32_4': Awfext326051_32x32_4
};

export interface Awfext326051Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Awfext326051: React.FC<Awfext326051Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = awfext326051Data[variant];

  return <Svg {...rest} />;
};
