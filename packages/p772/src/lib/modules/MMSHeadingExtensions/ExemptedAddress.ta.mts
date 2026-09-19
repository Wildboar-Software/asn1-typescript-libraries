/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExemptedAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExemptedAddress  ::=  ORDescriptor
 * ```
 */
export
type ExemptedAddress = ORDescriptor; // DefinedType

let _cached_decoder_for_ExemptedAddress: $.ASN1Decoder<ExemptedAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExemptedAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExemptedAddress (el: _Element): ExemptedAddress {
    if (!_cached_decoder_for_ExemptedAddress) { _cached_decoder_for_ExemptedAddress = _decode_ORDescriptor; }
    return _cached_decoder_for_ExemptedAddress(el);
}

let _cached_encoder_for_ExemptedAddress: $.ASN1Encoder<ExemptedAddress> | null = null;

/**
 * @summary Encodes a(n) ExemptedAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExemptedAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ExemptedAddress (value: ExemptedAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExemptedAddress) { _cached_encoder_for_ExemptedAddress = _encode_ORDescriptor; }
    return _cached_encoder_for_ExemptedAddress(value, elGetter);
}


/* eslint-enable */
