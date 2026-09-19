/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableEmergencyProfileResponse-disableEmergencyProfileResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DisableEmergencyProfileResponse_disableEmergencyProfileResult = INTEGER;

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable
 * @constant
 * @type {number}
 */
export
const ecallNotAvailable: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_ecallNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError: DisableEmergencyProfileResponse_disableEmergencyProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableEmergencyProfileResponse_disableEmergencyProfileResult = DisableEmergencyProfileResponse_disableEmergencyProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult: $.ASN1Decoder<DisableEmergencyProfileResponse_disableEmergencyProfileResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisableEmergencyProfileResponse_disableEmergencyProfileResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisableEmergencyProfileResponse_disableEmergencyProfileResult (el: _Element): DisableEmergencyProfileResponse_disableEmergencyProfileResult {
    if (!_cached_decoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult) { _cached_decoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult = $._decodeInteger; }
    return _cached_decoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult(el);
}

let _cached_encoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult: $.ASN1Encoder<DisableEmergencyProfileResponse_disableEmergencyProfileResult> | null = null;

/**
 * @summary Encodes a(n) DisableEmergencyProfileResponse_disableEmergencyProfileResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisableEmergencyProfileResponse_disableEmergencyProfileResult, encoded as an ASN.1 Element.
 */
export
function _encode_DisableEmergencyProfileResponse_disableEmergencyProfileResult (value: DisableEmergencyProfileResponse_disableEmergencyProfileResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult) { _cached_encoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult = $._encodeInteger; }
    return _cached_encoder_for_DisableEmergencyProfileResponse_disableEmergencyProfileResult(value, elGetter);
}


/* eslint-enable */
