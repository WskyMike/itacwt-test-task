// Универсальная функция фильтрации
export function filter<T extends { active: boolean }>(
  data: T[], //массив объектов типа T
  search: string,
  keys: (keyof T)[], //массив ключей (названий свойств) объектов типа T, по которым будет идти поиск. (keyof T) принимает все ключи объекта T
  status: "all" | "active" | "inactive"
): T[] { // возвращаем массив объектов того же типа, что и на входе.

  // Фильтрация по статусу
  let filtered = data;
  if (status === "active") filtered = filtered.filter((item) => item.active);
  if (status === "inactive") filtered = filtered.filter((item) => !item.active);

  // Фильтрация по тексту
  if (search.trim()) {
    const lower = search.toLowerCase();
    filtered = filtered.filter((item) =>
      keys.some(
        (key) =>
          typeof item[key] === "string" &&
          (item[key] as string).toLowerCase().includes(lower)
      )
    );
  }
  return filtered;
}
