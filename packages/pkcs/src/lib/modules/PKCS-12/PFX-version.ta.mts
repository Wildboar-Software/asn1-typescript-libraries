/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PFX_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PFX-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PFX_version = INTEGER;


/**
 * @summary PFX_version_v3
 * @constant
 * @type {number}
 */
export const PFX_version_v3: PFX_version = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PFX_version_v3
 * @constant
 * @type {number}
 */
export const v3: PFX_version = PFX_version_v3; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PFX_version = $._decodeInteger;




export const _encode_PFX_version = $._encodeInteger;


/* eslint-enable */
