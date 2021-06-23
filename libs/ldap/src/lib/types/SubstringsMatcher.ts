import type { AttributeValue } from "../modules/Lightweight-Directory-Access-Protocol-V3/AttributeValue.ta";
import SubstringSelection from "./SubstringSelection";

export
type SubstringsFunction = (
    assertion: AttributeValue,
    value: AttributeValue,
    selection?: SubstringSelection,
) => boolean;

export default SubstringsFunction;
