/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DSEType,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta.mjs";
/**
 * @summary SDSEType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDSEType  ::=  DSEType
 * ```
 */
export type SDSEType = DSEType; // DefinedType

let _cached_decoder_for_SDSEType: $.ASN1Decoder<SDSEType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDSEType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDSEType} The decoded data structure.
 */
export function _decode_SDSEType(el: _Element) {
    if (!_cached_decoder_for_SDSEType) {
        _cached_decoder_for_SDSEType = _decode_DSEType;
    }
    return _cached_decoder_for_SDSEType(el);
}

let _cached_encoder_for_SDSEType: $.ASN1Encoder<SDSEType> | null = null;

/**
 * @summary Encodes a(n) SDSEType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEType, encoded as an ASN.1 Element.
 */
export function _encode_SDSEType(
    value: SDSEType,
    elGetter: $.ASN1Encoder<SDSEType>
) {
    if (!_cached_encoder_for_SDSEType) {
        _cached_encoder_for_SDSEType = _encode_DSEType;
    }
    return _cached_encoder_for_SDSEType(value, elGetter);
}


/* eslint-enable */
