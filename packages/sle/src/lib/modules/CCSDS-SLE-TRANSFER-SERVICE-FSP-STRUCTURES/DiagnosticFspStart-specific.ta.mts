/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspStart_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspStart-specific ::= INTEGER
 *    {  outOfService            (0)
 *    ,  unableToComply          (1)
 *    ,  productionTimeExpired   (2)
 *    }
 * ```
 */
export
type DiagnosticFspStart_specific = INTEGER;

/**
 * @summary DiagnosticFspStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_outOfService: DiagnosticFspStart_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_outOfService
 * @constant
 * @type {number}
 */
export
const outOfService: DiagnosticFspStart_specific = DiagnosticFspStart_specific_outOfService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_unableToComply: DiagnosticFspStart_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_unableToComply
 * @constant
 * @type {number}
 */
export
const unableToComply: DiagnosticFspStart_specific = DiagnosticFspStart_specific_unableToComply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const DiagnosticFspStart_specific_productionTimeExpired: DiagnosticFspStart_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspStart_specific_productionTimeExpired
 * @constant
 * @type {number}
 */
export
const productionTimeExpired: DiagnosticFspStart_specific = DiagnosticFspStart_specific_productionTimeExpired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticFspStart_specific: $.ASN1Decoder<DiagnosticFspStart_specific> = $._decodeInteger;
export const _encode_DiagnosticFspStart_specific: $.ASN1Encoder<DiagnosticFspStart_specific> = $._encodeInteger;


/* eslint-enable */
