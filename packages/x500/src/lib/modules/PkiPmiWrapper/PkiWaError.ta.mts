/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_PkiWaError {
    unsupportedWrapperVersion = 0,
    unsupportedSignatureAlgorithm = 1,
    incompleteCertPath = 2,
    certificationPathFailure = 3,
    invalidSignature = 4,
    missingMandatoryAttributes = 5,
    unwantedAttribute = 6,
    unsupportedPduType = 7,
    unexpectedPduType = 8,
    invalidPduSyntax = 9,
    unknownDHpkCetificate = 10,
    invalidKeyingMaterial = 11,
    dhAlgorithmMismatch = 12,
    invalideDhPublickey = 13,
    unsupportedKeyWrappingAlgorithm = 14,
    keyEncAlgorithmParametersMissing = 15,
    keyEncAlgorithmParametersNotAllowed = 16,
    invalidParmsForSymEncryptAlgorithms = 17,
    decryptionFailed = 18,
}

/**
 * @summary PkiWaError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PkiWaError  ::=  ENUMERATED {
 *   unsupportedWrapperVersion           (0),
 *   unsupportedSignatureAlgorithm       (1),
 *   incompleteCertPath                  (2),
 *   certificationPathFailure            (3),
 *   invalidSignature                    (4),
 *   missingMandatoryAttributes          (5),
 *   unwantedAttribute                   (6),
 *   unsupportedPduType                  (7),
 *   unexpectedPduType                   (8),
 *   invalidPduSyntax                    (9),
 *   unknownDHpkCetificate               (10),
 *   invalidKeyingMaterial               (11),
 *   dhAlgorithmMismatch                 (12),
 *   invalideDhPublickey                 (13),
 *   unsupportedKeyWrappingAlgorithm     (14),
 *   keyEncAlgorithmParametersMissing    (15),
 *   keyEncAlgorithmParametersNotAllowed (16),
 *   invalidParmsForSymEncryptAlgorithms (17),
 *   decryptionFailed                    (18),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type PkiWaError = _enum_for_PkiWaError | ENUMERATED;

/**
 * @summary PkiWaError_unsupportedWrapperVersion
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedWrapperVersion: PkiWaError = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWrapperVersion
 * @constant
 * @type {number}
 */
export const unsupportedWrapperVersion: PkiWaError = PkiWaError_unsupportedWrapperVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unsupportedSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedSignatureAlgorithm: PkiWaError = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedSignatureAlgorithm: PkiWaError = PkiWaError_unsupportedSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_incompleteCertPath
 * @constant
 * @type {number}
 */
export const PkiWaError_incompleteCertPath: PkiWaError = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incompleteCertPath
 * @constant
 * @type {number}
 */
export const incompleteCertPath: PkiWaError = PkiWaError_incompleteCertPath; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_certificationPathFailure
 * @constant
 * @type {number}
 */
export const PkiWaError_certificationPathFailure: PkiWaError = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificationPathFailure
 * @constant
 * @type {number}
 */
export const certificationPathFailure: PkiWaError = PkiWaError_certificationPathFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidSignature
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidSignature: PkiWaError = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSignature
 * @constant
 * @type {number}
 */
export const invalidSignature: PkiWaError = PkiWaError_invalidSignature; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_missingMandatoryAttributes
 * @constant
 * @type {number}
 */
export const PkiWaError_missingMandatoryAttributes: PkiWaError = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingMandatoryAttributes
 * @constant
 * @type {number}
 */
export const missingMandatoryAttributes: PkiWaError = PkiWaError_missingMandatoryAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unwantedAttribute
 * @constant
 * @type {number}
 */
export const PkiWaError_unwantedAttribute: PkiWaError = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwantedAttribute
 * @constant
 * @type {number}
 */
export const unwantedAttribute: PkiWaError = PkiWaError_unwantedAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unsupportedPduType
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedPduType: PkiWaError = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedPduType
 * @constant
 * @type {number}
 */
export const unsupportedPduType: PkiWaError = PkiWaError_unsupportedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unexpectedPduType
 * @constant
 * @type {number}
 */
export const PkiWaError_unexpectedPduType: PkiWaError = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpectedPduType
 * @constant
 * @type {number}
 */
export const unexpectedPduType: PkiWaError = PkiWaError_unexpectedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidPduSyntax
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidPduSyntax: PkiWaError = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPduSyntax
 * @constant
 * @type {number}
 */
export const invalidPduSyntax: PkiWaError = PkiWaError_invalidPduSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unknownDHpkCetificate
 * @constant
 * @type {number}
 */
export const PkiWaError_unknownDHpkCetificate: PkiWaError = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownDHpkCetificate
 * @constant
 * @type {number}
 */
export const unknownDHpkCetificate: PkiWaError = PkiWaError_unknownDHpkCetificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidKeyingMaterial
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidKeyingMaterial: PkiWaError = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidKeyingMaterial
 * @constant
 * @type {number}
 */
export const invalidKeyingMaterial: PkiWaError = PkiWaError_invalidKeyingMaterial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_dhAlgorithmMismatch
 * @constant
 * @type {number}
 */
export const PkiWaError_dhAlgorithmMismatch: PkiWaError = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhAlgorithmMismatch
 * @constant
 * @type {number}
 */
export const dhAlgorithmMismatch: PkiWaError = PkiWaError_dhAlgorithmMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalideDhPublickey
 * @constant
 * @type {number}
 */
export const PkiWaError_invalideDhPublickey: PkiWaError = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalideDhPublickey
 * @constant
 * @type {number}
 */
export const invalideDhPublickey: PkiWaError = PkiWaError_invalideDhPublickey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unsupportedKeyWrappingAlgorithm
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedKeyWrappingAlgorithm: PkiWaError = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedKeyWrappingAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrappingAlgorithm: PkiWaError = PkiWaError_unsupportedKeyWrappingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_keyEncAlgorithmParametersMissing
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersMissing: PkiWaError = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyEncAlgorithmParametersMissing
 * @constant
 * @type {number}
 */
export const keyEncAlgorithmParametersMissing: PkiWaError = PkiWaError_keyEncAlgorithmParametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_keyEncAlgorithmParametersNotAllowed
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersNotAllowed: PkiWaError = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyEncAlgorithmParametersNotAllowed
 * @constant
 * @type {number}
 */
export const keyEncAlgorithmParametersNotAllowed: PkiWaError = PkiWaError_keyEncAlgorithmParametersNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidParmsForSymEncryptAlgorithms
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidParmsForSymEncryptAlgorithms: PkiWaError = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParmsForSymEncryptAlgorithms
 * @constant
 * @type {number}
 */
export const invalidParmsForSymEncryptAlgorithms: PkiWaError = PkiWaError_invalidParmsForSymEncryptAlgorithms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_decryptionFailed
 * @constant
 * @type {number}
 */
export const PkiWaError_decryptionFailed: PkiWaError = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryptionFailed
 * @constant
 * @type {number}
 */
export const decryptionFailed: PkiWaError = PkiWaError_decryptionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_PkiWaError = $._decodeEnumerated;


export const _encode_PkiWaError = $._encodeEnumerated;


/* eslint-enable */
