/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeOfDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOfDay ::= OCTET STRING -- (SIZE (4 | 6))
 * ```
 */
export
type TimeOfDay = OCTET_STRING; // OctetStringType
export const _decode_TimeOfDay = $._decodeOctetString;
export const _encode_TimeOfDay = $._encodeOctetString;


/* eslint-enable */
