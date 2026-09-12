/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Semaphore_instance_definition_details_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Semaphore-instance-definition-details-class ::= ENUMERATED {
 *     token,
 *     pool
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Semaphore_instance_definition_details_class {
    token = 0,
    pool = 1,
}

/**
 * @summary Semaphore_instance_definition_details_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Semaphore-instance-definition-details-class ::= ENUMERATED {
 *     token,
 *     pool
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Semaphore_instance_definition_details_class = _enum_for_Semaphore_instance_definition_details_class;

/**
 * @summary Semaphore_instance_definition_details_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Semaphore-instance-definition-details-class ::= ENUMERATED {
 *     token,
 *     pool
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Semaphore_instance_definition_details_class = _enum_for_Semaphore_instance_definition_details_class;

/**
 * @summary Semaphore_instance_definition_details_class_token
 * @constant
 * @type {number}
 */
export
const Semaphore_instance_definition_details_class_token: Semaphore_instance_definition_details_class = Semaphore_instance_definition_details_class.token; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary token
 * @constant
 * @type {number}
 */
export
const token: Semaphore_instance_definition_details_class = Semaphore_instance_definition_details_class.token; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Semaphore_instance_definition_details_class_pool
 * @constant
 * @type {number}
 */
export
const Semaphore_instance_definition_details_class_pool: Semaphore_instance_definition_details_class = Semaphore_instance_definition_details_class.pool; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pool
 * @constant
 * @type {number}
 */
export
const pool: Semaphore_instance_definition_details_class = Semaphore_instance_definition_details_class.pool; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Semaphore_instance_definition_details_class = $._decodeEnumerated;
export const _encode_Semaphore_instance_definition_details_class = $._encodeEnumerated;


/* eslint-enable */
