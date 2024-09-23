export function CallToAction() {
  return (
    <div className="md:mx-auto mt-12 p-4 md:items-center md:flex flex-col">
      <h1 className="text-frigg-900 text-6xl light:text-title font-lora font-medium ">
        Interessert?
      </h1>
      <p className="md:mx-auto md:max-w-2xl mt-4 text-slate-500 light:text-subtitle text-2xl md:text-3xl text-start md:text-center">
      Vil du vite mer? Ta kontakt, vi står klare til å svare på dine spørsmål!
      </p>
      <a
          href="kontakt"
          className="mt-10 text-white text-xl md:text-2xl font-light bg-frigg-400  hover:bg-frigg-500 py-2 px-4 rounded-full inline-block"
        >
          Kontakt oss
        </a>
    </div>
  );
}
