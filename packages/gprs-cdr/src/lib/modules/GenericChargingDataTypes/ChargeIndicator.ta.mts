/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeIndicator  ::=  INTEGER {
 *    noCharge    ( 0 ),
 *    charge      ( 1 )}
 * ```
 */
export
type ChargeIndicator = INTEGER;

/**
 * @summary ChargeIndicator_noCharge
 * @constant
 * @type {number}
 */
export
const ChargeIndicator_noCharge = 0 satisfies ChargeIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ChargeIndicator_noCharge
 * @constant
 * @type {number}
 */
export
const noCharge = ChargeIndicator_noCharge; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ChargeIndicator_charge
 * @constant
 * @type {number}
 */
export
const ChargeIndicator_charge = 1 satisfies ChargeIndicator; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ChargeIndicator_charge
 * @constant
 * @type {number}
 */
export
const charge = ChargeIndicator_charge; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ChargeIndicator: $.ASN1Decoder<ChargeIndicator> = $._decodeInteger;

export
const _encode_ChargeIndicator: $.ASN1Encoder<ChargeIndicator> = $._encodeInteger;

/* eslint-enable */
