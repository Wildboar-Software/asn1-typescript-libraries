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


/**
 * @summary ExtendedCertificateOrCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedCertificateOrCertificate  ::=  CHOICE {
 *     certificate Certificate,
 *     extendedCertificate [0] IMPLICIT ExtendedCertificate }
 * ```
 */
export
type ExtendedCertificateOrCertificate =
    { certificate: Certificate } /* CHOICE_ALT_ROOT */
    | { extendedCertificate: ExtendedCertificate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedCertificateOrCertificate: $.ASN1Decoder<ExtendedCertificateOrCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificateOrCertificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedCertificateOrCertificate (el: _Element): ExtendedCertificateOrCertificate {
    if (!_cached_decoder_for_ExtendedCertificateOrCertificate) { _cached_decoder_for_ExtendedCertificateOrCertificate = $._decode_inextensible_choice<ExtendedCertificateOrCertificate>({
    "*": [ "certificate", _decode_Certificate ],
    "CONTEXT 0": [ "extendedCertificate", $._decode_implicit<ExtendedCertificate>(() => _decode_ExtendedCertificate) ]
}); }
    return _cached_decoder_for_ExtendedCertificateOrCertificate(el);
}

let _cached_encoder_for_ExtendedCertificateOrCertificate: $.ASN1Encoder<ExtendedCertificateOrCertificate> | null = null;

/**
 * @summary Encodes a(n) ExtendedCertificateOrCertificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificateOrCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedCertificateOrCertificate (value: ExtendedCertificateOrCertificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedCertificateOrCertificate) { _cached_encoder_for_ExtendedCertificateOrCertificate = $._encode_choice<ExtendedCertificateOrCertificate>({
    "certificate": _encode_Certificate,
    "extendedCertificate": $._encode_implicit(_TagClass.context, 0, () => _encode_ExtendedCertificate, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExtendedCertificateOrCertificate(value, elGetter);
}


/* eslint-enable */
