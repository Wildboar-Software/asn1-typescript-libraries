import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

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
