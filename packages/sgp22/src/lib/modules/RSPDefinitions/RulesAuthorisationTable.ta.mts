/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfilePolicyAuthorisationRule, _decode_ProfilePolicyAuthorisationRule, _encode_ProfilePolicyAuthorisationRule } from "../RSPDefinitions/ProfilePolicyAuthorisationRule.ta.mjs";
// export { ProfilePolicyAuthorisationRule, _decode_ProfilePolicyAuthorisationRule, _encode_ProfilePolicyAuthorisationRule } from "../RSPDefinitions/ProfilePolicyAuthorisationRule.ta.mjs";


/**
 * @summary RulesAuthorisationTable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RulesAuthorisationTable  ::=  SEQUENCE OF ProfilePolicyAuthorisationRule
 * ```
 */
export
type RulesAuthorisationTable = ProfilePolicyAuthorisationRule[]; // SequenceOfType

let _cached_decoder_for_RulesAuthorisationTable: $.ASN1Decoder<RulesAuthorisationTable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RulesAuthorisationTable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RulesAuthorisationTable (el: _Element): RulesAuthorisationTable {
    if (!_cached_decoder_for_RulesAuthorisationTable) { _cached_decoder_for_RulesAuthorisationTable = $._decodeSequenceOf<ProfilePolicyAuthorisationRule>(() => _decode_ProfilePolicyAuthorisationRule); }
    return _cached_decoder_for_RulesAuthorisationTable(el);
}

let _cached_encoder_for_RulesAuthorisationTable: $.ASN1Encoder<RulesAuthorisationTable> | null = null;

/**
 * @summary Encodes a(n) RulesAuthorisationTable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RulesAuthorisationTable, encoded as an ASN.1 Element.
 */
export
function _encode_RulesAuthorisationTable (value: RulesAuthorisationTable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RulesAuthorisationTable) { _cached_encoder_for_RulesAuthorisationTable = $._encodeSequenceOf<ProfilePolicyAuthorisationRule>(() => _encode_ProfilePolicyAuthorisationRule, $.BER); }
    return _cached_encoder_for_RulesAuthorisationTable(value, elGetter);
}


/* eslint-enable */
