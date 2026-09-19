/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMMStatus {
    uE5GMMRegistered = 1,
    uENot5GMMRegistered = 2,
}

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMStatus  ::=  ENUMERATED
 * {
 *     uE5GMMRegistered(1),
 *     uENot5GMMRegistered(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMMStatus = _enum_for_FiveGMMStatus;

/**
 * @summary FiveGMMStatus_uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uE5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uE5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uE5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMMStatus_uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const FiveGMMStatus_uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uENot5GMMRegistered
 * @constant
 * @type {number}
 */
export
const uENot5GMMRegistered: FiveGMMStatus = FiveGMMStatus.uENot5GMMRegistered; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_FiveGMMStatus: $.ASN1Decoder<FiveGMMStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMMStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMMStatus (el: _Element): FiveGMMStatus {
    if (!_cached_decoder_for_FiveGMMStatus) { _cached_decoder_for_FiveGMMStatus = $._decodeEnumerated; }
    return _cached_decoder_for_FiveGMMStatus(el);
}

let _cached_encoder_for_FiveGMMStatus: $.ASN1Encoder<FiveGMMStatus> | null = null;

/**
 * @summary Encodes a(n) FiveGMMStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMMStatus, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMMStatus (value: FiveGMMStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMMStatus) { _cached_encoder_for_FiveGMMStatus = $._encodeEnumerated; }
    return _cached_encoder_for_FiveGMMStatus(value, elGetter);
}


/* eslint-enable */
