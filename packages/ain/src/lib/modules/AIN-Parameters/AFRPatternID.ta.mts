/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFRPatternID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFRPatternID  ::=  IA5String(SIZE(1..4))
 * ```
 */
export
type AFRPatternID = IA5String; // IA5String

let _cached_decoder_for_AFRPatternID: $.ASN1Decoder<AFRPatternID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFRPatternID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFRPatternID (el: _Element): AFRPatternID {
    if (!_cached_decoder_for_AFRPatternID) { _cached_decoder_for_AFRPatternID = $._decodeIA5String; }
    return _cached_decoder_for_AFRPatternID(el);
}

let _cached_encoder_for_AFRPatternID: $.ASN1Encoder<AFRPatternID> | null = null;

/**
 * @summary Encodes a(n) AFRPatternID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFRPatternID, encoded as an ASN.1 Element.
 */
export
function _encode_AFRPatternID (value: AFRPatternID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFRPatternID) { _cached_encoder_for_AFRPatternID = $._encodeIA5String; }
    return _cached_encoder_for_AFRPatternID(value, elGetter);
}


/* eslint-enable */
