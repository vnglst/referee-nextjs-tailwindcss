import { useState } from "react";
import Head from "next/head";
import { SearchDialog } from "components/SearchDialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Referee</title>
      </Head>
      <div className="min-h-full">
        <button onClick={() => setIsOpen(true)}>
          Waar ben je naar op zoek?
        </button>
      </div>
      <SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
