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
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta';
export {
    Time,
    _decode_Time,
    _encode_Time,
} from '../MTSAbstractService/Time.ta';

/* START_OF_SYMBOL_DEFINITION OperationTime */
/**
 * @summary OperationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationTime  ::=  Time
 * ```
 */
export type OperationTime = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION OperationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationTime */
let _cached_decoder_for_OperationTime: $.ASN1Decoder<OperationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationTime */

/* START_OF_SYMBOL_DEFINITION _decode_OperationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationTime} The decoded data structure.
 */
export function _decode_OperationTime(el: _Element) {
    if (!_cached_decoder_for_OperationTime) {
        _cached_decoder_for_OperationTime = _decode_Time;
    }
    return _cached_decoder_for_OperationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationTime */
let _cached_encoder_for_OperationTime: $.ASN1Encoder<OperationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationTime */

/* START_OF_SYMBOL_DEFINITION _encode_OperationTime */
/**
 * @summary Encodes a(n) OperationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationTime, encoded as an ASN.1 Element.
 */
export function _encode_OperationTime(
    value: OperationTime,
    elGetter: $.ASN1Encoder<OperationTime>
) {
    if (!_cached_encoder_for_OperationTime) {
        _cached_encoder_for_OperationTime = _encode_Time;
    }
    return _cached_encoder_for_OperationTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationTime */

/* eslint-enable */
