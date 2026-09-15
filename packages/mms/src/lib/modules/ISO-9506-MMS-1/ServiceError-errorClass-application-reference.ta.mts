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
 * @summary ServiceError_errorClass_application_reference
 * @description
 * 
 * Error Class APPLICATION-REFERENCE: may be returned for associations other
 * than those between the MMS client and server. ISO 9506-1:2003 §24.2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-application-reference ::= INTEGER {
 *     other (0),
 *     application-unreachable (1),
 *     connection-lost (2),
 *     application-reference-invalid (3),
 *     context-unsupported (4)
 * } (0..4)
 * ```
 */
export
type ServiceError_errorClass_application_reference = INTEGER;

/**
 * @summary ServiceError_errorClass_application_reference_other
 * @description
 *
 * Reason other than those identified for APPLICATION-REFERENCE. ISO 9506-1:2003
 * §24.2.2.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_other: ServiceError_errorClass_application_reference = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_other
 * @description
 *
 * Reason other than those identified for APPLICATION-REFERENCE. ISO 9506-1:2003
 * §24.2.2.5.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_unreachable
 * @description
 *
 * The referenced application is currently unreachable. ISO 9506-1:2003
 * §24.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_application_unreachable: ServiceError_errorClass_application_reference = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_unreachable
 * @description
 *
 * The referenced application is currently unreachable. ISO 9506-1:2003
 * §24.2.2.1.
 *
 * @constant
 * @type {number}
 */
export
const application_unreachable: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_application_unreachable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_connection_lost
 * @description
 *
 * The connection to the specified application was lost before the service could
 * complete. ISO 9506-1:2003 §24.2.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_connection_lost: ServiceError_errorClass_application_reference = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_connection_lost
 * @description
 *
 * The connection to the specified application was lost before the service could
 * complete. ISO 9506-1:2003 §24.2.2.2.
 *
 * @constant
 * @type {number}
 */
export
const connection_lost: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_connection_lost; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_reference_invalid
 * @description
 *
 * The application reference is invalid. ISO 9506-1:2003 §24.2.2.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_application_reference_invalid: ServiceError_errorClass_application_reference = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_application_reference_invalid
 * @description
 *
 * The application reference is invalid. ISO 9506-1:2003 §24.2.2.3.
 *
 * @constant
 * @type {number}
 */
export
const application_reference_invalid: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_application_reference_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_context_unsupported
 * @description
 *
 * The referenced application does not support the desired application context.
 * ISO 9506-1:2003 §24.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_application_reference_context_unsupported: ServiceError_errorClass_application_reference = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_application_reference_context_unsupported
 * @description
 *
 * The referenced application does not support the desired application context.
 * ISO 9506-1:2003 §24.2.2.4.
 *
 * @constant
 * @type {number}
 */
export
const context_unsupported: ServiceError_errorClass_application_reference = ServiceError_errorClass_application_reference_context_unsupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_application_reference = $._decodeInteger;
export const _encode_ServiceError_errorClass_application_reference = $._encodeInteger;


/* eslint-enable */
