/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    ClassAttributeSelection,
    _decode_ClassAttributeSelection,
    _encode_ClassAttributeSelection,
} from "../DirectoryShadowAbstractService/ClassAttributeSelection.ta.mjs";
/**
 * @summary AttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSelection  ::=  SET OF ClassAttributeSelection
 * ```
 */
export type AttributeSelection = ClassAttributeSelection[]; // SetOfType

let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<AttributeSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element) {
    if (!_cached_decoder_for_AttributeSelection) {
        _cached_decoder_for_AttributeSelection = $._decodeSetOf<ClassAttributeSelection>(
            () => _decode_ClassAttributeSelection
        );
    }
    return _cached_decoder_for_AttributeSelection(el);
}

let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<AttributeSelection> | null = null;

/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
    value: AttributeSelection,
    elGetter: $.ASN1Encoder<AttributeSelection>
) {
    if (!_cached_encoder_for_AttributeSelection) {
        _cached_encoder_for_AttributeSelection = $._encodeSetOf<ClassAttributeSelection>(
            () => _encode_ClassAttributeSelection,
            $.DER
        );
    }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}


/* eslint-enable */
