/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "../DSAOperationalAttributeTypes/SupplierAndConsumers.ta.mjs";
/**
 * @summary SecondaryShadows
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecondaryShadows  ::=  SET OF SupplierAndConsumers
 * ```
 */
export type SecondaryShadows = SupplierAndConsumers[]; // SetOfType

let _cached_decoder_for_SecondaryShadows: $.ASN1Decoder<SecondaryShadows> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecondaryShadows
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecondaryShadows} The decoded data structure.
 */
export function _decode_SecondaryShadows(el: _Element) {
    if (!_cached_decoder_for_SecondaryShadows) {
        _cached_decoder_for_SecondaryShadows = $._decodeSetOf<SupplierAndConsumers>(
            () => _decode_SupplierAndConsumers
        );
    }
    return _cached_decoder_for_SecondaryShadows(el);
}

let _cached_encoder_for_SecondaryShadows: $.ASN1Encoder<SecondaryShadows> | null = null;

/**
 * @summary Encodes a(n) SecondaryShadows into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondaryShadows, encoded as an ASN.1 Element.
 */
export function _encode_SecondaryShadows(
    value: SecondaryShadows,
    elGetter: $.ASN1Encoder<SecondaryShadows>
) {
    if (!_cached_encoder_for_SecondaryShadows) {
        _cached_encoder_for_SecondaryShadows = $._encodeSetOf<SupplierAndConsumers>(
            () => _encode_SupplierAndConsumers,
            $.DER
        );
    }
    return _cached_encoder_for_SecondaryShadows(value, elGetter);
}


/* eslint-enable */
