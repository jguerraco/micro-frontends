import React, { useState, useEffect } from 'react';
import { Button, Card, ProtectedWrapper } from 'shared-ui';
import styles from './App.module.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('app2-todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('app2-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <ProtectedWrapper requiredRole="admin">
      <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Todo List Application
        </h2>
        <p className={styles.subtitle}>
          A simple todo manager using shared UI components
        </p>
      </header>

      <main className={styles.main}>
        <Card title="Add New Todo">
          <div className={styles.inputGroup}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Enter a new todo..."
              className={styles.input}
            />
            <Button onClick={addTodo} variant="primary">
              Add
            </Button>
          </div>
          
          <div className={styles.stats}>
            <span className={styles.statsText}>
              {totalCount} total, {completedCount} completed
            </span>
            {completedCount > 0 && (
              <Button onClick={clearCompleted} variant="secondary">
                Clear Completed
              </Button>
            )}
          </div>
        </Card>

        {totalCount > 0 && (
          <div className={styles.todoListContainer}>
            <Card title="Todo List">
              <div>
                {todos.map(todo => (
                  <div
                    key={todo.id}
                    className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className={styles.checkbox}
                    />
                    <span
                      className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}
                    >
                      {todo.text}
                    </span>
                    <Button
                      onClick={() => deleteTodo(todo.id)}
                      variant="secondary"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
    </ProtectedWrapper>
  );
};

export default App;