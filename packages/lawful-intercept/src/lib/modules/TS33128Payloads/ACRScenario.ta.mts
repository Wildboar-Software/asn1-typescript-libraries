/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACRScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenario  ::=  ENUMERATED
 * {
 *     eECInitiated(1),
 *     eECExecutedViaSourceEES(2),
 *     eECExecutedViaTargetEES(3),
 *     sourceEASDecided(4),
 *     sourceEESExecuted(5),
 *     eELManagedACR(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACRScenario {
    eECInitiated = 1,
    eECExecutedViaSourceEES = 2,
    eECExecutedViaTargetEES = 3,
    sourceEASDecided = 4,
    sourceEESExecuted = 5,
    eELManagedACR = 6,
}

/**
 * @summary ACRScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenario  ::=  ENUMERATED
 * {
 *     eECInitiated(1),
 *     eECExecutedViaSourceEES(2),
 *     eECExecutedViaTargetEES(3),
 *     sourceEASDecided(4),
 *     sourceEESExecuted(5),
 *     eELManagedACR(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ACRScenario = _enum_for_ACRScenario;

/**
 * @summary ACRScenario
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACRScenario  ::=  ENUMERATED
 * {
 *     eECInitiated(1),
 *     eECExecutedViaSourceEES(2),
 *     eECExecutedViaTargetEES(3),
 *     sourceEASDecided(4),
 *     sourceEESExecuted(5),
 *     eELManagedACR(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ACRScenario = _enum_for_ACRScenario;

/**
 * @summary ACRScenario_eECInitiated
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECInitiated = ACRScenario.eECInitiated satisfies ACRScenario; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECInitiated
 * @constant
 * @type {number}
 */
export
const eECInitiated = ACRScenario.eECInitiated satisfies ACRScenario; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaSourceEES = ACRScenario.eECExecutedViaSourceEES satisfies ACRScenario; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaSourceEES = ACRScenario.eECExecutedViaSourceEES satisfies ACRScenario; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaTargetEES = ACRScenario.eECExecutedViaTargetEES satisfies ACRScenario; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaTargetEES = ACRScenario.eECExecutedViaTargetEES satisfies ACRScenario; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEASDecided
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEASDecided = ACRScenario.sourceEASDecided satisfies ACRScenario; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEASDecided
 * @constant
 * @type {number}
 */
export
const sourceEASDecided = ACRScenario.sourceEASDecided satisfies ACRScenario; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEESExecuted = ACRScenario.sourceEESExecuted satisfies ACRScenario; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const sourceEESExecuted = ACRScenario.sourceEESExecuted satisfies ACRScenario; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eELManagedACR
 * @constant
 * @type {number}
 */
export
const ACRScenario_eELManagedACR = ACRScenario.eELManagedACR satisfies ACRScenario; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eELManagedACR
 * @constant
 * @type {number}
 */
export
const eELManagedACR = ACRScenario.eELManagedACR satisfies ACRScenario; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ACRScenario: $.ASN1Decoder<ACRScenario> = $._decodeEnumerated;
export const _encode_ACRScenario: $.ASN1Encoder<ACRScenario> = $._encodeEnumerated;


/* eslint-enable */
