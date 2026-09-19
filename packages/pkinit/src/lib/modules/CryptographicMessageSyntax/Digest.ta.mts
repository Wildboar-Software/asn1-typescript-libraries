/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Digest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Digest  ::=  OCTET STRING
 * ```
 */
export
type Digest = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Digest: $.ASN1Decoder<Digest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Digest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Digest (el: _Element): Digest {
    if (!_cached_decoder_for_Digest) { _cached_decoder_for_Digest = $._decodeOctetString; }
    return _cached_decoder_for_Digest(el);
}

let _cached_encoder_for_Digest: $.ASN1Encoder<Digest> | null = null;

/**
 * @summary Encodes a(n) Digest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Digest, encoded as an ASN.1 Element.
 */
export
function _encode_Digest (value: Digest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Digest) { _cached_encoder_for_Digest = $._encodeOctetString; }
    return _cached_encoder_for_Digest(value, elGetter);
}


/* eslint-enable */
