/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary MgtOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtOctetString  ::=  OCTET STRING
 * ```
 */
export type MgtOctetString = OCTET_STRING; // OctetStringType


export const _decode_MgtOctetString = $._decodeOctetString;


export const _encode_MgtOctetString = $._encodeOctetString;


/* eslint-enable */
