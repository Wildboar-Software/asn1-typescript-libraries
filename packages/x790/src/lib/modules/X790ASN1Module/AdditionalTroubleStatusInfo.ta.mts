/* eslint-disable */
import {
    SET,
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalTroubleStatusInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalTroubleStatusInfo  ::=  SET OF GraphicString(SIZE (0..256))
 * ```
 */
export
type AdditionalTroubleStatusInfo = GraphicString[]; // SetOfType

let _cached_decoder_for_AdditionalTroubleStatusInfo: $.ASN1Decoder<AdditionalTroubleStatusInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalTroubleStatusInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalTroubleStatusInfo (el: _Element): AdditionalTroubleStatusInfo {
    if (!_cached_decoder_for_AdditionalTroubleStatusInfo) { _cached_decoder_for_AdditionalTroubleStatusInfo = $._decodeSetOf<GraphicString>(() => $._decodeGraphicString); }
    const value = _cached_decoder_for_AdditionalTroubleStatusInfo(el);
    if (value.some((s) => s.length > 256)) {
        throw new ASN1SizeError("AdditionalTroubleStatusInfo violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_AdditionalTroubleStatusInfo: $.ASN1Encoder<AdditionalTroubleStatusInfo> | null = null;

/**
 * @summary Encodes a(n) AdditionalTroubleStatusInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalTroubleStatusInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalTroubleStatusInfo (value: AdditionalTroubleStatusInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalTroubleStatusInfo) { _cached_encoder_for_AdditionalTroubleStatusInfo = $._encodeSetOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_AdditionalTroubleStatusInfo(value, elGetter);
}


/* eslint-enable */
