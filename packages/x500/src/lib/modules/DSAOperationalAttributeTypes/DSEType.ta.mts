/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary DSEType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSEType  ::=  BIT STRING {
 *   root           (0),  -- root DSE
 *   glue           (1),  -- represents knowledge of a name only
 *   cp             (2),  -- context prefix
 *   entry          (3),  -- object entry
 *   alias          (4),  -- alias entry
 *   subr           (5),  -- subordinate reference
 *   nssr           (6),  -- non-specific subordinate reference
 *   supr           (7),  -- superior reference
 *   xr             (8),  -- cross reference
 *   admPoint       (9),  -- administrative point
 *   subentry       (10), -- subentry
 *   shadow         (11), -- shadow copy
 *   immSupr        (13), -- immediate superior reference
 *   rhob           (14), -- rhob information
 *   sa             (15), -- subordinate reference to alias entry
 *   dsSubentry     (16), -- DSA Specific subentry
 *   familyMember   (17), -- family member
 *   ditBridge      (18)}
 * ```
 */
export type DSEType = BIT_STRING;

/**
 * @summary DSEType_root
 * @constant
 */
export const DSEType_root: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary root
 * @constant
 */
export const root: number = DSEType_root; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_glue
 * @constant
 */
export const DSEType_glue: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary glue
 * @constant
 */
export const glue: number = DSEType_glue; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_cp
 * @constant
 */
export const DSEType_cp: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cp
 * @constant
 */
export const cp: number = DSEType_cp; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_entry
 * @constant
 */
export const DSEType_entry: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary entry
 * @constant
 */
export const entry: number = DSEType_entry; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_alias
 * @constant
 */
export const DSEType_alias: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary alias
 * @constant
 */
export const alias: number = DSEType_alias; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_subr
 * @constant
 */
export const DSEType_subr: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary subr
 * @constant
 */
export const subr: number = DSEType_subr; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_nssr
 * @constant
 */
export const DSEType_nssr: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary nssr
 * @constant
 */
export const nssr: number = DSEType_nssr; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_supr
 * @constant
 */
export const DSEType_supr: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary supr
 * @constant
 */
export const supr: number = DSEType_supr; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_xr
 * @constant
 */
export const DSEType_xr: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary xr
 * @constant
 */
export const xr: number = DSEType_xr; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_admPoint
 * @constant
 */
export const DSEType_admPoint: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary admPoint
 * @constant
 */
export const admPoint: number = DSEType_admPoint; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_subentry
 * @constant
 */
export const DSEType_subentry: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary subentry
 * @constant
 */
export const subentry: number = DSEType_subentry; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_shadow
 * @constant
 */
export const DSEType_shadow: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary shadow
 * @constant
 */
export const shadow: number = DSEType_shadow; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_immSupr
 * @constant
 */
export const DSEType_immSupr: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary immSupr
 * @constant
 */
export const immSupr: number = DSEType_immSupr; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_rhob
 * @constant
 */
export const DSEType_rhob: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary rhob
 * @constant
 */
export const rhob: number = DSEType_rhob; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_sa
 * @constant
 */
export const DSEType_sa: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary sa
 * @constant
 */
export const sa: number = DSEType_sa; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_dsSubentry
 * @constant
 */
export const DSEType_dsSubentry: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary dsSubentry
 * @constant
 */
export const dsSubentry: number = DSEType_dsSubentry; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_familyMember
 * @constant
 */
export const DSEType_familyMember: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary familyMember
 * @constant
 */
export const familyMember: number = DSEType_familyMember; /* SHORT_NAMED_BIT */

/**
 * @summary DSEType_ditBridge
 * @constant
 */
export const DSEType_ditBridge: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary ditBridge
 * @constant
 */
export const ditBridge: number = DSEType_ditBridge; /* SHORT_NAMED_BIT */


export const _decode_DSEType = $._decodeBitString;


export const _encode_DSEType = $._encodeBitString;


/* eslint-enable */
