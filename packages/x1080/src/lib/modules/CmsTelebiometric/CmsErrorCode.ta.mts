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
export const CmsErrorCode = _enum_for_CmsErrorCode;


/**
 * @summary CmsErrorCode_decodeFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decodeFailure =
    CmsErrorCode.decodeFailure satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decodeFailure
 * @constant
 * @type {number}
 */
export const decodeFailure =
    CmsErrorCode.decodeFailure satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badContentInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badContentInfo =
    CmsErrorCode.badContentInfo satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badContentInfo
 * @constant
 * @type {number}
 */
export const badContentInfo =
    CmsErrorCode.badContentInfo satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedData =
    CmsErrorCode.badSignedData satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignedData
 * @constant
 * @type {number}
 */
export const badSignedData =
    CmsErrorCode.badSignedData satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncapContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncapContent =
    CmsErrorCode.badEncapContent satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncapContent
 * @constant
 * @type {number}
 */
export const badEncapContent =
    CmsErrorCode.badEncapContent satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badCertificate =
    CmsErrorCode.badCertificate satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badCertificate
 * @constant
 * @type {number}
 */
export const badCertificate =
    CmsErrorCode.badCertificate satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignerInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignerInfo =
    CmsErrorCode.badSignerInfo satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignerInfo
 * @constant
 * @type {number}
 */
export const badSignerInfo =
    CmsErrorCode.badSignerInfo satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignedAttrs =
    CmsErrorCode.badSignedAttrs satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignedAttrs
 * @constant
 * @type {number}
 */
export const badSignedAttrs =
    CmsErrorCode.badSignedAttrs satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnsignedAttrs =
    CmsErrorCode.badUnsignedAttrs satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badUnsignedAttrs
 * @constant
 * @type {number}
 */
export const badUnsignedAttrs =
    CmsErrorCode.badUnsignedAttrs satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingContent =
    CmsErrorCode.missingContent satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent =
    CmsErrorCode.missingContent satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_noTrustAnchor
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noTrustAnchor =
    CmsErrorCode.noTrustAnchor satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noTrustAnchor
 * @constant
 * @type {number}
 */
export const noTrustAnchor =
    CmsErrorCode.noTrustAnchor satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_notAuthorized
 * @constant
 * @type {number}
 */
export const CmsErrorCode_notAuthorized =
    CmsErrorCode.notAuthorized satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export const notAuthorized =
    CmsErrorCode.notAuthorized satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badDigestAlgorithm =
    CmsErrorCode.badDigestAlgorithm satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badDigestAlgorithm
 * @constant
 * @type {number}
 */
export const badDigestAlgorithm =
    CmsErrorCode.badDigestAlgorithm satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badSignatureAlgorithm =
    CmsErrorCode.badSignatureAlgorithm satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const badSignatureAlgorithm =
    CmsErrorCode.badSignatureAlgorithm satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedKeySize
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeySize =
    CmsErrorCode.unsupportedKeySize satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedKeySize
 * @constant
 * @type {number}
 */
export const unsupportedKeySize =
    CmsErrorCode.unsupportedKeySize satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedParameters
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedParameters =
    CmsErrorCode.unsupportedParameters satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedParameters
 * @constant
 * @type {number}
 */
export const unsupportedParameters =
    CmsErrorCode.unsupportedParameters satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_signatureFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_signatureFailure =
    CmsErrorCode.signatureFailure satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary signatureFailure
 * @constant
 * @type {number}
 */
export const signatureFailure =
    CmsErrorCode.signatureFailure satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_incorrectTarget
 * @constant
 * @type {number}
 */
export const CmsErrorCode_incorrectTarget =
    CmsErrorCode.incorrectTarget satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary incorrectTarget
 * @constant
 * @type {number}
 */
export const incorrectTarget =
    CmsErrorCode.incorrectTarget satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingSignature
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignature =
    CmsErrorCode.missingSignature satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingSignature
 * @constant
 * @type {number}
 */
export const missingSignature =
    CmsErrorCode.missingSignature satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_versionNumberMismatch
 * @constant
 * @type {number}
 */
export const CmsErrorCode_versionNumberMismatch =
    CmsErrorCode.versionNumberMismatch satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary versionNumberMismatch
 * @constant
 * @type {number}
 */
export const versionNumberMismatch =
    CmsErrorCode.versionNumberMismatch satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_revokedCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_revokedCertificate =
    CmsErrorCode.revokedCertificate satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary revokedCertificate
 * @constant
 * @type {number}
 */
export const revokedCertificate =
    CmsErrorCode.revokedCertificate satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptedData =
    CmsErrorCode.badEncryptedData satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptedData
 * @constant
 * @type {number}
 */
export const badEncryptedData =
    CmsErrorCode.badEncryptedData satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEnvelopedData
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEnvelopedData =
    CmsErrorCode.badEnvelopedData satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEnvelopedData
 * @constant
 * @type {number}
 */
export const badEnvelopedData =
    CmsErrorCode.badEnvelopedData satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyAgreeRecipientInfo =
    CmsErrorCode.badKeyAgreeRecipientInfo satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKeyAgreeRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyAgreeRecipientInfo =
    CmsErrorCode.badKeyAgreeRecipientInfo satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKEKRecipientInfo =
    CmsErrorCode.badKEKRecipientInfo satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKEKRecipientInfo
 * @constant
 * @type {number}
 */
