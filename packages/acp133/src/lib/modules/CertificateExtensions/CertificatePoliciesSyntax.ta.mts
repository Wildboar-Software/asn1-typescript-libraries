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
import { PolicyInformation, _decode_PolicyInformation, _encode_PolicyInformation } from "../CertificateExtensions/PolicyInformation.ta.mjs";
// export { PolicyInformation, _decode_PolicyInformation, _encode_PolicyInformation } from "../CertificateExtensions/PolicyInformation.ta.mjs";


/**
 * @summary CertificatePoliciesSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificatePoliciesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF PolicyInformation
 * ```
 */
export
type CertificatePoliciesSyntax = PolicyInformation[]; // SequenceOfType

let _cached_decoder_for_CertificatePoliciesSyntax: $.ASN1Decoder<CertificatePoliciesSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePoliciesSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificatePoliciesSyntax (el: _Element): CertificatePoliciesSyntax {
    if (!_cached_decoder_for_CertificatePoliciesSyntax) { _cached_decoder_for_CertificatePoliciesSyntax = $._decodeSequenceOf<PolicyInformation>(() => _decode_PolicyInformation); }
    return _cached_decoder_for_CertificatePoliciesSyntax(el);
}

let _cached_encoder_for_CertificatePoliciesSyntax: $.ASN1Encoder<CertificatePoliciesSyntax> | null = null;

/**
 * @summary Encodes a(n) CertificatePoliciesSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePoliciesSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_CertificatePoliciesSyntax (value: CertificatePoliciesSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificatePoliciesSyntax) { _cached_encoder_for_CertificatePoliciesSyntax = $._encodeSequenceOf<PolicyInformation>(() => _encode_PolicyInformation, $.BER); }
    return _cached_encoder_for_CertificatePoliciesSyntax(value, elGetter);
}


/* eslint-enable */
