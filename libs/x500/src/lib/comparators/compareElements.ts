import { ASN1Element, ASN1Construction } from "asn1-ts";
import compareUint8Arrays from "./compareUint8Arrays";

export
function compareElements (a: ASN1Element, b: ASN1Element): boolean {
    if (
        (a.tagClass !== b.tagClass)
        || (a.tagNumber !== b.tagNumber)
    ) {
        return false;
    }
    if (
        (a.construction === ASN1Construction.primitive)
        && (b.construction === ASN1Construction.primitive)
    ) {
        return compareUint8Arrays(a.value, b.value);
    }
    else if (
        (a.construction === ASN1Construction.constructed)
        && (b.construction === ASN1Construction.constructed)
    ) {
        return compareUint8Arrays(a.value, b.value);
    }
    else {
        return false;
    }
}

export default compareElements;
