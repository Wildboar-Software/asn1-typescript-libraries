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
import { ExtendedCertificate, _decode_ExtendedCertificate, _encode_ExtendedCertificate } from "../CryptographicMessageSyntax-2009/ExtendedCertificate.ta.mjs";
// export { ExtendedCertificate, _decode_ExtendedCertificate, _encode_ExtendedCertificate } from "../CryptographicMessageSyntax-2009/ExtendedCertificate.ta.mjs";
import { AttributeCertificateV2, _decode_AttributeCertificateV2, _encode_AttributeCertificateV2 } from "../CryptographicMessageSyntax-2009/AttributeCertificateV2.ta.mjs";
// export { AttributeCertificateV2, _decode_AttributeCertificateV2, _encode_AttributeCertificateV2 } from "../CryptographicMessageSyntax-2009/AttributeCertificateV2.ta.mjs";
import { OtherCertificateFormat, _decode_OtherCertificateFormat, _encode_OtherCertificateFormat } from "../CryptographicMessageSyntax-2009/OtherCertificateFormat.ta.mjs";
// export { OtherCertificateFormat, _decode_OtherCertificateFormat, _encode_OtherCertificateFormat } from "../CryptographicMessageSyntax-2009/OtherCertificateFormat.ta.mjs";


/**
 * @summary CertificateChoices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateChoices  ::=  CHOICE {
 *     certificate Certificate,
 *     extendedCertificate [0] IMPLICIT ExtendedCertificate,
 *         -- Obsolete
 *     ...,
 *     [[3: v1AttrCert [1] IMPLICIT AttributeCertificateV1]],
 *         -- Obsolete
 *     [[4: v2AttrCert [2] IMPLICIT AttributeCertificateV2]],
 *     [[5: other      [3] IMPLICIT OtherCertificateFormat]] }
 * ```
 */
export
type CertificateChoices =
    { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */
    | { v1AttrCert: AttributeCertificateV1 } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 3 */
    | { v2AttrCert: AttributeCertificateV2 } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 4 */
    | { other: OtherCertificateFormat } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertificateChoices: $.ASN1Decoder<CertificateChoices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateChoices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateChoices (el: _Element): CertificateChoices {
    if (!_cached_decoder_for_CertificateChoices) { _cached_decoder_for_CertificateChoices = $._decode_extensible_choice<CertificateChoices>({
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "certificate", _decode_Certificate ],
    "CONTEXT 0": [ "extendedCertificate", $._decode_implicit<ExtendedCertificate>(() => _decode_ExtendedCertificate) ],
    "CONTEXT 1": [ "v1AttrCert", $._decode_implicit<AttributeCertificateV1>(() => _decode_AttributeCertificateV1) ],
    "CONTEXT 2": [ "v2AttrCert", $._decode_implicit<AttributeCertificateV2>(() => _decode_AttributeCertificateV2) ],
    "CONTEXT 3": [ "other", $._decode_implicit<OtherCertificateFormat>(() => _decode_OtherCertificateFormat) ]
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
    "v1AttrCert": $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeCertificateV1, $.BER),
    "v2AttrCert": $._encode_implicit(_TagClass.context, 2, () => _encode_AttributeCertificateV2, $.BER),
    "other": $._encode_implicit(_TagClass.context, 3, () => _encode_OtherCertificateFormat, $.BER),
}, $.BER); }
    return _cached_encoder_for_CertificateChoices(value, elGetter);
}


/* eslint-enable */
