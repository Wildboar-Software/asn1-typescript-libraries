/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const _enum_for_NegTokenTarg_negResult = {
    accept_completed: 0,
    accept_incomplete: 1,
    reject: 2,
    request_mic: 3,
} as const;

export
type _enum_for_NegTokenTarg_negResult = (typeof _enum_for_NegTokenTarg_negResult)[keyof typeof _enum_for_NegTokenTarg_negResult];

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
export function _decode_NegTokenTarg_negResult(el: _Element): NegTokenTarg_negResult {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case NegTokenTarg_negResult.accept_completed: return NegTokenTarg_negResult.accept_completed;
        case NegTokenTarg_negResult.accept_incomplete: return NegTokenTarg_negResult.accept_incomplete;
        case NegTokenTarg_negResult.reject: return NegTokenTarg_negResult.reject;
        case NegTokenTarg_negResult.request_mic: return NegTokenTarg_negResult.request_mic;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for NegTokenTarg_negResult.",
                el,
            );
    }
}
export const _encode_NegTokenTarg_negResult: $.ASN1Encoder<NegTokenTarg_negResult> = $._encodeEnumerated as $.ASN1Encoder<NegTokenTarg_negResult>;


/* eslint-enable */
