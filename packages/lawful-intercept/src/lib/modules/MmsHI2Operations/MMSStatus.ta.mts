/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MMSStatus {
    expired = 0,
    retrieved = 1,
    rejected = 2,
    deferred = 3,
    unrecognised = 4,
    indeterminate = 5,
    forwarded = 6,
    unreachable = 7,
}

/**
 * @summary MMSStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSStatus ::=  ENUMERATED
 * {
 *     expired         (0),
 *     retrieved        (1),
 *     rejected        (2),
 *     deferred        (3),
 *     unrecognised    (4),
 *     indeterminate    (5),
 *     forwarded        (6),
 *     unreachable        (7),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSStatus = _enum_for_MMSStatus | ENUMERATED;

/**
 * @summary MMSStatus_expired
 * @constant
 * @type {number}
 */
export
const MMSStatus_expired: MMSStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: MMSStatus = MMSStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_retrieved
 * @constant
 * @type {number}
 */
export
const MMSStatus_retrieved: MMSStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: MMSStatus = MMSStatus_retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_rejected
 * @constant
 * @type {number}
 */
export
const MMSStatus_rejected: MMSStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: MMSStatus = MMSStatus_rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_deferred
 * @constant
 * @type {number}
 */
export
const MMSStatus_deferred: MMSStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred: MMSStatus = MMSStatus_deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_unrecognised
 * @constant
 * @type {number}
 */
export
const MMSStatus_unrecognised: MMSStatus = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognised
 * @constant
 * @type {number}
 */
export
const unrecognised: MMSStatus = MMSStatus_unrecognised; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_indeterminate
 * @constant
 * @type {number}
 */
export
const MMSStatus_indeterminate: MMSStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @constant
 * @type {number}
 */
export
const indeterminate: MMSStatus = MMSStatus_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_forwarded
 * @constant
 * @type {number}
 */
export
const MMSStatus_forwarded: MMSStatus = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMSStatus = MMSStatus_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_unreachable
 * @constant
 * @type {number}
 */
export
const MMSStatus_unreachable: MMSStatus = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @constant
 * @type {number}
 */
export
const unreachable: MMSStatus = MMSStatus_unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSStatus: $.ASN1Decoder<MMSStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSStatus (el: _Element): MMSStatus {
    if (!_cached_decoder_for_MMSStatus) { _cached_decoder_for_MMSStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSStatus(el);
}

let _cached_encoder_for_MMSStatus: $.ASN1Encoder<MMSStatus> | null = null;

/**
 * @summary Encodes a(n) MMSStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSStatus (value: MMSStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSStatus) { _cached_encoder_for_MMSStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSStatus(value, elGetter);
}


/* eslint-enable */
