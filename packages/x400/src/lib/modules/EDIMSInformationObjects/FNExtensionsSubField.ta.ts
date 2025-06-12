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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.js';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.js';

/* START_OF_SYMBOL_DEFINITION FNExtensionsSubField */
/**
 * @summary FNExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type FNExtensionsSubField = ExtensionField; // DefinedType
/* END_OF_SYMBOL_DEFINITION FNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNExtensionsSubField */
let _cached_decoder_for_FNExtensionsSubField: $.ASN1Decoder<FNExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _decode_FNExtensionsSubField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNExtensionsSubField} The decoded data structure.
 */
export function _decode_FNExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_FNExtensionsSubField) {
        _cached_decoder_for_FNExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_FNExtensionsSubField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNExtensionsSubField */
let _cached_encoder_for_FNExtensionsSubField: $.ASN1Encoder<FNExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _encode_FNExtensionsSubField */
/**
 * @summary Encodes a(n) FNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_FNExtensionsSubField(
    value: FNExtensionsSubField,
    elGetter: $.ASN1Encoder<FNExtensionsSubField>
) {
    if (!_cached_encoder_for_FNExtensionsSubField) {
        _cached_encoder_for_FNExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_FNExtensionsSubField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNExtensionsSubField */

/* eslint-enable */
