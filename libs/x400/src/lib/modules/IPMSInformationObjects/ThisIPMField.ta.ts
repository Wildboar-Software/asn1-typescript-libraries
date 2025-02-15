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
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta';
export {
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION ThisIPMField */
/**
 * @summary ThisIPMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThisIPMField  ::=  IPMIdentifier
 * ```
 */
export type ThisIPMField = IPMIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ThisIPMField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThisIPMField */
let _cached_decoder_for_ThisIPMField: $.ASN1Decoder<ThisIPMField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThisIPMField */

/* START_OF_SYMBOL_DEFINITION _decode_ThisIPMField */
/**
 * @summary Decodes an ASN.1 element into a(n) ThisIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThisIPMField} The decoded data structure.
 */
export function _decode_ThisIPMField(el: _Element) {
    if (!_cached_decoder_for_ThisIPMField) {
        _cached_decoder_for_ThisIPMField = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_ThisIPMField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ThisIPMField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThisIPMField */
let _cached_encoder_for_ThisIPMField: $.ASN1Encoder<ThisIPMField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThisIPMField */

/* START_OF_SYMBOL_DEFINITION _encode_ThisIPMField */
/**
 * @summary Encodes a(n) ThisIPMField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThisIPMField, encoded as an ASN.1 Element.
 */
export function _encode_ThisIPMField(
    value: ThisIPMField,
    elGetter: $.ASN1Encoder<ThisIPMField>
) {
    if (!_cached_encoder_for_ThisIPMField) {
        _cached_encoder_for_ThisIPMField = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_ThisIPMField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ThisIPMField */

/* eslint-enable */
