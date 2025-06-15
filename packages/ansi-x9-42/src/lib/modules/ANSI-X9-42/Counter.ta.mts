/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


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
