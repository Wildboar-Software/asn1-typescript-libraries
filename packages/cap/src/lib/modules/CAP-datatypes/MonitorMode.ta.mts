import {
    ENUMERATED,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MonitorMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonitorMode ::= ENUMERATED {
 interrupted				(0),
 notifyAndContinue			(1),
 transparent				(2)
 }
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
export const MonitorMode_interrupted: MonitorMode = MonitorMode.interrupted;
export const interrupted: MonitorMode = MonitorMode.interrupted;
export const MonitorMode_notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue;
export const notifyAndContinue: MonitorMode = MonitorMode.notifyAndContinue;
export const MonitorMode_transparent: MonitorMode = MonitorMode.transparent;
export const transparent: MonitorMode = MonitorMode.transparent;
export const _decode_MonitorMode = $._decodeEnumerated;
export const _encode_MonitorMode = $._encodeEnumerated;
