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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';
export {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta';

/* START_OF_SYMBOL_DEFINITION MappedRelationshipClass */
/**
 * @summary MappedRelationshipClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappedRelationshipClass  ::=  TemplateLabel
 * ```
 */
export type MappedRelationshipClass = TemplateLabel; // DefinedType
/* END_OF_SYMBOL_DEFINITION MappedRelationshipClass */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MappedRelationshipClass */
let _cached_decoder_for_MappedRelationshipClass: $.ASN1Decoder<MappedRelationshipClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MappedRelationshipClass */

/* START_OF_SYMBOL_DEFINITION _decode_MappedRelationshipClass */
/**
 * @summary Decodes an ASN.1 element into a(n) MappedRelationshipClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MappedRelationshipClass} The decoded data structure.
 */
export function _decode_MappedRelationshipClass(el: _Element) {
    if (!_cached_decoder_for_MappedRelationshipClass) {
        _cached_decoder_for_MappedRelationshipClass = _decode_TemplateLabel;
    }
    return _cached_decoder_for_MappedRelationshipClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MappedRelationshipClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MappedRelationshipClass */
let _cached_encoder_for_MappedRelationshipClass: $.ASN1Encoder<MappedRelationshipClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MappedRelationshipClass */

/* START_OF_SYMBOL_DEFINITION _encode_MappedRelationshipClass */
/**
 * @summary Encodes a(n) MappedRelationshipClass into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappedRelationshipClass, encoded as an ASN.1 Element.
 */
export function _encode_MappedRelationshipClass(
    value: MappedRelationshipClass,
    elGetter: $.ASN1Encoder<MappedRelationshipClass>
) {
    if (!_cached_encoder_for_MappedRelationshipClass) {
        _cached_encoder_for_MappedRelationshipClass = _encode_TemplateLabel;
    }
    return _cached_encoder_for_MappedRelationshipClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MappedRelationshipClass */

/* eslint-enable */
