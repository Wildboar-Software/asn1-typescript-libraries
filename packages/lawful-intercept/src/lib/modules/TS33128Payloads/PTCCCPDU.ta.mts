/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCCCPDU  ::=  OCTET STRING
 * ```
 */
export
type PTCCCPDU = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PTCCCPDU: $.ASN1Decoder<PTCCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCCCPDU (el: _Element): PTCCCPDU {
    if (!_cached_decoder_for_PTCCCPDU) { _cached_decoder_for_PTCCCPDU = $._decodeOctetString; }
    return _cached_decoder_for_PTCCCPDU(el);
}

let _cached_encoder_for_PTCCCPDU: $.ASN1Encoder<PTCCCPDU> | null = null;

/**
 * @summary Encodes a(n) PTCCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_PTCCCPDU (value: PTCCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCCCPDU) { _cached_encoder_for_PTCCCPDU = $._encodeOctetString; }
    return _cached_encoder_for_PTCCCPDU(value, elGetter);
}


/* eslint-enable */
