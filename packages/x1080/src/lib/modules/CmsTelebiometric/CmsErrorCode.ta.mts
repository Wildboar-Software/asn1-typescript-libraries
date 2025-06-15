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


/**
 * @summary CmsErrorCode_decodeFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decodeFailure: CmsErrorCode =
    CmsErrorCode.decodeFailure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decodeFailure
 * @constant
 * @type {number}
 */
export const decodeFailure: CmsErrorCode =
    CmsErrorCode.decodeFailure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badContentInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badContentInfo: CmsErrorCode =
    CmsErrorCode.badContentInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badContentInfo
 * @constant
 * @type {number}
 */
export const badContentInfo: CmsErrorCode =
    CmsErrorCode.badContentInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedData: CmsErrorCode =
    CmsErrorCode.badSignedData; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignedData
 * @constant
 * @type {number}
 */
export const badSignedData: CmsErrorCode =
    CmsErrorCode.badSignedData; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncapContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncapContent: CmsErrorCode =
    CmsErrorCode.badEncapContent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncapContent
 * @constant
 * @type {number}
 */
export const badEncapContent: CmsErrorCode =
    CmsErrorCode.badEncapContent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badCertificate: CmsErrorCode =
    CmsErrorCode.badCertificate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badCertificate
 * @constant
 * @type {number}
 */
export const badCertificate: CmsErrorCode =
    CmsErrorCode.badCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignerInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignerInfo: CmsErrorCode =
    CmsErrorCode.badSignerInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignerInfo
 * @constant
 * @type {number}
 */
export const badSignerInfo: CmsErrorCode =
    CmsErrorCode.badSignerInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedAttrs: CmsErrorCode =
    CmsErrorCode.badSignedAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignedAttrs
 * @constant
 * @type {number}
 */
export const badSignedAttrs: CmsErrorCode =
    CmsErrorCode.badSignedAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnsignedAttrs: CmsErrorCode =
    CmsErrorCode.badUnsignedAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const badUnsignedAttrs: CmsErrorCode =
    CmsErrorCode.badUnsignedAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingContent: CmsErrorCode =
    CmsErrorCode.missingContent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: CmsErrorCode =
    CmsErrorCode.missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_noTrustAnchor
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noTrustAnchor: CmsErrorCode =
    CmsErrorCode.noTrustAnchor; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noTrustAnchor
 * @constant
 * @type {number}
 */
export const noTrustAnchor: CmsErrorCode =
    CmsErrorCode.noTrustAnchor; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_notAuthorized
 * @constant
 * @type {number}
 */
export const CmsErrorCode_notAuthorized: CmsErrorCode =
    CmsErrorCode.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export const notAuthorized: CmsErrorCode =
    CmsErrorCode.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badDigestAlgorithm: CmsErrorCode =
    CmsErrorCode.badDigestAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const badDigestAlgorithm: CmsErrorCode =
    CmsErrorCode.badDigestAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignatureAlgorithm: CmsErrorCode =
    CmsErrorCode.badSignatureAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const badSignatureAlgorithm: CmsErrorCode =
    CmsErrorCode.badSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedKeySize
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeySize: CmsErrorCode =
    CmsErrorCode.unsupportedKeySize; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedKeySize
 * @constant
 * @type {number}
 */
export const unsupportedKeySize: CmsErrorCode =
    CmsErrorCode.unsupportedKeySize; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedParameters
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedParameters: CmsErrorCode =
    CmsErrorCode.unsupportedParameters; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedParameters
 * @constant
 * @type {number}
 */
export const unsupportedParameters: CmsErrorCode =
    CmsErrorCode.unsupportedParameters; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_signatureFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_signatureFailure: CmsErrorCode =
    CmsErrorCode.signatureFailure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary signatureFailure
 * @constant
 * @type {number}
 */
export const signatureFailure: CmsErrorCode =
    CmsErrorCode.signatureFailure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_incorrectTarget
 * @constant
 * @type {number}
 */
export const CmsErrorCode_incorrectTarget: CmsErrorCode =
    CmsErrorCode.incorrectTarget; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary incorrectTarget
 * @constant
 * @type {number}
 */
export const incorrectTarget: CmsErrorCode =
    CmsErrorCode.incorrectTarget; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingSignature
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignature: CmsErrorCode =
    CmsErrorCode.missingSignature; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingSignature
 * @constant
 * @type {number}
 */
export const missingSignature: CmsErrorCode =
    CmsErrorCode.missingSignature; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_versionNumberMismatch
 * @constant
 * @type {number}
 */
export const CmsErrorCode_versionNumberMismatch: CmsErrorCode =
    CmsErrorCode.versionNumberMismatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary versionNumberMismatch
 * @constant
 * @type {number}
 */
export const versionNumberMismatch: CmsErrorCode =
    CmsErrorCode.versionNumberMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_revokedCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_revokedCertificate: CmsErrorCode =
    CmsErrorCode.revokedCertificate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary revokedCertificate
 * @constant
 * @type {number}
 */
export const revokedCertificate: CmsErrorCode =
    CmsErrorCode.revokedCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptedData: CmsErrorCode =
    CmsErrorCode.badEncryptedData; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptedData
 * @constant
 * @type {number}
 */
