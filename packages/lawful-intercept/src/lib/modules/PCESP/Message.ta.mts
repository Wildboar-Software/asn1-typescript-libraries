/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Answer, _decode_Answer, _encode_Answer } from "../PCESP/Answer.ta.mjs";
// export { Answer, _decode_Answer, _encode_Answer } from "../PCESP/Answer.ta.mjs";
import { CCClose, _decode_CCClose, _encode_CCClose } from "../PCESP/CCClose.ta.mjs";
// export { CCClose, _decode_CCClose, _encode_CCClose } from "../PCESP/CCClose.ta.mjs";
import { CCOpen, _decode_CCOpen, _encode_CCOpen } from "../PCESP/CCOpen.ta.mjs";
// export { CCOpen, _decode_CCOpen, _encode_CCOpen } from "../PCESP/CCOpen.ta.mjs";
import { Origination, _decode_Origination, _encode_Origination } from "../PCESP/Origination.ta.mjs";
// export { Origination, _decode_Origination, _encode_Origination } from "../PCESP/Origination.ta.mjs";
import { Redirection, _decode_Redirection, _encode_Redirection } from "../PCESP/Redirection.ta.mjs";
// export { Redirection, _decode_Redirection, _encode_Redirection } from "../PCESP/Redirection.ta.mjs";
import { Release, _decode_Release, _encode_Release } from "../PCESP/Release.ta.mjs";
// export { Release, _decode_Release, _encode_Release } from "../PCESP/Release.ta.mjs";
import { TerminationAttempt, _decode_TerminationAttempt, _encode_TerminationAttempt } from "../PCESP/TerminationAttempt.ta.mjs";
// export { TerminationAttempt, _decode_TerminationAttempt, _encode_TerminationAttempt } from "../PCESP/TerminationAttempt.ta.mjs";
import { CCChange, _decode_CCChange, _encode_CCChange } from "../PCESP/CCChange.ta.mjs";
// export { CCChange, _decode_CCChange, _encode_CCChange } from "../PCESP/CCChange.ta.mjs";
import { DialedDigitExtraction, _decode_DialedDigitExtraction, _encode_DialedDigitExtraction } from "../PCESP/DialedDigitExtraction.ta.mjs";
// export { DialedDigitExtraction, _decode_DialedDigitExtraction, _encode_DialedDigitExtraction } from "../PCESP/DialedDigitExtraction.ta.mjs";
import { NetworkSignal, _decode_NetworkSignal, _encode_NetworkSignal } from "../PCESP/NetworkSignal.ta.mjs";
// export { NetworkSignal, _decode_NetworkSignal, _encode_NetworkSignal } from "../PCESP/NetworkSignal.ta.mjs";
import { SubjectSignal, _decode_SubjectSignal, _encode_SubjectSignal } from "../PCESP/SubjectSignal.ta.mjs";
// export { SubjectSignal, _decode_SubjectSignal, _encode_SubjectSignal } from "../PCESP/SubjectSignal.ta.mjs";
import { MediaReport, _decode_MediaReport, _encode_MediaReport } from "../PCESP/MediaReport.ta.mjs";
// export { MediaReport, _decode_MediaReport, _encode_MediaReport } from "../PCESP/MediaReport.ta.mjs";
import { ServiceInstance, _decode_ServiceInstance, _encode_ServiceInstance } from "../PCESP/ServiceInstance.ta.mjs";
// export { ServiceInstance, _decode_ServiceInstance, _encode_ServiceInstance } from "../PCESP/ServiceInstance.ta.mjs";
import { ConferencePartyChange, _decode_ConferencePartyChange, _encode_ConferencePartyChange } from "../PCESP/ConferencePartyChange.ta.mjs";
// export { ConferencePartyChange, _decode_ConferencePartyChange, _encode_ConferencePartyChange } from "../PCESP/ConferencePartyChange.ta.mjs";


