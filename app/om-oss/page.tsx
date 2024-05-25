import React from "react";
import { Link } from '@nextui-org/react';

export default function AboutPage() {
  return (
    <div className="container md:mb-44 min-h-fit md:max-w-screen-md px-4 mx-auto">
      <h1 className="mt-20 text-5xl md:text-7xl light:text-title font-lora font-medium text-primary-900">
        Om oss
      </h1>
      <p className="mt-12 text-lg text-slate-700 ">
        BuyAndRead har vært i medieindustrien siden 2003 og leverer blant annet
        eMagasin/eAvis, eArkiv og NyhetsApp.
      </p>
      <p className="mt-4 text-lg text-slate-700 ">Vi har for øyeblikket 67 kunder hvor vi til sammen har levert mer enn 164 produkter.</p>
      <p className="mt-4 text-lg text-slate-700 ">I tillegg driver vi
        markedsplassen <Link className="text-frigg-400" href="https://buyandread.com">www.BuyAndRead.com</Link> hvor det selges digital tilgang til
        magasiner/aviser. Her kan utgiver legge ut sin publikasjon for salg.</p>
    </div>
  );
}
