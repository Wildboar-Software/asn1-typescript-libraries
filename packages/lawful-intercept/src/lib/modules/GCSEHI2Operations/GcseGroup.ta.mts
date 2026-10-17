/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";
// export { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";


/**
 * @summary GcseGroup
 * @description
 * 
 * List of GCSE party identities. Used both for members who could participate
 * and for parties actually in the active communication. 3GPP TS 33.108, clause
 * 14.2.6, table 14.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcseGroup  ::=  SEQUENCE OF GcsePartyIdentity
 * ```
 */
export
type GcseGroup = GcsePartyIdentity[]; // SequenceOfType

let _cached_decoder_for_GcseGroup: $.ASN1Decoder<GcseGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcseGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcseGroup (el: _Element): GcseGroup {
    if (!_cached_decoder_for_GcseGroup) { _cached_decoder_for_GcseGroup = $._decodeSequenceOf<GcsePartyIdentity>(() => _decode_GcsePartyIdentity); }
    return _cached_decoder_for_GcseGroup(el);
}

let _cached_encoder_for_GcseGroup: $.ASN1Encoder<GcseGroup> | null = null;

/**
 * @summary Encodes a(n) GcseGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcseGroup, encoded as an ASN.1 Element.
 */
export
function _encode_GcseGroup (value: GcseGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcseGroup) { _cached_encoder_for_GcseGroup = $._encodeSequenceOf<GcsePartyIdentity>(() => _encode_GcsePartyIdentity, $.BER); }
    return _cached_encoder_for_GcseGroup(value, elGetter);
}


/* eslint-enable */
