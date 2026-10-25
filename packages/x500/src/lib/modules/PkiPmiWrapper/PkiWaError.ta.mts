/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
 * X.509 2016 PkiPmiWrapper errors (not X.510 WrpError). Keep spec
 * typos: `unknownDHpkCetificate` (Certificate), `invalideDhPublickey`
 * (invalid). `keyEncAlgorithmParametersMissing` vs `…NotAllowed`:
 * PARMS presence vs ALGORITHM.&Type. Extensible (`...`).
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
 * @description
 *
 * `version` is AuthenticationFramework INTEGER Version DEFAULT v1,
 * not X.510 Wrapper BIT STRING.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedWrapperVersion = _enum_for_PkiWaError.unsupportedWrapperVersion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedWrapperVersion
 * @description
 *
 * `version` is AuthenticationFramework INTEGER Version DEFAULT v1,
 * not X.510 Wrapper BIT STRING.
 *
 * @constant
 * @type {number}
 */
export const unsupportedWrapperVersion = PkiWaError_unsupportedWrapperVersion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unsupportedSignatureAlgorithm
 * @description
 *
 * `signatureAlgorithm` not in `SupportedSignatureAlgorithms`.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedSignatureAlgorithm = _enum_for_PkiWaError.unsupportedSignatureAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedSignatureAlgorithm
 * @description
 *
 * `signatureAlgorithm` not in `SupportedSignatureAlgorithms`.
 *
 * @constant
 * @type {number}
 */
export const unsupportedSignatureAlgorithm = PkiWaError_unsupportedSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_incompleteCertPath
 * @description
 *
 * `certPath` [0] PkiPath required / incomplete.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_incompleteCertPath = _enum_for_PkiWaError.incompleteCertPath; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incompleteCertPath
 * @description
 *
 * `certPath` [0] PkiPath required / incomplete.
 *
 * @constant
 * @type {number}
 */
export const incompleteCertPath = PkiWaError_incompleteCertPath; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_certificationPathFailure
 * @description
 *
 * PkiPath validation failed.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_certificationPathFailure = _enum_for_PkiWaError.certificationPathFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificationPathFailure
 * @description
 *
 * PkiPath validation failed.
 *
 * @constant
 * @type {number}
 */
export const certificationPathFailure = PkiWaError_certificationPathFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidSignature
 * @description
 *
 * SIGNED{TBSPDU-wrapper} signature invalid.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidSignature = _enum_for_PkiWaError.invalidSignature; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSignature
 * @description
 *
 * SIGNED{TBSPDU-wrapper} signature invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidSignature = PkiWaError_invalidSignature; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_missingMandatoryAttributes
 * @description
 *
 * `signedAttrs` lacked required `contentType` / `messageDigest`.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_missingMandatoryAttributes = _enum_for_PkiWaError.missingMandatoryAttributes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary missingMandatoryAttributes
 * @description
 *
 * `signedAttrs` lacked required `contentType` / `messageDigest`.
 *
 * @constant
 * @type {number}
 */
export const missingMandatoryAttributes = PkiWaError_missingMandatoryAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unwantedAttribute
 * @description
 *
 * `signedAttrs` member other than `contentType` | `messageDigest`.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unwantedAttribute = _enum_for_PkiWaError.unwantedAttribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unwantedAttribute
 * @description
 *
 * `signedAttrs` member other than `contentType` | `messageDigest`.
 *
 * @constant
 * @type {number}
 */
export const unwantedAttribute = PkiWaError_unwantedAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unsupportedPduType
 * @description
 *
 * `pduType` not in `SupportedPduSet`.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedPduType = _enum_for_PkiWaError.unsupportedPduType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedPduType
 * @description
 *
 * `pduType` not in `SupportedPduSet`.
 *
 * @constant
 * @type {number}
 */
export const unsupportedPduType = PkiWaError_unsupportedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unexpectedPduType
 * @description
 *
 * `pduType` unexpected in this context.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unexpectedPduType = _enum_for_PkiWaError.unexpectedPduType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpectedPduType
 * @description
 *
 * `pduType` unexpected in this context.
 *
 * @constant
 * @type {number}
 */
