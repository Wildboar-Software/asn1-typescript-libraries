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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';
export {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta';

/* START_OF_SYMBOL_DEFINITION ConversionEITsField */
/**
 * @summary ConversionEITsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConversionEITsField  ::=  EncodedInformationTypes
 * ```
 */
export type ConversionEITsField = EncodedInformationTypes; // DefinedType
/* END_OF_SYMBOL_DEFINITION ConversionEITsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionEITsField */
let _cached_decoder_for_ConversionEITsField: $.ASN1Decoder<ConversionEITsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConversionEITsField */

/* START_OF_SYMBOL_DEFINITION _decode_ConversionEITsField */
/**
 * @summary Decodes an ASN.1 element into a(n) ConversionEITsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConversionEITsField} The decoded data structure.
 */
export function _decode_ConversionEITsField(el: _Element) {
    if (!_cached_decoder_for_ConversionEITsField) {
        _cached_decoder_for_ConversionEITsField = _decode_EncodedInformationTypes;
    }
    return _cached_decoder_for_ConversionEITsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConversionEITsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionEITsField */
let _cached_encoder_for_ConversionEITsField: $.ASN1Encoder<ConversionEITsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConversionEITsField */

/* START_OF_SYMBOL_DEFINITION _encode_ConversionEITsField */
/**
 * @summary Encodes a(n) ConversionEITsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConversionEITsField, encoded as an ASN.1 Element.
 */
export function _encode_ConversionEITsField(
    value: ConversionEITsField,
    elGetter: $.ASN1Encoder<ConversionEITsField>
) {
    if (!_cached_encoder_for_ConversionEITsField) {
        _cached_encoder_for_ConversionEITsField = _encode_EncodedInformationTypes;
    }
    return _cached_encoder_for_ConversionEITsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConversionEITsField */

/* eslint-enable */
