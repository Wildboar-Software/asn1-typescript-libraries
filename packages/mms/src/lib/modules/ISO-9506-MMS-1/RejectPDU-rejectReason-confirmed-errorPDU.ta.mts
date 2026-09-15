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
 * @summary RejectPDU_rejectReason_confirmed_errorPDU
 * @description
 *
 * Reject codes when the rejected PDU is a Confirmed-ErrorPDU (ISO 9506-1:2003
 * §8.6.1.4.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-confirmed-errorPDU ::= INTEGER {
 *     other (0),
 *     unrecognized-service (1),
 *     invalid-invokeID (2),
 *     invalid-serviceError (3),
 *     value-out-of-range (4)
 * } (0..4)
 * ```
 */
export
type RejectPDU_rejectReason_confirmed_errorPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.3.1).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_other: RejectPDU_rejectReason_confirmed_errorPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_other
 * @description
 *
 * Error other than those identified for this PDU type (ISO 9506-1:2003
 * §8.6.1.4.3.1).
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service
 * @description
 *
 * Service not supported, not recognized, or not the service requested with this
 * invoke ID (ISO 9506-1:2003 §8.6.1.4.3.2).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service: RejectPDU_rejectReason_confirmed_errorPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service
 * @description
 *
 * Service not supported, not recognized, or not the service requested with this
 * invoke ID (ISO 9506-1:2003 §8.6.1.4.3.2).
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID
 * @description
 *
 * Invoke ID invalid, or no confirmed service was requested with it
 * (ISO 9506-1:2003 §8.6.1.4.3.3).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID: RejectPDU_rejectReason_confirmed_errorPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID
 * @description
 *
 * Invoke ID invalid, or no confirmed service was requested with it
 * (ISO 9506-1:2003 §8.6.1.4.3.3).
 * @constant
 * @type {number}
 */
export
const invalid_invokeID: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_invalid_invokeID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError
 * @description
 *
 * Service error does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.3.4).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError: RejectPDU_rejectReason_confirmed_errorPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError
 * @description
 *
 * Service error does not meet ISO 9506-1 requirements (ISO 9506-1:2003
 * §8.6.1.4.3.4).
 * @constant
 * @type {number}
 */
export
const invalid_serviceError: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_invalid_serviceError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.3.5).
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range: RejectPDU_rejectReason_confirmed_errorPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range
 * @description
 *
 * One or more parameter values exceed the allowed range (ISO 9506-1:2003
 * §8.6.1.4.3.5).
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_confirmed_errorPDU = RejectPDU_rejectReason_confirmed_errorPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_confirmed_errorPDU = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_confirmed_errorPDU = $._encodeInteger;


/* eslint-enable */