/**
 * @summary Message
 * @description
 *
 * The surveillance message inside a `CdcPdu`.
 *
 * Clause 1, note 3, says this edition neither defines the events nor
 * the information to be provided to the handover interface. Annex A
 * names each alternative and says the parameter definitions are in
 * PacketCable PKT-SP-ESP-I04-040723. The alternatives commented
 * "Reserved" are `NULL` and have no defined use. Context tag 0 is not
 * used. Tag 11 is named `reserved`, unlike the numbered `reserved0`
 * through `reserved4`.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 1 and annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Message  ::=  CHOICE {
 *     answer                  [1] Answer,
 *     ccclose                 [2] CCClose,
 *     ccopen                  [3] CCOpen,
 *     reserved0               [4] NULL, -- Reserved
 *     origination             [5] Origination,
 *     reserved1               [6] NULL, -- Reserved
 *     redirection             [7] Redirection,
 *     release                 [8] Release,
 *     reserved2               [9] NULL, -- Reserved
 *     terminationattempt      [10] TerminationAttempt,
 *     reserved                [11] NULL, -- Reserved
 *     ccchange                [12] CCChange,
 *     reserved3               [13] NULL, -- Reserved
 *     reserved4               [14] NULL, -- Reserved
 *     dialeddigitextraction   [15] DialedDigitExtraction,
 *     networksignal           [16] NetworkSignal,
 *     subjectsignal           [17] SubjectSignal,
 *     mediareport             [18] MediaReport,
 *     serviceinstance         [19] ServiceInstance,
 *     confpartychange         [20] ConferencePartyChange,
 *     ...
 * }
 * ```
 */
export
type Message =
    /**
     * See `Answer`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    { answer: Answer } /* CHOICE_ALT_ROOT */
    /**
     * See `CCClose`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { ccclose: CCClose } /* CHOICE_ALT_ROOT */
    /**
     * See `CCOpen`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { ccopen: CCOpen } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved0: NULL } /* CHOICE_ALT_ROOT */
    /**
     * See `Origination`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { origination: Origination } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved1: NULL } /* CHOICE_ALT_ROOT */
    /**
     * See `Redirection`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { redirection: Redirection } /* CHOICE_ALT_ROOT */
    /**
     * See `Release`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { release: Release } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved2: NULL } /* CHOICE_ALT_ROOT */
    /**
     * See `TerminationAttempt`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { terminationattempt: TerminationAttempt } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Context tag 11. Encoded as `NULL`. No use is defined.
     * The module names this alternative `reserved`, not `reservedN`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved: NULL } /* CHOICE_ALT_ROOT */
    /**
     * See `CCChange`. This edition does not define the event.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { ccchange: CCChange } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved3: NULL } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved4: NULL } /* CHOICE_ALT_ROOT */
    /**
     * DTMF digits extracted from the call. See
     * `DialedDigitExtraction`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { dialeddigitextraction: DialedDigitExtraction } /* CHOICE_ALT_ROOT */
    /**
     * A network-generated signal. At least one signal parameter is
     * included. See `NetworkSignal`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { networksignal: NetworkSignal } /* CHOICE_ALT_ROOT */
    /**
     * Subject-initiated dialing or signalling. At least one signal
     * parameter is included. See `SubjectSignal`.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { subjectsignal: SubjectSignal } /* CHOICE_ALT_ROOT */
    /**
     * See `MediaReport`. This edition does not define the event.
     * `subject` and `associate` are SDP; annex B says SDP copied to
     * the mediation function includes the encryption keys.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annexes A and B.
     */
    | { mediareport: MediaReport } /* CHOICE_ALT_ROOT */
    /**
     * See `ServiceInstance`. Clause 8.1.1 requires the IRI to include
     * details of services used. This edition does not define the
     * service-name vocabulary.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), clause 8.1.1 and annex A.
     */
    | { serviceinstance: ServiceInstance } /* CHOICE_ALT_ROOT */
    /**
     * Parties communicating, removed, or newly joined. See
     * `ConferencePartyChange`. Removal includes hold.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { confpartychange: ConferencePartyChange } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Message: $.ASN1Decoder<Message> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Message
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Message (el: _Element): Message {
    if (!_cached_decoder_for_Message) { _cached_decoder_for_Message = $._decode_extensible_choice<Message>({
    "CONTEXT 1": [ "answer", $._decode_implicit<Answer>(() => _decode_Answer) ],
    "CONTEXT 2": [ "ccclose", $._decode_implicit<CCClose>(() => _decode_CCClose) ],
    "CONTEXT 3": [ "ccopen", $._decode_implicit<CCOpen>(() => _decode_CCOpen) ],
    "CONTEXT 4": [ "reserved0", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "origination", $._decode_implicit<Origination>(() => _decode_Origination) ],
    "CONTEXT 6": [ "reserved1", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "redirection", $._decode_implicit<Redirection>(() => _decode_Redirection) ],
    "CONTEXT 8": [ "release", $._decode_implicit<Release>(() => _decode_Release) ],
    "CONTEXT 9": [ "reserved2", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 10": [ "terminationattempt", $._decode_implicit<TerminationAttempt>(() => _decode_TerminationAttempt) ],
    "CONTEXT 11": [ "reserved", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "ccchange", $._decode_implicit<CCChange>(() => _decode_CCChange) ],
    "CONTEXT 13": [ "reserved3", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 14": [ "reserved4", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 15": [ "dialeddigitextraction", $._decode_implicit<DialedDigitExtraction>(() => _decode_DialedDigitExtraction) ],
    "CONTEXT 16": [ "networksignal", $._decode_implicit<NetworkSignal>(() => _decode_NetworkSignal) ],
    "CONTEXT 17": [ "subjectsignal", $._decode_implicit<SubjectSignal>(() => _decode_SubjectSignal) ],
    "CONTEXT 18": [ "mediareport", $._decode_implicit<MediaReport>(() => _decode_MediaReport) ],
    "CONTEXT 19": [ "serviceinstance", $._decode_implicit<ServiceInstance>(() => _decode_ServiceInstance) ],
    "CONTEXT 20": [ "confpartychange", $._decode_implicit<ConferencePartyChange>(() => _decode_ConferencePartyChange) ]
}); }
    return _cached_decoder_for_Message(el);
}

let _cached_encoder_for_Message: $.ASN1Encoder<Message> | null = null;

/**
 * @summary Encodes a(n) Message into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Message, encoded as an ASN.1 Element.
 */
