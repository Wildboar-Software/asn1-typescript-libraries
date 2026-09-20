/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ReportingState {
    stopMonitoring = 0,
    startMonitoring = 1,
}

/**
 * @summary ReportingState
 * @description
 *
 * stopMonitoring (0) or startMonitoring (1). Values 2–10 map to stopMonitoring;
 * >10 map to startMonitoring (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingState  ::=  ENUMERATED {
 *     stopMonitoring    (0),
 *     startMonitoring    (1),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type ReportingState = _enum_for_ReportingState | ENUMERATED;

/**
 * @summary ReportingState_stopMonitoring
 * @description
 *
 * `stopMonitoring (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const ReportingState_stopMonitoring: ReportingState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stopMonitoring
 * @description
 *
 * `stopMonitoring (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const stopMonitoring: ReportingState = ReportingState_stopMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingState_startMonitoring
 * @description
 *
 * `startMonitoring (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const ReportingState_startMonitoring: ReportingState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startMonitoring
 * @description
 *
 * `startMonitoring (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const startMonitoring: ReportingState = ReportingState_startMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportingState = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ReportingState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingState, encoded as an ASN.1 Element.
 */
export const _encode_ReportingState = $._encodeEnumerated;


/* eslint-enable */
