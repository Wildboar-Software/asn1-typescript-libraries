/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BasicBusinessGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicBusinessGroupID  ::=  IA5String(SIZE(1..10))
 * ```
 */
export
type BasicBusinessGroupID = IA5String; // IA5String

let _cached_decoder_for_BasicBusinessGroupID: $.ASN1Decoder<BasicBusinessGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicBusinessGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicBusinessGroupID (el: _Element): BasicBusinessGroupID {
    if (!_cached_decoder_for_BasicBusinessGroupID) { _cached_decoder_for_BasicBusinessGroupID = $._decodeIA5String; }
    return _cached_decoder_for_BasicBusinessGroupID(el);
}

let _cached_encoder_for_BasicBusinessGroupID: $.ASN1Encoder<BasicBusinessGroupID> | null = null;

/**
 * @summary Encodes a(n) BasicBusinessGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicBusinessGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_BasicBusinessGroupID (value: BasicBusinessGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicBusinessGroupID) { _cached_encoder_for_BasicBusinessGroupID = $._encodeIA5String; }
    return _cached_encoder_for_BasicBusinessGroupID(value, elGetter);
}


/* eslint-enable */
