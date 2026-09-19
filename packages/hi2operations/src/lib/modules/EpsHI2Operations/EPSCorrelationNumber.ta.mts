/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSCorrelationNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCorrelationNumber  ::=  OCTET STRING
 * ```
 */
export
type EPSCorrelationNumber = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EPSCorrelationNumber: $.ASN1Decoder<EPSCorrelationNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSCorrelationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSCorrelationNumber (el: _Element): EPSCorrelationNumber {
    if (!_cached_decoder_for_EPSCorrelationNumber) { _cached_decoder_for_EPSCorrelationNumber = $._decodeOctetString; }
    return _cached_decoder_for_EPSCorrelationNumber(el);
}

let _cached_encoder_for_EPSCorrelationNumber: $.ASN1Encoder<EPSCorrelationNumber> | null = null;

/**
 * @summary Encodes a(n) EPSCorrelationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSCorrelationNumber, encoded as an ASN.1 Element.
 */
export
function _encode_EPSCorrelationNumber (value: EPSCorrelationNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSCorrelationNumber) { _cached_encoder_for_EPSCorrelationNumber = $._encodeOctetString; }
    return _cached_encoder_for_EPSCorrelationNumber(value, elGetter);
}


/* eslint-enable */
