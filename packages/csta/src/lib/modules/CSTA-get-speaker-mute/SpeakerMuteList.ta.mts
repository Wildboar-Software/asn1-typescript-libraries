/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BOOLEAN, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { SpeakerMuteList_Item, _decode_SpeakerMuteList_Item, _encode_SpeakerMuteList_Item } from "../CSTA-get-speaker-mute/SpeakerMuteList-Item.ta.mjs";



/**
 * @summary SpeakerMuteList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerMuteList  ::=  SEQUENCE OF SEQUENCE
 * {    auditoryApparatus        AuditoryApparatusID,
 *     speakerMuteOn            BOOLEAN }
 * ```
 */
export
type SpeakerMuteList = SpeakerMuteList_Item[]; // SequenceOfType

let _cached_decoder_for_SpeakerMuteList: $.ASN1Decoder<SpeakerMuteList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerMuteList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerMuteList (el: _Element): SpeakerMuteList {
    if (!_cached_decoder_for_SpeakerMuteList) { _cached_decoder_for_SpeakerMuteList = $._decodeSequenceOf<SpeakerMuteList_Item>(() => _decode_SpeakerMuteList_Item); }
    return _cached_decoder_for_SpeakerMuteList(el);
}

let _cached_encoder_for_SpeakerMuteList: $.ASN1Encoder<SpeakerMuteList> | null = null;

/**
 * @summary Encodes a(n) SpeakerMuteList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerMuteList, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerMuteList (value: SpeakerMuteList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerMuteList) { _cached_encoder_for_SpeakerMuteList = $._encodeSequenceOf<SpeakerMuteList_Item>(() => _encode_SpeakerMuteList_Item, $.BER); }
    return _cached_encoder_for_SpeakerMuteList(value, elGetter);
}


/* eslint-enable */
