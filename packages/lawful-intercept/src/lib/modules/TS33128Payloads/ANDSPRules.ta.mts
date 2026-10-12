/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ANDSPRule, _decode_ANDSPRule, _encode_ANDSPRule } from "../TS33128Payloads/ANDSPRule.ta.mjs";
// export { ANDSPRule, _decode_ANDSPRule, _encode_ANDSPRule } from "../TS33128Payloads/ANDSPRule.ta.mjs";


/**
 * @summary ANDSPRules
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ANDSPRules  ::=  SEQUENCE (SIZE(1..MAX)) OF ANDSPRule
 * ```
 */
export
type ANDSPRules = ANDSPRule[]; // SequenceOfType

let _cached_decoder_for_ANDSPRules: $.ASN1Decoder<ANDSPRules> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ANDSPRules
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ANDSPRules (el: _Element): ANDSPRules {
    if (!_cached_decoder_for_ANDSPRules) { _cached_decoder_for_ANDSPRules = $._decodeSequenceOf<ANDSPRule>(() => _decode_ANDSPRule); }
    return _cached_decoder_for_ANDSPRules(el);
}

let _cached_encoder_for_ANDSPRules: $.ASN1Encoder<ANDSPRules> | null = null;

/**
 * @summary Encodes a(n) ANDSPRules into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ANDSPRules, encoded as an ASN.1 Element.
 */
export
function _encode_ANDSPRules (value: ANDSPRules, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ANDSPRules) { _cached_encoder_for_ANDSPRules = $._encodeSequenceOf<ANDSPRule>(() => _encode_ANDSPRule, $.BER); }
    return _cached_encoder_for_ANDSPRules(value, elGetter);
}


/* eslint-enable */
