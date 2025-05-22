import { useEffect, useRef, useState } from "react";

type EditModalProps<T> = {
  open: boolean; // открыто ли модальное окно
  fields: { key: keyof T; label: string }[]; // редактируемые поля
  // массив объектов, каждый из которых содержит ключ и метку для редактируемого поля (описаны в editableFields)
  // ключ - это свойство объекта, которое будет отображаться в этой колонке
  // метка - это название колонки, которое будет отображаться в заголовке таблицы
  initial: T; // начальные данные для редактирования
  onClose: () => void;
  onSave: (updated: T) => void; // передается обновленный объект T с измененными значениями полей.
};

export function EditModal<T extends object>({
  open,
  fields,
  initial,
  onClose,
  onSave,
}: EditModalProps<T>) {
  const [form, setForm] = useState<T>(initial); // <T> гарантирует, что cостояние form будет иметь тот же тип, что и объект initial
  const dialogRef = useRef<HTMLDialogElement>(null); // реф для модалки

  useEffect(() => setForm(initial), [initial]); // обновляем состояние form при изменении initial

  // Открытие/закрытие модалки через ref
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  // Закрытие модалки по Escape
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  if (!open) return null;

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box w-auto max-w-lg">
        <form
          method="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(form);
          }}
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg mb-5">Edit:</h3>
          {/* Для каждого поля в массиве fields создаем элемент формы */}
          {/* Используем метод map (для расширения на будущее) для перебора массива и создания элементов формы */}
          {/* Каждый элемент формы имеет ключ, для понимания какое поле редактиоровать */}
          {fields.map((f) => (
            <div key={String(f.key)} className="mb-3 ">
              <label className="input w-md">
                <span className="label">{f.label}</span>
                <input
                  className=""
                  value={String(form[f.key] ?? "")}
                  onChange={(e) =>
                    setForm({ ...form, [f.key]: e.target.value } as T)
                  }
                />
              </label>
            </div>
          ))}
          <div className="flex gap-2 justify-end mt-8">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
