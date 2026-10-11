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
const PTCTBPriorityLevel = _enum_for_PTCTBPriorityLevel;

/**
 * @summary PTCTBPriorityLevel_preEmptive
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_preEmptive: PTCTBPriorityLevel = PTCTBPriorityLevel.preEmptive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEmptive
 * @constant
 * @type {number}
 */
export
const preEmptive: PTCTBPriorityLevel = PTCTBPriorityLevel.preEmptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_highPriority
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_highPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.highPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary highPriority
 * @constant
 * @type {number}
 */
export
const highPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.highPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_normalPriority
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_normalPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.normalPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalPriority
 * @constant
 * @type {number}
 */
export
const normalPriority: PTCTBPriorityLevel = PTCTBPriorityLevel.normalPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCTBPriorityLevel_listenOnly
 * @constant
 * @type {number}
 */
export
const PTCTBPriorityLevel_listenOnly: PTCTBPriorityLevel = PTCTBPriorityLevel.listenOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary listenOnly
 * @constant
 * @type {number}
 */
export
const listenOnly: PTCTBPriorityLevel = PTCTBPriorityLevel.listenOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PTCTBPriorityLevel: $.ASN1Decoder<PTCTBPriorityLevel> = $._decodeEnumerated;

export const _encode_PTCTBPriorityLevel: $.ASN1Encoder<PTCTBPriorityLevel> = $._encodeEnumerated;

/* eslint-enable */
