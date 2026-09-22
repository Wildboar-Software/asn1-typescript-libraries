/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableEmergencyProfileResponse-enableEmergencyProfileResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EnableEmergencyProfileResponse_enableEmergencyProfileResult = INTEGER;

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const ecallNotAvailable: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_ecallNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError: EnableEmergencyProfileResponse_enableEmergencyProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EnableEmergencyProfileResponse_enableEmergencyProfileResult = EnableEmergencyProfileResponse_enableEmergencyProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult: $.ASN1Decoder<EnableEmergencyProfileResponse_enableEmergencyProfileResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableEmergencyProfileResponse_enableEmergencyProfileResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableEmergencyProfileResponse_enableEmergencyProfileResult (el: _Element): EnableEmergencyProfileResponse_enableEmergencyProfileResult {
    if (!_cached_decoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult) { _cached_decoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult = $._decodeInteger; }
    return _cached_decoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult(el);
}

let _cached_encoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult: $.ASN1Encoder<EnableEmergencyProfileResponse_enableEmergencyProfileResult> | null = null;

/**
 * @summary Encodes a(n) EnableEmergencyProfileResponse_enableEmergencyProfileResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableEmergencyProfileResponse_enableEmergencyProfileResult, encoded as an ASN.1 Element.
 */
export
function _encode_EnableEmergencyProfileResponse_enableEmergencyProfileResult (value: EnableEmergencyProfileResponse_enableEmergencyProfileResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult) { _cached_encoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult = $._encodeInteger; }
    return _cached_encoder_for_EnableEmergencyProfileResponse_enableEmergencyProfileResult(value, elGetter);
}


/* eslint-enable */
