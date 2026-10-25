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
export const ArcQIStatus = _enum_for_ArcQIStatus;


/**
 * @summary ArcQIStatus_notApplicable
 * @constant
 * @type {number}
 */
export const ArcQIStatus_notApplicable =
    ArcQIStatus.notApplicable satisfies ArcQIStatus; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notApplicable
 * @constant
 * @type {number}
 */
export const notApplicable =
    ArcQIStatus.notApplicable satisfies ArcQIStatus; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcQIStatus_nalmNotReported
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmNotReported =
    ArcQIStatus.nalmNotReported satisfies ArcQIStatus; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmNotReported
 * @constant
 * @type {number}
 */
export const nalmNotReported =
    ArcQIStatus.nalmNotReported satisfies ArcQIStatus; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ArcQIStatus_nalmCountDown
 * @constant
 * @type {number}
 */
export const ArcQIStatus_nalmCountDown =
    ArcQIStatus.nalmCountDown satisfies ArcQIStatus; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nalmCountDown
 * @constant
 * @type {number}
 */
export const nalmCountDown =
    ArcQIStatus.nalmCountDown satisfies ArcQIStatus; /* SHORT_NAMED_ENUMERATED_VALUE */




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
