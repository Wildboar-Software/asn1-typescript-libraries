/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary VersionInformationData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VersionInformationData  ::=  INTEGER {v1(0)}(0..MAX)
 * ```
 */
export type VersionInformationData = INTEGER;


/**
 * @summary VersionInformationData_v1
 * @constant
 * @type {number}
 */
export const VersionInformationData_v1: VersionInformationData = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary VersionInformationData_v1
 * @constant
 * @type {number}
 */
export const v1: VersionInformationData = VersionInformationData_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_VersionInformationData = $._decodeInteger;




export const _encode_VersionInformationData = $._encodeInteger;


/* eslint-enable */
