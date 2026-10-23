/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalChgInfo_chargeIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalChgInfo-chargeIndicator ::= INTEGER {
 *    noCharge    ( 0 ),
 *    charge      ( 1 )
 * }
 * ```
 */
export
type AdditionalChgInfo_chargeIndicator = INTEGER;

/**
 * @summary AdditionalChgInfo_chargeIndicator_noCharge
 * @constant
 * @type {number}
 */
export
const AdditionalChgInfo_chargeIndicator_noCharge: AdditionalChgInfo_chargeIndicator = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AdditionalChgInfo_chargeIndicator_noCharge
 * @constant
 * @type {number}
 */
export
const noCharge: AdditionalChgInfo_chargeIndicator = AdditionalChgInfo_chargeIndicator_noCharge; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AdditionalChgInfo_chargeIndicator_charge
 * @constant
 * @type {number}
 */
export
const AdditionalChgInfo_chargeIndicator_charge: AdditionalChgInfo_chargeIndicator = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AdditionalChgInfo_chargeIndicator_charge
 * @constant
 * @type {number}
 */
export
const charge: AdditionalChgInfo_chargeIndicator = AdditionalChgInfo_chargeIndicator_charge; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_AdditionalChgInfo_chargeIndicator: $.ASN1Decoder<AdditionalChgInfo_chargeIndicator> = $._decodeInteger;

export
const _encode_AdditionalChgInfo_chargeIndicator: $.ASN1Encoder<AdditionalChgInfo_chargeIndicator> = $._encodeInteger;

/* eslint-enable */
