import React, { useState } from 'react';
import styles from './AddEvent.module.css';

interface AddEventProps {
  onAdd: (event: { title: string; date: string }) => void;
}

const AddEvent: React.FC<AddEventProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, date });
    setTitle('');
    setDate('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
