import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { SearchDialog } from "components/SearchDialog";

export default function Zoeken() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Zoeken</title>
      </Head>
      <div className="min-h-full flex gap-2">
        <Link href="/">Terug</Link>
        <button onClick={() => setIsOpen(true)}>
          Scheidsrechter, 29-09-10 10:00
        </button>
      </div>
      <SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
