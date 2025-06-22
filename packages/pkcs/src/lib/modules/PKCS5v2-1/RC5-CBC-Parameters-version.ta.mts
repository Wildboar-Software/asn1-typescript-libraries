/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RC5_CBC_Parameters_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RC5-CBC-Parameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RC5_CBC_Parameters_version = INTEGER;


/**
 * @summary RC5_CBC_Parameters_version_v1_0
 * @constant
 * @type {number}
 */
export const RC5_CBC_Parameters_version_v1_0: RC5_CBC_Parameters_version = 16; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary RC5_CBC_Parameters_version_v1_0
 * @constant
 * @type {number}
 */
export const v1_0: RC5_CBC_Parameters_version = RC5_CBC_Parameters_version_v1_0; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_RC5_CBC_Parameters_version = $._decodeInteger;




export const _encode_RC5_CBC_Parameters_version = $._encodeInteger;


/* eslint-enable */
