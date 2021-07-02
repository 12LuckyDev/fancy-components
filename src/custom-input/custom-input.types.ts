import { StyledInput } from "../common/types";
import { WithLabelProps } from "../with-label/with-label.types";

export interface CustomInputProps extends WithLabelProps {
	value: string;
	onChange: (value: string, name?: string) => void;
	name?: string;
	type?: string;
	inputComponent?: StyledInput;
}
