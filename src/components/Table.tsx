export type Column<T> = {
  key: keyof T; //ключ объекта строки, который будет отображаться в этой колонке.
  title: string; // название колонки, которое будет отображаться в заголовке таблицы.
  render?: (value: any, row: T) => React.ReactNode; // позволяет отображать любые данные в любой форме
  isText?: boolean; // для фильтрации
};

type TableProps<T> = {
  data: T[]; // массив объектов со всеми данными
  columns: Column<T>[]; // массив объектов Column, которые определяют, какие данные и как будут отображаться
  onEdit?: (row: T) => void; // функция при нажатии на кнопку редактирования. выполняется, но ничего не возвращает
};

// Дженерик <T> для отображения любых структур данных (обьектов). Наличие id обязательно.
export function Table<T extends { id: number }>({
  data,
  columns,
  onEdit,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="min-w-full table table-zebra">
        {/* Заголовки */}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-4 py-2 text-start">
                {col.title}
              </th>
            ))}
            {onEdit && <th className="px-4 py-2"></th>}
          </tr>
        </thead>
        {/* Строки */}
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-2 text-start">
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key])}
                </td>
              ))}
              {onEdit && (
                <td className="px-4 py-2">
                  <button
                    onClick={() => onEdit(row)}
                    className="btn btn-xs btn-soft btn-primary"
                  >
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Рендер строк таблицы.
 *
 * Для каждой строки данных (`data.map((row) => ...)`) создаётся элемент `<tr>`,
 * где ключом служит уникальный идентификатор строки (`row.id`).
 *
 * Внутри строки для каждой колонки (`columns.map((col) => ...)`) создаётся ячейка `<td>`.
 * - Если для колонки определён метод `render`, он вызывается с текущим значением и всей строкой,
 *   что позволяет кастомизировать отображение данных.
 * - Если `render` не задан, значение отображается как строка.
 *
 * Если передана функция `onEdit`, в конце каждой строки добавляется дополнительная ячейка с кнопкой "Edit".
 * При нажатии на кнопку вызывается `onEdit` с текущей строкой.
 */
