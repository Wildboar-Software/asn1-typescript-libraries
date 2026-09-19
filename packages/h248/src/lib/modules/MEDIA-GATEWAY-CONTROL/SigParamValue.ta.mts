/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SigParamValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParamValue  ::=  OCTET STRING
 * ```
 */
export
type SigParamValue = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SigParamValue: $.ASN1Decoder<SigParamValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigParamValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SigParamValue (el: _Element): SigParamValue {
    if (!_cached_decoder_for_SigParamValue) { _cached_decoder_for_SigParamValue = $._decodeOctetString; }
    return _cached_decoder_for_SigParamValue(el);
}

let _cached_encoder_for_SigParamValue: $.ASN1Encoder<SigParamValue> | null = null;

/**
 * @summary Encodes a(n) SigParamValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParamValue, encoded as an ASN.1 Element.
 */
export
function _encode_SigParamValue (value: SigParamValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SigParamValue) { _cached_encoder_for_SigParamValue = $._encodeOctetString; }
    return _cached_encoder_for_SigParamValue(value, elGetter);
}


/* eslint-enable */
