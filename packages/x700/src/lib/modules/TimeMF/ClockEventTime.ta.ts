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
import {
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../TimeMF/GlobalTime.ta.js';
export {
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../TimeMF/GlobalTime.ta.js';

/* START_OF_SYMBOL_DEFINITION ClockEventTime */
/**
 * @summary ClockEventTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockEventTime  ::=  GlobalTime
 * ```
 */
export type ClockEventTime = GlobalTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventTime */
let _cached_decoder_for_ClockEventTime: $.ASN1Decoder<ClockEventTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _decode_ClockEventTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockEventTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockEventTime} The decoded data structure.
 */
export function _decode_ClockEventTime(el: _Element) {
    if (!_cached_decoder_for_ClockEventTime) {
        _cached_decoder_for_ClockEventTime = _decode_GlobalTime;
    }
    return _cached_decoder_for_ClockEventTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventTime */
let _cached_encoder_for_ClockEventTime: $.ASN1Encoder<ClockEventTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockEventTime */

/* START_OF_SYMBOL_DEFINITION _encode_ClockEventTime */
/**
 * @summary Encodes a(n) ClockEventTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockEventTime, encoded as an ASN.1 Element.
 */
export function _encode_ClockEventTime(
    value: ClockEventTime,
    elGetter: $.ASN1Encoder<ClockEventTime>
) {
    if (!_cached_encoder_for_ClockEventTime) {
        _cached_encoder_for_ClockEventTime = _encode_GlobalTime;
    }
    return _cached_encoder_for_ClockEventTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockEventTime */

/* eslint-enable */
