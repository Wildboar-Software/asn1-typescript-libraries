/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Digits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Digits  ::=  OCTET STRING (SIZE(4..9))
 * ```
 */
export
type Digits = OCTET_STRING; // OctetStringType
export const _decode_Digits = $._decodeOctetString;
export const _encode_Digits = $._encodeOctetString;


/* eslint-enable */
