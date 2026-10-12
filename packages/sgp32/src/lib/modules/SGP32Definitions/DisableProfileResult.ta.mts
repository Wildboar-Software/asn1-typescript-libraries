/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInEnabledState(2),
 *     disallowedByPolicy(3),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type DisableProfileResult = INTEGER;

/**
 * @summary DisableProfileResult_ok
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_ok: DisableProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DisableProfileResult = DisableProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_iccidOrAidNotFound: DisableProfileResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DisableProfileResult = DisableProfileResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_profileNotInEnabledState: DisableProfileResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableProfileResult = DisableProfileResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_disallowedByPolicy: DisableProfileResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DisableProfileResult = DisableProfileResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_catBusy: DisableProfileResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: DisableProfileResult = DisableProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DisableProfileResult_undefinedError: DisableProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableProfileResult = DisableProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DisableProfileResult: $.ASN1Decoder<DisableProfileResult> = $._decodeInteger;
export const _encode_DisableProfileResult: $.ASN1Encoder<DisableProfileResult> = $._encodeInteger;


/* eslint-enable */
