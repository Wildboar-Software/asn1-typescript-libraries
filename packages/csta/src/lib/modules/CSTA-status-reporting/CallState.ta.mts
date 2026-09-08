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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CompoundCallState, _decode_CompoundCallState, _encode_CompoundCallState } from "../CSTA-status-reporting/CompoundCallState.ta.mjs";
// export { CompoundCallState, _decode_CompoundCallState, _encode_CompoundCallState } from "../CSTA-status-reporting/CompoundCallState.ta.mjs";
import { SimpleCallState, _enum_for_SimpleCallState, SimpleCallState_callNull /* IMPORTED_LONG_ENUMERATION_ITEM */, callNull /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callPending /* IMPORTED_LONG_ENUMERATION_ITEM */, callPending /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callOriginated /* IMPORTED_LONG_ENUMERATION_ITEM */, callOriginated /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callDelivered /* IMPORTED_LONG_ENUMERATION_ITEM */, callDelivered /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callDeliveredHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callDeliveredHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, callReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, callEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callEstablishedHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callEstablishedHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callReceivedOnHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callReceivedOnHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callEstablishedOnHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callEstablishedOnHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callQueued /* IMPORTED_LONG_ENUMERATION_ITEM */, callQueued /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callQueuedHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callQueuedHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, callFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callFailedHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callFailedHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callBlocked /* IMPORTED_LONG_ENUMERATION_ITEM */, callBlocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SimpleCallState, _encode_SimpleCallState } from "../CSTA-status-reporting/SimpleCallState.ta.mjs";
// export { SimpleCallState, _enum_for_SimpleCallState, SimpleCallState_callNull /* IMPORTED_LONG_ENUMERATION_ITEM */, callNull /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callPending /* IMPORTED_LONG_ENUMERATION_ITEM */, callPending /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callOriginated /* IMPORTED_LONG_ENUMERATION_ITEM */, callOriginated /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callDelivered /* IMPORTED_LONG_ENUMERATION_ITEM */, callDelivered /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callDeliveredHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callDeliveredHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, callReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, callEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callEstablishedHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callEstablishedHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callReceivedOnHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callReceivedOnHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callEstablishedOnHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callEstablishedOnHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callQueued /* IMPORTED_LONG_ENUMERATION_ITEM */, callQueued /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callQueuedHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callQueuedHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, callFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callFailedHeld /* IMPORTED_LONG_ENUMERATION_ITEM */, callFailedHeld /* IMPORTED_SHORT_ENUMERATION_ITEM */, SimpleCallState_callBlocked /* IMPORTED_LONG_ENUMERATION_ITEM */, callBlocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SimpleCallState, _encode_SimpleCallState } from "../CSTA-status-reporting/SimpleCallState.ta.mjs";


/**
 * @summary CallState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallState  ::=  CHOICE
 * {    compoundCallState         [0] IMPLICIT CompoundCallState,
 *     simpleCallState         [1] IMPLICIT SimpleCallState,
 *     unknown             [2] IMPLICIT NULL }
 * ```
 */
export
type CallState =
    { compoundCallState: CompoundCallState } /* CHOICE_ALT_ROOT */
    | { simpleCallState: SimpleCallState } /* CHOICE_ALT_ROOT */
    | { unknown: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallState: $.ASN1Decoder<CallState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallState (el: _Element): CallState {
    if (!_cached_decoder_for_CallState) { _cached_decoder_for_CallState = $._decode_inextensible_choice<CallState>({
    "CONTEXT 0": [ "compoundCallState", $._decode_implicit<CompoundCallState>(() => _decode_CompoundCallState) ],
    "CONTEXT 1": [ "simpleCallState", $._decode_implicit<SimpleCallState>(() => _decode_SimpleCallState) ],
    "CONTEXT 2": [ "unknown", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CallState(el);
}

let _cached_encoder_for_CallState: $.ASN1Encoder<CallState> | null = null;

/**
 * @summary Encodes a(n) CallState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallState, encoded as an ASN.1 Element.
 */
export
function _encode_CallState (value: CallState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallState) { _cached_encoder_for_CallState = $._encode_choice<CallState>({
    "compoundCallState": $._encode_implicit(_TagClass.context, 0, () => _encode_CompoundCallState, $.BER),
    "simpleCallState": $._encode_implicit(_TagClass.context, 1, () => _encode_SimpleCallState, $.BER),
    "unknown": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallState(value, elGetter);
}


/* eslint-enable */
