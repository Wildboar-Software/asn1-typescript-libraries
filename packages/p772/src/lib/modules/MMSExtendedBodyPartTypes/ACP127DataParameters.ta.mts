/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACP127DataParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataParameters  ::=  INTEGER
 * ```
 */
export
type ACP127DataParameters = INTEGER;

let _cached_decoder_for_ACP127DataParameters: $.ASN1Decoder<ACP127DataParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACP127DataParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACP127DataParameters (el: _Element): ACP127DataParameters {
    if (!_cached_decoder_for_ACP127DataParameters) { _cached_decoder_for_ACP127DataParameters = $._decodeInteger; }
    return _cached_decoder_for_ACP127DataParameters(el);
}

let _cached_encoder_for_ACP127DataParameters: $.ASN1Encoder<ACP127DataParameters> | null = null;

/**
 * @summary Encodes a(n) ACP127DataParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACP127DataParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ACP127DataParameters (value: ACP127DataParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACP127DataParameters) { _cached_encoder_for_ACP127DataParameters = $._encodeInteger; }
    return _cached_encoder_for_ACP127DataParameters(value, elGetter);
}


/* eslint-enable */
