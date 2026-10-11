import { ASN1ConstructionError, BERElement } from "@wildboar/asn1";

/**
 * @summary Decode exactly one BER element.
 * @description
 *
 * The element's value is a view of `bytes`, not a copy.
 *
 * @param bytes The BER encoding of the element.
 * @param typeName The ASN.1 type expected, for error messages.
 * @returns The element.
 * @throws {ASN1Error} If `bytes` is not exactly one BER element.
 * @function
 */
export
function decodeBERElement (bytes: Uint8Array, typeName: string): BERElement {
    const el = new BERElement();
    if (el.fromBytes(bytes, true) !== bytes.length) {
        throw new ASN1ConstructionError(`trailing bytes after ${typeName}`, el);
    }
    return el;
}

export default decodeBERElement;
