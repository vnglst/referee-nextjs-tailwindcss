import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { Dialog } from "@reach/dialog";

const services = [
  {
    id: "scheids",
    name: "Scheidsrechter",
  },
  {
    id: "bar",
    name: "Barman/vrouw",
  },
  {
    id: "trainer",
    name: "Trainer",
  },
];

type SearchDialogProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const SearchDialog: FC<SearchDialogProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const [service, setService] = useState(services[0]);
  const [postalCode, setPostalCode] = useState("");
  const [distance, setDistance] = useState("Alle afstanden");
  const [dateTime, setDateTime] = useState("2021-10-31T11:47");

  if (!isOpen) return null;

  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      aria-label="Wat zoek je?"
      className="w-full h-full"
    >
      <div className="w-full h-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              `zoeken?s=${service.id}&p=${postalCode}&d=${distance}&data=${dateTime}`
            );
            setIsOpen(false);
          }}
          className="relative flex flex-col bg-white w-full h-full"
        >
          <button onClick={() => setIsOpen(false)}>Terug</button>

          <div className="my-4 flex flex-col gap-2">
            <span>Dienst</span>
            {services.map((p) => {
              const isSelected = p.id === service.id;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setService(p)}
                  className={isSelected ? "border-2 border-red-400" : ""}
                >
                  {p.name}
                </button>
              );
            })}
          </div>

          <div className="my-4 flex flex-col gap-2">
            <span>Waar?</span>
            <label>
              Postcode
              <input
                // required
                placeholder="1000 AA"
                autoComplete="off"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </label>

            <select
              required
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            >
              <option>Alle afstanden</option>
              <option>{`< 3 km`}</option>
              <option>{`< 5 km`}</option>
              <option>{`< 10 km`}</option>
              <option>{`< 15 km`}</option>
            </select>
          </div>

          <div className="my-4 flex flex-col gap-2">
            <span>Datum en tijd</span>
            <label>
              Datum
              <input
                // required
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </label>
          </div>

          <input type="submit" value="Zoeken" />
        </form>
      </div>
    </Dialog>
  );
};
