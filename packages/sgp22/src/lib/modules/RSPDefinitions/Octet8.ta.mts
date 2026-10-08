/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet8  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type Octet8 = OCTET_STRING; // OctetStringType
export const _decode_Octet8 = $._decodeOctetString;
export const _encode_Octet8 = $._encodeOctetString;


/* eslint-enable */
