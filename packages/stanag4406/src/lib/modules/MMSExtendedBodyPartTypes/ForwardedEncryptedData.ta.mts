/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardedEncryptedData
 * @description
 * 
 * The original encrypted message, forwarded because the UA could not decrypt
 * it. Not for content exchanged between nations except by bilateral agreement.
 * S/MIME-protected messages use the forwarded-content body part of Annex B
 * instead. STANAG 4406 (Ed. 2), Annex A, clause 7.3.12.3, B1.3, and 18.5.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardedEncryptedData  ::=  BIT STRING
 * ```
 */
export
type ForwardedEncryptedData = BIT_STRING;
export const _decode_ForwardedEncryptedData: $.ASN1Decoder<ForwardedEncryptedData> = $._decodeBitString;
export const _encode_ForwardedEncryptedData: $.ASN1Encoder<ForwardedEncryptedData> = $._encodeBitString;


/* eslint-enable */
