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
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";
import { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
export { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';

/* START_OF_SYMBOL_DEFINITION FilterItem_substrings_strings_Item */
/**
 * @summary FilterItem_substrings_strings_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem-substrings-strings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FilterItem_substrings_strings_Item =
    | { initial: _Element } /* CHOICE_ALT_ROOT */
    | { any_: _Element } /* CHOICE_ALT_ROOT */
    | { final: _Element } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_substrings_strings_Item */
let _cached_decoder_for_FilterItem_substrings_strings_Item: $.ASN1Decoder<FilterItem_substrings_strings_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem_substrings_strings_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem_substrings_strings_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem_substrings_strings_Item} The decoded data structure.
 */
export function _decode_FilterItem_substrings_strings_Item(el: _Element) {
    if (!_cached_decoder_for_FilterItem_substrings_strings_Item) {
        _cached_decoder_for_FilterItem_substrings_strings_Item = $._decode_inextensible_choice<FilterItem_substrings_strings_Item>(
            {
                'CONTEXT 0': [
                    'initial',
                    $._decode_implicit<_Element>(() => $._decodeAny),
                ],
                'CONTEXT 1': [
                    'any_',
                    $._decode_implicit<_Element>(() => $._decodeAny),
                ],
                'CONTEXT 2': [
                    'final',
                    $._decode_implicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_FilterItem_substrings_strings_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_substrings_strings_Item */
let _cached_encoder_for_FilterItem_substrings_strings_Item: $.ASN1Encoder<FilterItem_substrings_strings_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem_substrings_strings_Item */
/**
 * @summary Encodes a(n) FilterItem_substrings_strings_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem_substrings_strings_Item, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem_substrings_strings_Item(
    value: FilterItem_substrings_strings_Item,
    elGetter: $.ASN1Encoder<FilterItem_substrings_strings_Item>
) {
    if (!_cached_encoder_for_FilterItem_substrings_strings_Item) {
        _cached_encoder_for_FilterItem_substrings_strings_Item = $._encode_choice<FilterItem_substrings_strings_Item>(
            {
                initial: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
                any_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeAny,
                    $.BER
                ),
                final: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FilterItem_substrings_strings_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem_substrings_strings_Item */

/* eslint-enable */
