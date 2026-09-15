/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OPTIONAL, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { SpeakerVolumeList_Item, _decode_SpeakerVolumeList_Item, _encode_SpeakerVolumeList_Item } from "../CSTA-get-speaker-volume/SpeakerVolumeList-Item.ta.mjs";



/**
 * @summary SpeakerVolumeList
 * @description
 *
 * SEQUENCE OF speaker-volume entries (ECMA-269 §21.1.13.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeakerVolumeList  ::=  SEQUENCE OF SEQUENCE
 * {    auditoryApparatus        AuditoryApparatusID,
 *     speakerVolAbs            VolAbs                    OPTIONAL }
 * ```
 */
export
type SpeakerVolumeList = SpeakerVolumeList_Item[]; // SequenceOfType

let _cached_decoder_for_SpeakerVolumeList: $.ASN1Decoder<SpeakerVolumeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeakerVolumeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeakerVolumeList (el: _Element): SpeakerVolumeList {
    if (!_cached_decoder_for_SpeakerVolumeList) { _cached_decoder_for_SpeakerVolumeList = $._decodeSequenceOf<SpeakerVolumeList_Item>(() => _decode_SpeakerVolumeList_Item); }
    return _cached_decoder_for_SpeakerVolumeList(el);
}

let _cached_encoder_for_SpeakerVolumeList: $.ASN1Encoder<SpeakerVolumeList> | null = null;

/**
 * @summary Encodes a(n) SpeakerVolumeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeakerVolumeList, encoded as an ASN.1 Element.
 */
export
function _encode_SpeakerVolumeList (value: SpeakerVolumeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeakerVolumeList) { _cached_encoder_for_SpeakerVolumeList = $._encodeSequenceOf<SpeakerVolumeList_Item>(() => _encode_SpeakerVolumeList_Item, $.BER); }
    return _cached_encoder_for_SpeakerVolumeList(value, elGetter);
}


/* eslint-enable */
