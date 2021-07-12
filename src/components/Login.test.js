import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "./Login";

describe("<Login />", () => {
  test("render email input", () => {
    render(<Login />);
    // for input 1 email--
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");

    // for input 2 -- pass
    const inputE2 = screen.getByTestId("email-input1");
    expect(inputE2).toBeInTheDocument();
    expect(inputE2).toHaveAttribute("type", "password");
  });

  test("pass valid email to test email input field", () => {
    render(<Login />);
    // for email validattion
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");

    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();

    // for pasword validation
    const inputE2 = screen.getByTestId("email-input1");
    userEvent.type(inputE2, "ewgen@123");

    expect(screen.getByTestId("email-input1")).toHaveValue("ewgen@123");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("pass invalid email to test input value", () => {
    render(<Login />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test");

    expect(screen.getByTestId("email-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual(
      "Please enter a valid email."
    );
  });
});
