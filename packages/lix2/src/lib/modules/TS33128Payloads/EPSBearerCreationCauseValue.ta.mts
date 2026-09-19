/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerCreationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerCreationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerCreationCauseValue = INTEGER;

let _cached_decoder_for_EPSBearerCreationCauseValue: $.ASN1Decoder<EPSBearerCreationCauseValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerCreationCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerCreationCauseValue (el: _Element): EPSBearerCreationCauseValue {
    if (!_cached_decoder_for_EPSBearerCreationCauseValue) { _cached_decoder_for_EPSBearerCreationCauseValue = $._decodeInteger; }
    return _cached_decoder_for_EPSBearerCreationCauseValue(el);
}

let _cached_encoder_for_EPSBearerCreationCauseValue: $.ASN1Encoder<EPSBearerCreationCauseValue> | null = null;

/**
 * @summary Encodes a(n) EPSBearerCreationCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerCreationCauseValue, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerCreationCauseValue (value: EPSBearerCreationCauseValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerCreationCauseValue) { _cached_encoder_for_EPSBearerCreationCauseValue = $._encodeInteger; }
    return _cached_encoder_for_EPSBearerCreationCauseValue(value, elGetter);
}


/* eslint-enable */
