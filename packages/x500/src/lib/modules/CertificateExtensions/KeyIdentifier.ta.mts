/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary KeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyIdentifier  ::=  OCTET STRING
 * ```
 */
export type KeyIdentifier = OCTET_STRING; // OctetStringType


export const _decode_KeyIdentifier = $._decodeOctetString;


export const _encode_KeyIdentifier = $._encodeOctetString;


/* eslint-enable */
