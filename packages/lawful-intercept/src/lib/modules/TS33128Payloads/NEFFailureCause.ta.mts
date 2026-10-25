/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     contextNotFound(3),
 *     portNotFree(4),
 *     portNotAssociatedWithSpecifiedApplication(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NEFFailureCause {
    userUnknown = 1,
    niddConfigurationNotAvailable = 2,
    contextNotFound = 3,
    portNotFree = 4,
    portNotAssociatedWithSpecifiedApplication = 5,
}

/**
 * @summary NEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     contextNotFound(3),
 *     portNotFree(4),
 *     portNotAssociatedWithSpecifiedApplication(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NEFFailureCause = _enum_for_NEFFailureCause;

/**
 * @summary NEFFailureCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFFailureCause  ::=  ENUMERATED
 * {
 *     userUnknown(1),
 *     niddConfigurationNotAvailable(2),
 *     contextNotFound(3),
 *     portNotFree(4),
 *     portNotAssociatedWithSpecifiedApplication(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NEFFailureCause = _enum_for_NEFFailureCause;

/**
 * @summary NEFFailureCause_userUnknown
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_userUnknown = NEFFailureCause.userUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userUnknown
 * @constant
 * @type {number}
 */
export
const userUnknown = NEFFailureCause.userUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_niddConfigurationNotAvailable
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_niddConfigurationNotAvailable = NEFFailureCause.niddConfigurationNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary niddConfigurationNotAvailable
 * @constant
 * @type {number}
 */
export
const niddConfigurationNotAvailable = NEFFailureCause.niddConfigurationNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_contextNotFound
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_contextNotFound = NEFFailureCause.contextNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contextNotFound
 * @constant
 * @type {number}
 */
export
const contextNotFound = NEFFailureCause.contextNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_portNotFree
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_portNotFree = NEFFailureCause.portNotFree; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portNotFree
 * @constant
 * @type {number}
 */
export
const portNotFree = NEFFailureCause.portNotFree; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NEFFailureCause_portNotAssociatedWithSpecifiedApplication
 * @constant
 * @type {number}
 */
export
const NEFFailureCause_portNotAssociatedWithSpecifiedApplication = NEFFailureCause.portNotAssociatedWithSpecifiedApplication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary portNotAssociatedWithSpecifiedApplication
 * @constant
 * @type {number}
 */
export
const portNotAssociatedWithSpecifiedApplication = NEFFailureCause.portNotAssociatedWithSpecifiedApplication; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NEFFailureCause: $.ASN1Decoder<NEFFailureCause> = $._decodeEnumerated;
export const _encode_NEFFailureCause: $.ASN1Encoder<NEFFailureCause> = $._encodeEnumerated;


/* eslint-enable */
