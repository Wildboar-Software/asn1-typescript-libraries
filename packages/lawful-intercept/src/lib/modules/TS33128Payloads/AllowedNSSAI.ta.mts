/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";


/**
 * @summary AllowedNSSAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedNSSAI  ::=  SEQUENCE OF NSSAI
 * ```
 */
export
type AllowedNSSAI = NSSAI[]; // SequenceOfType

let _cached_decoder_for_AllowedNSSAI: $.ASN1Decoder<AllowedNSSAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedNSSAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllowedNSSAI (el: _Element): AllowedNSSAI {
    if (!_cached_decoder_for_AllowedNSSAI) { _cached_decoder_for_AllowedNSSAI = $._decodeSequenceOf<NSSAI>(() => _decode_NSSAI); }
    return _cached_decoder_for_AllowedNSSAI(el);
}

let _cached_encoder_for_AllowedNSSAI: $.ASN1Encoder<AllowedNSSAI> | null = null;

/**
 * @summary Encodes a(n) AllowedNSSAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedNSSAI, encoded as an ASN.1 Element.
 */
export
function _encode_AllowedNSSAI (value: AllowedNSSAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllowedNSSAI) { _cached_encoder_for_AllowedNSSAI = $._encodeSequenceOf<NSSAI>(() => _encode_NSSAI, $.BER); }
    return _cached_encoder_for_AllowedNSSAI(value, elGetter);
}


/* eslint-enable */
