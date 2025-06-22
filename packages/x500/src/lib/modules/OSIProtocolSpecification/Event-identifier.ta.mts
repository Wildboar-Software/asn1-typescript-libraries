/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Event_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Event-identifier  ::=  INTEGER {
 *   cp-PPDU              (0),
 *   cpa-PPDU             (1),
 *   cpr-PPDU             (2),
 *   aru-PPDU             (3),
 *   arp-PPDU             (4),
 *   td-PPDU              (7),
 *   s-release-indication (14),
 *   s-release-confirm    (15) }
 * ```
 */
export type Event_identifier = INTEGER;

/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cp_PPDU: Event_identifier = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const cp_PPDU: Event_identifier = Event_identifier_cp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpa_PPDU: Event_identifier = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const cpa_PPDU: Event_identifier = Event_identifier_cpa_PPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpr_PPDU: Event_identifier = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const cpr_PPDU: Event_identifier = Event_identifier_cpr_PPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aru_PPDU: Event_identifier = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const aru_PPDU: Event_identifier = Event_identifier_aru_PPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_arp_PPDU: Event_identifier = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const arp_PPDU: Event_identifier = Event_identifier_arp_PPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_td_PPDU: Event_identifier = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const td_PPDU: Event_identifier = Event_identifier_td_PPDU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_indication: Event_identifier = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const s_release_indication: Event_identifier = Event_identifier_s_release_indication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_confirm: Event_identifier = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const s_release_confirm: Event_identifier = Event_identifier_s_release_confirm; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Event_identifier = $._decodeInteger;


export const _encode_Event_identifier = $._encodeInteger;


/* eslint-enable */
