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
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';
export {
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TemplateDefinition */
/**
 * @summary TemplateDefinition
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TemplateDefinition  ::=  TextualRepresentation
 * ```
 */
export type TemplateDefinition = TextualRepresentation; // DefinedType
/* END_OF_SYMBOL_DEFINITION TemplateDefinition */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TemplateDefinition */
let _cached_decoder_for_TemplateDefinition: $.ASN1Decoder<TemplateDefinition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TemplateDefinition */

/* START_OF_SYMBOL_DEFINITION _decode_TemplateDefinition */
/**
 * @summary Decodes an ASN.1 element into a(n) TemplateDefinition
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TemplateDefinition} The decoded data structure.
 */
export function _decode_TemplateDefinition(el: _Element) {
    if (!_cached_decoder_for_TemplateDefinition) {
        _cached_decoder_for_TemplateDefinition = _decode_TextualRepresentation;
    }
    return _cached_decoder_for_TemplateDefinition(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TemplateDefinition */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TemplateDefinition */
let _cached_encoder_for_TemplateDefinition: $.ASN1Encoder<TemplateDefinition> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TemplateDefinition */

/* START_OF_SYMBOL_DEFINITION _encode_TemplateDefinition */
/**
 * @summary Encodes a(n) TemplateDefinition into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateDefinition, encoded as an ASN.1 Element.
 */
export function _encode_TemplateDefinition(
    value: TemplateDefinition,
    elGetter: $.ASN1Encoder<TemplateDefinition>
) {
    if (!_cached_encoder_for_TemplateDefinition) {
        _cached_encoder_for_TemplateDefinition = _encode_TextualRepresentation;
    }
    return _cached_encoder_for_TemplateDefinition(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TemplateDefinition */

/* eslint-enable */
