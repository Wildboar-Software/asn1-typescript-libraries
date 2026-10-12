/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sensitivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sensitivity  ::=  BIT STRING {
 *     atomal (0),
 *     crypto (1),
 *     exclusive (2),
 *     intelligence (3),
 *     logistics (4),
 *     operations (5),
 *     us-siop (6),
 *     us-siop-esi (7)
 * }
 * ```
 */
export
type Sensitivity = BIT_STRING;

/**
 * @summary Sensitivity_atomal
 * @constant
 */
export
const Sensitivity_atomal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary atomal
 * @constant
 */
export
const atomal: number = Sensitivity_atomal; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_crypto
 * @constant
 */
export
const Sensitivity_crypto: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary crypto
 * @constant
 */
export
const crypto: number = Sensitivity_crypto; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_exclusive
 * @constant
 */
export
const Sensitivity_exclusive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary exclusive
 * @constant
 */
export
const exclusive: number = Sensitivity_exclusive; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_intelligence
 * @constant
 */
export
const Sensitivity_intelligence: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary intelligence
 * @constant
 */
export
const intelligence: number = Sensitivity_intelligence; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_logistics
 * @constant
 */
export
const Sensitivity_logistics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary logistics
 * @constant
 */
export
const logistics: number = Sensitivity_logistics; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_operations
 * @constant
 */
export
const Sensitivity_operations: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary operations
 * @constant
 */
export
const operations: number = Sensitivity_operations; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_us_siop
 * @constant
 */
export
const Sensitivity_us_siop: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary us_siop
 * @constant
 */
export
const us_siop: number = Sensitivity_us_siop; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_us_siop_esi
 * @constant
 */
export
const Sensitivity_us_siop_esi: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary us_siop_esi
 * @constant
 */
export
const us_siop_esi: number = Sensitivity_us_siop_esi; /* SHORT_NAMED_BIT */
export const _decode_Sensitivity: $.ASN1Decoder<Sensitivity> = $._decodeBitString;
export const _encode_Sensitivity: $.ASN1Encoder<Sensitivity> = $._encodeBitString;


/* eslint-enable */
