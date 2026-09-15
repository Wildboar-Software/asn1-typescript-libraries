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
 * Reject codes when the rejected PDU is a Confirmed-ResponsePDU
 * (ISO 9506-1:2003 §8.6.1.4.2). Value 4 is reserved.
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
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.2.1).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_other: RejectPDU_rejectReason_confirmed_responsePDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.2.1).
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service
 * @description
 *
 * Service not supported, not recognized, or not the service requested with this
 * invoke ID (ISO 9506-1:2003 §8.6.1.4.2.2).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service: RejectPDU_rejectReason_confirmed_responsePDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service
 * @description
 *
 * Service not supported, not recognized, or not the service requested with this
 * invoke ID (ISO 9506-1:2003 §8.6.1.4.2.2).
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID
 * @description
 *
 * Invoke ID invalid, or no confirmed service was requested with it
 * (ISO 9506-1:2003 §8.6.1.4.2.3).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_responsePDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID
 * @description
 *
 * Invoke ID invalid, or no confirmed service was requested with it
 * (ISO 9506-1:2003 §8.6.1.4.2.3).
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_result
 * @description
 *
 * Service result does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.2.4).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_invalid_result: RejectPDU_rejectReason_confirmed_responsePDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_invalid_result
 * @description
 *
 * Service result does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.2.4).
 * @constant
 * @type {number}
 */
export
const invalid_result: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_invalid_result; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded
 * @description
 *
 * PDU exceeds negotiated data-structure nesting (ISO 9506-1:2003 §8.6.1.4.2.5).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded: RejectPDU_rejectReason_confirmed_responsePDU = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded
 * @description
 *
 * PDU exceeds negotiated data-structure nesting (ISO 9506-1:2003 §8.6.1.4.2.5).
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.2.6).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range: RejectPDU_rejectReason_confirmed_responsePDU = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.2.6).
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_responsePDU = RejectPDU_rejectReason_confirmed_responsePDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_confirmed_responsePDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_confirmed_responsePDU = $._encodeInteger;


/* eslint-enable */
