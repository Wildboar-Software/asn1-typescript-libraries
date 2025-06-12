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
    GeneralError_Item,
    _decode_GeneralError_Item,
    _encode_GeneralError_Item,
} from '../ASN1DefinedTypesModule/GeneralError-Item.ta.js';
export {
    GeneralError_Item,
    _decode_GeneralError_Item,
    _encode_GeneralError_Item,
} from '../ASN1DefinedTypesModule/GeneralError-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION GeneralError */
/**
 * @summary GeneralError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralError  ::=  SEQUENCE OF SEQUENCE {
 *     cause           GeneralErrorCause,
 *     details         GraphicString OPTIONAL,
 *     relatedObjects  [0]  SET OF ObjectInstance OPTIONAL,
 *     attributeList   [1]  AttributeList OPTIONAL }
 * ```
 */
export type GeneralError = GeneralError_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION GeneralError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralError */
let _cached_decoder_for_GeneralError: $.ASN1Decoder<GeneralError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralError */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralError */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralError} The decoded data structure.
 */
export function _decode_GeneralError(el: _Element) {
    if (!_cached_decoder_for_GeneralError) {
        _cached_decoder_for_GeneralError = $._decodeSequenceOf<GeneralError_Item>(
            () => _decode_GeneralError_Item
        );
    }
    return _cached_decoder_for_GeneralError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralError */
let _cached_encoder_for_GeneralError: $.ASN1Encoder<GeneralError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralError */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralError */
/**
 * @summary Encodes a(n) GeneralError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralError, encoded as an ASN.1 Element.
 */
export function _encode_GeneralError(
    value: GeneralError,
    elGetter: $.ASN1Encoder<GeneralError>
) {
    if (!_cached_encoder_for_GeneralError) {
        _cached_encoder_for_GeneralError = $._encodeSequenceOf<GeneralError_Item>(
            () => _encode_GeneralError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_GeneralError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralError */

/* eslint-enable */
