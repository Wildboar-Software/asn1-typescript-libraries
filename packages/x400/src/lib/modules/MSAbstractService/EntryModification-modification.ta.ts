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
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '../MSAbstractService/Attribute.ta';
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '../MSAbstractService/Attribute.ta';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";
import { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
export { AttributeTable } from '../MSGeneralAttributeTypes/AttributeTable.osa';
import {
    OrderedAttribute,
    _decode_OrderedAttribute,
    _encode_OrderedAttribute,
} from '../MSAbstractService/OrderedAttribute.ta';
export {
    OrderedAttribute,
    _decode_OrderedAttribute,
    _encode_OrderedAttribute,
} from '../MSAbstractService/OrderedAttribute.ta';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION EntryModification_modification */
/**
 * @summary EntryModification_modification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryModification-modification ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EntryModification_modification =
    | { add_attribute: Attribute } /* CHOICE_ALT_ROOT */
    | { remove_attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { add_values: OrderedAttribute } /* CHOICE_ALT_ROOT */
    | { remove_values: OrderedAttribute } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EntryModification_modification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryModification_modification */
let _cached_decoder_for_EntryModification_modification: $.ASN1Decoder<EntryModification_modification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryModification_modification */

/* START_OF_SYMBOL_DEFINITION _decode_EntryModification_modification */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification_modification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryModification_modification} The decoded data structure.
 */
export function _decode_EntryModification_modification(el: _Element) {
    if (!_cached_decoder_for_EntryModification_modification) {
        _cached_decoder_for_EntryModification_modification = $._decode_inextensible_choice<EntryModification_modification>(
            {
                'CONTEXT 1': [
                    'add_attribute',
                    $._decode_implicit<Attribute>(() => _decode_Attribute),
                ],
                'CONTEXT 2': [
                    'remove_attribute',
                    $._decode_implicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                'CONTEXT 3': [
                    'add_values',
                    $._decode_implicit<OrderedAttribute>(
                        () => _decode_OrderedAttribute
                    ),
                ],
                'CONTEXT 4': [
                    'remove_values',
                    $._decode_implicit<OrderedAttribute>(
                        () => _decode_OrderedAttribute
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EntryModification_modification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryModification_modification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryModification_modification */
let _cached_encoder_for_EntryModification_modification: $.ASN1Encoder<EntryModification_modification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryModification_modification */

/* START_OF_SYMBOL_DEFINITION _encode_EntryModification_modification */
/**
 * @summary Encodes a(n) EntryModification_modification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification_modification, encoded as an ASN.1 Element.
 */
export function _encode_EntryModification_modification(
    value: EntryModification_modification,
    elGetter: $.ASN1Encoder<EntryModification_modification>
) {
    if (!_cached_encoder_for_EntryModification_modification) {
        _cached_encoder_for_EntryModification_modification = $._encode_choice<EntryModification_modification>(
            {
                add_attribute: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Attribute,
                    $.BER
                ),
                remove_attribute: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeType,
                    $.BER
                ),
                add_values: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_OrderedAttribute,
                    $.BER
                ),
                remove_values: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_OrderedAttribute,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EntryModification_modification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryModification_modification */

/* eslint-enable */
