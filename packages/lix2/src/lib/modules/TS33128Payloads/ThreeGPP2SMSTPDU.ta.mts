/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ThreeGPP2SMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ThreeGPP2SMSTPDU  ::=  OCTET STRING
 * ```
 */
export
type ThreeGPP2SMSTPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ThreeGPP2SMSTPDU: $.ASN1Decoder<ThreeGPP2SMSTPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ThreeGPP2SMSTPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ThreeGPP2SMSTPDU (el: _Element): ThreeGPP2SMSTPDU {
    if (!_cached_decoder_for_ThreeGPP2SMSTPDU) { _cached_decoder_for_ThreeGPP2SMSTPDU = $._decodeOctetString; }
    return _cached_decoder_for_ThreeGPP2SMSTPDU(el);
}

let _cached_encoder_for_ThreeGPP2SMSTPDU: $.ASN1Encoder<ThreeGPP2SMSTPDU> | null = null;

/**
 * @summary Encodes a(n) ThreeGPP2SMSTPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreeGPP2SMSTPDU, encoded as an ASN.1 Element.
 */
export
function _encode_ThreeGPP2SMSTPDU (value: ThreeGPP2SMSTPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ThreeGPP2SMSTPDU) { _cached_encoder_for_ThreeGPP2SMSTPDU = $._encodeOctetString; }
    return _cached_encoder_for_ThreeGPP2SMSTPDU(value, elGetter);
}


/* eslint-enable */
