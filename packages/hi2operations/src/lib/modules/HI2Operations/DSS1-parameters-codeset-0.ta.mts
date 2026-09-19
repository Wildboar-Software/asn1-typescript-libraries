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



/**
 * @summary DSS1_parameters_codeset_0
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-parameters-codeset-0  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_parameters_codeset_0 = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_parameters_codeset_0: $.ASN1Decoder<DSS1_parameters_codeset_0> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_parameters_codeset_0
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_parameters_codeset_0 (el: _Element): DSS1_parameters_codeset_0 {
    if (!_cached_decoder_for_DSS1_parameters_codeset_0) { _cached_decoder_for_DSS1_parameters_codeset_0 = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_DSS1_parameters_codeset_0(el);
}

let _cached_encoder_for_DSS1_parameters_codeset_0: $.ASN1Encoder<DSS1_parameters_codeset_0> | null = null;

/**
 * @summary Encodes a(n) DSS1_parameters_codeset_0 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_parameters_codeset_0, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_parameters_codeset_0 (value: DSS1_parameters_codeset_0, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_parameters_codeset_0) { _cached_encoder_for_DSS1_parameters_codeset_0 = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_parameters_codeset_0(value, elGetter);
}


/* eslint-enable */
