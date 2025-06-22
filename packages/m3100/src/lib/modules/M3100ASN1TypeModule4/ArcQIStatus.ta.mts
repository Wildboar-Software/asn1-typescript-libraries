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
export const ArcQIStatus = _enum_for_ArcQIStatus;


/**
 * @summary ArcQIStatus_notApplicable
 * @constant
 * @type {number}
 */
export const ArcQIStatus_notApplicable: ArcQIStatus =
    ArcQIStatus.notApplicable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notApplicable
 * @constant
 * @type {number}
 */
export const notApplicable: ArcQIStatus =
    ArcQIStatus.notApplicable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcQIStatus_nalmNotReported
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmNotReported: ArcQIStatus =
    ArcQIStatus.nalmNotReported; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmNotReported
 * @constant
 * @type {number}
 */
export const nalmNotReported: ArcQIStatus =
    ArcQIStatus.nalmNotReported; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcQIStatus_nalmCountDown
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmCountDown: ArcQIStatus =
    ArcQIStatus.nalmCountDown; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmCountDown
 * @constant
 * @type {number}
 */
export const nalmCountDown: ArcQIStatus =
    ArcQIStatus.nalmCountDown; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ArcQIStatus = $._decodeEnumerated;




export const _encode_ArcQIStatus = $._encodeEnumerated;


/* eslint-enable */
