/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary LampBrightness
 * @description
 *
 * Intensity while the lamp is on (as indicated by lamp mode). Visible levels
 * are lamp-dependent. Default Unspecified/Normal. ECMA-269 §21.1.17.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampBrightness  ::=  ENUMERATED
 * {     unspecified                 (0),
 *     dim                     (1),
 *     bright                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LampBrightness {
    unspecified = 0,
    dim = 1,
    bright = 2,
}

/**
 * @summary LampBrightness
 * @description
 *
 * Intensity while the lamp is on (as indicated by lamp mode). Visible levels
 * are lamp-dependent. Default Unspecified/Normal. ECMA-269 §21.1.17.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampBrightness  ::=  ENUMERATED
 * {     unspecified                 (0),
 *     dim                     (1),
 *     bright                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
type LampBrightness = _enum_for_LampBrightness;

/**
 * @summary LampBrightness
 * @description
 *
 * Intensity while the lamp is on (as indicated by lamp mode). Visible levels
 * are lamp-dependent. Default Unspecified/Normal. ECMA-269 §21.1.17.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampBrightness  ::=  ENUMERATED
 * {     unspecified                 (0),
 *     dim                     (1),
 *     bright                     (2) }
 * ```
 * 
 * @enum {number}
 */
export
const LampBrightness = _enum_for_LampBrightness;

/**
 * @summary LampBrightness_unspecified
 * @description
 *
 * Unspecified/Normal (default). ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampBrightness_unspecified: LampBrightness = LampBrightness.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: LampBrightness = LampBrightness.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LampBrightness_dim
 * @description
 *
 * Dim. ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampBrightness_dim: LampBrightness = LampBrightness.dim; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dim
 * @constant
 * @type {number}
 */
export
const dim: LampBrightness = LampBrightness.dim; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LampBrightness_bright
 * @description
 *
 * Bright. ECMA-269 §21.1.17.
 *
 * @constant
 * @type {number}
 */
export
const LampBrightness_bright: LampBrightness = LampBrightness.bright; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bright
 * @constant
 * @type {number}
 */
export
const bright: LampBrightness = LampBrightness.bright; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LampBrightness: $.ASN1Decoder<LampBrightness> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampBrightness
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampBrightness (el: _Element): LampBrightness {
    if (!_cached_decoder_for_LampBrightness) { _cached_decoder_for_LampBrightness = $._decodeEnumerated; }
    return _cached_decoder_for_LampBrightness(el);
}

let _cached_encoder_for_LampBrightness: $.ASN1Encoder<LampBrightness> | null = null;

/**
 * @summary Encodes a(n) LampBrightness into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampBrightness, encoded as an ASN.1 Element.
 */
export
function _encode_LampBrightness (value: LampBrightness, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampBrightness) { _cached_encoder_for_LampBrightness = $._encodeEnumerated; }
    return _cached_encoder_for_LampBrightness(value, elGetter);
}


/* eslint-enable */
