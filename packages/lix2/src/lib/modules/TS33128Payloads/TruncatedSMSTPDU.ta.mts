/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TruncatedSMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TruncatedSMSTPDU  ::=  OCTET STRING (SIZE(1..130))
 * ```
 */
export
type TruncatedSMSTPDU = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TruncatedSMSTPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TruncatedSMSTPDU = $._decodeOctetString;

/**
 * @summary Encodes a(n) TruncatedSMSTPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TruncatedSMSTPDU, encoded as an ASN.1 Element.
 */
export const _encode_TruncatedSMSTPDU = $._encodeOctetString;


/* eslint-enable */
