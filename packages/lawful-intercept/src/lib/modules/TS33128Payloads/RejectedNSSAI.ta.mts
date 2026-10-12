/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RejectedSNSSAI, _decode_RejectedSNSSAI, _encode_RejectedSNSSAI } from "../TS33128Payloads/RejectedSNSSAI.ta.mjs";
// export { RejectedSNSSAI, _decode_RejectedSNSSAI, _encode_RejectedSNSSAI } from "../TS33128Payloads/RejectedSNSSAI.ta.mjs";


/**
 * @summary RejectedNSSAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectedNSSAI  ::=  SEQUENCE OF RejectedSNSSAI
 * ```
 */
export
type RejectedNSSAI = RejectedSNSSAI[]; // SequenceOfType

let _cached_decoder_for_RejectedNSSAI: $.ASN1Decoder<RejectedNSSAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectedNSSAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectedNSSAI (el: _Element): RejectedNSSAI {
    if (!_cached_decoder_for_RejectedNSSAI) { _cached_decoder_for_RejectedNSSAI = $._decodeSequenceOf<RejectedSNSSAI>(() => _decode_RejectedSNSSAI); }
    return _cached_decoder_for_RejectedNSSAI(el);
}

let _cached_encoder_for_RejectedNSSAI: $.ASN1Encoder<RejectedNSSAI> | null = null;

/**
 * @summary Encodes a(n) RejectedNSSAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectedNSSAI, encoded as an ASN.1 Element.
 */
export
function _encode_RejectedNSSAI (value: RejectedNSSAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectedNSSAI) { _cached_encoder_for_RejectedNSSAI = $._encodeSequenceOf<RejectedSNSSAI>(() => _encode_RejectedSNSSAI, $.BER); }
    return _cached_encoder_for_RejectedNSSAI(value, elGetter);
}


/* eslint-enable */
