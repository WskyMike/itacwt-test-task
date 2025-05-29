interface Product {
  id: number;
  name: string;
  options: {
    size: "S" | "M" | "L" | "XL" | "XXL";
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

const productsData: Product[] = [
  {
    id: 10000001,
    name: "Футболка мужская",
    options: {
      size: "XL",
      amount: 100,
    },
    active: true,
    createdAt: "2022-08-09T02:10:18.0Z",
  },
  {
    id: 10000002,
    name: "Джинсы женские",
    options: {
      size: "S",
      amount: 10,
    },
    active: true,
    createdAt: "2023-03-20T08:59:40.0Z",
  },
  {
    id: 10000003,
    name: "Куртка зимняя",
    options: {
      size: "L",
      amount: 20,
    },
    active: false,
    createdAt: "2021-07-27T16:05:57.0Z",
  },
  {
    id: 10000004,
    name: "Платье вечернее",
    options: {
      size: "XXL",
      amount: 5,
    },
    active: true,
    createdAt: "2024-08-20T03:53:24.0Z",
  },
  {
    id: 10000005,
    name: "Рубашка классическая",
    options: {
      size: "XL",
      amount: 4,
    },
    active: true,
    createdAt: "2023-01-19T20:09:29.0Z",
  },
  {
    id: 10000006,
    name: "Юбка мини",
    options: {
      size: "S",
      amount: 22,
    },
    active: false,
    createdAt: "2022-06-14T02:44:44.0Z",
  },
  {
    id: 10000007,
    name: "Пиджак мужской",
    options: {
      size: "M",
      amount: 11,
    },
    active: true,
    createdAt: "2021-08-04T19:49:04.0Z",
  },
  {
    id: 10000008,
    name: "Шорты спортивные",
    options: {
      size: "S",
      amount: 1,
    },
    active: false,
    createdAt: "2023-11-15T23:56:45.0Z",
  },
  {
    id: 10000009,
    name: "Пальто демисезонное",
    options: {
      size: "L",
      amount: 10,
    },
    active: false,
    createdAt: "2020-09-24T22:07:21.0Z",
  },
  {
    id: 10000010,
    name: "Толстовка унисекс",
    options: {
      size: "XXL",
      amount: 0,
    },
    active: true,
    createdAt: "2024-09-24T01:42:32.0Z",
  },
];

export default productsData;
