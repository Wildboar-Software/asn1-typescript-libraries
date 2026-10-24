/* eslint-disable */
import {
    NULL,
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntegrityCheck, _decode_IntegrityCheck, _encode_IntegrityCheck } from "../LI-PS-PDU/IntegrityCheck.ta.mjs";
// export { IntegrityCheck, _decode_IntegrityCheck, _encode_IntegrityCheck } from "../LI-PS-PDU/IntegrityCheck.ta.mjs";
import { OperatorLeaMessage, _decode_OperatorLeaMessage, _encode_OperatorLeaMessage } from "../LI-PS-PDU/OperatorLeaMessage.ta.mjs";
// export { OperatorLeaMessage, _decode_OperatorLeaMessage, _encode_OperatorLeaMessage } from "../LI-PS-PDU/OperatorLeaMessage.ta.mjs";
import { OptionRequest, _decode_OptionRequest, _encode_OptionRequest } from "../LI-PS-PDU/OptionRequest.ta.mjs";
// export { OptionRequest, _decode_OptionRequest, _encode_OptionRequest } from "../LI-PS-PDU/OptionRequest.ta.mjs";
import { OptionResponse, _decode_OptionResponse, _encode_OptionResponse } from "../LI-PS-PDU/OptionResponse.ta.mjs";
// export { OptionResponse, _decode_OptionResponse, _encode_OptionResponse } from "../LI-PS-PDU/OptionResponse.ta.mjs";


/**
 * @summary TRIPayload
 * @description
 * 
 * Transport-related information. It covers delivery of intercepted data toward
 * the LEA, and maintenance of the transport connection between a delivery
 * function and an LEMF gateway. TRI is its own payload alternative in the
 * sequence-number context. Among TRI, keep-alive, integrityCheck, the
 * option-negotiation messages, and pDUAcknowledgementRequest are each
 * counted on their own.
 *
 * `integrityCheck` is the annex J hash or signature. `testPDU` is end-to-end
 * test traffic: LIID, country code, communication identifier, and timestamp are
 * filled in, and the sequence number is zero. It should be sent at activation
 * and may be sent at other times. `paddingPDU` changes the data rate so the
 * flow pattern is not itself informative. The handover manager creates it and
 * the LEMF handover manager removes it. The object identifier, operator
 * identifier, and optional network-element identifier are correct; every other
 * header field may be any value. The octet string is discarded and shall not
 * carry meaningful data.
 *
 * `firstSegmentFlag` is sent before the first segment of a large application
 * block, and `lastSegmentFlag` after the last (clause 6.2.4). Each copies the
 * corresponding segment PDU's communication identifier, authorization country
 * code, LIID, and sequence number, and should omit the timestamp. `cINReset`
 * says CIN state was lost. After a crash that loses CIN state for the system,
 * the LIID is a single "-" (ASCII 45), the timestamp, operator identifier, and
 * network-element identifier are present and correct, and the CIN and sequence
 * number are zero. After loss for one LIID, that LIID is used, the same three
 * fields are present, and the sequence number is zero; the LEMF treats CIN
 * state for that LIID as reset. By agreement the single-LIID reset may be sent
 * on every activation. If persistent storage exists, equipment shall be
 * designed to avoid losing CIN state. `operatorLeaMessage` carries an error
 * report.
 *
 * `keep-alive` is the session-layer keep-alive. The delivery function timer
 * starts when the connection opens and resets when data is sent. At TIME1
 * (often 120 s to 360 s, and it may be sent earlier) it sends this message. The
 * sequence number increases for each keep-alive of that delivery-function
 * instance. Timestamp and domain identifier are set; every other header field
 * may be any value. The LEMF answers with `keep-aliveResponse` within TIME2
 * (often 30 s). That response repeats the request's sequence number, refreshes
 * the timestamp, and may put any value in the other header fields. If no
 * response arrives within TIME3 (often 60 s, and longer than TIME2), the MF
 * drops the transport connection and opens another.
 *
 * `optionRequest`, `optionResponse`, and `optionComplete` are clause 6.3.5.
 * `optionComplete` means the sender is satisfied with the options most recently
 * accepted by the peer. Negotiation is finished only when an endpoint has both
 * sent and received `optionComplete`. `pDUAcknowledgementRequest` asks the LGW
 * to confirm that every PDU up to this message, on this session, has been
 * received and processed (persistence of that processing is national). The
 * sequence number increases per request of that delivery function. Timestamp
 * and domain identifier are set; other header fields are any value valid for
 * the type. `pDUAcknowledgementResponse` repeats that sequence number,
 * refreshes the timestamp, and should copy the other header fields. The LGW
 * answers within TIME4 (often 30 s). If none arrives within TIME5 (often 60 s,
 * and longer than TIME4), the DF drops the connection and retransmits
 * unacknowledged data. The gap between requests (TIME6) is chosen against
 * buffer size and throughput. Use is either the negotiated `pDUAcknowledgement`
 * option or a required behaviour that does not need negotiation.
 *
 * The delivery function's cyclic buffer does not store a keep-alive, an
 * option-negotiation message, or a `pDUAcknowledgementRequest`. Those are not
 * replayed when the transport connection is reopened.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.8, clause 6.2.2, clause
 * 6.3.3, clause 6.3.4, clause 6.3.5, clause 6.3.6.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRIPayload  ::=  CHOICE
 * {
 *     integrityCheck                  [0] IntegrityCheck,
 *     testPDU                         [1] NULL,
 *     paddingPDU                      [2] OCTET STRING,
 *         -- Undefined contents (will be discarded)
 *     keep-alive                      [3] NULL,
 *     keep-aliveResponse              [4] NULL,
 *     firstSegmentFlag                [5] NULL,
 *     lastSegmentFlag                 [6] NULL,
 *     ...,
 *     cINReset                        [7] NULL,
 *     operatorLeaMessage              [8] OperatorLeaMessage,
 *     optionRequest                   [9] OptionRequest,
 *     optionResponse                  [10] OptionResponse,
 *     optionComplete                  [11] NULL,
 *     pDUAcknowledgementRequest       [12] NULL,
 *     pDUAcknowledgementResponse      [13] NULL
 * }
 * ```
 */
