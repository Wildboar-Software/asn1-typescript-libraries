/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubaddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubaddressInformation  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export
type SubaddressInformation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SubaddressInformation: $.ASN1Decoder<SubaddressInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubaddressInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubaddressInformation (el: _Element): SubaddressInformation {
    if (!_cached_decoder_for_SubaddressInformation) { _cached_decoder_for_SubaddressInformation = $._decodeOctetString; }
    return _cached_decoder_for_SubaddressInformation(el);
}

let _cached_encoder_for_SubaddressInformation: $.ASN1Encoder<SubaddressInformation> | null = null;

/**
 * @summary Encodes a(n) SubaddressInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubaddressInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SubaddressInformation (value: SubaddressInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubaddressInformation) { _cached_encoder_for_SubaddressInformation = $._encodeOctetString; }
    return _cached_encoder_for_SubaddressInformation(value, elGetter);
}


/* eslint-enable */
