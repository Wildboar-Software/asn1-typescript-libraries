/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LampColor
 * @description
 *
 * Lamp color. 0–4 are pre-assigned; 5 is not used in §21.1.17 (ECMA-285 names
 * it `unknown`); 6–100 are switching-function specific. ECMA-269 §21.1.17.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampColor  ::=  INTEGER
 * {     noColor                 (0),
 *     red                     (1),
 *     yellow                     (2),
 *     green                     (3),
 *     blue                     (4),
 *     unknown                 (5) } (0..100)
 * ```
 */
export
type LampColor = INTEGER;

/**
 * @summary LampColor_noColor
 * @description
 *
 * No color (0). ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampColor_noColor = 0 satisfies LampColor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_noColor
 * @constant
 * @type {number}
 */
export
const noColor = LampColor_noColor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_red
 * @description
 *
 * Red (1). ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampColor_red = 1 satisfies LampColor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_red
 * @constant
 * @type {number}
 */
export
const red = LampColor_red; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_yellow
 * @description
 *
 * Yellow (2). ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampColor_yellow = 2 satisfies LampColor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_yellow
 * @constant
 * @type {number}
 */
export
const yellow = LampColor_yellow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_green
 * @description
 *
 * Green (3). ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampColor_green = 3 satisfies LampColor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_green
 * @constant
 * @type {number}
 */
export
const green = LampColor_green; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_blue
 * @description
 *
 * Blue (4). ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampColor_blue = 4 satisfies LampColor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_blue
 * @constant
 * @type {number}
 */
export
const blue = LampColor_blue; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_unknown
 * @description
 *
 * Value 5 is not used in §21.1.17; ECMA-285 names it `unknown`. ECMA-269
 * §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampColor_unknown = 5 satisfies LampColor; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LampColor_unknown
 * @constant
 * @type {number}
 */
export
const unknown = LampColor_unknown; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LampColor: $.ASN1Decoder<LampColor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampColor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampColor (el: _Element): LampColor {
    if (!_cached_decoder_for_LampColor) { _cached_decoder_for_LampColor = $._decodeInteger; }
    return _cached_decoder_for_LampColor(el);
}

let _cached_encoder_for_LampColor: $.ASN1Encoder<LampColor> | null = null;

/**
 * @summary Encodes a(n) LampColor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampColor, encoded as an ASN.1 Element.
 */
export
function _encode_LampColor (value: LampColor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampColor) { _cached_encoder_for_LampColor = $._encodeInteger; }
    return _cached_encoder_for_LampColor(value, elGetter);
}


/* eslint-enable */
