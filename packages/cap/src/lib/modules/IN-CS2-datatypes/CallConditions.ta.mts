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
import { CauseValue, _decode_CauseValue, _encode_CauseValue } from "../IN-CS2-datatypes/CauseValue.ta.mjs";
// export { CauseValue, _decode_CauseValue, _encode_CauseValue } from "../IN-CS2-datatypes/CauseValue.ta.mjs";
import { InvokableService, _enum_for_InvokableService, InvokableService_callingLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, callingLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_connectedLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, reverseCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_explicitCallTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, explicitCallTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callCompletionOnBusySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InvokableService, _encode_InvokableService } from "../IN-CS2-datatypes/InvokableService.ta.mjs";
// export { InvokableService, _enum_for_InvokableService, InvokableService_callingLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, callingLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_connectedLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, connectedLineIdentificationRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, reverseCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_explicitCallTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, explicitCallTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callCompletionOnBusySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InvokableService, _encode_InvokableService } from "../IN-CS2-datatypes/InvokableService.ta.mjs";
import { NumberMatch, _decode_NumberMatch, _encode_NumberMatch } from "../IN-CS2-datatypes/NumberMatch.ta.mjs";
// export { NumberMatch, _decode_NumberMatch, _encode_NumberMatch } from "../IN-CS2-datatypes/NumberMatch.ta.mjs";


/**
 * @summary CallConditions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallConditions{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   userAbandon         [0]  NULL,
 *   callFailure         [1]  CauseValue,
 *   noReply             [2]  INTEGER, -- time expressed in seconds
 *   callRelease         [3]  NULL,
 *   ss-invocation       [4]  InvokableService,
 *   creditLimitReached  [5]  INTEGER,
 *   callDuration        [6]  INTEGER,
 *   calledNumber        [7]  NumberMatch{bound},
 *   answeredCall        [8]  NULL
 * }
 * ```
 */
export
type CallConditions =
    { userAbandon: NULL } /* CHOICE_ALT_ROOT */
    | { callFailure: CauseValue } /* CHOICE_ALT_ROOT */
    | { noReply: INTEGER } /* CHOICE_ALT_ROOT */
    | { callRelease: NULL } /* CHOICE_ALT_ROOT */
    | { ss_invocation: InvokableService } /* CHOICE_ALT_ROOT */
    | { creditLimitReached: INTEGER } /* CHOICE_ALT_ROOT */
    | { callDuration: INTEGER } /* CHOICE_ALT_ROOT */
    | { calledNumber: NumberMatch } /* CHOICE_ALT_ROOT */
    | { answeredCall: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallConditions: $.ASN1Decoder<CallConditions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallConditions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallConditions (el: _Element): CallConditions {
    if (!_cached_decoder_for_CallConditions) { _cached_decoder_for_CallConditions = $._decode_inextensible_choice<CallConditions>({
    "CONTEXT 0": [ "userAbandon", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "callFailure", $._decode_implicit<CauseValue>(() => _decode_CauseValue) ],
    "CONTEXT 2": [ "noReply", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "callRelease", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "ss_invocation", $._decode_implicit<InvokableService>(() => _decode_InvokableService) ],
    "CONTEXT 5": [ "creditLimitReached", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 6": [ "callDuration", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 7": [ "calledNumber", $._decode_explicit<NumberMatch>(() => _decode_NumberMatch) ],
    "CONTEXT 8": [ "answeredCall", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CallConditions(el);
}

let _cached_encoder_for_CallConditions: $.ASN1Encoder<CallConditions> | null = null;

/**
 * @summary Encodes a(n) CallConditions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallConditions, encoded as an ASN.1 Element.
 */
export
function _encode_CallConditions (value: CallConditions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallConditions) { _cached_encoder_for_CallConditions = $._encode_choice<CallConditions>({
    "userAbandon": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "callFailure": $._encode_implicit(_TagClass.context, 1, () => _encode_CauseValue, $.BER),
    "noReply": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "callRelease": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "ss_invocation": $._encode_implicit(_TagClass.context, 4, () => _encode_InvokableService, $.BER),
    "creditLimitReached": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "callDuration": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "calledNumber": $._encode_explicit(_TagClass.context, 7, () => _encode_NumberMatch, $.BER),
    "answeredCall": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallConditions(value, elGetter);
}


/* eslint-enable */
