/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
import { ModifiedSIPMessage, _decode_ModifiedSIPMessage, _encode_ModifiedSIPMessage } from "../TS33128Payloads/ModifiedSIPMessage.ta.mjs";
// export { ModifiedSIPMessage, _decode_ModifiedSIPMessage, _encode_ModifiedSIPMessage } from "../TS33128Payloads/ModifiedSIPMessage.ta.mjs";


/**
 * @summary IMSPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSPayload  ::=  CHOICE
 * {
 *     encapsulatedSIPMessage            [1] SIPMessage,
 *     modifiedSIPMessage                [2] ModifiedSIPMessage
 * }
 * ```
 */
export
type IMSPayload =
    { encapsulatedSIPMessage: SIPMessage } /* CHOICE_ALT_ROOT */
    | { modifiedSIPMessage: ModifiedSIPMessage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IMSPayload: $.ASN1Decoder<IMSPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSPayload (el: _Element): IMSPayload {
    if (!_cached_decoder_for_IMSPayload) { _cached_decoder_for_IMSPayload = $._decode_inextensible_choice<IMSPayload>({
    "CONTEXT 1": [ "encapsulatedSIPMessage", $._decode_implicit<SIPMessage>(() => _decode_SIPMessage) ],
    "CONTEXT 2": [ "modifiedSIPMessage", $._decode_implicit<ModifiedSIPMessage>(() => _decode_ModifiedSIPMessage) ]
}); }
    return _cached_decoder_for_IMSPayload(el);
}

let _cached_encoder_for_IMSPayload: $.ASN1Encoder<IMSPayload> | null = null;

/**
 * @summary Encodes a(n) IMSPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSPayload, encoded as an ASN.1 Element.
 */
export
function _encode_IMSPayload (value: IMSPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSPayload) { _cached_encoder_for_IMSPayload = $._encode_choice<IMSPayload>({
    "encapsulatedSIPMessage": $._encode_implicit(_TagClass.context, 1, () => _encode_SIPMessage, $.BER),
    "modifiedSIPMessage": $._encode_implicit(_TagClass.context, 2, () => _encode_ModifiedSIPMessage, $.BER),
}, $.BER); }
    return _cached_encoder_for_IMSPayload(value, elGetter);
}


/* eslint-enable */
