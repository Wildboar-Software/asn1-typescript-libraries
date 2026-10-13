/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FrameQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameQuality                  ::=  INTEGER
 * {   good                              (0)
 * ,   erred                             (1)
 * ,   undetermined                      (2)
 * }
 * ```
 */
export
type FrameQuality = INTEGER;

/**
 * @summary FrameQuality_good
 * @constant
 * @type {number}
 */
export
const FrameQuality_good: FrameQuality = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_good
 * @constant
 * @type {number}
 */
export
const good: FrameQuality = FrameQuality_good; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_erred
 * @constant
 * @type {number}
 */
export
const FrameQuality_erred: FrameQuality = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_erred
 * @constant
 * @type {number}
 */
export
const erred: FrameQuality = FrameQuality_erred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_undetermined
 * @constant
 * @type {number}
 */
export
const FrameQuality_undetermined: FrameQuality = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_undetermined
 * @constant
 * @type {number}
 */
export
const undetermined: FrameQuality = FrameQuality_undetermined; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_FrameQuality: $.ASN1Decoder<FrameQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FrameQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FrameQuality (el: _Element): FrameQuality {
    if (!_cached_decoder_for_FrameQuality) { _cached_decoder_for_FrameQuality = $._decodeInteger; }
    return _cached_decoder_for_FrameQuality(el);
}

let _cached_encoder_for_FrameQuality: $.ASN1Encoder<FrameQuality> | null = null;

/**
 * @summary Encodes a(n) FrameQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FrameQuality, encoded as an ASN.1 Element.
 */
export
function _encode_FrameQuality (value: FrameQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FrameQuality) { _cached_encoder_for_FrameQuality = $._encodeInteger; }
    return _cached_encoder_for_FrameQuality(value, elGetter);
}


/* eslint-enable */
