/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiscretionaryHandling
 * @description
 * 
 * Bit names for the NATO informative discretionary-handling category, selected
 * by `id-discretionary-handling` as the tag name. The values are those of
 * AC/322-D(2003)029, Table 5, as cited by Annex H. Edition 2 does not define
 * the individual names. STANAG 4406 (Ed. 2), Annex H.3.4 and H.4.
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
 * @description
 *
 * Bit 0 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_cosmic: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cosmic
 * @description
 *
 * Bit 0 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const cosmic: number = DiscretionaryHandling_cosmic; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_management
 * @description
 *
 * Bit 1 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_management: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary management
 * @description
 *
 * Bit 1 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const management: number = DiscretionaryHandling_management; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_staff
 * @description
 *
 * Bit 2 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_staff: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary staff
 * @description
 *
 * Bit 2 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const staff: number = DiscretionaryHandling_staff; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_personal
 * @description
 *
 * Bit 3 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_personal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary personal
 * @description
 *
 * Bit 3 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const personal: number = DiscretionaryHandling_personal; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_medical
 * @description
 *
 * Bit 4 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_medical: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary medical
 * @description
 *
 * Bit 4 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const medical: number = DiscretionaryHandling_medical; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_commercial
 * @description
 *
 * Bit 5 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_commercial: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary commercial
 * @description
 *
 * Bit 5 of the NATO informative discretionary-handling category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const commercial: number = DiscretionaryHandling_commercial; /* SHORT_NAMED_BIT */

/**
 * @summary DiscretionaryHandling_releasable_to_internet
 * @description
 *
 * Bit 6 (`releasable-to-internet`) of the NATO informative
 * discretionary-handling category. Annex H lists the name and does not define
 * it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const DiscretionaryHandling_releasable_to_internet: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary releasable_to_internet
 * @description
 *
 * Bit 6 (`releasable-to-internet`) of the NATO informative
 * discretionary-handling category. Annex H lists the name and does not define
 * it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const releasable_to_internet: number = DiscretionaryHandling_releasable_to_internet; /* SHORT_NAMED_BIT */
export const _decode_DiscretionaryHandling: $.ASN1Decoder<DiscretionaryHandling> = $._decodeBitString;
export const _encode_DiscretionaryHandling: $.ASN1Encoder<DiscretionaryHandling> = $._encodeBitString;


/* eslint-enable */
