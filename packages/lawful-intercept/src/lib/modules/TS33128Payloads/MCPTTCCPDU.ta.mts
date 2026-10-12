/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCPTTCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCPTTCCPDU  ::=  OCTET STRING
 * ```
 */
export
type MCPTTCCPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MCPTTCCPDU: $.ASN1Decoder<MCPTTCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCPTTCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCPTTCCPDU (el: _Element): MCPTTCCPDU {
    if (!_cached_decoder_for_MCPTTCCPDU) { _cached_decoder_for_MCPTTCCPDU = $._decodeOctetString; }
    return _cached_decoder_for_MCPTTCCPDU(el);
}

let _cached_encoder_for_MCPTTCCPDU: $.ASN1Encoder<MCPTTCCPDU> | null = null;

/**
 * @summary Encodes a(n) MCPTTCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCPTTCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_MCPTTCCPDU (value: MCPTTCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCPTTCCPDU) { _cached_encoder_for_MCPTTCCPDU = $._encodeOctetString; }
    return _cached_encoder_for_MCPTTCCPDU(value, elGetter);
}


/* eslint-enable */
