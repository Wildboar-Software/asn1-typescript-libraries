/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Dn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Dn  ::=  OCTET STRING(SIZE(5))
 * ```
 */
export
type Dn = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Dn: $.ASN1Decoder<Dn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Dn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Dn (el: _Element): Dn {
    if (!_cached_decoder_for_Dn) { _cached_decoder_for_Dn = $._decodeOctetString; }
    return _cached_decoder_for_Dn(el);
}

let _cached_encoder_for_Dn: $.ASN1Encoder<Dn> | null = null;

/**
 * @summary Encodes a(n) Dn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Dn, encoded as an ASN.1 Element.
 */
export
function _encode_Dn (value: Dn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Dn) { _cached_encoder_for_Dn = $._encodeOctetString; }
    return _cached_encoder_for_Dn(value, elGetter);
}


/* eslint-enable */
