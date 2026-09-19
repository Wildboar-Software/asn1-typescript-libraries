/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";
// export { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";


/**
 * @summary NSSAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSSAI  ::=  SEQUENCE OF SNSSAI
 * ```
 */
export
type NSSAI = SNSSAI[]; // SequenceOfType

let _cached_decoder_for_NSSAI: $.ASN1Decoder<NSSAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NSSAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NSSAI (el: _Element): NSSAI {
    if (!_cached_decoder_for_NSSAI) { _cached_decoder_for_NSSAI = $._decodeSequenceOf<SNSSAI>(() => _decode_SNSSAI); }
    return _cached_decoder_for_NSSAI(el);
}

let _cached_encoder_for_NSSAI: $.ASN1Encoder<NSSAI> | null = null;

/**
 * @summary Encodes a(n) NSSAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NSSAI, encoded as an ASN.1 Element.
 */
export
function _encode_NSSAI (value: NSSAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NSSAI) { _cached_encoder_for_NSSAI = $._encodeSequenceOf<SNSSAI>(() => _encode_SNSSAI, $.BER); }
    return _cached_encoder_for_NSSAI(value, elGetter);
}


/* eslint-enable */
