/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PublicDialingPlanID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicDialingPlanID  ::=  IA5String(SIZE(1..8))
 * ```
 */
export
type PublicDialingPlanID = IA5String; // IA5String

let _cached_decoder_for_PublicDialingPlanID: $.ASN1Decoder<PublicDialingPlanID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicDialingPlanID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicDialingPlanID (el: _Element): PublicDialingPlanID {
    if (!_cached_decoder_for_PublicDialingPlanID) { _cached_decoder_for_PublicDialingPlanID = $._decodeIA5String; }
    return _cached_decoder_for_PublicDialingPlanID(el);
}

let _cached_encoder_for_PublicDialingPlanID: $.ASN1Encoder<PublicDialingPlanID> | null = null;

/**
 * @summary Encodes a(n) PublicDialingPlanID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicDialingPlanID, encoded as an ASN.1 Element.
 */
export
function _encode_PublicDialingPlanID (value: PublicDialingPlanID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicDialingPlanID) { _cached_encoder_for_PublicDialingPlanID = $._encodeIA5String; }
    return _cached_encoder_for_PublicDialingPlanID(value, elGetter);
}


/* eslint-enable */
