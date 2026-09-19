/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AmpTestReqInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpTestReqInd  ::=  INTEGER(0..127)
 * ```
 */
export
type AmpTestReqInd = INTEGER;

let _cached_decoder_for_AmpTestReqInd: $.ASN1Decoder<AmpTestReqInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpTestReqInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpTestReqInd (el: _Element): AmpTestReqInd {
    if (!_cached_decoder_for_AmpTestReqInd) { _cached_decoder_for_AmpTestReqInd = $._decodeInteger; }
    return _cached_decoder_for_AmpTestReqInd(el);
}

let _cached_encoder_for_AmpTestReqInd: $.ASN1Encoder<AmpTestReqInd> | null = null;

/**
 * @summary Encodes a(n) AmpTestReqInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpTestReqInd, encoded as an ASN.1 Element.
 */
export
function _encode_AmpTestReqInd (value: AmpTestReqInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpTestReqInd) { _cached_encoder_for_AmpTestReqInd = $._encodeInteger; }
    return _cached_encoder_for_AmpTestReqInd(value, elGetter);
}


/* eslint-enable */
