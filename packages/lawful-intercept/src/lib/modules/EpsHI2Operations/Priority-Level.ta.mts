/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Priority_Level {
    pre_emptive = 0,
    high_priority = 1,
    normal_priority = 2,
    listen_only = 3,
}

/**
 * @summary Priority_Level
 * @description
 * 
 * Talk-burst priority of a PTC client when more than one level is supported
 * (clause 17.1.5 and table 17.2.14, OMA-PoC-AD). Conditional on that
 * multi-level support. The same four levels are used for the session priority
 * and for the talk-burst priority.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority-Level             ::=  ENUMERATED
 * {
 *     pre-emptive            (0),
 *     high-priority        (1),
 *     normal-priority        (2),
 *     listen-only            (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Priority_Level = _enum_for_Priority_Level | ENUMERATED;

/**
 * @summary Priority_Level_pre_emptive
 * @description
 * 
 * Pre-emptive talk-burst priority. Used when more than one priority level is
 * supported (clause 17.1.5 and table 17.2.14, OMA-PoC-AD).
 * @constant
 * @type {number}
 */
export
const Priority_Level_pre_emptive: Priority_Level = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_emptive
 * @description
 * 
 * Pre-emptive talk-burst priority (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const pre_emptive: Priority_Level = Priority_Level_pre_emptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_Level_high_priority
 * @description
 * 
 * High talk-burst priority. Used when more than one priority level is supported
 * (clause 17.1.5, OMA-PoC-AD).
 * @constant
 * @type {number}
 */
export
const Priority_Level_high_priority: Priority_Level = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high_priority
 * @description
 * 
 * High talk-burst priority (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const high_priority: Priority_Level = Priority_Level_high_priority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_Level_normal_priority
 * @description
 * 
 * Normal talk-burst priority. Used when more than one priority level is
 * supported (clause 17.1.5, OMA-PoC-AD).
 * @constant
 * @type {number}
 */
export
const Priority_Level_normal_priority: Priority_Level = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal_priority
 * @description
 * 
 * Normal talk-burst priority (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const normal_priority: Priority_Level = Priority_Level_normal_priority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_Level_listen_only
 * @description
 * 
 * Listen-only talk-burst priority. Used when more than one priority level is
 * supported (clause 17.1.5, OMA-PoC-AD).
 * @constant
 * @type {number}
 */
export
const Priority_Level_listen_only: Priority_Level = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listen_only
 * @description
 * 
 * Listen-only talk-burst priority (clause 17.1.5).
 * @constant
 * @type {number}
 */
export
const listen_only: Priority_Level = Priority_Level_listen_only; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Priority_Level: $.ASN1Decoder<Priority_Level> = $._decodeEnumerated;
export const _encode_Priority_Level: $.ASN1Encoder<Priority_Level> = $._encodeEnumerated;


/* eslint-enable */
