/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MasterChannelComposition, _decode_MasterChannelComposition, _encode_MasterChannelComposition } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/MasterChannelComposition.ta.mjs";


/**
 * @summary GvcIdSet
 * @description
 * 
 * permitted-global-VCID-set. Service management configures the Master Channel
 * and Virtual Channels from which this instance may extract OCFs. One instance
 * permits one Master Channel, one Virtual Channel, or one Master Channel
 * together with a set of its Virtual Channels. ROCF-START must request a
 * member of this set. When the set contains a Master Channel and no Virtual
 * Channel of that Master Channel, the user cannot request a Virtual Channel of
 * it.
 *
 * CCSDS 911.5-B-4, sections 2.1, 2.7, 3.4.2.7, and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GvcIdSet                 ::=  SET OF MasterChannelComposition
 * ```
 */
export
type GvcIdSet = MasterChannelComposition[]; // SetOfType

let _cached_decoder_for_GvcIdSet: $.ASN1Decoder<GvcIdSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GvcIdSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GvcIdSet (el: _Element): GvcIdSet {
    if (!_cached_decoder_for_GvcIdSet) { _cached_decoder_for_GvcIdSet = $._decodeSetOf<MasterChannelComposition>(() => _decode_MasterChannelComposition); }
    return _cached_decoder_for_GvcIdSet(el);
}

let _cached_encoder_for_GvcIdSet: $.ASN1Encoder<GvcIdSet> | null = null;

/**
 * @summary Encodes a(n) GvcIdSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GvcIdSet, encoded as an ASN.1 Element.
 */
export
function _encode_GvcIdSet (value: GvcIdSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GvcIdSet) { _cached_encoder_for_GvcIdSet = $._encodeSetOf<MasterChannelComposition>(() => _encode_MasterChannelComposition, $.BER); }
    return _cached_encoder_for_GvcIdSet(value, elGetter);
}


/* eslint-enable */
