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

/* START_OF_SYMBOL_DEFINITION ArcInterval */
/**
 * @summary ArcInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcInterval  ::=  INTEGER(0..5940)
 * ```
 */
export type ArcInterval = INTEGER;
/* END_OF_SYMBOL_DEFINITION ArcInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcInterval */
let _cached_decoder_for_ArcInterval: $.ASN1Decoder<ArcInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcInterval */

/* START_OF_SYMBOL_DEFINITION _decode_ArcInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcInterval} The decoded data structure.
 */
export function _decode_ArcInterval(el: _Element) {
    if (!_cached_decoder_for_ArcInterval) {
        _cached_decoder_for_ArcInterval = $._decodeInteger;
    }
    return _cached_decoder_for_ArcInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcInterval */
let _cached_encoder_for_ArcInterval: $.ASN1Encoder<ArcInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcInterval */

/* START_OF_SYMBOL_DEFINITION _encode_ArcInterval */
/**
 * @summary Encodes a(n) ArcInterval into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcInterval, encoded as an ASN.1 Element.
 */
export function _encode_ArcInterval(
    value: ArcInterval,
    elGetter: $.ASN1Encoder<ArcInterval>
) {
    if (!_cached_encoder_for_ArcInterval) {
        _cached_encoder_for_ArcInterval = $._encodeInteger;
    }
    return _cached_encoder_for_ArcInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcInterval */

/* eslint-enable */
