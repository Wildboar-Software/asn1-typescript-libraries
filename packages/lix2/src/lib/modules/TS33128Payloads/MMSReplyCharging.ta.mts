/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReplyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSReplyCharging {
    requested = 0,
    requestedTextOnly = 1,
    accepted = 2,
    acceptedTextOnly = 3,
}

/**
 * @summary MMSReplyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSReplyCharging = _enum_for_MMSReplyCharging;

/**
 * @summary MMSReplyCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReplyCharging  ::=  ENUMERATED
 * {
 *     requested(0),
 *     requestedTextOnly(1),
 *     accepted(2),
 *     acceptedTextOnly(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSReplyCharging = _enum_for_MMSReplyCharging;

/**
 * @summary MMSReplyCharging_requested
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_requested: MMSReplyCharging = MMSReplyCharging.requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requested
 * @constant
 * @type {number}
 */
export
const requested: MMSReplyCharging = MMSReplyCharging.requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_requestedTextOnly
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_requestedTextOnly: MMSReplyCharging = MMSReplyCharging.requestedTextOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedTextOnly
 * @constant
 * @type {number}
 */
export
const requestedTextOnly: MMSReplyCharging = MMSReplyCharging.requestedTextOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_accepted
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_accepted: MMSReplyCharging = MMSReplyCharging.accepted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accepted
 * @constant
 * @type {number}
 */
export
const accepted: MMSReplyCharging = MMSReplyCharging.accepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReplyCharging_acceptedTextOnly
 * @constant
 * @type {number}
 */
export
const MMSReplyCharging_acceptedTextOnly: MMSReplyCharging = MMSReplyCharging.acceptedTextOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary acceptedTextOnly
 * @constant
 * @type {number}
 */
export
const acceptedTextOnly: MMSReplyCharging = MMSReplyCharging.acceptedTextOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSReplyCharging: $.ASN1Decoder<MMSReplyCharging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSReplyCharging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSReplyCharging (el: _Element): MMSReplyCharging {
    if (!_cached_decoder_for_MMSReplyCharging) { _cached_decoder_for_MMSReplyCharging = $._decodeEnumerated; }
    return _cached_decoder_for_MMSReplyCharging(el);
}

let _cached_encoder_for_MMSReplyCharging: $.ASN1Encoder<MMSReplyCharging> | null = null;

/**
 * @summary Encodes a(n) MMSReplyCharging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSReplyCharging, encoded as an ASN.1 Element.
 */
export
function _encode_MMSReplyCharging (value: MMSReplyCharging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSReplyCharging) { _cached_encoder_for_MMSReplyCharging = $._encodeEnumerated; }
    return _cached_encoder_for_MMSReplyCharging(value, elGetter);
}


/* eslint-enable */
