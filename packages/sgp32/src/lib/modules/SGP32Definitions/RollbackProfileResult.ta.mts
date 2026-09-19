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

let _cached_decoder_for_RollbackProfileResult: $.ASN1Decoder<RollbackProfileResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RollbackProfileResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RollbackProfileResult (el: _Element): RollbackProfileResult {
    if (!_cached_decoder_for_RollbackProfileResult) { _cached_decoder_for_RollbackProfileResult = $._decodeInteger; }
    return _cached_decoder_for_RollbackProfileResult(el);
}

let _cached_encoder_for_RollbackProfileResult: $.ASN1Encoder<RollbackProfileResult> | null = null;

/**
 * @summary Encodes a(n) RollbackProfileResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RollbackProfileResult, encoded as an ASN.1 Element.
 */
export
function _encode_RollbackProfileResult (value: RollbackProfileResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RollbackProfileResult) { _cached_encoder_for_RollbackProfileResult = $._encodeInteger; }
    return _cached_encoder_for_RollbackProfileResult(value, elGetter);
}


/* eslint-enable */
