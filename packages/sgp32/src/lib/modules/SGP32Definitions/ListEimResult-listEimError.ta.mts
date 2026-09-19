/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ListEimResult_listEimError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListEimResult-listEimError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ListEimResult_listEimError = INTEGER;

/**
 * @summary ListEimResult_listEimError_undefinedError
 * @constant
 * @type {number}
 */
export
const ListEimResult_listEimError_undefinedError: ListEimResult_listEimError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ListEimResult_listEimError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ListEimResult_listEimError = ListEimResult_listEimError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ListEimResult_listEimError: $.ASN1Decoder<ListEimResult_listEimError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListEimResult_listEimError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListEimResult_listEimError (el: _Element): ListEimResult_listEimError {
    if (!_cached_decoder_for_ListEimResult_listEimError) { _cached_decoder_for_ListEimResult_listEimError = $._decodeInteger; }
    return _cached_decoder_for_ListEimResult_listEimError(el);
}

let _cached_encoder_for_ListEimResult_listEimError: $.ASN1Encoder<ListEimResult_listEimError> | null = null;

/**
 * @summary Encodes a(n) ListEimResult_listEimError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListEimResult_listEimError, encoded as an ASN.1 Element.
 */
export
function _encode_ListEimResult_listEimError (value: ListEimResult_listEimError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListEimResult_listEimError) { _cached_encoder_for_ListEimResult_listEimError = $._encodeInteger; }
    return _cached_encoder_for_ListEimResult_listEimError(value, elGetter);
}


/* eslint-enable */
