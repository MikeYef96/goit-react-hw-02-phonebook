import React from 'react';
import { ListItem } from './ListItem';
import { Filter } from '../Filter';
import css from './ContactList.module.css';

export const ContactList = ({
  length,
  contacts,
  onDeleteContact,
  onChangeFilter,
  value,
}) => (
  <>
    <h2>Contacts</h2>
    {length > 0 && <Filter value={value} onChangeFilter={onChangeFilter} />}
    <ul>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <ListItem
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  </>
);
