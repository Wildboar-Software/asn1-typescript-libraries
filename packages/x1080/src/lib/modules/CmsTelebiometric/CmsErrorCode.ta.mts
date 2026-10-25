/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary CmsErrorCode
 * @description
 *
 * Subset of RFC 7191 CMS error codes relevant to telebiometrics.
 * Per-code meaning is in IETF RFC 7191; when that RFC says
 * "certificate" it means the PKC used with CMS content types.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.6.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
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
 * ```
 *
 * @enum {number}
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
 * Subset of RFC 7191 CMS error codes relevant to telebiometrics.
 * Per-code meaning is in IETF RFC 7191; when that RFC says
 * "certificate" it means the PKC used with CMS content types.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.6.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
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
 * ```
 *
 * @enum {number}
 */
export type CmsErrorCode = _enum_for_CmsErrorCode;


/**
 * @summary CmsErrorCode
 * @description
 *
 * Subset of RFC 7191 CMS error codes relevant to telebiometrics.
 * Per-code meaning is in IETF RFC 7191; when that RFC says
 * "certificate" it means the PKC used with CMS content types.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.6.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
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
 * ```
 *
 * @enum {number}
 */
export const CmsErrorCode: typeof _enum_for_CmsErrorCode = _enum_for_CmsErrorCode;


/**
 * @summary CmsErrorCode_decodeFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decodeFailure: _enum_for_CmsErrorCode.decodeFailure =
    CmsErrorCode.decodeFailure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decodeFailure
 * @constant
 * @type {number}
 */
export const decodeFailure: _enum_for_CmsErrorCode.decodeFailure =
    CmsErrorCode.decodeFailure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badContentInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badContentInfo: _enum_for_CmsErrorCode.badContentInfo =
    CmsErrorCode.badContentInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badContentInfo
 * @constant
 * @type {number}
 */
export const badContentInfo: _enum_for_CmsErrorCode.badContentInfo =
    CmsErrorCode.badContentInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedData: _enum_for_CmsErrorCode.badSignedData =
    CmsErrorCode.badSignedData; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignedData
 * @constant
 * @type {number}
 */
export const badSignedData: _enum_for_CmsErrorCode.badSignedData =
    CmsErrorCode.badSignedData; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncapContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncapContent: _enum_for_CmsErrorCode.badEncapContent =
    CmsErrorCode.badEncapContent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncapContent
 * @constant
 * @type {number}
 */
export const badEncapContent: _enum_for_CmsErrorCode.badEncapContent =
    CmsErrorCode.badEncapContent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badCertificate: _enum_for_CmsErrorCode.badCertificate =
    CmsErrorCode.badCertificate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badCertificate
 * @constant
 * @type {number}
 */
export const badCertificate: _enum_for_CmsErrorCode.badCertificate =
    CmsErrorCode.badCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignerInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignerInfo: _enum_for_CmsErrorCode.badSignerInfo =
    CmsErrorCode.badSignerInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignerInfo
 * @constant
 * @type {number}
 */
export const badSignerInfo: _enum_for_CmsErrorCode.badSignerInfo =
    CmsErrorCode.badSignerInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedAttrs: _enum_for_CmsErrorCode.badSignedAttrs =
    CmsErrorCode.badSignedAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignedAttrs
 * @constant
 * @type {number}
 */
export const badSignedAttrs: _enum_for_CmsErrorCode.badSignedAttrs =
    CmsErrorCode.badSignedAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnsignedAttrs: _enum_for_CmsErrorCode.badUnsignedAttrs =
    CmsErrorCode.badUnsignedAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const badUnsignedAttrs: _enum_for_CmsErrorCode.badUnsignedAttrs =
    CmsErrorCode.badUnsignedAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingContent: _enum_for_CmsErrorCode.missingContent =
    CmsErrorCode.missingContent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: _enum_for_CmsErrorCode.missingContent =
    CmsErrorCode.missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_noTrustAnchor
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noTrustAnchor: _enum_for_CmsErrorCode.noTrustAnchor =
    CmsErrorCode.noTrustAnchor; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noTrustAnchor
 * @constant
 * @type {number}
 */
export const noTrustAnchor: _enum_for_CmsErrorCode.noTrustAnchor =
    CmsErrorCode.noTrustAnchor; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_notAuthorized
 * @constant
 * @type {number}
 */
export const CmsErrorCode_notAuthorized: _enum_for_CmsErrorCode.notAuthorized =
    CmsErrorCode.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export const notAuthorized: _enum_for_CmsErrorCode.notAuthorized =
    CmsErrorCode.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badDigestAlgorithm: _enum_for_CmsErrorCode.badDigestAlgorithm =
    CmsErrorCode.badDigestAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const badDigestAlgorithm: _enum_for_CmsErrorCode.badDigestAlgorithm =
    CmsErrorCode.badDigestAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignatureAlgorithm: _enum_for_CmsErrorCode.badSignatureAlgorithm =
    CmsErrorCode.badSignatureAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const badSignatureAlgorithm: _enum_for_CmsErrorCode.badSignatureAlgorithm =
    CmsErrorCode.badSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedKeySize
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeySize: _enum_for_CmsErrorCode.unsupportedKeySize =
    CmsErrorCode.unsupportedKeySize; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedKeySize
 * @constant
 * @type {number}
 */
