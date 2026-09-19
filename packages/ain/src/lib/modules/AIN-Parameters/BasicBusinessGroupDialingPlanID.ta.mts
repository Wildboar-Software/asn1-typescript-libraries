/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BasicBusinessGroupDialingPlanID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicBusinessGroupDialingPlanID  ::=  IA5String(SIZE(1..4))
 * ```
 */
export
type BasicBusinessGroupDialingPlanID = IA5String; // IA5String

let _cached_decoder_for_BasicBusinessGroupDialingPlanID: $.ASN1Decoder<BasicBusinessGroupDialingPlanID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicBusinessGroupDialingPlanID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicBusinessGroupDialingPlanID (el: _Element): BasicBusinessGroupDialingPlanID {
    if (!_cached_decoder_for_BasicBusinessGroupDialingPlanID) { _cached_decoder_for_BasicBusinessGroupDialingPlanID = $._decodeIA5String; }
    return _cached_decoder_for_BasicBusinessGroupDialingPlanID(el);
}

let _cached_encoder_for_BasicBusinessGroupDialingPlanID: $.ASN1Encoder<BasicBusinessGroupDialingPlanID> | null = null;

/**
 * @summary Encodes a(n) BasicBusinessGroupDialingPlanID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicBusinessGroupDialingPlanID, encoded as an ASN.1 Element.
 */
export
function _encode_BasicBusinessGroupDialingPlanID (value: BasicBusinessGroupDialingPlanID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicBusinessGroupDialingPlanID) { _cached_encoder_for_BasicBusinessGroupDialingPlanID = $._encodeIA5String; }
    return _cached_encoder_for_BasicBusinessGroupDialingPlanID(value, elGetter);
}


/* eslint-enable */
