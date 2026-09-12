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
 * @summary Implementation_data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Implementation-data  ::=  GraphicString
 * ```
 */
export
type Implementation_data = GraphicString; // GraphicString

let _cached_decoder_for_Implementation_data: $.ASN1Decoder<Implementation_data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Implementation_data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Implementation_data (el: _Element): Implementation_data {
    if (!_cached_decoder_for_Implementation_data) { _cached_decoder_for_Implementation_data = $._decodeGraphicString; }
    return _cached_decoder_for_Implementation_data(el);
}

let _cached_encoder_for_Implementation_data: $.ASN1Encoder<Implementation_data> | null = null;

/**
 * @summary Encodes a(n) Implementation_data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Implementation_data, encoded as an ASN.1 Element.
 */
export
function _encode_Implementation_data (value: Implementation_data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Implementation_data) { _cached_encoder_for_Implementation_data = $._encodeGraphicString; }
    return _cached_encoder_for_Implementation_data(value, elGetter);
}


/* eslint-enable */
