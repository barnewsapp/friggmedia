export function Hero() {
  return (
    <div className="flex flex-col md:justify-center md:max-w-screen-md mx-4 sm:mx-auto my-32">
      <h1 className="text-frigg-900 text-5xl md:text-7xl light:text-title font-lora font-medium text-start md:text-center">
        Vi leverer teknologi for digitale lese
        <wbr />
        opplevelser
      </h1>
      <p className="md:mx-auto md:max-w-xl mt-6 text-slate-600 light:text-subtitle text-lg md:text-2xl text-start md:text-center">
        Med vår teknologi kan leserne alltid få tilgang til siste nytt, uansett
        hvor de er og på hvilken enhet de bruker.
      </p>
      <div className="md:mx-auto">
        <a
          href="#"
          className="mt-6 text-white text-md md:text-lg font-light bg-frigg-400  hover:bg-frigg-500 py-2 px-4 rounded inline-block"
        >
          Kontakt oss
        </a>
      </div>
    </div>
  );
}
