/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUCI  ::=  OCTET STRING (SIZE(8..3008))
 * ```
 */
export
type SUCI = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SUCI: $.ASN1Decoder<SUCI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUCI (el: _Element): SUCI {
    if (!_cached_decoder_for_SUCI) { _cached_decoder_for_SUCI = $._decodeOctetString; }
    return _cached_decoder_for_SUCI(el);
}

let _cached_encoder_for_SUCI: $.ASN1Encoder<SUCI> | null = null;

/**
 * @summary Encodes a(n) SUCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUCI, encoded as an ASN.1 Element.
 */
export
function _encode_SUCI (value: SUCI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUCI) { _cached_encoder_for_SUCI = $._encodeOctetString; }
    return _cached_encoder_for_SUCI(value, elGetter);
}


/* eslint-enable */
