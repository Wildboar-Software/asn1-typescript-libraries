import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TimeAndTimezone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeAndTimezone {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minTimeAndTimezoneLength .. bound.&maxTimeAndTimezoneLength))
 * ```
 *
 */
export type TimeAndTimezone = OCTET_STRING;
export const _decode_TimeAndTimezone = $._decodeOctetString;
export const _encode_TimeAndTimezone = $._encodeOctetString;
