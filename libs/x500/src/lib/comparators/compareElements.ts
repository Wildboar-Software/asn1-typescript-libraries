import { ASN1Element, ASN1Construction } from "asn1-ts";

export
function compareElements (a: ASN1Element, b: ASN1Element): boolean {
    if (
        (a.tagClass !== b.tagClass)
        || (a.tagNumber !== b.tagNumber)
        || (a.value.length !== b.value.length)
    ) {
        return false;
    }
    if (
        (a.construction === ASN1Construction.primitive)
        && (b.construction === ASN1Construction.primitive)
    ) {
        return (Buffer.compare(a.value, b.value) === 0);
    }
    else if (
        (a.construction === ASN1Construction.constructed)
        && (b.construction === ASN1Construction.constructed)
    ) {
        return (Buffer.compare(a.value, b.value) === 0);
    }
    else { // If one is constructed and the other is not, all bets are off.
        return false;
    }
}

export default compareElements;
