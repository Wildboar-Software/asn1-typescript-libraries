/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import {
    CmsErrorCode,
    _enum_for_CmsErrorCode,
    CmsErrorCode_decodeFailure /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decodeFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badContentInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badContentInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignedData /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignedData /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncapContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncapContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignerInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignerInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignedAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignedAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badUnsignedAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badUnsignedAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_noTrustAnchor /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noTrustAnchor /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */,
    notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badDigestAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badDigestAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignatureAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignatureAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_unsupportedKeySize /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedKeySize /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_unsupportedParameters /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedParameters /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_signatureFailure /* IMPORTED_LONG_ENUMERATION_ITEM */,
    signatureFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_incorrectTarget /* IMPORTED_LONG_ENUMERATION_ITEM */,
    incorrectTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingSignature /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingSignature /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_versionNumberMismatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
    versionNumberMismatch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_revokedCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    revokedCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncryptedData /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncryptedData /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEnvelopedData /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEnvelopedData /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badKeyAgreeRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badKeyAgreeRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badKEKRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badKEKRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncryptContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncryptContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncryptAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncryptAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingCiphertext /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingCiphertext /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_decryptFailure /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decryptFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badMACAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badMACAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badAuthAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badAuthAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badUnauthAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badUnauthAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_invalidMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_mismatchedDigestAlg /* IMPORTED_LONG_ENUMERATION_ITEM */,
    mismatchedDigestAlg /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_tooManySigners /* IMPORTED_LONG_ENUMERATION_ITEM */,
    tooManySigners /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingSignedAttributes /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingSignedAttributes /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_derEncodingNotUsed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    derEncodingNotUsed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_invalidAttributeLocation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidAttributeLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badAttributes /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badAttributes /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_noMatchingRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noMatchingRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_unsupportedKeyWrapAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedKeyWrapAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badKeyTransRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badKeyTransRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_other /* IMPORTED_LONG_ENUMERATION_ITEM */,
    other /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CmsErrorCode,
    _encode_CmsErrorCode,
} from '../CmsTelebiometric/CmsErrorCode.ta.mjs';
export {
    CmsErrorCode,
    _enum_for_CmsErrorCode,
    CmsErrorCode_decodeFailure /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decodeFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badContentInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badContentInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignedData /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignedData /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncapContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncapContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignerInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignerInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignedAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignedAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badUnsignedAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badUnsignedAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_noTrustAnchor /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noTrustAnchor /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */,
    notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badDigestAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badDigestAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badSignatureAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badSignatureAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_unsupportedKeySize /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedKeySize /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_unsupportedParameters /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedParameters /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_signatureFailure /* IMPORTED_LONG_ENUMERATION_ITEM */,
    signatureFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_incorrectTarget /* IMPORTED_LONG_ENUMERATION_ITEM */,
    incorrectTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingSignature /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingSignature /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_versionNumberMismatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
    versionNumberMismatch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_revokedCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    revokedCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncryptedData /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncryptedData /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEnvelopedData /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEnvelopedData /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badKeyAgreeRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badKeyAgreeRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badKEKRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badKEKRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncryptContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncryptContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badEncryptAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badEncryptAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingCiphertext /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingCiphertext /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_decryptFailure /* IMPORTED_LONG_ENUMERATION_ITEM */,
    decryptFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badMACAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badMACAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badAuthAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badAuthAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badUnauthAttrs /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badUnauthAttrs /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_invalidMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_mismatchedDigestAlg /* IMPORTED_LONG_ENUMERATION_ITEM */,
    mismatchedDigestAlg /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_tooManySigners /* IMPORTED_LONG_ENUMERATION_ITEM */,
    tooManySigners /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_missingSignedAttributes /* IMPORTED_LONG_ENUMERATION_ITEM */,
    missingSignedAttributes /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_derEncodingNotUsed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    derEncodingNotUsed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_invalidAttributeLocation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidAttributeLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badAttributes /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badAttributes /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_noMatchingRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noMatchingRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_unsupportedKeyWrapAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedKeyWrapAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_badKeyTransRecipientInfo /* IMPORTED_LONG_ENUMERATION_ITEM */,
    badKeyTransRecipientInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CmsErrorCode_other /* IMPORTED_LONG_ENUMERATION_ITEM */,
    other /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CmsErrorCode,
    _encode_CmsErrorCode,
} from '../CmsTelebiometric/CmsErrorCode.ta.mjs';
import {
    AssignErr,
    _enum_for_AssignErr,
    AssignErr_invalidAttributeCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidAttributeCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AssignErr,
    _encode_AssignErr,
} from '../Pbact-access/AssignErr.ta.mjs';
export {
    AssignErr,
    _enum_for_AssignErr,
    AssignErr_invalidAttributeCertificate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidAttributeCertificate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AssignErr,
    _encode_AssignErr,
} from '../Pbact-access/AssignErr.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PrivAssignErr */
/**
 * @summary PrivAssignErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivAssignErr  ::=  CHOICE {
 *   cmsErr     [0] CmsErrorCode,
 *   assignErr  [1] AssignErr,
 *   ... }
 * ```
 */
export type PrivAssignErr =
    | { cmsErr: CmsErrorCode } /* CHOICE_ALT_ROOT */
    | { assignErr: AssignErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignErr */
let _cached_decoder_for_PrivAssignErr: $.ASN1Decoder<PrivAssignErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _decode_PrivAssignErr */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignErr} The decoded data structure.
 */
export function _decode_PrivAssignErr(el: _Element) {
    if (!_cached_decoder_for_PrivAssignErr) {
        _cached_decoder_for_PrivAssignErr = $._decode_extensible_choice<PrivAssignErr>(
            {
                'CONTEXT 0': [
                    'cmsErr',
                    $._decode_implicit<CmsErrorCode>(
                        () => _decode_CmsErrorCode
                    ),
                ],
                'CONTEXT 1': [
                    'assignErr',
                    $._decode_implicit<AssignErr>(() => _decode_AssignErr),
                ],
            }
        );
    }
    return _cached_decoder_for_PrivAssignErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignErr */
let _cached_encoder_for_PrivAssignErr: $.ASN1Encoder<PrivAssignErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _encode_PrivAssignErr */
/**
 * @summary Encodes a(n) PrivAssignErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignErr, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignErr(
    value: PrivAssignErr,
    elGetter: $.ASN1Encoder<PrivAssignErr>
) {
    if (!_cached_encoder_for_PrivAssignErr) {
        _cached_encoder_for_PrivAssignErr = $._encode_choice<PrivAssignErr>(
            {
                cmsErr: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CmsErrorCode,
                    $.BER
                ),
                assignErr: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AssignErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivAssignErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivAssignErr */

/* eslint-enable */
