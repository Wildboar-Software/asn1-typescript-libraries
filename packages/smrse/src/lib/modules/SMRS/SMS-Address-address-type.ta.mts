/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMS_Address_address_type
 * @description
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
 *
 * Nature of an `SMS-Address`. Values match clause 3.2, whose names for
 * 1 and 3 are `international-number` and `network-specific-number`.
 * Clause 2.2 adds `alphanumeric-number` (5) and `abbreviated-number`
 * (6), which this module does not.
 */
export
type SMS_Address_address_type = INTEGER;

/**
 * @summary SMS_Address_address_type_unknown_type
 * @description
 *
 * Nature of the address is unknown (`unknown-type` in clause 3.2).
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_unknown_type: SMS_Address_address_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `unknown_type`.
 * @description
 *
 * Nature of the address is unknown. Same value as
 * {@link SMS_Address_address_type_unknown_type}.
 *
 * @constant
 * @type {number}
 */
export
const unknown_type: SMS_Address_address_type = SMS_Address_address_type_unknown_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_internat_number
 * @description
 *
 * International number. Clause 3.2 names this `international-number`.
 * Required where the report demands an international ISDN address,
 * together with `iSDN-numbering`.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_internat_number: SMS_Address_address_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `internat_number`.
 * @description
 *
 * International number. Same value as
 * {@link SMS_Address_address_type_internat_number}.
 *
 * @constant
 * @type {number}
 */
export
const internat_number: SMS_Address_address_type = SMS_Address_address_type_internat_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_national_number
 * @description
 *
 * National significant number (`national-number` in clause 3.2).
 * SMS-MAP accepts an MS ISDN number in this form or as an international
 * number (clause 4.2.4). It does not accept a service-centre address
 * in this form.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_national_number: SMS_Address_address_type = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `national_number`.
 * @description
 *
 * National significant number. Same value as
 * {@link SMS_Address_address_type_national_number}.
 *
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
 * @summary `net_spec_number`.
 * @description
 *
 * Network-specific number. Same value as
 * {@link SMS_Address_address_type_net_spec_number}.
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
 * Short number (`short-number` in clause 3.2). The report does not
 * define a length or a numbering plan to pair with it.
 *
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_short_number: SMS_Address_address_type = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary `short_number`.
 * @description
 *
 * Short number. Same value as
 * {@link SMS_Address_address_type_short_number}.
 *
 * @constant
 * @type {number}
 */
export
const short_number: SMS_Address_address_type = SMS_Address_address_type_short_number; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SMS_Address_address_type = $._decodeInteger;
export const _encode_SMS_Address_address_type = $._encodeInteger;


/* eslint-enable */
