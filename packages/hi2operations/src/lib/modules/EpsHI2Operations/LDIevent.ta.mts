/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LDIevent {
    targetEntersIA = 1,
    targetLeavesIA = 2,
}

/**
 * @summary LDIevent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LDIevent  ::=  ENUMERATED
 * {
 *  targetEntersIA (1),
 *  targetLeavesIA (2),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type LDIevent = _enum_for_LDIevent | ENUMERATED;

/**
 * @summary LDIevent_targetEntersIA
 * @constant
 * @type {number}
 */
export
const LDIevent_targetEntersIA: LDIevent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetEntersIA
 * @constant
 * @type {number}
 */
export
const targetEntersIA: LDIevent = LDIevent_targetEntersIA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LDIevent_targetLeavesIA
 * @constant
 * @type {number}
 */
export
const LDIevent_targetLeavesIA: LDIevent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetLeavesIA
 * @constant
 * @type {number}
 */
export
const targetLeavesIA: LDIevent = LDIevent_targetLeavesIA; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_LDIevent: $.ASN1Decoder<LDIevent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LDIevent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LDIevent (el: _Element): LDIevent {
    if (!_cached_decoder_for_LDIevent) { _cached_decoder_for_LDIevent = $._decodeEnumerated; }
    return _cached_decoder_for_LDIevent(el);
}

let _cached_encoder_for_LDIevent: $.ASN1Encoder<LDIevent> | null = null;

/**
 * @summary Encodes a(n) LDIevent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDIevent, encoded as an ASN.1 Element.
 */
export
function _encode_LDIevent (value: LDIevent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LDIevent) { _cached_encoder_for_LDIevent = $._encodeEnumerated; }
    return _cached_encoder_for_LDIevent(value, elGetter);
}


/* eslint-enable */
