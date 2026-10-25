/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteProfileResult
 * @description
 *
 * Result of the delete PSMO after the signed eUICC Package is verified. The
 * target Profile is marked to be deleted, or to be disabled and deleted, and
 * the signed result is stored on the eUICC. Deletion of a Provisioning Profile
 * or a preloaded Test Profile may be unsupported; those conditions are out of
 * scope. Deleting a Fallback Profile is allowed. An eUICC Package must not
 * combine an Enable that grants rollback with a Delete of the Profile that
 * rollback would restore.
 *
 * SGP.32 v1.2, sections 2.11.2.1 and 3.4.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProfileResult  ::=  INTEGER {
 *     ok(0),
 *     iccidOrAidNotFound(1),
 *     profileNotInDisabledState(2),
 *     disallowedByPolicy(3),
 *     rollbackNotAvailable(20),
 *     returnFallbackProfile(21),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type DeleteProfileResult = INTEGER;

/**
 * @summary DeleteProfileResult_ok
 * @description
 *
 * The target Profile was marked to be deleted (Disabled, and not marked to be
 * enabled) or to be disabled and deleted (Enabled, already marked to be
 * disabled, and not referenced by rollback).
 *
 * SGP.32 v1.2, section 3.4.3.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_ok = 0 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_ok
 * @description
 *
 * The target Profile was marked to be deleted, or to be disabled and deleted
 * (SGP.32 v1.2, section 3.4.3).
 * @constant
 * @type {number}
 */
export
const ok = DeleteProfileResult_ok satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_iccidOrAidNotFound
 * @description
 *
 * No Profile on the eUICC has the ICCID given in the delete PSMO.
 *
 * SGP.32 v1.2, section 3.4.3.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_iccidOrAidNotFound = 1 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_iccidOrAidNotFound
 * @description
 *
 * No Profile has the given ICCID (SGP.32 v1.2, section 3.4.3).
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound = DeleteProfileResult_iccidOrAidNotFound satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_profileNotInDisabledState
 * @description
 *
 * The target is Enabled and is not marked to be disabled, or it is Disabled
 * and is marked to be enabled.
 *
 * SGP.32 v1.2, section 3.4.3.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_profileNotInDisabledState = 2 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_profileNotInDisabledState
 * @description
 *
 * The target is Enabled without a pending disable, or Disabled with a pending
 * enable (SGP.32 v1.2, section 3.4.3).
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState = DeleteProfileResult_profileNotInDisabledState satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_disallowedByPolicy
 * @description
 *
 * SGP.32 v1.2 lists this code on the delete PSMO result and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_disallowedByPolicy = 3 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_disallowedByPolicy
 * @description
 *
 * Listed on the delete PSMO; SGP.32 v1.2 does not further define it (Annex C).
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy = DeleteProfileResult_disallowedByPolicy satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_rollbackNotAvailable
 * @description
 *
 * The target is Disabled, or marked to be disabled, and is currently
 * referenced by the Rollback Mechanism recorded for an earlier enable in this
 * package.
 *
 * SGP.32 v1.2, section 3.4.3.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_rollbackNotAvailable = 20 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_rollbackNotAvailable
 * @description
 *
 * The target is the Profile recorded for rollback (SGP.32 v1.2, section
 * 3.4.3).
 * @constant
 * @type {number}
 */
export
const rollbackNotAvailable = DeleteProfileResult_rollbackNotAvailable satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_returnFallbackProfile
 * @description
 *
 * The Fallback Profile is enabled and the target is the Profile that
 * ES10b.ExecuteFallbackMechanism disabled, so it is still referenced by the
 * Fallback Mechanism.
 *
 * SGP.32 v1.2, section 3.4.3.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_returnFallbackProfile = 21 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_returnFallbackProfile
 * @description
 *
 * The target is the Profile that fallback disabled, and fallback is still
 * enabled (SGP.32 v1.2, section 3.4.3).
 * @constant
 * @type {number}
 */
export
const returnFallbackProfile = DeleteProfileResult_returnFallbackProfile satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_undefinedError
 * @description
 *
 * SGP.32 v1.2 lists this code on the delete PSMO result and does not further
 * define it. Annex C.
 * @constant
 * @type {number}
 */
export
const DeleteProfileResult_undefinedError = 127 satisfies DeleteProfileResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResult_undefinedError
 * @description
 *
 * Listed on the delete PSMO; SGP.32 v1.2 does not further define it (Annex C).
 * @constant
 * @type {number}
 */
export
const undefinedError = DeleteProfileResult_undefinedError satisfies DeleteProfileResult; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteProfileResult: $.ASN1Decoder<DeleteProfileResult> = $._decodeInteger;
export const _encode_DeleteProfileResult: $.ASN1Encoder<DeleteProfileResult> = $._encodeInteger;


/* eslint-enable */
