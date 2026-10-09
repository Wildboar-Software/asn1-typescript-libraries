/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AES_IV
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AES-IV  ::=  OCTET STRING (SIZE(16))
 * ```
 */
export
type AES_IV = OCTET_STRING; // OctetStringType

export const _decode_AES_IV = $._decodeOctetString;
export const _encode_AES_IV = $._encodeOctetString;


/* eslint-enable */
