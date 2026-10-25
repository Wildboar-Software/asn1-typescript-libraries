import {
    type ASN1Element as _Element,
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
 *  mSInitiated				(0),
 *  networkInitiated			(1)
 *  }
 * ```
 *
 */
export enum _enum_for_PDPInitiationType {
    mSInitiated = 0,
    networkInitiated = 1,
}
export type PDPInitiationType = _enum_for_PDPInitiationType;
export const PDPInitiationType = _enum_for_PDPInitiationType;
export const PDPInitiationType_mSInitiated = PDPInitiationType.mSInitiated satisfies PDPInitiationType;
export const mSInitiated = PDPInitiationType.mSInitiated satisfies PDPInitiationType;
export const PDPInitiationType_networkInitiated = PDPInitiationType.networkInitiated satisfies PDPInitiationType;
export const networkInitiated = PDPInitiationType.networkInitiated satisfies PDPInitiationType;
export const _decode_PDPInitiationType = $._decodeEnumerated;
export const _encode_PDPInitiationType = $._encodeEnumerated;
