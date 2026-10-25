/* eslint-disable */
import { ASN1Element as _Element, type BIT_STRING } from "@wildboar/asn1";
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


export const _decode_AltSignatureValue: $.ASN1Decoder<BIT_STRING> = $._decodeBitString;


export const _encode_AltSignatureValue: $.ASN1Encoder<BIT_STRING> = $._encodeBitString;


/* eslint-enable */
