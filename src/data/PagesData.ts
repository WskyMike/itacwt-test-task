export interface Page {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

const pages: Page[] = [
  {
    id: 23634610,
    title: "Склад №1",
    active: true,
    updatedAt: "2024-05-01T10:15:44.0Z",
    publishedAt: "2024-05-01T09:00:00.0Z",
  },
  {
    id: 67303872,
    title: "Офис продаж",
    active: true,
    updatedAt: "2024-04-20T14:51:35.0Z",
    publishedAt: "2024-04-01T10:00:00.0Z",
  },
  {
    id: 49117143,
    title: "Производственный цех",
    active: true,
    updatedAt: "2024-03-15T13:18:03.0Z",
    publishedAt: "2024-03-10T12:00:00.0Z",
  },
  {
    id: 57694553,
    title: "Магазин на Ленинской",
    active: true,
    updatedAt: "2024-02-26T08:12:19.0Z",
    publishedAt: "2024-02-20T09:00:00.0Z",
  },
  {
    id: 52130295,
    title: "Пункт самовывоза",
    active: true,
    updatedAt: "2024-01-05T04:13:21.0Z",
    publishedAt: "2024-01-01T10:00:00.0Z",
  },
  {
    id: 87091875,
    title: "Склад готовой продукции",
    active: false,
    updatedAt: "2023-12-25T16:49:30.0Z",
    publishedAt: "2023-12-20T09:00:00.0Z",
  },
  {
    id: 38008840,
    title: "Магазин на Центральной",
    active: true,
    updatedAt: "2023-11-18T09:16:21.0Z",
    publishedAt: "2023-11-10T10:00:00.0Z",
  },
  {
    id: 62296414,
    title: "Сервисный центр",
    active: false,
    updatedAt: "2023-10-09T22:06:01.0Z",
    publishedAt: "2023-10-01T09:00:00.0Z",
  },
  {
    id: 76976188,
    title: "Логистический центр",
    active: false,
    updatedAt: "2023-09-06T18:01:58.0Z",
    publishedAt: "2023-09-01T10:00:00.0Z",
  },
  {
    id: 22666349,
    title: "Офис бухгалтерии",
    active: true,
    updatedAt: "2023-08-15T01:04:37.0Z",
    publishedAt: "2023-08-01T09:00:00.0Z",
  },
];

export default pages;
