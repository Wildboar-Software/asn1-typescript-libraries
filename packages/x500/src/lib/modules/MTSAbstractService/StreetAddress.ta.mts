/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta.mjs";
/**
 * @summary StreetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StreetAddress  ::=  PDSParameter
 * ```
 */
export type StreetAddress = PDSParameter; // DefinedType

let _cached_decoder_for_StreetAddress: $.ASN1Decoder<StreetAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StreetAddress} The decoded data structure.
 */
export function _decode_StreetAddress(el: _Element): StreetAddress {
    if (!_cached_decoder_for_StreetAddress) {
        _cached_decoder_for_StreetAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_StreetAddress(el);
}

let _cached_encoder_for_StreetAddress: $.ASN1Encoder<StreetAddress> | null = null;

/**
 * @summary Encodes a(n) StreetAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreetAddress, encoded as an ASN.1 Element.
 */
export function _encode_StreetAddress(
    value: StreetAddress,
    elGetter: $.ASN1Encoder<StreetAddress>
): _Element {
    if (!_cached_encoder_for_StreetAddress) {
        _cached_encoder_for_StreetAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_StreetAddress(value, elGetter);
}


/* eslint-enable */
