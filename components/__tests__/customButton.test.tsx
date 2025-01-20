import React from "react";
import { TouchableOpacity } from "react-native";
import renderer from "react-test-renderer";
import { CustomButton } from "@/components";

describe("CustomButton Component", () => {
  it("renders correctly with default props", () => {
    const tree = renderer
      .create(<CustomButton title="Click Me" onPress={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom styles", () => {
    const tree = renderer
      .create(
        <CustomButton
          title="Styled Button"
          onPress={() => {}}
          buttonStyle={{ backgroundColor: "blue" }}
          textStyle={{ color: "white" }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("disables the button when disabled prop is true", () => {
    const tree = renderer
      .create(
        <CustomButton
          title="Disabled Button"
          onPress={() => {}}
          disabled={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onPress when pressed", () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(
      <CustomButton title="Press Me" onPress={mockOnPress} />
    );
    const button = component.root.findByType(TouchableOpacity);
    button.props.onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });
});
