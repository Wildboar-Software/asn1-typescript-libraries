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
const ACRScenario: typeof _enum_for_ACRScenario = _enum_for_ACRScenario;

/**
 * @summary ACRScenario_eECInitiated
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECInitiated: _enum_for_ACRScenario.eECInitiated = ACRScenario.eECInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECInitiated
 * @constant
 * @type {number}
 */
export
const eECInitiated: _enum_for_ACRScenario.eECInitiated = ACRScenario.eECInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaSourceEES: _enum_for_ACRScenario.eECExecutedViaSourceEES = ACRScenario.eECExecutedViaSourceEES; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaSourceEES: _enum_for_ACRScenario.eECExecutedViaSourceEES = ACRScenario.eECExecutedViaSourceEES; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaTargetEES: _enum_for_ACRScenario.eECExecutedViaTargetEES = ACRScenario.eECExecutedViaTargetEES; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaTargetEES: _enum_for_ACRScenario.eECExecutedViaTargetEES = ACRScenario.eECExecutedViaTargetEES; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEASDecided
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEASDecided: _enum_for_ACRScenario.sourceEASDecided = ACRScenario.sourceEASDecided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEASDecided
 * @constant
 * @type {number}
 */
export
const sourceEASDecided: _enum_for_ACRScenario.sourceEASDecided = ACRScenario.sourceEASDecided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEESExecuted: _enum_for_ACRScenario.sourceEESExecuted = ACRScenario.sourceEESExecuted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const sourceEESExecuted: _enum_for_ACRScenario.sourceEESExecuted = ACRScenario.sourceEESExecuted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eELManagedACR
 * @constant
 * @type {number}
 */
export
const ACRScenario_eELManagedACR: _enum_for_ACRScenario.eELManagedACR = ACRScenario.eELManagedACR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eELManagedACR
 * @constant
 * @type {number}
 */
export
const eELManagedACR: _enum_for_ACRScenario.eELManagedACR = ACRScenario.eELManagedACR; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ACRScenario: $.ASN1Decoder<ACRScenario> = $._decodeEnumerated;
export const _encode_ACRScenario: $.ASN1Encoder<ACRScenario> = $._encodeEnumerated;


/* eslint-enable */
