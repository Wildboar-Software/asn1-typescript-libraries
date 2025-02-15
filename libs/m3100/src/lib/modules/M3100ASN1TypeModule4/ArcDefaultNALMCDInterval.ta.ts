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
import {
    ArcTime,
    _decode_ArcTime,
    _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta';
export {
    ArcTime,
    _decode_ArcTime,
    _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta';

/* START_OF_SYMBOL_DEFINITION ArcDefaultNALMCDInterval */
/**
 * @summary ArcDefaultNALMCDInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcDefaultNALMCDInterval  ::=  ArcTime
 * ```
 */
export type ArcDefaultNALMCDInterval = ArcTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION ArcDefaultNALMCDInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcDefaultNALMCDInterval */
let _cached_decoder_for_ArcDefaultNALMCDInterval: $.ASN1Decoder<ArcDefaultNALMCDInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArcDefaultNALMCDInterval */

/* START_OF_SYMBOL_DEFINITION _decode_ArcDefaultNALMCDInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) ArcDefaultNALMCDInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcDefaultNALMCDInterval} The decoded data structure.
 */
export function _decode_ArcDefaultNALMCDInterval(el: _Element) {
    if (!_cached_decoder_for_ArcDefaultNALMCDInterval) {
        _cached_decoder_for_ArcDefaultNALMCDInterval = _decode_ArcTime;
    }
    return _cached_decoder_for_ArcDefaultNALMCDInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ArcDefaultNALMCDInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcDefaultNALMCDInterval */
let _cached_encoder_for_ArcDefaultNALMCDInterval: $.ASN1Encoder<ArcDefaultNALMCDInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArcDefaultNALMCDInterval */

/* START_OF_SYMBOL_DEFINITION _encode_ArcDefaultNALMCDInterval */
/**
 * @summary Encodes a(n) ArcDefaultNALMCDInterval into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcDefaultNALMCDInterval, encoded as an ASN.1 Element.
 */
export function _encode_ArcDefaultNALMCDInterval(
    value: ArcDefaultNALMCDInterval,
    elGetter: $.ASN1Encoder<ArcDefaultNALMCDInterval>
) {
    if (!_cached_encoder_for_ArcDefaultNALMCDInterval) {
        _cached_encoder_for_ArcDefaultNALMCDInterval = _encode_ArcTime;
    }
    return _cached_encoder_for_ArcDefaultNALMCDInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ArcDefaultNALMCDInterval */

/* eslint-enable */
