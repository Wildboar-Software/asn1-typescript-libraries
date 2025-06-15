/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_CmsErrorCode */
/**
 * @summary CmsErrorCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmsErrorCode  ::=  ENUMERATED {
 *     decodeFailure (1),
 *     badContentInfo (2),
 *     badSignedData (3),
 *     badEncapContent (4),
 *     badCertificate (5),
 *     badSignerInfo (6),
 *     badSignedAttrs (7),
 *     badUnsignedAttrs (8),
 *     missingContent (9),
 *     noTrustAnchor (10),
 *     notAuthorized (11),
 *     badDigestAlgorithm (12),
 *     badSignatureAlgorithm (13),
 *     unsupportedKeySize (14),
 *     unsupportedParameters (15),
 *     signatureFailure (16),
 *     incorrectTarget (23),
 *     missingSignature (29),
 *     versionNumberMismatch (31),
 *     revokedCertificate (33),
 *     badEncryptedData (62),
 *     badEnvelopedData (63),
 *     badKeyAgreeRecipientInfo (66),
 *     badKEKRecipientInfo (67),
 *     badEncryptContent (68),
 *     badEncryptAlgorithm (69),
 *     missingCiphertext (70),
 *     decryptFailure (71),
 *     badMACAlgorithm (72),
 *     badAuthAttrs (73),
 *     badUnauthAttrs (74),
 *     invalidMAC (75),
 *     mismatchedDigestAlg (76),
 *     missingCertificate (77),
 *     tooManySigners (78),
 *     missingSignedAttributes (79),
 *     derEncodingNotUsed (80),
 *     invalidAttributeLocation (82),
 *     badAttributes (85),
 *     noMatchingRecipientInfo (91),
 *     unsupportedKeyWrapAlgorithm (92),
 *     badKeyTransRecipientInfo (93),
 *     other (127) }
 * ```@enum {number}
 */
