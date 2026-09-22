/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NSAPSubaddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSAPSubaddress  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export
type NSAPSubaddress = OCTET_STRING; // OctetStringType

let _cached_decoder_for_NSAPSubaddress: $.ASN1Decoder<NSAPSubaddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NSAPSubaddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NSAPSubaddress (el: _Element): NSAPSubaddress {
    if (!_cached_decoder_for_NSAPSubaddress) { _cached_decoder_for_NSAPSubaddress = $._decodeOctetString; }
    return _cached_decoder_for_NSAPSubaddress(el);
}

let _cached_encoder_for_NSAPSubaddress: $.ASN1Encoder<NSAPSubaddress> | null = null;

/**
 * @summary Encodes a(n) NSAPSubaddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NSAPSubaddress, encoded as an ASN.1 Element.
 */
export
function _encode_NSAPSubaddress (value: NSAPSubaddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NSAPSubaddress) { _cached_encoder_for_NSAPSubaddress = $._encodeOctetString; }
    return _cached_encoder_for_NSAPSubaddress(value, elGetter);
}


/* eslint-enable */
