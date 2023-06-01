/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css';
import { Search, Sort } from './utils';
import { SelectionType, SortConfig } from './@types';
import { SelectionCheckbox } from './components';

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface TableComponentProps<T> {
  columns: TableColumn<T>[];
  initialData: T[];
  selectionType?: SelectionType;
}

export const Table = <T extends object>({
  columns,
  initialData,
  selectionType = 'none',
}: TableComponentProps<T>) => {
  const [data, setData] = useState<T[]>(initialData);
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

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

  const getSortIndicator = (columnName: keyof T) => {
    if (sortConfig && sortConfig.key === columnName) {
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    }
    return null;
  };

  const handleRowSelect = (index: number) => {
    if (selectionType === 'none') {
      return;
    }

    if (selectionType === 'single') {
      setSelectedRows([index]);
    } else if (selectionType === 'multi') {
      const isSelected = selectedRows.includes(index);
      if (isSelected) {
        setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
      } else {
        setSelectedRows([...selectedRows, index]);
      }
    }
  };

  const isRowSelected = (index: number) => {
    return selectedRows.includes(index);
  };

  const getSelectionCheckbox = (index: number) => {
    return (
      <SelectionCheckbox
        index={index}
        isSelected={isRowSelected(index)}
        selectionType={selectionType}
        handleRowSelect={handleRowSelect}
      />
    );
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
          <tr className={'header-container'}>
            {selectionType !== 'none' && <th></th>}
            {columns.map((column) => (
              <th
                key={column.key as string}
                onClick={() => handleSort(column.key)}
              >
                {column.label} {getSortIndicator(column.key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {selectionType !== 'none' && (
                <td>{getSelectionCheckbox(index)}</td>
              )}
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
