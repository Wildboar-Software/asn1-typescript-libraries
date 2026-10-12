/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiscretionaryHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiscretionaryHandling  ::=  BIT STRING {
 *     cosmic (0),
 *     management (1),
 *     staff (2),
 *     personal (3),
 *     medical (4),
 *     commercial (5),
 *     releasable-to-internet (6)
 * }
 * ```
 */
export
type DiscretionaryHandling = BIT_STRING;

/**
 * @summary DiscretionaryHandling_cosmic
 * @constant
 */
export
const DiscretionaryHandling_cosmic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cosmic
 * @constant
 */
export
const cosmic: number = DiscretionaryHandling_cosmic; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_management
 * @constant
 */
export
const DiscretionaryHandling_management: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary management
 * @constant
 */
export
const management: number = DiscretionaryHandling_management; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_staff
 * @constant
 */
export
const DiscretionaryHandling_staff: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary staff
 * @constant
 */
export
const staff: number = DiscretionaryHandling_staff; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_personal
 * @constant
 */
export
const DiscretionaryHandling_personal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary personal
 * @constant
 */
export
const personal: number = DiscretionaryHandling_personal; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_medical
 * @constant
 */
export
const DiscretionaryHandling_medical: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary medical
 * @constant
 */
export
const medical: number = DiscretionaryHandling_medical; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_commercial
 * @constant
 */
export
const DiscretionaryHandling_commercial: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary commercial
 * @constant
 */
export
const commercial: number = DiscretionaryHandling_commercial; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_releasable_to_internet
 * @constant
 */
export
const DiscretionaryHandling_releasable_to_internet: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary releasable_to_internet
 * @constant
 */
export
const releasable_to_internet: number = DiscretionaryHandling_releasable_to_internet; /* SHORT_NAMED_BIT */
export const _decode_DiscretionaryHandling: $.ASN1Decoder<DiscretionaryHandling> = $._decodeBitString;
export const _encode_DiscretionaryHandling: $.ASN1Encoder<DiscretionaryHandling> = $._encodeBitString;


/* eslint-enable */
