import React from "react";
import { Link } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <div className="container pt-20 md:mb-60 min-h-fit md:max-w-screen-xl px-4 mx-auto flex flex-col md:flex-row justify-evenly gap-10 md:gap-20">
      <div className="max-w-lg">
        <h1 className="text-5xl md:text-7xl light:text-title font-lora font-medium text-primary-900">
          Kontakt oss
        </h1>
        <p className="mt-8 text-lg text-slate-700 ">
          Har du et spørsmål, innspill eller ønsker du å ta en prat med oss? Det
          synes vi er skikkelig hyggelig – alt du trenger å gjøre er å fylle ut
          skjemaet.
        </p>
      </div>
      <div className="w-full p-8 bg-white rounded-2xl shadow-md">Skjema her</div>
    </div>
  );
}
