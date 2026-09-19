/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExemptedAddress, _decode_ExemptedAddress, _encode_ExemptedAddress } from "../MMSHeadingExtensions/ExemptedAddress.ta.mjs";
// export { ExemptedAddress, _decode_ExemptedAddress, _encode_ExemptedAddress } from "../MMSHeadingExtensions/ExemptedAddress.ta.mjs";


/**
 * @summary ExemptedAddressSeq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExemptedAddressSeq  ::=  SEQUENCE OF ExemptedAddress
 * ```
 */
export
type ExemptedAddressSeq = ExemptedAddress[]; // SequenceOfType

let _cached_decoder_for_ExemptedAddressSeq: $.ASN1Decoder<ExemptedAddressSeq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExemptedAddressSeq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExemptedAddressSeq (el: _Element): ExemptedAddressSeq {
    if (!_cached_decoder_for_ExemptedAddressSeq) { _cached_decoder_for_ExemptedAddressSeq = $._decodeSequenceOf<ExemptedAddress>(() => _decode_ExemptedAddress); }
    return _cached_decoder_for_ExemptedAddressSeq(el);
}

let _cached_encoder_for_ExemptedAddressSeq: $.ASN1Encoder<ExemptedAddressSeq> | null = null;

/**
 * @summary Encodes a(n) ExemptedAddressSeq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExemptedAddressSeq, encoded as an ASN.1 Element.
 */
export
function _encode_ExemptedAddressSeq (value: ExemptedAddressSeq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExemptedAddressSeq) { _cached_encoder_for_ExemptedAddressSeq = $._encodeSequenceOf<ExemptedAddress>(() => _encode_ExemptedAddress, $.BER); }
    return _cached_encoder_for_ExemptedAddressSeq(value, elGetter);
}


/* eslint-enable */
