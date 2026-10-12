/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MMSState {
    draft = 0,
    sent = 1,
    new_ = 2,
    retreived = 3,
    forwarded = 4,
}

/**
 * @summary MMSState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSState ::=  ENUMERATED
 * {
 *     draft         (0),
 *     sent        (1),
 *     new            (2),
 *     retreived    (3),
 *     forwarded    (4),
 * 
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSState = _enum_for_MMSState | ENUMERATED;

/**
 * @summary MMSState_draft
 * @constant
 * @type {number}
 */
export
const MMSState_draft: MMSState = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary draft
 * @constant
 * @type {number}
 */
export
const draft: MMSState = MMSState_draft; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_sent
 * @constant
 * @type {number}
 */
export
const MMSState_sent: MMSState = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sent
 * @constant
 * @type {number}
 */
export
const sent: MMSState = MMSState_sent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_new_
 * @constant
 * @type {number}
 */
export
const MMSState_new_: MMSState = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary new_
 * @constant
 * @type {number}
 */
export
const new_: MMSState = MMSState_new_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_retreived
 * @constant
 * @type {number}
 */
export
const MMSState_retreived: MMSState = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retreived
 * @constant
 * @type {number}
 */
export
const retreived: MMSState = MMSState_retreived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSState_forwarded
 * @constant
 * @type {number}
 */
export
const MMSState_forwarded: MMSState = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMSState = MMSState_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSState: $.ASN1Decoder<MMSState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSState (el: _Element): MMSState {
    if (!_cached_decoder_for_MMSState) { _cached_decoder_for_MMSState = $._decodeEnumerated; }
    return _cached_decoder_for_MMSState(el);
}

let _cached_encoder_for_MMSState: $.ASN1Encoder<MMSState> | null = null;

/**
 * @summary Encodes a(n) MMSState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSState, encoded as an ASN.1 Element.
 */
export
function _encode_MMSState (value: MMSState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSState) { _cached_encoder_for_MMSState = $._encodeEnumerated; }
    return _cached_encoder_for_MMSState(value, elGetter);
}


/* eslint-enable */
