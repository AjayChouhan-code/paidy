import React from "react";
import renderer from "react-test-renderer";
import { CustomInput } from "../customInput";

describe("CustomInput Component", () => {
  it("renders correctly with required props", () => {
    const tree = renderer
      .create(
        <CustomInput label="Username" placeholder="Enter your username" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies custom styles", () => {
    const tree = renderer
      .create(
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          style={{ borderColor: "red" }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays an error message", () => {
    const tree = renderer
      .create(
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          error="Invalid email address"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("passes props to TextInput", () => {
    const tree = renderer
      .create(
        <CustomInput
          label="Username"
          placeholder="Enter your username"
          keyboardType="email-address"
          maxLength={20}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
