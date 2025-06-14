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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeChoiceInteger,
    _decode_AttributeChoiceInteger,
    _encode_AttributeChoiceInteger,
} from '../M3100ASN1TypeModule7/AttributeChoiceInteger.ta.mjs';
import {
    AttributeChoiceReal,
    _decode_AttributeChoiceReal,
    _encode_AttributeChoiceReal,
} from '../M3100ASN1TypeModule7/AttributeChoiceReal.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Ranges_Item */
/**
 * @summary Ranges_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ranges-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Ranges_Item =
    | { integerRange: AttributeChoiceInteger } /* CHOICE_ALT_ROOT */
    | { realRange: AttributeChoiceReal } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Ranges_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ranges_Item */
let _cached_decoder_for_Ranges_Item: $.ASN1Decoder<Ranges_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ranges_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Ranges_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Ranges_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ranges_Item} The decoded data structure.
 */
export function _decode_Ranges_Item(el: _Element) {
    if (!_cached_decoder_for_Ranges_Item) {
        _cached_decoder_for_Ranges_Item = $._decode_inextensible_choice<Ranges_Item>(
            {
                'CONTEXT 0': [
                    'integerRange',
                    $._decode_implicit<AttributeChoiceInteger>(
                        () => _decode_AttributeChoiceInteger
                    ),
                ],
                'CONTEXT 1': [
                    'realRange',
                    $._decode_implicit<AttributeChoiceReal>(
                        () => _decode_AttributeChoiceReal
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Ranges_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ranges_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ranges_Item */
let _cached_encoder_for_Ranges_Item: $.ASN1Encoder<Ranges_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ranges_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Ranges_Item */
/**
 * @summary Encodes a(n) Ranges_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ranges_Item, encoded as an ASN.1 Element.
 */
export function _encode_Ranges_Item(
    value: Ranges_Item,
    elGetter: $.ASN1Encoder<Ranges_Item>
) {
    if (!_cached_encoder_for_Ranges_Item) {
        _cached_encoder_for_Ranges_Item = $._encode_choice<Ranges_Item>(
            {
                integerRange: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeChoiceInteger,
                    $.BER
                ),
                realRange: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeChoiceReal,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Ranges_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ranges_Item */

/* eslint-enable */
