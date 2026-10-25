/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContentType_ShortForm
 * @description
 * 
 * Integer names for the compressed APDU: unidentified, EXTERNAL, P1, P3, or P7.
 * STANAG 4406 (Ed. 2), Annex E, clause 4.2.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentType-ShortForm  ::=  INTEGER  {
 *     unidentified (0),
 *     external (1), -- identified by the object-identifier of the EXTERNAL content 
 *     p1 (2),
 *     p3 (3),
 *     p7 (4)
 * }
 * ```
 */
export
type ContentType_ShortForm = INTEGER;

/**
 * @summary ContentType_ShortForm_unidentified
 * @description
 *
 * Integer 0. The compressed content type is not identified. STANAG 4406 (Ed.
 * 2), Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_unidentified = 0 satisfies ContentType_ShortForm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_unidentified
 * @description
 *
 * Integer 0. The compressed content type is not identified. STANAG 4406 (Ed.
 * 2), Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const unidentified = ContentType_ShortForm_unidentified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_external
 * @description
 *
 * Integer 1. The content is EXTERNAL, identified by that content's object
 * identifier. STANAG 4406 (Ed. 2), Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_external = 1 satisfies ContentType_ShortForm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_external
 * @description
 *
 * Integer 1. The content is EXTERNAL, identified by that content's object
 * identifier. STANAG 4406 (Ed. 2), Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const external = ContentType_ShortForm_external; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p1
 * @description
 *
 * Integer 2. The compressed octets are a P1 envelope. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p1 = 2 satisfies ContentType_ShortForm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p1
 * @description
 *
 * Integer 2. The compressed octets are a P1 envelope. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const p1 = ContentType_ShortForm_p1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p3
 * @description
 *
 * Integer 3. The compressed octets are a P3 envelope. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p3 = 3 satisfies ContentType_ShortForm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p3
 * @description
 *
 * Integer 3. The compressed octets are a P3 envelope. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const p3 = ContentType_ShortForm_p3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p7
 * @description
 *
 * Integer 4. The compressed octets are a P7 envelope. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const ContentType_ShortForm_p7 = 4 satisfies ContentType_ShortForm; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ContentType_ShortForm_p7
 * @description
 *
 * Integer 4. The compressed octets are a P7 envelope. STANAG 4406 (Ed. 2),
 * Annex E, clause 4.2.6.1.
 * @constant
 * @type {number}
 */
export
const p7 = ContentType_ShortForm_p7; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ContentType_ShortForm: $.ASN1Decoder<ContentType_ShortForm> = $._decodeInteger;
export const _encode_ContentType_ShortForm: $.ASN1Encoder<ContentType_ShortForm> = $._encodeInteger;


/* eslint-enable */
