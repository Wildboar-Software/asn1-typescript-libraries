/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MIMEEntity, _decode_MIMEEntity, _encode_MIMEEntity } from "../TS33128Payloads/MIMEEntity.ta.mjs";
// export { MIMEEntity, _decode_MIMEEntity, _encode_MIMEEntity } from "../TS33128Payloads/MIMEEntity.ta.mjs";
import { MSRPMessage, _decode_MSRPMessage, _encode_MSRPMessage } from "../TS33128Payloads/MSRPMessage.ta.mjs";
// export { MSRPMessage, _decode_MSRPMessage, _encode_MSRPMessage } from "../TS33128Payloads/MSRPMessage.ta.mjs";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../TS33128Payloads/SIPMessage.ta.mjs";


/**
 * @summary EncapsulatedRCSPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedRCSPayload  ::=  CHOICE
 * {
 *     mIME [1] MIMEEntity,
 *     mSRP [2] MSRPMessage,
 *     sIP  [3] SIPMessage
 * }
 * ```
 */
export
type EncapsulatedRCSPayload =
    { mIME: MIMEEntity } /* CHOICE_ALT_ROOT */
    | { mSRP: MSRPMessage } /* CHOICE_ALT_ROOT */
    | { sIP: SIPMessage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EncapsulatedRCSPayload: $.ASN1Decoder<EncapsulatedRCSPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedRCSPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncapsulatedRCSPayload (el: _Element): EncapsulatedRCSPayload {
    if (!_cached_decoder_for_EncapsulatedRCSPayload) { _cached_decoder_for_EncapsulatedRCSPayload = $._decode_inextensible_choice<EncapsulatedRCSPayload>({
    "CONTEXT 1": [ "mIME", $._decode_implicit<MIMEEntity>(() => _decode_MIMEEntity) ],
    "CONTEXT 2": [ "mSRP", $._decode_implicit<MSRPMessage>(() => _decode_MSRPMessage) ],
    "CONTEXT 3": [ "sIP", $._decode_implicit<SIPMessage>(() => _decode_SIPMessage) ]
}); }
    return _cached_decoder_for_EncapsulatedRCSPayload(el);
}

let _cached_encoder_for_EncapsulatedRCSPayload: $.ASN1Encoder<EncapsulatedRCSPayload> | null = null;

/**
 * @summary Encodes a(n) EncapsulatedRCSPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedRCSPayload, encoded as an ASN.1 Element.
 */
export
function _encode_EncapsulatedRCSPayload (value: EncapsulatedRCSPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncapsulatedRCSPayload) { _cached_encoder_for_EncapsulatedRCSPayload = $._encode_choice<EncapsulatedRCSPayload>({
    "mIME": $._encode_implicit(_TagClass.context, 1, () => _encode_MIMEEntity, $.BER),
    "mSRP": $._encode_implicit(_TagClass.context, 2, () => _encode_MSRPMessage, $.BER),
    "sIP": $._encode_implicit(_TagClass.context, 3, () => _encode_SIPMessage, $.BER),
}, $.BER); }
    return _cached_encoder_for_EncapsulatedRCSPayload(value, elGetter);
}


/* eslint-enable */
