/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PRIDS0ID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PRIDS0ID  ::=  INTEGER(1..24)
 * ```
 */
export
type PRIDS0ID = INTEGER;

let _cached_decoder_for_PRIDS0ID: $.ASN1Decoder<PRIDS0ID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PRIDS0ID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PRIDS0ID (el: _Element): PRIDS0ID {
    if (!_cached_decoder_for_PRIDS0ID) { _cached_decoder_for_PRIDS0ID = $._decodeInteger; }
    return _cached_decoder_for_PRIDS0ID(el);
}

let _cached_encoder_for_PRIDS0ID: $.ASN1Encoder<PRIDS0ID> | null = null;

/**
 * @summary Encodes a(n) PRIDS0ID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PRIDS0ID, encoded as an ASN.1 Element.
 */
export
function _encode_PRIDS0ID (value: PRIDS0ID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PRIDS0ID) { _cached_encoder_for_PRIDS0ID = $._encodeInteger; }
    return _cached_encoder_for_PRIDS0ID(value, elGetter);
}


/* eslint-enable */
