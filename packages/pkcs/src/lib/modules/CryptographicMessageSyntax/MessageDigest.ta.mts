/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary MessageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDigest  ::=  OCTET STRING
 * ```
 */
export type MessageDigest = OCTET_STRING; // OctetStringType




export const _decode_MessageDigest = $._decodeOctetString;




export const _encode_MessageDigest = $._encodeOctetString;


/* eslint-enable */
