/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
    _decode_TroubleReportStatus_number,
    _encode_TroubleReportStatus_number,
} from '../X790ASN1Module/TroubleReportStatus-number.ta.mjs';
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
 * @param value The element being encoded.
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
