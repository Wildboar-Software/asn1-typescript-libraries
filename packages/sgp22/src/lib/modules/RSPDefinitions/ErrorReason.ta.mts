/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorReason
 * @description
 * 
 * Why processing of a Bound Profile Package stopped. Authorised command/reason
 * pairs, the mapping from Profile Element status words, and which reasons are
 * temporary are in SGP.22 v3.1 §2.5.6.1.
 *
 * Values 7 and 8 are `bspStructureError` and `bspSecurityError` in v3.1. This
 * module still uses the earlier names `scp03tStructureError` and
 * `scp03tSecurityError`. v3.1 §2.6.4.3 says the protocol was previously called
 * SCP03t and is now the BPP Security Protocol (BSP).
 *
 * v3.1 also assigns enterprise, LPA-proxy, and unknown-TLV reasons (17-23 and
 * 26) that this module does not declare. This module assigns 31 and 32, which
 * v3.1 §2.5.6.1 does not.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorReason  ::=  INTEGER {
 *     incorrectInputValues(1),
 *     invalidSignature(2),
 *     invalidTransactionId(3),
 *     unsupportedCrtValues(4),
 *     unsupportedRemoteOperationType(5),
 *     unsupportedProfileClass(6),
 *     scp03tStructureError(7),
 *     scp03tSecurityError(8),
 *     installFailedDueToIccidAlreadyExistsOnEuicc(9),
 *     installFailedDueToInsufficientMemoryForProfile(10),
 *     installFailedDueToInterruption(11),
 *     installFailedDueToPEProcessingError(12),
 *     installFailedDueToDataMismatch(13),
 *     testProfileInstallFailedDueToInvalidNaaKey(14),
 *     pprNotAllowed(15),
 *     -- values 16 to 30 are reserved
 *     installFailedDueToInsufficientMinimumSecurityLevel(31),
 *     installFailedDueToServerAddressAbsentInEuiccAllowList(32),
 *     installFailedDueToUnknownError(127)
 * }
 * ```
 */
export
type ErrorReason = INTEGER;

/**
 * @summary ErrorReason_incorrectInputValues
 * @description
 * 
 * A field is not acceptable. ConfigureISDP uses this when SM-DP+ proprietary
 * data exceeds 128 octets including tag and length. Authorised for every ES8+
 * command. SGP.22 v3.1 §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_incorrectInputValues: ErrorReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_incorrectInputValues
 * @description
 * 
 * A field is not acceptable. ConfigureISDP uses this when SM-DP+ proprietary
 * data exceeds 128 octets including tag and length. Authorised for every ES8+
 * command. SGP.22 v3.1 §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const incorrectInputValues: ErrorReason = ErrorReason_incorrectInputValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidSignature
 * @description
 * 
 * SK.DPpb.SIG signature on InitialiseSecureChannel did not verify. Installation
 * aborts and the session context is discarded. Only that command. SGP.22 v3.1
 * §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_invalidSignature: ErrorReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidSignature
 * @description
 * 
 * SK.DPpb.SIG signature on InitialiseSecureChannel did not verify. Installation
 * aborts and the session context is discarded. Only that command. SGP.22 v3.1
 * §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const invalidSignature: ErrorReason = ErrorReason_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidTransactionId
 * @description
 * 
 * TransactionID does not match the session from PrepareDownload. Only
 * InitialiseSecureChannel. SGP.22 v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_invalidTransactionId: ErrorReason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidTransactionId
 * @description
 * 
 * TransactionID does not match the session from PrepareDownload. Only
 * InitialiseSecureChannel. SGP.22 v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: ErrorReason = ErrorReason_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedCrtValues
 * @description
 * 
 * Key type or length is not the selected algorithm (AES-128 is `'88'`/`'10'`,
 * SM4 is `'89'`/`'10'`). Only InitialiseSecureChannel. SGP.22 v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_unsupportedCrtValues: ErrorReason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedCrtValues
 * @description
 * 
 * Key type or length is not the selected algorithm (AES-128 is `'88'`/`'10'`,
 * SM4 is `'89'`/`'10'`). Only InitialiseSecureChannel. SGP.22 v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const unsupportedCrtValues: ErrorReason = ErrorReason_unsupportedCrtValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedRemoteOperationType
 * @description
 * 
 * remoteOpId is not a defined operation. Only InitialiseSecureChannel. SGP.22
 * v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_unsupportedRemoteOperationType: ErrorReason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedRemoteOperationType
 * @description
 * 
 * remoteOpId is not a defined operation. Only InitialiseSecureChannel. SGP.22
 * v3.1 §5.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const unsupportedRemoteOperationType: ErrorReason = ErrorReason_unsupportedRemoteOperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedProfileClass
 * @description
 * 
 * Profile class in StoreMetadata is not supported. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_unsupportedProfileClass: ErrorReason = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedProfileClass
 * @description
 * 
 * Profile class in StoreMetadata is not supported. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const unsupportedProfileClass: ErrorReason = ErrorReason_unsupportedProfileClass; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tStructureError
 * @description
 * 
 * Value 7. SGP.22 v3.1 §2.5.6.1 calls this `bspStructureError`: the BSP TLV
 * structure is invalid. This module keeps the earlier SCP03t name. Authorised
 * for ConfigureISDP, StoreMetadata, ReplaceSessionKeys, and
 * LoadProfileElements. §2.6.4.3.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_scp03tStructureError: ErrorReason = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tStructureError
 * @description
 * 
 * Value 7. SGP.22 v3.1 §2.5.6.1 calls this `bspStructureError`: the BSP TLV
 * structure is invalid. This module keeps the earlier SCP03t name. Authorised
 * for ConfigureISDP, StoreMetadata, ReplaceSessionKeys, and
 * LoadProfileElements. §2.6.4.3.
 * 
 * @constant
 * @type {number}
 */
export
const scp03tStructureError: ErrorReason = ErrorReason_scp03tStructureError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tSecurityError
 * @description
 * 
 * Value 8. SGP.22 v3.1 calls this `bspSecurityError`: MAC verification or
 * decryption of a BSP payload failed. Same commands as the structure error.
 * §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_scp03tSecurityError: ErrorReason = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tSecurityError
 * @description
 * 
 * Value 8. SGP.22 v3.1 calls this `bspSecurityError`: MAC verification or
 * decryption of a BSP payload failed. Same commands as the structure error.
 * §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const scp03tSecurityError: ErrorReason = ErrorReason_scp03tSecurityError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc
 * @description
 * 
 * The ICCID is already installed. StoreMetadata only. Permanent. SGP.22 v3.1
 * §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc: ErrorReason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc
 * @description
 * 
 * The ICCID is already installed. StoreMetadata only. Permanent. SGP.22 v3.1
 * §5.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToIccidAlreadyExistsOnEuicc: ErrorReason = ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMemoryForProfile
 * @description
 * 
 * Not enough non-volatile memory. ConfigureISDP, StoreMetadata, or
 * LoadProfileElements. Also the mapping of Profile Element status
 * not-enough-memory(4). Temporary: the SM-DP+ may retry until the download
 * retry limit. SGP.22 v3.1 §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToInsufficientMemoryForProfile: ErrorReason = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMemoryForProfile
 * @description
 * 
 * Not enough non-volatile memory. ConfigureISDP, StoreMetadata, or
 * LoadProfileElements. Also the mapping of Profile Element status
 * not-enough-memory(4). Temporary: the SM-DP+ may retry until the download
 * retry limit. SGP.22 v3.1 §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToInsufficientMemoryForProfile: ErrorReason = ErrorReason_installFailedDueToInsufficientMemoryForProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInterruption
 * @description
 * 
 * Installation was interrupted. Any ES8+ command. Temporary. SGP.22 v3.1
 * §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToInterruption: ErrorReason = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInterruption
 * @description
 * 
 * Installation was interrupted. Any ES8+ command. Temporary. SGP.22 v3.1
 * §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToInterruption: ErrorReason = ErrorReason_installFailedDueToInterruption; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToPEProcessingError
 * @description
 * 
 * A Profile Element failed. Maps the PE status codes other than success and
 * not-enough-memory, including unsupported profile version. LoadProfileElements
 * only. Permanent. SGP.22 v3.1 §2.5.6.1 Table 4b.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToPEProcessingError: ErrorReason = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToPEProcessingError
 * @description
 * 
 * A Profile Element failed. Maps the PE status codes other than success and
 * not-enough-memory, including unsupported profile version. LoadProfileElements
 * only. Permanent. SGP.22 v3.1 §2.5.6.1 Table 4b.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToPEProcessingError: ErrorReason = ErrorReason_installFailedDueToPEProcessingError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToDataMismatch
 * @description
 * 
 * Metadata does not match the Profile files: ICCID versus EFICCID, or
 * profileOwner versus EFIMSI, EFGID1, EFGID2, and EFUST. LoadProfileElements.
 * The PE status code may be anything. SGP.22 v3.1 §5.5.5.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToDataMismatch: ErrorReason = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToDataMismatch
 * @description
 * 
 * Metadata does not match the Profile files: ICCID versus EFICCID, or
 * profileOwner versus EFIMSI, EFGID1, EFGID2, and EFUST. LoadProfileElements.
 * The PE status code may be anything. SGP.22 v3.1 §5.5.5.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToDataMismatch: ErrorReason = ErrorReason_installFailedDueToDataMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_testProfileInstallFailedDueToInvalidNaaKey
 * @description
 * 
 * A Test Profile's network-authentication key does not meet §2.4.5.3.
 * LoadProfileElements. SGP.22 v3.1 §5.5.5.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_testProfileInstallFailedDueToInvalidNaaKey: ErrorReason = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_testProfileInstallFailedDueToInvalidNaaKey
 * @description
 * 
 * A Test Profile's network-authentication key does not meet §2.4.5.3.
 * LoadProfileElements. SGP.22 v3.1 §5.5.5.
 * 
 * @constant
 * @type {number}
 */
export
const testProfileInstallFailedDueToInvalidNaaKey: ErrorReason = ErrorReason_testProfileInstallFailedDueToInvalidNaaKey; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_pprNotAllowed
 * @description
 * 
 * PPRs are present without a Profile Owner, or the RAT does not allow those
 * PPRs for that owner. StoreMetadata. SGP.22 v3.1 §2.9.3.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_pprNotAllowed: ErrorReason = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_pprNotAllowed
 * @description
 * 
 * PPRs are present without a Profile Owner, or the RAT does not allow those
 * PPRs for that owner. StoreMetadata. SGP.22 v3.1 §2.9.3.1.
 * 
 * @constant
 * @type {number}
 */
export
const pprNotAllowed: ErrorReason = ErrorReason_pprNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel
 * @description
 * 
 * Value 31, assigned by this module. SGP.22 v3.1 §2.5.6.1 does not define it.
 * The module also has `euiccMinimumSecurityLevel`, and v3.1 does not define
 * that check either.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel: ErrorReason = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel
 * @description
 * 
 * Value 31, assigned by this module. SGP.22 v3.1 §2.5.6.1 does not define it.
 * The module also has `euiccMinimumSecurityLevel`, and v3.1 does not define
 * that check either.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToInsufficientMinimumSecurityLevel: ErrorReason = ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList
 * @description
 * 
 * Value 32, assigned by this module. SGP.22 v3.1 §2.5.6.1 does not define it.
 * The companion capability bit in this module is
 * `rspServerTestProfileAllowlistCheckSupport`, which v3.1 also does not define.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList: ErrorReason = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList
 * @description
 * 
 * Value 32, assigned by this module. SGP.22 v3.1 §2.5.6.1 does not define it.
 * The companion capability bit in this module is
 * `rspServerTestProfileAllowlistCheckSupport`, which v3.1 also does not define.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToServerAddressAbsentInEuiccAllowList: ErrorReason = ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToUnknownError
 * @description
 * 
 * Unspecified failure. Any ES8+ command. Treated as a permanent error. SGP.22
 * v3.1 §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToUnknownError: ErrorReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToUnknownError
 * @description
 * 
 * Unspecified failure. Any ES8+ command. Treated as a permanent error. SGP.22
 * v3.1 §2.5.6.1.
 * 
 * @constant
 * @type {number}
 */
export
const installFailedDueToUnknownError: ErrorReason = ErrorReason_installFailedDueToUnknownError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ErrorReason = $._decodeInteger;
export const _encode_ErrorReason = $._encodeInteger;


/* eslint-enable */
