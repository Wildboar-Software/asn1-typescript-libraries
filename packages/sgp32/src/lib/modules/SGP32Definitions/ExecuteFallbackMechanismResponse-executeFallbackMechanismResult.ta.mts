/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteFallbackMechanismResponse-executeFallbackMechanismResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = INTEGER;

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable
 * @constant
 * @type {number}
 */
export
const fallbackNotAvailable: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_fallbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive
 * @constant
 * @type {number}
 */
export
const ecallActive: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = ExecuteFallbackMechanismResponse_executeFallbackMechanismResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult: $.ASN1Decoder<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteFallbackMechanismResponse_executeFallbackMechanismResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult (el: _Element): ExecuteFallbackMechanismResponse_executeFallbackMechanismResult {
    if (!_cached_decoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult) { _cached_decoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = $._decodeInteger; }
    return _cached_decoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult(el);
}

let _cached_encoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult: $.ASN1Encoder<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult> | null = null;

/**
 * @summary Encodes a(n) ExecuteFallbackMechanismResponse_executeFallbackMechanismResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult (value: ExecuteFallbackMechanismResponse_executeFallbackMechanismResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult) { _cached_encoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult = $._encodeInteger; }
    return _cached_encoder_for_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult(value, elGetter);
}


/* eslint-enable */
