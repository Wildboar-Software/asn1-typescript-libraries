/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentLoggedOff
 * @description
 * Capability bitmap for the Agent Logged Off event (ECMA-269 C.15.2, ECMA-285
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
 * AgentLoggedOff  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     agentPassword                 ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type AgentLoggedOff = BIT_STRING;

/**
 * @summary AgentLoggedOff_agentID
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentID` parameter (ECMA-269
 * C.15.2).
 */
export
const AgentLoggedOff_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 * @description
 * Alias of `AgentLoggedOff_agentID`.
 */
export
const agentID: number = AgentLoggedOff_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_acdGroup
 * @constant
 * @description
 * Bit set means the SF supports the optional `acdGroup` parameter (ECMA-269
 * C.15.2).
 */
export
const AgentLoggedOff_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 * @description
 * Alias of `AgentLoggedOff_acdGroup`.
 */
export
const acdGroup: number = AgentLoggedOff_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_agentPassword
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentPassword` parameter
 * (ECMA-269 C.15.2).
 */
export
const AgentLoggedOff_agentPassword: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary agentPassword
 * @constant
 * @description
 * Alias of `AgentLoggedOff_agentPassword`.
 */
export
const agentPassword: number = AgentLoggedOff_agentPassword; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.15.2).
 */
export
const AgentLoggedOff_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `AgentLoggedOff_cause`.
 */
export
const cause: number = AgentLoggedOff_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentLoggedOff_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.2).
 */
export
const AgentLoggedOff_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AgentLoggedOff_privateData`.
 */
export
const privateData: number = AgentLoggedOff_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentLoggedOff: $.ASN1Decoder<AgentLoggedOff> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentLoggedOff
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentLoggedOff (el: _Element): AgentLoggedOff {
    if (!_cached_decoder_for_AgentLoggedOff) { _cached_decoder_for_AgentLoggedOff = $._decodeBitString; }
    return _cached_decoder_for_AgentLoggedOff(el);
}

let _cached_encoder_for_AgentLoggedOff: $.ASN1Encoder<AgentLoggedOff> | null = null;

/**
 * @summary Encodes a(n) AgentLoggedOff into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentLoggedOff, encoded as an ASN.1 Element.
 */
export
function _encode_AgentLoggedOff (value: AgentLoggedOff, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentLoggedOff) { _cached_encoder_for_AgentLoggedOff = $._encodeBitString; }
    return _cached_encoder_for_AgentLoggedOff(value, elGetter);
}


/* eslint-enable */
