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
 * Universal string types (and a few other character strings) compare by
 * character content: a primitive encoding and a constructed encoding of the
 * same characters match, because the constructed form is deconstructed first.
 * Every other type matches only when the tag, the construction, and the
 * content octets are identical.
 *
 * Deconstructing allocates, and it happens only for a constructed string.
 * Two primitive values are compared with {@link compareBytes}, which does not
 * allocate.
 *
 * The key from {@link elementKey} is equal exactly when this function returns
 * `true`.
 *
 * @internal
 */

const deconstructableTypes: Set<ASN1UniversalType> = new Set([
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
 * @summary Content octets used for comparison
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
    if (canDeconstruct(a)) {
        return compareBytes(elementContent(a), elementContent(b)) === 0;
    }
    if (a.construction !== b.construction) {
        return false;
    }
    return compareBytes(a.value, b.value) === 0;
}

/**
 * @summary A string key that matches {@link compareElements}
 * @description
 *
 * Deconstructable types omit the construction, so a primitive string and a
 * constructed string of the same characters share a key. Other types include
 * the construction, so a primitive INTEGER and a constructed INTEGER do not.
 *
 * @internal
 */
export function elementKey(el: ASN1Element): string {
    const content: Uint8Array = elementContent(el);
    const construction: string = canDeconstruct(el) ? "" : `.${el.construction}`;
    return `${el.tagClass}${construction}.${el.tagNumber}#${bytesToHex(content)}`;
}

export default compareElements;
