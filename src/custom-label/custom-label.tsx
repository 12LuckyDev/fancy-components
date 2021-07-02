import React from "react";
import { CustomLabelProps } from "./custom-label.types";

const CustomLabel: React.FC<CustomLabelProps> = ({
	text,
	labelComponent: LabelComponent,
	labelTextComponent: LabelTextComponent,
	children,
}) => {
	const labelText = LabelTextComponent ? (
		<LabelTextComponent>{text}</LabelTextComponent>
	) : (
		<span>{text}</span>
	);

	return LabelComponent ? (
		<LabelComponent>
			{labelText}
			{children}
		</LabelComponent>
	) : (
		<label data-testid="CustomLabel">
			{labelText}
			{children}
		</label>
	);
};

export default CustomLabel;
