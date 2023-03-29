export async function fetchData() {
  return new Promise<{ id: number; title: string; date: string }[]>(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Event 1', date: '2023-04-01' },
        { id: 2, title: 'Event 2', date: '2023-04-15' },
      ]);
    }, 1000);
  });
}
