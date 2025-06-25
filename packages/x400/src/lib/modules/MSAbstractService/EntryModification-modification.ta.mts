/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '../MSAbstractService/Attribute.ta.mjs';
import {
    OrderedAttribute,
    _decode_OrderedAttribute,
    _encode_OrderedAttribute,
} from '../MSAbstractService/OrderedAttribute.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

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

let _cached_decoder_for_EntryModification_modification: $.ASN1Decoder<EntryModification_modification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification_modification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryModification_modification} The decoded data structure.
 */
export function _decode_EntryModification_modification(el: _Element): EntryModification_modification {
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

let _cached_encoder_for_EntryModification_modification: $.ASN1Encoder<EntryModification_modification> | null = null;

/**
 * @summary Encodes a(n) EntryModification_modification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification_modification, encoded as an ASN.1 Element.
 */
export function _encode_EntryModification_modification(
    value: EntryModification_modification,
    elGetter: $.ASN1Encoder<EntryModification_modification>
): _Element {
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


/* eslint-enable */
