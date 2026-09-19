/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";
// export { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";


/**
 * @summary IndAudPropertyGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudPropertyGroup  ::=  SEQUENCE OF IndAudPropertyParm
 * ```
 */
export
type IndAudPropertyGroup = IndAudPropertyParm[]; // SequenceOfType

let _cached_decoder_for_IndAudPropertyGroup: $.ASN1Decoder<IndAudPropertyGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudPropertyGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudPropertyGroup (el: _Element): IndAudPropertyGroup {
    if (!_cached_decoder_for_IndAudPropertyGroup) { _cached_decoder_for_IndAudPropertyGroup = $._decodeSequenceOf<IndAudPropertyParm>(() => _decode_IndAudPropertyParm); }
    return _cached_decoder_for_IndAudPropertyGroup(el);
}

let _cached_encoder_for_IndAudPropertyGroup: $.ASN1Encoder<IndAudPropertyGroup> | null = null;

/**
 * @summary Encodes a(n) IndAudPropertyGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudPropertyGroup, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudPropertyGroup (value: IndAudPropertyGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudPropertyGroup) { _cached_encoder_for_IndAudPropertyGroup = $._encodeSequenceOf<IndAudPropertyParm>(() => _encode_IndAudPropertyParm, $.BER); }
    return _cached_encoder_for_IndAudPropertyGroup(value, elGetter);
}


/* eslint-enable */
