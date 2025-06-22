/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    PreferredDeliveryMethod_Item,
    _decode_PreferredDeliveryMethod_Item,
    _encode_PreferredDeliveryMethod_Item,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod-Item.ta.mjs";
/**
 * @summary PreferredDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredDeliveryMethod  ::=  SEQUENCE OF INTEGER {
 *   any-delivery-method   (0),
 *   mhs-delivery          (1),
 *   physical-delivery     (2),
 *   telex-delivery        (3),
 *   teletex-delivery      (4),
 *   g3-facsimile-delivery (5),
 *   g4-facsimile-delivery (6),
 *   ia5-terminal-delivery (7),
 *   videotex-delivery     (8),
 *   telephone-delivery    (9) }
 * ```
 */
export type PreferredDeliveryMethod = PreferredDeliveryMethod_Item[]; // SequenceOfType

let _cached_decoder_for_PreferredDeliveryMethod: $.ASN1Decoder<PreferredDeliveryMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PreferredDeliveryMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredDeliveryMethod} The decoded data structure.
 */
export function _decode_PreferredDeliveryMethod(el: _Element) {
    if (!_cached_decoder_for_PreferredDeliveryMethod) {
        _cached_decoder_for_PreferredDeliveryMethod = $._decodeSequenceOf<PreferredDeliveryMethod_Item>(
            () => _decode_PreferredDeliveryMethod_Item
        );
    }
    return _cached_decoder_for_PreferredDeliveryMethod(el);
}

let _cached_encoder_for_PreferredDeliveryMethod: $.ASN1Encoder<PreferredDeliveryMethod> | null = null;

/**
 * @summary Encodes a(n) PreferredDeliveryMethod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredDeliveryMethod, encoded as an ASN.1 Element.
 */
export function _encode_PreferredDeliveryMethod(
    value: PreferredDeliveryMethod,
    elGetter: $.ASN1Encoder<PreferredDeliveryMethod>
) {
    if (!_cached_encoder_for_PreferredDeliveryMethod) {
        _cached_encoder_for_PreferredDeliveryMethod = $._encodeSequenceOf<PreferredDeliveryMethod_Item>(
            () => _encode_PreferredDeliveryMethod_Item,
            $.DER
        );
    }
    return _cached_encoder_for_PreferredDeliveryMethod(value, elGetter);
}


/* eslint-enable */
