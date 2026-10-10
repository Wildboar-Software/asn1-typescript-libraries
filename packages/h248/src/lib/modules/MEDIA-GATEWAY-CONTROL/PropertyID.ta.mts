/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PropertyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PropertyID  ::=  OCTET STRING
 * ```
 */
export
type PropertyID = OCTET_STRING; // OctetStringType
export const _decode_PropertyID = $._decodeOctetString;
export const _encode_PropertyID = $._encodeOctetString;


/* eslint-enable */
