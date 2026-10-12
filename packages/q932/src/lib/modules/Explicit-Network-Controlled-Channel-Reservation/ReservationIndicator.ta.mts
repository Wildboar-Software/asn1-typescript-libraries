/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservationIndicator
 * @description
 * 
 * Integer from -128 to 127 that the network issues for an explicit channel
 * reservation and stores against that reservation. When a reservation was
 * created with an indicator, the network grants use of the reservation, or
 * cancels it, only if the same value is included in the management or cancel
 * invoke. The user keeps the value from the creation return result and discards
 * it after a successful management or cancel return result.
 *
 * An explicitly reserved channel is not selected for a new call unless the
 * request on that CEI asks for it and, when required, carries this value. "No
 * B-channel available" applies when the number of channels available for the
 * terminal, minus the number of reserved channels, is zero.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2 and §6.4.2.5; ITU-T Rec. Q.932 (1998) Amd.1
 * (06/2000) Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservationIndicator  ::=  INTEGER((-128..127))
 * ```
 */
export
type ReservationIndicator = INTEGER;

export function _decode_ReservationIndicator (el: _Element): ReservationIndicator {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < -128n || n > 127n) {
        throw new ASN1OverflowError("ReservationIndicator violates INTEGER (-128..127)");
    }
    return value;
}

export const _encode_ReservationIndicator: $.ASN1Encoder<ReservationIndicator> = $._encodeInteger;


/* eslint-enable */
