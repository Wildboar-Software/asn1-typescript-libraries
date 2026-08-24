/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeID
 * @description
 *
 * Wrapper invocation id: OCTET STRING SIZE (6). First 3 octets are ASCII
 * `REQ` (data request) or `RSP` (data response); last 3 are numerals
 * `000`–`127` from the protected protocol. Optional on data-transfer AAD.
 * Distinct from AVMP/CASP INTEGER InvokeID (0..127).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export type InvokeID = OCTET_STRING; // OctetStringType


export const _decode_InvokeID = $._decodeOctetString;


export const _encode_InvokeID = $._encodeOctetString;


/* eslint-enable */
