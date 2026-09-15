/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ULState
 * @description
 * 
 * ULSM state. non-existent before the sequence;
 * uploading while segments are sent; uploaded when complete. u1–u4 are
 * transitory states. ISO 9506-1:2003 §11.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ULState  ::=  INTEGER {
 *     non-existent                  (0),
 *     uploading                     (1),
 *     uploaded                      (2),
 *     u1                            (3),
 *     u2                            (4),
 *     u3                            (5),
 *     u4                            (6)
 * } (0..6)
 * ```
 */
export
type ULState = INTEGER;

/**
 * @summary ULState_non_existent
 * @description
 *
 * No upload sequence. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_non_existent: ULState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_non_existent
 * @description
 *
 * No upload sequence. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const non_existent: ULState = ULState_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploading
 * @description
 *
 * Upload segments in progress. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_uploading: ULState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploading
 * @description
 *
 * Upload segments in progress. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const uploading: ULState = ULState_uploading; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploaded
 * @description
 *
 * Upload sequence complete. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_uploaded: ULState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_uploaded
 * @description
 *
 * Upload sequence complete. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const uploaded: ULState = ULState_uploaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u1
 * @description
 *
 * Transitory ULSM state u1. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_u1: ULState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u1
 * @description
 *
 * Transitory ULSM state u1. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const u1: ULState = ULState_u1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u2
 * @description
 *
 * Transitory ULSM state u2. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_u2: ULState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u2
 * @description
 *
 * Transitory ULSM state u2. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const u2: ULState = ULState_u2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u3
 * @description
 *
 * Transitory ULSM state u3. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_u3: ULState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u3
 * @description
 *
 * Transitory ULSM state u3. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const u3: ULState = ULState_u3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u4
 * @description
 *
 * Transitory ULSM state u4. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ULState_u4: ULState = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ULState_u4
 * @description
 *
 * Transitory ULSM state u4. ISO 9506-1:2003 §11.1.2.
 *
 * @constant
 * @type {number}
 */
export
const u4: ULState = ULState_u4; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ULState = $._decodeInteger;
export const _encode_ULState = $._encodeInteger;


/* eslint-enable */