export enum _enum_for_CmsErrorCode {
    decodeFailure = 1,
    badContentInfo = 2,
    badSignedData = 3,
    badEncapContent = 4,
    badCertificate = 5,
    badSignerInfo = 6,
    badSignedAttrs = 7,
    badUnsignedAttrs = 8,
    missingContent = 9,
    noTrustAnchor = 10,
    notAuthorized = 11,
    badDigestAlgorithm = 12,
    badSignatureAlgorithm = 13,
    unsupportedKeySize = 14,
    unsupportedParameters = 15,
    signatureFailure = 16,
    incorrectTarget = 23,
    missingSignature = 29,
    versionNumberMismatch = 31,
    revokedCertificate = 33,
    badEncryptedData = 62,
    badEnvelopedData = 63,
    badKeyAgreeRecipientInfo = 66,
    badKEKRecipientInfo = 67,
    badEncryptContent = 68,
    badEncryptAlgorithm = 69,
    missingCiphertext = 70,
    decryptFailure = 71,
    badMACAlgorithm = 72,
    badAuthAttrs = 73,
    badUnauthAttrs = 74,
    invalidMAC = 75,
    mismatchedDigestAlg = 76,
    missingCertificate = 77,
    tooManySigners = 78,
    missingSignedAttributes = 79,
    derEncodingNotUsed = 80,
    invalidAttributeLocation = 82,
    badAttributes = 85,
    noMatchingRecipientInfo = 91,
    unsupportedKeyWrapAlgorithm = 92,
    badKeyTransRecipientInfo = 93,
    other = 127,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CmsErrorCode */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode */
/**
 * @summary CmsErrorCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmsErrorCode  ::=  ENUMERATED {
 *     decodeFailure (1),
 *     badContentInfo (2),
 *     badSignedData (3),
 *     badEncapContent (4),
 *     badCertificate (5),
 *     badSignerInfo (6),
 *     badSignedAttrs (7),
 *     badUnsignedAttrs (8),
 *     missingContent (9),
 *     noTrustAnchor (10),
 *     notAuthorized (11),
 *     badDigestAlgorithm (12),
 *     badSignatureAlgorithm (13),
 *     unsupportedKeySize (14),
 *     unsupportedParameters (15),
 *     signatureFailure (16),
 *     incorrectTarget (23),
 *     missingSignature (29),
 *     versionNumberMismatch (31),
 *     revokedCertificate (33),
 *     badEncryptedData (62),
 *     badEnvelopedData (63),
 *     badKeyAgreeRecipientInfo (66),
 *     badKEKRecipientInfo (67),
 *     badEncryptContent (68),
 *     badEncryptAlgorithm (69),
 *     missingCiphertext (70),
 *     decryptFailure (71),
 *     badMACAlgorithm (72),
 *     badAuthAttrs (73),
 *     badUnauthAttrs (74),
 *     invalidMAC (75),
 *     mismatchedDigestAlg (76),
 *     missingCertificate (77),
 *     tooManySigners (78),
 *     missingSignedAttributes (79),
 *     derEncodingNotUsed (80),
 *     invalidAttributeLocation (82),
 *     badAttributes (85),
 *     noMatchingRecipientInfo (91),
 *     unsupportedKeyWrapAlgorithm (92),
 *     badKeyTransRecipientInfo (93),
 *     other (127) }
 * ```@enum {number}
 */
export type CmsErrorCode = _enum_for_CmsErrorCode;
/* END_OF_SYMBOL_DEFINITION CmsErrorCode */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode */
/**
 * @summary CmsErrorCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CmsErrorCode  ::=  ENUMERATED {
 *     decodeFailure (1),
 *     badContentInfo (2),
 *     badSignedData (3),
 *     badEncapContent (4),
 *     badCertificate (5),
 *     badSignerInfo (6),
 *     badSignedAttrs (7),
 *     badUnsignedAttrs (8),
 *     missingContent (9),
 *     noTrustAnchor (10),
 *     notAuthorized (11),
 *     badDigestAlgorithm (12),
 *     badSignatureAlgorithm (13),
 *     unsupportedKeySize (14),
 *     unsupportedParameters (15),
 *     signatureFailure (16),
 *     incorrectTarget (23),
 *     missingSignature (29),
 *     versionNumberMismatch (31),
 *     revokedCertificate (33),
 *     badEncryptedData (62),
 *     badEnvelopedData (63),
 *     badKeyAgreeRecipientInfo (66),
 *     badKEKRecipientInfo (67),
 *     badEncryptContent (68),
 *     badEncryptAlgorithm (69),
 *     missingCiphertext (70),
 *     decryptFailure (71),
 *     badMACAlgorithm (72),
 *     badAuthAttrs (73),
 *     badUnauthAttrs (74),
 *     invalidMAC (75),
 *     mismatchedDigestAlg (76),
 *     missingCertificate (77),
 *     tooManySigners (78),
 *     missingSignedAttributes (79),
 *     derEncodingNotUsed (80),
 *     invalidAttributeLocation (82),
 *     badAttributes (85),
 *     noMatchingRecipientInfo (91),
 *     unsupportedKeyWrapAlgorithm (92),
 *     badKeyTransRecipientInfo (93),
 *     other (127) }
 * ```@enum {number}
 */
export const CmsErrorCode = _enum_for_CmsErrorCode;
/* END_OF_SYMBOL_DEFINITION CmsErrorCode */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_decodeFailure */
/**
 * @summary CmsErrorCode_decodeFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decodeFailure: CmsErrorCode =
    CmsErrorCode.decodeFailure; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_decodeFailure */

/* START_OF_SYMBOL_DEFINITION decodeFailure */
/**
 * @summary decodeFailure
 * @constant
 * @type {number}
 */
export const decodeFailure: CmsErrorCode =
    CmsErrorCode.decodeFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION decodeFailure */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badContentInfo */
/**
 * @summary CmsErrorCode_badContentInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badContentInfo: CmsErrorCode =
    CmsErrorCode.badContentInfo; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badContentInfo */

/* START_OF_SYMBOL_DEFINITION badContentInfo */
/**
 * @summary badContentInfo
 * @constant
 * @type {number}
 */
export const badContentInfo: CmsErrorCode =
    CmsErrorCode.badContentInfo; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badContentInfo */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badSignedData */
/**
 * @summary CmsErrorCode_badSignedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedData: CmsErrorCode =
    CmsErrorCode.badSignedData; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badSignedData */

/* START_OF_SYMBOL_DEFINITION badSignedData */
/**
 * @summary badSignedData
 * @constant
 * @type {number}
 */
export const badSignedData: CmsErrorCode =
    CmsErrorCode.badSignedData; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badSignedData */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badEncapContent */
/**
 * @summary CmsErrorCode_badEncapContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncapContent: CmsErrorCode =
    CmsErrorCode.badEncapContent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badEncapContent */

/* START_OF_SYMBOL_DEFINITION badEncapContent */
/**
 * @summary badEncapContent
 * @constant
 * @type {number}
 */
export const badEncapContent: CmsErrorCode =
    CmsErrorCode.badEncapContent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badEncapContent */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badCertificate */
/**
 * @summary CmsErrorCode_badCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badCertificate: CmsErrorCode =
    CmsErrorCode.badCertificate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badCertificate */

/* START_OF_SYMBOL_DEFINITION badCertificate */
/**
 * @summary badCertificate
 * @constant
 * @type {number}
 */
export const badCertificate: CmsErrorCode =
    CmsErrorCode.badCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badCertificate */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badSignerInfo */
/**
 * @summary CmsErrorCode_badSignerInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignerInfo: CmsErrorCode =
    CmsErrorCode.badSignerInfo; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badSignerInfo */

/* START_OF_SYMBOL_DEFINITION badSignerInfo */
/**
 * @summary badSignerInfo
 * @constant
 * @type {number}
 */
export const badSignerInfo: CmsErrorCode =
    CmsErrorCode.badSignerInfo; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badSignerInfo */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badSignedAttrs */
/**
 * @summary CmsErrorCode_badSignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedAttrs: CmsErrorCode =
    CmsErrorCode.badSignedAttrs; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badSignedAttrs */

/* START_OF_SYMBOL_DEFINITION badSignedAttrs */
/**
 * @summary badSignedAttrs
 * @constant
 * @type {number}
 */
export const badSignedAttrs: CmsErrorCode =
    CmsErrorCode.badSignedAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badSignedAttrs */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badUnsignedAttrs */
/**
 * @summary CmsErrorCode_badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnsignedAttrs: CmsErrorCode =
    CmsErrorCode.badUnsignedAttrs; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badUnsignedAttrs */

/* START_OF_SYMBOL_DEFINITION badUnsignedAttrs */
/**
 * @summary badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const badUnsignedAttrs: CmsErrorCode =
    CmsErrorCode.badUnsignedAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badUnsignedAttrs */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_missingContent */
/**
 * @summary CmsErrorCode_missingContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingContent: CmsErrorCode =
    CmsErrorCode.missingContent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_missingContent */

/* START_OF_SYMBOL_DEFINITION missingContent */
/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: CmsErrorCode =
    CmsErrorCode.missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingContent */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_noTrustAnchor */
/**
 * @summary CmsErrorCode_noTrustAnchor
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noTrustAnchor: CmsErrorCode =
    CmsErrorCode.noTrustAnchor; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_noTrustAnchor */

/* START_OF_SYMBOL_DEFINITION noTrustAnchor */
/**
 * @summary noTrustAnchor
 * @constant
 * @type {number}
 */
export const noTrustAnchor: CmsErrorCode =
    CmsErrorCode.noTrustAnchor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noTrustAnchor */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_notAuthorized */
/**
 * @summary CmsErrorCode_notAuthorized
 * @constant
 * @type {number}
 */
export const CmsErrorCode_notAuthorized: CmsErrorCode =
    CmsErrorCode.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_notAuthorized */

/* START_OF_SYMBOL_DEFINITION notAuthorized */
/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export const notAuthorized: CmsErrorCode =
    CmsErrorCode.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notAuthorized */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badDigestAlgorithm */
/**
 * @summary CmsErrorCode_badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badDigestAlgorithm: CmsErrorCode =
    CmsErrorCode.badDigestAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badDigestAlgorithm */

/* START_OF_SYMBOL_DEFINITION badDigestAlgorithm */
/**
 * @summary badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const badDigestAlgorithm: CmsErrorCode =
    CmsErrorCode.badDigestAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badDigestAlgorithm */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badSignatureAlgorithm */
/**
 * @summary CmsErrorCode_badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignatureAlgorithm: CmsErrorCode =
    CmsErrorCode.badSignatureAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION badSignatureAlgorithm */
/**
 * @summary badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const badSignatureAlgorithm: CmsErrorCode =
    CmsErrorCode.badSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_unsupportedKeySize */
/**
 * @summary CmsErrorCode_unsupportedKeySize
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeySize: CmsErrorCode =
    CmsErrorCode.unsupportedKeySize; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_unsupportedKeySize */

/* START_OF_SYMBOL_DEFINITION unsupportedKeySize */
/**
 * @summary unsupportedKeySize
 * @constant
 * @type {number}
 */
export const unsupportedKeySize: CmsErrorCode =
    CmsErrorCode.unsupportedKeySize; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedKeySize */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_unsupportedParameters */
/**
 * @summary CmsErrorCode_unsupportedParameters
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedParameters: CmsErrorCode =
    CmsErrorCode.unsupportedParameters; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_unsupportedParameters */

/* START_OF_SYMBOL_DEFINITION unsupportedParameters */
/**
 * @summary unsupportedParameters
 * @constant
 * @type {number}
 */
export const unsupportedParameters: CmsErrorCode =
    CmsErrorCode.unsupportedParameters; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedParameters */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_signatureFailure */
/**
 * @summary CmsErrorCode_signatureFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_signatureFailure: CmsErrorCode =
    CmsErrorCode.signatureFailure; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_signatureFailure */

/* START_OF_SYMBOL_DEFINITION signatureFailure */
/**
 * @summary signatureFailure
 * @constant
 * @type {number}
 */
export const signatureFailure: CmsErrorCode =
    CmsErrorCode.signatureFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION signatureFailure */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_incorrectTarget */
/**
 * @summary CmsErrorCode_incorrectTarget
 * @constant
 * @type {number}
 */
export const CmsErrorCode_incorrectTarget: CmsErrorCode =
    CmsErrorCode.incorrectTarget; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_incorrectTarget */

/* START_OF_SYMBOL_DEFINITION incorrectTarget */
/**
 * @summary incorrectTarget
 * @constant
 * @type {number}
 */
export const incorrectTarget: CmsErrorCode =
    CmsErrorCode.incorrectTarget; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION incorrectTarget */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_missingSignature */
/**
 * @summary CmsErrorCode_missingSignature
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignature: CmsErrorCode =
    CmsErrorCode.missingSignature; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_missingSignature */

/* START_OF_SYMBOL_DEFINITION missingSignature */
/**
 * @summary missingSignature
 * @constant
 * @type {number}
 */
export const missingSignature: CmsErrorCode =
    CmsErrorCode.missingSignature; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingSignature */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_versionNumberMismatch */
/**
 * @summary CmsErrorCode_versionNumberMismatch
 * @constant
 * @type {number}
 */
export const CmsErrorCode_versionNumberMismatch: CmsErrorCode =
    CmsErrorCode.versionNumberMismatch; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_versionNumberMismatch */

/* START_OF_SYMBOL_DEFINITION versionNumberMismatch */
/**
 * @summary versionNumberMismatch
 * @constant
 * @type {number}
 */
export const versionNumberMismatch: CmsErrorCode =
    CmsErrorCode.versionNumberMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION versionNumberMismatch */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_revokedCertificate */
/**
 * @summary CmsErrorCode_revokedCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_revokedCertificate: CmsErrorCode =
    CmsErrorCode.revokedCertificate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_revokedCertificate */

/* START_OF_SYMBOL_DEFINITION revokedCertificate */
/**
 * @summary revokedCertificate
 * @constant
 * @type {number}
 */
export const revokedCertificate: CmsErrorCode =
    CmsErrorCode.revokedCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION revokedCertificate */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badEncryptedData */
/**
 * @summary CmsErrorCode_badEncryptedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptedData: CmsErrorCode =
    CmsErrorCode.badEncryptedData; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badEncryptedData */

/* START_OF_SYMBOL_DEFINITION badEncryptedData */
/**
 * @summary badEncryptedData
 * @constant
 * @type {number}
 */
export const badEncryptedData: CmsErrorCode =
    CmsErrorCode.badEncryptedData; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badEncryptedData */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badEnvelopedData */
/**
 * @summary CmsErrorCode_badEnvelopedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEnvelopedData: CmsErrorCode =
    CmsErrorCode.badEnvelopedData; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badEnvelopedData */

/* START_OF_SYMBOL_DEFINITION badEnvelopedData */
/**
 * @summary badEnvelopedData
 * @constant
 * @type {number}
 */
export const badEnvelopedData: CmsErrorCode =
    CmsErrorCode.badEnvelopedData; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badEnvelopedData */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badKeyAgreeRecipientInfo */
/**
 * @summary CmsErrorCode_badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyAgreeRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyAgreeRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badKeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION badKeyAgreeRecipientInfo */
/**
 * @summary badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyAgreeRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyAgreeRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badKeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badKEKRecipientInfo */
/**
 * @summary CmsErrorCode_badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKEKRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKEKRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badKEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION badKEKRecipientInfo */
/**
 * @summary badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const badKEKRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKEKRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badKEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badEncryptContent */
/**
 * @summary CmsErrorCode_badEncryptContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptContent: CmsErrorCode =
    CmsErrorCode.badEncryptContent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badEncryptContent */

/* START_OF_SYMBOL_DEFINITION badEncryptContent */
/**
 * @summary badEncryptContent
 * @constant
 * @type {number}
 */
export const badEncryptContent: CmsErrorCode =
    CmsErrorCode.badEncryptContent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badEncryptContent */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badEncryptAlgorithm */
/**
 * @summary CmsErrorCode_badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptAlgorithm: CmsErrorCode =
    CmsErrorCode.badEncryptAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badEncryptAlgorithm */

/* START_OF_SYMBOL_DEFINITION badEncryptAlgorithm */
/**
 * @summary badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const badEncryptAlgorithm: CmsErrorCode =
    CmsErrorCode.badEncryptAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badEncryptAlgorithm */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_missingCiphertext */
/**
 * @summary CmsErrorCode_missingCiphertext
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCiphertext: CmsErrorCode =
    CmsErrorCode.missingCiphertext; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_missingCiphertext */

/* START_OF_SYMBOL_DEFINITION missingCiphertext */
/**
 * @summary missingCiphertext
 * @constant
 * @type {number}
 */
export const missingCiphertext: CmsErrorCode =
    CmsErrorCode.missingCiphertext; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingCiphertext */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_decryptFailure */
/**
 * @summary CmsErrorCode_decryptFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decryptFailure: CmsErrorCode =
    CmsErrorCode.decryptFailure; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_decryptFailure */

/* START_OF_SYMBOL_DEFINITION decryptFailure */
/**
 * @summary decryptFailure
 * @constant
 * @type {number}
 */
export const decryptFailure: CmsErrorCode =
    CmsErrorCode.decryptFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION decryptFailure */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badMACAlgorithm */
/**
 * @summary CmsErrorCode_badMACAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badMACAlgorithm: CmsErrorCode =
    CmsErrorCode.badMACAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badMACAlgorithm */

/* START_OF_SYMBOL_DEFINITION badMACAlgorithm */
/**
 * @summary badMACAlgorithm
 * @constant
 * @type {number}
 */
export const badMACAlgorithm: CmsErrorCode =
    CmsErrorCode.badMACAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badMACAlgorithm */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badAuthAttrs */
/**
 * @summary CmsErrorCode_badAuthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAuthAttrs: CmsErrorCode =
    CmsErrorCode.badAuthAttrs; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badAuthAttrs */

/* START_OF_SYMBOL_DEFINITION badAuthAttrs */
/**
 * @summary badAuthAttrs
 * @constant
 * @type {number}
 */
export const badAuthAttrs: CmsErrorCode =
    CmsErrorCode.badAuthAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badAuthAttrs */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badUnauthAttrs */
/**
 * @summary CmsErrorCode_badUnauthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnauthAttrs: CmsErrorCode =
    CmsErrorCode.badUnauthAttrs; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badUnauthAttrs */

/* START_OF_SYMBOL_DEFINITION badUnauthAttrs */
/**
 * @summary badUnauthAttrs
 * @constant
 * @type {number}
 */
export const badUnauthAttrs: CmsErrorCode =
    CmsErrorCode.badUnauthAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badUnauthAttrs */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_invalidMAC */
/**
 * @summary CmsErrorCode_invalidMAC
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidMAC: CmsErrorCode =
    CmsErrorCode.invalidMAC; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_invalidMAC */

/* START_OF_SYMBOL_DEFINITION invalidMAC */
/**
 * @summary invalidMAC
 * @constant
 * @type {number}
 */
export const invalidMAC: CmsErrorCode =
    CmsErrorCode.invalidMAC; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidMAC */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_mismatchedDigestAlg */
/**
 * @summary CmsErrorCode_mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const CmsErrorCode_mismatchedDigestAlg: CmsErrorCode =
    CmsErrorCode.mismatchedDigestAlg; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_mismatchedDigestAlg */

/* START_OF_SYMBOL_DEFINITION mismatchedDigestAlg */
/**
 * @summary mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const mismatchedDigestAlg: CmsErrorCode =
    CmsErrorCode.mismatchedDigestAlg; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION mismatchedDigestAlg */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_missingCertificate */
/**
 * @summary CmsErrorCode_missingCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCertificate: CmsErrorCode =
    CmsErrorCode.missingCertificate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_missingCertificate */

/* START_OF_SYMBOL_DEFINITION missingCertificate */
/**
 * @summary missingCertificate
 * @constant
 * @type {number}
 */
export const missingCertificate: CmsErrorCode =
    CmsErrorCode.missingCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingCertificate */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_tooManySigners */
/**
 * @summary CmsErrorCode_tooManySigners
 * @constant
 * @type {number}
 */
export const CmsErrorCode_tooManySigners: CmsErrorCode =
    CmsErrorCode.tooManySigners; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_tooManySigners */

/* START_OF_SYMBOL_DEFINITION tooManySigners */
/**
 * @summary tooManySigners
 * @constant
 * @type {number}
 */
export const tooManySigners: CmsErrorCode =
    CmsErrorCode.tooManySigners; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tooManySigners */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_missingSignedAttributes */
/**
 * @summary CmsErrorCode_missingSignedAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignedAttributes: CmsErrorCode =
    CmsErrorCode.missingSignedAttributes; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_missingSignedAttributes */

/* START_OF_SYMBOL_DEFINITION missingSignedAttributes */
/**
 * @summary missingSignedAttributes
 * @constant
 * @type {number}
 */
export const missingSignedAttributes: CmsErrorCode =
    CmsErrorCode.missingSignedAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingSignedAttributes */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_derEncodingNotUsed */
/**
 * @summary CmsErrorCode_derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const CmsErrorCode_derEncodingNotUsed: CmsErrorCode =
    CmsErrorCode.derEncodingNotUsed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_derEncodingNotUsed */

/* START_OF_SYMBOL_DEFINITION derEncodingNotUsed */
/**
 * @summary derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const derEncodingNotUsed: CmsErrorCode =
    CmsErrorCode.derEncodingNotUsed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derEncodingNotUsed */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_invalidAttributeLocation */
/**
 * @summary CmsErrorCode_invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidAttributeLocation: CmsErrorCode =
    CmsErrorCode.invalidAttributeLocation; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_invalidAttributeLocation */

/* START_OF_SYMBOL_DEFINITION invalidAttributeLocation */
/**
 * @summary invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const invalidAttributeLocation: CmsErrorCode =
    CmsErrorCode.invalidAttributeLocation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAttributeLocation */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badAttributes */
/**
 * @summary CmsErrorCode_badAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAttributes: CmsErrorCode =
    CmsErrorCode.badAttributes; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badAttributes */

/* START_OF_SYMBOL_DEFINITION badAttributes */
/**
 * @summary badAttributes
 * @constant
 * @type {number}
 */
export const badAttributes: CmsErrorCode =
    CmsErrorCode.badAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badAttributes */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_noMatchingRecipientInfo */
/**
 * @summary CmsErrorCode_noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noMatchingRecipientInfo: CmsErrorCode =
    CmsErrorCode.noMatchingRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_noMatchingRecipientInfo */

/* START_OF_SYMBOL_DEFINITION noMatchingRecipientInfo */
/**
 * @summary noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const noMatchingRecipientInfo: CmsErrorCode =
    CmsErrorCode.noMatchingRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noMatchingRecipientInfo */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_unsupportedKeyWrapAlgorithm */
/**
 * @summary CmsErrorCode_unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeyWrapAlgorithm: CmsErrorCode =
    CmsErrorCode.unsupportedKeyWrapAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_unsupportedKeyWrapAlgorithm */

/* START_OF_SYMBOL_DEFINITION unsupportedKeyWrapAlgorithm */
/**
 * @summary unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrapAlgorithm: CmsErrorCode =
    CmsErrorCode.unsupportedKeyWrapAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedKeyWrapAlgorithm */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_badKeyTransRecipientInfo */
/**
 * @summary CmsErrorCode_badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyTransRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyTransRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_badKeyTransRecipientInfo */

/* START_OF_SYMBOL_DEFINITION badKeyTransRecipientInfo */
/**
 * @summary badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyTransRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyTransRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION badKeyTransRecipientInfo */

/* START_OF_SYMBOL_DEFINITION CmsErrorCode_other */
/**
 * @summary CmsErrorCode_other
 * @constant
 * @type {number}
 */
export const CmsErrorCode_other: CmsErrorCode =
    CmsErrorCode.other; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CmsErrorCode_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other: CmsErrorCode =
    CmsErrorCode.other; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CmsErrorCode */
let _cached_decoder_for_CmsErrorCode: $.ASN1Decoder<CmsErrorCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CmsErrorCode */

/* START_OF_SYMBOL_DEFINITION _decode_CmsErrorCode */
/**
 * @summary Decodes an ASN.1 element into a(n) CmsErrorCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CmsErrorCode} The decoded data structure.
 */
export function _decode_CmsErrorCode(el: _Element) {
    if (!_cached_decoder_for_CmsErrorCode) {
        _cached_decoder_for_CmsErrorCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_CmsErrorCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CmsErrorCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CmsErrorCode */
let _cached_encoder_for_CmsErrorCode: $.ASN1Encoder<CmsErrorCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CmsErrorCode */

/* START_OF_SYMBOL_DEFINITION _encode_CmsErrorCode */
/**
 * @summary Encodes a(n) CmsErrorCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmsErrorCode, encoded as an ASN.1 Element.
 */
export function _encode_CmsErrorCode(
    value: CmsErrorCode,
    elGetter: $.ASN1Encoder<CmsErrorCode>
) {
    if (!_cached_encoder_for_CmsErrorCode) {
        _cached_encoder_for_CmsErrorCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_CmsErrorCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CmsErrorCode */

/* eslint-enable */
