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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION ClockEventCounter */
/**
 * @summary ClockEventCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventCounter  ::=  INTEGER(0..255)
 * ```
 */
export type ClockEventCounter = INTEGER;
/* END_OF_SYMBOL_DEFINITION ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventCounter */
let _cached_decoder_for_ClockEventCounter: $.ASN1Decoder<ClockEventCounter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _decode_ClockEventCounter */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockEventCounter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockEventCounter} The decoded data structure.
 */
export function _decode_ClockEventCounter(el: _Element) {
    if (!_cached_decoder_for_ClockEventCounter) {
        _cached_decoder_for_ClockEventCounter = $._decodeInteger;
    }
    return _cached_decoder_for_ClockEventCounter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventCounter */
let _cached_encoder_for_ClockEventCounter: $.ASN1Encoder<ClockEventCounter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventCounter */

/* START_OF_SYMBOL_DEFINITION _encode_ClockEventCounter */
/**
 * @summary Encodes a(n) ClockEventCounter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockEventCounter, encoded as an ASN.1 Element.
 */
export function _encode_ClockEventCounter(
    value: ClockEventCounter,
    elGetter: $.ASN1Encoder<ClockEventCounter>
) {
    if (!_cached_encoder_for_ClockEventCounter) {
        _cached_encoder_for_ClockEventCounter = $._encodeInteger;
    }
    return _cached_encoder_for_ClockEventCounter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockEventCounter */

/* eslint-enable */
