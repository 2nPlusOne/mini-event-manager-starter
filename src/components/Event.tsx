import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './Event.module.css';

interface EventProps {
  title: string;
  date: string;
  onDelete: () => void;
}

const Event: React.FC<EventProps> = ({ title, date, onDelete }) => {
  return (
    <div className={styles.event}>
      <button className={styles.deleteBtn} onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
};

export default Event;
