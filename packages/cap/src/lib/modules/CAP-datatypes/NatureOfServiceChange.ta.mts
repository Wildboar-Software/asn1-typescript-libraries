import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NatureOfServiceChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NatureOfServiceChange ::= ENUMERATED {
 *  userInitiated			(0),
 *  networkInitiated			(1)
 *  }
 * ```
 *
 */
export enum _enum_for_NatureOfServiceChange {
    userInitiated = 0,
    networkInitiated = 1,
}
export type NatureOfServiceChange = _enum_for_NatureOfServiceChange;
export const NatureOfServiceChange: typeof _enum_for_NatureOfServiceChange = _enum_for_NatureOfServiceChange;
export const NatureOfServiceChange_userInitiated: _enum_for_NatureOfServiceChange.userInitiated = NatureOfServiceChange.userInitiated;
export const userInitiated: _enum_for_NatureOfServiceChange.userInitiated = NatureOfServiceChange.userInitiated;
export const NatureOfServiceChange_networkInitiated: _enum_for_NatureOfServiceChange.networkInitiated = NatureOfServiceChange.networkInitiated;
export const networkInitiated: _enum_for_NatureOfServiceChange.networkInitiated = NatureOfServiceChange.networkInitiated;
export const _decode_NatureOfServiceChange: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_NatureOfServiceChange: $.ASN1Encoder<number> = $._encodeEnumerated;
