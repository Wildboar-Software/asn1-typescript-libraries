/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";
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
const GlbErrors_other: GlbErrors = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_other
 * @constant
 * @type {number}
 */
export
const other: GlbErrors = GlbErrors_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const GlbErrors_unknownControlBlock: GlbErrors = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_unknownControlBlock
 * @constant
 * @type {number}
 */
export
const unknownControlBlock: GlbErrors = GlbErrors_unknownControlBlock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const GlbErrors_responseTooLarge: GlbErrors = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_responseTooLarge
 * @constant
 * @type {number}
 */
export
const responseTooLarge: GlbErrors = GlbErrors_responseTooLarge; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const GlbErrors_controlBlockConfigurationError: GlbErrors = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GlbErrors_controlBlockConfigurationError
 * @constant
 * @type {number}
 */
export
const controlBlockConfigurationError: GlbErrors = GlbErrors_controlBlockConfigurationError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GlbErrors: $.ASN1Decoder<GlbErrors> = $._decodeInteger;
export const _encode_GlbErrors: $.ASN1Encoder<GlbErrors> = $._encodeInteger;


/* eslint-enable */
