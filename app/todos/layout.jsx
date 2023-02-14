import TodoList from "@/components/TodoList";
import React from "react";

function TodoLayout({ children }) {
  return (
    <main className="flex">
      <div>
        <TodoList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default TodoLayout;
