/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_TC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-TC  ::=  INTEGER (0..65535)
 * ```
 */
export
type SM_TC = INTEGER;

let _cached_decoder_for_SM_TC: $.ASN1Decoder<SM_TC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_TC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SM_TC (el: _Element): SM_TC {
    if (!_cached_decoder_for_SM_TC) { _cached_decoder_for_SM_TC = $._decodeInteger; }
    return _cached_decoder_for_SM_TC(el);
}

let _cached_encoder_for_SM_TC: $.ASN1Encoder<SM_TC> | null = null;

/**
 * @summary Encodes a(n) SM_TC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_TC, encoded as an ASN.1 Element.
 */
export
function _encode_SM_TC (value: SM_TC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SM_TC) { _cached_encoder_for_SM_TC = $._encodeInteger; }
    return _cached_encoder_for_SM_TC(value, elGetter);
}


/* eslint-enable */
