import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InitiatorOfServiceChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiatorOfServiceChange ::= ENUMERATED {
 *  a-side			(0),
 *  b-side			(1)
 *  }
 * ```
 *
 */
export enum _enum_for_InitiatorOfServiceChange {
    a_side = 0,
    b_side = 1,
}
export type InitiatorOfServiceChange = _enum_for_InitiatorOfServiceChange;
export const InitiatorOfServiceChange: typeof _enum_for_InitiatorOfServiceChange = _enum_for_InitiatorOfServiceChange;
export const InitiatorOfServiceChange_a_side: _enum_for_InitiatorOfServiceChange.a_side = InitiatorOfServiceChange.a_side;
export const a_side: _enum_for_InitiatorOfServiceChange.a_side = InitiatorOfServiceChange.a_side;
export const InitiatorOfServiceChange_b_side: _enum_for_InitiatorOfServiceChange.b_side = InitiatorOfServiceChange.b_side;
export const b_side: _enum_for_InitiatorOfServiceChange.b_side = InitiatorOfServiceChange.b_side;
export const _decode_InitiatorOfServiceChange: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_InitiatorOfServiceChange: $.ASN1Encoder<number> = $._encodeEnumerated;
