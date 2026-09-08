/* eslint-disable */
import {
    SET,
    GraphicString,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TroubleReportNumberList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportNumberList  ::=  SET OF GraphicString(SIZE (0..64))
 * ```
 */
export
type TroubleReportNumberList = GraphicString[]; // SetOfType

let _cached_decoder_for_TroubleReportNumberList: $.ASN1Decoder<TroubleReportNumberList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportNumberList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TroubleReportNumberList (el: _Element): TroubleReportNumberList {
    if (!_cached_decoder_for_TroubleReportNumberList) { _cached_decoder_for_TroubleReportNumberList = $._decodeSetOf<GraphicString>(() => $._decodeGraphicString); }
    const value = _cached_decoder_for_TroubleReportNumberList(el);
    if (value.some((s) => s.length > 64)) {
        throw new ASN1SizeError("TroubleReportNumberList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TroubleReportNumberList: $.ASN1Encoder<TroubleReportNumberList> | null = null;

/**
 * @summary Encodes a(n) TroubleReportNumberList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportNumberList, encoded as an ASN.1 Element.
 */
export
function _encode_TroubleReportNumberList (value: TroubleReportNumberList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TroubleReportNumberList) { _cached_encoder_for_TroubleReportNumberList = $._encodeSetOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_TroubleReportNumberList(value, elGetter);
}


/* eslint-enable */
