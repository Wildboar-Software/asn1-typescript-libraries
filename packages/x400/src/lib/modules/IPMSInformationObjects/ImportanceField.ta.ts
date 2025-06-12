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

/* START_OF_SYMBOL_DEFINITION _enum_for_ImportanceField */
/**
 * @summary ImportanceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImportanceField  ::=  ENUMERATED {low(0), normal(1), high(2)}
 * ```@enum {number}
 */
export enum _enum_for_ImportanceField {
    low = 0,
    normal = 1,
    high = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ImportanceField */

/* START_OF_SYMBOL_DEFINITION ImportanceField */
/**
 * @summary ImportanceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImportanceField  ::=  ENUMERATED {low(0), normal(1), high(2)}
 * ```@enum {number}
 */
export type ImportanceField = _enum_for_ImportanceField;
/* END_OF_SYMBOL_DEFINITION ImportanceField */

/* START_OF_SYMBOL_DEFINITION ImportanceField */
/**
 * @summary ImportanceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImportanceField  ::=  ENUMERATED {low(0), normal(1), high(2)}
 * ```@enum {number}
 */
export const ImportanceField = _enum_for_ImportanceField;
/* END_OF_SYMBOL_DEFINITION ImportanceField */

/* START_OF_SYMBOL_DEFINITION ImportanceField_low */
/**
 * @summary ImportanceField_low
 * @constant
 * @type {number}
 */
export const ImportanceField_low: ImportanceField =
    ImportanceField.low; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ImportanceField_low */

/* START_OF_SYMBOL_DEFINITION low */
/**
 * @summary low
 * @constant
 * @type {number}
 */
export const low: ImportanceField =
    ImportanceField.low; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION low */

/* START_OF_SYMBOL_DEFINITION ImportanceField_normal */
/**
 * @summary ImportanceField_normal
 * @constant
 * @type {number}
 */
export const ImportanceField_normal: ImportanceField =
    ImportanceField.normal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ImportanceField_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary normal
 * @constant
 * @type {number}
 */
export const normal: ImportanceField =
    ImportanceField.normal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION ImportanceField_high */
/**
 * @summary ImportanceField_high
 * @constant
 * @type {number}
 */
export const ImportanceField_high: ImportanceField =
    ImportanceField.high; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ImportanceField_high */

/* START_OF_SYMBOL_DEFINITION high */
/**
 * @summary high
 * @constant
 * @type {number}
 */
export const high: ImportanceField =
    ImportanceField.high; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION high */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ImportanceField */
let _cached_decoder_for_ImportanceField: $.ASN1Decoder<ImportanceField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ImportanceField */

/* START_OF_SYMBOL_DEFINITION _decode_ImportanceField */
/**
 * @summary Decodes an ASN.1 element into a(n) ImportanceField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImportanceField} The decoded data structure.
 */
export function _decode_ImportanceField(el: _Element) {
    if (!_cached_decoder_for_ImportanceField) {
        _cached_decoder_for_ImportanceField = $._decodeEnumerated;
    }
    return _cached_decoder_for_ImportanceField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ImportanceField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ImportanceField */
let _cached_encoder_for_ImportanceField: $.ASN1Encoder<ImportanceField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ImportanceField */

/* START_OF_SYMBOL_DEFINITION _encode_ImportanceField */
/**
 * @summary Encodes a(n) ImportanceField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImportanceField, encoded as an ASN.1 Element.
 */
export function _encode_ImportanceField(
    value: ImportanceField,
    elGetter: $.ASN1Encoder<ImportanceField>
) {
    if (!_cached_encoder_for_ImportanceField) {
        _cached_encoder_for_ImportanceField = $._encodeEnumerated;
    }
    return _cached_encoder_for_ImportanceField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ImportanceField */

/* eslint-enable */
