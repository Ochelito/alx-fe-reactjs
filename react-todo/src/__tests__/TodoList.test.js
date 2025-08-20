import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("New todo");
    const addButton = screen.getByText("Add");

    userEvent.type(input, "Write tests");
    userEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = screen.getAllByText("Delete")[1]; // second button matches
    userEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
