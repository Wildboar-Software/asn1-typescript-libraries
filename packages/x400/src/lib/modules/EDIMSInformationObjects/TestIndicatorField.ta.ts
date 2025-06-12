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

/* START_OF_SYMBOL_DEFINITION TestIndicatorField */
/**
 * @summary TestIndicatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestIndicatorField  ::=  BOOLEAN
 * ```
 */
export type TestIndicatorField = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestIndicatorField */
let _cached_decoder_for_TestIndicatorField: $.ASN1Decoder<TestIndicatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _decode_TestIndicatorField */
/**
 * @summary Decodes an ASN.1 element into a(n) TestIndicatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestIndicatorField} The decoded data structure.
 */
export function _decode_TestIndicatorField(el: _Element) {
    if (!_cached_decoder_for_TestIndicatorField) {
        _cached_decoder_for_TestIndicatorField = $._decodeBoolean;
    }
    return _cached_decoder_for_TestIndicatorField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestIndicatorField */
let _cached_encoder_for_TestIndicatorField: $.ASN1Encoder<TestIndicatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestIndicatorField */

/* START_OF_SYMBOL_DEFINITION _encode_TestIndicatorField */
/**
 * @summary Encodes a(n) TestIndicatorField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestIndicatorField, encoded as an ASN.1 Element.
 */
export function _encode_TestIndicatorField(
    value: TestIndicatorField,
    elGetter: $.ASN1Encoder<TestIndicatorField>
) {
    if (!_cached_encoder_for_TestIndicatorField) {
        _cached_encoder_for_TestIndicatorField = $._encodeBoolean;
    }
    return _cached_encoder_for_TestIndicatorField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestIndicatorField */

/* eslint-enable */
