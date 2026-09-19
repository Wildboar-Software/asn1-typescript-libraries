/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerModificationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerModificationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerModificationCauseValue = INTEGER;

let _cached_decoder_for_EPSBearerModificationCauseValue: $.ASN1Decoder<EPSBearerModificationCauseValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerModificationCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerModificationCauseValue (el: _Element): EPSBearerModificationCauseValue {
    if (!_cached_decoder_for_EPSBearerModificationCauseValue) { _cached_decoder_for_EPSBearerModificationCauseValue = $._decodeInteger; }
    return _cached_decoder_for_EPSBearerModificationCauseValue(el);
}

let _cached_encoder_for_EPSBearerModificationCauseValue: $.ASN1Encoder<EPSBearerModificationCauseValue> | null = null;

/**
 * @summary Encodes a(n) EPSBearerModificationCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerModificationCauseValue, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerModificationCauseValue (value: EPSBearerModificationCauseValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerModificationCauseValue) { _cached_encoder_for_EPSBearerModificationCauseValue = $._encodeInteger; }
    return _cached_encoder_for_EPSBearerModificationCauseValue(value, elGetter);
}


/* eslint-enable */
