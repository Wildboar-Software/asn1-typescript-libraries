/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MasterChannelComposition, _decode_MasterChannelComposition, _encode_MasterChannelComposition } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/MasterChannelComposition.ta.mjs";


/**
 * @summary GvcIdSet
 * @description
 *
 * The Master Channel and Virtual Channels the user may select on this service
 * instance. An instance permits one Master Channel, or one Virtual Channel, or
 * one Master Channel plus a set of its Virtual Channels. Only one of those
 * channels is delivered at a time. Service management sets the set.
 * RCF-GET-PARAMETER returns it as permitted-global-VCID-set.
 *
 * CCSDS 911.2-B-4, sections 2.1, 3.4.2.7, and table 3-11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GvcIdSet                       ::=  SET OF MasterChannelComposition
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
