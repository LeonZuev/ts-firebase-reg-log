import React, { useEffect, useState } from 'react';
import {
  DocumentData, addDoc, collection,
  onSnapshot, orderBy, query, serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../api/firebase';

export default function Todos(): JSX.Element {
  const [todos, setTodos] = useState<DocumentData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [input, setInput] = useState('');
  const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        item: doc.data()
      })));
    });
  }, [input, q]);

  const addTodo = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    addDoc(collection(db, 'todos'), {
      todo: input,
      timestamp: serverTimestamp()
    });
    setInput('');
  };

  return (
    <>
      <div>Todos</div>
      <form onSubmit={addTodo} name="add_todo">
        <input
          type="text"
          value={input}
          required
          placeholder="What to do?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todos.map((el) => (
        <div key={el.id}>
          {el.item.todo}
        </div>
      ))}
    </>
  );
}
