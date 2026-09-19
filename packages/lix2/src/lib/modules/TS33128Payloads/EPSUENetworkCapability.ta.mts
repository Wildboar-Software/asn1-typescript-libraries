/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUENetworkCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUENetworkCapability  ::=  OCTET STRING (SIZE(2..13))
 * ```
 */
export
type EPSUENetworkCapability = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EPSUENetworkCapability: $.ASN1Decoder<EPSUENetworkCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSUENetworkCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSUENetworkCapability (el: _Element): EPSUENetworkCapability {
    if (!_cached_decoder_for_EPSUENetworkCapability) { _cached_decoder_for_EPSUENetworkCapability = $._decodeOctetString; }
    return _cached_decoder_for_EPSUENetworkCapability(el);
}

let _cached_encoder_for_EPSUENetworkCapability: $.ASN1Encoder<EPSUENetworkCapability> | null = null;

/**
 * @summary Encodes a(n) EPSUENetworkCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSUENetworkCapability, encoded as an ASN.1 Element.
 */
export
function _encode_EPSUENetworkCapability (value: EPSUENetworkCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSUENetworkCapability) { _cached_encoder_for_EPSUENetworkCapability = $._encodeOctetString; }
    return _cached_encoder_for_EPSUENetworkCapability(value, elGetter);
}


/* eslint-enable */
