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

let _cached_decoder_for_UpdateEimResult: $.ASN1Decoder<UpdateEimResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateEimResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateEimResult (el: _Element): UpdateEimResult {
    if (!_cached_decoder_for_UpdateEimResult) { _cached_decoder_for_UpdateEimResult = $._decodeInteger; }
    return _cached_decoder_for_UpdateEimResult(el);
}

let _cached_encoder_for_UpdateEimResult: $.ASN1Encoder<UpdateEimResult> | null = null;

/**
 * @summary Encodes a(n) UpdateEimResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateEimResult, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateEimResult (value: UpdateEimResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateEimResult) { _cached_encoder_for_UpdateEimResult = $._encodeInteger; }
    return _cached_encoder_for_UpdateEimResult(value, elGetter);
}


/* eslint-enable */
