/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications(0), directoryOperation(1), distributedOperation(2),
 *   dSAOperation(3)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}

/**
 * @summary AttributeUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications(0), directoryOperation(1), distributedOperation(2),
 *   dSAOperation(3)}
 * ```
 * 
 * @enum {number}
 */
export
type AttributeUsage = _enum_for_AttributeUsage;

/**
 * @summary AttributeUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications(0), directoryOperation(1), distributedOperation(2),
 *   dSAOperation(3)}
 * ```
 * 
 * @enum {number}
 */
export
const AttributeUsage = _enum_for_AttributeUsage;

/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export
const AttributeUsage_userApplications: AttributeUsage = AttributeUsage.userApplications; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export
const userApplications: AttributeUsage = AttributeUsage.userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_directoryOperation: AttributeUsage = AttributeUsage.directoryOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export
const directoryOperation: AttributeUsage = AttributeUsage.directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_distributedOperation: AttributeUsage = AttributeUsage.distributedOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export
const distributedOperation: AttributeUsage = AttributeUsage.distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_dSAOperation: AttributeUsage = AttributeUsage.dSAOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export
const dSAOperation: AttributeUsage = AttributeUsage.dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AttributeUsage: $.ASN1Decoder<AttributeUsage> = $._decodeEnumerated;

export
const _encode_AttributeUsage: $.ASN1Encoder<AttributeUsage> = $._encodeEnumerated;

/* eslint-enable */
