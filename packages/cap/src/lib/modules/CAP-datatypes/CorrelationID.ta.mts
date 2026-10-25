import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";
import type { ASN1Decoder, ASN1Encoder } from "@wildboar/asn1/functional";

/**
 * @summary CorrelationID
 * @description
 *
 * Used by the gsmSCF to correlate with a previous operation. Generic Number in
 * AssistRequestInstructions; Generic Digits in EstablishTemporaryConnection
 * (always BCD). May contain a Hex B address signal (Annex A.6).
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelationID {PARAMETERS-BOUND : bound} ::= Digits {bound}
 * ```
 *
 */
export type CorrelationID = Digits;
export const _decode_CorrelationID: ASN1Decoder<OCTET_STRING> = _decode_Digits;
export const _encode_CorrelationID: ASN1Encoder<OCTET_STRING> = _encode_Digits;
