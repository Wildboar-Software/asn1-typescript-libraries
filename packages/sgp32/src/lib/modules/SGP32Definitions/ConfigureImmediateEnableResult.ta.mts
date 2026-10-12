/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConfigureImmediateEnableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigureImmediateEnableResult  ::=  INTEGER {
 *     ok(0),
 *     insufficientMemory(1),
 *     commandError(7),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConfigureImmediateEnableResult = INTEGER;

/**
 * @summary ConfigureImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_ok: ConfigureImmediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_insufficientMemory: ConfigureImmediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_commandError
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_commandError: ConfigureImmediateEnableResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ConfigureImmediateEnableResult_undefinedError: ConfigureImmediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConfigureImmediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ConfigureImmediateEnableResult = ConfigureImmediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConfigureImmediateEnableResult: $.ASN1Decoder<ConfigureImmediateEnableResult> = $._decodeInteger;
export const _encode_ConfigureImmediateEnableResult: $.ASN1Encoder<ConfigureImmediateEnableResult> = $._encodeInteger;


/* eslint-enable */
