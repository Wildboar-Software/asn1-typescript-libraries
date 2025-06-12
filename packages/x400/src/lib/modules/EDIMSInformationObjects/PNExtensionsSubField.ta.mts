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
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PNExtensionsSubField */
/**
 * @summary PNExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type PNExtensionsSubField = ExtensionField; // DefinedType
/* END_OF_SYMBOL_DEFINITION PNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PNExtensionsSubField */
let _cached_decoder_for_PNExtensionsSubField: $.ASN1Decoder<PNExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _decode_PNExtensionsSubField */
/**
 * @summary Decodes an ASN.1 element into a(n) PNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PNExtensionsSubField} The decoded data structure.
 */
export function _decode_PNExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_PNExtensionsSubField) {
        _cached_decoder_for_PNExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_PNExtensionsSubField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PNExtensionsSubField */
let _cached_encoder_for_PNExtensionsSubField: $.ASN1Encoder<PNExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _encode_PNExtensionsSubField */
/**
 * @summary Encodes a(n) PNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PNExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_PNExtensionsSubField(
    value: PNExtensionsSubField,
    elGetter: $.ASN1Encoder<PNExtensionsSubField>
) {
    if (!_cached_encoder_for_PNExtensionsSubField) {
        _cached_encoder_for_PNExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_PNExtensionsSubField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PNExtensionsSubField */

/* eslint-enable */
