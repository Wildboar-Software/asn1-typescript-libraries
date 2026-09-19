/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCUserAccessPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCUserAccessPolicy   ::=  ENUMERATED
 * {
 *     allowIncomingPTCSessionRequest(1),
 *     blockIncomingPTCSessionRequest(2),
 *     allowAutoAnswerMode(3),
 *     allowOverrideManualAnswerMode(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCUserAccessPolicy {
    allowIncomingPTCSessionRequest = 1,
    blockIncomingPTCSessionRequest = 2,
    allowAutoAnswerMode = 3,
    allowOverrideManualAnswerMode = 4,
}

/**
 * @summary PTCUserAccessPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCUserAccessPolicy   ::=  ENUMERATED
 * {
 *     allowIncomingPTCSessionRequest(1),
 *     blockIncomingPTCSessionRequest(2),
 *     allowAutoAnswerMode(3),
 *     allowOverrideManualAnswerMode(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCUserAccessPolicy = _enum_for_PTCUserAccessPolicy;

/**
 * @summary PTCUserAccessPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCUserAccessPolicy   ::=  ENUMERATED
 * {
 *     allowIncomingPTCSessionRequest(1),
 *     blockIncomingPTCSessionRequest(2),
 *     allowAutoAnswerMode(3),
 *     allowOverrideManualAnswerMode(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCUserAccessPolicy = _enum_for_PTCUserAccessPolicy;

/**
 * @summary PTCUserAccessPolicy_allowIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.allowIncomingPTCSessionRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const allowIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.allowIncomingPTCSessionRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_blockIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_blockIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.blockIncomingPTCSessionRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blockIncomingPTCSessionRequest
 * @constant
 * @type {number}
 */
export
const blockIncomingPTCSessionRequest: PTCUserAccessPolicy = PTCUserAccessPolicy.blockIncomingPTCSessionRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_allowAutoAnswerMode
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowAutoAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowAutoAnswerMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowAutoAnswerMode
 * @constant
 * @type {number}
 */
export
const allowAutoAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowAutoAnswerMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCUserAccessPolicy_allowOverrideManualAnswerMode
 * @constant
 * @type {number}
 */
export
const PTCUserAccessPolicy_allowOverrideManualAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowOverrideManualAnswerMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allowOverrideManualAnswerMode
 * @constant
 * @type {number}
 */
export
const allowOverrideManualAnswerMode: PTCUserAccessPolicy = PTCUserAccessPolicy.allowOverrideManualAnswerMode; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCUserAccessPolicy: $.ASN1Decoder<PTCUserAccessPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCUserAccessPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCUserAccessPolicy (el: _Element): PTCUserAccessPolicy {
    if (!_cached_decoder_for_PTCUserAccessPolicy) { _cached_decoder_for_PTCUserAccessPolicy = $._decodeEnumerated; }
    return _cached_decoder_for_PTCUserAccessPolicy(el);
}

let _cached_encoder_for_PTCUserAccessPolicy: $.ASN1Encoder<PTCUserAccessPolicy> | null = null;

/**
 * @summary Encodes a(n) PTCUserAccessPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCUserAccessPolicy, encoded as an ASN.1 Element.
 */
export
function _encode_PTCUserAccessPolicy (value: PTCUserAccessPolicy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCUserAccessPolicy) { _cached_encoder_for_PTCUserAccessPolicy = $._encodeEnumerated; }
    return _cached_encoder_for_PTCUserAccessPolicy(value, elGetter);
}


/* eslint-enable */
