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
 * @summary ServiceError_errorClass_access
 * @description
 * 
 * Error Class ACCESS: the requested service on an object was incorrectly
 * specified, or access was denied. Used when an Access Condition fails
 * (OBJECT-ACCESS-DENIED). ISO 9506-1:2003 §9.1.3, §24.2.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-access ::= INTEGER {
 *     other (0),
 *     object-access-unsupported (1),
 *     object-non-existent (2),
 *     object-access-denied (3),
 *     object-invalidated (4)
 * } (0..4)
 * ```
 */
export
type ServiceError_errorClass_access = INTEGER;

/**
 * @summary ServiceError_errorClass_access_other
 * @description
 *
 * Reason other than those identified for ACCESS. ISO 9506-1:2003 §24.2.8.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_other: ServiceError_errorClass_access = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_other
 * @description
 *
 * Reason other than those identified for ACCESS. ISO 9506-1:2003 §24.2.8.5.
 *
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_access = ServiceError_errorClass_access_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_unsupported
 * @description
 *
 * The object is not defined to allow the requested access. ISO 9506-1:2003
 * §24.2.8.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_access_unsupported: ServiceError_errorClass_access = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_unsupported
 * @description
 *
 * The object is not defined to allow the requested access. ISO 9506-1:2003
 * §24.2.8.1.
 *
 * @constant
 * @type {number}
 */
export
const object_access_unsupported: ServiceError_errorClass_access = ServiceError_errorClass_access_object_access_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_non_existent
 * @description
 *
 * The object is non-existent. ISO 9506-1:2003 §24.2.8.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_non_existent: ServiceError_errorClass_access = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_non_existent
 * @description
 *
 * The object is non-existent. ISO 9506-1:2003 §24.2.8.2.
 *
 * @constant
 * @type {number}
 */
export
const object_non_existent: ServiceError_errorClass_access = ServiceError_errorClass_access_object_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_denied
 * @description
 *
 * The MMS client has insufficient privilege. Also returned when an Access
 * Condition evaluation fails (ISO 9506-1:2003 §9.1.3). ISO 9506-1:2003
 * §24.2.8.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_access_denied: ServiceError_errorClass_access = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_denied
 * @description
 *
 * The MMS client has insufficient privilege. Also returned when an Access
 * Condition evaluation fails (ISO 9506-1:2003 §9.1.3). ISO 9506-1:2003
 * §24.2.8.3.
 *
 * @constant
 * @type {number}
 */
export
const object_access_denied: ServiceError_errorClass_access = ServiceError_errorClass_access_object_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_invalidated
 * @description
 *
 * Access references a defined object that has an undefined reference attribute.
 * Permanent error for that object. ISO 9506-1:2003 §24.2.8.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_invalidated: ServiceError_errorClass_access = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_invalidated
 * @description
 *
 * Access references a defined object that has an undefined reference attribute.
 * Permanent error for that object. ISO 9506-1:2003 §24.2.8.4.
 *
 * @constant
 * @type {number}
 */
export
const object_invalidated: ServiceError_errorClass_access = ServiceError_errorClass_access_object_invalidated; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_access = $._decodeInteger;
export const _encode_ServiceError_errorClass_access = $._encodeInteger;


/* eslint-enable */
