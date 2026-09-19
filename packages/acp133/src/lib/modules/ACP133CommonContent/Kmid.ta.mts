/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Kmid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Kmid  ::=  OCTET STRING
 * ```
 */
export
type Kmid = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Kmid: $.ASN1Decoder<Kmid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Kmid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Kmid (el: _Element): Kmid {
    if (!_cached_decoder_for_Kmid) { _cached_decoder_for_Kmid = $._decodeOctetString; }
    return _cached_decoder_for_Kmid(el);
}

let _cached_encoder_for_Kmid: $.ASN1Encoder<Kmid> | null = null;

/**
 * @summary Encodes a(n) Kmid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Kmid, encoded as an ASN.1 Element.
 */
export
function _encode_Kmid (value: Kmid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Kmid) { _cached_encoder_for_Kmid = $._encodeOctetString; }
    return _cached_encoder_for_Kmid(value, elGetter);
}


/* eslint-enable */
