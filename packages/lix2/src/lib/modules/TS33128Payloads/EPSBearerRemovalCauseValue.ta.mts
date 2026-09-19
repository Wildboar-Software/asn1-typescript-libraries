/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerRemovalCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerRemovalCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerRemovalCauseValue = INTEGER;

let _cached_decoder_for_EPSBearerRemovalCauseValue: $.ASN1Decoder<EPSBearerRemovalCauseValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerRemovalCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerRemovalCauseValue (el: _Element): EPSBearerRemovalCauseValue {
    if (!_cached_decoder_for_EPSBearerRemovalCauseValue) { _cached_decoder_for_EPSBearerRemovalCauseValue = $._decodeInteger; }
    return _cached_decoder_for_EPSBearerRemovalCauseValue(el);
}

let _cached_encoder_for_EPSBearerRemovalCauseValue: $.ASN1Encoder<EPSBearerRemovalCauseValue> | null = null;

/**
 * @summary Encodes a(n) EPSBearerRemovalCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerRemovalCauseValue, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerRemovalCauseValue (value: EPSBearerRemovalCauseValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerRemovalCauseValue) { _cached_encoder_for_EPSBearerRemovalCauseValue = $._encodeInteger; }
    return _cached_encoder_for_EPSBearerRemovalCauseValue(value, elGetter);
}


/* eslint-enable */
