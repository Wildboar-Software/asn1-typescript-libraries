/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlbErrors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlbErrors  ::=  INTEGER {
 *     other(0),
 *     unknownControlBlock(1),
 *     responseTooLarge(2),
 *     controlBlockConfigurationError(3) --,
 * --    ...
 * }
 * ```
 */
export
type GlbErrors = INTEGER;

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const GlbErrors_other = 0 satisfies GlbErrors; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const other = GlbErrors_other satisfies GlbErrors; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const GlbErrors_unknownControlBlock = 1 satisfies GlbErrors; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const unknownControlBlock = GlbErrors_unknownControlBlock satisfies GlbErrors; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const GlbErrors_responseTooLarge = 2 satisfies GlbErrors; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const responseTooLarge = GlbErrors_responseTooLarge satisfies GlbErrors; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const GlbErrors_controlBlockConfigurationError = 3 satisfies GlbErrors; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const controlBlockConfigurationError = GlbErrors_controlBlockConfigurationError satisfies GlbErrors; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GlbErrors: $.ASN1Decoder<GlbErrors> = $._decodeInteger;
export const _encode_GlbErrors: $.ASN1Encoder<GlbErrors> = $._encodeInteger;


/* eslint-enable */
