import { useState } from "react";
import productsData from "../../data/ProductsData";
import { Table, type Column } from "../Table";
import { EditModal } from "../EditModal";
import formatDate from "../../utils/formatDate";
import { SearchBox } from "../SearchBox/SearchBox";
import { filter } from "../../utils/filter";
import { StatusFilter } from "../StatusFilter/StatusFilter";

// для вывода типа элемента массива productsData на основе существующих данных.
type Product = (typeof productsData)[number];

// Определяем колонки таблицы, которые будут отображаться. Каждая колонка имеет ключ, заголовок и функцию рендеринга.
// Ключ - это свойство объекта, которое будет отображаться в этой колонке. Заголовок - это название колонки, которое будет отображаться в заголовке таблицы.
// Функция рендеринга позволяет отображать любые данные в любой форме, например, преобразовывать дату в строку или отображать объект как строку.
const columns: Column<Product>[] = [
  { key: "name", title: "Name", isText: true },
  { key: "options", title: "Options", render: (v) => `${v.size}, ${v.amount}` },
  {
    key: "active",
    title: "Status",
    render: (v) => (v ? "Active" : "Inactive"),
  },
  {
    key: "createdAt",
    title: "Created",
    render: (v) => formatDate(v),
  },
];

// Определяем редактируемые поля для модального окна.
// Каждое поле имеет ключ, который соответствует свойству объекта продукта, и метку, которая будет отображаться в модальном окне.
// В данном случае, только поле "name" будет редактируемым.
// Это позволяет легко добавлять или изменять редактируемые поля в будущем, просто изменив массив `editableFields`.
const editableFields: { key: keyof Product; label: string }[] = [
  { key: "name", label: "Name" },
];

export default function ProductsPage() {
  const [data, setData] = useState(productsData); // Текущее состояние списка продуктов, инициализируется данными из `productsData`.
  const [search, setSearch] = useState(""); // Строка поиска, используется для фильтрации продуктов по имени.
  const [status, setStatus] = useState<"all" | "active" | "inactive">("all"); // Статус для фильтрации
  const [edit, setEdit] = useState<Product | null>(null); // Выбранный для редактирования продукт или `null`, если модальное окно закрыто.

  // Получаем ключи для поиска по колонкам с isText
  const searchKeys = columns.filter((c) => c.isText).map((c) => c.key);
  // Передаем данные в универсальную функцию фильтрации
  const filtered = filter(data, search, searchKeys, status);

  return (
    <div>
      <div className="flex gap-4 my-7">
        {/* Поиск */}
        <SearchBox value={search} onChange={setSearch} />
        {/* Фильтр по статусу */}
        <StatusFilter value={status} onChange={setStatus} />
      </div>

      {/* Таблица */}
      <Table data={filtered} columns={columns} onEdit={(row) => setEdit(row)} />

      {/* Модальное окно для редактирования */}
      {/* При сохранении изменений в модальном окне, данные обновляются в состоянии `data` по идентификатору продукта. */}
      {/* После сохранения или закрытия модального окна, состояние `edit` сбрасывается в `null`. */}
      <EditModal
        open={!!edit} // Откроем тольео если есть обьект для редактирования (true)
        fields={editableFields} // Передаем редактируемые поля в модальное окно.
        initial={edit ?? data[0]} // Передаем текущий продукт для редактирования или первый продукт из списка, если `edit` равен `null`.
        onClose={() => setEdit(null)}
        onSave={(updated) => {
          setData((d) =>
            d.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
          );
          setEdit(null);
        }} // Создаем новый массив data, в котором обновленный продукт заменяет старый продукт с тем же идентификатором.
      />
    </div>
  );
}
