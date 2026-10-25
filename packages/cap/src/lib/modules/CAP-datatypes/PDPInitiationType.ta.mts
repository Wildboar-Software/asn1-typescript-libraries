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
export const PDPInitiationType: typeof _enum_for_PDPInitiationType = _enum_for_PDPInitiationType;
export const PDPInitiationType_mSInitiated: _enum_for_PDPInitiationType.mSInitiated = PDPInitiationType.mSInitiated;
export const mSInitiated: _enum_for_PDPInitiationType.mSInitiated = PDPInitiationType.mSInitiated;
export const PDPInitiationType_networkInitiated: _enum_for_PDPInitiationType.networkInitiated = PDPInitiationType.networkInitiated;
export const networkInitiated: _enum_for_PDPInitiationType.networkInitiated = PDPInitiationType.networkInitiated;
export const _decode_PDPInitiationType: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_PDPInitiationType: $.ASN1Encoder<number> = $._encodeEnumerated;
