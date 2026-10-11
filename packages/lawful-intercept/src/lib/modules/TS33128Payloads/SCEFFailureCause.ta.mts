/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SCEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     invalidEPSBearer(3),
 *     operationNotAllowed(4),
 *     portNotFree(5),
 *     portNotAssociatedWithSpecifiedApplication(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SCEFFailureCause {
    userUnknown = 1,
    niddConfigurationNotAvailable = 2,
    invalidEPSBearer = 3,
    operationNotAllowed = 4,
    portNotFree = 5,
    portNotAssociatedWithSpecifiedApplication = 6,
}

/**
 * @summary SCEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     invalidEPSBearer(3),
 *     operationNotAllowed(4),
 *     portNotFree(5),
 *     portNotAssociatedWithSpecifiedApplication(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SCEFFailureCause = _enum_for_SCEFFailureCause;

/**
 * @summary SCEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     invalidEPSBearer(3),
 *     operationNotAllowed(4),
 *     portNotFree(5),
 *     portNotAssociatedWithSpecifiedApplication(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SCEFFailureCause = _enum_for_SCEFFailureCause;

/**
 * @summary SCEFFailureCause_userUnknown
 * @constant
 * @type {number}
 */
export
const SCEFFailureCause_userUnknown: SCEFFailureCause = SCEFFailureCause.userUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userUnknown
 * @constant
 * @type {number}
 */
export
const userUnknown: SCEFFailureCause = SCEFFailureCause.userUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFFailureCause_niddConfigurationNotAvailable
 * @constant
 * @type {number}
 */
export
const SCEFFailureCause_niddConfigurationNotAvailable: SCEFFailureCause = SCEFFailureCause.niddConfigurationNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary niddConfigurationNotAvailable
 * @constant
 * @type {number}
 */
export
const niddConfigurationNotAvailable: SCEFFailureCause = SCEFFailureCause.niddConfigurationNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFFailureCause_invalidEPSBearer
 * @constant
 * @type {number}
 */
export
const SCEFFailureCause_invalidEPSBearer: SCEFFailureCause = SCEFFailureCause.invalidEPSBearer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidEPSBearer
 * @constant
 * @type {number}
 */
export
const invalidEPSBearer: SCEFFailureCause = SCEFFailureCause.invalidEPSBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFFailureCause_operationNotAllowed
 * @constant
 * @type {number}
 */
export
const SCEFFailureCause_operationNotAllowed: SCEFFailureCause = SCEFFailureCause.operationNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationNotAllowed
 * @constant
 * @type {number}
 */
export
const operationNotAllowed: SCEFFailureCause = SCEFFailureCause.operationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFFailureCause_portNotFree
 * @constant
 * @type {number}
 */
export
const SCEFFailureCause_portNotFree: SCEFFailureCause = SCEFFailureCause.portNotFree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portNotFree
 * @constant
 * @type {number}
 */
export
const portNotFree: SCEFFailureCause = SCEFFailureCause.portNotFree; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SCEFFailureCause_portNotAssociatedWithSpecifiedApplication
 * @constant
 * @type {number}
 */
export
const SCEFFailureCause_portNotAssociatedWithSpecifiedApplication: SCEFFailureCause = SCEFFailureCause.portNotAssociatedWithSpecifiedApplication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portNotAssociatedWithSpecifiedApplication
 * @constant
 * @type {number}
 */
export
const portNotAssociatedWithSpecifiedApplication: SCEFFailureCause = SCEFFailureCause.portNotAssociatedWithSpecifiedApplication; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_SCEFFailureCause: $.ASN1Decoder<SCEFFailureCause> = $._decodeEnumerated;

export const _encode_SCEFFailureCause: $.ASN1Encoder<SCEFFailureCause> = $._encodeEnumerated;

/* eslint-enable */
