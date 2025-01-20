import React from "react";
import renderer from "react-test-renderer";
import { useNavigation } from "@react-navigation/native";
import HeaderWithBackButton from "../headerWithBackButton";
import { TouchableOpacity } from "react-native";

// Mock the useNavigation hook
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  return {
    Ionicons: (props) => React.createElement("Icon", props),
  };
});

describe("HeaderWithBackButton Component", () => {
  const mockGoBack = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      goBack: mockGoBack,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with a title", () => {
    const tree = renderer
      .create(<HeaderWithBackButton title="Test Title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls navigation.goBack when back button is pressed", () => {
    const component = renderer.create(
      <HeaderWithBackButton title="Test Title" />
    );
    const backButton = component.root.findByType(TouchableOpacity);

    backButton.props.onPress();
    expect(mockGoBack).toHaveBeenCalled();
  });

  it("renders the back icon", () => {
    const component = renderer.create(
      <HeaderWithBackButton title="Test Title" />
    );
    const icon = component.root.findByType("Icon");

    expect(icon.props.name).toBe("arrow-back");
    expect(icon.props.size).toBe(24);
    expect(icon.props.color).toBe("black");
  });

  it("displays the correct title", () => {
    const component = renderer.create(
      <HeaderWithBackButton title="Custom Header" />
    );
    const text = component.root.findByType("Text");

    expect(text.props.children).toBe("Custom Header");
  });
});
