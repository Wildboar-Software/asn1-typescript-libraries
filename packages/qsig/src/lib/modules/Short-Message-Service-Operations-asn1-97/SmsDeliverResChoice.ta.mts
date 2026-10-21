/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { ResChoiceSeq, _decode_ResChoiceSeq, _encode_ResChoiceSeq } from "../Short-Message-Service-Operations-asn1-97/ResChoiceSeq.ta.mjs";

/**
 * @summary SmsDeliverResChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsDeliverResChoice  ::=  CHOICE {
 *     null NULL,
 *     protocolIdentifier ProtocolIdentifier,
 *     userData [0] IMPLICIT UserData,
 *     resChoiceSeq [1] IMPLICIT ResChoiceSeq
 * }
 * ```
 */
export
type SmsDeliverResChoice =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { protocolIdentifier: ProtocolIdentifier } /* CHOICE_ALT_ROOT */
    | { userData: UserData } /* CHOICE_ALT_ROOT */
    | { resChoiceSeq: ResChoiceSeq } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SmsDeliverResChoice: $.ASN1Decoder<SmsDeliverResChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsDeliverResChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsDeliverResChoice (el: _Element): SmsDeliverResChoice {
    if (!_cached_decoder_for_SmsDeliverResChoice) { _cached_decoder_for_SmsDeliverResChoice = $._decode_inextensible_choice<SmsDeliverResChoice>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "UNIVERSAL 2": [ "protocolIdentifier", _decode_ProtocolIdentifier ],
    "CONTEXT 0": [ "userData", $._decode_implicit<UserData>(() => _decode_UserData) ],
    "CONTEXT 1": [ "resChoiceSeq", $._decode_implicit<ResChoiceSeq>(() => _decode_ResChoiceSeq) ]
}); }
    return _cached_decoder_for_SmsDeliverResChoice(el);
}

let _cached_encoder_for_SmsDeliverResChoice: $.ASN1Encoder<SmsDeliverResChoice> | null = null;

/**
 * @summary Encodes a(n) SmsDeliverResChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsDeliverResChoice, encoded as an ASN.1 Element.
 */
export
function _encode_SmsDeliverResChoice (value: SmsDeliverResChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsDeliverResChoice) { _cached_encoder_for_SmsDeliverResChoice = $._encode_choice<SmsDeliverResChoice>({
    "null_": $._encodeNull,
    "protocolIdentifier": _encode_ProtocolIdentifier,
    "userData": $._encode_implicit(_TagClass.context, 0, () => _encode_UserData, $.BER),
    "resChoiceSeq": $._encode_implicit(_TagClass.context, 1, () => _encode_ResChoiceSeq, $.BER),
}, $.BER); }
    return _cached_encoder_for_SmsDeliverResChoice(value, elGetter);
}

/* eslint-enable */
