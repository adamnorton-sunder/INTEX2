import React from 'react';

interface FilterButtonProps {
  isSelected: boolean;
  name: string;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const { isSelected, name, onClick } = props;

  const buttonStyle = {
    backgroundColor: isSelected ? '#ef9e12' : 'transparent',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '25px',
    border: '2px solid #ef9e12',
    cursor: 'pointer',
    minWidth: '80px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {name}
    </button>
  );
}

export default FilterButton;
