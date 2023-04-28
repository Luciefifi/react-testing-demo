import { render , screen  , waitFor} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Register from "./register";

describe("Register Component", ()=>{
    it("should render register component correctly" , ()=>{
        render(<Register/>);
        const element = screen.getByRole("combobox");
        expect(element).toBeInTheDocument();
    });
    it("should show error message when all fields are not enterd",async ()=>{
        render(<Register/>)
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument()
            
          
    });
    it("should not show any error message when the component is loaded", () => {
        render(<Register />);
        const alertElement = screen.queryByRole("alert");
        expect(alertElement).not.toBeInTheDocument();
    });
});