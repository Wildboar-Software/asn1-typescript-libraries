/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";

/**
 * @summary LocalConnectionState
 * @description
 *
 * Connection state of the device associated with the Monitor Cross
 * Reference ID (`APPLICATION 14`; ECMA-269 §12.2.17, §6.1.3).
 * Only on events from **device-type** monitors — not call-type.
 *
 * Same subject device on two device monitors can report different
 * local states. Example: A calls B, B is ringing; both Delivered
 * events name B as subject, but A's local state is Connected
 * (ringback) and B's is Alerting.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalConnectionState ::= [APPLICATION 14] IMPLICIT ENUMERATED
 * {    null        (0),
 *     initiated    (1),
 *     alerting     (2),
 *     connected    (3),
 *     hold         (4),
 *     queued       (5),
 *     fail         (6) }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_LocalConnectionState {
    /**
     * No relationship between a call and a device
     * (ECMA-269 §6.1.3).
     */
    null_ = 0,
    /**
     * Device is requesting a service or dialling. Entered on
     * off-hook (e.g. dialtone) or when prompted to go off-hook
     * (ECMA-269 §6.1.3).
     */
    initiated = 1,
    /**
     * Attempting to connect the call to the device. Modes: Offered
     * (pre-delivery; no ringback), Ringing (Delivered, not
     * “Entering Distribution”), Entering Distribution (Delivered
     * with that cause) (ECMA-269 §6.1.3).
     */
    alerting = 2,
    /**
     * Device is actively participating in the call (logical and
     * physical) (ECMA-269 §6.1.3).
     */
    connected = 3,
    /**
     * Inactive participation: logical yes, physical suspended
     * (ECMA-269 §6.1.3).
     */
    hold = 4,
    /**
     * Progression suspended: park, ACD wait, camp-on, or inactive
     * shared-bridged appearance (ECMA-269 §6.1.3).
     */
    queued = 5,
    /**
     * Progression aborted (failed to connect calling or called
     * side, create the call, or other; ECMA-269 §6.1.3, §6.7.2).
     */
    fail = 6,
}

/**
 * @summary LocalConnectionState
 * @description
 *
 * Alias of `_enum_for_LocalConnectionState` (ECMA-269 §12.2.17).
 *
 * @enum {number}
 */
export
type LocalConnectionState = _enum_for_LocalConnectionState;

/**
 * @summary LocalConnectionState
 * @description
 *
 * Enum object for `LocalConnectionState` (ECMA-269 §12.2.17).
 *
 * @enum {number}
 */
export
const LocalConnectionState = _enum_for_LocalConnectionState;

/**
 * @summary null
 * @description
 *
 * No call–device relationship (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_null: LocalConnectionState = LocalConnectionState.null_;
/**
 * @summary initiated
 * @description
 *
 * Requesting a service or dialling (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_initiated: LocalConnectionState = LocalConnectionState.initiated;
/**
 * @summary alerting
 * @description
 *
 * Attempting to connect the call to the device (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_alerting: LocalConnectionState = LocalConnectionState.alerting;
/**
 * @summary connected
 * @description
 *
 * Actively participating in the call (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_connected: LocalConnectionState = LocalConnectionState.connected;
/**
 * @summary hold
 * @description
 *
 * Inactive (suspended) participation (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_hold: LocalConnectionState = LocalConnectionState.hold;
/**
 * @summary queued
 * @description
 *
 * Progression suspended awaiting action (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_queued: LocalConnectionState = LocalConnectionState.queued;
/**
 * @summary fail
 * @description
 *
 * Call progression aborted (ECMA-269 §6.1.3).
 */
export const LocalConnectionState_fail: LocalConnectionState = LocalConnectionState.fail;

export function _decode_LocalConnectionState (el: _Element): LocalConnectionState {
    return $._decode_implicit<LocalConnectionState>(() => $._decodeEnumerated)(el);
}

export function _encode_LocalConnectionState (value: LocalConnectionState, _elGetter: $.ASN1Encoder<LocalConnectionState>): _Element {
    return $._encode_implicit(_TagClass.application, 14, () => $._encodeEnumerated, $.BER)(value, $.BER);
}

/* eslint-enable */
