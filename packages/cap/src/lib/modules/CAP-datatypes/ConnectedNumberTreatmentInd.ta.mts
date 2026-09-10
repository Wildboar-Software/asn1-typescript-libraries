import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ConnectedNumberTreatmentInd
 * @description
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
export const ConnectedNumberTreatmentInd_noINImpact: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.noINImpact;
export const noINImpact: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.noINImpact;
export const ConnectedNumberTreatmentInd_presentationRestricted: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentationRestricted;
export const presentationRestricted: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentationRestricted;
export const ConnectedNumberTreatmentInd_presentCalledINNumber: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentCalledINNumber;
export const presentCalledINNumber: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentCalledINNumber;
export const ConnectedNumberTreatmentInd_presentCallINNumberRestricted: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentCallINNumberRestricted;
export const presentCallINNumberRestricted: ConnectedNumberTreatmentInd = ConnectedNumberTreatmentInd.presentCallINNumberRestricted;
export const _decode_ConnectedNumberTreatmentInd = $._decodeEnumerated;
export const _encode_ConnectedNumberTreatmentInd = $._encodeEnumerated;
