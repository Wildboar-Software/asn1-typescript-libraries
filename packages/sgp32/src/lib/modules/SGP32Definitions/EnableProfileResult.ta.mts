/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInDisabledState(2),
 *     disallowedByPolicy(3),
 *     catBusy(5),
 *     rollbackNotAvailable(20),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EnableProfileResult = INTEGER;

/**
 * @summary EnableProfileResult_ok
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_ok: EnableProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EnableProfileResult = EnableProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_iccidOrAidNotFound: EnableProfileResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: EnableProfileResult = EnableProfileResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_profileNotInDisabledState: EnableProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: EnableProfileResult = EnableProfileResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_disallowedByPolicy: EnableProfileResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: EnableProfileResult = EnableProfileResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_catBusy: EnableProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EnableProfileResult = EnableProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_rollbackNotAvailable
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_rollbackNotAvailable: EnableProfileResult = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_rollbackNotAvailable
 * @constant
 * @type {number}
 */
export
const rollbackNotAvailable: EnableProfileResult = EnableProfileResult_rollbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EnableProfileResult_undefinedError: EnableProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EnableProfileResult = EnableProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableProfileResult: $.ASN1Decoder<EnableProfileResult> = $._decodeInteger;
export const _encode_EnableProfileResult: $.ASN1Encoder<EnableProfileResult> = $._encodeInteger;


/* eslint-enable */
