/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```@enum {number}
 */
export enum _enum_for_ArcState {
    alm = 0,
    nalm = 1,
    nalmQualifiedInhibit = 2,
    nalmTimedInhibit = 4,
}


/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```@enum {number}
 */
export type ArcState = _enum_for_ArcState;


/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```@enum {number}
 */
export const ArcState = _enum_for_ArcState;


/**
 * @summary ArcState_alm
 * @constant
 * @type {number}
 */
export const ArcState_alm: ArcState =
    ArcState.alm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alm
 * @constant
 * @type {number}
 */
export const alm: ArcState = ArcState.alm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcState_nalm
 * @constant
 * @type {number}
 */
export const ArcState_nalm: ArcState =
    ArcState.nalm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalm
 * @constant
 * @type {number}
 */
export const nalm: ArcState = ArcState.nalm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcState_nalmQualifiedInhibit
 * @constant
 * @type {number}
 */
export const ArcState_nalmQualifiedInhibit: ArcState =
    ArcState.nalmQualifiedInhibit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmQualifiedInhibit
 * @constant
 * @type {number}
 */
export const nalmQualifiedInhibit: ArcState =
    ArcState.nalmQualifiedInhibit; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcState_nalmTimedInhibit
 * @constant
 * @type {number}
 */
export const ArcState_nalmTimedInhibit: ArcState =
    ArcState.nalmTimedInhibit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmTimedInhibit
 * @constant
 * @type {number}
 */
export const nalmTimedInhibit: ArcState =
    ArcState.nalmTimedInhibit; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ArcState = $._decodeEnumerated;




export const _encode_ArcState = $._encodeEnumerated;


/* eslint-enable */
