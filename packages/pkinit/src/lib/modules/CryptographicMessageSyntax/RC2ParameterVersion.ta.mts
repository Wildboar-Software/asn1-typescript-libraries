/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RC2ParameterVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RC2ParameterVersion  ::=  INTEGER
 * ```
 */
export
type RC2ParameterVersion = INTEGER;

let _cached_decoder_for_RC2ParameterVersion: $.ASN1Decoder<RC2ParameterVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RC2ParameterVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RC2ParameterVersion (el: _Element): RC2ParameterVersion {
    if (!_cached_decoder_for_RC2ParameterVersion) { _cached_decoder_for_RC2ParameterVersion = $._decodeInteger; }
    return _cached_decoder_for_RC2ParameterVersion(el);
}

let _cached_encoder_for_RC2ParameterVersion: $.ASN1Encoder<RC2ParameterVersion> | null = null;

/**
 * @summary Encodes a(n) RC2ParameterVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RC2ParameterVersion, encoded as an ASN.1 Element.
 */
export
function _encode_RC2ParameterVersion (value: RC2ParameterVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RC2ParameterVersion) { _cached_encoder_for_RC2ParameterVersion = $._encodeInteger; }
    return _cached_encoder_for_RC2ParameterVersion(value, elGetter);
}


/* eslint-enable */
