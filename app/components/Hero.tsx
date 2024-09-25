export function Hero() {
  return (
    <div className="flex flex-col md:justify-center md:max-w-screen-lg ml-4 md:mx-auto mt-10 md:mt-52 mb-60">
      <h1 className="text-frigg-900 text-6xl md:text-8xl light:text-title font-lora font-medium text-start md:text-center">
        Vi leverer teknologi for digitale lese
        <wbr />
        opplevelser
      </h1>
      <p className="md:mx-auto md:max-w-2xl mt-8 text-slate-500 light:text-subtitle text-2xl md:text-3xl text-start md:text-center">
        Med vår teknologi kan leserne alltid få tilgang til siste nytt, uansett
        hvor de er og på hvilken enhet de bruker.
      </p>
      <div className="md:mx-auto">
        <a
          href="kontakt"
          className="mt-7 text-white text-xl md:text-2xl font-light bg-frigg-400  hover:bg-frigg-500 py-2 px-4 rounded-full inline-block"
        >
          Kontakt oss
        </a>
      </div>
    </div>
  );
}
