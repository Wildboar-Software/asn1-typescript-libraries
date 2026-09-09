/* eslint-disable */
import {
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
import { NotificationInformation_userAbandonSpecificInfo, _decode_NotificationInformation_userAbandonSpecificInfo, _encode_NotificationInformation_userAbandonSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-userAbandonSpecificInfo.ta.mjs";
// export { NotificationInformation_userAbandonSpecificInfo, _decode_NotificationInformation_userAbandonSpecificInfo, _encode_NotificationInformation_userAbandonSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-userAbandonSpecificInfo.ta.mjs";
import { NotificationInformation_callFailureSpecificInfo, _decode_NotificationInformation_callFailureSpecificInfo, _encode_NotificationInformation_callFailureSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-callFailureSpecificInfo.ta.mjs";
// export { NotificationInformation_callFailureSpecificInfo, _decode_NotificationInformation_callFailureSpecificInfo, _encode_NotificationInformation_callFailureSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-callFailureSpecificInfo.ta.mjs";
import { NotificationInformation_noReplySpecificInfo, _decode_NotificationInformation_noReplySpecificInfo, _encode_NotificationInformation_noReplySpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-noReplySpecificInfo.ta.mjs";
// export { NotificationInformation_noReplySpecificInfo, _decode_NotificationInformation_noReplySpecificInfo, _encode_NotificationInformation_noReplySpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-noReplySpecificInfo.ta.mjs";
import { NotificationInformation_callReleaseSpecificInfo, _decode_NotificationInformation_callReleaseSpecificInfo, _encode_NotificationInformation_callReleaseSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-callReleaseSpecificInfo.ta.mjs";
// export { NotificationInformation_callReleaseSpecificInfo, _decode_NotificationInformation_callReleaseSpecificInfo, _encode_NotificationInformation_callReleaseSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-callReleaseSpecificInfo.ta.mjs";
import { NotificationInformation_ssInvocationSpecificInfo, _decode_NotificationInformation_ssInvocationSpecificInfo, _encode_NotificationInformation_ssInvocationSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-ssInvocationSpecificInfo.ta.mjs";
// export { NotificationInformation_ssInvocationSpecificInfo, _decode_NotificationInformation_ssInvocationSpecificInfo, _encode_NotificationInformation_ssInvocationSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-ssInvocationSpecificInfo.ta.mjs";
import { NotificationInformation_creditLimitReachedSpecificInfo, _decode_NotificationInformation_creditLimitReachedSpecificInfo, _encode_NotificationInformation_creditLimitReachedSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-creditLimitReachedSpecificInfo.ta.mjs";
// export { NotificationInformation_creditLimitReachedSpecificInfo, _decode_NotificationInformation_creditLimitReachedSpecificInfo, _encode_NotificationInformation_creditLimitReachedSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-creditLimitReachedSpecificInfo.ta.mjs";
import { NotificationInformation_callDurationSpecificInfo, _decode_NotificationInformation_callDurationSpecificInfo, _encode_NotificationInformation_callDurationSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-callDurationSpecificInfo.ta.mjs";
// export { NotificationInformation_callDurationSpecificInfo, _decode_NotificationInformation_callDurationSpecificInfo, _encode_NotificationInformation_callDurationSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-callDurationSpecificInfo.ta.mjs";
import { NotificationInformation_calledNumberSpecificInfo, _decode_NotificationInformation_calledNumberSpecificInfo, _encode_NotificationInformation_calledNumberSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-calledNumberSpecificInfo.ta.mjs";
// export { NotificationInformation_calledNumberSpecificInfo, _decode_NotificationInformation_calledNumberSpecificInfo, _encode_NotificationInformation_calledNumberSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-calledNumberSpecificInfo.ta.mjs";
import { NotificationInformation_answeredCallSpecificInfo, _decode_NotificationInformation_answeredCallSpecificInfo, _encode_NotificationInformation_answeredCallSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-answeredCallSpecificInfo.ta.mjs";
// export { NotificationInformation_answeredCallSpecificInfo, _decode_NotificationInformation_answeredCallSpecificInfo, _encode_NotificationInformation_answeredCallSpecificInfo } from "../IN-CS2-datatypes/NotificationInformation-answeredCallSpecificInfo.ta.mjs";


/**
 * @summary NotificationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   userAbandonSpecificInfo         [0]  SEQUENCE {...},
 *   callFailureSpecificInfo
 *     [1]  SEQUENCE {failureCause  [0]  Cause{bound} OPTIONAL,
 *                    ...},
 *   noReplySpecificInfo             [2]  SEQUENCE {...},
 *   callReleaseSpecificInfo
 *     [3]  SEQUENCE {releaseCause  [0]  Cause{bound} OPTIONAL,
 *                    timeStamp     [1]  DateAndTime OPTIONAL,
 *                    ...},
 *   ssInvocationSpecificInfo
 *     [4]  SEQUENCE {invokedService  [0]  InvokableService,
 *                    ...},
 *   creditLimitReachedSpecificInfo
 *     [5]  SEQUENCE {timeStamp  [0]  DateAndTime OPTIONAL,
 *                    ...},
 *   callDurationSpecificInfo
 *     [6]  SEQUENCE {timeStamp  [0]  DateAndTime OPTIONAL,
 *                    ...},
 *   calledNumberSpecificInfo
 *     [7]  SEQUENCE {calledNumber  [0]  CalledPartyNumber{bound} OPTIONAL,
 *                    ...},
 *   answeredCallSpecificInfo
 *     [8]  SEQUENCE {timeStamp  [0]  DateAndTime OPTIONAL,
 *                    ...}
 * }
 * ```
 */
export
type NotificationInformation =
    { userAbandonSpecificInfo: NotificationInformation_userAbandonSpecificInfo } /* CHOICE_ALT_ROOT */
    | { callFailureSpecificInfo: NotificationInformation_callFailureSpecificInfo } /* CHOICE_ALT_ROOT */
    | { noReplySpecificInfo: NotificationInformation_noReplySpecificInfo } /* CHOICE_ALT_ROOT */
    | { callReleaseSpecificInfo: NotificationInformation_callReleaseSpecificInfo } /* CHOICE_ALT_ROOT */
    | { ssInvocationSpecificInfo: NotificationInformation_ssInvocationSpecificInfo } /* CHOICE_ALT_ROOT */
    | { creditLimitReachedSpecificInfo: NotificationInformation_creditLimitReachedSpecificInfo } /* CHOICE_ALT_ROOT */
    | { callDurationSpecificInfo: NotificationInformation_callDurationSpecificInfo } /* CHOICE_ALT_ROOT */
    | { calledNumberSpecificInfo: NotificationInformation_calledNumberSpecificInfo } /* CHOICE_ALT_ROOT */
    | { answeredCallSpecificInfo: NotificationInformation_answeredCallSpecificInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NotificationInformation: $.ASN1Decoder<NotificationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation (el: _Element): NotificationInformation {
    if (!_cached_decoder_for_NotificationInformation) { _cached_decoder_for_NotificationInformation = $._decode_inextensible_choice<NotificationInformation>({
    "CONTEXT 0": [ "userAbandonSpecificInfo", $._decode_implicit<NotificationInformation_userAbandonSpecificInfo>(() => _decode_NotificationInformation_userAbandonSpecificInfo) ],
    "CONTEXT 1": [ "callFailureSpecificInfo", $._decode_implicit<NotificationInformation_callFailureSpecificInfo>(() => _decode_NotificationInformation_callFailureSpecificInfo) ],
    "CONTEXT 2": [ "noReplySpecificInfo", $._decode_implicit<NotificationInformation_noReplySpecificInfo>(() => _decode_NotificationInformation_noReplySpecificInfo) ],
    "CONTEXT 3": [ "callReleaseSpecificInfo", $._decode_implicit<NotificationInformation_callReleaseSpecificInfo>(() => _decode_NotificationInformation_callReleaseSpecificInfo) ],
    "CONTEXT 4": [ "ssInvocationSpecificInfo", $._decode_implicit<NotificationInformation_ssInvocationSpecificInfo>(() => _decode_NotificationInformation_ssInvocationSpecificInfo) ],
    "CONTEXT 5": [ "creditLimitReachedSpecificInfo", $._decode_implicit<NotificationInformation_creditLimitReachedSpecificInfo>(() => _decode_NotificationInformation_creditLimitReachedSpecificInfo) ],
    "CONTEXT 6": [ "callDurationSpecificInfo", $._decode_implicit<NotificationInformation_callDurationSpecificInfo>(() => _decode_NotificationInformation_callDurationSpecificInfo) ],
    "CONTEXT 7": [ "calledNumberSpecificInfo", $._decode_implicit<NotificationInformation_calledNumberSpecificInfo>(() => _decode_NotificationInformation_calledNumberSpecificInfo) ],
    "CONTEXT 8": [ "answeredCallSpecificInfo", $._decode_implicit<NotificationInformation_answeredCallSpecificInfo>(() => _decode_NotificationInformation_answeredCallSpecificInfo) ]
}); }
    return _cached_decoder_for_NotificationInformation(el);
}

let _cached_encoder_for_NotificationInformation: $.ASN1Encoder<NotificationInformation> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation (value: NotificationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation) { _cached_encoder_for_NotificationInformation = $._encode_choice<NotificationInformation>({
    "userAbandonSpecificInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_NotificationInformation_userAbandonSpecificInfo, $.BER),
    "callFailureSpecificInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationInformation_callFailureSpecificInfo, $.BER),
    "noReplySpecificInfo": $._encode_implicit(_TagClass.context, 2, () => _encode_NotificationInformation_noReplySpecificInfo, $.BER),
    "callReleaseSpecificInfo": $._encode_implicit(_TagClass.context, 3, () => _encode_NotificationInformation_callReleaseSpecificInfo, $.BER),
    "ssInvocationSpecificInfo": $._encode_implicit(_TagClass.context, 4, () => _encode_NotificationInformation_ssInvocationSpecificInfo, $.BER),
    "creditLimitReachedSpecificInfo": $._encode_implicit(_TagClass.context, 5, () => _encode_NotificationInformation_creditLimitReachedSpecificInfo, $.BER),
    "callDurationSpecificInfo": $._encode_implicit(_TagClass.context, 6, () => _encode_NotificationInformation_callDurationSpecificInfo, $.BER),
    "calledNumberSpecificInfo": $._encode_implicit(_TagClass.context, 7, () => _encode_NotificationInformation_calledNumberSpecificInfo, $.BER),
    "answeredCallSpecificInfo": $._encode_implicit(_TagClass.context, 8, () => _encode_NotificationInformation_answeredCallSpecificInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_NotificationInformation(value, elGetter);
}


/* eslint-enable */
