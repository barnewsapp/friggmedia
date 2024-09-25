import React from "react";
import { Link } from "@nextui-org/react";
import { LuPhone, LuMail, LuMessagesSquare } from "react-icons/lu";
import { IconType } from "react-icons";



function IconCircle(icon: string) {

  switch (icon) {
    case "mail":
      return <LuMail />
      break;
    case "phone":
      return <LuPhone />
    default:
      return <LuMessagesSquare />
      break;
  }
}

function ContactCard(props: { href: string; icon: string; text: string }) {
  return (
    <a href={props.href} className="w-full">
          <div className="bg-white flex text-xl md:text-2xl items-center h-full space-x-5 p-6 rounded-2xl shadow-md dark:bg-card-dark transition-all hover:scale-105">
            <div className='w-11 h-11 flex items-center justify-center text-slate-500 bg-frigg-50 rounded-full'>
              {IconCircle(props.icon)}
            </div>
            <p className="text-frigg-400">
              {props.text}
            </p>
          </div> 
    </a>
  )
}

export default function ContactPage() {
  return (
    <div className="container md:mb-44 max-h-dvh md:max-w-screen-md px-4 mx-auto">
      <h1 className="mt-20 text-5xl md:text-7xl light:text-title font-lora font-medium text-primary-900">
        Kontakt oss
      </h1>
      <p className="mt-12 text-2xl text-slate-600 ">
        Har du et spørsmål, innspill eller ønsker du å ta en prat med oss? Det
        synes vi er skikkelig hyggelig. Nedenfor finner du kontaktinformasjonen
        vår.
      </p>
      
      <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-8">
        <ContactCard icon="mail" href="#" text="example@friggmedia.no"></ContactCard>
        <ContactCard icon="phone" href="#" text="+47 12345678"></ContactCard>
      </div>
    </div>
  );
}
