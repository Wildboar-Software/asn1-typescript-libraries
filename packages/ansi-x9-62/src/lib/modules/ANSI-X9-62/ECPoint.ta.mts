/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary ECPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPoint  ::=  OCTET STRING
 * ```
 */
export type ECPoint = OCTET_STRING; // OctetStringType


export const _decode_ECPoint = $._decodeOctetString;


export const _encode_ECPoint = $._encodeOctetString;


/* eslint-enable */
