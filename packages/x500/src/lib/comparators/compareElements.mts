import { ASN1Element, ASN1Construction, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

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
 * @description
 *
 * The same comparison as `compareElements` in `@wildboar/gn` and
 * `@wildboar/ldap`. Tags must match. Two values of the same construction are
 * equal when their content octets are equal. A primitive value and a
 * constructed value match only for universal string, octet, and time types,
 * and only after the constructed value is deconstructed. `BIT STRING` is not
 * deconstructed.
 *
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
        // Constructed content includes fragment TLV headers. Compare lengths
        // and bytes only after deconstruction, not against those encoded octets.
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