export const badKEKRecipientInfo =
    CmsErrorCode.badKEKRecipientInfo satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptContent
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptContent =
    CmsErrorCode.badEncryptContent satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptContent
 * @constant
 * @type {number}
 */
export const badEncryptContent =
    CmsErrorCode.badEncryptContent satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badEncryptAlgorithm =
    CmsErrorCode.badEncryptAlgorithm satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badEncryptAlgorithm
 * @constant
 * @type {number}
 */
export const badEncryptAlgorithm =
    CmsErrorCode.badEncryptAlgorithm satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingCiphertext
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCiphertext =
    CmsErrorCode.missingCiphertext satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingCiphertext
 * @constant
 * @type {number}
 */
export const missingCiphertext =
    CmsErrorCode.missingCiphertext satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_decryptFailure
 * @constant
 * @type {number}
 */
export const CmsErrorCode_decryptFailure =
    CmsErrorCode.decryptFailure satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary decryptFailure
 * @constant
 * @type {number}
 */
export const decryptFailure =
    CmsErrorCode.decryptFailure satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badMACAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badMACAlgorithm =
    CmsErrorCode.badMACAlgorithm satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badMACAlgorithm
 * @constant
 * @type {number}
 */
export const badMACAlgorithm =
    CmsErrorCode.badMACAlgorithm satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badAuthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAuthAttrs =
    CmsErrorCode.badAuthAttrs satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badAuthAttrs
 * @constant
 * @type {number}
 */
export const badAuthAttrs =
    CmsErrorCode.badAuthAttrs satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badUnauthAttrs
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badUnauthAttrs =
    CmsErrorCode.badUnauthAttrs satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badUnauthAttrs
 * @constant
 * @type {number}
 */
export const badUnauthAttrs =
    CmsErrorCode.badUnauthAttrs satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_invalidMAC
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidMAC =
    CmsErrorCode.invalidMAC satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidMAC
 * @constant
 * @type {number}
 */
export const invalidMAC =
    CmsErrorCode.invalidMAC satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const CmsErrorCode_mismatchedDigestAlg =
    CmsErrorCode.mismatchedDigestAlg satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary mismatchedDigestAlg
 * @constant
 * @type {number}
 */
export const mismatchedDigestAlg =
    CmsErrorCode.mismatchedDigestAlg satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingCertificate
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingCertificate =
    CmsErrorCode.missingCertificate satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingCertificate
 * @constant
 * @type {number}
 */
export const missingCertificate =
    CmsErrorCode.missingCertificate satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_tooManySigners
 * @constant
 * @type {number}
 */
export const CmsErrorCode_tooManySigners =
    CmsErrorCode.tooManySigners satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary tooManySigners
 * @constant
 * @type {number}
 */
export const tooManySigners =
    CmsErrorCode.tooManySigners satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_missingSignedAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_missingSignedAttributes =
    CmsErrorCode.missingSignedAttributes satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary missingSignedAttributes
 * @constant
 * @type {number}
 */
export const missingSignedAttributes =
    CmsErrorCode.missingSignedAttributes satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const CmsErrorCode_derEncodingNotUsed =
    CmsErrorCode.derEncodingNotUsed satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary derEncodingNotUsed
 * @constant
 * @type {number}
 */
export const derEncodingNotUsed =
    CmsErrorCode.derEncodingNotUsed satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const CmsErrorCode_invalidAttributeLocation =
    CmsErrorCode.invalidAttributeLocation satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidAttributeLocation
 * @constant
 * @type {number}
 */
export const invalidAttributeLocation =
    CmsErrorCode.invalidAttributeLocation satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badAttributes
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badAttributes =
    CmsErrorCode.badAttributes satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badAttributes
 * @constant
 * @type {number}
 */
export const badAttributes =
    CmsErrorCode.badAttributes satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_noMatchingRecipientInfo =
    CmsErrorCode.noMatchingRecipientInfo satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary noMatchingRecipientInfo
 * @constant
 * @type {number}
 */
export const noMatchingRecipientInfo =
    CmsErrorCode.noMatchingRecipientInfo satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const CmsErrorCode_unsupportedKeyWrapAlgorithm =
    CmsErrorCode.unsupportedKeyWrapAlgorithm satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unsupportedKeyWrapAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrapAlgorithm =
    CmsErrorCode.unsupportedKeyWrapAlgorithm satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const CmsErrorCode_badKeyTransRecipientInfo =
    CmsErrorCode.badKeyTransRecipientInfo satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary badKeyTransRecipientInfo
 * @constant
 * @type {number}
 */
export const badKeyTransRecipientInfo =
    CmsErrorCode.badKeyTransRecipientInfo satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CmsErrorCode_other
 * @constant
 * @type {number}
 */
export const CmsErrorCode_other =
    CmsErrorCode.other satisfies CmsErrorCode; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other =
    CmsErrorCode.other satisfies CmsErrorCode; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_CmsErrorCode = $._decodeEnumerated;




export const _encode_CmsErrorCode = $._encodeEnumerated;


/* eslint-enable */
