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
 * @summary DataAccessError
 * @description
 *
 * Reason an attempted variable access failed. Does not
 * mean the service request failed: OBJECT-INVALIDATED
 * means a Named Variable List mapping is no longer valid;
 * other values are V-Get/V-Put failure.
 * ISO 9506-1:2003 §14.4.3. ISO 9506-2:2003 §14.4.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataAccessError  ::=  INTEGER {
 *    object-invalidated            (0),
 *    hardware-fault                (1),
 *    temporarily-unavailable       (2),
 *    object-access-denied          (3),
 *    object-undefined              (4),
 *    invalid-address               (5),
 *    type-unsupported              (6),
 *    type-inconsistent             (7),
 *    object-attribute-inconsistent (8),
 *    object-access-unsupported     (9),
 *    object-non-existent           (10),
 *    object-value-invalid          (11)
 * } (0..11)
 * ```
 */
export
type DataAccessError = INTEGER;

/**
 * @summary DataAccessError_object_invalidated
 * @description
 *
 * Defined object has an undefined reference attribute.
 * Permanent error for access attempts to that object.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_invalidated: DataAccessError = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_invalidated
 * @description
 *
 * Defined object has an undefined reference attribute.
 * Permanent error for access attempts to that object.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const object_invalidated: DataAccessError = DataAccessError_object_invalidated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_hardware_fault
 * @description
 *
 * Access failed due to a hardware fault.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_hardware_fault: DataAccessError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_hardware_fault
 * @description
 *
 * Access failed due to a hardware fault.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const hardware_fault: DataAccessError = DataAccessError_hardware_fault; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_temporarily_unavailable
 * @description
 *
 * Variable is temporarily unavailable for this access.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_temporarily_unavailable: DataAccessError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_temporarily_unavailable
 * @description
 *
 * Variable is temporarily unavailable for this access.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const temporarily_unavailable: DataAccessError = DataAccessError_temporarily_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_denied
 * @description
 *
 * Client has insufficient privilege (Access Control List
 * READ/WRITE). ISO 9506-1:2003 §14.4.3, §14.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_access_denied: DataAccessError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_denied
 * @description
 *
 * Client has insufficient privilege (Access Control List
 * READ/WRITE). ISO 9506-1:2003 §14.4.3, §14.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const object_access_denied: DataAccessError = DataAccessError_object_access_denied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_undefined
 * @description
 *
 * No object exists with the desired name.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_undefined: DataAccessError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_undefined
 * @description
 *
 * No object exists with the desired name.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const object_undefined: DataAccessError = DataAccessError_object_undefined; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_invalid_address
 * @description
 *
 * Unnamed Variable address format is incorrect or out of
 * range. ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_invalid_address: DataAccessError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_invalid_address
 * @description
 *
 * Unnamed Variable address format is incorrect or out of
 * range. ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const invalid_address: DataAccessError = DataAccessError_invalid_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_unsupported
 * @description
 *
 * Inappropriate or unsupported type for a variable.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_type_unsupported: DataAccessError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_unsupported
 * @description
 *
 * Inappropriate or unsupported type for a variable.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const type_unsupported: DataAccessError = DataAccessError_type_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_inconsistent
 * @description
 *
 * Specified type is inconsistent with the service or
 * referenced object. ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_type_inconsistent: DataAccessError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_type_inconsistent
 * @description
 *
 * Specified type is inconsistent with the service or
 * referenced object. ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const type_inconsistent: DataAccessError = DataAccessError_type_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_attribute_inconsistent
 * @description
 *
 * Object is specified with inconsistent attributes.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_attribute_inconsistent: DataAccessError = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_attribute_inconsistent
 * @description
 *
 * Object is specified with inconsistent attributes.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const object_attribute_inconsistent: DataAccessError = DataAccessError_object_attribute_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_unsupported
 * @description
 *
 * Variable is not defined to allow the requested access.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_access_unsupported: DataAccessError = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_access_unsupported
 * @description
 *
 * Variable is not defined to allow the requested access.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const object_access_unsupported: DataAccessError = DataAccessError_object_access_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_non_existent
 * @description
 *
 * The variable is nonexistent.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_non_existent: DataAccessError = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_non_existent
 * @description
 *
 * The variable is nonexistent.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const object_non_existent: DataAccessError = DataAccessError_object_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_value_invalid
 * @description
 *
 * Proposed value is not in the set of allowable values.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const DataAccessError_object_value_invalid: DataAccessError = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataAccessError_object_value_invalid
 * @description
 *
 * Proposed value is not in the set of allowable values.
 * ISO 9506-1:2003 §14.4.3.
 *
 * @constant
 * @type {number}
 */
export
const object_value_invalid: DataAccessError = DataAccessError_object_value_invalid; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DataAccessError = $._decodeInteger;
export const _encode_DataAccessError = $._encodeInteger;


/* eslint-enable */
