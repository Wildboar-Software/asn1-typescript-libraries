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
 * ExecuteFallbackMechanismResponse-executeFallbackMechanismResult ::= INTEGER {
 *     ok(0),
 *     profileNotInDisabledState(2),
 *     catBusy(5),
 *     fallbackNotAvailable(6), -- Fallback Attribute not set
 *     commandError(7),
 *     ecallActive(104),
 *     undefinedError(127)
 * }
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
export const _decode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult: $.ASN1Decoder<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult> = $._decodeInteger;
export const _encode_ExecuteFallbackMechanismResponse_executeFallbackMechanismResult: $.ASN1Encoder<ExecuteFallbackMechanismResponse_executeFallbackMechanismResult> = $._encodeInteger;


/* eslint-enable */
