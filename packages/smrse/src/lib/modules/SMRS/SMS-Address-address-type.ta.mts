/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMS_Address_address_type
 * @description
 *
 * Kind of number in an `SMS-Address`.
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2 names value 1 `international-number` and value 3
 * `network-specific-number`. The list ends at short number (4).
 * Clause 2 also assigns alphanumeric (5) and abbreviated (6); this
 * profile does not. The Nokia profile text restricts the integer
 * to 0..15. This module does not enforce that range.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-Address-address-type ::= INTEGER {
 *     unknown-type (0),
 *     internat-number (1),
 *     national-number (2),
 *     net-spec-number (3),
 *     short-number (4)
 * }
 * ```
 */
export
type SMS_Address_address_type = INTEGER;

/**
 * @summary SMS_Address_address_type_unknown_type
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_unknown_type: SMS_Address_address_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_unknown_type
 * @constant
 * @type {number}
 */
export
const unknown_type: SMS_Address_address_type = SMS_Address_address_type_unknown_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_internat_number
 * @description
 *
 * International number. Clause 3.2 names this
 * `international-number`.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_internat_number: SMS_Address_address_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_internat_number
 * @description
 *
 * International number. Clause 3.2 names this
 * `international-number`.
 *
 * @constant
 * @type {number}
 */
export
const internat_number: SMS_Address_address_type = SMS_Address_address_type_internat_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_national_number
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_national_number: SMS_Address_address_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_national_number
 * @constant
 * @type {number}
 */
export
const national_number: SMS_Address_address_type = SMS_Address_address_type_national_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_net_spec_number
 * @description
 *
 * Network-specific number. Clause 3.2 names this
 * `network-specific-number`.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_net_spec_number: SMS_Address_address_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_net_spec_number
 * @description
 *
 * Network-specific number. Clause 3.2 names this
 * `network-specific-number`.
 *
 * @constant
 * @type {number}
 */
export
const net_spec_number: SMS_Address_address_type = SMS_Address_address_type_net_spec_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_short_number
 * @description
 *
 * Short number. Last address type defined in clause 3.2. Clause 2's
 * alphanumeric (5) and abbreviated (6) types are not in this
 * profile.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_short_number: SMS_Address_address_type = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_short_number
 * @description
 *
 * Short number. Last address type defined in clause 3.2. Clause 2's
 * alphanumeric (5) and abbreviated (6) types are not in this
 * profile.
 *
 * @constant
 * @type {number}
 */
export
const short_number: SMS_Address_address_type = SMS_Address_address_type_short_number; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SMS_Address_address_type = $._decodeInteger;
export const _encode_SMS_Address_address_type = $._encodeInteger;


/* eslint-enable */
