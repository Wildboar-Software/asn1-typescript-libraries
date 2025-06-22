/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CertificationRequestInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationRequestInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertificationRequestInfo_version = INTEGER;


/**
 * @summary CertificationRequestInfo_version_v1
 * @constant
 * @type {number}
 */
export const CertificationRequestInfo_version_v1: CertificationRequestInfo_version = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary CertificationRequestInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: CertificationRequestInfo_version = CertificationRequestInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_CertificationRequestInfo_version = $._decodeInteger;




export const _encode_CertificationRequestInfo_version = $._encodeInteger;


/* eslint-enable */
