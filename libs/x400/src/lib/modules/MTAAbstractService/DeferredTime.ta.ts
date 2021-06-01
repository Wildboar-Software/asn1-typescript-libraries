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

/* START_OF_SYMBOL_DEFINITION DeferredTime */
/**
 * @summary DeferredTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredTime  ::=  Time
 * ```
 */
export type DeferredTime = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeferredTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredTime */
let _cached_decoder_for_DeferredTime: $.ASN1Decoder<DeferredTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredTime */

/* START_OF_SYMBOL_DEFINITION _decode_DeferredTime */
/**
 * @summary Decodes an ASN.1 element into a(n) DeferredTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeferredTime} The decoded data structure.
 */
export function _decode_DeferredTime(el: _Element) {
    if (!_cached_decoder_for_DeferredTime) {
        _cached_decoder_for_DeferredTime = _decode_Time;
    }
    return _cached_decoder_for_DeferredTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeferredTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredTime */
let _cached_encoder_for_DeferredTime: $.ASN1Encoder<DeferredTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredTime */

/* START_OF_SYMBOL_DEFINITION _encode_DeferredTime */
/**
 * @summary Encodes a(n) DeferredTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeferredTime, encoded as an ASN.1 Element.
 */
export function _encode_DeferredTime(
    value: DeferredTime,
    elGetter: $.ASN1Encoder<DeferredTime>
) {
    if (!_cached_encoder_for_DeferredTime) {
        _cached_encoder_for_DeferredTime = _encode_Time;
    }
    return _cached_encoder_for_DeferredTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeferredTime */

/* eslint-enable */
