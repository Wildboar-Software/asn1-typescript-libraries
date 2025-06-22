/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalStreetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalStreetAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalStreetAddress = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalStreetAddress: $.ASN1Decoder<UniversalStreetAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalStreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalStreetAddress} The decoded data structure.
 */
export function _decode_UniversalStreetAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalStreetAddress) {
        _cached_decoder_for_UniversalStreetAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalStreetAddress(el);
}

let _cached_encoder_for_UniversalStreetAddress: $.ASN1Encoder<UniversalStreetAddress> | null = null;

/**
 * @summary Encodes a(n) UniversalStreetAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalStreetAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalStreetAddress(
    value: UniversalStreetAddress,
    elGetter: $.ASN1Encoder<UniversalStreetAddress>
) {
    if (!_cached_encoder_for_UniversalStreetAddress) {
        _cached_encoder_for_UniversalStreetAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalStreetAddress(value, elGetter);
}


/* eslint-enable */
