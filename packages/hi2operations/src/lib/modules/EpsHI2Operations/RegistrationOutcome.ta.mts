/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RegistrationOutcome {
    success = 0,
    failure = 1,
}

/**
 * @summary RegistrationOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationOutcome  ::=  ENUMERATED
 * {
 *  success (0),
 *  failure (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationOutcome = _enum_for_RegistrationOutcome | ENUMERATED;

/**
 * @summary RegistrationOutcome_success
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_success: RegistrationOutcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: RegistrationOutcome = RegistrationOutcome_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_failure: RegistrationOutcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: RegistrationOutcome = RegistrationOutcome_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RegistrationOutcome: $.ASN1Decoder<RegistrationOutcome> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationOutcome (el: _Element): RegistrationOutcome {
    if (!_cached_decoder_for_RegistrationOutcome) { _cached_decoder_for_RegistrationOutcome = $._decodeEnumerated; }
    return _cached_decoder_for_RegistrationOutcome(el);
}

let _cached_encoder_for_RegistrationOutcome: $.ASN1Encoder<RegistrationOutcome> | null = null;

/**
 * @summary Encodes a(n) RegistrationOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationOutcome, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationOutcome (value: RegistrationOutcome, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationOutcome) { _cached_encoder_for_RegistrationOutcome = $._encodeEnumerated; }
    return _cached_encoder_for_RegistrationOutcome(value, elGetter);
}


/* eslint-enable */
