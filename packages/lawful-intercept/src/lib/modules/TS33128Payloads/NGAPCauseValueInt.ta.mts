/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NGAPCauseValueInt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NGAPCauseValueInt  ::=  INTEGER
 * ```
 */
export
type NGAPCauseValueInt = INTEGER;

let _cached_decoder_for_NGAPCauseValueInt: $.ASN1Decoder<NGAPCauseValueInt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NGAPCauseValueInt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NGAPCauseValueInt (el: _Element): NGAPCauseValueInt {
    if (!_cached_decoder_for_NGAPCauseValueInt) { _cached_decoder_for_NGAPCauseValueInt = $._decodeInteger; }
    return _cached_decoder_for_NGAPCauseValueInt(el);
}

let _cached_encoder_for_NGAPCauseValueInt: $.ASN1Encoder<NGAPCauseValueInt> | null = null;

/**
 * @summary Encodes a(n) NGAPCauseValueInt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NGAPCauseValueInt, encoded as an ASN.1 Element.
 */
export
function _encode_NGAPCauseValueInt (value: NGAPCauseValueInt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NGAPCauseValueInt) { _cached_encoder_for_NGAPCauseValueInt = $._encodeInteger; }
    return _cached_encoder_for_NGAPCauseValueInt(value, elGetter);
}


/* eslint-enable */
