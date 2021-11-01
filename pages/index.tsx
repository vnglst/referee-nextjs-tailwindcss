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
      <main className="min-h-full">
        <button onClick={() => setIsOpen(true)}>
          Waar ben je naar op zoek?
        </button>
      </main>
      <SearchDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        service={services[0]}
        postalCode=""
        distance="Alle afstanden"
        dateTimeStr=""
      />
    </>
  );
}
