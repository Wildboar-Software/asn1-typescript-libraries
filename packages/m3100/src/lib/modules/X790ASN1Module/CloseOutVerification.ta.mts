/* eslint-disable */
import {
    type ENUMERATED,
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
export const CloseOutVerification_noAction: _enum_for_CloseOutVerification.noAction = _enum_for_CloseOutVerification.noAction; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noAction
 * @constant
 * @type {number}
 */
export const noAction: _enum_for_CloseOutVerification.noAction = CloseOutVerification_noAction; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_verified
 * @constant
 * @type {number}
 */
export const CloseOutVerification_verified: _enum_for_CloseOutVerification.verified = _enum_for_CloseOutVerification.verified; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary verified
 * @constant
 * @type {number}
 */
export const verified: _enum_for_CloseOutVerification.verified = CloseOutVerification_verified; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_denied
 * @constant
 * @type {number}
 */
export const CloseOutVerification_denied: _enum_for_CloseOutVerification.denied = _enum_for_CloseOutVerification.denied; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary denied
 * @constant
 * @type {number}
 */
export const denied: _enum_for_CloseOutVerification.denied = CloseOutVerification_denied; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export const CloseOutVerification_deniedActivityDurationDisputed: _enum_for_CloseOutVerification.deniedActivityDurationDisputed = _enum_for_CloseOutVerification.deniedActivityDurationDisputed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export const deniedActivityDurationDisputed: _enum_for_CloseOutVerification.deniedActivityDurationDisputed = CloseOutVerification_deniedActivityDurationDisputed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CloseOutVerification_deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export const CloseOutVerification_deniedCloseOutNarrDisputed: _enum_for_CloseOutVerification.deniedCloseOutNarrDisputed = _enum_for_CloseOutVerification.deniedCloseOutNarrDisputed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export const deniedCloseOutNarrDisputed: _enum_for_CloseOutVerification.deniedCloseOutNarrDisputed = CloseOutVerification_deniedCloseOutNarrDisputed; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CloseOutVerification: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_CloseOutVerification: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
