import BaseSelect from "react-select";
import FixRequiredSelect from "./FixRequiredReactSelect";

const Select = props => (
    <FixRequiredSelect
        {...props}
        SelectComponent={BaseSelect}
        options={props.options}
    />
);

export default Select