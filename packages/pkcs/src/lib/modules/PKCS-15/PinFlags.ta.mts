/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PinFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PinFlags  ::=  BIT STRING {
 *     case-sensitive (0),
 *     local (1),
 *     change-disabled (2),
 *     unblock-disabled (3),
 *     initialized  (4),
 *     needs-padding (5),
 *     unblockingPin (6),
 *     soPin (7),
 *     disable-allowed (8),
 *     integrity-protected (9),
 *     confidentiality-protected (10),
 *     exchangeRefData (11)
 * } (CONSTRAINED BY { -- 'unblockingPin' and 'soPIN' cannot both be set -- })
 * ```
 */
export type PinFlags = BIT_STRING;


/**
 * @summary PinFlags_case_sensitive
 * @constant
 */
export const PinFlags_case_sensitive: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary case_sensitive
 * @constant
 */
export const case_sensitive: number = PinFlags_case_sensitive; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_local
 * @constant
 */
export const PinFlags_local: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary local
 * @constant
 */
export const local: number = PinFlags_local; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_change_disabled
 * @constant
 */
export const PinFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary change_disabled
 * @constant
 */
export const change_disabled: number = PinFlags_change_disabled; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_unblock_disabled
 * @constant
 */
export const PinFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary unblock_disabled
 * @constant
 */
export const unblock_disabled: number = PinFlags_unblock_disabled; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_initialized
 * @constant
 */
export const PinFlags_initialized: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary initialized
 * @constant
 */
export const initialized: number = PinFlags_initialized; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_needs_padding
 * @constant
 */
export const PinFlags_needs_padding: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary needs_padding
 * @constant
 */
export const needs_padding: number = PinFlags_needs_padding; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_unblockingPin
 * @constant
 */
export const PinFlags_unblockingPin: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary unblockingPin
 * @constant
 */
export const unblockingPin: number = PinFlags_unblockingPin; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_soPin
 * @constant
 */
export const PinFlags_soPin: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary soPin
 * @constant
 */
export const soPin: number = PinFlags_soPin; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_disable_allowed
 * @constant
 */
export const PinFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary disable_allowed
 * @constant
 */
export const disable_allowed: number = PinFlags_disable_allowed; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_integrity_protected
 * @constant
 */
export const PinFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary integrity_protected
 * @constant
 */
export const integrity_protected: number = PinFlags_integrity_protected; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_confidentiality_protected
 * @constant
 */
export const PinFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary confidentiality_protected
 * @constant
 */
export const confidentiality_protected: number = PinFlags_confidentiality_protected; /* SHORT_NAMED_BIT */


/**
 * @summary PinFlags_exchangeRefData
 * @constant
 */
export const PinFlags_exchangeRefData: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary exchangeRefData
 * @constant
 */
export const exchangeRefData: number = PinFlags_exchangeRefData; /* SHORT_NAMED_BIT */




export const _decode_PinFlags = $._decodeBitString;




export const _encode_PinFlags = $._encodeBitString;


/* eslint-enable */
