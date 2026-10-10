/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WildcardField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WildcardField  ::=  OCTET STRING(SIZE(1))
 * ```
 */
export
type WildcardField = OCTET_STRING; // OctetStringType
export const _decode_WildcardField = $._decodeOctetString;
export const _encode_WildcardField = $._encodeOctetString;


/* eslint-enable */
