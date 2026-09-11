import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CGEncountered
 * @description
 *
 * Type of automatic call gapping encountered, if any.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CGEncountered ::= ENUMERATED {
 *  noCGencountered			(0),
 *  manualCGencountered			(1),
 *  scpOverload				(2)
 *  }
 * ```
 *
 */
export enum _enum_for_CGEncountered {
    noCGencountered = 0,
    manualCGencountered = 1,
    scpOverload = 2,
}
export type CGEncountered = _enum_for_CGEncountered;
export const CGEncountered = _enum_for_CGEncountered;
export const CGEncountered_noCGencountered: CGEncountered = CGEncountered.noCGencountered;
export const noCGencountered: CGEncountered = CGEncountered.noCGencountered;
export const CGEncountered_manualCGencountered: CGEncountered = CGEncountered.manualCGencountered;
export const manualCGencountered: CGEncountered = CGEncountered.manualCGencountered;
export const CGEncountered_scpOverload: CGEncountered = CGEncountered.scpOverload;
export const scpOverload: CGEncountered = CGEncountered.scpOverload;
export const _decode_CGEncountered = $._decodeEnumerated;
export const _encode_CGEncountered = $._encodeEnumerated;
