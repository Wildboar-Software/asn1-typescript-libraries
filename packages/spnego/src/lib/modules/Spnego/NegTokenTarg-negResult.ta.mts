/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NegTokenTarg_negResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg-negResult ::= ENUMERATED {
 *     accept-completed    (0),
 *     accept-incomplete   (1),
 *     reject              (2),
 *     request-mic         (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NegTokenTarg_negResult {
    accept_completed = 0,
    accept_incomplete = 1,
    reject = 2,
    request_mic = 3,
}

/**
 * @summary NegTokenTarg_negResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg-negResult ::= ENUMERATED {
 *     accept-completed    (0),
 *     accept-incomplete   (1),
 *     reject              (2),
 *     request-mic         (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NegTokenTarg_negResult = _enum_for_NegTokenTarg_negResult;

/**
 * @summary NegTokenTarg_negResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegTokenTarg-negResult ::= ENUMERATED {
 *     accept-completed    (0),
 *     accept-incomplete   (1),
 *     reject              (2),
 *     request-mic         (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NegTokenTarg_negResult = _enum_for_NegTokenTarg_negResult;

/**
 * @summary NegTokenTarg_negResult_accept_completed
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_accept_completed: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_completed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accept_completed
 * @constant
 * @type {number}
 */
export
const accept_completed: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_completed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NegTokenTarg_negResult_accept_incomplete
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_accept_incomplete: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_incomplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accept_incomplete
 * @constant
 * @type {number}
 */
export
const accept_incomplete: NegTokenTarg_negResult = NegTokenTarg_negResult.accept_incomplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NegTokenTarg_negResult_reject
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_reject: NegTokenTarg_negResult = NegTokenTarg_negResult.reject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reject
 * @constant
 * @type {number}
 */
export
const reject: NegTokenTarg_negResult = NegTokenTarg_negResult.reject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NegTokenTarg_negResult_request_mic
 * @constant
 * @type {number}
 */
export
const NegTokenTarg_negResult_request_mic: NegTokenTarg_negResult = NegTokenTarg_negResult.request_mic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request_mic
 * @constant
 * @type {number}
 */
export
const request_mic: NegTokenTarg_negResult = NegTokenTarg_negResult.request_mic; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NegTokenTarg_negResult = $._decodeEnumerated;
export const _encode_NegTokenTarg_negResult = $._encodeEnumerated;


/* eslint-enable */
