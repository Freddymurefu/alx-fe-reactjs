import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
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
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    expect(todo).not.toHaveClass('completed');

    fireEvent.click(todo);
    expect(todo).toHaveClass('completed');

    fireEvent.click(todo);
    expect(todo).not.toHaveClass('completed');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Write Tests').closest('li');
    const deleteButton = within(todo).getByRole('button', { name: /delete/i });

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });
});
