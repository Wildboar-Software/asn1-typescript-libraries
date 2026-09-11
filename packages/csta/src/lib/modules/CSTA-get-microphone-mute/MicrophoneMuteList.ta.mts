/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BOOLEAN, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { MicrophoneMuteList_Item, _decode_MicrophoneMuteList_Item, _encode_MicrophoneMuteList_Item } from "../CSTA-get-microphone-mute/MicrophoneMuteList-Item.ta.mjs";



/**
 * @summary MicrophoneMuteList
 * @description
 *
 * SEQUENCE OF microphone-mute entries (ECMA-269 §21.1.10.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneMuteList  ::=  SEQUENCE OF SEQUENCE
 * {    auditoryApparatus        AuditoryApparatusID,
 *     microphoneMuteOn        BOOLEAN }
 * ```
 */
export
type MicrophoneMuteList = MicrophoneMuteList_Item[]; // SequenceOfType

let _cached_decoder_for_MicrophoneMuteList: $.ASN1Decoder<MicrophoneMuteList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneMuteList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneMuteList (el: _Element): MicrophoneMuteList {
    if (!_cached_decoder_for_MicrophoneMuteList) { _cached_decoder_for_MicrophoneMuteList = $._decodeSequenceOf<MicrophoneMuteList_Item>(() => _decode_MicrophoneMuteList_Item); }
    return _cached_decoder_for_MicrophoneMuteList(el);
}

let _cached_encoder_for_MicrophoneMuteList: $.ASN1Encoder<MicrophoneMuteList> | null = null;

/**
 * @summary Encodes a(n) MicrophoneMuteList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneMuteList, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneMuteList (value: MicrophoneMuteList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneMuteList) { _cached_encoder_for_MicrophoneMuteList = $._encodeSequenceOf<MicrophoneMuteList_Item>(() => _encode_MicrophoneMuteList_Item, $.BER); }
    return _cached_encoder_for_MicrophoneMuteList(value, elGetter);
}


/* eslint-enable */
