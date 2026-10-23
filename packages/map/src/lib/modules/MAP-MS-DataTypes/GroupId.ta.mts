/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_TBCD_STRING, _encode_TBCD_STRING, TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary GroupId
 * @description
 *
 * VGCS/VBS Group Identification as specified in 3GPP TS 23.003 and 3GPP TS
 * 43.068/43.069. A subscriber can partake in all group calls where the
 * respective groups are subscribed. When less than six characters, TBCD filler
 * (1111) fills unused half octets (3GPP TS 29.002 V19.1.0 clauses 7.6.2.33 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupId   ::=  TBCD-STRING (SIZE (3))
 * ```
 */
export
type GroupId = TBCD_STRING; // DefinedType

let _cached_decoder_for_GroupId: $.ASN1Decoder<GroupId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupId (el: _Element): GroupId {
    if (!_cached_decoder_for_GroupId) { _cached_decoder_for_GroupId = _decode_TBCD_STRING; }
    return _cached_decoder_for_GroupId(el);
}

let _cached_encoder_for_GroupId: $.ASN1Encoder<GroupId> | null = null;

/**
 * @summary Encodes a(n) GroupId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupId, encoded as an ASN.1 Element.
 */
export
function _encode_GroupId (value: GroupId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupId) { _cached_encoder_for_GroupId = _encode_TBCD_STRING; }
    return _cached_encoder_for_GroupId(value, elGetter);
}


/* eslint-enable */
