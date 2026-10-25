/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_EnvelopedData_error {
    noReason = 0,
}

/**
 * @summary EnvelopedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type EnvelopedData_error = _enum_for_EnvelopedData_error | ENUMERATED;

/**
 * @summary EnvelopedData_error_noReason
 * @constant
 * @type {number}
 */
export const EnvelopedData_error_noReason: _enum_for_EnvelopedData_error.noReason = _enum_for_EnvelopedData_error.noReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: _enum_for_EnvelopedData_error.noReason = EnvelopedData_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EnvelopedData_error: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_EnvelopedData_error: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
