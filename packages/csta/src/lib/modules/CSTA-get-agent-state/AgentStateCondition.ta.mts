/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentStateCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateCondition  ::=  ENUMERATED
 * {    forcedPause            (0),
 *     other                (1) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AgentStateCondition {
    forcedPause = 0,
    other = 1,
}

/**
 * @summary AgentStateCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateCondition  ::=  ENUMERATED
 * {    forcedPause            (0),
 *     other                (1) }
 * ```
 * 
 * @enum {number}
 */
export
type AgentStateCondition = _enum_for_AgentStateCondition;

/**
 * @summary AgentStateCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateCondition  ::=  ENUMERATED
 * {    forcedPause            (0),
 *     other                (1) }
 * ```
 * 
 * @enum {number}
 */
export
const AgentStateCondition = _enum_for_AgentStateCondition;

/**
 * @summary AgentStateCondition_forcedPause
 * @constant
 * @type {number}
 */
export
const AgentStateCondition_forcedPause: AgentStateCondition = AgentStateCondition.forcedPause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedPause
 * @constant
 * @type {number}
 */
export
const forcedPause: AgentStateCondition = AgentStateCondition.forcedPause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AgentStateCondition_other
 * @constant
 * @type {number}
 */
export
const AgentStateCondition_other: AgentStateCondition = AgentStateCondition.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: AgentStateCondition = AgentStateCondition.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AgentStateCondition: $.ASN1Decoder<AgentStateCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentStateCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentStateCondition (el: _Element): AgentStateCondition {
    if (!_cached_decoder_for_AgentStateCondition) { _cached_decoder_for_AgentStateCondition = $._decodeEnumerated; }
    return _cached_decoder_for_AgentStateCondition(el);
}

let _cached_encoder_for_AgentStateCondition: $.ASN1Encoder<AgentStateCondition> | null = null;

/**
 * @summary Encodes a(n) AgentStateCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentStateCondition, encoded as an ASN.1 Element.
 */
export
function _encode_AgentStateCondition (value: AgentStateCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentStateCondition) { _cached_encoder_for_AgentStateCondition = $._encodeEnumerated; }
    return _cached_encoder_for_AgentStateCondition(value, elGetter);
}


/* eslint-enable */
