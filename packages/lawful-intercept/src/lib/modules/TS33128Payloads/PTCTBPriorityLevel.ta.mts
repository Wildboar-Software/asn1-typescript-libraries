/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCTBPriorityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBPriorityLevel   ::=  ENUMERATED
 * {
 *     preEmptive(1),
 *     highPriority(2),
 *     normalPriority(3),
 *     listenOnly(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCTBPriorityLevel {
    preEmptive = 1,
    highPriority = 2,
    normalPriority = 3,
    listenOnly = 4,
}

/**
 * @summary PTCTBPriorityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBPriorityLevel   ::=  ENUMERATED
 * {
 *     preEmptive(1),
 *     highPriority(2),
 *     normalPriority(3),
 *     listenOnly(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCTBPriorityLevel = _enum_for_PTCTBPriorityLevel;

/**
 * @summary PTCTBPriorityLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTBPriorityLevel   ::=  ENUMERATED
 * {
 *     preEmptive(1),
 *     highPriority(2),
 *     normalPriority(3),
 *     listenOnly(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCTBPriorityLevel: typeof _enum_for_PTCTBPriorityLevel = _enum_for_PTCTBPriorityLevel;

/**
 * @summary PTCTBPriorityLevel_preEmptive
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_preEmptive: _enum_for_PTCTBPriorityLevel.preEmptive = PTCTBPriorityLevel.preEmptive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEmptive
 * @constant
 * @type {number}
 */
export
const preEmptive: _enum_for_PTCTBPriorityLevel.preEmptive = PTCTBPriorityLevel.preEmptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_highPriority
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_highPriority: _enum_for_PTCTBPriorityLevel.highPriority = PTCTBPriorityLevel.highPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highPriority
 * @constant
 * @type {number}
 */
export
const highPriority: _enum_for_PTCTBPriorityLevel.highPriority = PTCTBPriorityLevel.highPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_normalPriority
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_normalPriority: _enum_for_PTCTBPriorityLevel.normalPriority = PTCTBPriorityLevel.normalPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalPriority
 * @constant
 * @type {number}
 */
export
const normalPriority: _enum_for_PTCTBPriorityLevel.normalPriority = PTCTBPriorityLevel.normalPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_listenOnly
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_listenOnly: _enum_for_PTCTBPriorityLevel.listenOnly = PTCTBPriorityLevel.listenOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenOnly
 * @constant
 * @type {number}
 */
export
const listenOnly: _enum_for_PTCTBPriorityLevel.listenOnly = PTCTBPriorityLevel.listenOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCTBPriorityLevel: $.ASN1Decoder<PTCTBPriorityLevel> = $._decodeEnumerated;
export const _encode_PTCTBPriorityLevel: $.ASN1Encoder<PTCTBPriorityLevel> = $._encodeEnumerated;


/* eslint-enable */
