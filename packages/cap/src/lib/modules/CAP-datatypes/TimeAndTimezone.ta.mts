import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TimeAndTimezone
 * @description
 *
 * Time the gsmSSF (or smsSSF / gprsSSF) was triggered and the time zone of the
 * invoking entity, relative to GMT. BCD-encoded; timezone is octet 8 per 3GPP
 * TS 23.040. (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.20.1.1)
 *
 * Octets 1–7: year (millennium/century, decade/year), month, day, hours,
 * minutes, seconds — each pair of digits in one octet, low nibble = first
 * digit, high nibble = second digit. Digit values 0000–1001 are 0–9; 1010–1110
 * spare.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAndTimezone {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minTimeAndTimezoneLength .. bound.&maxTimeAndTimezoneLength))
 * ```
 *
 */
export type TimeAndTimezone = OCTET_STRING;
export const _decode_TimeAndTimezone = $._decodeOctetString;
export const _encode_TimeAndTimezone = $._encodeOctetString;
