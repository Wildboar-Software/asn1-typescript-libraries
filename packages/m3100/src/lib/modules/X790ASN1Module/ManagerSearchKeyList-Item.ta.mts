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
    ManagerSearchString,
    _decode_ManagerSearchString,
    _encode_ManagerSearchString,
} from '../X790ASN1Module/ManagerSearchString.ta.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ManagerSearchKeyList_Item */
/**
 * @summary ManagerSearchKeyList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagerSearchKeyList-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ManagerSearchKeyList_Item =
    | { searchString: ManagerSearchString } /* CHOICE_ALT_ROOT */
    | { objectInstance: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ManagerSearchKeyList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchKeyList_Item */
let _cached_decoder_for_ManagerSearchKeyList_Item: $.ASN1Decoder<ManagerSearchKeyList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagerSearchKeyList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ManagerSearchKeyList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagerSearchKeyList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagerSearchKeyList_Item} The decoded data structure.
 */
export function _decode_ManagerSearchKeyList_Item(el: _Element) {
    if (!_cached_decoder_for_ManagerSearchKeyList_Item) {
        _cached_decoder_for_ManagerSearchKeyList_Item = $._decode_extensible_choice<ManagerSearchKeyList_Item>(
            {
                'UNIVERSAL 25': ['searchString', _decode_ManagerSearchString],
                'CONTEXT 2': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 3': ['objectInstance', _decode_ObjectInstance],
                'CONTEXT 4': ['objectInstance', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_ManagerSearchKeyList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagerSearchKeyList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchKeyList_Item */
let _cached_encoder_for_ManagerSearchKeyList_Item: $.ASN1Encoder<ManagerSearchKeyList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagerSearchKeyList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ManagerSearchKeyList_Item */
/**
 * @summary Encodes a(n) ManagerSearchKeyList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagerSearchKeyList_Item, encoded as an ASN.1 Element.
 */
export function _encode_ManagerSearchKeyList_Item(
    value: ManagerSearchKeyList_Item,
    elGetter: $.ASN1Encoder<ManagerSearchKeyList_Item>
) {
    if (!_cached_encoder_for_ManagerSearchKeyList_Item) {
        _cached_encoder_for_ManagerSearchKeyList_Item = $._encode_choice<ManagerSearchKeyList_Item>(
            {
                searchString: _encode_ManagerSearchString,
                objectInstance: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ManagerSearchKeyList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagerSearchKeyList_Item */

/* eslint-enable */
