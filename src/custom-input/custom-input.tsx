import React, { ChangeEvent } from "react";
import withLabel from "../with-label/with-label";
import { CustomInputProps } from "./custom-input.types";

const CustomInput: React.FC<CustomInputProps> = ({
	onChange,
	name,
	inputComponent: InputComponent,
	...rest
}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === "function") {
			onChange(e.target.value, name);
		}
	};
	const props = {
		onChange: onChangeHandler,
		...rest,
	};

	return InputComponent ? (
		<InputComponent data-testid="CustomInput" {...props} />
	) : (
		<input data-testid="CustomInput" {...props} />
	);
};

export default withLabel(CustomInput);
