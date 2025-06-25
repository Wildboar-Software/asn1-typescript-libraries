/* eslint-disable */
import {
    NULL,
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
    TONotCreated,
    _decode_TONotCreated,
    _encode_TONotCreated,
} from '../Test-ASN1Module/TONotCreated.ta.mjs';
/**
 * @summary RelatedTOError_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedTOError-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RelatedTOError_Item =
    | { ableToCreateTO: NULL } /* CHOICE_ALT_ROOT */
    | { unableToCreateTO: TONotCreated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RelatedTOError_Item: $.ASN1Decoder<RelatedTOError_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTOError_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedTOError_Item} The decoded data structure.
 */
export function _decode_RelatedTOError_Item(el: _Element): RelatedTOError_Item {
    if (!_cached_decoder_for_RelatedTOError_Item) {
        _cached_decoder_for_RelatedTOError_Item = $._decode_inextensible_choice<RelatedTOError_Item>(
            {
                'UNIVERSAL 5': ['ableToCreateTO', $._decodeNull],
                'UNIVERSAL 10': ['unableToCreateTO', _decode_TONotCreated],
                'UNIVERSAL 17': ['unableToCreateTO', _decode_TONotCreated],
            }
        );
    }
    return _cached_decoder_for_RelatedTOError_Item(el);
}

let _cached_encoder_for_RelatedTOError_Item: $.ASN1Encoder<RelatedTOError_Item> | null = null;

/**
 * @summary Encodes a(n) RelatedTOError_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTOError_Item, encoded as an ASN.1 Element.
 */
export function _encode_RelatedTOError_Item(
    value: RelatedTOError_Item,
    elGetter: $.ASN1Encoder<RelatedTOError_Item>
): _Element {
    if (!_cached_encoder_for_RelatedTOError_Item) {
        _cached_encoder_for_RelatedTOError_Item = $._encode_choice<RelatedTOError_Item>(
            {
                ableToCreateTO: $._encodeNull,
                unableToCreateTO: _encode_TONotCreated,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RelatedTOError_Item(value, elGetter);
}


/* eslint-enable */