export
function _encode_Message (value: Message, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Message) { _cached_encoder_for_Message = $._encode_choice<Message>({
    "answer": $._encode_implicit(_TagClass.context, 1, () => _encode_Answer, $.BER),
    "ccclose": $._encode_implicit(_TagClass.context, 2, () => _encode_CCClose, $.BER),
    "ccopen": $._encode_implicit(_TagClass.context, 3, () => _encode_CCOpen, $.BER),
    "reserved0": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "origination": $._encode_implicit(_TagClass.context, 5, () => _encode_Origination, $.BER),
    "reserved1": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "redirection": $._encode_implicit(_TagClass.context, 7, () => _encode_Redirection, $.BER),
    "release": $._encode_implicit(_TagClass.context, 8, () => _encode_Release, $.BER),
    "reserved2": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
    "terminationattempt": $._encode_implicit(_TagClass.context, 10, () => _encode_TerminationAttempt, $.BER),
    "reserved": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "ccchange": $._encode_implicit(_TagClass.context, 12, () => _encode_CCChange, $.BER),
    "reserved3": $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER),
    "reserved4": $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER),
    "dialeddigitextraction": $._encode_implicit(_TagClass.context, 15, () => _encode_DialedDigitExtraction, $.BER),
    "networksignal": $._encode_implicit(_TagClass.context, 16, () => _encode_NetworkSignal, $.BER),
    "subjectsignal": $._encode_implicit(_TagClass.context, 17, () => _encode_SubjectSignal, $.BER),
    "mediareport": $._encode_implicit(_TagClass.context, 18, () => _encode_MediaReport, $.BER),
    "serviceinstance": $._encode_implicit(_TagClass.context, 19, () => _encode_ServiceInstance, $.BER),
    "confpartychange": $._encode_implicit(_TagClass.context, 20, () => _encode_ConferencePartyChange, $.BER),
}, $.BER); }
    return _cached_encoder_for_Message(value, elGetter);
}


/* eslint-enable */
