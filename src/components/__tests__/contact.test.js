import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";


describe("Contact page test cases", () => {
    test("Should load contact component", () => {

        render(<Contact />);

        const heading = screen.getByRole("heading");

        //assertion
        expect(heading).toBeInTheDocument();
    })

    //it aur test dono same hein
    it("should load button inside the contact component", () => {
        render(<Contact />)

        //const button = screen.getByRole("button");
        const button = screen.getByText("Submit");

        //assertion
        expect(button).toBeInTheDocument();
    })

    test("should load 2 input inside the contact component", () => {
        render(<Contact />)
        
        //use all when multiple items
        const inputBoxes = screen.getAllByRole("textbox")

        //assertion
        expect(inputBoxes.length).toBe(2)

        //console.log(inputBoxes[0]);
    });
});