export
type TRIPayload =
    { integrityCheck: IntegrityCheck } /* CHOICE_ALT_ROOT */
    | { testPDU: NULL } /* CHOICE_ALT_ROOT */
    | { paddingPDU: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { keep_alive: NULL } /* CHOICE_ALT_ROOT */
    | { keep_aliveResponse: NULL } /* CHOICE_ALT_ROOT */
    | { firstSegmentFlag: NULL } /* CHOICE_ALT_ROOT */
    | { lastSegmentFlag: NULL } /* CHOICE_ALT_ROOT */
    | { cINReset: NULL } /* CHOICE_ALT_EXT */
    | { operatorLeaMessage: OperatorLeaMessage } /* CHOICE_ALT_EXT */
    | { optionRequest: OptionRequest } /* CHOICE_ALT_EXT */
    | { optionResponse: OptionResponse } /* CHOICE_ALT_EXT */
    | { optionComplete: NULL } /* CHOICE_ALT_EXT */
    | { pDUAcknowledgementRequest: NULL } /* CHOICE_ALT_EXT */
    | { pDUAcknowledgementResponse: NULL } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TRIPayload: $.ASN1Decoder<TRIPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TRIPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TRIPayload (el: _Element): TRIPayload {
    if (!_cached_decoder_for_TRIPayload) { _cached_decoder_for_TRIPayload = $._decode_extensible_choice<TRIPayload>({
    "CONTEXT 0": [ "integrityCheck", $._decode_implicit<IntegrityCheck>(() => _decode_IntegrityCheck) ],
    "CONTEXT 1": [ "testPDU", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "paddingPDU", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "keep_alive", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "keep_aliveResponse", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "firstSegmentFlag", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "lastSegmentFlag", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "cINReset", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "operatorLeaMessage", $._decode_implicit<OperatorLeaMessage>(() => _decode_OperatorLeaMessage) ],
    "CONTEXT 9": [ "optionRequest", $._decode_implicit<OptionRequest>(() => _decode_OptionRequest) ],
    "CONTEXT 10": [ "optionResponse", $._decode_implicit<OptionResponse>(() => _decode_OptionResponse) ],
    "CONTEXT 11": [ "optionComplete", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "pDUAcknowledgementRequest", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 13": [ "pDUAcknowledgementResponse", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_TRIPayload(el);
}

let _cached_encoder_for_TRIPayload: $.ASN1Encoder<TRIPayload> | null = null;

/**
 * @summary Encodes a(n) TRIPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TRIPayload, encoded as an ASN.1 Element.
 */
export
function _encode_TRIPayload (value: TRIPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TRIPayload) { _cached_encoder_for_TRIPayload = $._encode_choice<TRIPayload>({
    "integrityCheck": $._encode_implicit(_TagClass.context, 0, () => _encode_IntegrityCheck, $.BER),
    "testPDU": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "paddingPDU": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "keep_alive": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "keep_aliveResponse": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "firstSegmentFlag": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "lastSegmentFlag": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "cINReset": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "operatorLeaMessage": $._encode_implicit(_TagClass.context, 8, () => _encode_OperatorLeaMessage, $.BER),
    "optionRequest": $._encode_implicit(_TagClass.context, 9, () => _encode_OptionRequest, $.BER),
    "optionResponse": $._encode_implicit(_TagClass.context, 10, () => _encode_OptionResponse, $.BER),
    "optionComplete": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "pDUAcknowledgementRequest": $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER),
    "pDUAcknowledgementResponse": $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_TRIPayload(value, elGetter);
}


/* eslint-enable */
