/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UtranCivicAddress
 * @description
 *
 * Civic address as in 3GPP TS 25.413 (3GPP TS 29.002 V19.1.0 clauses 7.6.11.11G
 * and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtranCivicAddress  ::=  OCTET STRING
 * ```
 */
export
type UtranCivicAddress = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UtranCivicAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UtranCivicAddress = $._decodeOctetString;

/**
 * @summary Encodes a(n) UtranCivicAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtranCivicAddress, encoded as an ASN.1 Element.
 */
export const _encode_UtranCivicAddress = $._encodeOctetString;


/* eslint-enable */
