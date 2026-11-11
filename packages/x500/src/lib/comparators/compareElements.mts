import {
    type ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import { compareBytes } from "@wildboar/dn";

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
function elementContent(el: ASN1Element, decon: boolean): Uint8Array {
    if (decon && el.construction === ASN1Construction.constructed) {
        return el.deconstruct(el.name || "string");
    }
    return el.value;
}

/**
 * @summary Compare two ASN.1 elements
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export function compareElements(a: ASN1Element, b: ASN1Element): boolean {
    if (
        (a.tagClass !== b.tagClass)
        || (a.tagNumber !== b.tagNumber)
    ) {
        return false;
    }
    const decon = canDeconstruct(a);
    if (decon) {
        return compareBytes(elementContent(a, true), elementContent(b, true)) === 0;
    }
    if (a.construction !== b.construction) {
        return false;
    }
    return compareBytes(a.value, b.value) === 0;
}

export default compareElements;
