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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../EnhancedSecurity/IssuerAndSerialNumber.ta.mjs";
// export { IssuerAndSerialNumber, _decode_IssuerAndSerialNumber, _encode_IssuerAndSerialNumber } from "../EnhancedSecurity/IssuerAndSerialNumber.ta.mjs";
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../CertificateExtensions/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../CertificateExtensions/SubjectKeyIdentifier.ta.mjs";
import { Digest, _decode_Digest, _encode_Digest } from "../DeviationList/Digest.ta.mjs";
// export { Digest, _decode_Digest, _encode_Digest } from "../DeviationList/Digest.ta.mjs";


/**
 * @summary DocumentSignerIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentSignerIdentifier  ::=  CHOICE{
 *     issuerAndSerialNumber [1] IssuerAndSerialNumber,
 *     subjectKeyIdentifier [2] SubjectKeyIdentifier,
 *     certificateDigest [3] Digest -- if used, digestAlgorithm must be present in DeviationList
 * }
 * ```
 */
export
type DocumentSignerIdentifier =
    { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { subjectKeyIdentifier: SubjectKeyIdentifier } /* CHOICE_ALT_ROOT */
    | { certificateDigest: Digest } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DocumentSignerIdentifier: $.ASN1Decoder<DocumentSignerIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DocumentSignerIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DocumentSignerIdentifier (el: _Element): DocumentSignerIdentifier {
    if (!_cached_decoder_for_DocumentSignerIdentifier) { _cached_decoder_for_DocumentSignerIdentifier = $._decode_inextensible_choice<DocumentSignerIdentifier>({
    "CONTEXT 1": [ "issuerAndSerialNumber", $._decode_implicit<IssuerAndSerialNumber>(() => _decode_IssuerAndSerialNumber) ],
    "CONTEXT 2": [ "subjectKeyIdentifier", $._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier) ],
    "CONTEXT 3": [ "certificateDigest", $._decode_implicit<Digest>(() => _decode_Digest) ]
}); }
    return _cached_decoder_for_DocumentSignerIdentifier(el);
}

let _cached_encoder_for_DocumentSignerIdentifier: $.ASN1Encoder<DocumentSignerIdentifier> | null = null;

/**
 * @summary Encodes a(n) DocumentSignerIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DocumentSignerIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_DocumentSignerIdentifier (value: DocumentSignerIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DocumentSignerIdentifier) { _cached_encoder_for_DocumentSignerIdentifier = $._encode_choice<DocumentSignerIdentifier>({
    "issuerAndSerialNumber": $._encode_implicit(_TagClass.context, 1, () => _encode_IssuerAndSerialNumber, $.BER),
    "subjectKeyIdentifier": $._encode_implicit(_TagClass.context, 2, () => _encode_SubjectKeyIdentifier, $.BER),
    "certificateDigest": $._encode_implicit(_TagClass.context, 3, () => _encode_Digest, $.BER),
}, $.BER); }
    return _cached_encoder_for_DocumentSignerIdentifier(value, elGetter);
}


/* eslint-enable */
