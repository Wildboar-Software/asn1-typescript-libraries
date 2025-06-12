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
    RelatedIPMsSubfield,
    _decode_RelatedIPMsSubfield,
    _encode_RelatedIPMsSubfield,
} from '../IPMSInformationObjects/RelatedIPMsSubfield.ta.js';
export {
    RelatedIPMsSubfield,
    _decode_RelatedIPMsSubfield,
    _encode_RelatedIPMsSubfield,
} from '../IPMSInformationObjects/RelatedIPMsSubfield.ta.js';

/* START_OF_SYMBOL_DEFINITION RelatedIPMsField */
/**
 * @summary RelatedIPMsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedIPMsField  ::=  SEQUENCE OF RelatedIPMsSubfield
 * ```
 */
export type RelatedIPMsField = RelatedIPMsSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RelatedIPMsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedIPMsField */
let _cached_decoder_for_RelatedIPMsField: $.ASN1Decoder<RelatedIPMsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedIPMsField */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedIPMsField */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedIPMsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedIPMsField} The decoded data structure.
 */
export function _decode_RelatedIPMsField(el: _Element) {
    if (!_cached_decoder_for_RelatedIPMsField) {
        _cached_decoder_for_RelatedIPMsField = $._decodeSequenceOf<RelatedIPMsSubfield>(
            () => _decode_RelatedIPMsSubfield
        );
    }
    return _cached_decoder_for_RelatedIPMsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedIPMsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedIPMsField */
let _cached_encoder_for_RelatedIPMsField: $.ASN1Encoder<RelatedIPMsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedIPMsField */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedIPMsField */
/**
 * @summary Encodes a(n) RelatedIPMsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedIPMsField, encoded as an ASN.1 Element.
 */
export function _encode_RelatedIPMsField(
    value: RelatedIPMsField,
    elGetter: $.ASN1Encoder<RelatedIPMsField>
) {
    if (!_cached_encoder_for_RelatedIPMsField) {
        _cached_encoder_for_RelatedIPMsField = $._encodeSequenceOf<RelatedIPMsSubfield>(
            () => _encode_RelatedIPMsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedIPMsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedIPMsField */

/* eslint-enable */