export const badEncryptedData: CmsErrorCode =
    CmsErrorCode.badEncryptedData; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEnvelopedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEnvelopedData: CmsErrorCode =
    CmsErrorCode.badEnvelopedData; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEnvelopedData
 * @constant
 * @type {number}
 */
export const badEnvelopedData: CmsErrorCode =
    CmsErrorCode.badEnvelopedData; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyAgreeRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyAgreeRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyAgreeRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyAgreeRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKEKRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKEKRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const badKEKRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKEKRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptContent: CmsErrorCode =
    CmsErrorCode.badEncryptContent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptContent
 * @constant
 * @type {number}
 */
export const badEncryptContent: CmsErrorCode =
    CmsErrorCode.badEncryptContent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptAlgorithm: CmsErrorCode =
    CmsErrorCode.badEncryptAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const badEncryptAlgorithm: CmsErrorCode =
    CmsErrorCode.badEncryptAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingCiphertext
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCiphertext: CmsErrorCode =
    CmsErrorCode.missingCiphertext; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingCiphertext
 * @constant
 * @type {number}
 */
export const missingCiphertext: CmsErrorCode =
    CmsErrorCode.missingCiphertext; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_decryptFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decryptFailure: CmsErrorCode =
    CmsErrorCode.decryptFailure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decryptFailure
 * @constant
 * @type {number}
 */
export const decryptFailure: CmsErrorCode =
    CmsErrorCode.decryptFailure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badMACAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badMACAlgorithm: CmsErrorCode =
    CmsErrorCode.badMACAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badMACAlgorithm
 * @constant
 * @type {number}
 */
export const badMACAlgorithm: CmsErrorCode =
    CmsErrorCode.badMACAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badAuthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAuthAttrs: CmsErrorCode =
    CmsErrorCode.badAuthAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badAuthAttrs
 * @constant
 * @type {number}
 */
export const badAuthAttrs: CmsErrorCode =
    CmsErrorCode.badAuthAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badUnauthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnauthAttrs: CmsErrorCode =
    CmsErrorCode.badUnauthAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badUnauthAttrs
 * @constant
 * @type {number}
 */
export const badUnauthAttrs: CmsErrorCode =
    CmsErrorCode.badUnauthAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_invalidMAC
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidMAC: CmsErrorCode =
    CmsErrorCode.invalidMAC; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidMAC
 * @constant
 * @type {number}
 */
export const invalidMAC: CmsErrorCode =
    CmsErrorCode.invalidMAC; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const CmsErrorCode_mismatchedDigestAlg: CmsErrorCode =
    CmsErrorCode.mismatchedDigestAlg; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const mismatchedDigestAlg: CmsErrorCode =
    CmsErrorCode.mismatchedDigestAlg; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCertificate: CmsErrorCode =
    CmsErrorCode.missingCertificate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingCertificate
 * @constant
 * @type {number}
 */
export const missingCertificate: CmsErrorCode =
    CmsErrorCode.missingCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_tooManySigners
 * @constant
 * @type {number}
 */
export const CmsErrorCode_tooManySigners: CmsErrorCode =
    CmsErrorCode.tooManySigners; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tooManySigners
 * @constant
 * @type {number}
 */
export const tooManySigners: CmsErrorCode =
    CmsErrorCode.tooManySigners; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingSignedAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignedAttributes: CmsErrorCode =
    CmsErrorCode.missingSignedAttributes; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingSignedAttributes
 * @constant
 * @type {number}
 */
export const missingSignedAttributes: CmsErrorCode =
    CmsErrorCode.missingSignedAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const CmsErrorCode_derEncodingNotUsed: CmsErrorCode =
    CmsErrorCode.derEncodingNotUsed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const derEncodingNotUsed: CmsErrorCode =
    CmsErrorCode.derEncodingNotUsed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidAttributeLocation: CmsErrorCode =
    CmsErrorCode.invalidAttributeLocation; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const invalidAttributeLocation: CmsErrorCode =
    CmsErrorCode.invalidAttributeLocation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAttributes: CmsErrorCode =
    CmsErrorCode.badAttributes; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badAttributes
 * @constant
 * @type {number}
 */
export const badAttributes: CmsErrorCode =
    CmsErrorCode.badAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noMatchingRecipientInfo: CmsErrorCode =
    CmsErrorCode.noMatchingRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const noMatchingRecipientInfo: CmsErrorCode =
    CmsErrorCode.noMatchingRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeyWrapAlgorithm: CmsErrorCode =
    CmsErrorCode.unsupportedKeyWrapAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrapAlgorithm: CmsErrorCode =
    CmsErrorCode.unsupportedKeyWrapAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyTransRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyTransRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyTransRecipientInfo: CmsErrorCode =
    CmsErrorCode.badKeyTransRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_other
 * @constant
 * @type {number}
 */
export const CmsErrorCode_other: CmsErrorCode =
    CmsErrorCode.other; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other: CmsErrorCode =
    CmsErrorCode.other; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CmsErrorCode = $._decodeEnumerated;




export const _encode_CmsErrorCode = $._encodeEnumerated;


/* eslint-enable */
