/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../MTSAbstractService/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPosteRestanteAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPosteRestanteAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPosteRestanteAddress = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalPosteRestanteAddress: $.ASN1Decoder<UniversalPosteRestanteAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPosteRestanteAddress} The decoded data structure.
 */
export function _decode_UniversalPosteRestanteAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalPosteRestanteAddress) {
        _cached_decoder_for_UniversalPosteRestanteAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPosteRestanteAddress(el);
}

let _cached_encoder_for_UniversalPosteRestanteAddress: $.ASN1Encoder<UniversalPosteRestanteAddress> | null = null;

/**
 * @summary Encodes a(n) UniversalPosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPosteRestanteAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPosteRestanteAddress(
    value: UniversalPosteRestanteAddress,
    elGetter: $.ASN1Encoder<UniversalPosteRestanteAddress>
) {
    if (!_cached_encoder_for_UniversalPosteRestanteAddress) {
        _cached_encoder_for_UniversalPosteRestanteAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPosteRestanteAddress(value, elGetter);
}


/* eslint-enable */
