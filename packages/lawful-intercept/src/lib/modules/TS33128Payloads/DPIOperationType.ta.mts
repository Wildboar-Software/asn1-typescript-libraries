/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DPIOperationType
 * @description
 * 
 * Type of operation applied to the dynamic policy resource, i.e.
 * createDynamicPolicy, retrieveDynamicPolicy, updateDynamicPolicy,
 * patchDynamicPolicy, destroyDynamicPolicy.
 *
 * 3GPP TS 33.128, clause 7.15.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Type of operation applied to the dynamic policy resource, i.e.
 * createDynamicPolicy, retrieveDynamicPolicy, updateDynamicPolicy,
 * patchDynamicPolicy, destroyDynamicPolicy.
 *
 * 3GPP TS 33.128, clause 7.15.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Type of operation applied to the dynamic policy resource, i.e.
 * createDynamicPolicy, retrieveDynamicPolicy, updateDynamicPolicy,
 * patchDynamicPolicy, destroyDynamicPolicy.
 *
 * 3GPP TS 33.128, clause 7.15.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const DPIOperationType_createDynamicPolicy = DPIOperationType.createDynamicPolicy satisfies DPIOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const createDynamicPolicy = DPIOperationType.createDynamicPolicy satisfies DPIOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_retrieveDynamicPolicy = DPIOperationType.retrieveDynamicPolicy satisfies DPIOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const retrieveDynamicPolicy = DPIOperationType.retrieveDynamicPolicy satisfies DPIOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_updateDynamicPolicy = DPIOperationType.updateDynamicPolicy satisfies DPIOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const updateDynamicPolicy = DPIOperationType.updateDynamicPolicy satisfies DPIOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_patchDynamicPolicy = DPIOperationType.patchDynamicPolicy satisfies DPIOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const patchDynamicPolicy = DPIOperationType.patchDynamicPolicy satisfies DPIOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DPIOperationType_destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const DPIOperationType_destroyDynamicPolicy = DPIOperationType.destroyDynamicPolicy satisfies DPIOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const destroyDynamicPolicy = DPIOperationType.destroyDynamicPolicy satisfies DPIOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DPIOperationType: $.ASN1Decoder<DPIOperationType> = $._decodeEnumerated;
export const _encode_DPIOperationType: $.ASN1Encoder<DPIOperationType> = $._encodeEnumerated;


/* eslint-enable */
