/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AttributeOptionList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeOptionList  ::=  SEQUENCE OF UTF8String
 * ```
 */
export type AttributeOptionList = UTF8String[]; // SequenceOfType

let _cached_decoder_for_AttributeOptionList: $.ASN1Decoder<AttributeOptionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeOptionList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeOptionList} The decoded data structure.
 */
export function _decode_AttributeOptionList(el: _Element) {
    if (!_cached_decoder_for_AttributeOptionList) {
        _cached_decoder_for_AttributeOptionList = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_AttributeOptionList(el);
}

let _cached_encoder_for_AttributeOptionList: $.ASN1Encoder<AttributeOptionList> | null = null;

/**
 * @summary Encodes a(n) AttributeOptionList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeOptionList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeOptionList(
    value: AttributeOptionList,
    elGetter: $.ASN1Encoder<AttributeOptionList>
) {
    if (!_cached_encoder_for_AttributeOptionList) {
        _cached_encoder_for_AttributeOptionList = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.DER
        );
    }
    return _cached_encoder_for_AttributeOptionList(value, elGetter);
}


/* eslint-enable */
