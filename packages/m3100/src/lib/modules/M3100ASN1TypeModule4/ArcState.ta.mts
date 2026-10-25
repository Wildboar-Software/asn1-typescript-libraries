/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ArcState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcState  ::=  ENUMERATED {
 *   alm(0), nalm(1), nalmQualifiedInhibit(2), nalmTimedInhibit(4)}
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
 */
export const ArcState: typeof _enum_for_ArcState = _enum_for_ArcState;


/**
 * @summary ArcState_alm
 * @constant
 * @type {number}
 */
export const ArcState_alm: _enum_for_ArcState.alm =
    ArcState.alm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alm
 * @constant
 * @type {number}
 */
export const alm: _enum_for_ArcState.alm = ArcState.alm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcState_nalm
 * @constant
 * @type {number}
 */
export const ArcState_nalm: _enum_for_ArcState.nalm =
    ArcState.nalm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalm
 * @constant
 * @type {number}
 */
export const nalm: _enum_for_ArcState.nalm = ArcState.nalm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcState_nalmQualifiedInhibit
 * @constant
 * @type {number}
 */
export const ArcState_nalmQualifiedInhibit: _enum_for_ArcState.nalmQualifiedInhibit =
    ArcState.nalmQualifiedInhibit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmQualifiedInhibit
 * @constant
 * @type {number}
 */
export const nalmQualifiedInhibit: _enum_for_ArcState.nalmQualifiedInhibit =
    ArcState.nalmQualifiedInhibit; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcState_nalmTimedInhibit
 * @constant
 * @type {number}
 */
export const ArcState_nalmTimedInhibit: _enum_for_ArcState.nalmTimedInhibit =
    ArcState.nalmTimedInhibit; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmTimedInhibit
 * @constant
 * @type {number}
 */
export const nalmTimedInhibit: _enum_for_ArcState.nalmTimedInhibit =
    ArcState.nalmTimedInhibit; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ArcState(el: _Element): ArcState {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ArcState.alm: return ArcState.alm;
        case ArcState.nalm: return ArcState.nalm;
        case ArcState.nalmQualifiedInhibit: return ArcState.nalmQualifiedInhibit;
        case ArcState.nalmTimedInhibit: return ArcState.nalmTimedInhibit;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ArcState.',
                el,
            );
    }
}




export const _encode_ArcState: $.ASN1Encoder<ArcState> = $._encodeEnumerated as $.ASN1Encoder<ArcState>;


/* eslint-enable */
