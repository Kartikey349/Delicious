import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom"; //to run toBeintheDocument
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("should load header component with the login button", ()=> {
    render(
        //we have to import store and provide it to component cause testing library cant understand redux used in the component and cant able to render redux 
        <BrowserRouter> //qki Link use ho rha hai component me
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    //const loginButton = screen.getByRole("button", { name: "login"});

    expect(loginButton).toBeInTheDocument();
})

it("should render the header with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("(0)");

    expect(cartItems).toBeInTheDocument();
})

it("should change login button to logout", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button", { name: "Login"});

    fireEvent.click(loginButton);//for button clicking

    const logoutButton = screen.getByRole("button", { name: "Logout"})

    expect(logoutButton).toBeInTheDocument();
})
