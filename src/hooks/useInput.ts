import React, {useState} from 'react';

function useInput() {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return {value, onChange};
}

export default useInput;
