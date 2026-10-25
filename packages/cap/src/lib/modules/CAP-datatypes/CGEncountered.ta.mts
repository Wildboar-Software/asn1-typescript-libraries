import {
    type ASN1Element as _Element,
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
export const CGEncountered: typeof _enum_for_CGEncountered = _enum_for_CGEncountered;
export const CGEncountered_noCGencountered: _enum_for_CGEncountered.noCGencountered = CGEncountered.noCGencountered;
export const noCGencountered: _enum_for_CGEncountered.noCGencountered = CGEncountered.noCGencountered;
export const CGEncountered_manualCGencountered: _enum_for_CGEncountered.manualCGencountered = CGEncountered.manualCGencountered;
export const manualCGencountered: _enum_for_CGEncountered.manualCGencountered = CGEncountered.manualCGencountered;
export const CGEncountered_scpOverload: _enum_for_CGEncountered.scpOverload = CGEncountered.scpOverload;
export const scpOverload: _enum_for_CGEncountered.scpOverload = CGEncountered.scpOverload;
export const _decode_CGEncountered: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_CGEncountered: $.ASN1Encoder<number> = $._encodeEnumerated;
