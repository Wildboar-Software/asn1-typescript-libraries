/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION OrganizationalUnitName */
/**
 * @summary OrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitName  ::=
 *   PrintableString(SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export type OrganizationalUnitName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitName */
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitName} The decoded data structure.
 */
export function _decode_OrganizationalUnitName(el: _Element) {
    return $._decodePrintableString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitName */
/**
 * @summary Encodes a(n) OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitName(
    value: OrganizationalUnitName,
    elGetter: $.ASN1Encoder<OrganizationalUnitName>
) {
    return $._encodePrintableString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrganizationalUnitName */

/* eslint-enable */
