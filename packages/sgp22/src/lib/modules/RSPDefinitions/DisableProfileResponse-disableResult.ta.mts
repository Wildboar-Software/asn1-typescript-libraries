/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableProfileResponse_disableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisableProfileResponse-disableResult ::= INTEGER {
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
type DisableProfileResponse_disableResult = INTEGER;

/**
 * @summary DisableProfileResponse_disableResult_ok
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_ok: DisableProfileResponse_disableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_iccidOrAidNotFound: DisableProfileResponse_disableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_profileNotInEnabledState: DisableProfileResponse_disableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_profileNotInEnabledState
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_disallowedByPolicy: DisableProfileResponse_disableResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_catBusy
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_catBusy: DisableProfileResponse_disableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_undefinedError: DisableProfileResponse_disableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DisableProfileResponse_disableResult = DisableProfileResponse_disableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DisableProfileResponse_disableResult = $._decodeInteger;
export const _encode_DisableProfileResponse_disableResult = $._encodeInteger;


/* eslint-enable */
