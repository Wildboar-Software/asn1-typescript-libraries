/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary FailureCause
 * @description
 *
 * Why an SMS invoke failed (ECMA-325 §E.3.1, Table E.4). Integer 0..255. The
 * ASN.1 does not name the values. Every integer absent from Table E.4 is
 * reserved. The same list applies to `smsSubmit`, `smsDeliver`,
 * `smsStatusReport`, and `smsCommand` errors.
 *
 * - 128 `telematicInterworkingNotSupported`: the Service Centre cannot provide
 *   the telematic interworking requested by `protocolIdentifier`. Used on
 *   `smsSubmit` (§6.5.3.2.1).
 * - 129 `shortMessageType0NotSupported`: the Service Centre does not support
 *   Message Type 0.
 * - 130 `canNotReplaceShortMessage`: a Short Message cannot be replaced as
 *   requested by `protocolIdentifier`.
 * - 143 `unspecifiedProtocolIdentifierError`: an unspecified failure while
 *   processing `protocolIdentifier`.
 * - 144 `alphabetNotSupported`: the receiving entity does not support the
 *   alphabet indicated for `shortMessageText`.
 * - 145 `messageClassNotSupported`: the message class is not supported.
 * - 159 `unspecifiedDcsError`: an unspecified failure while processing
 *   `shortMessageText` and class.
 * - 160 `commandCanNotBeActioned`: the Service Centre cannot action
 *   `commandType`, with no further reason. §6.5.3.2.2 spells this
 *   `commandCannotBeActioned` when no Short Message is identified.
 * - 161 `commandUnsupported`: the Service Centre does not support that
 *   `commandType`.
 * - 175 `unspecifiedCommandError`: an unspecified failure while processing
 *   `smsCommand`.
 * - 176 `pduNotSupported`: only from interworking, when the other network
 *   sends this cause. Inside a PISN the case is a reject APDU.
 * - 192 `scBusy`: the Service Centre cannot handle the invoke.
 * - 193 `noScSubscription`: the user identified by the party number is not
 *   allowed to use SMS at this Service Centre.
 * - 194 `scSystemFailure`: a general Service Centre failure.
 * - 195 `invalidSmeAddress`: the party number of the Short Message entity that
 *   should receive the invoke is invalid.
 * - 196 `destinationSmeBarred`: that Short Message entity is barred.
 * - 197 `smRejectedDuplicateSm`: duplicate Short Message rejected. §6.5.3.2.1
 *   spells this `smRejectedDuplicateSM`.
 * - 198 `validityPeriodFormatNotSupported`: the Service Centre does not
 *   support this `validityPeriod` format.
 * - 199 `validityPeriodNotSupported`: the Service Centre does not support
 *   Validity Period.
 * - 208 `simSmsStorageFull`: the Receiving User's SIM cannot store another
 *   Short Message. Requires SIM storage. Used on failed delivery (§6.5.4.2).
 * - 209 `noSmsStorageCapabilityinSIM`: the SIM cannot store Short Messages at
 *   all. Requires SIM storage.
 * - 210 `errorInTE`: the Receiving User's terminal failed.
 * - 211 `memoryCapacityExceeded`: the receiving entity had no memory. Used
 *   when a Short Message cannot be stored (§6.5.4.2, §6.5.5.2).
 * - 212 `simApplicationToolkitBusy`: the SIM reported toolkit busy. Requires
 *   SIM storage.
 * - 213 `simDataDownloadError`: the SIM reported a data-download error.
 *   Requires SIM storage.
 * - 255 `unspecifiedErrorCause`: an unspecified error.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FailureCause = INTEGER;

export
const _decode_FailureCause = (el: _Element): FailureCause => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("FailureCause violates INTEGER constraint");
    }
    return value;
};

export
const _encode_FailureCause: $.ASN1Encoder<FailureCause> = $._encodeInteger;

/* eslint-enable */
