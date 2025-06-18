import { ASN1Element, ASN1Construction, ASN1TagClass, ASN1UniversalType } from "asn1-ts";

const deconstructableTypes: Set<ASN1UniversalType> = new Set([
    // ASN1UniversalType.bitString,
    ASN1UniversalType.octetString,
    ASN1UniversalType.objectDescriptor,
    ASN1UniversalType.utf8String,
    ASN1UniversalType.numericString,
    ASN1UniversalType.printableString,
    ASN1UniversalType.teletexString,
    ASN1UniversalType.videotexString,
    ASN1UniversalType.ia5String,
    ASN1UniversalType.utcTime,
    ASN1UniversalType.generalizedTime,
    ASN1UniversalType.graphicString,
    ASN1UniversalType.visibleString,
    ASN1UniversalType.generalString,
    ASN1UniversalType.universalString,
    ASN1UniversalType.bmpString,
]);

/**
 * @summary Compare two ASN.1 elements
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
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
    else { // If one is constructed and the other is not, and...
        // The elements are not of tag class UNIVERSAL...
        if (a.tagClass !== ASN1TagClass.universal) {
            // We have no understood way of comparing them.
            return false;
        }
        // If we cannot deconstruct a constructed value of this type, we cannot
        // compare them.
        if (!deconstructableTypes.has(a.tagNumber)) {
            return false;
        }
        const primitiveAValue = (a.construction === ASN1Construction.constructed)
            ? a.deconstruct("?")
            : a.value;
        const primitiveBValue = (b.construction === ASN1Construction.constructed)
            ? b.deconstruct("?")
            : b.value;
        return !Buffer.compare(primitiveAValue, primitiveBValue);
    }
}

export default compareElements;
