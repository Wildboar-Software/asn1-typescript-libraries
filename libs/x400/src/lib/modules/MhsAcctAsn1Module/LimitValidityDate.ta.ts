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

/* START_OF_SYMBOL_DEFINITION LimitValidityDate */
/**
 * @summary LimitValidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitValidityDate  ::=  Time
 * ```
 */
export type LimitValidityDate = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION LimitValidityDate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitValidityDate */
let _cached_decoder_for_LimitValidityDate: $.ASN1Decoder<LimitValidityDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitValidityDate */

/* START_OF_SYMBOL_DEFINITION _decode_LimitValidityDate */
/**
 * @summary Decodes an ASN.1 element into a(n) LimitValidityDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LimitValidityDate} The decoded data structure.
 */
export function _decode_LimitValidityDate(el: _Element) {
    if (!_cached_decoder_for_LimitValidityDate) {
        _cached_decoder_for_LimitValidityDate = _decode_Time;
    }
    return _cached_decoder_for_LimitValidityDate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LimitValidityDate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitValidityDate */
let _cached_encoder_for_LimitValidityDate: $.ASN1Encoder<LimitValidityDate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitValidityDate */

/* START_OF_SYMBOL_DEFINITION _encode_LimitValidityDate */
/**
 * @summary Encodes a(n) LimitValidityDate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LimitValidityDate, encoded as an ASN.1 Element.
 */
export function _encode_LimitValidityDate(
    value: LimitValidityDate,
    elGetter: $.ASN1Encoder<LimitValidityDate>
) {
    if (!_cached_encoder_for_LimitValidityDate) {
        _cached_encoder_for_LimitValidityDate = _encode_Time;
    }
    return _cached_encoder_for_LimitValidityDate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LimitValidityDate */

/* eslint-enable */
