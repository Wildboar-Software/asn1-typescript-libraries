/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Status
 * @description
 *
 * Status of a previously submitted Short Message, or of a Command for which a
 * Status Report was requested (ECMA-325 §E.7.6, Table E.5). Integer 0..255.
 * The ASN.1 does not name the values. Integers absent from Table E.5 are not
 * defined there. §6.5.3.2.1 asks for `smValidityPeriodExpired`, which Table
 * E.5 does not contain.
 *
 * - 0 `smReceivedBySME`. After a successful `smsDeliver` result the Service
 *   Centre requests this status when a Status Report is due for that condition
 *   (§6.5.3.1.1).
 * - 1 `smForwardedButSCUnableToConfirmDelivery`. Table E.5 gives no further
 *   meaning.
 * - 2 `smReplacedByTheSC`. Table E.5 gives no further meaning.
 * - 32 `tempCongestion`. 33 `tempSMEBusy`. 34 `tempNoResponseFromSME`. 35
 *   `tempServiceRejected`. 36 `qualityOfServiceNotAvailable`. 37
 *   `tempErrorInSME`. Table E.5 gives no further meaning for these names.
 * - 64 `remoteProcedureError`. 65 `incompatibleDestination`. 67
 *   `notObtainable`. 68 `permanentQualityOfServiceNotAvailable`. 69
 *   `noInterworkingAvailable`. Table E.5 gives no further meaning for these
 *   names.
 * - 66 `connectionRejectedBySME`. Requested after an `smsDeliver` reject when
 *   a Status Report is due for that condition (§6.5.3.2.1).
 * - 70 `iwValidityPeriodExpired`. Table E.5 gives no further meaning.
 *   §6.5.3.2.1 separately names `smValidityPeriodExpired`, which is not in
 *   this table.
 * - 71 `smDeletedByOriginatingSME`. Requested after command
 *   `deletePreviouslySubmittedSM` when a Status Report is due (§6.5.3.1.2).
 * - 72 `smDeletedBySCAdministration`. §6.5.3.2.1 spells the T3 give-up request
 *   `smDeletedByScAdministration`.
 * - 73 `smDoesNotExist`. Requested when `smsCommand` matches no Short Message
 *   and a Status Report is due (§6.5.3.2.2).
 * - 96 `congestion`. 97 `sMEBusy`. 99 `serviceRejected`. 100
 *   `tempQualityOfServiceNotAvailable`. Table E.5 gives no further meaning for
 *   these names.
 * - 98 `noResponseFromSME`. Requested when `smsDeliver` is resent after timer
 *   T3 and a Status Report is due (§6.5.3.2.1).
 * - 101 `errorInSME`. §6.5.3.2.1 also names `errorInSme` for memory or
 *   SIM-full delivery failure. The table has both this value and
 *   `tempErrorInSME` (37) and does not say which spelling applies.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Status  ::=  INTEGER (0..255)
 * ```
 */
export
type Status = INTEGER;

export
const _decode_Status = (el: _Element): Status => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("Status violates INTEGER constraint");
    }
    return value;
};

export
const _encode_Status: $.ASN1Encoder<Status> = $._encodeInteger;

/* eslint-enable */
