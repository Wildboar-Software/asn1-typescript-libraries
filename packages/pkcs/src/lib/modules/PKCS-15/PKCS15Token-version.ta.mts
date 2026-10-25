/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PKCS15Token_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Token-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKCS15Token_version = INTEGER;


/**
 * @summary PKCS15Token_version_v1
 * @constant
 * @type {number}
 */
export const PKCS15Token_version_v1: 0 = 0 satisfies PKCS15Token_version; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKCS15Token_version_v1
 * @constant
 * @type {number}
 */
export const v1: 0 = PKCS15Token_version_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PKCS15Token_version: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_PKCS15Token_version: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
