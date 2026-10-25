/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sensitivity
 * @description
 * 
 * Bit names for the NATO restrictive sensitivity category, selected by
 * `id-sensitivity` as the tag name. The values are those of the C3 Board
 * directive AC/322-D(2003)029, Table 2, as cited by Annex H. Edition 2 does not
 * define the individual names. STANAG 4406 (Ed. 2), Annex H.3.4 and H.4.
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
 * @description
 *
 * Bit 0 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_atomal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary atomal
 * @description
 *
 * Bit 0 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const atomal: number = Sensitivity_atomal; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_crypto
 * @description
 *
 * Bit 1 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_crypto: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary crypto
 * @description
 *
 * Bit 1 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const crypto: number = Sensitivity_crypto; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_exclusive
 * @description
 *
 * Bit 2 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_exclusive: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary exclusive
 * @description
 *
 * Bit 2 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const exclusive: number = Sensitivity_exclusive; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_intelligence
 * @description
 *
 * Bit 3 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_intelligence: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary intelligence
 * @description
 *
 * Bit 3 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const intelligence: number = Sensitivity_intelligence; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_logistics
 * @description
 *
 * Bit 4 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_logistics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary logistics
 * @description
 *
 * Bit 4 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const logistics: number = Sensitivity_logistics; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_operations
 * @description
 *
 * Bit 5 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_operations: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary operations
 * @description
 *
 * Bit 5 of the NATO restrictive sensitivity category. Annex H lists the name
 * and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const operations: number = Sensitivity_operations; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_us_siop
 * @description
 *
 * Bit 6 (`us-siop`) of the NATO restrictive sensitivity category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const Sensitivity_us_siop: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary us_siop
 * @description
 *
 * Bit 6 (`us-siop`) of the NATO restrictive sensitivity category. Annex H lists
 * the name and does not define it further. STANAG 4406 (Ed. 2), Annex H.3.4.
 * @constant
 */
export
const us_siop: number = Sensitivity_us_siop; /* SHORT_NAMED_BIT */

/**
 * @summary Sensitivity_us_siop_esi
 * @description
 *
 * Bit 7 (`us-siop-esi`) of the NATO restrictive sensitivity category. Annex H
 * lists the name and does not define it further. STANAG 4406 (Ed. 2), Annex
 * H.3.4.
 * @constant
 */
export
const Sensitivity_us_siop_esi: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary us_siop_esi
 * @description
 *
 * Bit 7 (`us-siop-esi`) of the NATO restrictive sensitivity category. Annex H
 * lists the name and does not define it further. STANAG 4406 (Ed. 2), Annex
 * H.3.4.
 * @constant
 */
export
const us_siop_esi: number = Sensitivity_us_siop_esi; /* SHORT_NAMED_BIT */
export const _decode_Sensitivity: $.ASN1Decoder<Sensitivity> = $._decodeBitString;
export const _encode_Sensitivity: $.ASN1Encoder<Sensitivity> = $._encodeBitString;


/* eslint-enable */
