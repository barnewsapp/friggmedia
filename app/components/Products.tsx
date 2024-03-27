import Image from 'next/image';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-1 flex-col justify-center items-center py-8 gap-4 rounded-md shadow-md h-full bg-white">
      {children}
    </div>
  );
}

export function Products() {
  return (
    <div className="flex flex-col gap-4 mx-auto py-4 mb-40 md:max-w-screen-md ">
      <h2 className="text-2xl md:text-4xl text-center mb-8 text-title font-lora font-bold ">
        Våre produkter
      </h2>

      <div className="grid md:grid-cols-5 gap-4">
        <div className="col-span-3 ">
          <Card>
            <Image
              src="/product-buyandread.svg"
              alt="BuyAndRead"
              className="mb-4"
              width={120}
              height={80}
              priority
            />
            <h3 className="text-2xl font-semibold mb-2">BuyAndRead</h3>
            <p className="text-sm md:text-base text-gray-2 mb-4 px-4">
              En digital bladkiosk med 673 publikasjoner fordelt på 7 land og til sammen 493
              utgivere.
            </p>
          </Card>
        </div>
        <div className=" col-span-2">
          <Card>
            <Image
              src="/product-newsapp.svg"
              alt="BuyAndRead"
              className="mb-4"
              width={160}
              height={200}
              priority
            />
            <h3 className="text-2xl font-semibold mb-2">NyhetsApp</h3>
            <p className="text-sm md:text-base text-gray-2 mb-4 px-4">
              Denne knyttes direkte til CMS for å sikre at nettsideartikler publiseres automatisk i
              NyhetsAppen.
            </p>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        <div className="col-span-2 row-span-4 h-full">
          <Card>
            <h3 className="text-2xl font-semibold mb-2">eArkiv</h3>
            <p className="text-sm md:text-base text-gray-2 mb-4 px-4">
              Denne knyttes sammen med eLeseren slik at brukerne også kan lese eldre utgaver.
            </p>
          </Card>
        </div>
        <div className="col-span-3 row-span-2 ">
          <div className="flex px-4 bg-white rounded-md shadow-md">
            <Image
              src="/product-ereader.svg"
              alt="BuyAndRead"
              className="mb-4"
              width={125}
              height={160}
              priority
            />
            <div className=" flex-1">
              <div className=" flex flex-1 flex-col justify-center  h-full py-8 gap-4 ">
                <h3 className="text-2xl font-semibold mx-4">eLeser</h3>
                <p className="text-sm md:text-base text-gray-2 mb-4 px-4">
                  For publikasjoner eller medlemsblad som dere ønsker skal være digitalt
                  tilgjengelig.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-2 ">
          <div className="flex px-4  bg-white rounded-md shadow-md">
            <Image
              src="/product-buyandread.svg"
              alt="BuyAndRead"
              className="mb-4"
              width={70}
              height={45}
              priority
            />
            <div className=" flex-1">
              <div className=" flex flex-1 flex-col h-full py-8 gap-4 ">
                <h3 className="text-2xl font-semibold mx-4">BuyAndRead Arkiv</h3>
                <p className="text-sm md:text-base text-gray-2 mb-4 mx-4">
                  Et digitalt arkiv hvor man søke i 1 122 941 utgaver og 34 959 219 sider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 row-span-2 ">
        <div className="flex px-4  bg-white rounded-md shadow-md">
          <Image
            src="/product-buyandread.svg"
            alt="BuyAndRead"
            className="mb-4"
            width={70}
            height={45}
            priority
          />
          <div className=" flex-1">
            <div className=" flex flex-1 flex-col h-full py-8 gap-4 ">
              <h3 className="text-2xl font-semibold mx-4">SearchAndRead</h3>
              <p className="text-sm md:text-base text-gray-2 mb-4 mx-4">
                Et digitalt arkiv hvor man søke i 1 122 941 utgaver og 34 959 219 sider.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
