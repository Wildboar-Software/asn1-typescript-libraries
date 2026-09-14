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
 * @summary RejectPDU_rejectReason_confirmed_requestPDU
 * @description
 *
 * Reject codes when the rejected PDU is a Confirmed-RequestPDU (ISO 9506-1:2003
 * §8.6.1.4.1). Value 7 is reserved.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-confirmed-requestPDU ::= INTEGER {
 *     other (0),
 *     unrecognized-service (1),
 *     unrecognized-modifier (2),
 *     invalid-invokeID (3),
 *     invalid-argument (4),
 *     invalid-modifier (5),
 *     max-serv-outstanding-exceeded (6),
 *     -- Value 7 reserved for further definition
 *     max-recursion-exceeded (8),
 *     value-out-of-range (9)
 * } (0..9)
 * ```
 */
export
type RejectPDU_rejectReason_confirmed_requestPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.1.1).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_other: RejectPDU_rejectReason_confirmed_requestPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.1.1).
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service
 * @description
 *
 * Service not supported or not recognized (ISO 9506-1:2003 §8.6.1.4.1.2).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service: RejectPDU_rejectReason_confirmed_requestPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service
 * @description
 *
 * Service not supported or not recognized (ISO 9506-1:2003 §8.6.1.4.1.2).
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier
 * @description
 *
 * Modifier not supported or not recognized (ISO 9506-1:2003 §8.6.1.4.1.3).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier: RejectPDU_rejectReason_confirmed_requestPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier
 * @description
 *
 * Modifier not supported or not recognized (ISO 9506-1:2003 §8.6.1.4.1.3).
 * @constant
 * @type {number}
 */
export
const unrecognized_modifier: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_unrecognized_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID
 * @description
 *
 * Invoke ID does not meet ISO 9506 requirements (ISO 9506-1:2003 §8.6.1.4.1.4).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_requestPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID
 * @description
 *
 * Invoke ID does not meet ISO 9506 requirements (ISO 9506-1:2003 §8.6.1.4.1.4).
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument
 * @description
 *
 * Service argument does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.1.5).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument: RejectPDU_rejectReason_confirmed_requestPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument
 * @description
 *
 * Service argument does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.1.5).
 * @constant
 * @type {number}
 */
export
const invalid_argument: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier
 * @description
 *
 * Modifier does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.1.6).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier: RejectPDU_rejectReason_confirmed_requestPDU = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier
 * @description
 *
 * Modifier does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.1.6).
 * @constant
 * @type {number}
 */
export
const invalid_modifier: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_invalid_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded
 * @description
 *
 * Negotiated maximum outstanding confirmed services exceeded (ISO 9506-1:2003
 * §8.6.1.4.1.7).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded
 * @description
 *
 * Negotiated maximum outstanding confirmed services exceeded (ISO 9506-1:2003
 * §8.6.1.4.1.7).
 * @constant
 * @type {number}
 */
export
const max_serv_outstanding_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_max_serv_outstanding_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded
 * @description
 *
 * PDU exceeds negotiated data-structure nesting (ISO 9506-1:2003 §8.6.1.4.1.8).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded
 * @description
 *
 * PDU exceeds negotiated data-structure nesting (ISO 9506-1:2003 §8.6.1.4.1.8).
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.1.9).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range: RejectPDU_rejectReason_confirmed_requestPDU = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.1.9).
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_requestPDU = RejectPDU_rejectReason_confirmed_requestPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_confirmed_requestPDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_confirmed_requestPDU = $._encodeInteger;


/* eslint-enable */
