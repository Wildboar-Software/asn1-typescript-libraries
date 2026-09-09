/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary VoiceAttributesChangeEvent_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceAttributesChangeEvent_mode ::= ENUMERATED {
 *     automatic (0),
 *     single (1),
 *     multiple (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VoiceAttributesChangeEvent_mode {
    automatic = 0,
    single = 1,
    multiple = 2,
}

/**
 * @summary VoiceAttributesChangeEvent_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceAttributesChangeEvent_mode ::= ENUMERATED {
 *     automatic (0),
 *     single (1),
 *     multiple (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VoiceAttributesChangeEvent_mode = _enum_for_VoiceAttributesChangeEvent_mode;

/**
 * @summary VoiceAttributesChangeEvent_mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceAttributesChangeEvent_mode ::= ENUMERATED {
 *     automatic (0),
 *     single (1),
 *     multiple (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VoiceAttributesChangeEvent_mode = _enum_for_VoiceAttributesChangeEvent_mode;

/**
 * @summary VoiceAttributesChangeEvent_mode_automatic
 * @constant
 * @type {number}
 */
export
const VoiceAttributesChangeEvent_mode_automatic: VoiceAttributesChangeEvent_mode = VoiceAttributesChangeEvent_mode.automatic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary automatic
 * @constant
 * @type {number}
 */
export
const automatic: VoiceAttributesChangeEvent_mode = VoiceAttributesChangeEvent_mode.automatic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoiceAttributesChangeEvent_mode_single
 * @constant
 * @type {number}
 */
export
const VoiceAttributesChangeEvent_mode_single: VoiceAttributesChangeEvent_mode = VoiceAttributesChangeEvent_mode.single; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary single
 * @constant
 * @type {number}
 */
export
const single: VoiceAttributesChangeEvent_mode = VoiceAttributesChangeEvent_mode.single; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VoiceAttributesChangeEvent_mode_multiple
 * @constant
 * @type {number}
 */
export
const VoiceAttributesChangeEvent_mode_multiple: VoiceAttributesChangeEvent_mode = VoiceAttributesChangeEvent_mode.multiple; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multiple
 * @constant
 * @type {number}
 */
export
const multiple: VoiceAttributesChangeEvent_mode = VoiceAttributesChangeEvent_mode.multiple; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VoiceAttributesChangeEvent_mode: $.ASN1Decoder<VoiceAttributesChangeEvent_mode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceAttributesChangeEvent_mode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceAttributesChangeEvent_mode (el: _Element): VoiceAttributesChangeEvent_mode {
    if (!_cached_decoder_for_VoiceAttributesChangeEvent_mode) { _cached_decoder_for_VoiceAttributesChangeEvent_mode = $._decodeEnumerated; }
    return _cached_decoder_for_VoiceAttributesChangeEvent_mode(el);
}

let _cached_encoder_for_VoiceAttributesChangeEvent_mode: $.ASN1Encoder<VoiceAttributesChangeEvent_mode> | null = null;

/**
 * @summary Encodes a(n) VoiceAttributesChangeEvent_mode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceAttributesChangeEvent_mode, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceAttributesChangeEvent_mode (value: VoiceAttributesChangeEvent_mode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceAttributesChangeEvent_mode) { _cached_encoder_for_VoiceAttributesChangeEvent_mode = $._encodeEnumerated; }
    return _cached_encoder_for_VoiceAttributesChangeEvent_mode(value, elGetter);
}


/* eslint-enable */
