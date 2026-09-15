/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentLoggedOn
 * @description
 * Capability bitmap for the Agent Logged On event (ECMA-269 C.15.3, ECMA-285
 * §9.10). Presence of this entry in `LogicalEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentLoggedOn  ::=  BIT STRING
 * {    agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     agentPassword                 ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type AgentLoggedOn = BIT_STRING;

/**
 * @summary AgentLoggedOn_agentID
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentID` parameter (ECMA-269
 * C.15.3).
 */
export
const AgentLoggedOn_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 * @description
 * Alias of `AgentLoggedOn_agentID`.
 */
export
const agentID: number = AgentLoggedOn_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOn_acdGroup
 * @constant
 * @description
 * Bit set means the SF supports the optional `acdGroup` parameter (ECMA-269
 * C.15.3).
 */
export
const AgentLoggedOn_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 * @description
 * Alias of `AgentLoggedOn_acdGroup`.
 */
export
const acdGroup: number = AgentLoggedOn_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOn_agentPassword
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentPassword` parameter
 * (ECMA-269 C.15.3).
 */
export
const AgentLoggedOn_agentPassword: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentPassword
 * @constant
 * @description
 * Alias of `AgentLoggedOn_agentPassword`.
 */
export
const agentPassword: number = AgentLoggedOn_agentPassword; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOn_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.15.3).
 */
export
const AgentLoggedOn_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `AgentLoggedOn_cause`.
 */
export
const cause: number = AgentLoggedOn_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOn_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.3).
 */
export
const AgentLoggedOn_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AgentLoggedOn_privateData`.
 */
export
const privateData: number = AgentLoggedOn_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentLoggedOn: $.ASN1Decoder<AgentLoggedOn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentLoggedOn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentLoggedOn (el: _Element): AgentLoggedOn {
    if (!_cached_decoder_for_AgentLoggedOn) { _cached_decoder_for_AgentLoggedOn = $._decodeBitString; }
    return _cached_decoder_for_AgentLoggedOn(el);
}

let _cached_encoder_for_AgentLoggedOn: $.ASN1Encoder<AgentLoggedOn> | null = null;

/**
 * @summary Encodes a(n) AgentLoggedOn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentLoggedOn, encoded as an ASN.1 Element.
 */
export
function _encode_AgentLoggedOn (value: AgentLoggedOn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentLoggedOn) { _cached_encoder_for_AgentLoggedOn = $._encodeBitString; }
    return _cached_encoder_for_AgentLoggedOn(value, elGetter);
}


/* eslint-enable */
