/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCPreEstStatus {
    established = 1,
    modified = 2,
    released = 3,
}

/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCPreEstStatus = _enum_for_PTCPreEstStatus;

/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCPreEstStatus = _enum_for_PTCPreEstStatus;

/**
 * @summary PTCPreEstStatus_established
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_established: PTCPreEstStatus = PTCPreEstStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: PTCPreEstStatus = PTCPreEstStatus.established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPreEstStatus_modified
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_modified: PTCPreEstStatus = PTCPreEstStatus.modified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modified
 * @constant
 * @type {number}
 */
export
const modified: PTCPreEstStatus = PTCPreEstStatus.modified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPreEstStatus_released
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_released: PTCPreEstStatus = PTCPreEstStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: PTCPreEstStatus = PTCPreEstStatus.released; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCPreEstStatus: $.ASN1Decoder<PTCPreEstStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCPreEstStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCPreEstStatus (el: _Element): PTCPreEstStatus {
    if (!_cached_decoder_for_PTCPreEstStatus) { _cached_decoder_for_PTCPreEstStatus = $._decodeEnumerated; }
    return _cached_decoder_for_PTCPreEstStatus(el);
}

let _cached_encoder_for_PTCPreEstStatus: $.ASN1Encoder<PTCPreEstStatus> | null = null;

/**
 * @summary Encodes a(n) PTCPreEstStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCPreEstStatus, encoded as an ASN.1 Element.
 */
export
function _encode_PTCPreEstStatus (value: PTCPreEstStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCPreEstStatus) { _cached_encoder_for_PTCPreEstStatus = $._encodeEnumerated; }
    return _cached_encoder_for_PTCPreEstStatus(value, elGetter);
}


/* eslint-enable */
