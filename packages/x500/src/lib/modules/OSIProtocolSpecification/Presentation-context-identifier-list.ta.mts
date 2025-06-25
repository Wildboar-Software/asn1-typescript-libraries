/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Presentation_context_identifier_list_Item,
    _decode_Presentation_context_identifier_list_Item,
    _encode_Presentation_context_identifier_list_Item,
} from "../OSIProtocolSpecification/Presentation-context-identifier-list-Item.ta.mjs";
/**
 * @summary Presentation_context_identifier_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier-list  ::=  SEQUENCE SIZE (1) OF SEQUENCE {
 *   presentation-context-identifier  Presentation-context-identifier,
 *   transfer-syntax-name             Transfer-syntax-name}
 * ```
 */
export type Presentation_context_identifier_list = Presentation_context_identifier_list_Item[]; // SequenceOfType

let _cached_decoder_for_Presentation_context_identifier_list: $.ASN1Decoder<Presentation_context_identifier_list> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier_list} The decoded data structure.
 */
export function _decode_Presentation_context_identifier_list(el: _Element): Presentation_context_identifier_list {
    if (!_cached_decoder_for_Presentation_context_identifier_list) {
        _cached_decoder_for_Presentation_context_identifier_list = $._decodeSequenceOf<Presentation_context_identifier_list_Item>(
            () => _decode_Presentation_context_identifier_list_Item
        );
    }
    return _cached_decoder_for_Presentation_context_identifier_list(el);
}

let _cached_encoder_for_Presentation_context_identifier_list: $.ASN1Encoder<Presentation_context_identifier_list> | null = null;

/**
 * @summary Encodes a(n) Presentation_context_identifier_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier_list, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier_list(
    value: Presentation_context_identifier_list,
    elGetter: $.ASN1Encoder<Presentation_context_identifier_list>
): _Element {
    if (!_cached_encoder_for_Presentation_context_identifier_list) {
        _cached_encoder_for_Presentation_context_identifier_list = $._encodeSequenceOf<Presentation_context_identifier_list_Item>(
            () => _encode_Presentation_context_identifier_list_Item,
            $.DER
        );
    }
    return _cached_encoder_for_Presentation_context_identifier_list(
        value,
        elGetter
    );
}


/* eslint-enable */
