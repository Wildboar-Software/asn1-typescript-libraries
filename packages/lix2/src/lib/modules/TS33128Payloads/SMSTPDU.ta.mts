/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTPDU  ::=  OCTET STRING (SIZE(1..270))
 * ```
 */
export
type SMSTPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SMSTPDU: $.ASN1Decoder<SMSTPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSTPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSTPDU (el: _Element): SMSTPDU {
    if (!_cached_decoder_for_SMSTPDU) { _cached_decoder_for_SMSTPDU = $._decodeOctetString; }
    return _cached_decoder_for_SMSTPDU(el);
}

let _cached_encoder_for_SMSTPDU: $.ASN1Encoder<SMSTPDU> | null = null;

/**
 * @summary Encodes a(n) SMSTPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSTPDU, encoded as an ASN.1 Element.
 */
export
function _encode_SMSTPDU (value: SMSTPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSTPDU) { _cached_encoder_for_SMSTPDU = $._encodeOctetString; }
    return _cached_encoder_for_SMSTPDU(value, elGetter);
}


/* eslint-enable */
