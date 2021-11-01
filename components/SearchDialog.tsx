import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { Dialog } from "@reach/dialog";
import { Service, services } from "data";
import { BiChevronLeft } from "react-icons/bi";

import { cx } from "utils/styling";

type SearchDialogProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  service: Service;
  postalCode: string;
  distance: string;
  dateTimeStr: string;
};

export const SearchDialog: FC<SearchDialogProps> = ({
  isOpen,
  setIsOpen,
  ...initial
}) => {
  const router = useRouter();
  const [service, setService] = useState(initial.service);
  const [postalCode, setPostalCode] = useState(initial.postalCode);
  const [distance, setDistance] = useState(initial.distance);
  const [dateTime, setDateTime] = useState(initial.dateTimeStr);

  const close = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      aria-label="Wat zoek je?"
      className="animate-fade-in-down h-full sm:h-auto sm:mt-20 bg-gray-100 drop-shadow-xl sm:max-w-xl mx-auto md:rounded-lg"
    >
      <div className="w-full h-full bg-grey-100 overflow-auto text-base md:rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              `zoeken?s=${service.id}&p=${postalCode}&d=${distance}&date=${dateTime}`
            );
            close();
          }}
          className="relative flex flex-col w-full h-full"
        >
          <div className="flex w-full bg-white p-4 ">
            <button onClick={close} className="grid items-center outline-none">
              <span className="sr-only">Terug</span>
              <BiChevronLeft className="text-2xl" />
            </button>
            <span className="text-center w-full text-base">
              Waar ben je naar op zoek?
            </span>
          </div>
          <div className="font-semibold  mt-6 mb-2 px-4">Dienst</div>
          <div className="flex flex-wrap p-4 gap-4 bg-white ">
            {services.map((p) => {
              const isSelected = p.id === service.id;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setService(p)}
                  className={cx(
                    "p-4 border rounded-md",
                    isSelected ? "border-indigo-400" : "border-gray-200"
                  )}
                >
                  {p.name}
                </button>
              );
            })}
          </div>

          <div className="font-semibold  mt-6 mb-2 px-4">Locatie</div>
          <div className="flex flex-row p-4 bg-white">
            <input
              required
              placeholder="1000 AA"
              autoComplete="off"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-20 p-2 mr-4 "
            />

            <select
              required
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="appearance-none form-select block w-full bg-white py-2 px-3 border border-transparent rounded-md"
            >
              <option>Alle afstanden</option>
              <option>{`< 3 km`}</option>
              <option>{`< 5 km`}</option>
              <option>{`< 10 km`}</option>
              <option>{`< 15 km`}</option>
            </select>
          </div>

          <div className="font-semibold  mt-6 mb-2 px-4">Datum en tijdstip</div>

          <div className="p-4 bg-white">
            <input
              required
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="appearance-none p-2 text-left block rounded-lg bg-gray-50"
            />
          </div>

          <div className="flex justify-end w-full mt-4 p-4">
            <input
              type="submit"
              value="Zoeken"
              className="justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    </Dialog>
  );
};
