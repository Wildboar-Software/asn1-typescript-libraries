/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta.mjs";
/**
 * @summary UniversalPostOfficeBoxAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPostOfficeBoxAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPostOfficeBoxAddress = UniversalPDSParameter; // DefinedType

let _cached_decoder_for_UniversalPostOfficeBoxAddress: $.ASN1Decoder<UniversalPostOfficeBoxAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPostOfficeBoxAddress} The decoded data structure.
 */
export function _decode_UniversalPostOfficeBoxAddress(el: _Element): UniversalPostOfficeBoxAddress {
    if (!_cached_decoder_for_UniversalPostOfficeBoxAddress) {
        _cached_decoder_for_UniversalPostOfficeBoxAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPostOfficeBoxAddress(el);
}

let _cached_encoder_for_UniversalPostOfficeBoxAddress: $.ASN1Encoder<UniversalPostOfficeBoxAddress> | null = null;

/**
 * @summary Encodes a(n) UniversalPostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPostOfficeBoxAddress(
    value: UniversalPostOfficeBoxAddress,
    elGetter: $.ASN1Encoder<UniversalPostOfficeBoxAddress>
): _Element {
    if (!_cached_encoder_for_UniversalPostOfficeBoxAddress) {
        _cached_encoder_for_UniversalPostOfficeBoxAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPostOfficeBoxAddress(value, elGetter);
}


/* eslint-enable */
