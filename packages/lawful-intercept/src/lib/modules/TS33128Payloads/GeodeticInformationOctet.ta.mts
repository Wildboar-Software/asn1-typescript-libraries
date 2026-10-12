/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeodeticInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformationOctet  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformationOctet = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GeodeticInformationOctet: $.ASN1Decoder<GeodeticInformationOctet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeodeticInformationOctet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeodeticInformationOctet (el: _Element): GeodeticInformationOctet {
    if (!_cached_decoder_for_GeodeticInformationOctet) { _cached_decoder_for_GeodeticInformationOctet = $._decodeOctetString; }
    return _cached_decoder_for_GeodeticInformationOctet(el);
}

let _cached_encoder_for_GeodeticInformationOctet: $.ASN1Encoder<GeodeticInformationOctet> | null = null;

/**
 * @summary Encodes a(n) GeodeticInformationOctet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeodeticInformationOctet, encoded as an ASN.1 Element.
 */
export
function _encode_GeodeticInformationOctet (value: GeodeticInformationOctet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeodeticInformationOctet) { _cached_encoder_for_GeodeticInformationOctet = $._encodeOctetString; }
    return _cached_encoder_for_GeodeticInformationOctet(value, elGetter);
}


/* eslint-enable */
