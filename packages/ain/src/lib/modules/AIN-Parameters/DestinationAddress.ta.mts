/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary DestinationAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationAddress  ::=  [86] IMPLICIT AINDigits
 * ```
 */
export
type DestinationAddress = AINDigits; // DefinedType

let _cached_decoder_for_DestinationAddress: $.ASN1Decoder<DestinationAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationAddress (el: _Element): DestinationAddress {
    if (!_cached_decoder_for_DestinationAddress) { _cached_decoder_for_DestinationAddress = $._decode_implicit<DestinationAddress>(() => _decode_AINDigits); }
    return _cached_decoder_for_DestinationAddress(el);
}

let _cached_encoder_for_DestinationAddress: $.ASN1Encoder<DestinationAddress> | null = null;

/**
 * @summary Encodes a(n) DestinationAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationAddress, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationAddress (value: DestinationAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationAddress) { _cached_encoder_for_DestinationAddress = $._encode_implicit(_TagClass.context, 86, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_DestinationAddress(value, elGetter);
}


/* eslint-enable */
