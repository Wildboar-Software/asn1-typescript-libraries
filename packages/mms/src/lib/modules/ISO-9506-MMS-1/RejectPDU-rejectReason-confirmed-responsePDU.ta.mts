/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-confirmed-responsePDU ::= INTEGER {
 *     other (0),
 *     unrecognized-service (1),
 *     invalid-invokeID (2),
 *     invalid-result (3),
 *     -- Value 4 reserved for further definition
 *     max-recursion-exceeded (5),
 *     value-out-of-range (6)
 * } (0..6)
 * ```
 */
export
type RejectPDU_rejectReason_confirmed_responsePDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_other: RejectPDU_rejectReason_confirmed_responsePDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service: RejectPDU_rejectReason_confirmed_responsePDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_responsePDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_result
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_invalid_result: RejectPDU_rejectReason_confirmed_responsePDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_result
 * @constant
 * @type {number}
 */
export
const invalid_result: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_invalid_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded: RejectPDU_rejectReason_confirmed_responsePDU = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range: RejectPDU_rejectReason_confirmed_responsePDU = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_confirmed_responsePDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_confirmed_responsePDU = $._encodeInteger;


/* eslint-enable */
