/* eslint-disable */
import {
    SET,
    GraphicString,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalTroubleInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalTroubleInfoList  ::=  SET OF GraphicString
 * ```
 */
export
type AdditionalTroubleInfoList = GraphicString[]; // SetOfType

let _cached_decoder_for_AdditionalTroubleInfoList: $.ASN1Decoder<AdditionalTroubleInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalTroubleInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalTroubleInfoList (el: _Element): AdditionalTroubleInfoList {
    if (!_cached_decoder_for_AdditionalTroubleInfoList) { _cached_decoder_for_AdditionalTroubleInfoList = $._decodeSetOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_AdditionalTroubleInfoList(el);
}

let _cached_encoder_for_AdditionalTroubleInfoList: $.ASN1Encoder<AdditionalTroubleInfoList> | null = null;

/**
 * @summary Encodes a(n) AdditionalTroubleInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalTroubleInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalTroubleInfoList (value: AdditionalTroubleInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalTroubleInfoList) { _cached_encoder_for_AdditionalTroubleInfoList = $._encodeSetOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_AdditionalTroubleInfoList(value, elGetter);
}


/* eslint-enable */
