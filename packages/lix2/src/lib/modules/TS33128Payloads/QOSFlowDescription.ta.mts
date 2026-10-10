/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QOSFlowDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowDescription  ::=  OCTET STRING
 * ```
 */
export
type QOSFlowDescription = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_QOSFlowDescription = $._decodeOctetString;

/**
 * @summary Encodes a(n) QOSFlowDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowDescription, encoded as an ASN.1 Element.
 */
export const _encode_QOSFlowDescription = $._encodeOctetString;


/* eslint-enable */
