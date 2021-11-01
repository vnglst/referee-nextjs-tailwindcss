import { useState } from "react";
import Head from "next/head";
import { SearchDialog } from "components/SearchDialog";
import { services } from "data";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Referee</title>
      </Head>
      <main className="h-full flex flex-col content-center items-center justify-center bg-white bg-home bg-cover bg-center">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-gray-200 py-4 px-8 m-4 text-sm flex"
        >
          Waar ben je naar op zoek?
        </button>
      </main>
      <SearchDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        service={services[0]}
        postalCode=""
        distance="Alle afstanden"
        dateTimeStr="2021-11-01T13:27"
      />
    </>
  );
}
