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

/* START_OF_SYMBOL_DEFINITION ConvertedEncodedInformationTypes */
/**
 * @summary ConvertedEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConvertedEncodedInformationTypes  ::=  EncodedInformationTypes
 * ```
 */
export type ConvertedEncodedInformationTypes = EncodedInformationTypes; // DefinedType
/* END_OF_SYMBOL_DEFINITION ConvertedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertedEncodedInformationTypes */
let _cached_decoder_for_ConvertedEncodedInformationTypes: $.ASN1Decoder<ConvertedEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConvertedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_ConvertedEncodedInformationTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) ConvertedEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConvertedEncodedInformationTypes} The decoded data structure.
 */
export function _decode_ConvertedEncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_ConvertedEncodedInformationTypes) {
        _cached_decoder_for_ConvertedEncodedInformationTypes = _decode_EncodedInformationTypes;
    }
    return _cached_decoder_for_ConvertedEncodedInformationTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConvertedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertedEncodedInformationTypes */
let _cached_encoder_for_ConvertedEncodedInformationTypes: $.ASN1Encoder<ConvertedEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConvertedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_ConvertedEncodedInformationTypes */
/**
 * @summary Encodes a(n) ConvertedEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConvertedEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_ConvertedEncodedInformationTypes(
    value: ConvertedEncodedInformationTypes,
    elGetter: $.ASN1Encoder<ConvertedEncodedInformationTypes>
) {
    if (!_cached_encoder_for_ConvertedEncodedInformationTypes) {
        _cached_encoder_for_ConvertedEncodedInformationTypes = _encode_EncodedInformationTypes;
    }
    return _cached_encoder_for_ConvertedEncodedInformationTypes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ConvertedEncodedInformationTypes */

/* eslint-enable */
