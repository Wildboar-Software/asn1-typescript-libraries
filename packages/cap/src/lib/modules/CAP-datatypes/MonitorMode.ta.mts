import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MonitorMode
 * @description
 *
 * Whether the event is relayed and/or processed by the SSP. `transparent` means
 * the gsmSSF or gprsSSF does not notify the gsmSCF. For
 * RequestNotificationCharging, `interrupted` shall not be used. Procedure use:
 * clause 11. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonitorMode ::= ENUMERATED {
 *  interrupted				(0),
 *  notifyAndContinue			(1),
 *  transparent				(2)
 *  }
 * ```
 *
 */
export enum _enum_for_MonitorMode {
    interrupted = 0,
    notifyAndContinue = 1,
    transparent = 2,
}
export type MonitorMode = _enum_for_MonitorMode;
export const MonitorMode = _enum_for_MonitorMode;
/**
 * @summary MonitorMode_interrupted
 * @description
 *
 * `interrupted (0)`. Not for RequestNotificationCharging. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MonitorMode_interrupted: MonitorMode = MonitorMode.interrupted;
/**
 * @summary interrupted
 * @description
 *
 * `interrupted (0)`. Not for RequestNotificationCharging. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const interrupted: MonitorMode = MonitorMode.interrupted;
/**
 * @summary MonitorMode_notifyAndContinue
 * @description
 *
 * `notifyAndContinue (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MonitorMode_notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue;
/**
 * @summary notifyAndContinue
 * @description
 *
 * `notifyAndContinue (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue;
/**
 * @summary MonitorMode_transparent
 * @description
 *
 * `transparent (2)`: gsmSSF or gprsSSF does not notify the gsmSCF. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MonitorMode_transparent: MonitorMode = MonitorMode.transparent;
/**
 * @summary transparent
 * @description
 *
 * `transparent (2)`: gsmSSF or gprsSSF does not notify the gsmSCF. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const transparent: MonitorMode = MonitorMode.transparent;
export const _decode_MonitorMode = $._decodeEnumerated;
export const _encode_MonitorMode = $._encodeEnumerated;
