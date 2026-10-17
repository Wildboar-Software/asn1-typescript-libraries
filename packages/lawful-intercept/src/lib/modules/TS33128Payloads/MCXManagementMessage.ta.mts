/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCXIdMMessage, _decode_MCXIdMMessage, _encode_MCXIdMMessage } from "../TS33128Payloads/MCXIdMMessage.ta.mjs";
// export { MCXIdMMessage, _decode_MCXIdMMessage, _encode_MCXIdMMessage } from "../TS33128Payloads/MCXIdMMessage.ta.mjs";
import { MCXCMMessage, _decode_MCXCMMessage, _encode_MCXCMMessage } from "../TS33128Payloads/MCXCMMessage.ta.mjs";
// export { MCXCMMessage, _decode_MCXCMMessage, _encode_MCXCMMessage } from "../TS33128Payloads/MCXCMMessage.ta.mjs";
import { MCXGMMessage, _decode_MCXGMMessage, _encode_MCXGMMessage } from "../TS33128Payloads/MCXGMMessage.ta.mjs";
// export { MCXGMMessage, _decode_MCXGMMessage, _encode_MCXGMMessage } from "../TS33128Payloads/MCXGMMessage.ta.mjs";
import { MCXKMMessage, _decode_MCXKMMessage, _encode_MCXKMMessage } from "../TS33128Payloads/MCXKMMessage.ta.mjs";
// export { MCXKMMessage, _decode_MCXKMMessage, _encode_MCXKMMessage } from "../TS33128Payloads/MCXKMMessage.ta.mjs";
import { MCXLMMessage, _decode_MCXLMMessage, _encode_MCXLMMessage } from "../TS33128Payloads/MCXLMMessage.ta.mjs";
// export { MCXLMMessage, _decode_MCXLMMessage, _encode_MCXLMMessage } from "../TS33128Payloads/MCXLMMessage.ta.mjs";


/**
 * @summary MCXManagementMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCXManagementMessage  ::=  CHOICE
 * {
 *     mcXIdMMessage [1] MCXIdMMessage,
 *     mCXCMMessage  [2] MCXCMMessage,
 *     mCXGMMessage  [3] MCXGMMessage,
 *     mCXKMMessage  [4] MCXKMMessage,
 *     mCXLMMessage  [5] MCXLMMessage
 * }
 * ```
 */
export
type MCXManagementMessage =
    { mcXIdMMessage: MCXIdMMessage } /* CHOICE_ALT_ROOT */
    | { mCXCMMessage: MCXCMMessage } /* CHOICE_ALT_ROOT */
    | { mCXGMMessage: MCXGMMessage } /* CHOICE_ALT_ROOT */
    | { mCXKMMessage: MCXKMMessage } /* CHOICE_ALT_ROOT */
    | { mCXLMMessage: MCXLMMessage } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MCXManagementMessage: $.ASN1Decoder<MCXManagementMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCXManagementMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCXManagementMessage (el: _Element): MCXManagementMessage {
    if (!_cached_decoder_for_MCXManagementMessage) { _cached_decoder_for_MCXManagementMessage = $._decode_extensible_choice<MCXManagementMessage>({
    "CONTEXT 1": [ "mcXIdMMessage", $._decode_implicit<MCXIdMMessage>(() => _decode_MCXIdMMessage) ],
    "CONTEXT 2": [ "mCXCMMessage", $._decode_implicit<MCXCMMessage>(() => _decode_MCXCMMessage) ],
    "CONTEXT 3": [ "mCXGMMessage", $._decode_implicit<MCXGMMessage>(() => _decode_MCXGMMessage) ],
    "CONTEXT 4": [ "mCXKMMessage", $._decode_implicit<MCXKMMessage>(() => _decode_MCXKMMessage) ],
    "CONTEXT 5": [ "mCXLMMessage", $._decode_implicit<MCXLMMessage>(() => _decode_MCXLMMessage) ]
}); }
    return _cached_decoder_for_MCXManagementMessage(el);
}

let _cached_encoder_for_MCXManagementMessage: $.ASN1Encoder<MCXManagementMessage> | null = null;

/**
 * @summary Encodes a(n) MCXManagementMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCXManagementMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MCXManagementMessage (value: MCXManagementMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCXManagementMessage) { _cached_encoder_for_MCXManagementMessage = $._encode_choice<MCXManagementMessage>({
    "mcXIdMMessage": $._encode_implicit(_TagClass.context, 1, () => _encode_MCXIdMMessage, $.BER),
    "mCXCMMessage": $._encode_implicit(_TagClass.context, 2, () => _encode_MCXCMMessage, $.BER),
    "mCXGMMessage": $._encode_implicit(_TagClass.context, 3, () => _encode_MCXGMMessage, $.BER),
    "mCXKMMessage": $._encode_implicit(_TagClass.context, 4, () => _encode_MCXKMMessage, $.BER),
    "mCXLMMessage": $._encode_implicit(_TagClass.context, 5, () => _encode_MCXLMMessage, $.BER),
}, $.BER); }
    return _cached_encoder_for_MCXManagementMessage(value, elGetter);
}


/* eslint-enable */
