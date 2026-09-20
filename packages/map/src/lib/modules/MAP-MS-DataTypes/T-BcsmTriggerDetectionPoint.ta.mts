/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_T_BcsmTriggerDetectionPoint {
    termAttemptAuthorized = 12,
    tBusy = 13,
    tNoAnswer = 14,
}

/**
 * @summary T_BcsmTriggerDetectionPoint
 * @description
 *
 * Terminating BCSM CAMEL TDP. For T-BcsmCamelTDPData with any other value than
 * those listed, the receiver shall ignore the whole sequence.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BcsmTriggerDetectionPoint  ::=  ENUMERATED {
 *     termAttemptAuthorized (12),
 *     ... ,
 *     tBusy (13),
 *     tNoAnswer (14)}
 * ```
 * 
 * @enum {number}
 */
export
type T_BcsmTriggerDetectionPoint = _enum_for_T_BcsmTriggerDetectionPoint | ENUMERATED;

/**
 * @summary T_BcsmTriggerDetectionPoint_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const T_BcsmTriggerDetectionPoint_termAttemptAuthorized: T_BcsmTriggerDetectionPoint = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized: T_BcsmTriggerDetectionPoint = T_BcsmTriggerDetectionPoint_termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary T_BcsmTriggerDetectionPoint_tBusy
 * @constant
 * @type {number}
 */
export
const T_BcsmTriggerDetectionPoint_tBusy: T_BcsmTriggerDetectionPoint = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy: T_BcsmTriggerDetectionPoint = T_BcsmTriggerDetectionPoint_tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary T_BcsmTriggerDetectionPoint_tNoAnswer
 * @constant
 * @type {number}
 */
export
const T_BcsmTriggerDetectionPoint_tNoAnswer: T_BcsmTriggerDetectionPoint = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer: T_BcsmTriggerDetectionPoint = T_BcsmTriggerDetectionPoint_tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) T_BcsmTriggerDetectionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_T_BcsmTriggerDetectionPoint = $._decodeEnumerated;

/**
 * @summary Encodes a(n) T_BcsmTriggerDetectionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BcsmTriggerDetectionPoint, encoded as an ASN.1 Element.
 */
export const _encode_T_BcsmTriggerDetectionPoint = $._encodeEnumerated;


/* eslint-enable */
