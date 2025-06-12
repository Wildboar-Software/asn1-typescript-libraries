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
    Context_keyword,
    _decode_Context_keyword,
    _encode_Context_keyword,
} from '../DefinitionASN1Module/Context-keyword.ta.mjs';
export {
    Context_keyword,
    _decode_Context_keyword,
    _encode_Context_keyword,
} from '../DefinitionASN1Module/Context-keyword.ta.mjs';
import {
    Context_representation,
    _enum_for_Context_representation,
    Context_representation_aCTION_INFO /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aCTION_INFO /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_aCTION_REPLY /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aCTION_REPLY /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_eVENT_INFO /* IMPORTED_LONG_ENUMERATION_ITEM */,
    eVENT_INFO /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_eVENT_REPLY /* IMPORTED_LONG_ENUMERATION_ITEM */,
    eVENT_REPLY /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_sPECIFIC_ERROR /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sPECIFIC_ERROR /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Context_representation,
    _encode_Context_representation,
} from '../DefinitionASN1Module/Context-representation.ta.mjs';
export {
    Context_representation,
    _enum_for_Context_representation,
    Context_representation_aCTION_INFO /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aCTION_INFO /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_aCTION_REPLY /* IMPORTED_LONG_ENUMERATION_ITEM */,
    aCTION_REPLY /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_eVENT_INFO /* IMPORTED_LONG_ENUMERATION_ITEM */,
    eVENT_INFO /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_eVENT_REPLY /* IMPORTED_LONG_ENUMERATION_ITEM */,
    eVENT_REPLY /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    Context_representation_sPECIFIC_ERROR /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sPECIFIC_ERROR /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Context_representation,
    _encode_Context_representation,
} from '../DefinitionASN1Module/Context-representation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Context */
/**
 * @summary Context
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context  ::=  CHOICE {
 *   keyword
 *     SEQUENCE {type-reference  DefinedType,
 *               field           Identifier},
 *   representation
 *     ENUMERATED {aCTION-INFO(0), aCTION-REPLY(1), eVENT-INFO(2), eVENT-REPLY(3),
 *                 sPECIFIC-ERROR(4)}
 * }
 * ```
 */
export type Context =
    | { keyword: Context_keyword } /* CHOICE_ALT_ROOT */
    | { representation: Context_representation } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Context */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Context */
let _cached_decoder_for_Context: $.ASN1Decoder<Context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Context */

/* START_OF_SYMBOL_DEFINITION _decode_Context */
/**
 * @summary Decodes an ASN.1 element into a(n) Context
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context} The decoded data structure.
 */
export function _decode_Context(el: _Element) {
    if (!_cached_decoder_for_Context) {
        _cached_decoder_for_Context = $._decode_inextensible_choice<Context>({
            'UNIVERSAL 16': ['keyword', _decode_Context_keyword],
            'UNIVERSAL 10': ['representation', _decode_Context_representation],
        });
    }
    return _cached_decoder_for_Context(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Context */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Context */
let _cached_encoder_for_Context: $.ASN1Encoder<Context> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Context */

/* START_OF_SYMBOL_DEFINITION _encode_Context */
/**
 * @summary Encodes a(n) Context into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context, encoded as an ASN.1 Element.
 */
export function _encode_Context(
    value: Context,
    elGetter: $.ASN1Encoder<Context>
) {
    if (!_cached_encoder_for_Context) {
        _cached_encoder_for_Context = $._encode_choice<Context>(
            {
                keyword: _encode_Context_keyword,
                representation: _encode_Context_representation,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Context(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Context */

/* eslint-enable */
