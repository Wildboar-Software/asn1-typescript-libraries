/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSRANNASCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANNASCause  ::=  OCTET STRING
 * ```
 */
export
type EPSRANNASCause = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EPSRANNASCause: $.ASN1Decoder<EPSRANNASCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANNASCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSRANNASCause (el: _Element): EPSRANNASCause {
    if (!_cached_decoder_for_EPSRANNASCause) { _cached_decoder_for_EPSRANNASCause = $._decodeOctetString; }
    return _cached_decoder_for_EPSRANNASCause(el);
}

let _cached_encoder_for_EPSRANNASCause: $.ASN1Encoder<EPSRANNASCause> | null = null;

/**
 * @summary Encodes a(n) EPSRANNASCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANNASCause, encoded as an ASN.1 Element.
 */
export
function _encode_EPSRANNASCause (value: EPSRANNASCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSRANNASCause) { _cached_encoder_for_EPSRANNASCause = $._encodeOctetString; }
    return _cached_encoder_for_EPSRANNASCause(value, elGetter);
}


/* eslint-enable */
