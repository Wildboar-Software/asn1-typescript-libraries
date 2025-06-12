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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.js';
export {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.js';

/* START_OF_SYMBOL_DEFINITION ClockMaximumError */
/**
 * @summary ClockMaximumError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockMaximumError  ::=  TimeInterval
 * ```
 */
export type ClockMaximumError = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClockMaximumError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockMaximumError */
let _cached_decoder_for_ClockMaximumError: $.ASN1Decoder<ClockMaximumError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockMaximumError */

/* START_OF_SYMBOL_DEFINITION _decode_ClockMaximumError */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockMaximumError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockMaximumError} The decoded data structure.
 */
export function _decode_ClockMaximumError(el: _Element) {
    if (!_cached_decoder_for_ClockMaximumError) {
        _cached_decoder_for_ClockMaximumError = _decode_TimeInterval;
    }
    return _cached_decoder_for_ClockMaximumError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockMaximumError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockMaximumError */
let _cached_encoder_for_ClockMaximumError: $.ASN1Encoder<ClockMaximumError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockMaximumError */

/* START_OF_SYMBOL_DEFINITION _encode_ClockMaximumError */
/**
 * @summary Encodes a(n) ClockMaximumError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockMaximumError, encoded as an ASN.1 Element.
 */
export function _encode_ClockMaximumError(
    value: ClockMaximumError,
    elGetter: $.ASN1Encoder<ClockMaximumError>
) {
    if (!_cached_encoder_for_ClockMaximumError) {
        _cached_encoder_for_ClockMaximumError = _encode_TimeInterval;
    }
    return _cached_encoder_for_ClockMaximumError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockMaximumError */

/* eslint-enable */
