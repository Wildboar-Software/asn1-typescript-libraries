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
    Failed,
    _decode_Failed,
    _encode_Failed,
} from '../ASN1DefinedTypesModule/Failed.ta.mjs';
import {
    PointerOrNull,
    _decode_PointerOrNull,
    _encode_PointerOrNull,
} from '../ASN1DefinedTypesModule/PointerOrNull.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BridgeRollReply_Item */
/**
 * @summary BridgeRollReply_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BridgeRollReply-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BridgeRollReply_Item =
    | { bridgeFailed: Failed } /* CHOICE_ALT_ROOT */
    | { bridgeRollResult: PointerOrNull } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BridgeRollReply_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollReply_Item */
let _cached_decoder_for_BridgeRollReply_Item: $.ASN1Decoder<BridgeRollReply_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollReply_Item */

/* START_OF_SYMBOL_DEFINITION _decode_BridgeRollReply_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) BridgeRollReply_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BridgeRollReply_Item} The decoded data structure.
 */
export function _decode_BridgeRollReply_Item(el: _Element) {
    if (!_cached_decoder_for_BridgeRollReply_Item) {
        _cached_decoder_for_BridgeRollReply_Item = $._decode_inextensible_choice<BridgeRollReply_Item>(
            {
                'CONTEXT 0': [
                    'bridgeFailed',
                    $._decode_implicit<Failed>(() => _decode_Failed),
                ],
                'CONTEXT 1': [
                    'bridgeRollResult',
                    $._decode_implicit<PointerOrNull>(
                        () => _decode_PointerOrNull
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BridgeRollReply_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BridgeRollReply_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollReply_Item */
let _cached_encoder_for_BridgeRollReply_Item: $.ASN1Encoder<BridgeRollReply_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollReply_Item */

/* START_OF_SYMBOL_DEFINITION _encode_BridgeRollReply_Item */
/**
 * @summary Encodes a(n) BridgeRollReply_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BridgeRollReply_Item, encoded as an ASN.1 Element.
 */
export function _encode_BridgeRollReply_Item(
    value: BridgeRollReply_Item,
    elGetter: $.ASN1Encoder<BridgeRollReply_Item>
) {
    if (!_cached_encoder_for_BridgeRollReply_Item) {
        _cached_encoder_for_BridgeRollReply_Item = $._encode_choice<BridgeRollReply_Item>(
            {
                bridgeFailed: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Failed,
                    $.BER
                ),
                bridgeRollResult: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PointerOrNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BridgeRollReply_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BridgeRollReply_Item */

/* eslint-enable */
