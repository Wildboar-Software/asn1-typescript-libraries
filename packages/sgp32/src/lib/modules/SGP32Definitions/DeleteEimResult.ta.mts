/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteEimResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEimResult  ::=  INTEGER {
 *     ok(0),
 *     eimNotFound(1),
 *     lastEimDeleted(2), -- no eIM Configuration Data available in eUICC,
 *     commandError(7),    
 *     undefinedError(127)
 * }
 * ```
 */
export
type DeleteEimResult = INTEGER;

/**
 * @summary DeleteEimResult_ok
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_ok: DeleteEimResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DeleteEimResult = DeleteEimResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_eimNotFound
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_eimNotFound: DeleteEimResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_eimNotFound
 * @constant
 * @type {number}
 */
export
const eimNotFound: DeleteEimResult = DeleteEimResult_eimNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_lastEimDeleted
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_lastEimDeleted: DeleteEimResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_lastEimDeleted
 * @constant
 * @type {number}
 */
export
const lastEimDeleted: DeleteEimResult = DeleteEimResult_lastEimDeleted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_commandError
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_commandError: DeleteEimResult = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_commandError
 * @constant
 * @type {number}
 */
export
const commandError: DeleteEimResult = DeleteEimResult_commandError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DeleteEimResult_undefinedError: DeleteEimResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteEimResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DeleteEimResult = DeleteEimResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteEimResult: $.ASN1Decoder<DeleteEimResult> = $._decodeInteger;
export const _encode_DeleteEimResult: $.ASN1Encoder<DeleteEimResult> = $._encodeInteger;


/* eslint-enable */
