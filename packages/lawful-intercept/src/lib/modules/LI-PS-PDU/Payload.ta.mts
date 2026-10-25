/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IRIPayload, _decode_IRIPayload, _encode_IRIPayload } from "../TS33128Payloads/IRIPayload.ta.mjs";
// export { IRIPayload, _decode_IRIPayload, _encode_IRIPayload } from "../TS33128Payloads/IRIPayload.ta.mjs";
import { CCPayload, _decode_CCPayload, _encode_CCPayload } from "../TS33128Payloads/CCPayload.ta.mjs";
// export { CCPayload, _decode_CCPayload, _encode_CCPayload } from "../TS33128Payloads/CCPayload.ta.mjs";
import { type TRIPayload, _decode_TRIPayload, _encode_TRIPayload } from "../LI-PS-PDU/TRIPayload.ta.mjs";
// export { TRIPayload, _decode_TRIPayload, _encode_TRIPayload } from "../LI-PS-PDU/TRIPayload.ta.mjs";
// export { HI1_Operation, _decode_HI1_Operation, _encode_HI1_Operation } from "../HI1NotificationOperations/HI1-Operation.ta.mjs";
import { EncryptionContainer, _decode_EncryptionContainer, _encode_EncryptionContainer } from "../LI-PS-PDU/EncryptionContainer.ta.mjs";
// export { EncryptionContainer, _decode_EncryptionContainer, _encode_EncryptionContainer } from "../LI-PS-PDU/EncryptionContainer.ta.mjs";
// export { ThreeGPP_HI1_Operation, _decode_ThreeGPP_HI1_Operation, _encode_ThreeGPP_HI1_Operation } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-HI1-Operation.ta.mjs";
// export { ILHIPayload, _decode_ILHIPayload, _encode_ILHIPayload } from "../ILHIPDU/ILHIPayload.ta.mjs";
import { type HI4Payload, _decode_HI4Payload, _encode_HI4Payload } from "../LI-PS-PDU/HI4Payload.ta.mjs";
import * as HI1NotificationOperations from "../HI1NotificationOperations/index.mjs";
import * as ILHIPDU from "../ILHIPDU/index.mjs";
import * as ThreeGPP_HI1NotificationOperations from "../ThreeGPP-HI1NotificationOperations/index.mjs";
// export { HI4Payload, _decode_HI4Payload, _encode_HI4Payload } from "../LI-PS-PDU/HI4Payload.ta.mjs";


/**
 * @summary Payload
 * @description
 * 
 * What the PS-PDU carries. IRI and CC may be a sequence so that clause 6.2.3
 * can aggregate several payloads under one header and one sequence number. TRI
 * is a single transport message. The extension alternatives carry HI1
 * notifications, an encrypted payload, inter-LEMF handover, or HI4
 * notifications.
 *
 * Aggregation is allowed only when the CSP and LEA agree. Payloads in one PDU
 * may differ in timestamp, in direction (IRI or CC), or in IRI type, and in
 * nothing else: a different LIID or operator is not aggregated. Order inside
 * the PDU is the order of arrival at the handover manager. Each payload may
 * carry its own timestamp and `timeStampQualifier`; the header timestamp, if
 * present for this purpose, is `timeOfAggregation`.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.8, clause 6.2.3, clause 4.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Payload  ::=  CHOICE
 * {
 *     iRIPayloadSequence      [0] SEQUENCE OF IRIPayload,
 *     cCPayloadSequence       [1] SEQUENCE OF CCPayload,
 *         -- Clause 6.2.3 explains how to include more than one payload in the same PDU
 *     tRIPayload              [2] TRIPayload,
 *     ...,
 *     hI1-Operation           [3] HI1NotificationOperations.HI1-Operation,
 *     encryptionContainer     [4] EncryptionContainer,
 *     threeGPP-HI1-Operation  [5] ThreeGPP-HI1NotificationOperations.ThreeGPP-HI1-Operation,
 *         -- This structure may be functionally redundant with hI1-Operation from ETSI TS 101 671 [4]
 *     iLHIPayload             [6] SEQUENCE OF ILHIPDU.ILHIPayload,
 *         -- For typical use cases see ETSI TS 103 462 [45]
 *     hI4Payload              [7] SEQUENCE OF HI4Payload
 * }
 * ```
 */
