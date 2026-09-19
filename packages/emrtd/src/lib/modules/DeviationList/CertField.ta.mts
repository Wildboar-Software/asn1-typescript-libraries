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
import { CertificateBodyField, CertificateBodyField_generic /* IMPORTED_LONG_NAMED_INTEGER */, generic /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_version /* IMPORTED_LONG_NAMED_INTEGER */, version /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_serialNumber /* IMPORTED_LONG_NAMED_INTEGER */, serialNumber /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_signature /* IMPORTED_LONG_NAMED_INTEGER */, signature /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_issuer /* IMPORTED_LONG_NAMED_INTEGER */, issuer /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_validity /* IMPORTED_LONG_NAMED_INTEGER */, validity /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subject /* IMPORTED_LONG_NAMED_INTEGER */, subject /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subjectPublicKeyInfo /* IMPORTED_LONG_NAMED_INTEGER */, subjectPublicKeyInfo /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_issuerUniqueID /* IMPORTED_LONG_NAMED_INTEGER */, issuerUniqueID /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subjectUniqueID /* IMPORTED_LONG_NAMED_INTEGER */, subjectUniqueID /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CertificateBodyField, _encode_CertificateBodyField } from "../DeviationList/CertificateBodyField.ta.mjs";
// export { CertificateBodyField, CertificateBodyField_generic /* IMPORTED_LONG_NAMED_INTEGER */, generic /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_version /* IMPORTED_LONG_NAMED_INTEGER */, version /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_serialNumber /* IMPORTED_LONG_NAMED_INTEGER */, serialNumber /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_signature /* IMPORTED_LONG_NAMED_INTEGER */, signature /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_issuer /* IMPORTED_LONG_NAMED_INTEGER */, issuer /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_validity /* IMPORTED_LONG_NAMED_INTEGER */, validity /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subject /* IMPORTED_LONG_NAMED_INTEGER */, subject /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subjectPublicKeyInfo /* IMPORTED_LONG_NAMED_INTEGER */, subjectPublicKeyInfo /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_issuerUniqueID /* IMPORTED_LONG_NAMED_INTEGER */, issuerUniqueID /* IMPORTED_SHORT_NAMED_INTEGER */, CertificateBodyField_subjectUniqueID /* IMPORTED_LONG_NAMED_INTEGER */, subjectUniqueID /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CertificateBodyField, _encode_CertificateBodyField } from "../DeviationList/CertificateBodyField.ta.mjs";


/**
 * @summary CertField
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertField  ::=  CHOICE {
 *     body CertificateBodyField,
 *     extension OBJECT IDENTIFIER
 * }
 * ```
 */
export
type CertField =
    { body: CertificateBodyField } /* CHOICE_ALT_ROOT */
    | { extension: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CertField: $.ASN1Decoder<CertField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertField
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertField (el: _Element): CertField {
    if (!_cached_decoder_for_CertField) { _cached_decoder_for_CertField = $._decode_inextensible_choice<CertField>({
    "UNIVERSAL 2": [ "body", _decode_CertificateBodyField ],
    "UNIVERSAL 6": [ "extension", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_CertField(el);
}

let _cached_encoder_for_CertField: $.ASN1Encoder<CertField> | null = null;

/**
 * @summary Encodes a(n) CertField into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertField, encoded as an ASN.1 Element.
 */
export
function _encode_CertField (value: CertField, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertField) { _cached_encoder_for_CertField = $._encode_choice<CertField>({
    "body": _encode_CertificateBodyField,
    "extension": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_CertField(value, elGetter);
}


/* eslint-enable */
