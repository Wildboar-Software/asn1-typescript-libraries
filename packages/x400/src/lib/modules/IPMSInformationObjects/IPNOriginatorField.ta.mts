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
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';
export {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from '../IPMSInformationObjects/ORDescriptor.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IPNOriginatorField */
/**
 * @summary IPNOriginatorField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPNOriginatorField  ::=  ORDescriptor
 * ```
 */
export type IPNOriginatorField = ORDescriptor; // DefinedType
/* END_OF_SYMBOL_DEFINITION IPNOriginatorField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPNOriginatorField */
let _cached_decoder_for_IPNOriginatorField: $.ASN1Decoder<IPNOriginatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPNOriginatorField */

/* START_OF_SYMBOL_DEFINITION _decode_IPNOriginatorField */
/**
 * @summary Decodes an ASN.1 element into a(n) IPNOriginatorField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPNOriginatorField} The decoded data structure.
 */
export function _decode_IPNOriginatorField(el: _Element) {
    if (!_cached_decoder_for_IPNOriginatorField) {
        _cached_decoder_for_IPNOriginatorField = _decode_ORDescriptor;
    }
    return _cached_decoder_for_IPNOriginatorField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPNOriginatorField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPNOriginatorField */
let _cached_encoder_for_IPNOriginatorField: $.ASN1Encoder<IPNOriginatorField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPNOriginatorField */

/* START_OF_SYMBOL_DEFINITION _encode_IPNOriginatorField */
/**
 * @summary Encodes a(n) IPNOriginatorField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPNOriginatorField, encoded as an ASN.1 Element.
 */
export function _encode_IPNOriginatorField(
    value: IPNOriginatorField,
    elGetter: $.ASN1Encoder<IPNOriginatorField>
) {
    if (!_cached_encoder_for_IPNOriginatorField) {
        _cached_encoder_for_IPNOriginatorField = _encode_ORDescriptor;
    }
    return _cached_encoder_for_IPNOriginatorField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPNOriginatorField */

/* eslint-enable */
