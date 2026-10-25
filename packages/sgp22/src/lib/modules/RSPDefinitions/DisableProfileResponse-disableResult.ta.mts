/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DisableProfileResponse_disableResult
 * @description
 * 
 * Result code of ES10c.DisableProfile. There is no value 4 in this enumeration.
 * SGP.22 v3.1 §5.7.17.
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
 * @description
 * 
 * The disable was accepted. If `refreshFlag` was true, it completes only after
 * REFRESH. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_ok = 0 satisfies DisableProfileResponse_disableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_ok
 * @description
 * 
 * The disable was accepted. If `refreshFlag` was true, it completes only after
 * REFRESH. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const ok = DisableProfileResponse_disableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_iccidOrAidNotFound
 * @description
 * 
 * No Profile has that ICCID or ISD-P AID. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_iccidOrAidNotFound = 1 satisfies DisableProfileResponse_disableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_iccidOrAidNotFound
 * @description
 * 
 * No Profile has that ICCID or ISD-P AID. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound = DisableProfileResponse_disableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_profileNotInEnabledState
 * @description
 * 
 * The Profile is not enabled. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_profileNotInEnabledState = 2 satisfies DisableProfileResponse_disableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_profileNotInEnabledState
 * @description
 * 
 * The Profile is not enabled. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const profileNotInEnabledState = DisableProfileResponse_disableResult_profileNotInEnabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_disallowedByPolicy
 * @description
 * 
 * PPR1 forbids disabling this Profile. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_disallowedByPolicy = 3 satisfies DisableProfileResponse_disableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_disallowedByPolicy
 * @description
 * 
 * PPR1 forbids disabling this Profile. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy = DisableProfileResponse_disableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_catBusy
 * @description
 * 
 * A proactive session blocked the disable. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_catBusy = 5 satisfies DisableProfileResponse_disableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_catBusy
 * @description
 * 
 * A proactive session blocked the disable. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const catBusy = DisableProfileResponse_disableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_undefinedError
 * @description
 * 
 * Disable failed for another reason. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const DisableProfileResponse_disableResult_undefinedError = 127 satisfies DisableProfileResponse_disableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DisableProfileResponse_disableResult_undefinedError
 * @description
 * 
 * Disable failed for another reason. SGP.22 v3.1 §5.7.17.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError = DisableProfileResponse_disableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DisableProfileResponse_disableResult = $._decodeInteger;
export const _encode_DisableProfileResponse_disableResult = $._encodeInteger;


/* eslint-enable */
