/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AmpCLogSeqNo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpCLogSeqNo  ::=  INTEGER(0..32767)
 * ```
 */
export
type AmpCLogSeqNo = INTEGER;

let _cached_decoder_for_AmpCLogSeqNo: $.ASN1Decoder<AmpCLogSeqNo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpCLogSeqNo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpCLogSeqNo (el: _Element): AmpCLogSeqNo {
    if (!_cached_decoder_for_AmpCLogSeqNo) { _cached_decoder_for_AmpCLogSeqNo = $._decodeInteger; }
    return _cached_decoder_for_AmpCLogSeqNo(el);
}

let _cached_encoder_for_AmpCLogSeqNo: $.ASN1Encoder<AmpCLogSeqNo> | null = null;

/**
 * @summary Encodes a(n) AmpCLogSeqNo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpCLogSeqNo, encoded as an ASN.1 Element.
 */
export
function _encode_AmpCLogSeqNo (value: AmpCLogSeqNo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpCLogSeqNo) { _cached_encoder_for_AmpCLogSeqNo = $._encodeInteger; }
    return _cached_encoder_for_AmpCLogSeqNo(value, elGetter);
}


/* eslint-enable */
