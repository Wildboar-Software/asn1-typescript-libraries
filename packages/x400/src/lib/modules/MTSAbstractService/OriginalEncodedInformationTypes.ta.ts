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
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.js';
export {
    EncodedInformationTypes,
    _decode_EncodedInformationTypes,
    _encode_EncodedInformationTypes,
} from '../MTSAbstractService/EncodedInformationTypes.ta.js';

/* START_OF_SYMBOL_DEFINITION OriginalEncodedInformationTypes */
/**
 * @summary OriginalEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalEncodedInformationTypes  ::=  EncodedInformationTypes
 * ```
 */
export type OriginalEncodedInformationTypes = EncodedInformationTypes; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginalEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalEncodedInformationTypes */
let _cached_decoder_for_OriginalEncodedInformationTypes: $.ASN1Decoder<OriginalEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginalEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_OriginalEncodedInformationTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginalEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalEncodedInformationTypes} The decoded data structure.
 */
export function _decode_OriginalEncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_OriginalEncodedInformationTypes) {
        _cached_decoder_for_OriginalEncodedInformationTypes = _decode_EncodedInformationTypes;
    }
    return _cached_decoder_for_OriginalEncodedInformationTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginalEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalEncodedInformationTypes */
let _cached_encoder_for_OriginalEncodedInformationTypes: $.ASN1Encoder<OriginalEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginalEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_OriginalEncodedInformationTypes */
/**
 * @summary Encodes a(n) OriginalEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_OriginalEncodedInformationTypes(
    value: OriginalEncodedInformationTypes,
    elGetter: $.ASN1Encoder<OriginalEncodedInformationTypes>
) {
    if (!_cached_encoder_for_OriginalEncodedInformationTypes) {
        _cached_encoder_for_OriginalEncodedInformationTypes = _encode_EncodedInformationTypes;
    }
    return _cached_encoder_for_OriginalEncodedInformationTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginalEncodedInformationTypes */

/* eslint-enable */
