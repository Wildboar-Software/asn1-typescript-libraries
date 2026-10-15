/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";
// export { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";


/**
 * @summary GcseGroupID
 * @description
 * 
 * Identity of the GCSE communications group, in the same form as a party
 * identity. Required on the GCSE records. 3GPP TS 33.108, clause 14.2.6, table
 * 14.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseGroupID  ::=  GcsePartyIdentity
 * ```
 */
export
type GcseGroupID = GcsePartyIdentity; // DefinedType

let _cached_decoder_for_GcseGroupID: $.ASN1Decoder<GcseGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseGroupID (el: _Element): GcseGroupID {
    if (!_cached_decoder_for_GcseGroupID) { _cached_decoder_for_GcseGroupID = _decode_GcsePartyIdentity; }
    return _cached_decoder_for_GcseGroupID(el);
}

let _cached_encoder_for_GcseGroupID: $.ASN1Encoder<GcseGroupID> | null = null;

/**
 * @summary Encodes a(n) GcseGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_GcseGroupID (value: GcseGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseGroupID) { _cached_encoder_for_GcseGroupID = _encode_GcsePartyIdentity; }
    return _cached_encoder_for_GcseGroupID(value, elGetter);
}


/* eslint-enable */
