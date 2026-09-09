import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

/**
 * @summary AdditionalCallingPartyNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalCallingPartyNumber {PARAMETERS-BOUND : bound} ::= Digits {bound}
 * ```
 *
 */
export type AdditionalCallingPartyNumber = Digits;
export const _decode_AdditionalCallingPartyNumber = _decode_Digits;
export const _encode_AdditionalCallingPartyNumber = _encode_Digits;
