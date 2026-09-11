import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TimerValue
 * @description
 *
 * Timer value in seconds. ResetTimer / ResetTimerSMS / ResetTimerGPRS load
 * Tssf with this value. Range class is Short on each interface: CS 1 s–10 s
 * (clause 6.1.1 Table 6-1); SMS 1–20 s (clause 7.1.1 Table 7-1); GPRS 1–20 s
 * (clause 8.1.2 Table 8-1). Definitive value is network-operator defined
 * within range. (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.28)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimerValue ::= Integer4
 * ```
 *
 */
export type TimerValue = INTEGER;
export const _decode_TimerValue = $._decodeInteger;
export const _encode_TimerValue = $._encodeInteger;
