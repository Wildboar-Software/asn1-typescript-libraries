/* eslint-disable */
import {
    type ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CloseOutVerification {
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
export
type CloseOutVerification = _enum_for_CloseOutVerification | ENUMERATED;

/**
 * @summary CloseOutVerification_noAction
 * @constant
 * @type {number}
 */
export
const CloseOutVerification_noAction = _enum_for_CloseOutVerification.noAction satisfies CloseOutVerification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAction
 * @constant
 * @type {number}
 */
export
const noAction = CloseOutVerification_noAction satisfies CloseOutVerification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CloseOutVerification_verified
 * @constant
 * @type {number}
 */
export
const CloseOutVerification_verified = _enum_for_CloseOutVerification.verified satisfies CloseOutVerification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary verified
 * @constant
 * @type {number}
 */
export
const verified = CloseOutVerification_verified satisfies CloseOutVerification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CloseOutVerification_denied
 * @constant
 * @type {number}
 */
export
const CloseOutVerification_denied = _enum_for_CloseOutVerification.denied satisfies CloseOutVerification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denied
 * @constant
 * @type {number}
 */
export
const denied = CloseOutVerification_denied satisfies CloseOutVerification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CloseOutVerification_deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export
const CloseOutVerification_deniedActivityDurationDisputed = _enum_for_CloseOutVerification.deniedActivityDurationDisputed satisfies CloseOutVerification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deniedActivityDurationDisputed
 * @constant
 * @type {number}
 */
export
const deniedActivityDurationDisputed = CloseOutVerification_deniedActivityDurationDisputed satisfies CloseOutVerification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CloseOutVerification_deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export
const CloseOutVerification_deniedCloseOutNarrDisputed = _enum_for_CloseOutVerification.deniedCloseOutNarrDisputed satisfies CloseOutVerification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deniedCloseOutNarrDisputed
 * @constant
 * @type {number}
 */
export
const deniedCloseOutNarrDisputed = CloseOutVerification_deniedCloseOutNarrDisputed satisfies CloseOutVerification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CloseOutVerification = $._decodeEnumerated;
export const _encode_CloseOutVerification = $._encodeEnumerated;


/* eslint-enable */
