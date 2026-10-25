/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CallOutcome {
    success = 0,
    failure = 1,
    busy = 2,
}

/**
 * @summary CallOutcome
 * @description
 *
 * 3–10 map to success; 11–20 to failure; >20 to busy (3GPP TS 29.002 V19.1.0
 * clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallOutcome  ::=  ENUMERATED {
 *     success    (0),
 *     failure    (1),
 *     busy    (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type CallOutcome = _enum_for_CallOutcome | ENUMERATED;

/**
 * @summary CallOutcome_success
 * @description
 *
 * `success (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallOutcome_success: _enum_for_CallOutcome.success = _enum_for_CallOutcome.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 *
 * `success (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const success: _enum_for_CallOutcome.success = CallOutcome_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallOutcome_failure
 * @description
 *
 * `failure (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallOutcome_failure: _enum_for_CallOutcome.failure = _enum_for_CallOutcome.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @description
 *
 * `failure (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const failure: _enum_for_CallOutcome.failure = CallOutcome_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallOutcome_busy
 * @description
 *
 * `busy (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const CallOutcome_busy: _enum_for_CallOutcome.busy = _enum_for_CallOutcome.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * `busy (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const busy: _enum_for_CallOutcome.busy = CallOutcome_busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CallOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CallOutcome: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CallOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallOutcome, encoded as an ASN.1 Element.
 */
export const _encode_CallOutcome: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
