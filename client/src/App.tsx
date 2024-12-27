import { MantineProvider, Box } from '@mantine/core';
import useSWR from 'swr';
import AddTodo from '../components/AddTodo';
import './App.css';

export const ENDPOINT = 'http://localhost:5173/api';

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((res) => res.json());

function App() {
  const { data, mutate } = useSWR('api/todos', fetcher);

  return (
    <MantineProvider>
      <Box>
        {JSON.stringify(data)}
        <AddTodo />
      </Box>
    </MantineProvider>
  );
}

export default App;
