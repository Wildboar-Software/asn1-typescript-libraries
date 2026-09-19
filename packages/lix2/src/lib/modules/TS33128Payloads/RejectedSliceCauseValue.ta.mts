/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectedSliceCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectedSliceCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type RejectedSliceCauseValue = INTEGER;

let _cached_decoder_for_RejectedSliceCauseValue: $.ASN1Decoder<RejectedSliceCauseValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectedSliceCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectedSliceCauseValue (el: _Element): RejectedSliceCauseValue {
    if (!_cached_decoder_for_RejectedSliceCauseValue) { _cached_decoder_for_RejectedSliceCauseValue = $._decodeInteger; }
    return _cached_decoder_for_RejectedSliceCauseValue(el);
}

let _cached_encoder_for_RejectedSliceCauseValue: $.ASN1Encoder<RejectedSliceCauseValue> | null = null;

/**
 * @summary Encodes a(n) RejectedSliceCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectedSliceCauseValue, encoded as an ASN.1 Element.
 */
export
function _encode_RejectedSliceCauseValue (value: RejectedSliceCauseValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectedSliceCauseValue) { _cached_encoder_for_RejectedSliceCauseValue = $._encodeInteger; }
    return _cached_encoder_for_RejectedSliceCauseValue(value, elGetter);
}


/* eslint-enable */
