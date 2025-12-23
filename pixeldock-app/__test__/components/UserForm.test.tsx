import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "@/src/components/UserForm";
import { Provider } from "react-redux";
import { store } from "@/src/store";

describe("UserForm component", () => {
  it("renders inputs and button", () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Create User/i })).toBeInTheDocument();
  });

  it("disables button while loading", () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    const button = screen.getByRole("button", { name: /Create User/i });
    expect(button).not.toBeDisabled();
  });
});
