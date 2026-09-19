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
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../PKIX1Implicit88/GeneralNames.ta.mjs";


/**
 * @summary CertificateIssuer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateIssuer  ::=  GeneralNames
 * ```
 */
export
type CertificateIssuer = GeneralNames; // DefinedType

let _cached_decoder_for_CertificateIssuer: $.ASN1Decoder<CertificateIssuer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateIssuer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateIssuer (el: _Element): CertificateIssuer {
    if (!_cached_decoder_for_CertificateIssuer) { _cached_decoder_for_CertificateIssuer = _decode_GeneralNames; }
    return _cached_decoder_for_CertificateIssuer(el);
}

let _cached_encoder_for_CertificateIssuer: $.ASN1Encoder<CertificateIssuer> | null = null;

/**
 * @summary Encodes a(n) CertificateIssuer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateIssuer, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateIssuer (value: CertificateIssuer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateIssuer) { _cached_encoder_for_CertificateIssuer = _encode_GeneralNames; }
    return _cached_encoder_for_CertificateIssuer(value, elGetter);
}


/* eslint-enable */
