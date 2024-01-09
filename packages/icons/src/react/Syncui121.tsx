import React from 'react';
import type { SVGProps } from "react";

const Syncui121_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M13 3h6m-7 1h1M6 5h3m2 0h1m11 0h1m2 0h1M4 6h1m2 0h1m3 0h1m2 0h4m7 0h1M3 7h1M2 8h1m25 0h2M1 9h1m25 0h3M1 10h1m25 0h3M1 11h1m25 0h3M1 12h1m25 0h3M1 13h1m21 0h2m2 0h3M1 14h1m3 0h19m3 0h3M1 15h1m25 0h3M1 16h1m25 0h3M1 17h1m25 0h3M1 18h1m21 0h2m2 0h3M1 19h1m3 0h19m3 0h3M1 20h1m25 0h3M1 21h1m25 0h3M1 22h1m25 0h3M1 23h1m21 0h2m2 0h3M1 24h1m3 0h19m3 0h3M1 25h1m25 0h2M1 26h27" /><path stroke="#fff" d="M13 4h1m-2 1h1M6 6h1m17 0h1M2 9h25M2 10h1m-1 1h1m-1 1h1m2 0h19M2 13h1m1 0h1m-3 1h1m-1 1h1m-1 1h1m-1 1h1m2 0h19M2 18h1m1 0h1m-3 1h1m-1 1h1m-1 1h1m-1 1h1m2 0h19M2 23h1m1 0h1m-3 1h1m-1 1h1" /><path stroke="silver" d="M14 4h5m-6 1h1m4 0h2m-8 1h1m6 0h1M4 7h1m4 0h2m3 0h4m3 0h2m4 0h2M3 8h25M3 10h24M3 11h24M3 12h2m19 0h3M3 13h1m1 0h18m2 0h2M3 14h2m19 0h3M3 15h24M3 16h24M3 17h2m19 0h3M3 18h1m1 0h18m2 0h2M3 19h2m19 0h3M3 20h24M3 21h24M3 22h2m19 0h3M3 23h1m1 0h18m2 0h2M3 24h2m19 0h3M3 25h24" /><path stroke="#000" d="M19 4h1m-6 1h4m2 0h1m3 0h2M5 6h1m2 0h3m2 0h1m4 0h1m1 0h4m2 0h3M5 7h4m2 0h3m4 0h3m2 0h4m2 0h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 27h26" /></svg>;

export const syncui121Data = {
  '32x32_4': Syncui121_32x32_4
};

export interface Syncui121Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Syncui121: React.FC<Syncui121Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = syncui121Data[variant];

  return <Svg {...rest} />;
};
