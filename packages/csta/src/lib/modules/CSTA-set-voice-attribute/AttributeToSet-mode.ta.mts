/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AttributeToSet_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToSet_mode ::= ENUMERATED {
 *     automatic (0),
 *     single (1),
 *     multiple (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AttributeToSet_mode {
    automatic = 0,
    single = 1,
    multiple = 2,
}

/**
 * @summary AttributeToSet_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToSet_mode ::= ENUMERATED {
 *     automatic (0),
 *     single (1),
 *     multiple (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeToSet_mode = _enum_for_AttributeToSet_mode;

/**
 * @summary AttributeToSet_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeToSet_mode ::= ENUMERATED {
 *     automatic (0),
 *     single (1),
 *     multiple (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AttributeToSet_mode = _enum_for_AttributeToSet_mode;

/**
 * @summary AttributeToSet_mode_automatic
 * @constant
 * @type {number}
 */
export
const AttributeToSet_mode_automatic: AttributeToSet_mode = AttributeToSet_mode.automatic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary automatic
 * @constant
 * @type {number}
 */
export
const automatic: AttributeToSet_mode = AttributeToSet_mode.automatic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToSet_mode_single
 * @constant
 * @type {number}
 */
export
const AttributeToSet_mode_single: AttributeToSet_mode = AttributeToSet_mode.single; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary single
 * @constant
 * @type {number}
 */
export
const single: AttributeToSet_mode = AttributeToSet_mode.single; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeToSet_mode_multiple
 * @constant
 * @type {number}
 */
export
const AttributeToSet_mode_multiple: AttributeToSet_mode = AttributeToSet_mode.multiple; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiple
 * @constant
 * @type {number}
 */
export
const multiple: AttributeToSet_mode = AttributeToSet_mode.multiple; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AttributeToSet_mode: $.ASN1Decoder<AttributeToSet_mode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeToSet_mode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeToSet_mode (el: _Element): AttributeToSet_mode {
    if (!_cached_decoder_for_AttributeToSet_mode) { _cached_decoder_for_AttributeToSet_mode = $._decodeEnumerated; }
    return _cached_decoder_for_AttributeToSet_mode(el);
}

let _cached_encoder_for_AttributeToSet_mode: $.ASN1Encoder<AttributeToSet_mode> | null = null;

/**
 * @summary Encodes a(n) AttributeToSet_mode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeToSet_mode, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeToSet_mode (value: AttributeToSet_mode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeToSet_mode) { _cached_encoder_for_AttributeToSet_mode = $._encodeEnumerated; }
    return _cached_encoder_for_AttributeToSet_mode(value, elGetter);
}


/* eslint-enable */
