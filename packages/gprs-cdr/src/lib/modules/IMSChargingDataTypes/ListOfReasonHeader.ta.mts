/* eslint-disable */
import {
    ASN1Element as _Element,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ListOfReasonHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListOfReasonHeader  ::=  SEQUENCE  OF
 *    GraphicString
 * ```
 */
export
type ListOfReasonHeader = GraphicString[]; // SequenceOfType

let _cached_decoder_for_ListOfReasonHeader: $.ASN1Decoder<ListOfReasonHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListOfReasonHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListOfReasonHeader (el: _Element): ListOfReasonHeader {
    if (!_cached_decoder_for_ListOfReasonHeader) { _cached_decoder_for_ListOfReasonHeader = $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_ListOfReasonHeader(el);
}

let _cached_encoder_for_ListOfReasonHeader: $.ASN1Encoder<ListOfReasonHeader> | null = null;

/**
 * @summary Encodes a(n) ListOfReasonHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfReasonHeader, encoded as an ASN.1 Element.
 */
export
function _encode_ListOfReasonHeader (value: ListOfReasonHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListOfReasonHeader) { _cached_encoder_for_ListOfReasonHeader = $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_ListOfReasonHeader(value, elGetter);
}


/* eslint-enable */