export
type Payload =
    { iRIPayloadSequence: IRIPayload[] } /* CHOICE_ALT_ROOT */
    | { cCPayloadSequence: CCPayload[] } /* CHOICE_ALT_ROOT */
    | { tRIPayload: TRIPayload } /* CHOICE_ALT_ROOT */
    | { hI1_Operation: HI1NotificationOperations.HI1_Operation } /* CHOICE_ALT_EXT */
    | { encryptionContainer: EncryptionContainer } /* CHOICE_ALT_EXT */
    | { threeGPP_HI1_Operation: ThreeGPP_HI1NotificationOperations.ThreeGPP_HI1_Operation } /* CHOICE_ALT_EXT */
    | { iLHIPayload: ILHIPDU.ILHIPayload[] } /* CHOICE_ALT_EXT */
    | { hI4Payload: HI4Payload[] } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Payload: $.ASN1Decoder<Payload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Payload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Payload (el: _Element): Payload {
    if (!_cached_decoder_for_Payload) { _cached_decoder_for_Payload = $._decode_extensible_choice<Payload>({
    "CONTEXT 0": [ "iRIPayloadSequence", $._decode_implicit<IRIPayload[]>(() => $._decodeSequenceOf<IRIPayload>(() => _decode_IRIPayload)) ],
    "CONTEXT 1": [ "cCPayloadSequence", $._decode_implicit<CCPayload[]>(() => $._decodeSequenceOf<CCPayload>(() => _decode_CCPayload)) ],
    "CONTEXT 2": [ "tRIPayload", $._decode_explicit<TRIPayload>(() => _decode_TRIPayload) ],
    "CONTEXT 3": [ "hI1_Operation", $._decode_explicit<HI1NotificationOperations.HI1_Operation>(() => HI1NotificationOperations._decode_HI1_Operation) ],
    "CONTEXT 4": [ "encryptionContainer", $._decode_implicit<EncryptionContainer>(() => _decode_EncryptionContainer) ],
    "CONTEXT 5": [ "threeGPP_HI1_Operation", $._decode_explicit<ThreeGPP_HI1NotificationOperations.ThreeGPP_HI1_Operation>(() => ThreeGPP_HI1NotificationOperations._decode_ThreeGPP_HI1_Operation) ],
    "CONTEXT 6": [ "iLHIPayload", $._decode_implicit<ILHIPDU.ILHIPayload[]>(() => $._decodeSequenceOf<ILHIPDU.ILHIPayload>(() => ILHIPDU._decode_ILHIPayload)) ],
    "CONTEXT 7": [ "hI4Payload", $._decode_implicit<HI4Payload[]>(() => $._decodeSequenceOf<HI4Payload>(() => _decode_HI4Payload)) ]
}); }
    return _cached_decoder_for_Payload(el);
}

let _cached_encoder_for_Payload: $.ASN1Encoder<Payload> | null = null;

/**
 * @summary Encodes a(n) Payload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload, encoded as an ASN.1 Element.
 */
export
function _encode_Payload (value: Payload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Payload) { _cached_encoder_for_Payload = $._encode_choice<Payload>({
    "iRIPayloadSequence": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<IRIPayload>(() => _encode_IRIPayload, $.BER), $.BER),
    "cCPayloadSequence": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<CCPayload>(() => _encode_CCPayload, $.BER), $.BER),
    "tRIPayload": $._encode_explicit(_TagClass.context, 2, () => _encode_TRIPayload, $.BER),
    "hI1_Operation": $._encode_explicit(_TagClass.context, 3, () => HI1NotificationOperations._encode_HI1_Operation, $.BER),
    "encryptionContainer": $._encode_implicit(_TagClass.context, 4, () => _encode_EncryptionContainer, $.BER),
    "threeGPP_HI1_Operation": $._encode_explicit(_TagClass.context, 5, () => ThreeGPP_HI1NotificationOperations._encode_ThreeGPP_HI1_Operation, $.BER),
    "iLHIPayload": $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ILHIPDU.ILHIPayload>(() => ILHIPDU._encode_ILHIPayload, $.BER), $.BER),
    "hI4Payload": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<HI4Payload>(() => _encode_HI4Payload, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_Payload(value, elGetter);
}


/* eslint-enable */
