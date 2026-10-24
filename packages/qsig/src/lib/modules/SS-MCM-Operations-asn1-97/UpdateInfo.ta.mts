/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../SS-MCM-Operations-asn1-97/MessageInfo.ta.mjs";
import { AllMsgInfo, _decode_AllMsgInfo, _encode_AllMsgInfo } from "../SS-MCM-Operations-asn1-97/AllMsgInfo.ta.mjs";

/**
 * @summary UpdateInfo
 * @description
 *
 * What one `mCMUpdate` reports for a Message Type (ECMA-347
 * §6.5.1.1.4). `newMsgInfoOnly` is new messages,
 * `retrievedMsgInfoOnly` is retrieved messages, and
 * `allMsgInfo` is both. Each side is complete information,
 * compressed information, or no messages of that status.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateInfo  ::=  CHOICE {
 *     newMsgInfoOnly [1] MessageInfo,
 *     retrievedMsgInfoOnly [2] MessageInfo,
 *     allMsgInfo AllMsgInfo
 * }
 * ```
 */
export
type UpdateInfo =
    { newMsgInfoOnly: MessageInfo } /* CHOICE_ALT_ROOT */
    | { retrievedMsgInfoOnly: MessageInfo } /* CHOICE_ALT_ROOT */
    | { allMsgInfo: AllMsgInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UpdateInfo: $.ASN1Decoder<UpdateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateInfo (el: _Element): UpdateInfo {
    if (!_cached_decoder_for_UpdateInfo) { _cached_decoder_for_UpdateInfo = $._decode_inextensible_choice<UpdateInfo>({
    "CONTEXT 1": [ "newMsgInfoOnly", $._decode_explicit<MessageInfo>(() => _decode_MessageInfo) ],
    "CONTEXT 2": [ "retrievedMsgInfoOnly", $._decode_explicit<MessageInfo>(() => _decode_MessageInfo) ],
    "UNIVERSAL 16": [ "allMsgInfo", _decode_AllMsgInfo ]
}); }
    return _cached_decoder_for_UpdateInfo(el);
}

let _cached_encoder_for_UpdateInfo: $.ASN1Encoder<UpdateInfo> | null = null;

/**
 * @summary Encodes a(n) UpdateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateInfo (value: UpdateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateInfo) { _cached_encoder_for_UpdateInfo = $._encode_choice<UpdateInfo>({
    "newMsgInfoOnly": $._encode_explicit(_TagClass.context, 1, () => _encode_MessageInfo, $.BER),
    "retrievedMsgInfoOnly": $._encode_explicit(_TagClass.context, 2, () => _encode_MessageInfo, $.BER),
    "allMsgInfo": _encode_AllMsgInfo,
}, $.BER); }
    return _cached_encoder_for_UpdateInfo(value, elGetter);
}

/* eslint-enable */
