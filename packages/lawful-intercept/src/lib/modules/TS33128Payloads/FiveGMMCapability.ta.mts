/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCapability  ::=  OCTET STRING (SIZE(1..13))
 * ```
 */
export
type FiveGMMCapability = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FiveGMMCapability: $.ASN1Decoder<FiveGMMCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMMCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGMMCapability (el: _Element): FiveGMMCapability {
    if (!_cached_decoder_for_FiveGMMCapability) { _cached_decoder_for_FiveGMMCapability = $._decodeOctetString; }
    return _cached_decoder_for_FiveGMMCapability(el);
}

let _cached_encoder_for_FiveGMMCapability: $.ASN1Encoder<FiveGMMCapability> | null = null;

/**
 * @summary Encodes a(n) FiveGMMCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMMCapability, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGMMCapability (value: FiveGMMCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGMMCapability) { _cached_encoder_for_FiveGMMCapability = $._encodeOctetString; }
    return _cached_encoder_for_FiveGMMCapability(value, elGetter);
}


/* eslint-enable */
