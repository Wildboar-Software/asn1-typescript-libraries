/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteResultSetRequest_deleteFunction
 * @description
 *
 * What the Delete request deletes. `list` names specific result sets.
 * `all` is bulk-delete: every result set currently on the server that
 * was created during this Z-association. §3.2.4.1.1.
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
 * @description
 *
 * Value 0. Delete the result sets named in `resultSetList`.
 * `resultSetList` occurs if and only if this value is chosen.
 * §3.2.4.1.1, §3.2.4.1.2.
 *
 * @constant
 * @type {number}
 */
export
const DeleteResultSetRequest_deleteFunction_list: DeleteResultSetRequest_deleteFunction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteResultSetRequest_deleteFunction_list
 * @description
 *
 * Short name for `DeleteResultSetRequest_deleteFunction_list`.
 * Value 0: delete the named result sets. §3.2.4.1.1.
 *
 * @constant
 * @type {number}
 */
export
const list: DeleteResultSetRequest_deleteFunction = DeleteResultSetRequest_deleteFunction_list; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteResultSetRequest_deleteFunction_all
 * @description
 *
 * Value 1. Bulk-delete: delete every result set currently on the
 * server that was created during this Z-association. The service
 * calls this function bulk-delete. §3.2.4.1.1.
 *
 * @constant
 * @type {number}
 */
export
const DeleteResultSetRequest_deleteFunction_all: DeleteResultSetRequest_deleteFunction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteResultSetRequest_deleteFunction_all
 * @description
 *
 * Short name for `DeleteResultSetRequest_deleteFunction_all`.
 * Value 1: bulk-delete every result set from this Z-association.
 * §3.2.4.1.1.
 *
 * @constant
 * @type {number}
 */
export
const all: DeleteResultSetRequest_deleteFunction = DeleteResultSetRequest_deleteFunction_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DeleteResultSetRequest_deleteFunction: $.ASN1Decoder<DeleteResultSetRequest_deleteFunction> = $._decodeInteger;
export const _encode_DeleteResultSetRequest_deleteFunction: $.ASN1Encoder<DeleteResultSetRequest_deleteFunction> = $._encodeInteger;


/* eslint-enable */
