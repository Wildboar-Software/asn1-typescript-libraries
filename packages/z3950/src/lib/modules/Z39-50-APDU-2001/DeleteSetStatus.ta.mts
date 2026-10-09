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
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_success: DeleteSetStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_success
 * @constant
 * @type {number}
 */
export
const success: DeleteSetStatus = DeleteSetStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetDidNotExist
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resultSetDidNotExist: DeleteSetStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetDidNotExist
 * @constant
 * @type {number}
 */
export
const resultSetDidNotExist: DeleteSetStatus = DeleteSetStatus_resultSetDidNotExist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_previouslyDeletedByServer
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_previouslyDeletedByServer: DeleteSetStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_previouslyDeletedByServer
 * @constant
 * @type {number}
 */
export
const previouslyDeletedByServer: DeleteSetStatus = DeleteSetStatus_previouslyDeletedByServer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_systemProblemAtServer
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_systemProblemAtServer: DeleteSetStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_systemProblemAtServer
 * @constant
 * @type {number}
 */
export
const systemProblemAtServer: DeleteSetStatus = DeleteSetStatus_systemProblemAtServer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_accessNotAllowed
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_accessNotAllowed: DeleteSetStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_accessNotAllowed
 * @constant
 * @type {number}
 */
export
const accessNotAllowed: DeleteSetStatus = DeleteSetStatus_accessNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtClient
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resourceControlAtClient: DeleteSetStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtClient
 * @constant
 * @type {number}
 */
export
const resourceControlAtClient: DeleteSetStatus = DeleteSetStatus_resourceControlAtClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtServer
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resourceControlAtServer: DeleteSetStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resourceControlAtServer
 * @constant
 * @type {number}
 */
export
const resourceControlAtServer: DeleteSetStatus = DeleteSetStatus_resourceControlAtServer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_bulkDeleteNotSupported
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_bulkDeleteNotSupported: DeleteSetStatus = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_bulkDeleteNotSupported
 * @constant
 * @type {number}
 */
export
const bulkDeleteNotSupported: DeleteSetStatus = DeleteSetStatus_bulkDeleteNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte: DeleteSetStatus = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte
 * @constant
 * @type {number}
 */
export
const notAllRsltSetsDeletedOnBulkDlte: DeleteSetStatus = DeleteSetStatus_notAllRsltSetsDeletedOnBulkDlte; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRequestedResultSetsDeleted
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_notAllRequestedResultSetsDeleted: DeleteSetStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_notAllRequestedResultSetsDeleted
 * @constant
 * @type {number}
 */
export
const notAllRequestedResultSetsDeleted: DeleteSetStatus = DeleteSetStatus_notAllRequestedResultSetsDeleted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetInUse
 * @constant
 * @type {number}
 */
export
const DeleteSetStatus_resultSetInUse: DeleteSetStatus = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteSetStatus_resultSetInUse
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
