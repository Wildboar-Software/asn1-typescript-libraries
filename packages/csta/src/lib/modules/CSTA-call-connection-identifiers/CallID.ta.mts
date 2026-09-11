/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallID
 * @description
 *
 * Switching-function identifier for a call (ECMA-269 §6.1.2.1,
 * §12.3.9). Allocated by the switching function at latest when the
 * call first becomes visible. Unique in the switching sub-domain and
 * the same for every device in the call. May be assigned before the
 * call is fully established (e.g. while alerting).
 *
 * Transfer and conference may replace CallIDs; the Conferenced or
 * Transferred event (via `ConnectionList`) links old IDs to new.
 * Individual CallIDs are not guaranteed globally unique; uniqueness
 * is required of the Call+Device pair (§6.1.6). Do not assume reuse.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallID  ::=  OCTET STRING
 * ```
 */
export
type CallID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CallID: $.ASN1Decoder<CallID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallID (el: _Element): CallID {
    if (!_cached_decoder_for_CallID) { _cached_decoder_for_CallID = $._decodeOctetString; }
    return _cached_decoder_for_CallID(el);
}

let _cached_encoder_for_CallID: $.ASN1Encoder<CallID> | null = null;

/**
 * @summary Encodes a(n) CallID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallID, encoded as an ASN.1 Element.
 */
export
function _encode_CallID (value: CallID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallID) { _cached_encoder_for_CallID = $._encodeOctetString; }
    return _cached_encoder_for_CallID(value, elGetter);
}


/* eslint-enable */
