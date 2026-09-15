import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimerID
 * @description
 *
 * Timer to reset (ResetTimer / ResetTimerGPRS / ResetTimerSMS). Only `tssf` is
 * defined; it is the only permissible ResetTimer value. (3GPP TS 29.078 V19.0.0
 * clauses 5.1 and 11.28)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimerID ::= ENUMERATED {
 *  tssf				(0)
 *  }
 * ```
 *
 */
export enum _enum_for_TimerID {
    tssf = 0,
}
export type TimerID = _enum_for_TimerID;
export const TimerID = _enum_for_TimerID;
/**
 * @summary TimerID_tssf
 * @description
 *
 * `tssf (0)`: Tssf application timer. Only permissible ResetTimer timerID.
 * (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const TimerID_tssf: TimerID = TimerID.tssf;
/**
 * @summary tssf
 * @description
 *
 * `tssf (0)`: Tssf application timer. Only permissible ResetTimer timerID.
 * (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tssf: TimerID = TimerID.tssf;
export const _decode_TimerID = $._decodeEnumerated;
export const _encode_TimerID = $._encodeEnumerated;
