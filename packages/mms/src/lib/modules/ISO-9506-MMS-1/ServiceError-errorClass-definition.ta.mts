/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary ServiceError_errorClass_definition
 * @description
 * 
 * Error Class DEFINITION: problems with object definitions. ISO 9506-1:2003
 * §24.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-definition ::= INTEGER {
 *     other (0),
 *     object-undefined (1),
 *     invalid-address (2),
 *     type-unsupported (3),
 *     type-inconsistent (4),
 *     object-exists (5),
 *     object-attribute-inconsistent (6)
 * } (0..6)
 * ```
 */
export
type ServiceError_errorClass_definition = INTEGER;

/**
 * @summary ServiceError_errorClass_definition_other
 * @description
 *
 * Reason other than those identified for DEFINITION. ISO 9506-1:2003 §24.2.3.7.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_other: 0 = 0 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_other
 * @description
 *
 * Reason other than those identified for DEFINITION. ISO 9506-1:2003 §24.2.3.7.
 *
 * @constant
 * @type {number}
 */
export
const other: 0 = ServiceError_errorClass_definition_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_undefined
 * @description
 *
 * No object with the desired name exists. ISO 9506-1:2003 §24.2.3.1.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_undefined: 1 = 1 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_undefined
 * @description
 *
 * No object with the desired name exists. ISO 9506-1:2003 §24.2.3.1.
 *
 * @constant
 * @type {number}
 */
export
const object_undefined: 1 = ServiceError_errorClass_definition_object_undefined; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_invalid_address
 * @description
 *
 * Unnamed variables only, and only if `vadr` is selected: address format is
 * incorrect or out of range. ISO 9506-1:2003 §24.2.3.2.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_invalid_address: 2 = 2 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_invalid_address
 * @description
 *
 * Unnamed variables only, and only if `vadr` is selected: address format is
 * incorrect or out of range. ISO 9506-1:2003 §24.2.3.2.
 *
 * @constant
 * @type {number}
 */
export
const invalid_address: 2 = ServiceError_errorClass_definition_invalid_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_unsupported
 * @description
 *
 * An inappropriate or unsupported type was specified for a variable.
 * ISO 9506-1:2003 §24.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_type_unsupported: 3 = 3 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_unsupported
 * @description
 *
 * An inappropriate or unsupported type was specified for a variable.
 * ISO 9506-1:2003 §24.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const type_unsupported: 3 = ServiceError_errorClass_definition_type_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_inconsistent
 * @description
 *
 * A type is inconsistent with the service or referenced object. ISO 9506-1:2003
 * §24.2.3.4.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_type_inconsistent: 4 = 4 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_type_inconsistent
 * @description
 *
 * A type is inconsistent with the service or referenced object. ISO 9506-1:2003
 * §24.2.3.4.
 *
 * @constant
 * @type {number}
 */
export
const type_inconsistent: 4 = ServiceError_errorClass_definition_type_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_exists
 * @description
 *
 * The defined object already exists. ISO 9506-1:2003 §24.2.3.5.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_exists: 5 = 5 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_exists
 * @description
 *
 * The defined object already exists. ISO 9506-1:2003 §24.2.3.5.
 *
 * @constant
 * @type {number}
 */
export
const object_exists: 5 = ServiceError_errorClass_definition_object_exists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_attribute_inconsistent
 * @description
 *
 * The object is specified with inconsistent attributes. ISO 9506-1:2003
 * §24.2.3.6.
 *
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_definition_object_attribute_inconsistent: 6 = 6 satisfies ServiceError_errorClass_definition; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_definition_object_attribute_inconsistent
 * @description
 *
 * The object is specified with inconsistent attributes. ISO 9506-1:2003
 * §24.2.3.6.
 *
 * @constant
 * @type {number}
 */
export
const object_attribute_inconsistent: 6 = ServiceError_errorClass_definition_object_attribute_inconsistent; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_definition: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_ServiceError_errorClass_definition: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
