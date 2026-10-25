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
 * Deprecated eUICC category. SGP.22 v3.1 Annex H still lists other, basic,
 * medium, and contactless, and marks the field deprecated.
 * Eligibility uses the other fields of `EUICCInfo2`.
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
 * Category other than basic, medium, or contactless. Deprecated in SGP.22 v3.1
 * Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_other = 0 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_other
 * @description
 * 
 * Category other than basic, medium, or contactless. Deprecated in SGP.22 v3.1
 * Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const other = EUICCInfo2_euiccCategory_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_basicEuicc
 * @description
 * 
 * Basic eUICC. Deprecated in SGP.22 v3.1 Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_basicEuicc = 1 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_basicEuicc
 * @description
 * 
 * Basic eUICC. Deprecated in SGP.22 v3.1 Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const basicEuicc = EUICCInfo2_euiccCategory_basicEuicc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_mediumEuicc
 * @description
 * 
 * Medium eUICC. Deprecated in SGP.22 v3.1 Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_mediumEuicc = 2 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_mediumEuicc
 * @description
 * 
 * Medium eUICC. Deprecated in SGP.22 v3.1 Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const mediumEuicc = EUICCInfo2_euiccCategory_mediumEuicc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_contactlessEuicc
 * @description
 * 
 * Contactless eUICC. Deprecated in SGP.22 v3.1 Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_contactlessEuicc = 3 satisfies EUICCInfo2_euiccCategory; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_contactlessEuicc
 * @description
 * 
 * Contactless eUICC. Deprecated in SGP.22 v3.1 Annex H.
 * 
 * @constant
 * @type {number}
 */
export
const contactlessEuicc = EUICCInfo2_euiccCategory_contactlessEuicc; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EUICCInfo2_euiccCategory = $._decodeInteger;
export const _encode_EUICCInfo2_euiccCategory = $._encodeInteger;


/* eslint-enable */
