/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
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
const EnableProfileResponse_enableResult_ok: 0 = 0 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const ok: 0 = EnableProfileResponse_enableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

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
const EnableProfileResponse_enableResult_iccidOrAidNotFound: 1 = 1 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const iccidOrAidNotFound: 1 = EnableProfileResponse_enableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

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
const EnableProfileResponse_enableResult_profileNotInDisabledState: 2 = 2 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const profileNotInDisabledState: 2 = EnableProfileResponse_enableResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

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
const EnableProfileResponse_enableResult_disallowedByPolicy: 3 = 3 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const disallowedByPolicy: 3 = EnableProfileResponse_enableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

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
const EnableProfileResponse_enableResult_wrongProfileReenabling: 4 = 4 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const wrongProfileReenabling: 4 = EnableProfileResponse_enableResult_wrongProfileReenabling; /* SHORT_NAMED_INTEGER_VALUE */

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
const EnableProfileResponse_enableResult_catBusy: 5 = 5 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const catBusy: 5 = EnableProfileResponse_enableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

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
const EnableProfileResponse_enableResult_undefinedError: 127 = 127 satisfies EnableProfileResponse_enableResult; /* LONG_NAMED_INTEGER_VALUE */

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
const undefinedError: 127 = EnableProfileResponse_enableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableProfileResponse_enableResult: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_EnableProfileResponse_enableResult: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
