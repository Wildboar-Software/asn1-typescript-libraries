/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CallTerminationIndicator {
    terminateCallActivityReferred = 0,
    terminateAllCallActivities = 1,
}

/**
 * @summary CallTerminationIndicator
 * @description
 *
 * 2–10 map to terminateCallActivityReferred; >10 to terminateAllCallActivities.
 * MSCs without linkage of all activities treat any value as
 * terminateCallActivityReferred (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallTerminationIndicator  ::=  ENUMERATED {
 *     terminateCallActivityReferred    (0),
 *     terminateAllCallActivities    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type CallTerminationIndicator = _enum_for_CallTerminationIndicator | ENUMERATED;

/**
 * @summary CallTerminationIndicator_terminateCallActivityReferred
 * @description
 *
 * `terminateCallActivityReferred (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallTerminationIndicator_terminateCallActivityReferred: CallTerminationIndicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminateCallActivityReferred
 * @description
 *
 * `terminateCallActivityReferred (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const terminateCallActivityReferred: CallTerminationIndicator = CallTerminationIndicator_terminateCallActivityReferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallTerminationIndicator_terminateAllCallActivities
 * @description
 *
 * `terminateAllCallActivities (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallTerminationIndicator_terminateAllCallActivities: CallTerminationIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminateAllCallActivities
 * @description
 *
 * `terminateAllCallActivities (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const terminateAllCallActivities: CallTerminationIndicator = CallTerminationIndicator_terminateAllCallActivities; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CallTerminationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallTerminationIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CallTerminationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallTerminationIndicator, encoded as an ASN.1 Element.
 */
export const _encode_CallTerminationIndicator = $._encodeEnumerated;


/* eslint-enable */
