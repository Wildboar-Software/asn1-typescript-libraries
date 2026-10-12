/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AAAauthMethod {
    undefinedAuthMethod = 1,
    cramMD5 = 2,
    digestMD5 = 3,
}

/**
 * @summary AAAauthMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAAauthMethod  ::=  ENUMERATED
 * {
 *     undefinedAuthMethod(1),
 *     cramMD5(2),
 *     digestMD5(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AAAauthMethod = _enum_for_AAAauthMethod | ENUMERATED;

/**
 * @summary AAAauthMethod_undefinedAuthMethod
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_undefinedAuthMethod: AAAauthMethod = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefinedAuthMethod
 * @constant
 * @type {number}
 */
export
const undefinedAuthMethod: AAAauthMethod = AAAauthMethod_undefinedAuthMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAauthMethod_cramMD5
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_cramMD5: AAAauthMethod = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cramMD5
 * @constant
 * @type {number}
 */
export
const cramMD5: AAAauthMethod = AAAauthMethod_cramMD5; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAauthMethod_digestMD5
 * @constant
 * @type {number}
 */
export
const AAAauthMethod_digestMD5: AAAauthMethod = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digestMD5
 * @constant
 * @type {number}
 */
export
const digestMD5: AAAauthMethod = AAAauthMethod_digestMD5; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AAAauthMethod: $.ASN1Decoder<AAAauthMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAAauthMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAAauthMethod (el: _Element): AAAauthMethod {
    if (!_cached_decoder_for_AAAauthMethod) { _cached_decoder_for_AAAauthMethod = $._decodeEnumerated; }
    return _cached_decoder_for_AAAauthMethod(el);
}

let _cached_encoder_for_AAAauthMethod: $.ASN1Encoder<AAAauthMethod> | null = null;

/**
 * @summary Encodes a(n) AAAauthMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAAauthMethod, encoded as an ASN.1 Element.
 */
export
function _encode_AAAauthMethod (value: AAAauthMethod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAAauthMethod) { _cached_encoder_for_AAAauthMethod = $._encodeEnumerated; }
    return _cached_encoder_for_AAAauthMethod(value, elGetter);
}


/* eslint-enable */
