import {
    ENUMERATED,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimerID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimerID ::= ENUMERATED {
 tssf				(0)
 }
 * ```
 *
 */
export enum _enum_for_TimerID {
    tssf = 0,
}
export type TimerID = _enum_for_TimerID;
export const TimerID = _enum_for_TimerID;
export const TimerID_tssf: TimerID = TimerID.tssf;
export const tssf: TimerID = TimerID.tssf;
export const _decode_TimerID = $._decodeEnumerated;
export const _encode_TimerID = $._encodeEnumerated;
