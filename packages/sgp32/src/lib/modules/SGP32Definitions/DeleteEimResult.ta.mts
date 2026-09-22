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

let _cached_decoder_for_DeleteEimResult: $.ASN1Decoder<DeleteEimResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteEimResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteEimResult (el: _Element): DeleteEimResult {
    if (!_cached_decoder_for_DeleteEimResult) { _cached_decoder_for_DeleteEimResult = $._decodeInteger; }
    return _cached_decoder_for_DeleteEimResult(el);
}

let _cached_encoder_for_DeleteEimResult: $.ASN1Encoder<DeleteEimResult> | null = null;

/**
 * @summary Encodes a(n) DeleteEimResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteEimResult, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteEimResult (value: DeleteEimResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteEimResult) { _cached_encoder_for_DeleteEimResult = $._encodeInteger; }
    return _cached_encoder_for_DeleteEimResult(value, elGetter);
}


/* eslint-enable */
