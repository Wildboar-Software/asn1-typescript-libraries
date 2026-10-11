/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DPIOperationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DPIOperationType  ::=  ENUMERATED
 * {
 *     createDynamicPolicy(1),
 *     retrieveDynamicPolicy(2),
 *     updateDynamicPolicy(3),
 *     patchDynamicPolicy(4),
 *     destroyDynamicPolicy(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DPIOperationType {
    createDynamicPolicy = 1,
    retrieveDynamicPolicy = 2,
    updateDynamicPolicy = 3,
    patchDynamicPolicy = 4,
    destroyDynamicPolicy = 5,
}

/**
 * @summary DPIOperationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DPIOperationType  ::=  ENUMERATED
 * {
 *     createDynamicPolicy(1),
 *     retrieveDynamicPolicy(2),
 *     updateDynamicPolicy(3),
 *     patchDynamicPolicy(4),
 *     destroyDynamicPolicy(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DPIOperationType = _enum_for_DPIOperationType;

/**
 * @summary DPIOperationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DPIOperationType  ::=  ENUMERATED
 * {
 *     createDynamicPolicy(1),
 *     retrieveDynamicPolicy(2),
 *     updateDynamicPolicy(3),
 *     patchDynamicPolicy(4),
 *     destroyDynamicPolicy(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DPIOperationType = _enum_for_DPIOperationType;

/**
 * @summary DPIOperationType_createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_createDynamicPolicy: DPIOperationType = DPIOperationType.createDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const createDynamicPolicy: DPIOperationType = DPIOperationType.createDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_retrieveDynamicPolicy: DPIOperationType = DPIOperationType.retrieveDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const retrieveDynamicPolicy: DPIOperationType = DPIOperationType.retrieveDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_updateDynamicPolicy: DPIOperationType = DPIOperationType.updateDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const updateDynamicPolicy: DPIOperationType = DPIOperationType.updateDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_patchDynamicPolicy: DPIOperationType = DPIOperationType.patchDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const patchDynamicPolicy: DPIOperationType = DPIOperationType.patchDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_destroyDynamicPolicy: DPIOperationType = DPIOperationType.destroyDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const destroyDynamicPolicy: DPIOperationType = DPIOperationType.destroyDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_DPIOperationType: $.ASN1Decoder<DPIOperationType> = $._decodeEnumerated;

export const _encode_DPIOperationType: $.ASN1Encoder<DPIOperationType> = $._encodeEnumerated;


/* eslint-enable */
