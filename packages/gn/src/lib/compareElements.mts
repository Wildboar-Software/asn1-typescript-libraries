import {
    type ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import { compareBytes } from "@wildboar/dn";
import { bytesToHex } from "./hex.mjs";

/**
 * @summary Byte-level comparison of two ASN.1 elements
 * @description
 *
 * The same comparison as `compareElements` in `@wildboar/x500` and
 * `@wildboar/ldap`. Tags must match. Two values of the same construction are
 * equal when their content octets are equal. A primitive value and a
 * constructed value match only for universal string, octet, and time types,
 * and only after the constructed value is deconstructed. `BIT STRING` is not
 * deconstructed.
 *
 * Byte equality uses {@link compareBytes}, which has the same zero-result as
 * `Buffer.compare`.
 *
 * {@link elementKey} agrees with this function for a primitive value and a
 * constructed value of a deconstructable type. Two constructed encodings of
 * the same characters share a key even when their fragment encodings differ;
 * this function compares those encodings byte-for-byte.
 *
 * @internal
 */

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

function canDeconstruct(el: ASN1Element): boolean {
    return el.tagClass === ASN1TagClass.universal
        && deconstructableTypes.has(el.tagNumber);
}

/**
 * @summary Content octets used by {@link elementKey}
 * @description
 *
 * A constructed deconstructable value is reduced with `deconstruct`, which
 * walks nested fragments and concatenates them. Those fragments are
 * `OCTET STRING`s, which is the default `deconstruct` expects. Anything else
 * contributes its raw content octets.
 *
 * @internal
 */
export function elementContent(el: ASN1Element): Uint8Array {
    if (canDeconstruct(el) && el.construction === ASN1Construction.constructed) {
        return el.deconstruct(el.name || "string");
    }
    return el.value;
}

/**
 * @summary Compare two ASN.1 elements
 * @internal
 */
export function compareElements(a: ASN1Element, b: ASN1Element): boolean {
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
        return compareBytes(a.value, b.value) === 0;
    }
    else if (
        (a.construction === ASN1Construction.constructed)
        && (b.construction === ASN1Construction.constructed)
    ) {
        return compareBytes(a.value, b.value) === 0;
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
        const primitiveAValue: Uint8Array = (a.construction === ASN1Construction.constructed)
            ? a.deconstruct("?")
            : a.value;
        const primitiveBValue: Uint8Array = (b.construction === ASN1Construction.constructed)
            ? b.deconstruct("?")
            : b.value;
        return compareBytes(primitiveAValue, primitiveBValue) === 0;
    }
}

/**
 * @summary A string key for {@link compareElements}
 * @description
 *
 * Deconstructable types omit the construction and use deconstructed content,
 * so a primitive string and a constructed string of the same characters share
 * a key. Other types include the construction, so a primitive `INTEGER` and a
 * constructed `INTEGER` do not.
 *
 * Two constructed encodings of the same characters also share a key.
 * {@link compareElements} compares those encodings byte-for-byte, so different
 * fragmentations compare unequal.
 *
 * @internal
 */
export function elementKey(el: ASN1Element): string {
    const content: Uint8Array = elementContent(el);
    const construction: string = canDeconstruct(el) ? "" : `.${el.construction}`;
    return `${el.tagClass}${construction}.${el.tagNumber}#${bytesToHex(content)}`;
}

export default compareElements;
