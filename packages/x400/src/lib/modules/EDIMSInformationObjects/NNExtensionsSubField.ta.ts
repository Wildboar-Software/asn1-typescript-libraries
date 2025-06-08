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
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta';
export {
    ExtensionField,
    _decode_ExtensionField,
    _encode_ExtensionField,
} from '../EDIMSInformationObjects/ExtensionField.ta';

/* START_OF_SYMBOL_DEFINITION NNExtensionsSubField */
/**
 * @summary NNExtensionsSubField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNExtensionsSubField  ::=  ExtensionField
 * ```
 */
export type NNExtensionsSubField = ExtensionField; // DefinedType
/* END_OF_SYMBOL_DEFINITION NNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNExtensionsSubField */
let _cached_decoder_for_NNExtensionsSubField: $.ASN1Decoder<NNExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _decode_NNExtensionsSubField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNExtensionsSubField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNExtensionsSubField} The decoded data structure.
 */
export function _decode_NNExtensionsSubField(el: _Element) {
    if (!_cached_decoder_for_NNExtensionsSubField) {
        _cached_decoder_for_NNExtensionsSubField = _decode_ExtensionField;
    }
    return _cached_decoder_for_NNExtensionsSubField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNExtensionsSubField */
let _cached_encoder_for_NNExtensionsSubField: $.ASN1Encoder<NNExtensionsSubField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNExtensionsSubField */

/* START_OF_SYMBOL_DEFINITION _encode_NNExtensionsSubField */
/**
 * @summary Encodes a(n) NNExtensionsSubField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNExtensionsSubField, encoded as an ASN.1 Element.
 */
export function _encode_NNExtensionsSubField(
    value: NNExtensionsSubField,
    elGetter: $.ASN1Encoder<NNExtensionsSubField>
) {
    if (!_cached_encoder_for_NNExtensionsSubField) {
        _cached_encoder_for_NNExtensionsSubField = _encode_ExtensionField;
    }
    return _cached_encoder_for_NNExtensionsSubField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNExtensionsSubField */

/* eslint-enable */
