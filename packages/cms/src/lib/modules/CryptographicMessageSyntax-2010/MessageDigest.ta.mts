/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
