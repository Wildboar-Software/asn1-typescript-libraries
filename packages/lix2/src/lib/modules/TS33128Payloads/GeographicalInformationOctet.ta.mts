/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalInformationOctet  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type GeographicalInformationOctet = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GeographicalInformationOctet: $.ASN1Decoder<GeographicalInformationOctet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicalInformationOctet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeographicalInformationOctet (el: _Element): GeographicalInformationOctet {
    if (!_cached_decoder_for_GeographicalInformationOctet) { _cached_decoder_for_GeographicalInformationOctet = $._decodeOctetString; }
    return _cached_decoder_for_GeographicalInformationOctet(el);
}

let _cached_encoder_for_GeographicalInformationOctet: $.ASN1Encoder<GeographicalInformationOctet> | null = null;

/**
 * @summary Encodes a(n) GeographicalInformationOctet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalInformationOctet, encoded as an ASN.1 Element.
 */
export
function _encode_GeographicalInformationOctet (value: GeographicalInformationOctet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeographicalInformationOctet) { _cached_encoder_for_GeographicalInformationOctet = $._encodeOctetString; }
    return _cached_encoder_for_GeographicalInformationOctet(value, elGetter);
}


/* eslint-enable */
