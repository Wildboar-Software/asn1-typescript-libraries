/* eslint-disable */
import {
    ENUMERATED,
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


export enum _enum_for_ChangeDeniedReason {
    waitingVerificationOfClosure = 1,
    troubleReportAlreadyClosed = 2,
    activityAuthorizationPending = 3,
}


/**
 * @summary ChangeDeniedReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeDeniedReason  ::=  ENUMERATED {
 *   waitingVerificationOfClosure(1), troubleReportAlreadyClosed(2),
 *   activityAuthorizationPending(3), ...
 *   }
 * ```@enum {number}
 */
export type ChangeDeniedReason = _enum_for_ChangeDeniedReason | ENUMERATED;


/**
 * @summary ChangeDeniedReason_waitingVerificationOfClosure
 * @constant
 * @type {number}
 */
export const ChangeDeniedReason_waitingVerificationOfClosure: ChangeDeniedReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary waitingVerificationOfClosure
 * @constant
 * @type {number}
 */
export const waitingVerificationOfClosure: ChangeDeniedReason = ChangeDeniedReason_waitingVerificationOfClosure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ChangeDeniedReason_troubleReportAlreadyClosed
 * @constant
 * @type {number}
 */
export const ChangeDeniedReason_troubleReportAlreadyClosed: ChangeDeniedReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary troubleReportAlreadyClosed
 * @constant
 * @type {number}
 */
export const troubleReportAlreadyClosed: ChangeDeniedReason = ChangeDeniedReason_troubleReportAlreadyClosed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ChangeDeniedReason_activityAuthorizationPending
 * @constant
 * @type {number}
 */
export const ChangeDeniedReason_activityAuthorizationPending: ChangeDeniedReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary activityAuthorizationPending
 * @constant
 * @type {number}
 */
export const activityAuthorizationPending: ChangeDeniedReason = ChangeDeniedReason_activityAuthorizationPending; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_ChangeDeniedReason = $._decodeEnumerated;




export const _encode_ChangeDeniedReason = $._encodeEnumerated;


/* eslint-enable */
