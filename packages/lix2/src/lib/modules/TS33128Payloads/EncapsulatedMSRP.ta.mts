/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedMSRP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedMSRP  ::=  UTF8String
 * ```
 */
export
type EncapsulatedMSRP = UTF8String; // UTF8String

let _cached_decoder_for_EncapsulatedMSRP: $.ASN1Decoder<EncapsulatedMSRP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedMSRP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncapsulatedMSRP (el: _Element): EncapsulatedMSRP {
    if (!_cached_decoder_for_EncapsulatedMSRP) { _cached_decoder_for_EncapsulatedMSRP = $._decodeUTF8String; }
    return _cached_decoder_for_EncapsulatedMSRP(el);
}

let _cached_encoder_for_EncapsulatedMSRP: $.ASN1Encoder<EncapsulatedMSRP> | null = null;

/**
 * @summary Encodes a(n) EncapsulatedMSRP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedMSRP, encoded as an ASN.1 Element.
 */
export
function _encode_EncapsulatedMSRP (value: EncapsulatedMSRP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncapsulatedMSRP) { _cached_encoder_for_EncapsulatedMSRP = $._encodeUTF8String; }
    return _cached_encoder_for_EncapsulatedMSRP(value, elGetter);
}


/* eslint-enable */
