/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HFCNodeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HFCNodeID  ::=  UTF8String
 * ```
 */
export
type HFCNodeID = UTF8String; // UTF8String

let _cached_decoder_for_HFCNodeID: $.ASN1Decoder<HFCNodeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HFCNodeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HFCNodeID (el: _Element): HFCNodeID {
    if (!_cached_decoder_for_HFCNodeID) { _cached_decoder_for_HFCNodeID = $._decodeUTF8String; }
    return _cached_decoder_for_HFCNodeID(el);
}

let _cached_encoder_for_HFCNodeID: $.ASN1Encoder<HFCNodeID> | null = null;

/**
 * @summary Encodes a(n) HFCNodeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HFCNodeID, encoded as an ASN.1 Element.
 */
export
function _encode_HFCNodeID (value: HFCNodeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HFCNodeID) { _cached_encoder_for_HFCNodeID = $._encodeUTF8String; }
    return _cached_encoder_for_HFCNodeID(value, elGetter);
}


/* eslint-enable */
