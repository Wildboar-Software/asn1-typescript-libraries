/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TaskPackage_taskStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TaskPackage-taskStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TaskPackage_taskStatus = INTEGER;

/**
 * @summary TaskPackage_taskStatus_pending
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_pending: TaskPackage_taskStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_pending
 * @constant
 * @type {number}
 */
export
const pending: TaskPackage_taskStatus = TaskPackage_taskStatus_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_active
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_active: TaskPackage_taskStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_active
 * @constant
 * @type {number}
 */
export
const active: TaskPackage_taskStatus = TaskPackage_taskStatus_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_complete
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_complete: TaskPackage_taskStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_complete
 * @constant
 * @type {number}
 */
export
const complete: TaskPackage_taskStatus = TaskPackage_taskStatus_complete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_aborted
 * @constant
 * @type {number}
 */
export
const TaskPackage_taskStatus_aborted: TaskPackage_taskStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TaskPackage_taskStatus_aborted
 * @constant
 * @type {number}
 */
export
const aborted: TaskPackage_taskStatus = TaskPackage_taskStatus_aborted; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TaskPackage_taskStatus: $.ASN1Decoder<TaskPackage_taskStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TaskPackage_taskStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TaskPackage_taskStatus (el: _Element): TaskPackage_taskStatus {
    if (!_cached_decoder_for_TaskPackage_taskStatus) { _cached_decoder_for_TaskPackage_taskStatus = $._decodeInteger; }
    return _cached_decoder_for_TaskPackage_taskStatus(el);
}

let _cached_encoder_for_TaskPackage_taskStatus: $.ASN1Encoder<TaskPackage_taskStatus> | null = null;

/**
 * @summary Encodes a(n) TaskPackage_taskStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TaskPackage_taskStatus, encoded as an ASN.1 Element.
 */
export
function _encode_TaskPackage_taskStatus (value: TaskPackage_taskStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TaskPackage_taskStatus) { _cached_encoder_for_TaskPackage_taskStatus = $._encodeInteger; }
    return _cached_encoder_for_TaskPackage_taskStatus(value, elGetter);
}


/* eslint-enable */
