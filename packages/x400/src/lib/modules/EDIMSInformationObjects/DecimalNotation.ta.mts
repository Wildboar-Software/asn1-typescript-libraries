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

/* START_OF_SYMBOL_DEFINITION DecimalNotation */
/**
 * @summary DecimalNotation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DecimalNotation  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type DecimalNotation = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DecimalNotation */
let _cached_decoder_for_DecimalNotation: $.ASN1Decoder<DecimalNotation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _decode_DecimalNotation */
/**
 * @summary Decodes an ASN.1 element into a(n) DecimalNotation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DecimalNotation} The decoded data structure.
 */
export function _decode_DecimalNotation(el: _Element) {
    if (!_cached_decoder_for_DecimalNotation) {
        _cached_decoder_for_DecimalNotation = $._decodeOctetString;
    }
    return _cached_decoder_for_DecimalNotation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DecimalNotation */
let _cached_encoder_for_DecimalNotation: $.ASN1Encoder<DecimalNotation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DecimalNotation */

/* START_OF_SYMBOL_DEFINITION _encode_DecimalNotation */
/**
 * @summary Encodes a(n) DecimalNotation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DecimalNotation, encoded as an ASN.1 Element.
 */
export function _encode_DecimalNotation(
    value: DecimalNotation,
    elGetter: $.ASN1Encoder<DecimalNotation>
) {
    if (!_cached_encoder_for_DecimalNotation) {
        _cached_encoder_for_DecimalNotation = $._encodeOctetString;
    }
    return _cached_encoder_for_DecimalNotation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DecimalNotation */

/* eslint-enable */
