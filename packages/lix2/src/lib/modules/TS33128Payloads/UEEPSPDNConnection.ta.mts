/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEEPSPDNConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEEPSPDNConnection  ::=  OCTET STRING
 * ```
 */
export
type UEEPSPDNConnection = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UEEPSPDNConnection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UEEPSPDNConnection = $._decodeOctetString;

/**
 * @summary Encodes a(n) UEEPSPDNConnection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UEEPSPDNConnection, encoded as an ASN.1 Element.
 */
export const _encode_UEEPSPDNConnection = $._encodeOctetString;


/* eslint-enable */
