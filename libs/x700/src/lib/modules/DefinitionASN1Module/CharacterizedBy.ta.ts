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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta';

/* START_OF_SYMBOL_DEFINITION CharacterizedBy */
/**
 * @summary CharacterizedBy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterizedBy  ::=  TemplateList
 * ```
 */
export type CharacterizedBy = TemplateList; // DefinedType
/* END_OF_SYMBOL_DEFINITION CharacterizedBy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterizedBy */
let _cached_decoder_for_CharacterizedBy: $.ASN1Decoder<CharacterizedBy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterizedBy */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterizedBy */
/**
 * @summary Decodes an ASN.1 element into a(n) CharacterizedBy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterizedBy} The decoded data structure.
 */
export function _decode_CharacterizedBy(el: _Element) {
    if (!_cached_decoder_for_CharacterizedBy) {
        _cached_decoder_for_CharacterizedBy = _decode_TemplateList;
    }
    return _cached_decoder_for_CharacterizedBy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CharacterizedBy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterizedBy */
let _cached_encoder_for_CharacterizedBy: $.ASN1Encoder<CharacterizedBy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterizedBy */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterizedBy */
/**
 * @summary Encodes a(n) CharacterizedBy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterizedBy, encoded as an ASN.1 Element.
 */
export function _encode_CharacterizedBy(
    value: CharacterizedBy,
    elGetter: $.ASN1Encoder<CharacterizedBy>
) {
    if (!_cached_encoder_for_CharacterizedBy) {
        _cached_encoder_for_CharacterizedBy = _encode_TemplateList;
    }
    return _cached_encoder_for_CharacterizedBy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CharacterizedBy */

/* eslint-enable */
