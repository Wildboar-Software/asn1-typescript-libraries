/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * SMS-Address-address-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_internat_number: SMS_Address_address_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_internat_number
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
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_net_spec_number: SMS_Address_address_type = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_net_spec_number
 * @constant
 * @type {number}
 */
export
const net_spec_number: SMS_Address_address_type = SMS_Address_address_type_net_spec_number; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_short_number
 * @constant
 * @type {number}
 */
export
const SMS_Address_address_type_short_number: SMS_Address_address_type = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMS_Address_address_type_short_number
 * @constant
 * @type {number}
 */
export
const short_number: SMS_Address_address_type = SMS_Address_address_type_short_number; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SMS_Address_address_type = $._decodeInteger;
export const _encode_SMS_Address_address_type = $._encodeInteger;


/* eslint-enable */
