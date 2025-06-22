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
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_CloseOutVerification {
    noAction = 0,
    verified = 1,
    denied = 2,
    deniedActivityDurationDisputed = 3,
    deniedCloseOutNarrDisputed = 4,
}


/**
 * @summary CloseOutVerification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CloseOutVerification  ::=  ENUMERATED {
 *   noAction(0), verified(1), denied(2), deniedActivityDurationDisputed(3),
 *   deniedCloseOutNarrDisputed(4), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type CloseOutVerification = _enum_for_CloseOutVerification | ENUMERATED;


/**
 * @summary CloseOutVerification_noAction
 * @constant
 * @type {number}
 */
export const CloseOutVerification_noAction: CloseOutVerification = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noAction
 * @constant
 * @type {number}
 */
export const noAction: CloseOutVerification = CloseOutVerification_noAction; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_verified
 * @constant
 * @type {number}
 */
export const CloseOutVerification_verified: CloseOutVerification = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verified
 * @constant
 * @type {number}
 */
export const verified: CloseOutVerification = CloseOutVerification_verified; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_denied
 * @constant
 * @type {number}
 */
export const CloseOutVerification_denied: CloseOutVerification = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: CloseOutVerification = CloseOutVerification_denied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export const CloseOutVerification_deniedActivityDurationDisputed: CloseOutVerification = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export const deniedActivityDurationDisputed: CloseOutVerification = CloseOutVerification_deniedActivityDurationDisputed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export const CloseOutVerification_deniedCloseOutNarrDisputed: CloseOutVerification = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export const deniedCloseOutNarrDisputed: CloseOutVerification = CloseOutVerification_deniedCloseOutNarrDisputed; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CloseOutVerification = $._decodeEnumerated;




export const _encode_CloseOutVerification = $._encodeEnumerated;


/* eslint-enable */
