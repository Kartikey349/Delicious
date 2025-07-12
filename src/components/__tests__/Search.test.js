import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

//creating a mock of how fetch func works
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render the Body Component with search", async () => {
    
    await act( async() => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))
    

})