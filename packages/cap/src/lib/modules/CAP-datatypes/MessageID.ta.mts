import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageID_text, _decode_MessageID_text, _encode_MessageID_text } from "./MessageID-text.ta.mjs";
import { MessageID_variableMessage, _decode_MessageID_variableMessage, _encode_MessageID_variableMessage } from "./MessageID-variableMessage.ta.mjs";

/**
 * @summary MessageID
 * @description
 *
 * Message(s) to send (elementary ID, vendor-specific `text`, a list of
 * elementary IDs, or a variable message with up to five `VariablePart`s). Use
 * of `text` is network operator/equipment vendor specific. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageID {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  elementaryMessageID			[0] Integer4,
 *  text				[1] SEQUENCE {
 *  messageContent			[0] IA5String (SIZE(
 *  bound.&minMessageContentLength .. bound.&maxMessageContentLength)),
 *  attributes				[1] OCTET STRING (SIZE(
 *  bound.&minAttributesLength .. bound.&maxAttributesLength))		OPTIONAL
 *  },
 *  elementaryMessageIDs		[29] SEQUENCE SIZE (1.. bound.&numOfMessageIDs) OF Integer4,
 *  variableMessage			[30] SEQUENCE {
 *  elementaryMessageID			[0] Integer4,
 *  variableParts			[1] SEQUENCE SIZE (1..5) OF VariablePart {bound}
 *  }
 *  }
 * ```
 *
 */
export type MessageID =
{ elementaryMessageID: INTEGER }
    | { text: MessageID_text }
    | { elementaryMessageIDs: INTEGER[] }
    | { variableMessage: MessageID_variableMessage };

let _cached_decoder_for_MessageID: $.ASN1Decoder<MessageID> | null = null;
export function _decode_MessageID (el: _Element): MessageID {
    if (!_cached_decoder_for_MessageID) {
        _cached_decoder_for_MessageID = $._decode_inextensible_choice<MessageID>({
    "CONTEXT 0": [ "elementaryMessageID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "text", $._decode_implicit<MessageID_text>(() => _decode_MessageID_text) ],
    "CONTEXT 29": [ "elementaryMessageIDs", $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger)) ],
    "CONTEXT 30": [ "variableMessage", $._decode_implicit<MessageID_variableMessage>(() => _decode_MessageID_variableMessage) ]
        });
    }
    return _cached_decoder_for_MessageID(el);
}

let _cached_encoder_for_MessageID: $.ASN1Encoder<MessageID> | null = null;
export function _encode_MessageID (value: MessageID, elGetter: $.ASN1Encoder<MessageID>): _Element {
    if (!_cached_encoder_for_MessageID) {
        _cached_encoder_for_MessageID = $._encode_choice<MessageID>({
    "elementaryMessageID": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "text": $._encode_implicit(_TagClass.context, 1, () => _encode_MessageID_text, $.BER),
    "elementaryMessageIDs": $._encode_implicit(_TagClass.context, 29, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER),
    "variableMessage": $._encode_implicit(_TagClass.context, 30, () => _encode_MessageID_variableMessage, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_MessageID(value, elGetter);
}
