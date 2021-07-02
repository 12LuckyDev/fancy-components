import React from "react";
import CustomLabel from "./custom-label";
import { StyledLabel, StyledSpan } from "../common/types";
import styled from "styled-components";

export default {
	title: "CustomLabel",
};
const StyledLabelComponent: StyledLabel = styled.label`
	color: #2c1091;
`;

const StyledSpanComponent: StyledSpan = styled.span`
	font-size: larger;
`;

export const WithStyledComponents = () => (
	<CustomLabel
		text="Hello, I'm pretty"
		labelComponent={StyledLabelComponent}
		labelTextComponent={StyledSpanComponent}
	/>
);

export const WithoutStyledComponent = () => (
	<CustomLabel text="Hello, I'm not pretty" />
);
