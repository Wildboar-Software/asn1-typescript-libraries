/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUserLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUserLocationInformation  ::=  OCTET STRING
 * ```
 */
export
type EPSUserLocationInformation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EPSUserLocationInformation: $.ASN1Decoder<EPSUserLocationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSUserLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSUserLocationInformation (el: _Element): EPSUserLocationInformation {
    if (!_cached_decoder_for_EPSUserLocationInformation) { _cached_decoder_for_EPSUserLocationInformation = $._decodeOctetString; }
    return _cached_decoder_for_EPSUserLocationInformation(el);
}

let _cached_encoder_for_EPSUserLocationInformation: $.ASN1Encoder<EPSUserLocationInformation> | null = null;

/**
 * @summary Encodes a(n) EPSUserLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSUserLocationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_EPSUserLocationInformation (value: EPSUserLocationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSUserLocationInformation) { _cached_encoder_for_EPSUserLocationInformation = $._encodeOctetString; }
    return _cached_encoder_for_EPSUserLocationInformation(value, elGetter);
}


/* eslint-enable */
