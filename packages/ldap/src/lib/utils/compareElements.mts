import { ASN1Element, ASN1Construction, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

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

/**
 * Concatenate the primitive contents of a constructed string-like type.
 * Inner encodings must be of the same type as the outer element, as in
 * X.690 constructed encoding of octet strings and restricted character
 * strings. Recurses so nested partitions are flattened.
 */
function primitiveContents (el: ASN1Element): Uint8Array | undefined {
    if (el.construction === ASN1Construction.primitive) {
        return el.value;
    }
    try {
        const parts: Uint8Array[] = [];
        for (const part of el.sequence) {
            if (
                (part.tagClass !== el.tagClass)
                || (part.tagNumber !== el.tagNumber)
            ) {
                return undefined;
            }
            const inner = primitiveContents(part);
            if (!inner) {
                return undefined;
            }
            parts.push(inner);
        }
        return Buffer.concat(parts);
    } catch {
        return undefined;
    }
}

/**
 * @summary Compare two ASN.1 elements
 * @author Cursor Grok 4.6
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
        return (
            (a.value.length === b.value.length)
            && (Buffer.compare(a.value, b.value) === 0)
        );
    }
    if (
        (a.tagClass !== ASN1TagClass.universal)
        || !deconstructableTypes.has(a.tagNumber)
    ) {
        if (a.construction !== b.construction) {
            return false;
        }
        return (
            (a.value.length === b.value.length)
            && (Buffer.compare(a.value, b.value) === 0)
        );
    }
    const primitiveAValue = primitiveContents(a);
    const primitiveBValue = primitiveContents(b);
    if (!primitiveAValue || !primitiveBValue) {
        return false;
    }
    return (
        (primitiveAValue.length === primitiveBValue.length)
        && (Buffer.compare(primitiveAValue, primitiveBValue) === 0)
    );
}

export default compareElements;
