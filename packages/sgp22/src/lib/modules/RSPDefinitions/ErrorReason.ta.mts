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
 * @constant
 * @type {number}
 */
export
const ErrorReason_incorrectInputValues: ErrorReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_incorrectInputValues
 * @constant
 * @type {number}
 */
export
const incorrectInputValues: ErrorReason = ErrorReason_incorrectInputValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidSignature
 * @constant
 * @type {number}
 */
export
const ErrorReason_invalidSignature: ErrorReason = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: ErrorReason = ErrorReason_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const ErrorReason_invalidTransactionId: ErrorReason = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: ErrorReason = ErrorReason_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedCrtValues
 * @constant
 * @type {number}
 */
export
const ErrorReason_unsupportedCrtValues: ErrorReason = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedCrtValues
 * @constant
 * @type {number}
 */
export
const unsupportedCrtValues: ErrorReason = ErrorReason_unsupportedCrtValues; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedRemoteOperationType
 * @constant
 * @type {number}
 */
export
const ErrorReason_unsupportedRemoteOperationType: ErrorReason = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedRemoteOperationType
 * @constant
 * @type {number}
 */
export
const unsupportedRemoteOperationType: ErrorReason = ErrorReason_unsupportedRemoteOperationType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedProfileClass
 * @constant
 * @type {number}
 */
export
const ErrorReason_unsupportedProfileClass: ErrorReason = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_unsupportedProfileClass
 * @constant
 * @type {number}
 */
export
const unsupportedProfileClass: ErrorReason = ErrorReason_unsupportedProfileClass; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tStructureError
 * @constant
 * @type {number}
 */
export
const ErrorReason_scp03tStructureError: ErrorReason = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tStructureError
 * @constant
 * @type {number}
 */
export
const scp03tStructureError: ErrorReason = ErrorReason_scp03tStructureError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tSecurityError
 * @constant
 * @type {number}
 */
export
const ErrorReason_scp03tSecurityError: ErrorReason = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_scp03tSecurityError
 * @constant
 * @type {number}
 */
export
const scp03tSecurityError: ErrorReason = ErrorReason_scp03tSecurityError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc: ErrorReason = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc
 * @constant
 * @type {number}
 */
export
const installFailedDueToIccidAlreadyExistsOnEuicc: ErrorReason = ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMemoryForProfile
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToInsufficientMemoryForProfile: ErrorReason = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMemoryForProfile
 * @constant
 * @type {number}
 */
export
const installFailedDueToInsufficientMemoryForProfile: ErrorReason = ErrorReason_installFailedDueToInsufficientMemoryForProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInterruption
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToInterruption: ErrorReason = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInterruption
 * @constant
 * @type {number}
 */
export
const installFailedDueToInterruption: ErrorReason = ErrorReason_installFailedDueToInterruption; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToPEProcessingError
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToPEProcessingError: ErrorReason = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToPEProcessingError
 * @constant
 * @type {number}
 */
export
const installFailedDueToPEProcessingError: ErrorReason = ErrorReason_installFailedDueToPEProcessingError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToDataMismatch
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToDataMismatch: ErrorReason = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToDataMismatch
 * @constant
 * @type {number}
 */
export
const installFailedDueToDataMismatch: ErrorReason = ErrorReason_installFailedDueToDataMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_testProfileInstallFailedDueToInvalidNaaKey
 * @constant
 * @type {number}
 */
export
const ErrorReason_testProfileInstallFailedDueToInvalidNaaKey: ErrorReason = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_testProfileInstallFailedDueToInvalidNaaKey
 * @constant
 * @type {number}
 */
export
const testProfileInstallFailedDueToInvalidNaaKey: ErrorReason = ErrorReason_testProfileInstallFailedDueToInvalidNaaKey; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_pprNotAllowed
 * @constant
 * @type {number}
 */
export
const ErrorReason_pprNotAllowed: ErrorReason = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_pprNotAllowed
 * @constant
 * @type {number}
 */
export
const pprNotAllowed: ErrorReason = ErrorReason_pprNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel: ErrorReason = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel
 * @constant
 * @type {number}
 */
export
const installFailedDueToInsufficientMinimumSecurityLevel: ErrorReason = ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList: ErrorReason = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList
 * @constant
 * @type {number}
 */
export
const installFailedDueToServerAddressAbsentInEuiccAllowList: ErrorReason = ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToUnknownError
 * @constant
 * @type {number}
 */
export
const ErrorReason_installFailedDueToUnknownError: ErrorReason = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_installFailedDueToUnknownError
 * @constant
 * @type {number}
 */
export
const installFailedDueToUnknownError: ErrorReason = ErrorReason_installFailedDueToUnknownError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ErrorReason: $.ASN1Decoder<ErrorReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorReason (el: _Element): ErrorReason {
    if (!_cached_decoder_for_ErrorReason) { _cached_decoder_for_ErrorReason = $._decodeInteger; }
    return _cached_decoder_for_ErrorReason(el);
}

let _cached_encoder_for_ErrorReason: $.ASN1Encoder<ErrorReason> | null = null;

/**
 * @summary Encodes a(n) ErrorReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorReason, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorReason (value: ErrorReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorReason) { _cached_encoder_for_ErrorReason = $._encodeInteger; }
    return _cached_encoder_for_ErrorReason(value, elGetter);
}


/* eslint-enable */
