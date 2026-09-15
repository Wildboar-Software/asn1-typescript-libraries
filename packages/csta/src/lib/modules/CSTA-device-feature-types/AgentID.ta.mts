/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentID
 * @description
 *
 * Identifies an ACD agent. Maximum length is given by capability exchange.
 * ECMA-269 §12.3.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentID  ::=  OCTET STRING
 * ```
 */
export
type AgentID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AgentID: $.ASN1Decoder<AgentID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentID (el: _Element): AgentID {
    if (!_cached_decoder_for_AgentID) { _cached_decoder_for_AgentID = $._decodeOctetString; }
    return _cached_decoder_for_AgentID(el);
}

let _cached_encoder_for_AgentID: $.ASN1Encoder<AgentID> | null = null;

/**
 * @summary Encodes a(n) AgentID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentID, encoded as an ASN.1 Element.
 */
export
function _encode_AgentID (value: AgentID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentID) { _cached_encoder_for_AgentID = $._encodeOctetString; }
    return _cached_encoder_for_AgentID(value, elGetter);
}


/* eslint-enable */
