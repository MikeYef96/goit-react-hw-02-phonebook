import React from 'react';
import { ButtonFn } from '../../lib/ButtonFn';

export function ListItem({ name, number, onDeleteContact }) {
  return (
    <>
      <p>{name}</p>
      <span>{number}</span>
      <ButtonFn name="delete" type="button" onClick={onDeleteContact} />
    </>
  );
}
