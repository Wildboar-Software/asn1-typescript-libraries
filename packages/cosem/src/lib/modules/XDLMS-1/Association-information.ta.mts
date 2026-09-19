/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Association_information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Association-information  ::=  OCTET STRING
 * ```
 */
export
type Association_information = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Association_information: $.ASN1Decoder<Association_information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Association_information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Association_information (el: _Element): Association_information {
    if (!_cached_decoder_for_Association_information) { _cached_decoder_for_Association_information = $._decodeOctetString; }
    return _cached_decoder_for_Association_information(el);
}

let _cached_encoder_for_Association_information: $.ASN1Encoder<Association_information> | null = null;

/**
 * @summary Encodes a(n) Association_information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_information, encoded as an ASN.1 Element.
 */
export
function _encode_Association_information (value: Association_information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Association_information) { _cached_encoder_for_Association_information = $._encodeOctetString; }
    return _cached_encoder_for_Association_information(value, elGetter);
}


/* eslint-enable */
