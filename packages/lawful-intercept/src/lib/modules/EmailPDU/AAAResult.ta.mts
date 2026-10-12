/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AAAResult {
    resultUnknown = 1,
    aAAFailed = 2,
    aAASucceeded = 3,
}

/**
 * @summary AAAResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAAResult  ::=  ENUMERATED
 * {
 *     resultUnknown(1),
 *     aAAFailed(2),
 *     aAASucceeded(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AAAResult = _enum_for_AAAResult | ENUMERATED;

/**
 * @summary AAAResult_resultUnknown
 * @constant
 * @type {number}
 */
export
const AAAResult_resultUnknown: AAAResult = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resultUnknown
 * @constant
 * @type {number}
 */
export
const resultUnknown: AAAResult = AAAResult_resultUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAResult_aAAFailed
 * @constant
 * @type {number}
 */
export
const AAAResult_aAAFailed: AAAResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aAAFailed
 * @constant
 * @type {number}
 */
export
const aAAFailed: AAAResult = AAAResult_aAAFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AAAResult_aAASucceeded
 * @constant
 * @type {number}
 */
export
const AAAResult_aAASucceeded: AAAResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aAASucceeded
 * @constant
 * @type {number}
 */
export
const aAASucceeded: AAAResult = AAAResult_aAASucceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AAAResult: $.ASN1Decoder<AAAResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAAResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAAResult (el: _Element): AAAResult {
    if (!_cached_decoder_for_AAAResult) { _cached_decoder_for_AAAResult = $._decodeEnumerated; }
    return _cached_decoder_for_AAAResult(el);
}

let _cached_encoder_for_AAAResult: $.ASN1Encoder<AAAResult> | null = null;

/**
 * @summary Encodes a(n) AAAResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAAResult, encoded as an ASN.1 Element.
 */
export
function _encode_AAAResult (value: AAAResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAAResult) { _cached_encoder_for_AAAResult = $._encodeEnumerated; }
    return _cached_encoder_for_AAAResult(value, elGetter);
}


/* eslint-enable */
