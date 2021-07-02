import React, { useState } from "react";
import styled from "styled-components";
import { StyledInput, StyledLabel, StyledSpan } from "../common/types";
import CustomInput from "./custom-input";

export default {
	title: "CustomInput",
};

const StyledInputComponent: StyledInput = styled.input`
	width: 75%;
	border: solid 5px #2c1091;
`;

const StyledLabelComponent: StyledLabel = styled.label`
	color: #2c1091;
`;

const StyledSpanComponent: StyledSpan = styled.span`
	font-size: larger;
`;

export const WithStyledComponent = () => {
	const [value, setValue] = useState("");
	return (
		<CustomInput
			value={value}
			onChange={setValue}
			name="withStyledComponent"
			inputComponent={StyledInputComponent}
		/>
	);
};

export const WithoutStyledComponent = () => {
	const [value, setValue] = useState("");
	return (
		<CustomInput
			value={value}
			onChange={setValue}
			name="withoutStyledComponent"
		/>
	);
};

export const WithLabelAndStyledComponent = () => {
	const [value, setValue] = useState("");
	return (
		<CustomInput
			text="This is label"
			value={value}
			onChange={setValue}
			name="withStyledComponent"
			inputComponent={StyledInputComponent}
			labelComponent={StyledLabelComponent}
			labelTextComponent={StyledSpanComponent}
		/>
	);
};
