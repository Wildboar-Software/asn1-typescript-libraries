/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet32
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet32  ::=  OCTET STRING (SIZE(32))
 * ```
 */
export
type Octet32 = OCTET_STRING; // OctetStringType
export const _decode_Octet32 = $._decodeOctetString;
export const _encode_Octet32 = $._encodeOctetString;


/* eslint-enable */
