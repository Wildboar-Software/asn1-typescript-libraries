/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1/functional@11";

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

/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitName} The decoded data structure.
 */
export function _decode_OrganizationalUnitName(el: _Element): OrganizationalUnitName {
    return $._decodePrintableString(el);
}

/**
 * @summary Encodes a(n) OrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationalUnitName(
    value: OrganizationalUnitName,
    elGetter: $.ASN1Encoder<OrganizationalUnitName>
) {
    return $._encodePrintableString(value, elGetter);
}


/* eslint-enable */
