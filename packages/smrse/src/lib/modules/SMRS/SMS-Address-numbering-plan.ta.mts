/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMS_Address_numbering_plan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-Address-numbering-plan ::= INTEGER {
 *     unknown-numbering (0),
 *     iSDN-numbering (1),
 *     data-network-numbering (3),
 *     telex-numbering (4),
 *     national-numbering (8),
 *     private-numbering (9)
 * }
 * ```
 *
 * Numbering plan of an `SMS-Address`. The names and numbers are those
 * of clauses 2.2 and 3.2. Clause 2.2 also names `ERMES-numbering` (10),
 * which this module does not. There is no value 2, 5, 6, or 7.
 */
export
type SMS_Address_numbering_plan = INTEGER;

/**
 * @summary SMS_Address_numbering_plan_unknown_numbering
 * @description
 *
 * Numbering plan is unknown (`unknown-numbering` in clause 3.2).
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_unknown_numbering: SMS_Address_numbering_plan = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `unknown_numbering`.
 * @description
 *
 * Numbering plan is unknown. Same value as
 * {@link SMS_Address_numbering_plan_unknown_numbering}.
 *
 * @constant
 * @type {number}
 */
export
const unknown_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_unknown_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_iSDN_numbering
 * @description
 *
 * ISDN / telephony numbering plan (E.164; clause 1.2 reference [5]).
 * Use this with `internat-number` where the report requires an
 * international ISDN address.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_iSDN_numbering: SMS_Address_numbering_plan = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `iSDN_numbering`.
 * @description
 *
 * ISDN / telephony numbering plan (E.164). Same value as
 * {@link SMS_Address_numbering_plan_iSDN_numbering}.
 *
 * @constant
 * @type {number}
 */
export
const iSDN_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_iSDN_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_data_network_numbering
 * @description
 *
 * Data-network numbering plan (`data-network-numbering` in clause 3.2).
 * The report does not say which numbering recommendation the digits
 * follow. The printed SMR-BIND parameters carry a PSPDN address as a
 * separate X.121 string (`dataNetworkAddress`); this module's
 * `SMR-Bind` does not.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_data_network_numbering: SMS_Address_numbering_plan = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `data_network_numbering`.
 * @description
 *
 * Data-network numbering plan. Same value as
 * {@link SMS_Address_numbering_plan_data_network_numbering}.
 *
 * @constant
 * @type {number}
 */
export
const data_network_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_data_network_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_telex_numbering
 * @description
 *
 * Telex numbering plan (`telex-numbering` in clause 3.2).
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_telex_numbering: SMS_Address_numbering_plan = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `telex_numbering`.
 * @description
 *
 * Telex numbering plan. Same value as
 * {@link SMS_Address_numbering_plan_telex_numbering}.
 *
 * @constant
 * @type {number}
 */
export
const telex_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_telex_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_national_numbering
 * @description
 *
 * National numbering plan (`national-numbering` in clause 3.2). This
 * is the plan, not the national nature of address (`national-number`).
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_national_numbering: SMS_Address_numbering_plan = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `national_numbering`.
 * @description
 *
 * National numbering plan. Same value as
 * {@link SMS_Address_numbering_plan_national_numbering}.
 *
 * @constant
 * @type {number}
 */
export
const national_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_national_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_private_numbering
 * @description
 *
 * Private numbering plan (`private-numbering` in clause 3.2).
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_private_numbering: SMS_Address_numbering_plan = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `private_numbering`.
 * @description
 *
 * Private numbering plan. Same value as
 * {@link SMS_Address_numbering_plan_private_numbering}.
 *
 * @constant
 * @type {number}
 */
export
const private_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_private_numbering; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SMS_Address_numbering_plan = $._decodeInteger;
export const _encode_SMS_Address_numbering_plan = $._encodeInteger;


/* eslint-enable */
