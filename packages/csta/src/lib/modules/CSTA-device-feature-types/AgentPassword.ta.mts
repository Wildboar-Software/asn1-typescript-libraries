/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AgentPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentPassword  ::=  OCTET STRING
 * ```
 */
export
type AgentPassword = OCTET_STRING; // OctetStringType

let _cached_decoder_for_AgentPassword: $.ASN1Decoder<AgentPassword> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentPassword
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentPassword (el: _Element): AgentPassword {
    if (!_cached_decoder_for_AgentPassword) { _cached_decoder_for_AgentPassword = $._decodeOctetString; }
    return _cached_decoder_for_AgentPassword(el);
}

let _cached_encoder_for_AgentPassword: $.ASN1Encoder<AgentPassword> | null = null;

/**
 * @summary Encodes a(n) AgentPassword into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentPassword, encoded as an ASN.1 Element.
 */
export
function _encode_AgentPassword (value: AgentPassword, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentPassword) { _cached_encoder_for_AgentPassword = $._encodeOctetString; }
    return _cached_encoder_for_AgentPassword(value, elGetter);
}


/* eslint-enable */
