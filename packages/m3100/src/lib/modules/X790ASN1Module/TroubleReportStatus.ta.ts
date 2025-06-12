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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TroubleReportStatus_number,
    TroubleReportStatus_number_screening /* IMPORTED_LONG_NAMED_INTEGER */,
    screening /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_testing /* IMPORTED_LONG_NAMED_INTEGER */,
    testing /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_dispatchedIn /* IMPORTED_LONG_NAMED_INTEGER */,
    dispatchedIn /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_dispatchedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    dispatchedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_preassignedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    preassignedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_bulkDispatchedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    bulkDispatchedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_startRepair /* IMPORTED_LONG_NAMED_INTEGER */,
    startRepair /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_pendingTest /* IMPORTED_LONG_NAMED_INTEGER */,
    pendingTest /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_pendingDispatch /* IMPORTED_LONG_NAMED_INTEGER */,
    pendingDispatch /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_requestRepair /* IMPORTED_LONG_NAMED_INTEGER */,
    requestRepair /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_referMtceCenter /* IMPORTED_LONG_NAMED_INTEGER */,
    referMtceCenter /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_referVendor /* IMPORTED_LONG_NAMED_INTEGER */,
    referVendor /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_noAccessOther /* IMPORTED_LONG_NAMED_INTEGER */,
    noAccessOther /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_startNoAccess /* IMPORTED_LONG_NAMED_INTEGER */,
    startNoAccess /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_stopNoAccess /* IMPORTED_LONG_NAMED_INTEGER */,
    stopNoAccess /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_startDelayedMtce /* IMPORTED_LONG_NAMED_INTEGER */,
    startDelayedMtce /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_stopDelayedMtce /* IMPORTED_LONG_NAMED_INTEGER */,
    stopDelayedMtce /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_troubleEscalated /* IMPORTED_LONG_NAMED_INTEGER */,
    troubleEscalated /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_craftDispatched /* IMPORTED_LONG_NAMED_INTEGER */,
    craftDispatched /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_temporaryOK /* IMPORTED_LONG_NAMED_INTEGER */,
    temporaryOK /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_cableFailure /* IMPORTED_LONG_NAMED_INTEGER */,
    cableFailure /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_originatingEquipFailure /* IMPORTED_LONG_NAMED_INTEGER */,
    originatingEquipFailure /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_backOrder /* IMPORTED_LONG_NAMED_INTEGER */,
    backOrder /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_clearedCustNotAdvised /* IMPORTED_LONG_NAMED_INTEGER */,
    clearedCustNotAdvised /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_clearedCustAdvised /* IMPORTED_LONG_NAMED_INTEGER */,
    clearedCustAdvised /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_clearedAwaitingCustVerification /* IMPORTED_LONG_NAMED_INTEGER */,
    clearedAwaitingCustVerification /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOutByCustReq /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOutByCustReq /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOutCustVerified /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOutCustVerified /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOutCustDenied /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOutCustDenied /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_canceledPendingWorkInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
    canceledPendingWorkInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_canceledPendingTestCompletion /* IMPORTED_LONG_NAMED_INTEGER */,
    canceledPendingTestCompletion /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_canceledPendingDispatchCompl /* IMPORTED_LONG_NAMED_INTEGER */,
    canceledPendingDispatchCompl /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_techOnSite /* IMPORTED_LONG_NAMED_INTEGER */,
    techOnSite /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_techLeftSite /* IMPORTED_LONG_NAMED_INTEGER */,
    techLeftSite /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TroubleReportStatus_number,
    _encode_TroubleReportStatus_number,
} from '../X790ASN1Module/TroubleReportStatus-number.ta.js';
export {
    TroubleReportStatus_number,
    TroubleReportStatus_number_screening /* IMPORTED_LONG_NAMED_INTEGER */,
    screening /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_testing /* IMPORTED_LONG_NAMED_INTEGER */,
    testing /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_dispatchedIn /* IMPORTED_LONG_NAMED_INTEGER */,
    dispatchedIn /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_dispatchedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    dispatchedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_preassignedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    preassignedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_bulkDispatchedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    bulkDispatchedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_startRepair /* IMPORTED_LONG_NAMED_INTEGER */,
    startRepair /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_pendingTest /* IMPORTED_LONG_NAMED_INTEGER */,
    pendingTest /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_pendingDispatch /* IMPORTED_LONG_NAMED_INTEGER */,
    pendingDispatch /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_requestRepair /* IMPORTED_LONG_NAMED_INTEGER */,
    requestRepair /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_referMtceCenter /* IMPORTED_LONG_NAMED_INTEGER */,
    referMtceCenter /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_referVendor /* IMPORTED_LONG_NAMED_INTEGER */,
    referVendor /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_noAccessOther /* IMPORTED_LONG_NAMED_INTEGER */,
    noAccessOther /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_startNoAccess /* IMPORTED_LONG_NAMED_INTEGER */,
    startNoAccess /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_stopNoAccess /* IMPORTED_LONG_NAMED_INTEGER */,
    stopNoAccess /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_startDelayedMtce /* IMPORTED_LONG_NAMED_INTEGER */,
    startDelayedMtce /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_stopDelayedMtce /* IMPORTED_LONG_NAMED_INTEGER */,
    stopDelayedMtce /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_troubleEscalated /* IMPORTED_LONG_NAMED_INTEGER */,
    troubleEscalated /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_craftDispatched /* IMPORTED_LONG_NAMED_INTEGER */,
    craftDispatched /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_temporaryOK /* IMPORTED_LONG_NAMED_INTEGER */,
    temporaryOK /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_cableFailure /* IMPORTED_LONG_NAMED_INTEGER */,
    cableFailure /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_originatingEquipFailure /* IMPORTED_LONG_NAMED_INTEGER */,
    originatingEquipFailure /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_backOrder /* IMPORTED_LONG_NAMED_INTEGER */,
    backOrder /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_clearedCustNotAdvised /* IMPORTED_LONG_NAMED_INTEGER */,
    clearedCustNotAdvised /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_clearedCustAdvised /* IMPORTED_LONG_NAMED_INTEGER */,
    clearedCustAdvised /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_clearedAwaitingCustVerification /* IMPORTED_LONG_NAMED_INTEGER */,
    clearedAwaitingCustVerification /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOut /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOut /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOutByCustReq /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOutByCustReq /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOutCustVerified /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOutCustVerified /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_closedOutCustDenied /* IMPORTED_LONG_NAMED_INTEGER */,
    closedOutCustDenied /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_canceledPendingWorkInProgress /* IMPORTED_LONG_NAMED_INTEGER */,
    canceledPendingWorkInProgress /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_canceledPendingTestCompletion /* IMPORTED_LONG_NAMED_INTEGER */,
    canceledPendingTestCompletion /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_canceledPendingDispatchCompl /* IMPORTED_LONG_NAMED_INTEGER */,
    canceledPendingDispatchCompl /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_techOnSite /* IMPORTED_LONG_NAMED_INTEGER */,
    techOnSite /* IMPORTED_SHORT_NAMED_INTEGER */,
    TroubleReportStatus_number_techLeftSite /* IMPORTED_LONG_NAMED_INTEGER */,
    techLeftSite /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TroubleReportStatus_number,
    _encode_TroubleReportStatus_number,
} from '../X790ASN1Module/TroubleReportStatus-number.ta.js';

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus */
/**
 * @summary TroubleReportStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportStatus  ::=  CHOICE {
 *   number
 *     INTEGER {-- Integer values are to be registered in the
 *              -- standard. Administrations may restrict
 *              -- the values to be used.
 *              screening(1), testing(2), dispatchedIn(3), dispatchedOut(4),
 *              preassignedOut(5), bulkDispatchedOut(6), startRepair(7),
 *              pendingTest(8), pendingDispatch(9), requestRepair(10),
 *              referMtceCenter(11), referVendor(12), noAccessOther(13),
 *              startNoAccess(14), stopNoAccess(15), startDelayedMtce(16),
 *              stopDelayedMtce(17), troubleEscalated(18), craftDispatched(19),
 *              temporaryOK(20), cableFailure(21), originatingEquipFailure(22),
 *              backOrder(23), clearedCustNotAdvised(24), clearedCustAdvised(25),
 *              clearedAwaitingCustVerification(26), closedOut(27),
 *              closedOutByCustReq(28), closedOutCustVerified(29),
 *              closedOutCustDenied(30), canceledPendingWorkInProgress(31),
 *              canceledPendingTestCompletion(32),
 *              canceledPendingDispatchCompl(33), techOnSite(34), techLeftSite(35)},
 *   identifier  OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type TroubleReportStatus =
    | { number_: TroubleReportStatus_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportStatus */
let _cached_decoder_for_TroubleReportStatus: $.ASN1Decoder<TroubleReportStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportStatus */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportStatus} The decoded data structure.
 */
export function _decode_TroubleReportStatus(el: _Element) {
    if (!_cached_decoder_for_TroubleReportStatus) {
        _cached_decoder_for_TroubleReportStatus = $._decode_extensible_choice<TroubleReportStatus>(
            {
                'UNIVERSAL 2': ['number_', _decode_TroubleReportStatus_number],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_TroubleReportStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportStatus */
let _cached_encoder_for_TroubleReportStatus: $.ASN1Encoder<TroubleReportStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportStatus */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportStatus */
/**
 * @summary Encodes a(n) TroubleReportStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportStatus, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportStatus(
    value: TroubleReportStatus,
    elGetter: $.ASN1Encoder<TroubleReportStatus>
) {
    if (!_cached_encoder_for_TroubleReportStatus) {
        _cached_encoder_for_TroubleReportStatus = $._encode_choice<TroubleReportStatus>(
            {
                number_: _encode_TroubleReportStatus_number,
                identifier: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleReportStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportStatus */

/* eslint-enable */
