import OrderingMatcher from "../../types/OrderingMatcher.js";
import type { ASN1Element } from "asn1-ts";

export
const numericStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string = assertion.numericString.replace(/\s+/, "");
    const v: string = value.numericString.replace(/\s+/, "");
    return a.localeCompare(v);
}

export default numericStringOrderingMatch;
