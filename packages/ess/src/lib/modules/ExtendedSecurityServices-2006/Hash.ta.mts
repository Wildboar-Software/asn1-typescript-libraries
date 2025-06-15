/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary Hash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Hash  ::=  OCTET STRING
 * ```
 */
export type Hash = OCTET_STRING; // OctetStringType




export const _decode_Hash = $._decodeOctetString;




export const _encode_Hash = $._encodeOctetString;


/* eslint-enable */
