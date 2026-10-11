/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReturnFromFallbackResponse-returnFromFallbackResult ::= INTEGER {
 *     ok(0),
 *     catBusy(5),
 *     fallbackNotAvailable(6), -- Fallback Attribute not set
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ReturnFromFallbackResponse_returnFromFallbackResult = INTEGER;

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_ok
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_ok: ReturnFromFallbackResponse_returnFromFallbackResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_catBusy
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_catBusy: ReturnFromFallbackResponse_returnFromFallbackResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable: ReturnFromFallbackResponse_returnFromFallbackResult = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable
 * @constant
 * @type {number}
 */
export
const fallbackNotAvailable: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_fallbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_commandError
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_commandError: ReturnFromFallbackResponse_returnFromFallbackResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError: ReturnFromFallbackResponse_returnFromFallbackResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ReturnFromFallbackResponse_returnFromFallbackResult = ReturnFromFallbackResponse_returnFromFallbackResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReturnFromFallbackResponse_returnFromFallbackResult: $.ASN1Decoder<ReturnFromFallbackResponse_returnFromFallbackResult> = $._decodeInteger;
export const _encode_ReturnFromFallbackResponse_returnFromFallbackResult: $.ASN1Encoder<ReturnFromFallbackResponse_returnFromFallbackResult> = $._encodeInteger;


/* eslint-enable */
