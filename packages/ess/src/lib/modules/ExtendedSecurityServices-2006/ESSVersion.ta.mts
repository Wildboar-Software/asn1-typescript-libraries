/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ESSVersion
 * @description
 *
 * Version number for `Receipt` syntax; `v1(1)` for RFC 2634
 * ([RFC 2634 §2.8](https://datatracker.ietf.org/doc/html/rfc2634#section-2.8)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ESSVersion  ::=  INTEGER  { v1(1) }
 * ```
 */
export type ESSVersion = INTEGER;


/**
 * @summary ESSVersion_v1
 * @constant
 * @type {number}
 */
export const ESSVersion_v1: 1 = 1 satisfies ESSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ESSVersion_v1
 * @constant
 * @type {number}
 */
export const v1: 1 = ESSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ESSVersion: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_ESSVersion: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
