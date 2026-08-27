/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Version
 * @description
 *
 * OCSP protocol / basic response syntax version
 * ([RFC 6960 §4.1.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.1.1),
 * [§4.2.2.3](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.2.3)).
 * For this document the value is `v1`(0).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Version   ::=   INTEGER  {  v1(0) }
 * ```
 */
export type Version = INTEGER;


/**
 * @summary Version_v1
 * @description
 *
 * `v1`(0): version of the OCSP request and basic response syntax
 * in [RFC 6960](https://datatracker.ietf.org/doc/html/rfc6960).
 *
 * @constant
 * @type {number}
 */
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Version_v1
 * @description
 *
 * `v1`(0): version of the OCSP request and basic response syntax
 * in [RFC 6960](https://datatracker.ietf.org/doc/html/rfc6960).
 *
 * @constant
 * @type {number}
 */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Version = $._decodeInteger;




export const _encode_Version = $._encodeInteger;


/* eslint-enable */
