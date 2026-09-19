/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGTMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGTMSI  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type FiveGTMSI = INTEGER;

let _cached_decoder_for_FiveGTMSI: $.ASN1Decoder<FiveGTMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGTMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGTMSI (el: _Element): FiveGTMSI {
    if (!_cached_decoder_for_FiveGTMSI) { _cached_decoder_for_FiveGTMSI = $._decodeInteger; }
    return _cached_decoder_for_FiveGTMSI(el);
}

let _cached_encoder_for_FiveGTMSI: $.ASN1Encoder<FiveGTMSI> | null = null;

/**
 * @summary Encodes a(n) FiveGTMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGTMSI, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGTMSI (value: FiveGTMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGTMSI) { _cached_encoder_for_FiveGTMSI = $._encodeInteger; }
    return _cached_encoder_for_FiveGTMSI(value, elGetter);
}


/* eslint-enable */
