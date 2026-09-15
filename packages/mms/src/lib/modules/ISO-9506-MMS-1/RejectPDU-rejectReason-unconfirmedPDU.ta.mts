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
 * @summary RejectPDU_rejectReason_unconfirmedPDU
 * @description
 *
 * Reject codes when the rejected PDU is an Unconfirmed-PDU (ISO 9506-1:2003
 * §8.6.1.4.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-unconfirmedPDU ::= INTEGER {
 *     other (0),
 *     unrecognized-service (1),
 *     invalid-argument (2),
 *     max-recursion-exceeded (3),
 *     value-out-of-range (4)
 * } (0..4)
 * ```
 */
export
type RejectPDU_rejectReason_unconfirmedPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.4.1).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_other: RejectPDU_rejectReason_unconfirmedPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.4.1).
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service
 * @description
 *
 * Service not supported or not recognized (ISO 9506-1:2003 §8.6.1.4.4.2).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service: RejectPDU_rejectReason_unconfirmedPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service
 * @description
 *
 * Service not supported or not recognized (ISO 9506-1:2003 §8.6.1.4.4.2).
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_invalid_argument
 * @description
 *
 * Service argument does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.4.3).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_invalid_argument: RejectPDU_rejectReason_unconfirmedPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_invalid_argument
 * @description
 *
 * Service argument does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.4.3).
 * @constant
 * @type {number}
 */
export
const invalid_argument: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded
 * @description
 *
 * PDU exceeds negotiated data-structure nesting (ISO 9506-1:2003 §8.6.1.4.4.4).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded: RejectPDU_rejectReason_unconfirmedPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded
 * @description
 *
 * PDU exceeds negotiated data-structure nesting (ISO 9506-1:2003 §8.6.1.4.4.4).
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.4.5).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range: RejectPDU_rejectReason_unconfirmedPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.4.5).
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_unconfirmedPDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_unconfirmedPDU = $._encodeInteger;


/* eslint-enable */
