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

/* START_OF_SYMBOL_DEFINITION ReceiptTimeField */
/**
 * @summary ReceiptTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptTimeField  ::=  Time
 * ```
 */
export type ReceiptTimeField = Time; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReceiptTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReceiptTimeField */
let _cached_decoder_for_ReceiptTimeField: $.ASN1Decoder<ReceiptTimeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReceiptTimeField */

/* START_OF_SYMBOL_DEFINITION _decode_ReceiptTimeField */
/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptTimeField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptTimeField} The decoded data structure.
 */
export function _decode_ReceiptTimeField(el: _Element) {
    if (!_cached_decoder_for_ReceiptTimeField) {
        _cached_decoder_for_ReceiptTimeField = _decode_Time;
    }
    return _cached_decoder_for_ReceiptTimeField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReceiptTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReceiptTimeField */
let _cached_encoder_for_ReceiptTimeField: $.ASN1Encoder<ReceiptTimeField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReceiptTimeField */

/* START_OF_SYMBOL_DEFINITION _encode_ReceiptTimeField */
/**
 * @summary Encodes a(n) ReceiptTimeField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptTimeField, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptTimeField(
    value: ReceiptTimeField,
    elGetter: $.ASN1Encoder<ReceiptTimeField>
) {
    if (!_cached_encoder_for_ReceiptTimeField) {
        _cached_encoder_for_ReceiptTimeField = _encode_Time;
    }
    return _cached_encoder_for_ReceiptTimeField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReceiptTimeField */

/* eslint-enable */
