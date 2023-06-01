import { SortConfig } from "../@types";

export const Sort = <T>(data: T[], sortConfig: SortConfig<T> | null): T[] => {
  if (!sortConfig) {
    return data;
  }

  const { key, direction } = sortConfig;

  return [...data].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (valueA < valueB) {
      return direction === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return direction === "asc" ? 1 : -1;
    }
    return 0;
  });
};
