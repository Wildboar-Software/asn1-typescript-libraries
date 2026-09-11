import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

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
export const _decode_CorrelationID = _decode_Digits;
export const _encode_CorrelationID = _encode_Digits;
