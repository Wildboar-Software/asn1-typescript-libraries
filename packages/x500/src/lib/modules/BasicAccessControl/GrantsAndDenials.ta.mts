/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GrantsAndDenials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GrantsAndDenials  ::=  BIT STRING {
 *   -- permissions that may be used in conjunction
 *   -- with any component of ProtectedItems
 *   grantAdd             (0),
 *   denyAdd              (1),
 *   grantDiscloseOnError (2),
 *   denyDiscloseOnError  (3),
 *   grantRead            (4),
 *   denyRead             (5),
 *   grantRemove          (6),
 *   denyRemove           (7),
 *   -- permissions that may be used only in conjunction
 *   -- with the entry component
 *   grantBrowse          (8),
 *   denyBrowse           (9),
 *   grantExport          (10),
 *   denyExport           (11),
 *   grantImport          (12),
 *   denyImport           (13),
 *   grantModify          (14),
 *   denyModify           (15),
 *   grantRename          (16),
 *   denyRename           (17),
 *   grantReturnDN        (18),
 *   denyReturnDN         (19),
 *   -- permissions that may be used in conjunction
 *   -- with any component, except entry, of ProtectedItems
 *   grantCompare         (20),
 *   denyCompare          (21),
 *   grantFilterMatch     (22),
 *   denyFilterMatch      (23),
 *   grantInvoke          (24),
 *   denyInvoke           (25) }
 * ```
 */
export type GrantsAndDenials = BIT_STRING;

/**
 * @summary GrantsAndDenials_grantAdd
 * @constant
 */
export const GrantsAndDenials_grantAdd: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary grantAdd
 * @constant
 */
export const grantAdd: number = GrantsAndDenials_grantAdd; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyAdd
 * @constant
 */
export const GrantsAndDenials_denyAdd: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary denyAdd
 * @constant
 */
export const denyAdd: number = GrantsAndDenials_denyAdd; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantDiscloseOnError
 * @constant
 */
export const GrantsAndDenials_grantDiscloseOnError: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary grantDiscloseOnError
 * @constant
 */
export const grantDiscloseOnError: number = GrantsAndDenials_grantDiscloseOnError; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyDiscloseOnError
 * @constant
 */
export const GrantsAndDenials_denyDiscloseOnError: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary denyDiscloseOnError
 * @constant
 */
export const denyDiscloseOnError: number = GrantsAndDenials_denyDiscloseOnError; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantRead
 * @constant
 */
export const GrantsAndDenials_grantRead: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary grantRead
 * @constant
 */
export const grantRead: number = GrantsAndDenials_grantRead; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyRead
 * @constant
 */
export const GrantsAndDenials_denyRead: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary denyRead
 * @constant
 */
export const denyRead: number = GrantsAndDenials_denyRead; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantRemove
 * @constant
 */
export const GrantsAndDenials_grantRemove: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary grantRemove
 * @constant
 */
export const grantRemove: number = GrantsAndDenials_grantRemove; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyRemove
 * @constant
 */
export const GrantsAndDenials_denyRemove: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary denyRemove
 * @constant
 */
export const denyRemove: number = GrantsAndDenials_denyRemove; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantBrowse
 * @constant
 */
export const GrantsAndDenials_grantBrowse: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary grantBrowse
 * @constant
 */
export const grantBrowse: number = GrantsAndDenials_grantBrowse; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyBrowse
 * @constant
 */
export const GrantsAndDenials_denyBrowse: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary denyBrowse
 * @constant
 */
export const denyBrowse: number = GrantsAndDenials_denyBrowse; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantExport
 * @constant
 */
export const GrantsAndDenials_grantExport: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary grantExport
 * @constant
 */
export const grantExport: number = GrantsAndDenials_grantExport; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyExport
 * @constant
 */
export const GrantsAndDenials_denyExport: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary denyExport
 * @constant
 */
export const denyExport: number = GrantsAndDenials_denyExport; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantImport
 * @constant
 */
export const GrantsAndDenials_grantImport: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary grantImport
 * @constant
 */
export const grantImport: number = GrantsAndDenials_grantImport; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyImport
 * @constant
 */
export const GrantsAndDenials_denyImport: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary denyImport
 * @constant
 */
export const denyImport: number = GrantsAndDenials_denyImport; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantModify
 * @constant
 */
export const GrantsAndDenials_grantModify: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary grantModify
 * @constant
 */
export const grantModify: number = GrantsAndDenials_grantModify; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyModify
 * @constant
 */
export const GrantsAndDenials_denyModify: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary denyModify
 * @constant
 */
export const denyModify: number = GrantsAndDenials_denyModify; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantRename
 * @constant
 */
export const GrantsAndDenials_grantRename: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary grantRename
 * @constant
 */
export const grantRename: number = GrantsAndDenials_grantRename; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyRename
 * @constant
 */
export const GrantsAndDenials_denyRename: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary denyRename
 * @constant
 */
export const denyRename: number = GrantsAndDenials_denyRename; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantReturnDN
 * @constant
 */
export const GrantsAndDenials_grantReturnDN: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary grantReturnDN
 * @constant
 */
export const grantReturnDN: number = GrantsAndDenials_grantReturnDN; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyReturnDN
 * @constant
 */
export const GrantsAndDenials_denyReturnDN: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary denyReturnDN
 * @constant
 */
export const denyReturnDN: number = GrantsAndDenials_denyReturnDN; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantCompare
 * @constant
 */
export const GrantsAndDenials_grantCompare: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary grantCompare
 * @constant
 */
export const grantCompare: number = GrantsAndDenials_grantCompare; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyCompare
 * @constant
 */
export const GrantsAndDenials_denyCompare: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary denyCompare
 * @constant
 */
export const denyCompare: number = GrantsAndDenials_denyCompare; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantFilterMatch
 * @constant
 */
export const GrantsAndDenials_grantFilterMatch: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary grantFilterMatch
 * @constant
 */
export const grantFilterMatch: number = GrantsAndDenials_grantFilterMatch; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyFilterMatch
 * @constant
 */
export const GrantsAndDenials_denyFilterMatch: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary denyFilterMatch
 * @constant
 */
export const denyFilterMatch: number = GrantsAndDenials_denyFilterMatch; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_grantInvoke
 * @constant
 */
export const GrantsAndDenials_grantInvoke: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary grantInvoke
 * @constant
 */
export const grantInvoke: number = GrantsAndDenials_grantInvoke; /* SHORT_NAMED_BIT */

/**
 * @summary GrantsAndDenials_denyInvoke
 * @constant
 */
export const GrantsAndDenials_denyInvoke: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary denyInvoke
 * @constant
 */
export const denyInvoke: number = GrantsAndDenials_denyInvoke; /* SHORT_NAMED_BIT */


export const _decode_GrantsAndDenials = $._decodeBitString;


export const _encode_GrantsAndDenials = $._encodeBitString;


/* eslint-enable */
