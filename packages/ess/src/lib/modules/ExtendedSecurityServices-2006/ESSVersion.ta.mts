/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ESSVersion
 * @description
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
export const ESSVersion_v1: ESSVersion = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary ESSVersion_v1
 * @constant
 * @type {number}
 */
export const v1: ESSVersion = ESSVersion_v1; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_ESSVersion = $._decodeInteger;




export const _encode_ESSVersion = $._encodeInteger;


/* eslint-enable */
