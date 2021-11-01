export type Service = {
  id: string;
  name: string;
};

export const services: Service[] = [
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

export const searchResults = [
  {
    id: 1,
    image: "/larry.jpeg",
    name: "Larry",
    service: "Scheidsrechter",
    woonplaats: "Alkmaar",
    motto: "Geen woorden, maar rode kaarten",
    price: 40,
  },
  {
    id: 2,
    image: "/koen.jpeg",
    name: "Koen",
    service: "Scheidsrechter",
    woonplaats: "Alkmaar",
    motto: "Football is life!",
    price: 35,
  },
  {
    id: 3,
    image: "/shirley.jpeg",
    name: "Shirley",
    service: "Scheidsrechter",
    woonplaats: "Den Helder",
    motto: "Tennis is life!",
    price: 35,
  },
  {
    id: 4,
    image: "https://joeschmoe.io/api/v1/2",
    name: "Roy Kent",
    service: "Scheidsrechter",
    woonplaats: "Den Helder",
    motto: "You had me at coach.",
    price: 35,
  },
  {
    id: 5,
    image: "https://joeschmoe.io/api/v1/10",
    name: "Matt",
    service: "Scheidsrechter",
    woonplaats: "Den Helder",
    motto: "I suppose the best brand is being yourself",
    price: 35,
  },
];
