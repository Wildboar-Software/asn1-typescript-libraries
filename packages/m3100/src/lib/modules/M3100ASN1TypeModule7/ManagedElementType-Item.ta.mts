/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    GraphicString,
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


/**
 * @summary ManagedElementType_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedElementType-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ManagedElementType_Item =
    | { meTypeString: GraphicString } /* CHOICE_ALT_ROOT */
    | { meTypeOID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ManagedElementType_Item: $.ASN1Decoder<ManagedElementType_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ManagedElementType_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedElementType_Item} The decoded data structure.
 */
export function _decode_ManagedElementType_Item(el: _Element): ManagedElementType_Item {
    if (!_cached_decoder_for_ManagedElementType_Item) {
        _cached_decoder_for_ManagedElementType_Item = $._decode_inextensible_choice<ManagedElementType_Item>(
            {
                'UNIVERSAL 25': ['meTypeString', $._decodeGraphicString],
                'UNIVERSAL 6': ['meTypeOID', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ManagedElementType_Item(el);
}


let _cached_encoder_for_ManagedElementType_Item: $.ASN1Encoder<ManagedElementType_Item> | null = null;


/**
 * @summary Encodes a(n) ManagedElementType_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedElementType_Item, encoded as an ASN.1 Element.
 */
export function _encode_ManagedElementType_Item(
    value: ManagedElementType_Item,
    elGetter: $.ASN1Encoder<ManagedElementType_Item>
): _Element {
    if (!_cached_encoder_for_ManagedElementType_Item) {
        _cached_encoder_for_ManagedElementType_Item = $._encode_choice<ManagedElementType_Item>(
            {
                meTypeString: $._encodeGraphicString,
                meTypeOID: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ManagedElementType_Item(value, elGetter);
}


/* eslint-enable */
