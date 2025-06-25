/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ModifyRights_Item,
    _decode_ModifyRights_Item,
    _encode_ModifyRights_Item,
} from "../DirectoryAbstractService/ModifyRights-Item.ta.mjs";
/**
 * @summary ModifyRights
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRights  ::=  SET OF SEQUENCE {
 *   item      CHOICE {
 *     entry      [0]  NULL,
 *     attribute  [1]  AttributeType,
 *     value      [2]  AttributeValueAssertion,
 *     ...},
 *   permission   [3]  BIT STRING {
 *     add     (0),
 *     remove  (1),
 *     rename  (2),
 *     move    (3)},
 *   ... }
 * ```
 */
export type ModifyRights = ModifyRights_Item[]; // SetOfType

let _cached_decoder_for_ModifyRights: $.ASN1Decoder<ModifyRights> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRights
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRights} The decoded data structure.
 */
export function _decode_ModifyRights(el: _Element): ModifyRights {
    if (!_cached_decoder_for_ModifyRights) {
        _cached_decoder_for_ModifyRights = $._decodeSetOf<ModifyRights_Item>(
            () => _decode_ModifyRights_Item
        );
    }
    return _cached_decoder_for_ModifyRights(el);
}

let _cached_encoder_for_ModifyRights: $.ASN1Encoder<ModifyRights> | null = null;

/**
 * @summary Encodes a(n) ModifyRights into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRights, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRights(
    value: ModifyRights,
    elGetter: $.ASN1Encoder<ModifyRights>
): _Element {
    if (!_cached_encoder_for_ModifyRights) {
        _cached_encoder_for_ModifyRights = $._encodeSetOf<ModifyRights_Item>(
            () => _encode_ModifyRights_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ModifyRights(value, elGetter);
}


/* eslint-enable */
