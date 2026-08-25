/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OrganizationName
 * @description
 *
 * Organization identifier (ITU-T X.402 (1999), §18.3.9). In a mnemonic OR-address,
 * uniqueness may be national or relative to the MD (national matter; a national
 * registration authority is required if names are country-wide unique). In a terminal
 * OR-address the value is free-form and unregistered. Teletex/universal twins are
 * extension attributes.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationName  ::=  PrintableString(SIZE (1..ub-organization-name-length))
 * ```
 */
export type OrganizationName = PrintableString; // PrintableString

/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationName} The decoded data structure.
 */
export const _decode_OrganizationName: $.ASN1Decoder<OrganizationName> = $._decodePrintableString;

/**
 * @summary Encodes a(n) OrganizationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationName, encoded as an ASN.1 Element.
 */
export const _encode_OrganizationName: $.ASN1Encoder<OrganizationName> = $._encodePrintableString;

/* eslint-enable */
