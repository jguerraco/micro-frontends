import React, { useState, useEffect } from 'react';
import { Button, Card, ProtectedWrapper } from 'shared-ui';

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
      <div style={{ 
        padding: '2rem', 
        fontFamily: 'Arial, sans-serif',
      }}>
      <header style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          color: '#1f2937', 
          fontSize: '1.8rem', 
          marginBottom: '0.5rem' 
        }}>
          Todo List Application
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1rem' }}>
          A simple todo manager using shared UI components
        </p>
      </header>

      <main style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Card title="Add New Todo">
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Enter a new todo..."
              style={{
                flex: 1,
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem',
                fontSize: '1rem',
              }}
            />
            <Button onClick={addTodo} variant="primary">
              Add
            </Button>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'space-between' }}>
            <span style={{ color: '#6b7280' }}>
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
          <div style={{ marginTop: '1rem' }}>
            <Card title="Todo List">
              <div>
                {todos.map(todo => (
                  <div
                    key={todo.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      backgroundColor: todo.completed ? '#f3f4f6' : 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.25rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <span
                      style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#6b7280' : '#1f2937',
                      }}
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