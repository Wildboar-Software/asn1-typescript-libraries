/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TaskPackageRecordStructure_recordStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackageRecordStructure-recordStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TaskPackageRecordStructure_recordStatus = INTEGER;

/**
 * @summary TaskPackageRecordStructure_recordStatus_success
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_success: TaskPackageRecordStructure_recordStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_success
 * @constant
 * @type {number}
 */
export
const success: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_queued
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_queued: TaskPackageRecordStructure_recordStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_queued
 * @constant
 * @type {number}
 */
export
const queued: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_queued; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_inProcess
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_inProcess: TaskPackageRecordStructure_recordStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_inProcess
 * @constant
 * @type {number}
 */
export
const inProcess: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_inProcess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_failure
 * @constant
 * @type {number}
 */
export
const TaskPackageRecordStructure_recordStatus_failure: TaskPackageRecordStructure_recordStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackageRecordStructure_recordStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: TaskPackageRecordStructure_recordStatus = TaskPackageRecordStructure_recordStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TaskPackageRecordStructure_recordStatus: $.ASN1Decoder<TaskPackageRecordStructure_recordStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TaskPackageRecordStructure_recordStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TaskPackageRecordStructure_recordStatus (el: _Element): TaskPackageRecordStructure_recordStatus {
    if (!_cached_decoder_for_TaskPackageRecordStructure_recordStatus) { _cached_decoder_for_TaskPackageRecordStructure_recordStatus = $._decodeInteger; }
    return _cached_decoder_for_TaskPackageRecordStructure_recordStatus(el);
}

let _cached_encoder_for_TaskPackageRecordStructure_recordStatus: $.ASN1Encoder<TaskPackageRecordStructure_recordStatus> | null = null;

/**
 * @summary Encodes a(n) TaskPackageRecordStructure_recordStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TaskPackageRecordStructure_recordStatus, encoded as an ASN.1 Element.
 */
export
function _encode_TaskPackageRecordStructure_recordStatus (value: TaskPackageRecordStructure_recordStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TaskPackageRecordStructure_recordStatus) { _cached_encoder_for_TaskPackageRecordStructure_recordStatus = $._encodeInteger; }
    return _cached_encoder_for_TaskPackageRecordStructure_recordStatus(value, elGetter);
}


/* eslint-enable */
