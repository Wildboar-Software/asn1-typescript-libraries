/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ImmediateEnableResponse_immediateEnableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImmediateEnableResponse-immediateEnableResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ImmediateEnableResponse_immediateEnableResult = INTEGER;

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_ok: ImmediateEnableResponse_immediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable: ImmediateEnableResponse_immediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable
 * @constant
 * @type {number}
 */
export
const immediateEnableNotAvailable: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_noSessionContext
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_noSessionContext: ImmediateEnableResponse_immediateEnableResult = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_noSessionContext
 * @constant
 * @type {number}
 */
export
const noSessionContext: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_catBusy
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_catBusy: ImmediateEnableResponse_immediateEnableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_undefinedError: ImmediateEnableResponse_immediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ImmediateEnableResponse_immediateEnableResult: $.ASN1Decoder<ImmediateEnableResponse_immediateEnableResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImmediateEnableResponse_immediateEnableResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImmediateEnableResponse_immediateEnableResult (el: _Element): ImmediateEnableResponse_immediateEnableResult {
    if (!_cached_decoder_for_ImmediateEnableResponse_immediateEnableResult) { _cached_decoder_for_ImmediateEnableResponse_immediateEnableResult = $._decodeInteger; }
    return _cached_decoder_for_ImmediateEnableResponse_immediateEnableResult(el);
}

let _cached_encoder_for_ImmediateEnableResponse_immediateEnableResult: $.ASN1Encoder<ImmediateEnableResponse_immediateEnableResult> | null = null;

/**
 * @summary Encodes a(n) ImmediateEnableResponse_immediateEnableResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImmediateEnableResponse_immediateEnableResult, encoded as an ASN.1 Element.
 */
export
function _encode_ImmediateEnableResponse_immediateEnableResult (value: ImmediateEnableResponse_immediateEnableResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImmediateEnableResponse_immediateEnableResult) { _cached_encoder_for_ImmediateEnableResponse_immediateEnableResult = $._encodeInteger; }
    return _cached_encoder_for_ImmediateEnableResponse_immediateEnableResult(value, elGetter);
}


/* eslint-enable */
