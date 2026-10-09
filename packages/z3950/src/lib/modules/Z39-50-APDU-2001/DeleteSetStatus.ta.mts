/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteSetStatus
 * @description
 *
 * Delete status, operation-wide or per result set. Operation status
 * is success or failure-3 through failure-9. A list-item status is
 * success, failure-1 through failure-6, or failure-10. Failure-7 and
 * failure-8 occur only on bulk-delete. Failure-10 may be used only
 * when version 3 is in force. §3.2.4.1.3, §3.2.4.1.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteSetStatus  ::=  [33] IMPLICIT INTEGER{
 *     success                             (0),
 *     resultSetDidNotExist                (1),
 *     previouslyDeletedByServer           (2),
 *     systemProblemAtServer               (3),
 *     accessNotAllowed                    (4),
 *     resourceControlAtClient             (5),
 *     resourceControlAtServer             (6),
 *     bulkDeleteNotSupported              (7),
 *     notAllRsltSetsDeletedOnBulkDlte     (8),
 *     notAllRequestedResultSetsDeleted    (9),
 *     resultSetInUse                      (10)
 * }
 * ```
 */
export
type DeleteSetStatus = INTEGER;

/**
 * @summary DeleteSetStatus_success
 * @description
 *
 * Value 0, failure name "success". The result set or sets were
 * deleted. Valid as an operation status and as a per-set status.
 * §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_success: DeleteSetStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_success
 * @description
 *
 * Short name for `DeleteSetStatus_success`. Value 0: result set(s)
 * deleted. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const success: DeleteSetStatus = DeleteSetStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetDidNotExist
 * @description
 *
 * Value 1, failure-1. The result set did not exist. A per-set status
 * on a list Delete, not an operation status. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resultSetDidNotExist: DeleteSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetDidNotExist
 * @description
 *
 * Short name for `DeleteSetStatus_resultSetDidNotExist`. Value 1,
 * failure-1: the result set did not exist. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const resultSetDidNotExist: DeleteSetStatus = DeleteSetStatus_resultSetDidNotExist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_previouslyDeletedByServer
 * @description
 *
 * Value 2, failure-2. The server had already deleted the result set
 * on its own. A per-set status, not an operation status.
 * §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_previouslyDeletedByServer: DeleteSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_previouslyDeletedByServer
 * @description
 *
 * Short name for `DeleteSetStatus_previouslyDeletedByServer`.
 * Value 2, failure-2: the server had already deleted the set.
 * §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const previouslyDeletedByServer: DeleteSetStatus = DeleteSetStatus_previouslyDeletedByServer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_systemProblemAtServer
 * @description
 *
 * Value 3, failure-3. System problem at the server. Optional text may
 * be supplied in `deleteMessage`. Valid as an operation status and as
 * a per-set status. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_systemProblemAtServer: DeleteSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_systemProblemAtServer
 * @description
 *
 * Short name for `DeleteSetStatus_systemProblemAtServer`. Value 3,
 * failure-3: system problem at the server. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const systemProblemAtServer: DeleteSetStatus = DeleteSetStatus_systemProblemAtServer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_accessNotAllowed
 * @description
 *
 * Value 4, failure-4. Access-control failure: the delete caused an
 * Access-control request the client did not satisfy, or the client
 * could not accept an Access-control request. Valid as an operation
 * status and as a per-set status. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_accessNotAllowed: DeleteSetStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_accessNotAllowed
 * @description
 *
 * Short name for `DeleteSetStatus_accessNotAllowed`. Value 4,
 * failure-4: access-control failure. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const accessNotAllowed: DeleteSetStatus = DeleteSetStatus_accessNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtClient
 * @description
 *
 * Value 5, failure-5. The operation was terminated by resource
 * control at the client's request. Valid as an operation status and
 * as a per-set status. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resourceControlAtClient: DeleteSetStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtClient
 * @description
 *
 * Short name for `DeleteSetStatus_resourceControlAtClient`. Value 5,
 * failure-5: resource control at the client's request. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const resourceControlAtClient: DeleteSetStatus = DeleteSetStatus_resourceControlAtClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtServer
 * @description
 *
 * Value 6, failure-6. The server terminated the operation because of
 * resource constraints. Valid as an operation status and as a per-set
 * status. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resourceControlAtServer: DeleteSetStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtServer
 * @description
 *
 * Short name for `DeleteSetStatus_resourceControlAtServer`. Value 6,
 * failure-6: the server stopped for resource constraints.
 * §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const resourceControlAtServer: DeleteSetStatus = DeleteSetStatus_resourceControlAtServer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_bulkDeleteNotSupported
 * @description
 *
 * Value 7, failure-7. The server does not support bulk-delete of
 * result sets. An operation status only, and only when the function
 * was bulk-delete. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_bulkDeleteNotSupported: DeleteSetStatus = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_bulkDeleteNotSupported
 * @description
 *
 * Short name for `DeleteSetStatus_bulkDeleteNotSupported`. Value 7,
 * failure-7: bulk-delete is not supported. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const bulkDeleteNotSupported: DeleteSetStatus = DeleteSetStatus_bulkDeleteNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte
 * @description
 *
 * Value 8, failure-8. Bulk-delete did not delete every result set.
 * An operation status only, and only on bulk-delete. When this is the
 * operation status, `numberNotDeleted` and `bulkStatuses` occur.
 * §3.2.4.1.4, §3.2.4.1.5.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte: DeleteSetStatus = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte
 * @description
 *
 * Short name for `DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte`.
 * Value 8, failure-8: bulk-delete left some result sets. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const notAllRsltSetsDeletedOnBulkDlte: DeleteSetStatus = DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRequestedResultSetsDeleted
 * @description
 *
 * Value 9, failure-9. A list Delete did not delete every requested
 * result set. An operation status. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_notAllRequestedResultSetsDeleted: DeleteSetStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRequestedResultSetsDeleted
 * @description
 *
 * Short name for
 * `DeleteSetStatus_notAllRequestedResultSetsDeleted`. Value 9,
 * failure-9: a list Delete left some requested sets. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const notAllRequestedResultSetsDeleted: DeleteSetStatus = DeleteSetStatus_notAllRequestedResultSetsDeleted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetInUse
 * @description
 *
 * Value 10, failure-10. The result set is in use. A per-set status,
 * not an operation status. May be used only when version 3 is in
 * force. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resultSetInUse: DeleteSetStatus = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetInUse
 * @description
 *
 * Short name for `DeleteSetStatus_resultSetInUse`. Value 10,
 * failure-10: the result set is in use. Version 3 only. §3.2.4.1.4.
 *
 * @constant
 * @type {number}
 */
export
const resultSetInUse: DeleteSetStatus = DeleteSetStatus_resultSetInUse; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DeleteSetStatus: $.ASN1Decoder<DeleteSetStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteSetStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteSetStatus (el: _Element): DeleteSetStatus {
    if (!_cached_decoder_for_DeleteSetStatus) { _cached_decoder_for_DeleteSetStatus = $._decode_implicit<DeleteSetStatus>(() => $._decodeInteger); }
    return _cached_decoder_for_DeleteSetStatus(el);
}

let _cached_encoder_for_DeleteSetStatus: $.ASN1Encoder<DeleteSetStatus> | null = null;

/**
 * @summary Encodes a(n) DeleteSetStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteSetStatus, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteSetStatus (value: DeleteSetStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteSetStatus) { _cached_encoder_for_DeleteSetStatus = $._encode_implicit(_TagClass.context, 33, () => $._encode_implicit(_TagClass.context, 33, () => $._encodeInteger, $.BER), $.BER); }
    return _cached_encoder_for_DeleteSetStatus(value, elGetter);
}


/* eslint-enable */
