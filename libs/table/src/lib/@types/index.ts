export interface SortConfig<T> {
  key: keyof T;
  direction: "asc" | "desc";
}

export interface TableColumn<T> {
  key: keyof T;
  label: string;
}

export interface TableComponentProps<T> {
  columns: TableColumn<T>[];
  initialData: T[];
}
