/* eslint-disable */
import {
    ASN1Element as _Element,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SDP_Media_Description
 * @description
 *
 * Attribute lines of one SDP media component (clause 6.1.3.3). For an IMS
 * data channel these include a=dcmap and a=3gpp-req-app (clause 5.1.15).
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.47.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDP-Media-Description  ::=  SEQUENCE  OF
 *    GraphicString
 * ```
 */
export
type SDP_Media_Description = GraphicString[]; // SequenceOfType

let _cached_decoder_for_SDP_Media_Description: $.ASN1Decoder<SDP_Media_Description> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDP_Media_Description
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDP_Media_Description (el: _Element): SDP_Media_Description {
    if (!_cached_decoder_for_SDP_Media_Description) { _cached_decoder_for_SDP_Media_Description = $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_SDP_Media_Description(el);
}

let _cached_encoder_for_SDP_Media_Description: $.ASN1Encoder<SDP_Media_Description> | null = null;

/**
 * @summary Encodes a(n) SDP_Media_Description into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDP_Media_Description, encoded as an ASN.1 Element.
 */
export
function _encode_SDP_Media_Description (value: SDP_Media_Description, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDP_Media_Description) { _cached_encoder_for_SDP_Media_Description = $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_SDP_Media_Description(value, elGetter);
}


/* eslint-enable */
