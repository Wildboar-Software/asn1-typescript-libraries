/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_AttributeUsage: {
    readonly userApplications: 0;
    readonly directoryOperation: 1;
    readonly distributedOperation: 2;
    readonly dSAOperation: 3;
} = {
    userApplications: 0,
    directoryOperation: 1,
    distributedOperation: 2,
    dSAOperation: 3,
};

export
type _enum_for_AttributeUsage = ENUMERATED;

/**
 * @summary AttributeUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;

/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export
const AttributeUsage_userApplications: number = 0 satisfies AttributeUsage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export
const userApplications: number = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_directoryOperation: number = 1 satisfies AttributeUsage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export
const directoryOperation: number = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_distributedOperation: number = 2 satisfies AttributeUsage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export
const distributedOperation: number = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_dSAOperation: number = 3 satisfies AttributeUsage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export
const dSAOperation: number = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AttributeUsage: $.ASN1Decoder<AttributeUsage> = $._decodeEnumerated;

export
const _encode_AttributeUsage: $.ASN1Encoder<AttributeUsage> = $._encodeEnumerated;

/* eslint-enable */
