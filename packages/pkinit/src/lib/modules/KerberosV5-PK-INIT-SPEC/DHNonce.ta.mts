/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DHNonce
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DHNonce  ::=  OCTET STRING
 * ```
 */
export
type DHNonce = OCTET_STRING; // OctetStringType
export const _decode_DHNonce = $._decodeOctetString;
export const _encode_DHNonce = $._encodeOctetString;


/* eslint-enable */
