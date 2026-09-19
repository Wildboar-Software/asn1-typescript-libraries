/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RP_MR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-MR  ::=  INTEGER (0..65535)
 * ```
 */
export
type RP_MR = INTEGER;

let _cached_decoder_for_RP_MR: $.ASN1Decoder<RP_MR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RP_MR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RP_MR (el: _Element): RP_MR {
    if (!_cached_decoder_for_RP_MR) { _cached_decoder_for_RP_MR = $._decodeInteger; }
    return _cached_decoder_for_RP_MR(el);
}

let _cached_encoder_for_RP_MR: $.ASN1Encoder<RP_MR> | null = null;

/**
 * @summary Encodes a(n) RP_MR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RP_MR, encoded as an ASN.1 Element.
 */
export
function _encode_RP_MR (value: RP_MR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RP_MR) { _cached_encoder_for_RP_MR = $._encodeInteger; }
    return _cached_encoder_for_RP_MR(value, elGetter);
}


/* eslint-enable */
