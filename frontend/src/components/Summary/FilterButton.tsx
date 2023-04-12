import React from 'react';
import styles from './FilterButton.module.css';
interface FilterButtonProps {
  isSelected: boolean;
  name: string;
  onClick?: () => void;
}



const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const { isSelected, name, onClick } = props;

  const buttonClasses = `${styles.button} ${isSelected ? styles.selected : ''}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {name}
    </button>
  );
}

export default FilterButton;
