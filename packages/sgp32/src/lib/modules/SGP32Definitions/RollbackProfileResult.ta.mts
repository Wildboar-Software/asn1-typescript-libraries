/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RollbackProfileResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RollbackProfileResult  ::=  INTEGER {
 *     ok(0),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type RollbackProfileResult = INTEGER;

/**
 * @summary RollbackProfileResult_ok
 * @constant
 * @type {number}
 */
export
const RollbackProfileResult_ok: RollbackProfileResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RollbackProfileResult_ok
 * @constant
 * @type {number}
 */
export
const ok: RollbackProfileResult = RollbackProfileResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RollbackProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const RollbackProfileResult_undefinedError: RollbackProfileResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RollbackProfileResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: RollbackProfileResult = RollbackProfileResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RollbackProfileResult: $.ASN1Decoder<RollbackProfileResult> = $._decodeInteger;
export const _encode_RollbackProfileResult: $.ASN1Encoder<RollbackProfileResult> = $._encodeInteger;


/* eslint-enable */
