import React from 'react';
import Event from './Event';
import styles from './EventList.module.css';

interface EventProps {
  events: { id: number; title: string; date: string }[];
  onDelete: (id: number) => void;
}

const EventList: React.FC<EventProps> = ({ events, onDelete }) => {
  return (
    <div className={styles.list}>
      {events.map((event) => (
        <Event key={event.id} title={event.title} date={event.date} onDelete={() => onDelete(event.id)} />
      ))}
    </div>
  );
};

export default EventList;
