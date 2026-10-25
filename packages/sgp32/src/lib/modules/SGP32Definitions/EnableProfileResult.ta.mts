/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableProfileResult
 * @description
 * 
 * Result of one enable PSMO (SGP.32 v1.2, sections 2.11.2.1 and 3.4.1). At
 * most one enable appears in an eUICC Package (section 2.11.1.1). A second
 * enable in the same package is a failure; section 3.4.1 does not name which
 * code that failure uses. Success marks the target "to be enabled" and the
 * currently enabled Profile, if any, "to be disabled", and records Rollback
 * authorisation when rollbackFlag was present.
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
 * @description
 * The target Profile was marked "to be enabled" and the currently enabled
 * Profile, if any, was marked "to be disabled" (SGP.32 v1.2, section 3.4.1).
 * Rollback authorisation is recorded when it was granted.
 */
export
const EnableProfileResult_ok = 0 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_ok
 * @constant
 * @type {number}
 * @description
 * The enable PSMO marked the target Profile "to be enabled" (SGP.32 v1.2,
 * section 3.4.1).
 */
export
const ok = EnableProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 * @description
 * No Profile on the eUICC has the ICCID given in the enable PSMO (SGP.32 v1.2,
 * section 3.4.1).
 */
export
const EnableProfileResult_iccidOrAidNotFound = 1 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 * @description
 * The enable PSMO names an ICCID that is not on the eUICC (SGP.32 v1.2,
 * section 3.4.1).
 */
export
const iccidOrAidNotFound = EnableProfileResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 * @description
 * The target Profile is in a state other than Disabled (SGP.32 v1.2, section
 * 3.4.1).
 */
export
const EnableProfileResult_profileNotInDisabledState = 2 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_profileNotInDisabledState
 * @constant
 * @type {number}
 * @description
 * The target Profile is in a state other than Disabled (SGP.32 v1.2, section
 * 3.4.1).
 */
export
const profileNotInDisabledState = EnableProfileResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists disallowedByPolicy(3) on EnableProfileResult in section
 * 2.11.2.1 and does not further define the condition that produces it. Annex C
 * repeats the enumeration.
 */
export
const EnableProfileResult_disallowedByPolicy = 3 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_disallowedByPolicy
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 2.11.2.1 and does not further define
 * the condition that produces it.
 */
export
const disallowedByPolicy = EnableProfileResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_catBusy
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists catBusy(5) on EnableProfileResult in section 2.11.2.1 and
 * does not further define the condition that produces it. Annex C repeats the
 * enumeration.
 */
export
const EnableProfileResult_catBusy = 5 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_catBusy
 * @constant
 * @type {number}
 * @description
 * SGP.32 v1.2 lists this code in section 2.11.2.1 and does not further define
 * the condition that produces it.
 */
export
const catBusy = EnableProfileResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_rollbackNotAvailable
 * @constant
 * @type {number}
 * @description
 * rollbackFlag granted Rollback use, and the eUICC has neither a currently
 * enabled Profile nor a Profile marked "to be disabled" (SGP.32 v1.2, section
 * 3.4.1).
 */
export
const EnableProfileResult_rollbackNotAvailable = 20 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_rollbackNotAvailable
 * @constant
 * @type {number}
 * @description
 * Rollback was granted and there is no enabled Profile to roll back to (SGP.32
 * v1.2, section 3.4.1).
 */
export
const rollbackNotAvailable = EnableProfileResult_rollbackNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * The target Profile is the Emergency Profile, with ecallIndication set to
 * TRUE (SGP.32 v1.2, section 3.4.1).
 */
export
const EnableProfileResult_undefinedError = 127 satisfies EnableProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResult_undefinedError
 * @constant
 * @type {number}
 * @description
 * The enable target is the Emergency Profile (ecallIndication TRUE) (SGP.32
 * v1.2, section 3.4.1).
 */
export
const undefinedError = EnableProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableProfileResult: $.ASN1Decoder<EnableProfileResult> = $._decodeInteger;
export const _encode_EnableProfileResult: $.ASN1Encoder<EnableProfileResult> = $._encodeInteger;


/* eslint-enable */
