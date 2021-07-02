import React from "react";
import CustomLabel from "../custom-label/custom-label";
import { WithLabelProps } from "./with-label.types";

const withLabel =
	<P extends object & WithLabelProps>(Component: React.FC<P>) =>
	({
		text,
		labelComponent,
		labelTextComponent,
		...props
	}: P & WithLabelProps) =>
		text ? (
			<CustomLabel
				text={text}
				labelComponent={labelComponent}
				labelTextComponent={labelTextComponent}
			>
				<Component {...(props as P)} />
			</CustomLabel>
		) : (
			<Component {...(props as P)} />
		);

export default withLabel;
