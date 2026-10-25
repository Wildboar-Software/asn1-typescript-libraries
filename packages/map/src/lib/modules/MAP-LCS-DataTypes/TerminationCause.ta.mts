/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TerminationCause {
    normal = 0,
    errorundefined = 1,
    internalTimeout = 2,
    congestion = 3,
    mt_lrRestart = 4,
    privacyViolation = 5,
    shapeOfLocationEstimateNotSupported = 6,
    subscriberTermination = 7,
    uETermination = 8,
    networkTermination = 9,
}

/**
 * @summary TerminationCause
 * @description
 *
 * mt-lrRestart triggers GMLC to restart (MS moved, Send Identification, or
 * Cancel Location). Unrecognized value treated as errorundefined (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.11.3 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationCause  ::=  ENUMERATED {
 *     normal  (0),
 *     errorundefined  (1),
 *     internalTimeout  (2),
 *     congestion  (3),
 *     mt-lrRestart  (4),
 *     privacyViolation  (5),
 *     ...,
 *     shapeOfLocationEstimateNotSupported (6) ,
 *     subscriberTermination (7),
 *     uETermination (8),
 *     networkTermination (9)  }
 * ```
 * 
 * @enum {number}
 */
export
type TerminationCause = _enum_for_TerminationCause | ENUMERATED;

/**
 * @summary TerminationCause_normal
 * @description
 *
 * `normal (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_normal = _enum_for_TerminationCause.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description
 *
 * `normal (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const normal = TerminationCause_normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_errorundefined
 * @description
 *
 * `errorundefined (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_errorundefined = _enum_for_TerminationCause.errorundefined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorundefined
 * @description
 *
 * `errorundefined (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const errorundefined = TerminationCause_errorundefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_internalTimeout
 * @description
 *
 * `internalTimeout (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_internalTimeout = _enum_for_TerminationCause.internalTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalTimeout
 * @description
 *
 * `internalTimeout (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const internalTimeout = TerminationCause_internalTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_congestion
 * @description
 *
 * `congestion (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_congestion = _enum_for_TerminationCause.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @description
 *
 * `congestion (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const congestion = TerminationCause_congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_mt_lrRestart
 * @description
 *
 * `mt-lrRestart (4)` restart at GMLC (3GPP TS 29.002 V19.1.0 clauses 7.6.11.3
 * and 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_mt_lrRestart = _enum_for_TerminationCause.mt_lrRestart; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mt_lrRestart
 * @description
 *
 * `mt-lrRestart (4)` restart at GMLC (3GPP TS 29.002 V19.1.0 clauses 7.6.11.3
 * and 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const mt_lrRestart = TerminationCause_mt_lrRestart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_privacyViolation
 * @description
 *
 * `privacyViolation (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_privacyViolation = _enum_for_TerminationCause.privacyViolation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privacyViolation
 * @description
 *
 * `privacyViolation (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const privacyViolation = TerminationCause_privacyViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_shapeOfLocationEstimateNotSupported
 * @description
 *
 * `shapeOfLocationEstimateNotSupported (6)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_shapeOfLocationEstimateNotSupported = _enum_for_TerminationCause.shapeOfLocationEstimateNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shapeOfLocationEstimateNotSupported
 * @description
 *
 * `shapeOfLocationEstimateNotSupported (6)` (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const shapeOfLocationEstimateNotSupported = TerminationCause_shapeOfLocationEstimateNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_subscriberTermination
 * @description
 *
 * `subscriberTermination (7)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_subscriberTermination = _enum_for_TerminationCause.subscriberTermination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberTermination
 * @description
 *
 * `subscriberTermination (7)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const subscriberTermination = TerminationCause_subscriberTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_uETermination
 * @description
 *
 * `uETermination (8)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_uETermination = _enum_for_TerminationCause.uETermination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uETermination
 * @description
 *
 * `uETermination (8)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const uETermination = TerminationCause_uETermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_networkTermination
 * @description
 *
 * `networkTermination (9)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const TerminationCause_networkTermination = _enum_for_TerminationCause.networkTermination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkTermination
 * @description
 *
 * `networkTermination (9)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const networkTermination = TerminationCause_networkTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TerminationCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TerminationCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationCause, encoded as an ASN.1 Element.
 */
export const _encode_TerminationCause = $._encodeEnumerated;


/* eslint-enable */
