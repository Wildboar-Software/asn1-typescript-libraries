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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta';
export {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta';

/* START_OF_SYMBOL_DEFINITION OriginatorField */
/**
 * @summary OriginatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorField  ::=  ORDescriptor
 * ```
 */
export type OriginatorField = ORDescriptor; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorField */
let _cached_decoder_for_OriginatorField: $.ASN1Decoder<OriginatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorField */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorField */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorField} The decoded data structure.
 */
export function _decode_OriginatorField(el: _Element) {
    if (!_cached_decoder_for_OriginatorField) {
        _cached_decoder_for_OriginatorField = _decode_ORDescriptor;
    }
    return _cached_decoder_for_OriginatorField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorField */
let _cached_encoder_for_OriginatorField: $.ASN1Encoder<OriginatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorField */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorField */
/**
 * @summary Encodes a(n) OriginatorField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorField, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorField(
    value: OriginatorField,
    elGetter: $.ASN1Encoder<OriginatorField>
) {
    if (!_cached_encoder_for_OriginatorField) {
        _cached_encoder_for_OriginatorField = _encode_ORDescriptor;
    }
    return _cached_encoder_for_OriginatorField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorField */

/* eslint-enable */
