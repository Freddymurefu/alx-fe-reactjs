import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    // Initially not completed
    expect(todo).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo); // toggle
    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo); // toggle back
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Write Tests');
    const deleteButton = todo.nextSibling; // the button

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });
});
