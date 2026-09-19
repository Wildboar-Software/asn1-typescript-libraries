/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationResult  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPAndNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFRegistrationResult {
    threeGPPAccess = 1,
    nonThreeGPPAccess = 2,
    threeGPPAndNonThreeGPPAccess = 3,
}

/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationResult  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPAndNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFRegistrationResult = _enum_for_AMFRegistrationResult;

/**
 * @summary AMFRegistrationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistrationResult  ::=  ENUMERATED
 * {
 *     threeGPPAccess(1),
 *     nonThreeGPPAccess(2),
 *     threeGPPAndNonThreeGPPAccess(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFRegistrationResult = _enum_for_AMFRegistrationResult;

/**
 * @summary AMFRegistrationResult_threeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_threeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationResult_nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_nonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.nonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const nonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.nonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFRegistrationResult_threeGPPAndNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const AMFRegistrationResult_threeGPPAndNonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAndNonThreeGPPAccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeGPPAndNonThreeGPPAccess
 * @constant
 * @type {number}
 */
export
const threeGPPAndNonThreeGPPAccess: AMFRegistrationResult = AMFRegistrationResult.threeGPPAndNonThreeGPPAccess; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AMFRegistrationResult: $.ASN1Decoder<AMFRegistrationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRegistrationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRegistrationResult (el: _Element): AMFRegistrationResult {
    if (!_cached_decoder_for_AMFRegistrationResult) { _cached_decoder_for_AMFRegistrationResult = $._decodeEnumerated; }
    return _cached_decoder_for_AMFRegistrationResult(el);
}

let _cached_encoder_for_AMFRegistrationResult: $.ASN1Encoder<AMFRegistrationResult> | null = null;

/**
 * @summary Encodes a(n) AMFRegistrationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRegistrationResult, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRegistrationResult (value: AMFRegistrationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRegistrationResult) { _cached_encoder_for_AMFRegistrationResult = $._encodeEnumerated; }
    return _cached_encoder_for_AMFRegistrationResult(value, elGetter);
}


/* eslint-enable */
