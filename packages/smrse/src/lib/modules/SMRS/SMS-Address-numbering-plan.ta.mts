/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_data_network_numbering: SMS_Address_numbering_plan = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_data_network_numbering
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
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_national_numbering: SMS_Address_numbering_plan = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_national_numbering
 * @constant
 * @type {number}
 */
export
const national_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_national_numbering; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_private_numbering
 * @constant
 * @type {number}
 */
export
const SMS_Address_numbering_plan_private_numbering: SMS_Address_numbering_plan = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_numbering_plan_private_numbering
 * @constant
 * @type {number}
 */
export
const private_numbering: SMS_Address_numbering_plan = SMS_Address_numbering_plan_private_numbering; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SMS_Address_numbering_plan = $._decodeInteger;
export const _encode_SMS_Address_numbering_plan = $._encodeInteger;


/* eslint-enable */
