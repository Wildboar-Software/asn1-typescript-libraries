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
 * @summary ServiceError_errorClass_service
 * @description
 * 
 * Error Class SERVICE: problems with service primitives. Value 3 is reserved.
 * ISO 9506-1:2003 §24.2.5; ISO 9506-2:2003 §7.4.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-service ::= INTEGER {
 *     other (0),
 *     primitives-out-of-sequence (1),
 *     object-state-conflict (2),
 *     -- Value 3 reserved for further definition
 *     continuation-invalid (4),
 *     object-constraint-conflict (5)
 * } (0..5)
 * ```
 */
export
type ServiceError_errorClass_service = INTEGER;

/**
 * @summary ServiceError_errorClass_service_other
 * @description
 *
 * Reason other than those identified for SERVICE. ISO 9506-1:2003 §24.2.5.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_other: ServiceError_errorClass_service = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_other
 * @description
 *
 * Reason other than those identified for SERVICE. ISO 9506-1:2003 §24.2.5.5.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_service = ServiceError_errorClass_service_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_primitives_out_of_sequence
 * @description
 *
 * The sequence of service primitives is invalid. ISO 9506-1:2003 §24.2.5.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_primitives_out_of_sequence: ServiceError_errorClass_service = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_primitives_out_of_sequence
 * @description
 *
 * The sequence of service primitives is invalid. ISO 9506-1:2003 §24.2.5.1.
 *
 * @constant
 * @type {number}
 */
export
const primitives_out_of_sequence: ServiceError_errorClass_service = ServiceError_errorClass_service_primitives_out_of_sequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_state_conflict
 * @description
 *
 * The current object state does not permit a response for this service request.
 * ISO 9506-1:2003 §24.2.5.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_object_state_conflict: ServiceError_errorClass_service = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_state_conflict
 * @description
 *
 * The current object state does not permit a response for this service request.
 * ISO 9506-1:2003 §24.2.5.2.
 *
 * @constant
 * @type {number}
 */
export
const object_state_conflict: ServiceError_errorClass_service = ServiceError_errorClass_service_object_state_conflict; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_continuation_invalid
 * @description
 *
 * The file name to continue after could not be a member of the group specified
 * by the file specification. ISO 9506-1:2003 §24.2.5.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_continuation_invalid: ServiceError_errorClass_service = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_continuation_invalid
 * @description
 *
 * The file name to continue after could not be a member of the group specified
 * by the file specification. ISO 9506-1:2003 §24.2.5.3.
 *
 * @constant
 * @type {number}
 */
export
const continuation_invalid: ServiceError_errorClass_service = ServiceError_errorClass_service_continuation_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_constraint_conflict
 * @description
 *
 * Current constraints on an object prevent execution of the requested service.
 * ISO 9506-1:2003 §24.2.5.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_service_object_constraint_conflict: ServiceError_errorClass_service = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_service_object_constraint_conflict
 * @description
 *
 * Current constraints on an object prevent execution of the requested service.
 * ISO 9506-1:2003 §24.2.5.4.
 *
 * @constant
 * @type {number}
 */
export
const object_constraint_conflict: ServiceError_errorClass_service = ServiceError_errorClass_service_object_constraint_conflict; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_service = $._decodeInteger;
export const _encode_ServiceError_errorClass_service = $._encodeInteger;


/* eslint-enable */
