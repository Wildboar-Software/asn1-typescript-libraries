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
 * DeleteResultSetRequest-deleteFunction ::= INTEGER {
 *     list (0),
 *     all (1)
 * }
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
export const _decode_DeleteResultSetRequest_deleteFunction = $._decodeInteger;
export const _encode_DeleteResultSetRequest_deleteFunction = $._encodeInteger;


/* eslint-enable */
