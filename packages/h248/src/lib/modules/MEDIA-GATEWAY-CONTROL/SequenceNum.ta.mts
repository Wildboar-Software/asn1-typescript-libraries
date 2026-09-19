/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SequenceNum
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceNum  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type SequenceNum = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SequenceNum: $.ASN1Decoder<SequenceNum> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SequenceNum
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SequenceNum (el: _Element): SequenceNum {
    if (!_cached_decoder_for_SequenceNum) { _cached_decoder_for_SequenceNum = $._decodeOctetString; }
    return _cached_decoder_for_SequenceNum(el);
}

let _cached_encoder_for_SequenceNum: $.ASN1Encoder<SequenceNum> | null = null;

/**
 * @summary Encodes a(n) SequenceNum into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceNum, encoded as an ASN.1 Element.
 */
export
function _encode_SequenceNum (value: SequenceNum, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SequenceNum) { _cached_encoder_for_SequenceNum = $._encodeOctetString; }
    return _cached_encoder_for_SequenceNum(value, elGetter);
}


/* eslint-enable */
