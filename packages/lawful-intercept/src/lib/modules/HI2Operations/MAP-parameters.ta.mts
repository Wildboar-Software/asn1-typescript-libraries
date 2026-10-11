/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MAP_parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE(1..256))
 * ```
 */
export
type MAP_parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_MAP_parameters: $.ASN1Decoder<MAP_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_parameters (el: _Element): MAP_parameters {
    if (!_cached_decoder_for_MAP_parameters) { _cached_decoder_for_MAP_parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_MAP_parameters(el);
}

let _cached_encoder_for_MAP_parameters: $.ASN1Encoder<MAP_parameters> | null = null;

/**
 * @summary Encodes a(n) MAP_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_parameters (value: MAP_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_parameters) { _cached_encoder_for_MAP_parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MAP_parameters(value, elGetter);
}


/* eslint-enable */
