/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "jsr:@wildboar/asn1";
import * as $ from "jsr:@wildboar/asn1/functional";

/**
 * @summary TerminalIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminalIdentifier  ::=  PrintableString(SIZE (1..ub-terminal-id-length))
 * ```
 */
export type TerminalIdentifier = PrintableString; // PrintableString

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminalIdentifier} The decoded data structure.
 */
export function _decode_TerminalIdentifier(el: _Element) {
    return $._decodePrintableString(el);
}

/**
 * @summary Encodes a(n) TerminalIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_TerminalIdentifier(
    value: TerminalIdentifier,
    elGetter: $.ASN1Encoder<TerminalIdentifier>
) {
    return $._encodePrintableString(value, elGetter);
}


/* eslint-enable */
