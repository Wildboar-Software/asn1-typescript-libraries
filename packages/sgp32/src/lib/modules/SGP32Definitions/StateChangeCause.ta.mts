/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StateChangeCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateChangeCause  ::=  INTEGER { 
 *     otherEim(0), -- for change(s) requested by another registered eIM 
 *     fallback(1), -- for change(s) following fallback requested by IPA 
 *     emergencyProfile(2), -- for change(s) following Emergency Profile swap requested by IPA
 *     local(3), -- for change(s) applied locally (RFU, not supported in this version) 
 *     reset(4), -- for change(s) following an euicc reset
 *     immediateEnableProfile(5), -- for change(s) following immediate Profile enabling requested by IPA  
 *     deviceChange(6), -- for change(s) detected by IPAe following a IoT Device change (removable eSIMs)
 *     undefined(127)  -- unknown cause  
 * }
 * ```
 */
export
type StateChangeCause = INTEGER;

/**
 * @summary StateChangeCause_otherEim
 * @constant
 * @type {number}
 */
export
const StateChangeCause_otherEim: StateChangeCause = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_otherEim
 * @constant
 * @type {number}
 */
export
const otherEim: StateChangeCause = StateChangeCause_otherEim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_fallback
 * @constant
 * @type {number}
 */
export
const StateChangeCause_fallback: StateChangeCause = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_fallback
 * @constant
 * @type {number}
 */
export
const fallback: StateChangeCause = StateChangeCause_fallback; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_emergencyProfile
 * @constant
 * @type {number}
 */
export
const StateChangeCause_emergencyProfile: StateChangeCause = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_emergencyProfile
 * @constant
 * @type {number}
 */
export
const emergencyProfile: StateChangeCause = StateChangeCause_emergencyProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_local
 * @constant
 * @type {number}
 */
export
const StateChangeCause_local: StateChangeCause = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_local
 * @constant
 * @type {number}
 */
export
const local: StateChangeCause = StateChangeCause_local; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_reset
 * @constant
 * @type {number}
 */
export
const StateChangeCause_reset: StateChangeCause = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_reset
 * @constant
 * @type {number}
 */
export
const reset: StateChangeCause = StateChangeCause_reset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_immediateEnableProfile
 * @constant
 * @type {number}
 */
export
const StateChangeCause_immediateEnableProfile: StateChangeCause = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_immediateEnableProfile
 * @constant
 * @type {number}
 */
export
const immediateEnableProfile: StateChangeCause = StateChangeCause_immediateEnableProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_deviceChange
 * @constant
 * @type {number}
 */
export
const StateChangeCause_deviceChange: StateChangeCause = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_deviceChange
 * @constant
 * @type {number}
 */
export
const deviceChange: StateChangeCause = StateChangeCause_deviceChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_undefined
 * @constant
 * @type {number}
 */
export
const StateChangeCause_undefined: StateChangeCause = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_undefined
 * @constant
 * @type {number}
 */
export
const undefined: StateChangeCause = StateChangeCause_undefined; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_StateChangeCause: $.ASN1Decoder<StateChangeCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StateChangeCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StateChangeCause (el: _Element): StateChangeCause {
    if (!_cached_decoder_for_StateChangeCause) { _cached_decoder_for_StateChangeCause = $._decodeInteger; }
    return _cached_decoder_for_StateChangeCause(el);
}

let _cached_encoder_for_StateChangeCause: $.ASN1Encoder<StateChangeCause> | null = null;

/**
 * @summary Encodes a(n) StateChangeCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateChangeCause, encoded as an ASN.1 Element.
 */
export
function _encode_StateChangeCause (value: StateChangeCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StateChangeCause) { _cached_encoder_for_StateChangeCause = $._encodeInteger; }
    return _cached_encoder_for_StateChangeCause(value, elGetter);
}


/* eslint-enable */
