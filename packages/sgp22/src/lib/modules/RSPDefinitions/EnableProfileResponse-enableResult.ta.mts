/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableProfileResponse_enableResult
 * @description
 * 
 * Result code of ES10c.EnableProfile. SGP.22 v3.1 §5.7.16.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileResponse-enableResult ::= INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInDisabledState(2),
 *     disallowedByPolicy(3),
 *     wrongProfileReenabling(4),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type EnableProfileResponse_enableResult = INTEGER;

/**
 * @summary EnableProfileResponse_enableResult_ok
 * @description
 * 
 * The enable was accepted. If `refreshFlag` was true, the Profile is not
 * enabled until REFRESH succeeds. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_ok: EnableProfileResponse_enableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_ok
 * @description
 * 
 * The enable was accepted. If `refreshFlag` was true, the Profile is not
 * enabled until REFRESH succeeds. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const ok: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_iccidOrAidNotFound
 * @description
 * 
 * No Profile has that ICCID or ISD-P AID. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_iccidOrAidNotFound: EnableProfileResponse_enableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_iccidOrAidNotFound
 * @description
 * 
 * No Profile has that ICCID or ISD-P AID. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_profileNotInDisabledState
 * @description
 * 
 * The target Profile is not disabled. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_profileNotInDisabledState: EnableProfileResponse_enableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_profileNotInDisabledState
 * @description
 * 
 * The target Profile is not disabled. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_disallowedByPolicy
 * @description
 * 
 * PPR1 on the Profile currently enabled on the target port forbids disabling
 * it. Not applied when the target is a Test Profile. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_disallowedByPolicy: EnableProfileResponse_enableResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_disallowedByPolicy
 * @description
 * 
 * PPR1 on the Profile currently enabled on the target port forbids disabling
 * it. Not applied when the target is a Test Profile. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_wrongProfileReenabling
 * @description
 * 
 * A Test Profile is enabled, and the target is neither another Test Profile nor
 * the operational Profile that was enabled before the Test Profile. SGP.22 v3.1
 * §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_wrongProfileReenabling: EnableProfileResponse_enableResult = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_wrongProfileReenabling
 * @description
 * 
 * A Test Profile is enabled, and the target is neither another Test Profile nor
 * the operational Profile that was enabled before the Test Profile. SGP.22 v3.1
 * §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const wrongProfileReenabling: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_wrongProfileReenabling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_catBusy
 * @description
 * 
 * A proactive CAT session is open on the target port, and the eUICC did not
 * terminate it. The Device may end that session and retry. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_catBusy: EnableProfileResponse_enableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_catBusy
 * @description
 * 
 * A proactive CAT session is open on the target port, and the eUICC did not
 * terminate it. The Device may end that session and retry. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const catBusy: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_undefinedError
 * @description
 * 
 * Enable failed for another reason. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_undefinedError: EnableProfileResponse_enableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_undefinedError
 * @description
 * 
 * Enable failed for another reason. SGP.22 v3.1 §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const undefinedError: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableProfileResponse_enableResult = $._decodeInteger;
export const _encode_EnableProfileResponse_enableResult = $._encodeInteger;


/* eslint-enable */
