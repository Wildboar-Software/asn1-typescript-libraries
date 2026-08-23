/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AltSignatureValue
 * @description
 *
 * BIT STRING alternative signature over the TBS with this extension omitted
 * from the input. Always non-critical. Verify with the issuer's alternative
 * public key (`subjectAltPublicKeyInfo` on the issuer cert).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureValue  ::=  BIT STRING
 * ```
 */
export type AltSignatureValue = BIT_STRING;


export const _decode_AltSignatureValue = $._decodeBitString;


export const _encode_AltSignatureValue = $._encodeBitString;


/* eslint-enable */
