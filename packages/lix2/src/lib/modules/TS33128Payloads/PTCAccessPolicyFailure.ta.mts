/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCAccessPolicyFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCAccessPolicyFailure {
    requestUnsuccessful = 1,
    requestUnknown = 2,
}

/**
 * @summary PTCAccessPolicyFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCAccessPolicyFailure = _enum_for_PTCAccessPolicyFailure;

/**
 * @summary PTCAccessPolicyFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCAccessPolicyFailure = _enum_for_PTCAccessPolicyFailure;

/**
 * @summary PTCAccessPolicyFailure_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyFailure_requestUnsuccessful: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyFailure_requestUnknown
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyFailure_requestUnknown: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnknown
 * @constant
 * @type {number}
 */
export
const requestUnknown: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCAccessPolicyFailure: $.ASN1Decoder<PTCAccessPolicyFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCAccessPolicyFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCAccessPolicyFailure (el: _Element): PTCAccessPolicyFailure {
    if (!_cached_decoder_for_PTCAccessPolicyFailure) { _cached_decoder_for_PTCAccessPolicyFailure = $._decodeEnumerated; }
    return _cached_decoder_for_PTCAccessPolicyFailure(el);
}

let _cached_encoder_for_PTCAccessPolicyFailure: $.ASN1Encoder<PTCAccessPolicyFailure> | null = null;

/**
 * @summary Encodes a(n) PTCAccessPolicyFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCAccessPolicyFailure, encoded as an ASN.1 Element.
 */
export
function _encode_PTCAccessPolicyFailure (value: PTCAccessPolicyFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCAccessPolicyFailure) { _cached_encoder_for_PTCAccessPolicyFailure = $._encodeEnumerated; }
    return _cached_encoder_for_PTCAccessPolicyFailure(value, elGetter);
}


/* eslint-enable */
