/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SigParamValueV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParamValueV1  ::=  OCTET STRING
 * ```
 */
export
type SigParamValueV1 = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SigParamValueV1: $.ASN1Decoder<SigParamValueV1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigParamValueV1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SigParamValueV1 (el: _Element): SigParamValueV1 {
    if (!_cached_decoder_for_SigParamValueV1) { _cached_decoder_for_SigParamValueV1 = $._decodeOctetString; }
    return _cached_decoder_for_SigParamValueV1(el);
}

let _cached_encoder_for_SigParamValueV1: $.ASN1Encoder<SigParamValueV1> | null = null;

/**
 * @summary Encodes a(n) SigParamValueV1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParamValueV1, encoded as an ASN.1 Element.
 */
export
function _encode_SigParamValueV1 (value: SigParamValueV1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SigParamValueV1) { _cached_encoder_for_SigParamValueV1 = $._encodeOctetString; }
    return _cached_encoder_for_SigParamValueV1(value, elGetter);
}


/* eslint-enable */
