/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CarrierFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierFormat  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type CarrierFormat = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CarrierFormat: $.ASN1Decoder<CarrierFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CarrierFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CarrierFormat (el: _Element): CarrierFormat {
    if (!_cached_decoder_for_CarrierFormat) { _cached_decoder_for_CarrierFormat = $._decodeOctetString; }
    return _cached_decoder_for_CarrierFormat(el);
}

let _cached_encoder_for_CarrierFormat: $.ASN1Encoder<CarrierFormat> | null = null;

/**
 * @summary Encodes a(n) CarrierFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CarrierFormat, encoded as an ASN.1 Element.
 */
export
function _encode_CarrierFormat (value: CarrierFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CarrierFormat) { _cached_encoder_for_CarrierFormat = $._encodeOctetString; }
    return _cached_encoder_for_CarrierFormat(value, elGetter);
}


/* eslint-enable */
