/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary RandomNonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RandomNonce  ::=  OCTET STRING (SIZE(4..MAX))
 * ```
 */
export type RandomNonce = OCTET_STRING; // OctetStringType




export const _decode_RandomNonce = $._decodeOctetString;




export const _encode_RandomNonce = $._encodeOctetString;


/* eslint-enable */
