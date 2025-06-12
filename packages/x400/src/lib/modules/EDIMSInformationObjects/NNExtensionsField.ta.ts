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
    NNExtensionsSubField,
    _decode_NNExtensionsSubField,
    _encode_NNExtensionsSubField,
} from '../EDIMSInformationObjects/NNExtensionsSubField.ta.js';
export {
    NNExtensionsSubField,
    _decode_NNExtensionsSubField,
    _encode_NNExtensionsSubField,
} from '../EDIMSInformationObjects/NNExtensionsSubField.ta.js';

/* START_OF_SYMBOL_DEFINITION NNExtensionsField */
/**
 * @summary NNExtensionsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNExtensionsField  ::=  SET OF NNExtensionsSubField
 * ```
 */
export type NNExtensionsField = NNExtensionsSubField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NNExtensionsField */
let _cached_decoder_for_NNExtensionsField: $.ASN1Decoder<NNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _decode_NNExtensionsField */
/**
 * @summary Decodes an ASN.1 element into a(n) NNExtensionsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NNExtensionsField} The decoded data structure.
 */
export function _decode_NNExtensionsField(el: _Element) {
    if (!_cached_decoder_for_NNExtensionsField) {
        _cached_decoder_for_NNExtensionsField = $._decodeSetOf<NNExtensionsSubField>(
            () => _decode_NNExtensionsSubField
        );
    }
    return _cached_decoder_for_NNExtensionsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NNExtensionsField */
let _cached_encoder_for_NNExtensionsField: $.ASN1Encoder<NNExtensionsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NNExtensionsField */

/* START_OF_SYMBOL_DEFINITION _encode_NNExtensionsField */
/**
 * @summary Encodes a(n) NNExtensionsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NNExtensionsField, encoded as an ASN.1 Element.
 */
export function _encode_NNExtensionsField(
    value: NNExtensionsField,
    elGetter: $.ASN1Encoder<NNExtensionsField>
) {
    if (!_cached_encoder_for_NNExtensionsField) {
        _cached_encoder_for_NNExtensionsField = $._encodeSetOf<NNExtensionsSubField>(
            () => _encode_NNExtensionsSubField,
            $.BER
        );
    }
    return _cached_encoder_for_NNExtensionsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NNExtensionsField */

/* eslint-enable */
