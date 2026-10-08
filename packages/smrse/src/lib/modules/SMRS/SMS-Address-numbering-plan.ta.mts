/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMS_Address_numbering_plan
 * @description
 *
 * Numbering plan of an `SMS-Address`.
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2 assigns 0, 1, 3, 4, 8, and 9. Values 2, 5, 6, and 7
 * are unassigned. Clause 2 also assigns ERMES numbering (10); this
 * profile does not. The Nokia profile text restricts the integer
 * to 0..15. This module does not enforce that range.
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
 */
export
type SMS_Address_numbering_plan = INTEGER;

/**
 * @summary SMS_Address_numbering_plan_unknown_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_unknown_numbering: SMS_Address_numbering_plan = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_unknown_numbering
 * @constant
 * @type {number}
 */
export
const unknown_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_unknown_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_iSDN_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_iSDN_numbering: SMS_Address_numbering_plan = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_iSDN_numbering
 * @constant
 * @type {number}
 */
export
const iSDN_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_iSDN_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_data_network_numbering
 * @description
 *
 * Data-network numbering plan (clause 3.2). Value 2 is not
 * assigned.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_data_network_numbering: SMS_Address_numbering_plan = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_data_network_numbering
 * @description
 *
 * Data-network numbering plan (clause 3.2). Value 2 is not
 * assigned.
 *
 * @constant
 * @type {number}
 */
export
const data_network_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_data_network_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_telex_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_telex_numbering: SMS_Address_numbering_plan = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_telex_numbering
 * @constant
 * @type {number}
 */
export
const telex_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_telex_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_national_numbering
 * @description
 *
 * National numbering plan (clause 3.2). Values 5, 6, and 7 are not
 * assigned.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_national_numbering: SMS_Address_numbering_plan = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_national_numbering
 * @description
 *
 * National numbering plan (clause 3.2). Values 5, 6, and 7 are not
 * assigned.
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
 * Private numbering plan. Last plan defined in clause 3.2. Clause
 * 2's ERMES numbering (10) is not in this profile.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_private_numbering: SMS_Address_numbering_plan = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_private_numbering
 * @description
 *
 * Private numbering plan. Last plan defined in clause 3.2. Clause
 * 2's ERMES numbering (10) is not in this profile.
 *
 * @constant
 * @type {number}
 */
export
const private_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_private_numbering; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SMS_Address_numbering_plan = $._decodeInteger;
export const _encode_SMS_Address_numbering_plan = $._encodeInteger;


/* eslint-enable */
