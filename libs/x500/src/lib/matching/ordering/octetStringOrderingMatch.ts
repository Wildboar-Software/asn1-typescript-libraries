import OrderingMatcher from "../../types/OrderingMatcher";
import type { ASN1Element } from "asn1-ts";

export
const octetStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: Uint8Array = assertion.octetString;
    const v: Uint8Array = value.octetString;
    const len: number = Math.min(a.length, v.length);
    for (let i = 0; i < len; i++) {
        if (v[i] !== a[i]) {
            return (v[i] - a[i]);
        }
    }
    return (v.length - a.length);
}

export default octetStringOrderingMatch;