export const unsupportedKeySize: _enum_for_CmsErrorCode.unsupportedKeySize =
    CmsErrorCode.unsupportedKeySize; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedParameters
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedParameters: _enum_for_CmsErrorCode.unsupportedParameters =
    CmsErrorCode.unsupportedParameters; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedParameters
 * @constant
 * @type {number}
 */
export const unsupportedParameters: _enum_for_CmsErrorCode.unsupportedParameters =
    CmsErrorCode.unsupportedParameters; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_signatureFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_signatureFailure: _enum_for_CmsErrorCode.signatureFailure =
    CmsErrorCode.signatureFailure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary signatureFailure
 * @constant
 * @type {number}
 */
export const signatureFailure: _enum_for_CmsErrorCode.signatureFailure =
    CmsErrorCode.signatureFailure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_incorrectTarget
 * @constant
 * @type {number}
 */
export const CmsErrorCode_incorrectTarget: _enum_for_CmsErrorCode.incorrectTarget =
    CmsErrorCode.incorrectTarget; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary incorrectTarget
 * @constant
 * @type {number}
 */
export const incorrectTarget: _enum_for_CmsErrorCode.incorrectTarget =
    CmsErrorCode.incorrectTarget; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingSignature
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignature: _enum_for_CmsErrorCode.missingSignature =
    CmsErrorCode.missingSignature; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingSignature
 * @constant
 * @type {number}
 */
export const missingSignature: _enum_for_CmsErrorCode.missingSignature =
    CmsErrorCode.missingSignature; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_versionNumberMismatch
 * @constant
 * @type {number}
 */
export const CmsErrorCode_versionNumberMismatch: _enum_for_CmsErrorCode.versionNumberMismatch =
    CmsErrorCode.versionNumberMismatch; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary versionNumberMismatch
 * @constant
 * @type {number}
 */
export const versionNumberMismatch: _enum_for_CmsErrorCode.versionNumberMismatch =
    CmsErrorCode.versionNumberMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_revokedCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_revokedCertificate: _enum_for_CmsErrorCode.revokedCertificate =
    CmsErrorCode.revokedCertificate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary revokedCertificate
 * @constant
 * @type {number}
 */
export const revokedCertificate: _enum_for_CmsErrorCode.revokedCertificate =
    CmsErrorCode.revokedCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptedData: _enum_for_CmsErrorCode.badEncryptedData =
    CmsErrorCode.badEncryptedData; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptedData
 * @constant
 * @type {number}
 */
export const badEncryptedData: _enum_for_CmsErrorCode.badEncryptedData =
    CmsErrorCode.badEncryptedData; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEnvelopedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEnvelopedData: _enum_for_CmsErrorCode.badEnvelopedData =
    CmsErrorCode.badEnvelopedData; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEnvelopedData
 * @constant
 * @type {number}
 */
export const badEnvelopedData: _enum_for_CmsErrorCode.badEnvelopedData =
    CmsErrorCode.badEnvelopedData; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyAgreeRecipientInfo: _enum_for_CmsErrorCode.badKeyAgreeRecipientInfo =
    CmsErrorCode.badKeyAgreeRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyAgreeRecipientInfo: _enum_for_CmsErrorCode.badKeyAgreeRecipientInfo =
    CmsErrorCode.badKeyAgreeRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKEKRecipientInfo: _enum_for_CmsErrorCode.badKEKRecipientInfo =
    CmsErrorCode.badKEKRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const badKEKRecipientInfo: _enum_for_CmsErrorCode.badKEKRecipientInfo =
    CmsErrorCode.badKEKRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptContent: _enum_for_CmsErrorCode.badEncryptContent =
    CmsErrorCode.badEncryptContent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptContent
 * @constant
 * @type {number}
 */
export const badEncryptContent: _enum_for_CmsErrorCode.badEncryptContent =
    CmsErrorCode.badEncryptContent; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptAlgorithm: _enum_for_CmsErrorCode.badEncryptAlgorithm =
    CmsErrorCode.badEncryptAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const badEncryptAlgorithm: _enum_for_CmsErrorCode.badEncryptAlgorithm =
    CmsErrorCode.badEncryptAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingCiphertext
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCiphertext: _enum_for_CmsErrorCode.missingCiphertext =
    CmsErrorCode.missingCiphertext; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingCiphertext
 * @constant
 * @type {number}
 */
export const missingCiphertext: _enum_for_CmsErrorCode.missingCiphertext =
    CmsErrorCode.missingCiphertext; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_decryptFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decryptFailure: _enum_for_CmsErrorCode.decryptFailure =
    CmsErrorCode.decryptFailure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decryptFailure
 * @constant
 * @type {number}
 */
