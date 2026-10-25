/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseMisc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseMisc  ::=  ENUMERATED
 * {
 *     controlProcessingOverload(1),
 *     notEnoughUserPlaneProcessingResources(2),
 *     hardwareFailure(3),
 *     oMIntervention(4),
 *     unknownPLMNOrSNPN(5),
 *     unspecified(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseMisc {
    controlProcessingOverload = 1,
    notEnoughUserPlaneProcessingResources = 2,
    hardwareFailure = 3,
    oMIntervention = 4,
    unknownPLMNOrSNPN = 5,
    unspecified = 6,
}

/**
 * @summary CauseMisc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseMisc  ::=  ENUMERATED
 * {
 *     controlProcessingOverload(1),
 *     notEnoughUserPlaneProcessingResources(2),
 *     hardwareFailure(3),
 *     oMIntervention(4),
 *     unknownPLMNOrSNPN(5),
 *     unspecified(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseMisc = _enum_for_CauseMisc;

/**
 * @summary CauseMisc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseMisc  ::=  ENUMERATED
 * {
 *     controlProcessingOverload(1),
 *     notEnoughUserPlaneProcessingResources(2),
 *     hardwareFailure(3),
 *     oMIntervention(4),
 *     unknownPLMNOrSNPN(5),
 *     unspecified(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseMisc = _enum_for_CauseMisc;

/**
 * @summary CauseMisc_controlProcessingOverload
 * @constant
 * @type {number}
 */
export
const CauseMisc_controlProcessingOverload = CauseMisc.controlProcessingOverload satisfies CauseMisc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary controlProcessingOverload
 * @constant
 * @type {number}
 */
export
const controlProcessingOverload = CauseMisc.controlProcessingOverload satisfies CauseMisc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_notEnoughUserPlaneProcessingResources
 * @constant
 * @type {number}
 */
export
const CauseMisc_notEnoughUserPlaneProcessingResources = CauseMisc.notEnoughUserPlaneProcessingResources satisfies CauseMisc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notEnoughUserPlaneProcessingResources
 * @constant
 * @type {number}
 */
export
const notEnoughUserPlaneProcessingResources = CauseMisc.notEnoughUserPlaneProcessingResources satisfies CauseMisc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_hardwareFailure
 * @constant
 * @type {number}
 */
export
const CauseMisc_hardwareFailure = CauseMisc.hardwareFailure satisfies CauseMisc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hardwareFailure
 * @constant
 * @type {number}
 */
export
const hardwareFailure = CauseMisc.hardwareFailure satisfies CauseMisc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_oMIntervention
 * @constant
 * @type {number}
 */
export
const CauseMisc_oMIntervention = CauseMisc.oMIntervention satisfies CauseMisc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMIntervention
 * @constant
 * @type {number}
 */
export
const oMIntervention = CauseMisc.oMIntervention satisfies CauseMisc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_unknownPLMNOrSNPN
 * @constant
 * @type {number}
 */
export
const CauseMisc_unknownPLMNOrSNPN = CauseMisc.unknownPLMNOrSNPN satisfies CauseMisc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownPLMNOrSNPN
 * @constant
 * @type {number}
 */
export
const unknownPLMNOrSNPN = CauseMisc.unknownPLMNOrSNPN satisfies CauseMisc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_unspecified
 * @constant
 * @type {number}
 */
export
const CauseMisc_unspecified = CauseMisc.unspecified satisfies CauseMisc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified = CauseMisc.unspecified satisfies CauseMisc; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseMisc: $.ASN1Decoder<CauseMisc> = $._decodeEnumerated;
export const _encode_CauseMisc: $.ASN1Encoder<CauseMisc> = $._encodeEnumerated;


/* eslint-enable */
