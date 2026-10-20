/* eslint-disable */
import {
    ASN1Element as _Element,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FEIdentifierList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FEIdentifierList  ::=  SEQUENCE  OF
 *    GraphicString
 * ```
 */
export
type FEIdentifierList = GraphicString[]; // SequenceOfType

let _cached_decoder_for_FEIdentifierList: $.ASN1Decoder<FEIdentifierList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FEIdentifierList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FEIdentifierList (el: _Element): FEIdentifierList {
    if (!_cached_decoder_for_FEIdentifierList) { _cached_decoder_for_FEIdentifierList = $._decodeSequenceOf<GraphicString>(() => $._decodeGraphicString); }
    return _cached_decoder_for_FEIdentifierList(el);
}

let _cached_encoder_for_FEIdentifierList: $.ASN1Encoder<FEIdentifierList> | null = null;

/**
 * @summary Encodes a(n) FEIdentifierList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FEIdentifierList, encoded as an ASN.1 Element.
 */
export
function _encode_FEIdentifierList (value: FEIdentifierList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FEIdentifierList) { _cached_encoder_for_FEIdentifierList = $._encodeSequenceOf<GraphicString>(() => $._encodeGraphicString, $.BER); }
    return _cached_encoder_for_FEIdentifierList(value, elGetter);
}


/* eslint-enable */
