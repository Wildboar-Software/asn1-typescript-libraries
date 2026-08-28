/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary VersionInformationData
 * @description
 *
 * ASN.1 syntax version of the SPIF specification and associated
 * semantics. `v1` (0) is the only named version; DEFAULT on
 * `SPIF`. ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.1](https://www.itu.int/rec/T-REC-X.841-200010-I).
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
 * @description The only named SPIF syntax version (0). DEFAULT on `SPIF`.
 * @constant
 * @type {number}
 */
export const VersionInformationData_v1: VersionInformationData = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary VersionInformationData_v1
 * @description The only named SPIF syntax version (0). DEFAULT on `SPIF`.
 * @constant
 * @type {number}
 */
export const v1: VersionInformationData = VersionInformationData_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_VersionInformationData = $._decodeInteger;




export const _encode_VersionInformationData = $._encodeInteger;


/* eslint-enable */
