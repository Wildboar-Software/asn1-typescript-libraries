/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UpdateEimResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateEimResult  ::=  INTEGER {
 *     ok(0),
 *     eimNotFound (1),
 *     ciPKUnknown(3),
 *     counterValueOutOfRange(6),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type UpdateEimResult = INTEGER;

/**
 * @summary UpdateEimResult_ok
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_ok: UpdateEimResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_ok
 * @constant
 * @type {number}
 */
export
const ok: UpdateEimResult = UpdateEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_eimNotFound
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_eimNotFound: UpdateEimResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_eimNotFound
 * @constant
 * @type {number}
 */
export
const eimNotFound: UpdateEimResult = UpdateEimResult_eimNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_ciPKUnknown: UpdateEimResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: UpdateEimResult = UpdateEimResult_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_counterValueOutOfRange: UpdateEimResult = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_counterValueOutOfRange
 * @constant
 * @type {number}
 */
export
const counterValueOutOfRange: UpdateEimResult = UpdateEimResult_counterValueOutOfRange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_commandError
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_commandError: UpdateEimResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: UpdateEimResult = UpdateEimResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const UpdateEimResult_undefinedError: UpdateEimResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: UpdateEimResult = UpdateEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_UpdateEimResult: $.ASN1Decoder<UpdateEimResult> = $._decodeInteger;
export const _encode_UpdateEimResult: $.ASN1Encoder<UpdateEimResult> = $._encodeInteger;


/* eslint-enable */
