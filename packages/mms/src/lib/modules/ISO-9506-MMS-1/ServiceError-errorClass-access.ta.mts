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
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_other: ServiceError_errorClass_access = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_access = ServiceError_errorClass_access_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_unsupported
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_access_unsupported: ServiceError_errorClass_access = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_unsupported
 * @constant
 * @type {number}
 */
export
const object_access_unsupported: ServiceError_errorClass_access = ServiceError_errorClass_access_object_access_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_non_existent
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_non_existent: ServiceError_errorClass_access = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_non_existent
 * @constant
 * @type {number}
 */
export
const object_non_existent: ServiceError_errorClass_access = ServiceError_errorClass_access_object_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_denied
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_access_denied: ServiceError_errorClass_access = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_access_denied
 * @constant
 * @type {number}
 */
export
const object_access_denied: ServiceError_errorClass_access = ServiceError_errorClass_access_object_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_invalidated
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_access_object_invalidated: ServiceError_errorClass_access = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_access_object_invalidated
 * @constant
 * @type {number}
 */
export
const object_invalidated: ServiceError_errorClass_access = ServiceError_errorClass_access_object_invalidated; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_access = $._decodeInteger;
export const _encode_ServiceError_errorClass_access = $._encodeInteger;


/* eslint-enable */
