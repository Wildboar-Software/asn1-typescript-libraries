import OrderingMatcher from "../../types/OrderingMatcher";
import type { ASN1Element } from "asn1-ts";
import sortUint8Arrays from "../../utils/sortUint8Arrays";

export
const octetStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: Uint8Array = assertion.octetString;
    const v: Uint8Array = value.octetString;
    return sortUint8Arrays(a, v);
}

export default octetStringOrderingMatch;
