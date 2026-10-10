/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Name  ::=  OCTET STRING(SIZE(2))
 * ```
 */
export
type Name = OCTET_STRING; // OctetStringType
export const _decode_Name = $._decodeOctetString;
export const _encode_Name = $._encodeOctetString;


/* eslint-enable */
