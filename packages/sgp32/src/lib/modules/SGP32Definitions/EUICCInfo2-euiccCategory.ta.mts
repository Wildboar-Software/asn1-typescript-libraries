/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUICCInfo2_euiccCategory
 * @description
 *
 * Optional eUICC category inside EUICCInfo2. SGP.32 v1.2 includes the values
 * in the ASN.1 of section 5.9.2 and does not further define them.
 *
 * SGP.32 v1.2, section 5.9.2 and Annex C.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2-euiccCategory ::= INTEGER {
 *     other(0),
 *     basicEuicc(1),
 *     mediumEuicc(2),
 *     contactlessEuicc(3)
 * }
 * ```
 */
export
type EUICCInfo2_euiccCategory = INTEGER;

/**
 * @summary EUICCInfo2_euiccCategory_other
 * @description
 *
 * SGP.32 v1.2 does not further define this code. Annex C.
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_other = 0 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_other
 * @description
 *
 * SGP.32 v1.2 does not further define this euiccCategory value (Annex C).
 * @constant
 * @type {number}
 */
export
const other = EUICCInfo2_euiccCategory_other satisfies EUICCInfo2_euiccCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_basicEuicc
 * @description
 *
 * SGP.32 v1.2 does not further define this code. Annex C.
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_basicEuicc = 1 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_basicEuicc
 * @description
 *
 * SGP.32 v1.2 does not further define this euiccCategory value (Annex C).
 * @constant
 * @type {number}
 */
export
const basicEuicc = EUICCInfo2_euiccCategory_basicEuicc satisfies EUICCInfo2_euiccCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_mediumEuicc
 * @description
 *
 * SGP.32 v1.2 does not further define this code. Annex C.
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_mediumEuicc = 2 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_mediumEuicc
 * @description
 *
 * SGP.32 v1.2 does not further define this euiccCategory value (Annex C).
 * @constant
 * @type {number}
 */
export
const mediumEuicc = EUICCInfo2_euiccCategory_mediumEuicc satisfies EUICCInfo2_euiccCategory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_contactlessEuicc
 * @description
 *
 * SGP.32 v1.2 does not further define this code. Annex C.
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_contactlessEuicc = 3 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_contactlessEuicc
 * @description
 *
 * SGP.32 v1.2 does not further define this euiccCategory value (Annex C).
 * @constant
 * @type {number}
 */
export
const contactlessEuicc = EUICCInfo2_euiccCategory_contactlessEuicc satisfies EUICCInfo2_euiccCategory; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EUICCInfo2_euiccCategory: $.ASN1Decoder<EUICCInfo2_euiccCategory> = $._decodeInteger;
export const _encode_EUICCInfo2_euiccCategory: $.ASN1Encoder<EUICCInfo2_euiccCategory> = $._encodeInteger;


/* eslint-enable */
