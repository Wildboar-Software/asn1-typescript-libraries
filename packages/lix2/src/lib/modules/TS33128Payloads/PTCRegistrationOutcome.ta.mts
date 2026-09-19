/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCRegistrationOutcome {
    success = 1,
    failure = 2,
}

/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome_success
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_success: PTCRegistrationOutcome = PTCRegistrationOutcome.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: PTCRegistrationOutcome = PTCRegistrationOutcome.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCRegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_failure: PTCRegistrationOutcome = PTCRegistrationOutcome.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: PTCRegistrationOutcome = PTCRegistrationOutcome.failure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCRegistrationOutcome: $.ASN1Decoder<PTCRegistrationOutcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistrationOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCRegistrationOutcome (el: _Element): PTCRegistrationOutcome {
    if (!_cached_decoder_for_PTCRegistrationOutcome) { _cached_decoder_for_PTCRegistrationOutcome = $._decodeEnumerated; }
    return _cached_decoder_for_PTCRegistrationOutcome(el);
}

let _cached_encoder_for_PTCRegistrationOutcome: $.ASN1Encoder<PTCRegistrationOutcome> | null = null;

/**
 * @summary Encodes a(n) PTCRegistrationOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistrationOutcome, encoded as an ASN.1 Element.
 */
export
function _encode_PTCRegistrationOutcome (value: PTCRegistrationOutcome, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCRegistrationOutcome) { _cached_encoder_for_PTCRegistrationOutcome = $._encodeEnumerated; }
    return _cached_encoder_for_PTCRegistrationOutcome(value, elGetter);
}


/* eslint-enable */
