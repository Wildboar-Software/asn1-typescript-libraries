/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SciDataMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SciDataMode  ::=  OCTET STRING (SIZE (1..256))
 * ```
 */
export
type SciDataMode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SciDataMode: $.ASN1Decoder<SciDataMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SciDataMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SciDataMode (el: _Element): SciDataMode {
    if (!_cached_decoder_for_SciDataMode) { _cached_decoder_for_SciDataMode = $._decodeOctetString; }
    return _cached_decoder_for_SciDataMode(el);
}

let _cached_encoder_for_SciDataMode: $.ASN1Encoder<SciDataMode> | null = null;

/**
 * @summary Encodes a(n) SciDataMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SciDataMode, encoded as an ASN.1 Element.
 */
export
function _encode_SciDataMode (value: SciDataMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SciDataMode) { _cached_encoder_for_SciDataMode = $._encodeOctetString; }
    return _cached_encoder_for_SciDataMode(value, elGetter);
}


/* eslint-enable */
