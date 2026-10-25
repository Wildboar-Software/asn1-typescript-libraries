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
export const NatureOfServiceChange = _enum_for_NatureOfServiceChange;
export const NatureOfServiceChange_userInitiated = NatureOfServiceChange.userInitiated satisfies NatureOfServiceChange;
export const userInitiated = NatureOfServiceChange.userInitiated satisfies NatureOfServiceChange;
export const NatureOfServiceChange_networkInitiated = NatureOfServiceChange.networkInitiated satisfies NatureOfServiceChange;
export const networkInitiated = NatureOfServiceChange.networkInitiated satisfies NatureOfServiceChange;
export const _decode_NatureOfServiceChange = $._decodeEnumerated;
export const _encode_NatureOfServiceChange = $._encodeEnumerated;
