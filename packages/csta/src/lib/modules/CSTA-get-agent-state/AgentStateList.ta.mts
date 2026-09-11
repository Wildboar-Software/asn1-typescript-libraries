/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element, ASN1SizeError } from "@wildboar/asn1";
import { AgentStateEntry, _decode_AgentStateEntry, _encode_AgentStateEntry } from "../CSTA-get-agent-state/AgentStateEntry.ta.mjs";



/**
 * @summary AgentStateList
 * @description
 *
 * SEQUENCE SIZE (1..32) OF AgentStateEntry (ECMA-269 §22.1.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateList  ::=  SEQUENCE SIZE (1..32) OF AgentStateEntry
 * ```
 */
export
type AgentStateList = AgentStateEntry[]; // SequenceOfType

let _cached_decoder_for_AgentStateList: $.ASN1Decoder<AgentStateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentStateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentStateList (el: _Element): AgentStateList {
    if (!_cached_decoder_for_AgentStateList) { _cached_decoder_for_AgentStateList = $._decodeSequenceOf<AgentStateEntry>(() => _decode_AgentStateEntry); }
    const value = _cached_decoder_for_AgentStateList(el);
    if (value.length < 1 || value.length > 32) {
        throw new ASN1SizeError("AgentStateList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_AgentStateList: $.ASN1Encoder<AgentStateList> | null = null;

/**
 * @summary Encodes a(n) AgentStateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentStateList, encoded as an ASN.1 Element.
 */
export
function _encode_AgentStateList (value: AgentStateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentStateList) { _cached_encoder_for_AgentStateList = $._encodeSequenceOf<AgentStateEntry>(() => _encode_AgentStateEntry, $.BER); }
    return _cached_encoder_for_AgentStateList(value, elGetter);
}


/* eslint-enable */
