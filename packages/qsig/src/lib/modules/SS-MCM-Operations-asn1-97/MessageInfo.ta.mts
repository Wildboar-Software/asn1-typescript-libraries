/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompleteInfo, _decode_CompleteInfo, _encode_CompleteInfo } from "../SS-MCM-Operations-asn1-97/CompleteInfo.ta.mjs";
// export { CompleteInfo, _decode_CompleteInfo, _encode_CompleteInfo } from "../SS-MCM-Operations-asn1-97/CompleteInfo.ta.mjs";
import { CompressedInfo, _decode_CompressedInfo, _encode_CompressedInfo } from "../SS-MCM-Operations-asn1-97/CompressedInfo.ta.mjs";
// export { CompressedInfo, _decode_CompressedInfo, _encode_CompressedInfo } from "../SS-MCM-Operations-asn1-97/CompressedInfo.ta.mjs";


/**
 * @summary MessageInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageInfo  ::=  CHOICE {
 *     completeInfo [1] IMPLICIT CompleteInfo,
 *     compressedInfo [2] IMPLICIT CompressedInfo,
 *     noMsgsOfMsgType NULL
 * }
 * ```
 */
export
type MessageInfo =
    { completeInfo: CompleteInfo } /* CHOICE_ALT_ROOT */
    | { compressedInfo: CompressedInfo } /* CHOICE_ALT_ROOT */
    | { noMsgsOfMsgType: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MessageInfo: $.ASN1Decoder<MessageInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageInfo (el: _Element): MessageInfo {
    if (!_cached_decoder_for_MessageInfo) { _cached_decoder_for_MessageInfo = $._decode_inextensible_choice<MessageInfo>({
    "CONTEXT 1": [ "completeInfo", $._decode_implicit<CompleteInfo>(() => _decode_CompleteInfo) ],
    "CONTEXT 2": [ "compressedInfo", $._decode_implicit<CompressedInfo>(() => _decode_CompressedInfo) ],
    "UNIVERSAL 5": [ "noMsgsOfMsgType", $._decodeNull ]
}); }
    return _cached_decoder_for_MessageInfo(el);
}

let _cached_encoder_for_MessageInfo: $.ASN1Encoder<MessageInfo> | null = null;

/**
 * @summary Encodes a(n) MessageInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MessageInfo (value: MessageInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageInfo) { _cached_encoder_for_MessageInfo = $._encode_choice<MessageInfo>({
    "completeInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_CompleteInfo, $.BER),
    "compressedInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_CompressedInfo, $.BER),
    "noMsgsOfMsgType": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_MessageInfo(value, elGetter);
}


/* eslint-enable */
