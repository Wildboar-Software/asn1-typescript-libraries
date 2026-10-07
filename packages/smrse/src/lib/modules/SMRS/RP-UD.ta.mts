/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RP_UD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-UD  ::=  OCTET STRING (SIZE (1..164))
 * ```
 */
export
type RP_UD = OCTET_STRING; // OctetStringType
export const _decode_RP_UD = $._decodeOctetString;
export const _encode_RP_UD = $._encodeOctetString;


/* eslint-enable */
