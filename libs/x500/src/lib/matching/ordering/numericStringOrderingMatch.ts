import OrderingMatcher from "../../types/OrderingMatcher";
import type { ASN1Element } from "asn1-ts";

export
const numericStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string = assertion.numericString.replace(/\s+/, "");
    const v: string = value.numericString.replace(/\s+/, "");
    if (a === v) {
        return 0;
    }
    const min: number = Math.min(a.length, v.length);
    for (let i = 0; i < min; i++) {
        const charA = a.charCodeAt(i);
        const charV = v.charCodeAt(i);
        if (charA !== charV) {
            return (charV - charA);
        }
    }
    return (v.length - a.length);
}

export default numericStringOrderingMatch;
