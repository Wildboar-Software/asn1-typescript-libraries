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
import { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
// export { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";


/**
 * @summary AttCertPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttCertPath  ::=  SEQUENCE OF AttributeCertificate
 * ```
 */
export
type AttCertPath = AttributeCertificate[]; // SequenceOfType

let _cached_decoder_for_AttCertPath: $.ASN1Decoder<AttCertPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttCertPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttCertPath (el: _Element): AttCertPath {
    if (!_cached_decoder_for_AttCertPath) { _cached_decoder_for_AttCertPath = $._decodeSequenceOf<AttributeCertificate>(() => _decode_AttributeCertificate); }
    return _cached_decoder_for_AttCertPath(el);
}

let _cached_encoder_for_AttCertPath: $.ASN1Encoder<AttCertPath> | null = null;

/**
 * @summary Encodes a(n) AttCertPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertPath, encoded as an ASN.1 Element.
 */
export
function _encode_AttCertPath (value: AttCertPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttCertPath) { _cached_encoder_for_AttCertPath = $._encodeSequenceOf<AttributeCertificate>(() => _encode_AttributeCertificate, $.BER); }
    return _cached_encoder_for_AttCertPath(value, elGetter);
}


/* eslint-enable */
