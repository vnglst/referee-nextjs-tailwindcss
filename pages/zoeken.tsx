import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SearchDialog } from "components/SearchDialog";
import { searchResults, Service, services } from "data";
import { BiChevronLeft } from "react-icons/bi";

type SearchProps = {
  service: Service;
  postalCode: string;
  distance: string;
  dateTimeStr: string;
};

export default function Search(props: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);

  return (
    <>
      <Head>
        <title>Zoeken</title>
      </Head>
      <SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} {...props} />
      <main className="max-w-2xl mx-auto">
        <div className="sticky top-0 bg-gray-100 flex max-w-full z-10 py-4 align-baseline drop-shadow-md sm:drop-shadow-none">
          <Link href="/">
            <a className="p-2 grid items-center">
              <span className="sr-only">Terug</span>
              <BiChevronLeft className="text-2xl mx-2" />
            </a>
          </Link>
          <button
            onClick={open}
            className="rounded-full bg-gray-300 truncate max-w-full w-full p-2 px-6 mr-4 flex justify-center"
          >
            <b className="font-semibold">{props.service.name}</b>
            <div className="w-1 h-1 bg-gray-600 mx-2 rounded-full inline-block self-center" />
            {props.postalCode.toUpperCase()}
          </button>
        </div>
        {searchResults.map((profile) => {
          return <ResultItem key={profile.id} {...profile} />;
        })}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t mt-auto">
        <a
          className="flex items-center justify-center"
          href="https://digital-capacity.nl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2">
            <Image
              src="/dc.png"
              alt="Digital Capacity"
              width={132}
              height={32}
            />
          </span>
        </a>
      </footer>
    </>
  );
}

const ResultItem = ({ image, name, service, woonplaats, motto, price }) => {
  return (
    <div className="flex p-4 max-w-xl mb-8">
      <div className="flex-none w-44 relative">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex-auto pl-6"
      >
        <div className="flex flex-wrap items-baseline">
          <h1 className="w-full flex-none font-semibold mb-2.5">
            {service} {name}
          </h1>
          <div className="text-4xl leading-7 font-bold text-grey-600">
            €{price}
          </div>
          <div className="text-sm font-medium text-gray-400 ml-3">
            / wedstrijd
          </div>
        </div>
        <div className="flex items-baseline my-4">
          <div className="text-sm text-gray-500 underline">{woonplaats}</div>
        </div>
        <blockquote className="flex items-baseline my-8">
          <p className="text-lg font-semibold">&quot;{motto}&quot;</p>
        </blockquote>
        <div className="flex space-x-3 mb-4 text-sm font-semibold">
          <div className="flex-auto flex space-x-3">
            <button
              className="w-full flex items-center justify-center rounded-full bg-purple-700 text-white"
              type="submit"
            >
              Boeken
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500">Reageert meestal snel.</p>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const {
    s: serviceId = services[0].id,
    p: postalCode = "",
    d: distance = "Alle afstanden",
    date: dateTimeStr = "",
  } = query;

  const service = services.find((s) => s.id === serviceId);

  return {
    props: {
      service,
      postalCode,
      distance,
      dateTimeStr,
    },
  };
};
