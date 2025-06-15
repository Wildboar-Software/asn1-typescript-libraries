/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
 * ```@enum {number}
 */
export type EnvelopedData_error = _enum_for_EnvelopedData_error | ENUMERATED;

/**
 * @summary EnvelopedData_error_noReason
 * @constant
 * @type {number}
 */
export const EnvelopedData_error_noReason: EnvelopedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: EnvelopedData_error = EnvelopedData_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_EnvelopedData_error = $._decodeEnumerated;


export const _encode_EnvelopedData_error = $._encodeEnumerated;


/* eslint-enable */
