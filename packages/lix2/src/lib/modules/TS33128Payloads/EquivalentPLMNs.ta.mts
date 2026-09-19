/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary EquivalentPLMNs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquivalentPLMNs  ::=  SEQUENCE (SIZE(1..MAX)) OF PLMNID
 * ```
 */
export
type EquivalentPLMNs = PLMNID[]; // SequenceOfType

let _cached_decoder_for_EquivalentPLMNs: $.ASN1Decoder<EquivalentPLMNs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EquivalentPLMNs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EquivalentPLMNs (el: _Element): EquivalentPLMNs {
    if (!_cached_decoder_for_EquivalentPLMNs) { _cached_decoder_for_EquivalentPLMNs = $._decodeSequenceOf<PLMNID>(() => _decode_PLMNID); }
    return _cached_decoder_for_EquivalentPLMNs(el);
}

let _cached_encoder_for_EquivalentPLMNs: $.ASN1Encoder<EquivalentPLMNs> | null = null;

/**
 * @summary Encodes a(n) EquivalentPLMNs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquivalentPLMNs, encoded as an ASN.1 Element.
 */
export
function _encode_EquivalentPLMNs (value: EquivalentPLMNs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EquivalentPLMNs) { _cached_encoder_for_EquivalentPLMNs = $._encodeSequenceOf<PLMNID>(() => _encode_PLMNID, $.BER); }
    return _cached_encoder_for_EquivalentPLMNs(value, elGetter);
}


/* eslint-enable */
