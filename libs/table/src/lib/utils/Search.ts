import { TableColumn } from "../@types";

export const Search = <T>(
  data: T[],
  columns: TableColumn<T>[],
  searchText: string
): T[] => {
  const lowercaseSearchText = searchText.toLowerCase();
  const lowercaseValues = columns.reduce((acc, { key }) => {
    acc[key as keyof T] = lowercaseSearchText;
    return acc;
  }, {} as Record<keyof T, string>);

  return data.filter((item) =>
    columns.some(({ key }) =>
      String(item[key]).toLowerCase().includes(lowercaseValues[key])
    )
  );
};
