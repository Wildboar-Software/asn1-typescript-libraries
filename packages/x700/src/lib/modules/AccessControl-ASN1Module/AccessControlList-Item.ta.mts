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
import * as $ from '@wildboar/asn1/functional';
import {
    Proxy,
    _decode_Proxy,
    _encode_Proxy,
} from '../AccessControl-ASN1Module/Proxy.ta.mjs';
import {
    InitiatorName,
    _decode_InitiatorName,
    _encode_InitiatorName,
} from '../AccessControl-ASN1Module/InitiatorName.ta.mjs';
/**
 * @summary AccessControlList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlList-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AccessControlList_Item =
    | { proxy: Proxy } /* CHOICE_ALT_ROOT */
    | { initiatorName: InitiatorName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AccessControlList_Item: $.ASN1Decoder<AccessControlList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessControlList_Item} The decoded data structure.
 */
export function _decode_AccessControlList_Item(el: _Element) {
    if (!_cached_decoder_for_AccessControlList_Item) {
        _cached_decoder_for_AccessControlList_Item = $._decode_inextensible_choice<AccessControlList_Item>(
            {
                'CONTEXT 0': [
                    'proxy',
                    $._decode_implicit<Proxy>(() => _decode_Proxy),
                ],
                'CONTEXT 1': [
                    'initiatorName',
                    $._decode_explicit<InitiatorName>(
                        () => _decode_InitiatorName
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AccessControlList_Item(el);
}

let _cached_encoder_for_AccessControlList_Item: $.ASN1Encoder<AccessControlList_Item> | null = null;

/**
 * @summary Encodes a(n) AccessControlList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlList_Item, encoded as an ASN.1 Element.
 */
export function _encode_AccessControlList_Item(
    value: AccessControlList_Item,
    elGetter: $.ASN1Encoder<AccessControlList_Item>
) {
    if (!_cached_encoder_for_AccessControlList_Item) {
        _cached_encoder_for_AccessControlList_Item = $._encode_choice<AccessControlList_Item>(
            {
                proxy: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Proxy,
                    $.BER
                ),
                initiatorName: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_InitiatorName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AccessControlList_Item(value, elGetter);
}


/* eslint-enable */
