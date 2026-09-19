/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerID  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerID = INTEGER;

let _cached_decoder_for_EPSBearerID: $.ASN1Decoder<EPSBearerID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerID (el: _Element): EPSBearerID {
    if (!_cached_decoder_for_EPSBearerID) { _cached_decoder_for_EPSBearerID = $._decodeInteger; }
    return _cached_decoder_for_EPSBearerID(el);
}

let _cached_encoder_for_EPSBearerID: $.ASN1Encoder<EPSBearerID> | null = null;

/**
 * @summary Encodes a(n) EPSBearerID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerID, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerID (value: EPSBearerID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerID) { _cached_encoder_for_EPSBearerID = $._encodeInteger; }
    return _cached_encoder_for_EPSBearerID(value, elGetter);
}


/* eslint-enable */
