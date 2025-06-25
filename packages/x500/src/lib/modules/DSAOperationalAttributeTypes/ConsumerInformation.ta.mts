/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SupplierOrConsumer,
    _decode_SupplierOrConsumer,
    _encode_SupplierOrConsumer,
} from "../DSAOperationalAttributeTypes/SupplierOrConsumer.ta.mjs";
/**
 * @summary ConsumerInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConsumerInformation  ::=  SupplierOrConsumer
 * ```
 */
export type ConsumerInformation = SupplierOrConsumer; // DefinedType

let _cached_decoder_for_ConsumerInformation: $.ASN1Decoder<ConsumerInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerInformation} The decoded data structure.
 */
export function _decode_ConsumerInformation(el: _Element): ConsumerInformation {
    if (!_cached_decoder_for_ConsumerInformation) {
        _cached_decoder_for_ConsumerInformation = _decode_SupplierOrConsumer;
    }
    return _cached_decoder_for_ConsumerInformation(el);
}

let _cached_encoder_for_ConsumerInformation: $.ASN1Encoder<ConsumerInformation> | null = null;

/**
 * @summary Encodes a(n) ConsumerInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerInformation, encoded as an ASN.1 Element.
 */
export function _encode_ConsumerInformation(
    value: ConsumerInformation,
    elGetter: $.ASN1Encoder<ConsumerInformation>
): _Element {
    if (!_cached_encoder_for_ConsumerInformation) {
        _cached_encoder_for_ConsumerInformation = _encode_SupplierOrConsumer;
    }
    return _cached_encoder_for_ConsumerInformation(value, elGetter);
}


/* eslint-enable */
