/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PCCRule, _decode_PCCRule, _encode_PCCRule } from "../TS33128Payloads/PCCRule.ta.mjs";
// export { PCCRule, _decode_PCCRule, _encode_PCCRule } from "../TS33128Payloads/PCCRule.ta.mjs";


/**
 * @summary PCCRuleSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCCRuleSet  ::=  SET OF PCCRule
 * ```
 */
export
type PCCRuleSet = PCCRule[]; // SetOfType

let _cached_decoder_for_PCCRuleSet: $.ASN1Decoder<PCCRuleSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PCCRuleSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PCCRuleSet (el: _Element): PCCRuleSet {
    if (!_cached_decoder_for_PCCRuleSet) { _cached_decoder_for_PCCRuleSet = $._decodeSetOf<PCCRule>(() => _decode_PCCRule); }
    return _cached_decoder_for_PCCRuleSet(el);
}

let _cached_encoder_for_PCCRuleSet: $.ASN1Encoder<PCCRuleSet> | null = null;

/**
 * @summary Encodes a(n) PCCRuleSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCCRuleSet, encoded as an ASN.1 Element.
 */
export
function _encode_PCCRuleSet (value: PCCRuleSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PCCRuleSet) { _cached_encoder_for_PCCRuleSet = $._encodeSetOf<PCCRule>(() => _encode_PCCRule, $.BER); }
    return _cached_encoder_for_PCCRuleSet(value, elGetter);
}


/* eslint-enable */
