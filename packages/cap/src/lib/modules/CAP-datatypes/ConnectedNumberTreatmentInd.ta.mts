import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ConnectedNumberTreatmentInd
 * @description
 *
 * Suppress or display the connected number.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectedNumberTreatmentInd ::= ENUMERATED {
 *  noINImpact				(0),
 *  presentationRestricted		(1),
 *  presentCalledINNumber		(2),
 *  presentCallINNumberRestricted	(3)
 * }
 * ```
 *
 */
export enum _enum_for_ConnectedNumberTreatmentInd {
    noINImpact = 0,
    presentationRestricted = 1,
    presentCalledINNumber = 2,
    presentCallINNumberRestricted = 3,
}
export type ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;
export const ConnectedNumberTreatmentInd: typeof _enum_for_ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;
export const ConnectedNumberTreatmentInd_noINImpact: _enum_for_ConnectedNumberTreatmentInd.noINImpact = ConnectedNumberTreatmentInd.noINImpact;
export const noINImpact: _enum_for_ConnectedNumberTreatmentInd.noINImpact = ConnectedNumberTreatmentInd.noINImpact;
export const ConnectedNumberTreatmentInd_presentationRestricted: _enum_for_ConnectedNumberTreatmentInd.presentationRestricted = ConnectedNumberTreatmentInd.presentationRestricted;
export const presentationRestricted: _enum_for_ConnectedNumberTreatmentInd.presentationRestricted = ConnectedNumberTreatmentInd.presentationRestricted;
export const ConnectedNumberTreatmentInd_presentCalledINNumber: _enum_for_ConnectedNumberTreatmentInd.presentCalledINNumber = ConnectedNumberTreatmentInd.presentCalledINNumber;
export const presentCalledINNumber: _enum_for_ConnectedNumberTreatmentInd.presentCalledINNumber = ConnectedNumberTreatmentInd.presentCalledINNumber;
export const ConnectedNumberTreatmentInd_presentCallINNumberRestricted: _enum_for_ConnectedNumberTreatmentInd.presentCallINNumberRestricted = ConnectedNumberTreatmentInd.presentCallINNumberRestricted;
export const presentCallINNumberRestricted: _enum_for_ConnectedNumberTreatmentInd.presentCallINNumberRestricted = ConnectedNumberTreatmentInd.presentCallINNumberRestricted;
export const _decode_ConnectedNumberTreatmentInd: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_ConnectedNumberTreatmentInd: $.ASN1Encoder<number> = $._encodeEnumerated;
