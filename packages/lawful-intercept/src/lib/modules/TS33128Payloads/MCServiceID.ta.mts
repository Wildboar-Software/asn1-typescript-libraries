/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceID  ::=  UTF8String
 * ```
 */
export
type MCServiceID = UTF8String; // UTF8String

let _cached_decoder_for_MCServiceID: $.ASN1Decoder<MCServiceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceID (el: _Element): MCServiceID {
    if (!_cached_decoder_for_MCServiceID) { _cached_decoder_for_MCServiceID = $._decodeUTF8String; }
    return _cached_decoder_for_MCServiceID(el);
}

let _cached_encoder_for_MCServiceID: $.ASN1Encoder<MCServiceID> | null = null;

/**
 * @summary Encodes a(n) MCServiceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceID, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceID (value: MCServiceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceID) { _cached_encoder_for_MCServiceID = $._encodeUTF8String; }
    return _cached_encoder_for_MCServiceID(value, elGetter);
}


/* eslint-enable */
