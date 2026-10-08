/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Octet4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Octet4  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type Octet4 = OCTET_STRING; // OctetStringType
export const _decode_Octet4 = $._decodeOctetString;
export const _encode_Octet4 = $._encodeOctetString;


/* eslint-enable */
