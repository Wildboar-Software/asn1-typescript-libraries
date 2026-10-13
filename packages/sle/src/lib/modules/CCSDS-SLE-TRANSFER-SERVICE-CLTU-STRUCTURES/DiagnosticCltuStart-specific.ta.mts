/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuStart-specific ::= INTEGER
 *    {  outOfService                     (0)
 *    ,  unableToComply                   (1)
 *    ,  productionTimeExpired            (2)
 *    , invalidCltuId                     (3)
 *    }
 * ```
 */
export
type DiagnosticCltuStart_specific = INTEGER;

/**
 * @summary DiagnosticCltuStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_outOfService: DiagnosticCltuStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_unableToComply: DiagnosticCltuStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_productionTimeExpired: DiagnosticCltuStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const productionTimeExpired: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_productionTimeExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_invalidCltuId
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuStart_specific_invalidCltuId: DiagnosticCltuStart_specific = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuStart_specific_invalidCltuId
 * @constant
 * @type {number}
 */
export
const invalidCltuId: DiagnosticCltuStart_specific = DiagnosticCltuStart_specific_invalidCltuId; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticCltuStart_specific: $.ASN1Decoder<DiagnosticCltuStart_specific> = $._decodeInteger;
export const _encode_DiagnosticCltuStart_specific: $.ASN1Encoder<DiagnosticCltuStart_specific> = $._encodeInteger;


/* eslint-enable */
