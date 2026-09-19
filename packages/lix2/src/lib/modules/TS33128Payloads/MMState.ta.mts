/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState  ::=  ENUMERATED
 * {
 *     draft(1),
 *     sent(2),
 *     new(3),
 *     retrieved(4),
 *     forwarded(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMState {
    draft = 1,
    sent = 2,
    new_ = 3,
    retrieved = 4,
    forwarded = 5,
}

/**
 * @summary MMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState  ::=  ENUMERATED
 * {
 *     draft(1),
 *     sent(2),
 *     new(3),
 *     retrieved(4),
 *     forwarded(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMState = _enum_for_MMState;

/**
 * @summary MMState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMState  ::=  ENUMERATED
 * {
 *     draft(1),
 *     sent(2),
 *     new(3),
 *     retrieved(4),
 *     forwarded(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMState = _enum_for_MMState;

/**
 * @summary MMState_draft
 * @constant
 * @type {number}
 */
export
const MMState_draft: MMState = MMState.draft; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
 * @constant
 * @type {number}
 */
export
const draft: MMState = MMState.draft; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_sent
 * @constant
 * @type {number}
 */
export
const MMState_sent: MMState = MMState.sent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: MMState = MMState.sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_new_
 * @constant
 * @type {number}
 */
export
const MMState_new_: MMState = MMState.new_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @constant
 * @type {number}
 */
export
const new_: MMState = MMState.new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_retrieved
 * @constant
 * @type {number}
 */
export
const MMState_retrieved: MMState = MMState.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: MMState = MMState.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMState_forwarded
 * @constant
 * @type {number}
 */
export
const MMState_forwarded: MMState = MMState.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMState = MMState.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMState: $.ASN1Decoder<MMState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMState (el: _Element): MMState {
    if (!_cached_decoder_for_MMState) { _cached_decoder_for_MMState = $._decodeEnumerated; }
    return _cached_decoder_for_MMState(el);
}

let _cached_encoder_for_MMState: $.ASN1Encoder<MMState> | null = null;

/**
 * @summary Encodes a(n) MMState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMState, encoded as an ASN.1 Element.
 */
export
function _encode_MMState (value: MMState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMState) { _cached_encoder_for_MMState = $._encodeEnumerated; }
    return _cached_encoder_for_MMState(value, elGetter);
}


/* eslint-enable */
