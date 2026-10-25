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
export const ConnectedNumberTreatmentInd = _enum_for_ConnectedNumberTreatmentInd;
export const ConnectedNumberTreatmentInd_noINImpact = ConnectedNumberTreatmentInd.noINImpact satisfies ConnectedNumberTreatmentInd;
export const noINImpact = ConnectedNumberTreatmentInd.noINImpact satisfies ConnectedNumberTreatmentInd;
export const ConnectedNumberTreatmentInd_presentationRestricted = ConnectedNumberTreatmentInd.presentationRestricted satisfies ConnectedNumberTreatmentInd;
export const presentationRestricted = ConnectedNumberTreatmentInd.presentationRestricted satisfies ConnectedNumberTreatmentInd;
export const ConnectedNumberTreatmentInd_presentCalledINNumber = ConnectedNumberTreatmentInd.presentCalledINNumber satisfies ConnectedNumberTreatmentInd;
export const presentCalledINNumber = ConnectedNumberTreatmentInd.presentCalledINNumber satisfies ConnectedNumberTreatmentInd;
export const ConnectedNumberTreatmentInd_presentCallINNumberRestricted = ConnectedNumberTreatmentInd.presentCallINNumberRestricted satisfies ConnectedNumberTreatmentInd;
export const presentCallINNumberRestricted = ConnectedNumberTreatmentInd.presentCallINNumberRestricted satisfies ConnectedNumberTreatmentInd;
export const _decode_ConnectedNumberTreatmentInd = $._decodeEnumerated;
export const _encode_ConnectedNumberTreatmentInd = $._encodeEnumerated;
