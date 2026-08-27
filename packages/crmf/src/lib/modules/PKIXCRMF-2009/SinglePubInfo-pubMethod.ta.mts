/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SinglePubInfo_pubMethod
 * @description
 *
 * Unnested `pubMethod` INTEGER from `SinglePubInfo`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SinglePubInfo-pubMethod ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SinglePubInfo_pubMethod = INTEGER;


/**
 * @summary SinglePubInfo_pubMethod_dontCare
 * @description
 *
 * `dontCare`(0): CA/RA may publish wherever it chooses;
 * `pubLocation` MUST be omitted ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const SinglePubInfo_pubMethod_dontCare: SinglePubInfo_pubMethod = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_dontCare
 * @description
 *
 * `dontCare`(0): CA/RA may publish wherever it chooses;
 * `pubLocation` MUST be omitted ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const dontCare: SinglePubInfo_pubMethod = SinglePubInfo_pubMethod_dontCare; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_x500
 * @description
 *
 * `x500`(1): publish at the X.500 location in `pubLocation`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const SinglePubInfo_pubMethod_x500: SinglePubInfo_pubMethod = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_x500
 * @description
 *
 * `x500`(1): publish at the X.500 location in `pubLocation`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const x500: SinglePubInfo_pubMethod = SinglePubInfo_pubMethod_x500; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_web
 * @description
 *
 * `web`(2): publish at the HTTP location in `pubLocation`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const SinglePubInfo_pubMethod_web: SinglePubInfo_pubMethod = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_web
 * @description
 *
 * `web`(2): publish at the HTTP location in `pubLocation`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const web: SinglePubInfo_pubMethod = SinglePubInfo_pubMethod_web; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_ldap
 * @description
 *
 * `ldap`(3): publish at the LDAP location in `pubLocation`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const SinglePubInfo_pubMethod_ldap: SinglePubInfo_pubMethod = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SinglePubInfo_pubMethod_ldap
 * @description
 *
 * `ldap`(3): publish at the LDAP location in `pubLocation`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const ldap: SinglePubInfo_pubMethod = SinglePubInfo_pubMethod_ldap; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_SinglePubInfo_pubMethod = $._decodeInteger;




export const _encode_SinglePubInfo_pubMethod = $._encodeInteger;


/* eslint-enable */
