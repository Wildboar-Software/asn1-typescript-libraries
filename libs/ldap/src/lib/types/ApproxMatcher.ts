import type { AttributeValue } from "../modules/Lightweight-Directory-Access-Protocol-V3/AttributeValue.ta";

export
type ApproxMatcher = (assertion: AttributeValue, value: AttributeValue) => boolean;

export default ApproxMatcher;
