/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UUID  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export
type UUID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_UUID: $.ASN1Decoder<UUID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UUID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UUID (el: _Element): UUID {
    if (!_cached_decoder_for_UUID) { _cached_decoder_for_UUID = $._decodeOctetString; }
    return _cached_decoder_for_UUID(el);
}

let _cached_encoder_for_UUID: $.ASN1Encoder<UUID> | null = null;

/**
 * @summary Encodes a(n) UUID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUID, encoded as an ASN.1 Element.
 */
export
function _encode_UUID (value: UUID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UUID) { _cached_encoder_for_UUID = $._encodeOctetString; }
    return _cached_encoder_for_UUID(value, elGetter);
}


/* eslint-enable */
