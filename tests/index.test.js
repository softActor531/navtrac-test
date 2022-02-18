import React from "react";
import {configure, shallow} from "enzyme";
import { expect } from "chai";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from "../pages/index.js";
import { TextField, Button } from "@mui/material";

configure({
    adapter: new Adapter()
 });

describe('Testing <Home /> component', () => {
    const wrapper = shallow(<Home />);
    it("Home should render NavAlert component", () => {
        expect(wrapper.find("NavAlert")).to.have.length(1);
    })
    it("Home should render 6 input elements", () => {
        expect(wrapper.find(TextField)).to.have.length(6);
    })
    it("Home should render 1 submit button", () => {
        expect(wrapper.find(Button)).to.have.length(1);
    })
})