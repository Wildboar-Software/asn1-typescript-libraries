/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary YesNo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * YesNo ::=  BOOLEAN
 * ```
 */
export
type YesNo = BOOLEAN; // BooleanType

let _cached_decoder_for_YesNo: $.ASN1Decoder<YesNo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) YesNo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_YesNo (el: _Element): YesNo {
    if (!_cached_decoder_for_YesNo) { _cached_decoder_for_YesNo = $._decodeBoolean; }
    return _cached_decoder_for_YesNo(el);
}

let _cached_encoder_for_YesNo: $.ASN1Encoder<YesNo> | null = null;

/**
 * @summary Encodes a(n) YesNo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The YesNo, encoded as an ASN.1 Element.
 */
export
function _encode_YesNo (value: YesNo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_YesNo) { _cached_encoder_for_YesNo = $._encodeBoolean; }
    return _cached_encoder_for_YesNo(value, elGetter);
}


/* eslint-enable */
