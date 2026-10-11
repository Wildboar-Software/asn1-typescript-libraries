/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGGUTI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGGUTI  ::=  OCTET STRING (SIZE(10))
 * ```
 */
export
type FiveGGUTI = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FiveGGUTI: $.ASN1Decoder<FiveGGUTI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGGUTI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGGUTI (el: _Element): FiveGGUTI {
    if (!_cached_decoder_for_FiveGGUTI) { _cached_decoder_for_FiveGGUTI = $._decodeOctetString; }
    return _cached_decoder_for_FiveGGUTI(el);
}

let _cached_encoder_for_FiveGGUTI: $.ASN1Encoder<FiveGGUTI> | null = null;

/**
 * @summary Encodes a(n) FiveGGUTI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGGUTI, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGGUTI (value: FiveGGUTI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGGUTI) { _cached_encoder_for_FiveGGUTI = $._encodeOctetString; }
    return _cached_encoder_for_FiveGGUTI(value, elGetter);
}


/* eslint-enable */
