import { useState } from "react";
import pagesData from "../../data/PagesData";
import { Table, type Column } from "../Table";
import { EditModal } from "../EditModal";
import formatDate from "../../utils/formatDate";
import { SearchBox } from "../SearchBox/SearchBox";
import { filter } from "../../utils/filter";
import { StatusFilter } from "../StatusFilter/StatusFilter";

type Page = (typeof pagesData)[number];

const columns: Column<Page>[] = [
  { key: "title", title: "Title", isText: true },
  {
    key: "active",
    title: "Status",
    render: (v) => (v ? "Active" : "Inactive"),
  },
  {
    key: "updatedAt",
    title: "Updated",
    render: (v) => formatDate(v),
  },
  {
    key: "publishedAt",
    title: "Published",
    render: (v) => formatDate(v),
  },
];

const editableFields: { key: keyof Page; label: string }[] = [
  { key: "title", label: "Title" },
];

export default function Pages() {
  const [data, setData] = useState(pagesData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "active" | "inactive">("all");
  const [edit, setEdit] = useState<Page | null>(null);

  const searchKeys = columns.filter((c) => c.isText).map((c) => c.key);
  const filtered = filter(data, search, searchKeys, status);

  return (
    <div>
      <div className="flex gap-4 my-7">
        <SearchBox value={search} onChange={setSearch} />
        <StatusFilter value={status} onChange={setStatus} />
      </div>
      <Table data={filtered} columns={columns} onEdit={(row) => setEdit(row)} />
      <EditModal
        open={!!edit}
        fields={editableFields}
        initial={edit ?? data[0]}
        onClose={() => setEdit(null)}
        onSave={(updated) => {
          setData((d) =>
            d.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
          );
          setEdit(null);
        }}
      />
    </div>
  );
}
