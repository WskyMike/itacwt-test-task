export interface PricePlan {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}

const pricePlans: PricePlan[] = [
  {
    id: 1001,
    description: "Тариф «Всё включено»",
    active: true,
    createdAt: "2023-01-10T09:00:00.0Z",
    removedAt: "",
  },
  {
    id: 1002,
    description: "Тариф «Смарт»",
    active: true,
    createdAt: "2022-05-15T12:30:00.0Z",
    removedAt: "",
  },
  {
    id: 1003,
    description: "Тариф «Тёплый приём»",
    active: false,
    createdAt: "2020-09-01T10:00:00.0Z",
    removedAt: "2023-09-01T10:00:00.0Z",
  },
  {
    id: 1004,
    description: "Тариф «Безлимитище»",
    active: false,
    createdAt: "2018-03-20T14:00:00.0Z",
    removedAt: "2021-01-01T00:00:00.0Z",
  },
  {
    id: 1005,
    description: "Тариф «Мой разговор»",
    active: false,
    createdAt: "2017-07-01T00:00:00.0Z",
    removedAt: "2020-12-31T23:59:59.0Z",
  },
  {
    id: 1006,
    description: "Тариф «Премиум»",
    active: true,
    createdAt: "2024-02-01T09:00:00.0Z",
    removedAt: "",
  },
  {
    id: 1007,
    description:
      "Тариф «Для своих» ",
    active: true,
    createdAt: "2023-04-10T10:00:00.0Z",
    removedAt: "",
  },
  {
    id: 1008,
    description: "Тариф «Архивный»",
    active: false,
    createdAt: "2015-06-15T08:00:00.0Z",
    removedAt: "2018-12-31T23:59:59.0Z",
  },
  {
    id: 1009,
    description: "Тариф «Онлайн»",
    active: true,
    createdAt: "2022-11-01T08:00:00.0Z",
    removedAt: "",
  },
  {
    id: 1010,
    description: "Тариф «Супер МТС»",
    active: false,
    createdAt: "2010-06-01T00:00:00.0Z",
    removedAt: "2017-08-31T23:59:59.0Z",
  },
];

export default pricePlans;
