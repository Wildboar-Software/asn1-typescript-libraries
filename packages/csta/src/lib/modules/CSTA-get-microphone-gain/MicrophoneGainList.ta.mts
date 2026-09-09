/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OPTIONAL, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { MicrophoneGainList_Item, _decode_MicrophoneGainList_Item, _encode_MicrophoneGainList_Item } from "../CSTA-get-microphone-gain/MicrophoneGainList-Item.ta.mjs";



/**
 * @summary MicrophoneGainList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneGainList  ::=  SEQUENCE OF SEQUENCE
 * {    auditoryApparatus        AuditoryApparatusID,
 *     micGainAbs            MicGainAbs                OPTIONAL }
 * ```
 */
export
type MicrophoneGainList = MicrophoneGainList_Item[]; // SequenceOfType

let _cached_decoder_for_MicrophoneGainList: $.ASN1Decoder<MicrophoneGainList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneGainList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneGainList (el: _Element): MicrophoneGainList {
    if (!_cached_decoder_for_MicrophoneGainList) { _cached_decoder_for_MicrophoneGainList = $._decodeSequenceOf<MicrophoneGainList_Item>(() => _decode_MicrophoneGainList_Item); }
    return _cached_decoder_for_MicrophoneGainList(el);
}

let _cached_encoder_for_MicrophoneGainList: $.ASN1Encoder<MicrophoneGainList> | null = null;

/**
 * @summary Encodes a(n) MicrophoneGainList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneGainList, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneGainList (value: MicrophoneGainList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneGainList) { _cached_encoder_for_MicrophoneGainList = $._encodeSequenceOf<MicrophoneGainList_Item>(() => _encode_MicrophoneGainList_Item, $.BER); }
    return _cached_encoder_for_MicrophoneGainList(value, elGetter);
}


/* eslint-enable */
