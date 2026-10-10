/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecurityParmIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityParmIndex  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type SecurityParmIndex = OCTET_STRING; // OctetStringType
export const _decode_SecurityParmIndex = $._decodeOctetString;
export const _encode_SecurityParmIndex = $._encodeOctetString;


/* eslint-enable */
