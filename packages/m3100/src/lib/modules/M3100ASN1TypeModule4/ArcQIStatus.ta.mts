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
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ArcQIStatus {
    notApplicable = 0,
    nalmNotReported = 1,
    nalmCountDown = 2,
}


/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```
 *
 * @enum {number}
 */
export type ArcQIStatus = _enum_for_ArcQIStatus;


/**
 * @summary ArcQIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcQIStatus  ::=  ENUMERATED {
 *   notApplicable(0), nalmNotReported(1), nalmCountDown(2)}
 * ```
 *
 * @enum {number}
 */
export const ArcQIStatus: typeof _enum_for_ArcQIStatus = _enum_for_ArcQIStatus;


/**
 * @summary ArcQIStatus_notApplicable
 * @constant
 * @type {number}
 */
export const ArcQIStatus_notApplicable: _enum_for_ArcQIStatus.notApplicable =
    ArcQIStatus.notApplicable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notApplicable
 * @constant
 * @type {number}
 */
export const notApplicable: _enum_for_ArcQIStatus.notApplicable =
    ArcQIStatus.notApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcQIStatus_nalmNotReported
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmNotReported: _enum_for_ArcQIStatus.nalmNotReported =
    ArcQIStatus.nalmNotReported; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmNotReported
 * @constant
 * @type {number}
 */
export const nalmNotReported: _enum_for_ArcQIStatus.nalmNotReported =
    ArcQIStatus.nalmNotReported; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcQIStatus_nalmCountDown
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmCountDown: _enum_for_ArcQIStatus.nalmCountDown =
    ArcQIStatus.nalmCountDown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmCountDown
 * @constant
 * @type {number}
 */
export const nalmCountDown: _enum_for_ArcQIStatus.nalmCountDown =
    ArcQIStatus.nalmCountDown; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ArcQIStatus(el: _Element): ArcQIStatus {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ArcQIStatus.notApplicable: return ArcQIStatus.notApplicable;
        case ArcQIStatus.nalmNotReported: return ArcQIStatus.nalmNotReported;
        case ArcQIStatus.nalmCountDown: return ArcQIStatus.nalmCountDown;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ArcQIStatus.',
                el,
            );
    }
}




export const _encode_ArcQIStatus: $.ASN1Encoder<ArcQIStatus> = $._encodeEnumerated as $.ASN1Encoder<ArcQIStatus>;


/* eslint-enable */
