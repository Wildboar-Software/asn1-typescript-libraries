/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetFallbackAttributeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetFallbackAttributeResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound (1),
 *     fallbackNotAllowed (2),
 *     fallbackProfileEnabled (3),
 *     undefinedError (127)
 * }
 * ```
 */
export
type SetFallbackAttributeResult = INTEGER;

/**
 * @summary SetFallbackAttributeResult_ok
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_ok: SetFallbackAttributeResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_ok
 * @constant
 * @type {number}
 */
export
const ok: SetFallbackAttributeResult = SetFallbackAttributeResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_iccidOrAidNotFound: SetFallbackAttributeResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: SetFallbackAttributeResult = SetFallbackAttributeResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackNotAllowed
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_fallbackNotAllowed: SetFallbackAttributeResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackNotAllowed
 * @constant
 * @type {number}
 */
export
const fallbackNotAllowed: SetFallbackAttributeResult = SetFallbackAttributeResult_fallbackNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackProfileEnabled
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_fallbackProfileEnabled: SetFallbackAttributeResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_fallbackProfileEnabled
 * @constant
 * @type {number}
 */
export
const fallbackProfileEnabled: SetFallbackAttributeResult = SetFallbackAttributeResult_fallbackProfileEnabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_undefinedError
 * @constant
 * @type {number}
 */
export
const SetFallbackAttributeResult_undefinedError: SetFallbackAttributeResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetFallbackAttributeResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: SetFallbackAttributeResult = SetFallbackAttributeResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SetFallbackAttributeResult: $.ASN1Decoder<SetFallbackAttributeResult> = $._decodeInteger;
export const _encode_SetFallbackAttributeResult: $.ASN1Encoder<SetFallbackAttributeResult> = $._encodeInteger;


/* eslint-enable */
