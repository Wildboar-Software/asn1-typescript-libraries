/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VisitedNetworkID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisitedNetworkID  ::=  UTF8String
 * ```
 */
export
type VisitedNetworkID = UTF8String; // UTF8String

let _cached_decoder_for_VisitedNetworkID: $.ASN1Decoder<VisitedNetworkID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VisitedNetworkID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VisitedNetworkID (el: _Element): VisitedNetworkID {
    if (!_cached_decoder_for_VisitedNetworkID) { _cached_decoder_for_VisitedNetworkID = $._decodeUTF8String; }
    return _cached_decoder_for_VisitedNetworkID(el);
}

let _cached_encoder_for_VisitedNetworkID: $.ASN1Encoder<VisitedNetworkID> | null = null;

/**
 * @summary Encodes a(n) VisitedNetworkID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisitedNetworkID, encoded as an ASN.1 Element.
 */
export
function _encode_VisitedNetworkID (value: VisitedNetworkID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VisitedNetworkID) { _cached_encoder_for_VisitedNetworkID = $._encodeUTF8String; }
    return _cached_encoder_for_VisitedNetworkID(value, elGetter);
}


/* eslint-enable */
