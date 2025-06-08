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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION Generic64BitCounter */
/**
 * @summary Generic64BitCounter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Generic64BitCounter  ::=  INTEGER(0..18446744073709551615)
 * ```
 */
export
type Generic64BitCounter = INTEGER;
/* END_OF_SYMBOL_DEFINITION Generic64BitCounter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Generic64BitCounter */
let _cached_decoder_for_Generic64BitCounter: $.ASN1Decoder<Generic64BitCounter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Generic64BitCounter */

/* START_OF_SYMBOL_DEFINITION _decode_Generic64BitCounter */
/**
 * @summary Decodes an ASN.1 element into a(n) Generic64BitCounter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Generic64BitCounter} The decoded data structure.
 */
export
function _decode_Generic64BitCounter (el: _Element) {
    if (!_cached_decoder_for_Generic64BitCounter) { _cached_decoder_for_Generic64BitCounter = $._decodeInteger; }
    return _cached_decoder_for_Generic64BitCounter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Generic64BitCounter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Generic64BitCounter */
let _cached_encoder_for_Generic64BitCounter: $.ASN1Encoder<Generic64BitCounter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Generic64BitCounter */

/* START_OF_SYMBOL_DEFINITION _encode_Generic64BitCounter */
/**
 * @summary Encodes a(n) Generic64BitCounter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Generic64BitCounter, encoded as an ASN.1 Element.
 */
export
function _encode_Generic64BitCounter (value: Generic64BitCounter, elGetter: $.ASN1Encoder<Generic64BitCounter>) {
    if (!_cached_encoder_for_Generic64BitCounter) { _cached_encoder_for_Generic64BitCounter = $._encodeInteger; }
    return _cached_encoder_for_Generic64BitCounter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Generic64BitCounter */

/* eslint-enable */
