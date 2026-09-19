/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerDeletionCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerDeletionCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerDeletionCauseValue = INTEGER;

let _cached_decoder_for_EPSBearerDeletionCauseValue: $.ASN1Decoder<EPSBearerDeletionCauseValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerDeletionCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerDeletionCauseValue (el: _Element): EPSBearerDeletionCauseValue {
    if (!_cached_decoder_for_EPSBearerDeletionCauseValue) { _cached_decoder_for_EPSBearerDeletionCauseValue = $._decodeInteger; }
    return _cached_decoder_for_EPSBearerDeletionCauseValue(el);
}

let _cached_encoder_for_EPSBearerDeletionCauseValue: $.ASN1Encoder<EPSBearerDeletionCauseValue> | null = null;

/**
 * @summary Encodes a(n) EPSBearerDeletionCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerDeletionCauseValue, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerDeletionCauseValue (value: EPSBearerDeletionCauseValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerDeletionCauseValue) { _cached_encoder_for_EPSBearerDeletionCauseValue = $._encodeInteger; }
    return _cached_encoder_for_EPSBearerDeletionCauseValue(value, elGetter);
}


/* eslint-enable */
