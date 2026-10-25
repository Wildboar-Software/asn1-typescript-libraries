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
const CauseMisc: typeof _enum_for_CauseMisc = _enum_for_CauseMisc;

/**
 * @summary CauseMisc_controlProcessingOverload
 * @constant
 * @type {number}
 */
export
const CauseMisc_controlProcessingOverload: _enum_for_CauseMisc.controlProcessingOverload = CauseMisc.controlProcessingOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary controlProcessingOverload
 * @constant
 * @type {number}
 */
export
const controlProcessingOverload: _enum_for_CauseMisc.controlProcessingOverload = CauseMisc.controlProcessingOverload; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_notEnoughUserPlaneProcessingResources
 * @constant
 * @type {number}
 */
export
const CauseMisc_notEnoughUserPlaneProcessingResources: _enum_for_CauseMisc.notEnoughUserPlaneProcessingResources = CauseMisc.notEnoughUserPlaneProcessingResources; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notEnoughUserPlaneProcessingResources
 * @constant
 * @type {number}
 */
export
const notEnoughUserPlaneProcessingResources: _enum_for_CauseMisc.notEnoughUserPlaneProcessingResources = CauseMisc.notEnoughUserPlaneProcessingResources; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_hardwareFailure
 * @constant
 * @type {number}
 */
export
const CauseMisc_hardwareFailure: _enum_for_CauseMisc.hardwareFailure = CauseMisc.hardwareFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hardwareFailure
 * @constant
 * @type {number}
 */
export
const hardwareFailure: _enum_for_CauseMisc.hardwareFailure = CauseMisc.hardwareFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_oMIntervention
 * @constant
 * @type {number}
 */
export
const CauseMisc_oMIntervention: _enum_for_CauseMisc.oMIntervention = CauseMisc.oMIntervention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMIntervention
 * @constant
 * @type {number}
 */
export
const oMIntervention: _enum_for_CauseMisc.oMIntervention = CauseMisc.oMIntervention; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_unknownPLMNOrSNPN
 * @constant
 * @type {number}
 */
export
const CauseMisc_unknownPLMNOrSNPN: _enum_for_CauseMisc.unknownPLMNOrSNPN = CauseMisc.unknownPLMNOrSNPN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownPLMNOrSNPN
 * @constant
 * @type {number}
 */
export
const unknownPLMNOrSNPN: _enum_for_CauseMisc.unknownPLMNOrSNPN = CauseMisc.unknownPLMNOrSNPN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_unspecified
 * @constant
 * @type {number}
 */
export
const CauseMisc_unspecified: _enum_for_CauseMisc.unspecified = CauseMisc.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: _enum_for_CauseMisc.unspecified = CauseMisc.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CauseMisc: $.ASN1Decoder<CauseMisc> = $._decodeEnumerated;
export const _encode_CauseMisc: $.ASN1Encoder<CauseMisc> = $._encodeEnumerated;


/* eslint-enable */
