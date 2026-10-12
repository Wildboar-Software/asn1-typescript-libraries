/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary AllowedTACs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedTACs  ::=  SEQUENCE (SIZE(1..MAX)) OF TAC
 * ```
 */
export
type AllowedTACs = TAC[]; // SequenceOfType

let _cached_decoder_for_AllowedTACs: $.ASN1Decoder<AllowedTACs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AllowedTACs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AllowedTACs (el: _Element): AllowedTACs {
    if (!_cached_decoder_for_AllowedTACs) { _cached_decoder_for_AllowedTACs = $._decodeSequenceOf<TAC>(() => _decode_TAC); }
    return _cached_decoder_for_AllowedTACs(el);
}

let _cached_encoder_for_AllowedTACs: $.ASN1Encoder<AllowedTACs> | null = null;

/**
 * @summary Encodes a(n) AllowedTACs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedTACs, encoded as an ASN.1 Element.
 */
export
function _encode_AllowedTACs (value: AllowedTACs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AllowedTACs) { _cached_encoder_for_AllowedTACs = $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER); }
    return _cached_encoder_for_AllowedTACs(value, elGetter);
}


/* eslint-enable */
