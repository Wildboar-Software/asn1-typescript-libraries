import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";

/**
 * @summary AssistingSSPIPRoutingAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssistingSSPIPRoutingAddress {PARAMETERS-BOUND : bound} ::= Digits {bound}
 * ```
 *
 */
export type AssistingSSPIPRoutingAddress = Digits;
export const _decode_AssistingSSPIPRoutingAddress = _decode_Digits;
export const _encode_AssistingSSPIPRoutingAddress = _encode_Digits;
