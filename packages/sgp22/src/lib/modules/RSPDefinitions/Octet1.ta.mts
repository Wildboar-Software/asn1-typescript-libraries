/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet1  ::=  OCTET STRING(SIZE(1))
 * ```
 */
export
type Octet1 = OCTET_STRING; // OctetStringType
export const _decode_Octet1 = $._decodeOctetString;
export const _encode_Octet1 = $._encodeOctetString;


/* eslint-enable */
