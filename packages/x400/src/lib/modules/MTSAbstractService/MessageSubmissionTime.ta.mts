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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';
export {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MessageSubmissionTime */
/**
 * @summary MessageSubmissionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionTime  ::=  Time
 * ```
 */
export type MessageSubmissionTime = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionTime */
let _cached_decoder_for_MessageSubmissionTime: $.ASN1Decoder<MessageSubmissionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSubmissionTime */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionTime} The decoded data structure.
 */
export function _decode_MessageSubmissionTime(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionTime) {
        _cached_decoder_for_MessageSubmissionTime = _decode_Time;
    }
    return _cached_decoder_for_MessageSubmissionTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionTime */
let _cached_encoder_for_MessageSubmissionTime: $.ASN1Encoder<MessageSubmissionTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionTime */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSubmissionTime */
/**
 * @summary Encodes a(n) MessageSubmissionTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionTime, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionTime(
    value: MessageSubmissionTime,
    elGetter: $.ASN1Encoder<MessageSubmissionTime>
) {
    if (!_cached_encoder_for_MessageSubmissionTime) {
        _cached_encoder_for_MessageSubmissionTime = _encode_Time;
    }
    return _cached_encoder_for_MessageSubmissionTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSubmissionTime */

/* eslint-enable */
