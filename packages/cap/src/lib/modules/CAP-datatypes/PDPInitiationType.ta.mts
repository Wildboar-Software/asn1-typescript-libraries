import {
    ENUMERATED,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PDPInitiationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDPInitiationType ::= ENUMERATED {
 mSInitiated				(0),
 networkInitiated			(1)
 }
 * ```
 *
 */
export enum _enum_for_PDPInitiationType {
    mSInitiated = 0,
    networkInitiated = 1,
}
export type PDPInitiationType = _enum_for_PDPInitiationType;
export const PDPInitiationType = _enum_for_PDPInitiationType;
export const PDPInitiationType_mSInitiated: PDPInitiationType = PDPInitiationType.mSInitiated;
export const mSInitiated: PDPInitiationType = PDPInitiationType.mSInitiated;
export const PDPInitiationType_networkInitiated: PDPInitiationType = PDPInitiationType.networkInitiated;
export const networkInitiated: PDPInitiationType = PDPInitiationType.networkInitiated;
export const _decode_PDPInitiationType = $._decodeEnumerated;
export const _encode_PDPInitiationType = $._encodeEnumerated;
