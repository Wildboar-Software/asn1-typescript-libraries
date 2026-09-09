/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LampMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampMode  ::=  INTEGER
 * {     brokenFlutter                 (0),
 *     flutter                 (1),
 *     off                     (2),
 *     steady                     (3),
 *     wink                     (4),
 *     unknown                 (5) } (0..100)
 * ```
 */
export
type LampMode = INTEGER;

/**
 * @summary LampMode_brokenFlutter
 * @constant
 * @type {number}
 */
export
const LampMode_brokenFlutter: LampMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_brokenFlutter
 * @constant
 * @type {number}
 */
export
const brokenFlutter: LampMode = LampMode_brokenFlutter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_flutter
 * @constant
 * @type {number}
 */
export
const LampMode_flutter: LampMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_flutter
 * @constant
 * @type {number}
 */
export
const flutter: LampMode = LampMode_flutter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_off
 * @constant
 * @type {number}
 */
export
const LampMode_off: LampMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_off
 * @constant
 * @type {number}
 */
export
const off: LampMode = LampMode_off; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_steady
 * @constant
 * @type {number}
 */
export
const LampMode_steady: LampMode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_steady
 * @constant
 * @type {number}
 */
export
const steady: LampMode = LampMode_steady; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_wink
 * @constant
 * @type {number}
 */
export
const LampMode_wink: LampMode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_wink
 * @constant
 * @type {number}
 */
export
const wink: LampMode = LampMode_wink; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_unknown
 * @constant
 * @type {number}
 */
export
const LampMode_unknown: LampMode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampMode_unknown
 * @constant
 * @type {number}
 */
export
const unknown: LampMode = LampMode_unknown; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LampMode: $.ASN1Decoder<LampMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampMode (el: _Element): LampMode {
    if (!_cached_decoder_for_LampMode) { _cached_decoder_for_LampMode = $._decodeInteger; }
    return _cached_decoder_for_LampMode(el);
}

let _cached_encoder_for_LampMode: $.ASN1Encoder<LampMode> | null = null;

/**
 * @summary Encodes a(n) LampMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampMode, encoded as an ASN.1 Element.
 */
export
function _encode_LampMode (value: LampMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampMode) { _cached_encoder_for_LampMode = $._encodeInteger; }
    return _cached_encoder_for_LampMode(value, elGetter);
}


/* eslint-enable */
