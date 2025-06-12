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

/* START_OF_SYMBOL_DEFINITION Seconds */
/**
 * @summary Seconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Seconds  ::=  INTEGER(0..4294967295)
 * ```
 */
export type Seconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION Seconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Seconds */
let _cached_decoder_for_Seconds: $.ASN1Decoder<Seconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Seconds */

/* START_OF_SYMBOL_DEFINITION _decode_Seconds */
/**
 * @summary Decodes an ASN.1 element into a(n) Seconds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Seconds} The decoded data structure.
 */
export function _decode_Seconds(el: _Element) {
    if (!_cached_decoder_for_Seconds) {
        _cached_decoder_for_Seconds = $._decodeInteger;
    }
    return _cached_decoder_for_Seconds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Seconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Seconds */
let _cached_encoder_for_Seconds: $.ASN1Encoder<Seconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Seconds */

/* START_OF_SYMBOL_DEFINITION _encode_Seconds */
/**
 * @summary Encodes a(n) Seconds into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Seconds, encoded as an ASN.1 Element.
 */
export function _encode_Seconds(
    value: Seconds,
    elGetter: $.ASN1Encoder<Seconds>
) {
    if (!_cached_encoder_for_Seconds) {
        _cached_encoder_for_Seconds = $._encodeInteger;
    }
    return _cached_encoder_for_Seconds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Seconds */

/* eslint-enable */
