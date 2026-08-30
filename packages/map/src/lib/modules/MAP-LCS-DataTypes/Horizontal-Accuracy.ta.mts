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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Horizontal_Accuracy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Horizontal-Accuracy  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type Horizontal_Accuracy = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Horizontal_Accuracy: $.ASN1Decoder<Horizontal_Accuracy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Horizontal_Accuracy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Horizontal_Accuracy (el: _Element): Horizontal_Accuracy {
    if (!_cached_decoder_for_Horizontal_Accuracy) { _cached_decoder_for_Horizontal_Accuracy = $._decodeOctetString; }
    return _cached_decoder_for_Horizontal_Accuracy(el);
}

let _cached_encoder_for_Horizontal_Accuracy: $.ASN1Encoder<Horizontal_Accuracy> | null = null;

/**
 * @summary Encodes a(n) Horizontal_Accuracy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Horizontal_Accuracy, encoded as an ASN.1 Element.
 */
export
function _encode_Horizontal_Accuracy (value: Horizontal_Accuracy, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Horizontal_Accuracy) { _cached_encoder_for_Horizontal_Accuracy = $._encodeOctetString; }
    return _cached_encoder_for_Horizontal_Accuracy(value, elGetter);
}


/* eslint-enable */
