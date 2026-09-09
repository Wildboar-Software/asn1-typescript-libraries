/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentReady
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentReady  ::=  BIT STRING
 * {     agentID                 ( 0),     -- optional parameters
 *     acdGroup                 ( 1),     -- optional parameters
 *     cause                     ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type AgentReady = BIT_STRING;

/**
 * @summary AgentReady_agentID
 * @constant
 */
export
const AgentReady_agentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary agentID
 * @constant
 */
export
const agentID: number = AgentReady_agentID; /* SHORT_NAMED_BIT */

/**
 * @summary AgentReady_acdGroup
 * @constant
 */
export
const AgentReady_acdGroup: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acdGroup
 * @constant
 */
export
const acdGroup: number = AgentReady_acdGroup; /* SHORT_NAMED_BIT */

/**
 * @summary AgentReady_cause
 * @constant
 */
export
const AgentReady_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = AgentReady_cause; /* SHORT_NAMED_BIT */

/**
 * @summary AgentReady_privateData
 * @constant
 */
export
const AgentReady_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = AgentReady_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AgentReady: $.ASN1Decoder<AgentReady> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentReady
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentReady (el: _Element): AgentReady {
    if (!_cached_decoder_for_AgentReady) { _cached_decoder_for_AgentReady = $._decodeBitString; }
    return _cached_decoder_for_AgentReady(el);
}

let _cached_encoder_for_AgentReady: $.ASN1Encoder<AgentReady> | null = null;

/**
 * @summary Encodes a(n) AgentReady into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentReady, encoded as an ASN.1 Element.
 */
export
function _encode_AgentReady (value: AgentReady, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentReady) { _cached_encoder_for_AgentReady = $._encodeBitString; }
    return _cached_encoder_for_AgentReady(value, elGetter);
}


/* eslint-enable */
