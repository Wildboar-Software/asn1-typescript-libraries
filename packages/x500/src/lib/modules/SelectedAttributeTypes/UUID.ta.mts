/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
