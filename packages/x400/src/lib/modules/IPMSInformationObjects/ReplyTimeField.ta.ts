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
} from '../IPMSInformationObjects/Time.ta.js';
export {
    Time,
    _decode_Time,
    _encode_Time,
} from '../IPMSInformationObjects/Time.ta.js';

/* START_OF_SYMBOL_DEFINITION ReplyTimeField */
/**
 * @summary ReplyTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyTimeField  ::=  Time
 * ```
 */
export type ReplyTimeField = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReplyTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyTimeField */
let _cached_decoder_for_ReplyTimeField: $.ASN1Decoder<ReplyTimeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyTimeField */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyTimeField */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyTimeField} The decoded data structure.
 */
export function _decode_ReplyTimeField(el: _Element) {
    if (!_cached_decoder_for_ReplyTimeField) {
        _cached_decoder_for_ReplyTimeField = _decode_Time;
    }
    return _cached_decoder_for_ReplyTimeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyTimeField */
let _cached_encoder_for_ReplyTimeField: $.ASN1Encoder<ReplyTimeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyTimeField */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyTimeField */
/**
 * @summary Encodes a(n) ReplyTimeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyTimeField, encoded as an ASN.1 Element.
 */
export function _encode_ReplyTimeField(
    value: ReplyTimeField,
    elGetter: $.ASN1Encoder<ReplyTimeField>
) {
    if (!_cached_encoder_for_ReplyTimeField) {
        _cached_encoder_for_ReplyTimeField = _encode_Time;
    }
    return _cached_encoder_for_ReplyTimeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyTimeField */

/* eslint-enable */
