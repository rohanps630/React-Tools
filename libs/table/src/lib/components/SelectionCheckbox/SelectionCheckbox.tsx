import React from 'react';
import { SelectionType } from '../../@types';
import Styles from './SelectionCheckbox.module.css';

interface Props {
  index: number;
  selectionType: SelectionType;
  isSelected: boolean;
  handleRowSelect: (index: number) => void;
}

export const SelectionCheckbox: React.FC<Props> = ({
  index,
  selectionType,
  isSelected,
  handleRowSelect,
}) => {
  if (selectionType !== 'none') {
    return (
      <div className={Styles.content}>
        <input
          className={Styles.checkBox}
          type={selectionType === 'single' ? 'radio' : 'checkbox'}
          checked={isSelected}
          onChange={() => handleRowSelect(index)}
        />
        <div className={Styles.transition}></div>
      </div>
    );
  }
  return null;
};
