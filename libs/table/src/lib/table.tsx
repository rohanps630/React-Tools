import React, { useEffect, useState } from 'react';
import { Search, Sort } from './utils';
import { SortConfig } from './@types';

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface TableComponentProps<T> {
  columns: TableColumn<T>[];
  initialData: T[];
}

export const Table = <T extends object>({
  columns,
  initialData,
}: TableComponentProps<T>) => {
  const [data, setData] = useState<T[]>(initialData);
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (searchText) {
      setData(Search(data, columns, searchText));
    } else {
      setData(initialData);
    }
  }, [searchText]);

  const handleSort = (columnName: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (
      sortConfig &&
      sortConfig.key === columnName &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }

    const sortedData = Sort<T>(data, { key: columnName, direction });

    setData(sortedData);
    setSortConfig({ key: columnName, direction });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        name="search"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search"
      />
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                onClick={() => handleSort(column.key)}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key as string}>
                  {item[column.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
