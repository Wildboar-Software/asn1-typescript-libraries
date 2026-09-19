/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ImplicitFloorReq {
    join = 1,
    rejoin = 2,
    release = 3,
}

/**
 * @summary ImplicitFloorReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImplicitFloorReq  ::=  ENUMERATED
 * {
 *  join (1),
 *  rejoin (2),
 *  release (3),
 *  -- group Call request to join, rejoin, or release of the group call
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ImplicitFloorReq = _enum_for_ImplicitFloorReq | ENUMERATED;

/**
 * @summary ImplicitFloorReq_join
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_join: ImplicitFloorReq = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary join
 * @constant
 * @type {number}
 */
export
const join: ImplicitFloorReq = ImplicitFloorReq_join; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_rejoin
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_rejoin: ImplicitFloorReq = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejoin
 * @constant
 * @type {number}
 */
export
const rejoin: ImplicitFloorReq = ImplicitFloorReq_rejoin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImplicitFloorReq_release
 * @constant
 * @type {number}
 */
export
const ImplicitFloorReq_release: ImplicitFloorReq = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @constant
 * @type {number}
 */
export
const release: ImplicitFloorReq = ImplicitFloorReq_release; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ImplicitFloorReq: $.ASN1Decoder<ImplicitFloorReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImplicitFloorReq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImplicitFloorReq (el: _Element): ImplicitFloorReq {
    if (!_cached_decoder_for_ImplicitFloorReq) { _cached_decoder_for_ImplicitFloorReq = $._decodeEnumerated; }
    return _cached_decoder_for_ImplicitFloorReq(el);
}

let _cached_encoder_for_ImplicitFloorReq: $.ASN1Encoder<ImplicitFloorReq> | null = null;

/**
 * @summary Encodes a(n) ImplicitFloorReq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImplicitFloorReq, encoded as an ASN.1 Element.
 */
export
function _encode_ImplicitFloorReq (value: ImplicitFloorReq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImplicitFloorReq) { _cached_encoder_for_ImplicitFloorReq = $._encodeEnumerated; }
    return _cached_encoder_for_ImplicitFloorReq(value, elGetter);
}


/* eslint-enable */
