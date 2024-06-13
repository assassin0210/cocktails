import { render, screen, fireEvent } from "@testing-library/react";
import { Image } from "./Image";
import "@testing-library/jest-dom";

describe("Image component", () => {
  const altText = "Test image";
  const src = "test.jpg";

  it("renders skeleton while image is loading", () => {
    render(<Image alt={altText} src={src} />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
  });

  it("hides skeleton after image loads", () => {
    render(<Image alt={altText} src={src} />);

    const image = screen.getByAltText(altText);
    fireEvent.load(image);

    const skeleton = screen.queryByTestId("skeleton");

    expect(skeleton).not.toBeInTheDocument();

    expect(image).not.toHaveClass("loadingImage");
  });
});
