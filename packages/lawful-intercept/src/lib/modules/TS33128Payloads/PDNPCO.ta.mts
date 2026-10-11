/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNPCO
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNPCO  ::=  OCTET STRING
 * ```
 */
export
type PDNPCO = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PDNPCO: $.ASN1Decoder<PDNPCO> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDNPCO
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDNPCO (el: _Element): PDNPCO {
    if (!_cached_decoder_for_PDNPCO) { _cached_decoder_for_PDNPCO = $._decodeOctetString; }
    return _cached_decoder_for_PDNPCO(el);
}

let _cached_encoder_for_PDNPCO: $.ASN1Encoder<PDNPCO> | null = null;

/**
 * @summary Encodes a(n) PDNPCO into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNPCO, encoded as an ASN.1 Element.
 */
export
function _encode_PDNPCO (value: PDNPCO, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDNPCO) { _cached_encoder_for_PDNPCO = $._encodeOctetString; }
    return _cached_encoder_for_PDNPCO(value, elGetter);
}


/* eslint-enable */
