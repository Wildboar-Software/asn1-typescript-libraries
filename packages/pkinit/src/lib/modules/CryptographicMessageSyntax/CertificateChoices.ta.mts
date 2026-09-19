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
import { ExtendedCertificate, _decode_ExtendedCertificate, _encode_ExtendedCertificate } from "../CryptographicMessageSyntax/ExtendedCertificate.ta.mjs";
// export { ExtendedCertificate, _decode_ExtendedCertificate, _encode_ExtendedCertificate } from "../CryptographicMessageSyntax/ExtendedCertificate.ta.mjs";


/**
 * @summary CertificateChoices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateChoices  ::=  CHOICE {
 *   certificate          Certificate, -- See X.509
 *   extendedCertificate  [0] IMPLICIT ExtendedCertificate, -- Obsolete
 *   attrCert             [1] IMPLICIT AttributeCertificate
 * }
 * ```
 */
export
type CertificateChoices =
    { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { attrCert: AttributeCertificate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CertificateChoices: $.ASN1Decoder<CertificateChoices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateChoices (el: _Element): CertificateChoices {
    if (!_cached_decoder_for_CertificateChoices) { _cached_decoder_for_CertificateChoices = $._decode_inextensible_choice<CertificateChoices>({
    "*": [ "certificate", _decode_Certificate ],
    "CONTEXT 0": [ "extendedCertificate", $._decode_implicit<ExtendedCertificate>(() => _decode_ExtendedCertificate) ],
    "CONTEXT 1": [ "attrCert", $._decode_implicit<AttributeCertificate>(() => _decode_AttributeCertificate) ]
}); }
    return _cached_decoder_for_CertificateChoices(el);
}

let _cached_encoder_for_CertificateChoices: $.ASN1Encoder<CertificateChoices> | null = null;

/**
 * @summary Encodes a(n) CertificateChoices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateChoices, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateChoices (value: CertificateChoices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateChoices) { _cached_encoder_for_CertificateChoices = $._encode_choice<CertificateChoices>({
    "certificate": _encode_Certificate,
    "extendedCertificate": $._encode_implicit(_TagClass.context, 0, () => _encode_ExtendedCertificate, $.BER),
    "attrCert": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeCertificate, $.BER),
}, $.BER); }
    return _cached_encoder_for_CertificateChoices(value, elGetter);
}


/* eslint-enable */
