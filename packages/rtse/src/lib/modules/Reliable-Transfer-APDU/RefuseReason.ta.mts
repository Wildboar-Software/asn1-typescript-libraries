/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary RefuseReason
 * @description
 *
 * Why an RTORJ refused establishment or recovery. Present solely in
 * X.410-1984 mode. ITU-T Rec. X.228 (11/88) §7.1.6.1, §7.8.3.6.1:
 *
 * - `rtsBusy` (0) — RTPM or acceptor too loaded; retry later. Maps
 *   to Result `rejected (transient)`
 * - `cannotRecover` (1) — accepting RTPM cannot accept
 *   association-recovery
 * - `validationFailure` (2) — acceptor does not recognize the
 *   requestor's credentials (X.410-1984 User-data
 *   `authentication-failure` when Result is `rejected (permanent)`;
 *   ITU-T Rec. X.218 (03/93) §9.1.1.4)
 * - `unacceptableDialogueMode` (3) — acceptor rejects the proposed
 *   dialogue-mode
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefuseReason  ::=  INTEGER {
 *   rtsBusy(0), cannotRecover(1), validationFailure(2),
 *   unacceptableDialogueMode(3)}
 * ```
 */
export type RefuseReason = INTEGER;


/**
 * @summary RefuseReason_rtsBusy
 * @description RTPM or acceptor too loaded; retry later (ITU-T Rec.
 *     X.228 (11/88) §7.1.6.1).
 * @constant
 * @type {number}
 */
export const RefuseReason_rtsBusy: RefuseReason = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_rtsBusy
 * @description Alias of {@link RefuseReason_rtsBusy}.
 * @constant
 * @type {number}
 */
export const rtsBusy: RefuseReason = RefuseReason_rtsBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_cannotRecover
 * @description Accepting RTPM cannot accept association-recovery
 *     (ITU-T Rec. X.228 (11/88) §7.1.6.1, §7.8.3.6.1).
 * @constant
 * @type {number}
 */
export const RefuseReason_cannotRecover: RefuseReason = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_cannotRecover
 * @description Alias of {@link RefuseReason_cannotRecover}.
 * @constant
 * @type {number}
 */
export const cannotRecover: RefuseReason = RefuseReason_cannotRecover; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_validationFailure
 * @description Acceptor does not recognize the requestor's
 *     credentials (ITU-T Rec. X.228 (11/88) §7.1.6.1).
 * @constant
 * @type {number}
 */
export const RefuseReason_validationFailure: RefuseReason = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_validationFailure
 * @description Alias of {@link RefuseReason_validationFailure}.
 * @constant
 * @type {number}
 */
export const validationFailure: RefuseReason = RefuseReason_validationFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @description Acceptor rejects the proposed dialogue-mode (ITU-T
 *     Rec. X.228 (11/88) §7.1.6.1).
 * @constant
 * @type {number}
 */
export const RefuseReason_unacceptableDialogueMode: RefuseReason = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RefuseReason_unacceptableDialogueMode
 * @description Alias of {@link RefuseReason_unacceptableDialogueMode}.
 * @constant
 * @type {number}
 */
export const unacceptableDialogueMode: RefuseReason = RefuseReason_unacceptableDialogueMode; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_RefuseReason = $._decodeInteger;




export const _encode_RefuseReason = $._encodeInteger;


/* eslint-enable */
