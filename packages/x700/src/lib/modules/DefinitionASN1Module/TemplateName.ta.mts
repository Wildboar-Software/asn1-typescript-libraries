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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION TemplateName */
/**
 * @summary TemplateName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TemplateName  ::=
 *   PrintableString
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" |
 *            "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" |
 *            "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" |
 *            "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" |
 *            "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" |
 *            "t" | "u" | "v" | "w" | "x" | "y" | "z" | "-" | "/"))
 * ```
 */
export type TemplateName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION TemplateName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TemplateName */
let _cached_decoder_for_TemplateName: $.ASN1Decoder<TemplateName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TemplateName */

/* START_OF_SYMBOL_DEFINITION _decode_TemplateName */
/**
 * @summary Decodes an ASN.1 element into a(n) TemplateName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TemplateName} The decoded data structure.
 */
export function _decode_TemplateName(el: _Element) {
    if (!_cached_decoder_for_TemplateName) {
        _cached_decoder_for_TemplateName = $._decodePrintableString;
    }
    return _cached_decoder_for_TemplateName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TemplateName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TemplateName */
let _cached_encoder_for_TemplateName: $.ASN1Encoder<TemplateName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TemplateName */

/* START_OF_SYMBOL_DEFINITION _encode_TemplateName */
/**
 * @summary Encodes a(n) TemplateName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateName, encoded as an ASN.1 Element.
 */
export function _encode_TemplateName(
    value: TemplateName,
    elGetter: $.ASN1Encoder<TemplateName>
) {
    if (!_cached_encoder_for_TemplateName) {
        _cached_encoder_for_TemplateName = $._encodePrintableString;
    }
    return _cached_encoder_for_TemplateName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TemplateName */

/* eslint-enable */
