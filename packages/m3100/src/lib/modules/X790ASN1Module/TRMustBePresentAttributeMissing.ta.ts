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
    AttributeIDList,
    _decode_AttributeIDList,
    _encode_AttributeIDList,
} from '../X790ASN1Module/AttributeIDList.ta';
export {
    AttributeIDList,
    _decode_AttributeIDList,
    _encode_AttributeIDList,
} from '../X790ASN1Module/AttributeIDList.ta';

/* START_OF_SYMBOL_DEFINITION TRMustBePresentAttributeMissing */
/**
 * @summary TRMustBePresentAttributeMissing
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TRMustBePresentAttributeMissing  ::=  AttributeIDList
 * ```
 */
export type TRMustBePresentAttributeMissing = AttributeIDList; // DefinedType
/* END_OF_SYMBOL_DEFINITION TRMustBePresentAttributeMissing */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TRMustBePresentAttributeMissing */
let _cached_decoder_for_TRMustBePresentAttributeMissing: $.ASN1Decoder<TRMustBePresentAttributeMissing> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TRMustBePresentAttributeMissing */

/* START_OF_SYMBOL_DEFINITION _decode_TRMustBePresentAttributeMissing */
/**
 * @summary Decodes an ASN.1 element into a(n) TRMustBePresentAttributeMissing
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TRMustBePresentAttributeMissing} The decoded data structure.
 */
export function _decode_TRMustBePresentAttributeMissing(el: _Element) {
    if (!_cached_decoder_for_TRMustBePresentAttributeMissing) {
        _cached_decoder_for_TRMustBePresentAttributeMissing = _decode_AttributeIDList;
    }
    return _cached_decoder_for_TRMustBePresentAttributeMissing(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TRMustBePresentAttributeMissing */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TRMustBePresentAttributeMissing */
let _cached_encoder_for_TRMustBePresentAttributeMissing: $.ASN1Encoder<TRMustBePresentAttributeMissing> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TRMustBePresentAttributeMissing */

/* START_OF_SYMBOL_DEFINITION _encode_TRMustBePresentAttributeMissing */
/**
 * @summary Encodes a(n) TRMustBePresentAttributeMissing into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TRMustBePresentAttributeMissing, encoded as an ASN.1 Element.
 */
export function _encode_TRMustBePresentAttributeMissing(
    value: TRMustBePresentAttributeMissing,
    elGetter: $.ASN1Encoder<TRMustBePresentAttributeMissing>
) {
    if (!_cached_encoder_for_TRMustBePresentAttributeMissing) {
        _cached_encoder_for_TRMustBePresentAttributeMissing = _encode_AttributeIDList;
    }
    return _cached_encoder_for_TRMustBePresentAttributeMissing(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TRMustBePresentAttributeMissing */

/* eslint-enable */
