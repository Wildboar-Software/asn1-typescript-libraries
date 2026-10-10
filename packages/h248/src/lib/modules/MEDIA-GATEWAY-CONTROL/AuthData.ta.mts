/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthData  ::=  OCTET STRING (SIZE (12..32))
 * ```
 */
export
type AuthData = OCTET_STRING; // OctetStringType
export const _decode_AuthData = $._decodeOctetString;
export const _encode_AuthData = $._encodeOctetString;


/* eslint-enable */
