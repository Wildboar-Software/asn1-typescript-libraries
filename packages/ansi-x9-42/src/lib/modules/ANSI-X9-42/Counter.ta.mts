/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Counter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Counter  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export type Counter = OCTET_STRING; // OctetStringType




export const _decode_Counter = $._decodeOctetString;




export const _encode_Counter = $._encodeOctetString;


/* eslint-enable */
