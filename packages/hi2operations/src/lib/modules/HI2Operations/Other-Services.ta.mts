/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Other_Services
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Other-Services  ::=  SET SIZE (1..50) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type Other_Services = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_Other_Services: $.ASN1Decoder<Other_Services> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Other_Services
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Other_Services (el: _Element): Other_Services {
    if (!_cached_decoder_for_Other_Services) { _cached_decoder_for_Other_Services = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_Other_Services(el);
}

let _cached_encoder_for_Other_Services: $.ASN1Encoder<Other_Services> | null = null;

/**
 * @summary Encodes a(n) Other_Services into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Other_Services, encoded as an ASN.1 Element.
 */
export
function _encode_Other_Services (value: Other_Services, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Other_Services) { _cached_encoder_for_Other_Services = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Other_Services(value, elGetter);
}


/* eslint-enable */
