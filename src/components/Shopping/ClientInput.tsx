import React from 'react';
import { IUserInfo } from '../../types/models';
import {
  helpChangeUserState as helpChange,
  translate,
  translateBack,
} from '../../utils/helpFunc';

export interface IClientInputProps {
  id: 'fio' | 'email' | 'corp' | 'tel';
  userInfo: IUserInfo;
  setInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

const ClientInput: React.FC<IClientInputProps> = ({
  id,
  userInfo,
  setInfo,
}) => {
  const changeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...userInfo, ...helpChange(id, e) });
  };

  return (
    <input
      type={id === ('email' || 'tel') ? id : 'text'}
      id={id}
      value={userInfo[id]}
      onChange={changeUserInfo}
      onFocus={(e) => translate(e, userInfo![id])}
      onBlur={(e) => translateBack(e, userInfo[id])}
    />
  );
};

export default ClientInput;
