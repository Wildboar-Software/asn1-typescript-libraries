import {
    type ASN1Element as _Element,
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
export const TimerID: typeof _enum_for_TimerID = _enum_for_TimerID;
/**
 * @summary TimerID_tssf
 * @description
 *
 * `tssf (0)`: Tssf application timer. Only permissible ResetTimer timerID.
 * (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const TimerID_tssf: _enum_for_TimerID.tssf = TimerID.tssf;
/**
 * @summary tssf
 * @description
 *
 * `tssf (0)`: Tssf application timer. Only permissible ResetTimer timerID.
 * (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * @constant
 */
export const tssf: _enum_for_TimerID.tssf = TimerID.tssf;
export const _decode_TimerID: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_TimerID: $.ASN1Encoder<number> = $._encodeEnumerated;
