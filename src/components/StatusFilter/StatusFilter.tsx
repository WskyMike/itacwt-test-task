type StatusType = "all" | "active" | "inactive";

type StatusFilterProps = {
  value: StatusType;
  onChange: (value: StatusType) => void;
};

export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div className="filter flex gap-2">
      <input
        className={`btn filter-reset${value === "all" ? " btn-active" : ""}`}
        type="radio"
        name="status"
        aria-label="All"
        checked={value === "all"}
        onChange={() => onChange("all")}
      />
      <input
        className={`btn${value === "active" ? " btn-active" : ""}`}
        type="radio"
        name="status"
        aria-label="Active"
        checked={value === "active"}
        onChange={() => onChange("active")}
      />
      <input
        className={`btn${value === "inactive" ? " btn-active" : ""}`}
        type="radio"
        name="status"
        aria-label="Inactive"
        checked={value === "inactive"}
        onChange={() => onChange("inactive")}
      />
    </div>
  );
}
