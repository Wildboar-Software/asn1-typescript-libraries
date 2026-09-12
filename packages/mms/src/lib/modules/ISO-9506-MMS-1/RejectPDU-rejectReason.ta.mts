/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RejectPDU_rejectReason_confirmed_requestPDU, RejectPDU_rejectReason_confirmed_requestPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier /* IMPORTED_LONG_NAMED_INTEGER */, unrecognized_modifier /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier /* IMPORTED_LONG_NAMED_INTEGER */, invalid_modifier /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, max_serv_outstanding_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_confirmed_requestPDU, _encode_RejectPDU_rejectReason_confirmed_requestPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-confirmed-requestPDU.ta.mjs";
// export { RejectPDU_rejectReason_confirmed_requestPDU, RejectPDU_rejectReason_confirmed_requestPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier /* IMPORTED_LONG_NAMED_INTEGER */, unrecognized_modifier /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier /* IMPORTED_LONG_NAMED_INTEGER */, invalid_modifier /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, max_serv_outstanding_exceeded /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_confirmed_requestPDU, _encode_RejectPDU_rejectReason_confirmed_requestPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-confirmed-requestPDU.ta.mjs";
import { RejectPDU_rejectReason_confirmed_responsePDU, RejectPDU_rejectReason_confirmed_responsePDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_invalid_result /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_confirmed_responsePDU, _encode_RejectPDU_rejectReason_confirmed_responsePDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-confirmed-responsePDU.ta.mjs";
// export { RejectPDU_rejectReason_confirmed_responsePDU, RejectPDU_rejectReason_confirmed_responsePDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_invalid_result /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_confirmed_responsePDU, _encode_RejectPDU_rejectReason_confirmed_responsePDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-confirmed-responsePDU.ta.mjs";
import { RejectPDU_rejectReason_confirmed_errorPDU, RejectPDU_rejectReason_confirmed_errorPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_confirmed_errorPDU, _encode_RejectPDU_rejectReason_confirmed_errorPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-confirmed-errorPDU.ta.mjs";
// export { RejectPDU_rejectReason_confirmed_errorPDU, RejectPDU_rejectReason_confirmed_errorPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_confirmed_errorPDU, _encode_RejectPDU_rejectReason_confirmed_errorPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-confirmed-errorPDU.ta.mjs";
import { RejectPDU_rejectReason_unconfirmedPDU, RejectPDU_rejectReason_unconfirmedPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_invalid_argument /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_unconfirmedPDU, _encode_RejectPDU_rejectReason_unconfirmedPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-unconfirmedPDU.ta.mjs";
// export { RejectPDU_rejectReason_unconfirmedPDU, RejectPDU_rejectReason_unconfirmedPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_invalid_argument /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_unconfirmedPDU, _encode_RejectPDU_rejectReason_unconfirmedPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-unconfirmedPDU.ta.mjs";
import { RejectPDU_rejectReason_pdu_error, RejectPDU_rejectReason_pdu_error_unknown_pdu_type /* IMPORTED_LONG_NAMED_INTEGER */, unknown_pdu_type /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_pdu_error_invalid_pdu /* IMPORTED_LONG_NAMED_INTEGER */, invalid_pdu /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_pdu_error_illegal_acse_mapping /* IMPORTED_LONG_NAMED_INTEGER */, illegal_acse_mapping /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_pdu_error, _encode_RejectPDU_rejectReason_pdu_error } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-pdu-error.ta.mjs";
// export { RejectPDU_rejectReason_pdu_error, RejectPDU_rejectReason_pdu_error_unknown_pdu_type /* IMPORTED_LONG_NAMED_INTEGER */, unknown_pdu_type /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_pdu_error_invalid_pdu /* IMPORTED_LONG_NAMED_INTEGER */, invalid_pdu /* IMPORTED_SHORT_NAMED_INTEGER */, RejectPDU_rejectReason_pdu_error_illegal_acse_mapping /* IMPORTED_LONG_NAMED_INTEGER */, illegal_acse_mapping /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_pdu_error, _encode_RejectPDU_rejectReason_pdu_error } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-pdu-error.ta.mjs";
import { RejectPDU_rejectReason_cancel_requestPDU, RejectPDU_rejectReason_cancel_requestPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_requestPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_cancel_requestPDU, _encode_RejectPDU_rejectReason_cancel_requestPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-cancel-requestPDU.ta.mjs";
// export { RejectPDU_rejectReason_cancel_requestPDU, RejectPDU_rejectReason_cancel_requestPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_requestPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_cancel_requestPDU, _encode_RejectPDU_rejectReason_cancel_requestPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-cancel-requestPDU.ta.mjs";
import { RejectPDU_rejectReason_cancel_responsePDU, RejectPDU_rejectReason_cancel_responsePDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_cancel_responsePDU, _encode_RejectPDU_rejectReason_cancel_responsePDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-cancel-responsePDU.ta.mjs";
// export { RejectPDU_rejectReason_cancel_responsePDU, RejectPDU_rejectReason_cancel_responsePDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_responsePDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_cancel_responsePDU, _encode_RejectPDU_rejectReason_cancel_responsePDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-cancel-responsePDU.ta.mjs";
import { RejectPDU_rejectReason_cancel_errorPDU, RejectPDU_rejectReason_cancel_errorPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_errorPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_errorPDU_invalid_serviceError /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_errorPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_cancel_errorPDU, _encode_RejectPDU_rejectReason_cancel_errorPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-cancel-errorPDU.ta.mjs";
// export { RejectPDU_rejectReason_cancel_errorPDU, RejectPDU_rejectReason_cancel_errorPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_errorPDU_invalid_invokeID /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_errorPDU_invalid_serviceError /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_cancel_errorPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_cancel_errorPDU, _encode_RejectPDU_rejectReason_cancel_errorPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-cancel-errorPDU.ta.mjs";
import { RejectPDU_rejectReason_conclude_requestPDU, RejectPDU_rejectReason_conclude_requestPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_requestPDU_invalid_argument /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_conclude_requestPDU, _encode_RejectPDU_rejectReason_conclude_requestPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-conclude-requestPDU.ta.mjs";
// export { RejectPDU_rejectReason_conclude_requestPDU, RejectPDU_rejectReason_conclude_requestPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_requestPDU_invalid_argument /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_conclude_requestPDU, _encode_RejectPDU_rejectReason_conclude_requestPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-conclude-requestPDU.ta.mjs";
import { RejectPDU_rejectReason_conclude_responsePDU, RejectPDU_rejectReason_conclude_responsePDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_responsePDU_invalid_result /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_conclude_responsePDU, _encode_RejectPDU_rejectReason_conclude_responsePDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-conclude-responsePDU.ta.mjs";
// export { RejectPDU_rejectReason_conclude_responsePDU, RejectPDU_rejectReason_conclude_responsePDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_responsePDU_invalid_result /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_conclude_responsePDU, _encode_RejectPDU_rejectReason_conclude_responsePDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-conclude-responsePDU.ta.mjs";
import { RejectPDU_rejectReason_conclude_errorPDU, RejectPDU_rejectReason_conclude_errorPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_errorPDU_invalid_serviceError /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_errorPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_conclude_errorPDU, _encode_RejectPDU_rejectReason_conclude_errorPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-conclude-errorPDU.ta.mjs";
// export { RejectPDU_rejectReason_conclude_errorPDU, RejectPDU_rejectReason_conclude_errorPDU_other /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_errorPDU_invalid_serviceError /* IMPORTED_LONG_NAMED_INTEGER */, RejectPDU_rejectReason_conclude_errorPDU_value_out_of_range /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RejectPDU_rejectReason_conclude_errorPDU, _encode_RejectPDU_rejectReason_conclude_errorPDU } from "../ISO-9506-MMS-1/RejectPDU-rejectReason-conclude-errorPDU.ta.mjs";


/**
 * @summary RejectPDU_rejectReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RejectPDU_rejectReason =
    { confirmed_requestPDU: RejectPDU_rejectReason_confirmed_requestPDU } /* CHOICE_ALT_ROOT */
    | { confirmed_responsePDU: RejectPDU_rejectReason_confirmed_responsePDU } /* CHOICE_ALT_ROOT */
    | { confirmed_errorPDU: RejectPDU_rejectReason_confirmed_errorPDU } /* CHOICE_ALT_ROOT */
    | { unconfirmedPDU: RejectPDU_rejectReason_unconfirmedPDU } /* CHOICE_ALT_ROOT */
    | { pdu_error: RejectPDU_rejectReason_pdu_error } /* CHOICE_ALT_ROOT */
    | { cancel_requestPDU: RejectPDU_rejectReason_cancel_requestPDU } /* CHOICE_ALT_ROOT */
    | { cancel_responsePDU: RejectPDU_rejectReason_cancel_responsePDU } /* CHOICE_ALT_ROOT */
    | { cancel_errorPDU: RejectPDU_rejectReason_cancel_errorPDU } /* CHOICE_ALT_ROOT */
    | { cancel_requestPDU: NULL } /* CHOICE_ALT_ROOT */
    | { cancel_responsePDU: NULL } /* CHOICE_ALT_ROOT */
    | { cancel_errorPDU: NULL } /* CHOICE_ALT_ROOT */
    | { conclude_requestPDU: RejectPDU_rejectReason_conclude_requestPDU } /* CHOICE_ALT_ROOT */
    | { conclude_responsePDU: RejectPDU_rejectReason_conclude_responsePDU } /* CHOICE_ALT_ROOT */
    | { conclude_errorPDU: RejectPDU_rejectReason_conclude_errorPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RejectPDU_rejectReason: $.ASN1Decoder<RejectPDU_rejectReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectPDU_rejectReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RejectPDU_rejectReason (el: _Element): RejectPDU_rejectReason {
    if (!_cached_decoder_for_RejectPDU_rejectReason) { _cached_decoder_for_RejectPDU_rejectReason = $._decode_inextensible_choice<RejectPDU_rejectReason>({
    "CONTEXT 1": [ "confirmed_requestPDU", $._decode_implicit<RejectPDU_rejectReason_confirmed_requestPDU>(() => _decode_RejectPDU_rejectReason_confirmed_requestPDU) ],
    "CONTEXT 2": [ "confirmed_responsePDU", $._decode_implicit<RejectPDU_rejectReason_confirmed_responsePDU>(() => _decode_RejectPDU_rejectReason_confirmed_responsePDU) ],
    "CONTEXT 3": [ "confirmed_errorPDU", $._decode_implicit<RejectPDU_rejectReason_confirmed_errorPDU>(() => _decode_RejectPDU_rejectReason_confirmed_errorPDU) ],
    "CONTEXT 4": [ "unconfirmedPDU", $._decode_implicit<RejectPDU_rejectReason_unconfirmedPDU>(() => _decode_RejectPDU_rejectReason_unconfirmedPDU) ],
    "CONTEXT 5": [ "pdu_error", $._decode_implicit<RejectPDU_rejectReason_pdu_error>(() => _decode_RejectPDU_rejectReason_pdu_error) ],
    "CONTEXT 6": [ "cancel_requestPDU", $._decode_implicit<RejectPDU_rejectReason_cancel_requestPDU>(() => _decode_RejectPDU_rejectReason_cancel_requestPDU) ],
    "CONTEXT 7": [ "cancel_responsePDU", $._decode_implicit<RejectPDU_rejectReason_cancel_responsePDU>(() => _decode_RejectPDU_rejectReason_cancel_responsePDU) ],
    "CONTEXT 8": [ "cancel_errorPDU", $._decode_implicit<RejectPDU_rejectReason_cancel_errorPDU>(() => _decode_RejectPDU_rejectReason_cancel_errorPDU) ],
    "CONTEXT 6": [ "cancel_requestPDU", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "cancel_responsePDU", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "cancel_errorPDU", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "conclude_requestPDU", $._decode_implicit<RejectPDU_rejectReason_conclude_requestPDU>(() => _decode_RejectPDU_rejectReason_conclude_requestPDU) ],
    "CONTEXT 10": [ "conclude_responsePDU", $._decode_implicit<RejectPDU_rejectReason_conclude_responsePDU>(() => _decode_RejectPDU_rejectReason_conclude_responsePDU) ],
    "CONTEXT 11": [ "conclude_errorPDU", $._decode_implicit<RejectPDU_rejectReason_conclude_errorPDU>(() => _decode_RejectPDU_rejectReason_conclude_errorPDU) ]
}); }
    return _cached_decoder_for_RejectPDU_rejectReason(el);
}

let _cached_encoder_for_RejectPDU_rejectReason: $.ASN1Encoder<RejectPDU_rejectReason> | null = null;

/**
 * @summary Encodes a(n) RejectPDU_rejectReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectPDU_rejectReason, encoded as an ASN.1 Element.
 */
export
function _encode_RejectPDU_rejectReason (value: RejectPDU_rejectReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RejectPDU_rejectReason) { _cached_encoder_for_RejectPDU_rejectReason = $._encode_choice<RejectPDU_rejectReason>({
    "confirmed_requestPDU": $._encode_implicit(_TagClass.context, 1, () => _encode_RejectPDU_rejectReason_confirmed_requestPDU, $.BER),
    "confirmed_responsePDU": $._encode_implicit(_TagClass.context, 2, () => _encode_RejectPDU_rejectReason_confirmed_responsePDU, $.BER),
    "confirmed_errorPDU": $._encode_implicit(_TagClass.context, 3, () => _encode_RejectPDU_rejectReason_confirmed_errorPDU, $.BER),
    "unconfirmedPDU": $._encode_implicit(_TagClass.context, 4, () => _encode_RejectPDU_rejectReason_unconfirmedPDU, $.BER),
    "pdu_error": $._encode_implicit(_TagClass.context, 5, () => _encode_RejectPDU_rejectReason_pdu_error, $.BER),
    "cancel_requestPDU": $._encode_implicit(_TagClass.context, 6, () => _encode_RejectPDU_rejectReason_cancel_requestPDU, $.BER),
    "cancel_responsePDU": $._encode_implicit(_TagClass.context, 7, () => _encode_RejectPDU_rejectReason_cancel_responsePDU, $.BER),
    "cancel_errorPDU": $._encode_implicit(_TagClass.context, 8, () => _encode_RejectPDU_rejectReason_cancel_errorPDU, $.BER),
    "cancel_requestPDU": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "cancel_responsePDU": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "cancel_errorPDU": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "conclude_requestPDU": $._encode_implicit(_TagClass.context, 9, () => _encode_RejectPDU_rejectReason_conclude_requestPDU, $.BER),
    "conclude_responsePDU": $._encode_implicit(_TagClass.context, 10, () => _encode_RejectPDU_rejectReason_conclude_responsePDU, $.BER),
    "conclude_errorPDU": $._encode_implicit(_TagClass.context, 11, () => _encode_RejectPDU_rejectReason_conclude_errorPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_RejectPDU_rejectReason(value, elGetter);
}


/* eslint-enable */
