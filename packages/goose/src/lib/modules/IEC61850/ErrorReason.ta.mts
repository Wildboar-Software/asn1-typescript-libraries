/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorReason  ::=  INTEGER {
 *     other (0),
 *     notFound (1) --,
 * --    ...
 * }
 * ```
 */
export
type ErrorReason = INTEGER;

/**
 * @summary ErrorReason_other
 * @constant
 * @type {number}
 */
export
const ErrorReason_other: ErrorReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_other
 * @constant
 * @type {number}
 */
export
const other: ErrorReason = ErrorReason_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_notFound
 * @constant
 * @type {number}
 */
export
const ErrorReason_notFound: ErrorReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_notFound
 * @constant
 * @type {number}
 */
export
const notFound: ErrorReason = ErrorReason_notFound; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ErrorReason: $.ASN1Decoder<ErrorReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorReason (el: _Element): ErrorReason {
    if (!_cached_decoder_for_ErrorReason) { _cached_decoder_for_ErrorReason = $._decodeInteger; }
    return _cached_decoder_for_ErrorReason(el);
}

let _cached_encoder_for_ErrorReason: $.ASN1Encoder<ErrorReason> | null = null;

/**
 * @summary Encodes a(n) ErrorReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorReason, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorReason (value: ErrorReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorReason) { _cached_encoder_for_ErrorReason = $._encodeInteger; }
    return _cached_encoder_for_ErrorReason(value, elGetter);
}


/* eslint-enable */
