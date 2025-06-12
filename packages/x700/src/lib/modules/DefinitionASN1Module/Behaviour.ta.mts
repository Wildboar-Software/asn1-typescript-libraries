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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
export {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Behaviour */
/**
 * @summary Behaviour
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Behaviour  ::=  TemplateList
 * ```
 */
export type Behaviour = TemplateList; // DefinedType
/* END_OF_SYMBOL_DEFINITION Behaviour */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Behaviour */
let _cached_decoder_for_Behaviour: $.ASN1Decoder<Behaviour> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Behaviour */

/* START_OF_SYMBOL_DEFINITION _decode_Behaviour */
/**
 * @summary Decodes an ASN.1 element into a(n) Behaviour
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Behaviour} The decoded data structure.
 */
export function _decode_Behaviour(el: _Element) {
    if (!_cached_decoder_for_Behaviour) {
        _cached_decoder_for_Behaviour = _decode_TemplateList;
    }
    return _cached_decoder_for_Behaviour(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Behaviour */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Behaviour */
let _cached_encoder_for_Behaviour: $.ASN1Encoder<Behaviour> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Behaviour */

/* START_OF_SYMBOL_DEFINITION _encode_Behaviour */
/**
 * @summary Encodes a(n) Behaviour into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Behaviour, encoded as an ASN.1 Element.
 */
export function _encode_Behaviour(
    value: Behaviour,
    elGetter: $.ASN1Encoder<Behaviour>
) {
    if (!_cached_encoder_for_Behaviour) {
        _cached_encoder_for_Behaviour = _encode_TemplateList;
    }
    return _cached_encoder_for_Behaviour(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Behaviour */

/* eslint-enable */
