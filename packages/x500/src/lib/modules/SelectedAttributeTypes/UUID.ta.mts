/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary UUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type UUID = OCTET_STRING; // OctetStringType


export const _decode_UUID = $._decodeOctetString;


export const _encode_UUID = $._encodeOctetString;


/* eslint-enable */
