/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentNotReady
 * @description
 * Capability bitmap for the Agent Not Ready event (ECMA-269 C.15.4, ECMA-285
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
 * AgentNotReady  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     cause                     ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type AgentNotReady = BIT_STRING;

/**
 * @summary AgentNotReady_agentID
 * @constant
 * @description
 * Bit set means the SF supports the optional `agentID` parameter (ECMA-269
 * C.15.4).
 */
export
const AgentNotReady_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 * @description
 * Alias of `AgentNotReady_agentID`.
 */
export
const agentID: number = AgentNotReady_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentNotReady_acdGroup
 * @constant
 * @description
 * Bit set means the SF supports the optional `acdGroup` parameter (ECMA-269
 * C.15.4).
 */
export
const AgentNotReady_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 * @description
 * Alias of `AgentNotReady_acdGroup`.
 */
export
const acdGroup: number = AgentNotReady_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentNotReady_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.15.4).
 */
export
const AgentNotReady_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `AgentNotReady_cause`.
 */
export
const cause: number = AgentNotReady_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentNotReady_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.15.4).
 */
export
const AgentNotReady_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `AgentNotReady_privateData`.
 */
export
const privateData: number = AgentNotReady_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentNotReady: $.ASN1Decoder<AgentNotReady> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentNotReady
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentNotReady (el: _Element): AgentNotReady {
    if (!_cached_decoder_for_AgentNotReady) { _cached_decoder_for_AgentNotReady = $._decodeBitString; }
    return _cached_decoder_for_AgentNotReady(el);
}

let _cached_encoder_for_AgentNotReady: $.ASN1Encoder<AgentNotReady> | null = null;

/**
 * @summary Encodes a(n) AgentNotReady into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentNotReady, encoded as an ASN.1 Element.
 */
export
function _encode_AgentNotReady (value: AgentNotReady, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentNotReady) { _cached_encoder_for_AgentNotReady = $._encodeBitString; }
    return _cached_encoder_for_AgentNotReady(value, elGetter);
}


/* eslint-enable */
