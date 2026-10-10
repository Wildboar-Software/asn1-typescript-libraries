/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TS36413CoarseUELocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TS36413CoarseUELocation  ::=  OCTET STRING
 * ```
 */
export
type TS36413CoarseUELocation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TS36413CoarseUELocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TS36413CoarseUELocation = $._decodeOctetString;

/**
 * @summary Encodes a(n) TS36413CoarseUELocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TS36413CoarseUELocation, encoded as an ASN.1 Element.
 */
export const _encode_TS36413CoarseUELocation = $._encodeOctetString;


/* eslint-enable */
