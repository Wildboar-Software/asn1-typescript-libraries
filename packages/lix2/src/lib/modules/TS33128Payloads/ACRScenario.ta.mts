/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const ACRScenario_eECInitiated: ACRScenario = ACRScenario.eECInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECInitiated
 * @constant
 * @type {number}
 */
export
const eECInitiated: ACRScenario = ACRScenario.eECInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaSourceEES: ACRScenario = ACRScenario.eECExecutedViaSourceEES; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaSourceEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaSourceEES: ACRScenario = ACRScenario.eECExecutedViaSourceEES; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const ACRScenario_eECExecutedViaTargetEES: ACRScenario = ACRScenario.eECExecutedViaTargetEES; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eECExecutedViaTargetEES
 * @constant
 * @type {number}
 */
export
const eECExecutedViaTargetEES: ACRScenario = ACRScenario.eECExecutedViaTargetEES; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEASDecided
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEASDecided: ACRScenario = ACRScenario.sourceEASDecided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEASDecided
 * @constant
 * @type {number}
 */
export
const sourceEASDecided: ACRScenario = ACRScenario.sourceEASDecided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const ACRScenario_sourceEESExecuted: ACRScenario = ACRScenario.sourceEESExecuted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sourceEESExecuted
 * @constant
 * @type {number}
 */
export
const sourceEESExecuted: ACRScenario = ACRScenario.sourceEESExecuted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACRScenario_eELManagedACR
 * @constant
 * @type {number}
 */
export
const ACRScenario_eELManagedACR: ACRScenario = ACRScenario.eELManagedACR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eELManagedACR
 * @constant
 * @type {number}
 */
export
const eELManagedACR: ACRScenario = ACRScenario.eELManagedACR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ACRScenario
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ACRScenario = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ACRScenario into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACRScenario, encoded as an ASN.1 Element.
 */
export const _encode_ACRScenario = $._encodeEnumerated;


/* eslint-enable */
