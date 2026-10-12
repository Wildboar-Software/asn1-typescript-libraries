/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGAPCauseGroupInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseGroupInt  ::=  INTEGER
 * ```
 */
export
type NGAPCauseGroupInt = INTEGER;

let _cached_decoder_for_NGAPCauseGroupInt: $.ASN1Decoder<NGAPCauseGroupInt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGAPCauseGroupInt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGAPCauseGroupInt (el: _Element): NGAPCauseGroupInt {
    if (!_cached_decoder_for_NGAPCauseGroupInt) { _cached_decoder_for_NGAPCauseGroupInt = $._decodeInteger; }
    return _cached_decoder_for_NGAPCauseGroupInt(el);
}

let _cached_encoder_for_NGAPCauseGroupInt: $.ASN1Encoder<NGAPCauseGroupInt> | null = null;

/**
 * @summary Encodes a(n) NGAPCauseGroupInt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGAPCauseGroupInt, encoded as an ASN.1 Element.
 */
export
function _encode_NGAPCauseGroupInt (value: NGAPCauseGroupInt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGAPCauseGroupInt) { _cached_encoder_for_NGAPCauseGroupInt = $._encodeInteger; }
    return _cached_encoder_for_NGAPCauseGroupInt(value, elGetter);
}


/* eslint-enable */
