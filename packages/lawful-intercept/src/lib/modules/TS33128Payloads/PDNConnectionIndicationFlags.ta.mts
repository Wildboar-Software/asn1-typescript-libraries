/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNConnectionIndicationFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionIndicationFlags  ::=  OCTET STRING
 * ```
 */
export
type PDNConnectionIndicationFlags = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PDNConnectionIndicationFlags: $.ASN1Decoder<PDNConnectionIndicationFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDNConnectionIndicationFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDNConnectionIndicationFlags (el: _Element): PDNConnectionIndicationFlags {
    if (!_cached_decoder_for_PDNConnectionIndicationFlags) { _cached_decoder_for_PDNConnectionIndicationFlags = $._decodeOctetString; }
    return _cached_decoder_for_PDNConnectionIndicationFlags(el);
}

let _cached_encoder_for_PDNConnectionIndicationFlags: $.ASN1Encoder<PDNConnectionIndicationFlags> | null = null;

/**
 * @summary Encodes a(n) PDNConnectionIndicationFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNConnectionIndicationFlags, encoded as an ASN.1 Element.
 */
export
function _encode_PDNConnectionIndicationFlags (value: PDNConnectionIndicationFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDNConnectionIndicationFlags) { _cached_encoder_for_PDNConnectionIndicationFlags = $._encodeOctetString; }
    return _cached_encoder_for_PDNConnectionIndicationFlags(value, elGetter);
}


/* eslint-enable */
