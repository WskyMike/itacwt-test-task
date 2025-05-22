import { useState } from "react";
import pricePlansData from "../../data/PricePlansData";
import { Table, type Column } from "../Table";
import { EditModal } from "../EditModal";
import formatDate from "../../utils/formatDate";
import { SearchBox } from "../SearchBox/SearchBox";
import { filter } from "../../utils/filter";
import { StatusFilter } from "../StatusFilter/StatusFilter";

type PricePlan = (typeof pricePlansData)[number];

const columns: Column<PricePlan>[] = [
  { key: "description", title: "Description", isText: true },
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
  {
    key: "removedAt",
    title: "Removed",
    render: (v) => formatDate(v),
  },
];

const editableFields: { key: keyof PricePlan; label: string }[] = [
  { key: "description", label: "Description" },
];

export default function PricePlans() {
  const [data, setData] = useState(pricePlansData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "active" | "inactive">("all");
  const [edit, setEdit] = useState<PricePlan | null>(null);

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
