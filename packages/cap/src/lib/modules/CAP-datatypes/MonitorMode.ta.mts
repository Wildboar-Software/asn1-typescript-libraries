import {
    type ASN1Element as _Element,
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
export const MonitorMode: typeof _enum_for_MonitorMode = _enum_for_MonitorMode;
/**
 * @summary MonitorMode_interrupted
 * @description
 *
 * `interrupted (0)`. Not for RequestNotificationCharging. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MonitorMode_interrupted: _enum_for_MonitorMode.interrupted = MonitorMode.interrupted;
/**
 * @summary interrupted
 * @description
 *
 * `interrupted (0)`. Not for RequestNotificationCharging. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const interrupted: _enum_for_MonitorMode.interrupted = MonitorMode.interrupted;
/**
 * @summary MonitorMode_notifyAndContinue
 * @description
 *
 * `notifyAndContinue (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MonitorMode_notifyAndContinue: _enum_for_MonitorMode.notifyAndContinue = MonitorMode.notifyAndContinue;
/**
 * @summary notifyAndContinue
 * @description
 *
 * `notifyAndContinue (1)`. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const notifyAndContinue: _enum_for_MonitorMode.notifyAndContinue = MonitorMode.notifyAndContinue;
/**
 * @summary MonitorMode_transparent
 * @description
 *
 * `transparent (2)`: gsmSSF or gprsSSF does not notify the gsmSCF. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const MonitorMode_transparent: _enum_for_MonitorMode.transparent = MonitorMode.transparent;
/**
 * @summary transparent
 * @description
 *
 * `transparent (2)`: gsmSSF or gprsSSF does not notify the gsmSCF. (3GPP TS
 * 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const transparent: _enum_for_MonitorMode.transparent = MonitorMode.transparent;
export const _decode_MonitorMode: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_MonitorMode: $.ASN1Encoder<number> = $._encodeEnumerated;
