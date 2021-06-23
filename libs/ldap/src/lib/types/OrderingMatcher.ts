import type { AttributeValue } from "../modules/Lightweight-Directory-Access-Protocol-V3/AttributeValue.ta";

export
type OrderingMatcher = (assertion: AttributeValue, value: AttributeValue) => number;

export default OrderingMatcher;
