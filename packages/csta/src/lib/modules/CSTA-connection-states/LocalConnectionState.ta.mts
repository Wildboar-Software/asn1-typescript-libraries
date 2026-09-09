/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";

/**
 * @summary LocalConnectionState
 * @description
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
    null_ = 0,
    initiated = 1,
    alerting = 2,
    connected = 3,
    hold = 4,
    queued = 5,
    fail = 6,
}

/**
 * @summary LocalConnectionState
 * @enum {number}
 */
export
type LocalConnectionState = _enum_for_LocalConnectionState;

/**
 * @summary LocalConnectionState
 * @enum {number}
 */
export
const LocalConnectionState = _enum_for_LocalConnectionState;

export const LocalConnectionState_null: LocalConnectionState = LocalConnectionState.null_;
export const LocalConnectionState_initiated: LocalConnectionState = LocalConnectionState.initiated;
export const LocalConnectionState_alerting: LocalConnectionState = LocalConnectionState.alerting;
export const LocalConnectionState_connected: LocalConnectionState = LocalConnectionState.connected;
export const LocalConnectionState_hold: LocalConnectionState = LocalConnectionState.hold;
export const LocalConnectionState_queued: LocalConnectionState = LocalConnectionState.queued;
export const LocalConnectionState_fail: LocalConnectionState = LocalConnectionState.fail;

export function _decode_LocalConnectionState (el: _Element): LocalConnectionState {
    return $._decode_implicit<LocalConnectionState>(() => $._decodeEnumerated)(el);
}

export function _encode_LocalConnectionState (value: LocalConnectionState, _elGetter: $.ASN1Encoder<LocalConnectionState>): _Element {
    return $._encode_implicit(_TagClass.application, 14, () => $._encodeEnumerated, $.BER)(value, $.BER);
}

/* eslint-enable */
