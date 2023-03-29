import React, { useEffect, useState } from 'react';
import AddEvent from './components/AddEvent';
import EventList from './components/EventList';
import { fetchData } from './utils/fetchData';
import styles from './App.module.css';

interface Event {
  id: number;
  title: string;
  date: string;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const data = await fetchData();
      setEvents(data);
    }

    fetchEvents();
  }, []);

  const addEvent = (event: { title: string; date: string }) => {
    const newEvent: Event = {
      id: Date.now(),
      title: event.title,
      date: event.date,
    };
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.appContent}>
        <h1>Mini Event Manager</h1>
        <AddEvent onAdd={addEvent} />
        <EventList events={events} onDelete={deleteEvent} />
      </div>
    </div>
  );
};

export default App;
