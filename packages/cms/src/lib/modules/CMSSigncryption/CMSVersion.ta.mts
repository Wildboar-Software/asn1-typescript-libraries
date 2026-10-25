/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CMSVersion
 * @description
 *
 * CMS version INTEGER reused by SigncryptedData (ITU-T X.894 | ISO/IEC 24824-4; aligned with
 * [RFC 5652 §10.2.5](https://datatracker.ietf.org/doc/html/rfc5652#section-10.2.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMSVersion     ::=  INTEGER {v0(0)} (0..MAX)
 * ```
 */
export type CMSVersion = INTEGER;


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const CMSVersion_v0: 0 = 0 satisfies CMSVersion; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CMSVersion_v0
 * @constant
 * @type {number}
 */
export const v0: 0 = CMSVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CMSVersion: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_CMSVersion: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