export const unexpectedPduType = PkiWaError_unexpectedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidPduSyntax
 * @description
 *
 * `pduInfo` / `encryptedPdu` syntax invalid.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidPduSyntax = _enum_for_PkiWaError.invalidPduSyntax; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPduSyntax
 * @description
 *
 * `pduInfo` / `encryptedPdu` syntax invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidPduSyntax = PkiWaError_invalidPduSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unknownDHpkCetificate
 * @description
 *
 * Spec typo for Certificate. Static DH certificate unknown.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unknownDHpkCetificate = _enum_for_PkiWaError.unknownDHpkCetificate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownDHpkCetificate
 * @description
 *
 * Spec typo for Certificate. Static DH certificate unknown.
 *
 * @constant
 * @type {number}
 */
export const unknownDHpkCetificate = PkiWaError_unknownDHpkCetificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidKeyingMaterial
 * @description
 *
 * UserKeyingMaterial not SIZE (64) or otherwise invalid.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidKeyingMaterial = _enum_for_PkiWaError.invalidKeyingMaterial; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidKeyingMaterial
 * @description
 *
 * UserKeyingMaterial not SIZE (64) or otherwise invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidKeyingMaterial = PkiWaError_invalidKeyingMaterial; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_dhAlgorithmMismatch
 * @description
 *
 * DH algorithm mismatch.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_dhAlgorithmMismatch = _enum_for_PkiWaError.dhAlgorithmMismatch; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dhAlgorithmMismatch
 * @description
 *
 * DH algorithm mismatch.
 *
 * @constant
 * @type {number}
 */
export const dhAlgorithmMismatch = PkiWaError_dhAlgorithmMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalideDhPublickey
 * @description
 *
 * Spec typo for invalid. Ephemeral DH public key invalid.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_invalideDhPublickey = _enum_for_PkiWaError.invalideDhPublickey; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalideDhPublickey
 * @description
 *
 * Spec typo for invalid. Ephemeral DH public key invalid.
 *
 * @constant
 * @type {number}
 */
export const invalideDhPublickey = PkiWaError_invalideDhPublickey; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_unsupportedKeyWrappingAlgorithm
 * @description
 *
 * `keyEncryptionAlgorithm` unsupported.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedKeyWrappingAlgorithm = _enum_for_PkiWaError.unsupportedKeyWrappingAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupportedKeyWrappingAlgorithm
 * @description
 *
 * `keyEncryptionAlgorithm` unsupported.
 *
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrappingAlgorithm = PkiWaError_unsupportedKeyWrappingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_keyEncAlgorithmParametersMissing
 * @description
 *
 * PARMS required by ALGORITHM.&Type but absent.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersMissing = _enum_for_PkiWaError.keyEncAlgorithmParametersMissing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyEncAlgorithmParametersMissing
 * @description
 *
 * PARMS required by ALGORITHM.&Type but absent.
 *
 * @constant
 * @type {number}
 */
export const keyEncAlgorithmParametersMissing = PkiWaError_keyEncAlgorithmParametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_keyEncAlgorithmParametersNotAllowed
 * @description
 *
 * PARMS present but ALGORITHM.&Type absent.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersNotAllowed = _enum_for_PkiWaError.keyEncAlgorithmParametersNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyEncAlgorithmParametersNotAllowed
 * @description
 *
 * PARMS present but ALGORITHM.&Type absent.
 *
 * @constant
 * @type {number}
 */
export const keyEncAlgorithmParametersNotAllowed = PkiWaError_keyEncAlgorithmParametersNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_invalidParmsForSymEncryptAlgorithms
 * @description
 *
 * `pduEncryptionAlgorithm.parameter` invalid.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidParmsForSymEncryptAlgorithms = _enum_for_PkiWaError.invalidParmsForSymEncryptAlgorithms; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParmsForSymEncryptAlgorithms
 * @description
 *
 * `pduEncryptionAlgorithm.parameter` invalid.
 *
 * @constant
 * @type {number}
 */
export const invalidParmsForSymEncryptAlgorithms = PkiWaError_invalidParmsForSymEncryptAlgorithms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PkiWaError_decryptionFailed
 * @description
 *
 * Encrypted PDU / key unwrap failed.
 *
 * @constant
 * @type {number}
 */
export const PkiWaError_decryptionFailed = _enum_for_PkiWaError.decryptionFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryptionFailed
 * @description
 *
 * Encrypted PDU / key unwrap failed.
 *
 * @constant
 * @type {number}
 */
export const decryptionFailed = PkiWaError_decryptionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_PkiWaError = $._decodeEnumerated;


export const _encode_PkiWaError = $._encodeEnumerated;


/* eslint-enable */
