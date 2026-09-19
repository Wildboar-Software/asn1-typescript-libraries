/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpcID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpcID  ::=  OCTET STRING(SIZE(3))
 * ```
 */
export
type SpcID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SpcID: $.ASN1Decoder<SpcID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpcID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpcID (el: _Element): SpcID {
    if (!_cached_decoder_for_SpcID) { _cached_decoder_for_SpcID = $._decodeOctetString; }
    return _cached_decoder_for_SpcID(el);
}

let _cached_encoder_for_SpcID: $.ASN1Encoder<SpcID> | null = null;

/**
 * @summary Encodes a(n) SpcID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpcID, encoded as an ASN.1 Element.
 */
export
function _encode_SpcID (value: SpcID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpcID) { _cached_encoder_for_SpcID = $._encodeOctetString; }
    return _cached_encoder_for_SpcID(value, elGetter);
}


/* eslint-enable */
