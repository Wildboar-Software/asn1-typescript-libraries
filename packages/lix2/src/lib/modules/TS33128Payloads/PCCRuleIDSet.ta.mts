/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PCCRuleID, _decode_PCCRuleID, _encode_PCCRuleID } from "../TS33128Payloads/PCCRuleID.ta.mjs";
// export { PCCRuleID, _decode_PCCRuleID, _encode_PCCRuleID } from "../TS33128Payloads/PCCRuleID.ta.mjs";


/**
 * @summary PCCRuleIDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCCRuleIDSet  ::=  SET OF PCCRuleID
 * ```
 */
export
type PCCRuleIDSet = PCCRuleID[]; // SetOfType

let _cached_decoder_for_PCCRuleIDSet: $.ASN1Decoder<PCCRuleIDSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PCCRuleIDSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PCCRuleIDSet (el: _Element): PCCRuleIDSet {
    if (!_cached_decoder_for_PCCRuleIDSet) { _cached_decoder_for_PCCRuleIDSet = $._decodeSetOf<PCCRuleID>(() => _decode_PCCRuleID); }
    return _cached_decoder_for_PCCRuleIDSet(el);
}

let _cached_encoder_for_PCCRuleIDSet: $.ASN1Encoder<PCCRuleIDSet> | null = null;

/**
 * @summary Encodes a(n) PCCRuleIDSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCCRuleIDSet, encoded as an ASN.1 Element.
 */
export
function _encode_PCCRuleIDSet (value: PCCRuleIDSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PCCRuleIDSet) { _cached_encoder_for_PCCRuleIDSet = $._encodeSetOf<PCCRuleID>(() => _encode_PCCRuleID, $.BER); }
    return _cached_encoder_for_PCCRuleIDSet(value, elGetter);
}


/* eslint-enable */
