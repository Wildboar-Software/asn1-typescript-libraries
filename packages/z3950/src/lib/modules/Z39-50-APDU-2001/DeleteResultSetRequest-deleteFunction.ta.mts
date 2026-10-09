/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteResultSetRequest_deleteFunction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteResultSetRequest-deleteFunction ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DeleteResultSetRequest_deleteFunction = INTEGER;

/**
 * @summary DeleteResultSetRequest_deleteFunction_list
 * @constant
 * @type {number}
 */
export
const DeleteResultSetRequest_deleteFunction_list: DeleteResultSetRequest_deleteFunction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteResultSetRequest_deleteFunction_list
 * @constant
 * @type {number}
 */
export
const list: DeleteResultSetRequest_deleteFunction = DeleteResultSetRequest_deleteFunction_list; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteResultSetRequest_deleteFunction_all
 * @constant
 * @type {number}
 */
export
const DeleteResultSetRequest_deleteFunction_all: DeleteResultSetRequest_deleteFunction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteResultSetRequest_deleteFunction_all
 * @constant
 * @type {number}
 */
export
const all: DeleteResultSetRequest_deleteFunction = DeleteResultSetRequest_deleteFunction_all; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DeleteResultSetRequest_deleteFunction: $.ASN1Decoder<DeleteResultSetRequest_deleteFunction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResultSetRequest_deleteFunction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteResultSetRequest_deleteFunction (el: _Element): DeleteResultSetRequest_deleteFunction {
    if (!_cached_decoder_for_DeleteResultSetRequest_deleteFunction) { _cached_decoder_for_DeleteResultSetRequest_deleteFunction = $._decodeInteger; }
    return _cached_decoder_for_DeleteResultSetRequest_deleteFunction(el);
}

let _cached_encoder_for_DeleteResultSetRequest_deleteFunction: $.ASN1Encoder<DeleteResultSetRequest_deleteFunction> | null = null;

/**
 * @summary Encodes a(n) DeleteResultSetRequest_deleteFunction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResultSetRequest_deleteFunction, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteResultSetRequest_deleteFunction (value: DeleteResultSetRequest_deleteFunction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteResultSetRequest_deleteFunction) { _cached_encoder_for_DeleteResultSetRequest_deleteFunction = $._encodeInteger; }
    return _cached_encoder_for_DeleteResultSetRequest_deleteFunction(value, elGetter);
}


/* eslint-enable */