export const decryptFailure: _enum_for_CmsErrorCode.decryptFailure =
    CmsErrorCode.decryptFailure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badMACAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badMACAlgorithm: _enum_for_CmsErrorCode.badMACAlgorithm =
    CmsErrorCode.badMACAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badMACAlgorithm
 * @constant
 * @type {number}
 */
export const badMACAlgorithm: _enum_for_CmsErrorCode.badMACAlgorithm =
    CmsErrorCode.badMACAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badAuthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAuthAttrs: _enum_for_CmsErrorCode.badAuthAttrs =
    CmsErrorCode.badAuthAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badAuthAttrs
 * @constant
 * @type {number}
 */
export const badAuthAttrs: _enum_for_CmsErrorCode.badAuthAttrs =
    CmsErrorCode.badAuthAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badUnauthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnauthAttrs: _enum_for_CmsErrorCode.badUnauthAttrs =
    CmsErrorCode.badUnauthAttrs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badUnauthAttrs
 * @constant
 * @type {number}
 */
export const badUnauthAttrs: _enum_for_CmsErrorCode.badUnauthAttrs =
    CmsErrorCode.badUnauthAttrs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_invalidMAC
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidMAC: _enum_for_CmsErrorCode.invalidMAC =
    CmsErrorCode.invalidMAC; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidMAC
 * @constant
 * @type {number}
 */
export const invalidMAC: _enum_for_CmsErrorCode.invalidMAC =
    CmsErrorCode.invalidMAC; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const CmsErrorCode_mismatchedDigestAlg: _enum_for_CmsErrorCode.mismatchedDigestAlg =
    CmsErrorCode.mismatchedDigestAlg; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const mismatchedDigestAlg: _enum_for_CmsErrorCode.mismatchedDigestAlg =
    CmsErrorCode.mismatchedDigestAlg; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCertificate: _enum_for_CmsErrorCode.missingCertificate =
    CmsErrorCode.missingCertificate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingCertificate
 * @constant
 * @type {number}
 */
export const missingCertificate: _enum_for_CmsErrorCode.missingCertificate =
    CmsErrorCode.missingCertificate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_tooManySigners
 * @constant
 * @type {number}
 */
export const CmsErrorCode_tooManySigners: _enum_for_CmsErrorCode.tooManySigners =
    CmsErrorCode.tooManySigners; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tooManySigners
 * @constant
 * @type {number}
 */
export const tooManySigners: _enum_for_CmsErrorCode.tooManySigners =
    CmsErrorCode.tooManySigners; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingSignedAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignedAttributes: _enum_for_CmsErrorCode.missingSignedAttributes =
    CmsErrorCode.missingSignedAttributes; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingSignedAttributes
 * @constant
 * @type {number}
 */
export const missingSignedAttributes: _enum_for_CmsErrorCode.missingSignedAttributes =
    CmsErrorCode.missingSignedAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const CmsErrorCode_derEncodingNotUsed: _enum_for_CmsErrorCode.derEncodingNotUsed =
    CmsErrorCode.derEncodingNotUsed; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const derEncodingNotUsed: _enum_for_CmsErrorCode.derEncodingNotUsed =
    CmsErrorCode.derEncodingNotUsed; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidAttributeLocation: _enum_for_CmsErrorCode.invalidAttributeLocation =
    CmsErrorCode.invalidAttributeLocation; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const invalidAttributeLocation: _enum_for_CmsErrorCode.invalidAttributeLocation =
    CmsErrorCode.invalidAttributeLocation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAttributes: _enum_for_CmsErrorCode.badAttributes =
    CmsErrorCode.badAttributes; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badAttributes
 * @constant
 * @type {number}
 */
export const badAttributes: _enum_for_CmsErrorCode.badAttributes =
    CmsErrorCode.badAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noMatchingRecipientInfo: _enum_for_CmsErrorCode.noMatchingRecipientInfo =
    CmsErrorCode.noMatchingRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const noMatchingRecipientInfo: _enum_for_CmsErrorCode.noMatchingRecipientInfo =
    CmsErrorCode.noMatchingRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeyWrapAlgorithm: _enum_for_CmsErrorCode.unsupportedKeyWrapAlgorithm =
    CmsErrorCode.unsupportedKeyWrapAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrapAlgorithm: _enum_for_CmsErrorCode.unsupportedKeyWrapAlgorithm =
    CmsErrorCode.unsupportedKeyWrapAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyTransRecipientInfo: _enum_for_CmsErrorCode.badKeyTransRecipientInfo =
    CmsErrorCode.badKeyTransRecipientInfo; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyTransRecipientInfo: _enum_for_CmsErrorCode.badKeyTransRecipientInfo =
    CmsErrorCode.badKeyTransRecipientInfo; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_other
 * @constant
 * @type {number}
 */
export const CmsErrorCode_other: _enum_for_CmsErrorCode.other =
    CmsErrorCode.other; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other: _enum_for_CmsErrorCode.other =
    CmsErrorCode.other; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CmsErrorCode: $.ASN1Decoder<number> = $._decodeEnumerated;




export const _encode_CmsErrorCode: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
