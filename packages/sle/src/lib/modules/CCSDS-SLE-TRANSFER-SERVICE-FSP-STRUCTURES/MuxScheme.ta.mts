/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MuxScheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxScheme                ::=    INTEGER
 * {  fifo                          (0)
 * ,  absolute-priority             (1)
 * ,  polling-vector                (2)
 * }
 * ```
 */
export
type MuxScheme = INTEGER;

/**
 * @summary MuxScheme_fifo
 * @constant
 * @type {number}
 */
export
const MuxScheme_fifo: MuxScheme = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_fifo
 * @constant
 * @type {number}
 */
export
const fifo: MuxScheme = MuxScheme_fifo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_absolute_priority
 * @constant
 * @type {number}
 */
export
const MuxScheme_absolute_priority: MuxScheme = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_absolute_priority
 * @constant
 * @type {number}
 */
export
const absolute_priority: MuxScheme = MuxScheme_absolute_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_polling_vector
 * @constant
 * @type {number}
 */
export
const MuxScheme_polling_vector: MuxScheme = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MuxScheme_polling_vector
 * @constant
 * @type {number}
 */
export
const polling_vector: MuxScheme = MuxScheme_polling_vector; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_MuxScheme: $.ASN1Decoder<MuxScheme> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MuxScheme
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MuxScheme (el: _Element): MuxScheme {
    if (!_cached_decoder_for_MuxScheme) { _cached_decoder_for_MuxScheme = $._decodeInteger; }
    return _cached_decoder_for_MuxScheme(el);
}

let _cached_encoder_for_MuxScheme: $.ASN1Encoder<MuxScheme> | null = null;

/**
 * @summary Encodes a(n) MuxScheme into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MuxScheme, encoded as an ASN.1 Element.
 */
export
function _encode_MuxScheme (value: MuxScheme, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MuxScheme) { _cached_encoder_for_MuxScheme = $._encodeInteger; }
    return _cached_encoder_for_MuxScheme(value, elGetter);
}


/* eslint-enable */
