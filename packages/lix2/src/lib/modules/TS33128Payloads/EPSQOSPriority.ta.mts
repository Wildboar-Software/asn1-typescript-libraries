/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSQOSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSQOSPriority  ::=  INTEGER (1..15)
 * ```
 */
export
type EPSQOSPriority = INTEGER;

let _cached_decoder_for_EPSQOSPriority: $.ASN1Decoder<EPSQOSPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSQOSPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSQOSPriority (el: _Element): EPSQOSPriority {
    if (!_cached_decoder_for_EPSQOSPriority) { _cached_decoder_for_EPSQOSPriority = $._decodeInteger; }
    return _cached_decoder_for_EPSQOSPriority(el);
}

let _cached_encoder_for_EPSQOSPriority: $.ASN1Encoder<EPSQOSPriority> | null = null;

/**
 * @summary Encodes a(n) EPSQOSPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSQOSPriority, encoded as an ASN.1 Element.
 */
export
function _encode_EPSQOSPriority (value: EPSQOSPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSQOSPriority) { _cached_encoder_for_EPSQOSPriority = $._encodeInteger; }
    return _cached_encoder_for_EPSQOSPriority(value, elGetter);
}


/* eslint-enable */
