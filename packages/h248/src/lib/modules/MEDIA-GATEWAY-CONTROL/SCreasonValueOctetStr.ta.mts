/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCreasonValueOctetStr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCreasonValueOctetStr  ::=  OCTET STRING
 * ```
 */
export
type SCreasonValueOctetStr = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SCreasonValueOctetStr: $.ASN1Decoder<SCreasonValueOctetStr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCreasonValueOctetStr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCreasonValueOctetStr (el: _Element): SCreasonValueOctetStr {
    if (!_cached_decoder_for_SCreasonValueOctetStr) { _cached_decoder_for_SCreasonValueOctetStr = $._decodeOctetString; }
    return _cached_decoder_for_SCreasonValueOctetStr(el);
}

let _cached_encoder_for_SCreasonValueOctetStr: $.ASN1Encoder<SCreasonValueOctetStr> | null = null;

/**
 * @summary Encodes a(n) SCreasonValueOctetStr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCreasonValueOctetStr, encoded as an ASN.1 Element.
 */
export
function _encode_SCreasonValueOctetStr (value: SCreasonValueOctetStr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCreasonValueOctetStr) { _cached_encoder_for_SCreasonValueOctetStr = $._encodeOctetString; }
    return _cached_encoder_for_SCreasonValueOctetStr(value, elGetter);
}


/* eslint-enable */
