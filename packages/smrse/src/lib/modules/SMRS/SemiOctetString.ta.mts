/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SemiOctetString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemiOctetString  ::=  OCTET STRING
 * ```
 */
export
type SemiOctetString = OCTET_STRING; // OctetStringType
export const _decode_SemiOctetString = $._decodeOctetString;
export const _encode_SemiOctetString = $._encodeOctetString;


/* eslint-enable */
