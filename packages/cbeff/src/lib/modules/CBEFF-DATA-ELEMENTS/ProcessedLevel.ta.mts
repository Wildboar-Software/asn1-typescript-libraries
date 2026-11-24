/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProcessedLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {
 *    noValueAvailable     (0),
 *    raw                  (1),
 *    intermediate         (2),
 *    processed            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_ProcessedLevel: {
    readonly noValueAvailable: 0;
    readonly raw: 1;
    readonly intermediate: 2;
    readonly processed: 3;
} = {
    noValueAvailable: 0,
    raw: 1,
    intermediate: 2,
    processed: 3,
};

export
type _enum_for_ProcessedLevel = ENUMERATED;

/**
 * @summary ProcessedLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {
 *    noValueAvailable     (0),
 *    raw                  (1),
 *    intermediate         (2),
 *    processed            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProcessedLevel = _enum_for_ProcessedLevel;

/**
 * @summary ProcessedLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {
 *    noValueAvailable     (0),
 *    raw                  (1),
 *    intermediate         (2),
 *    processed            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ProcessedLevel: typeof _enum_for_ProcessedLevel = _enum_for_ProcessedLevel;

/**
 * @summary ProcessedLevel_noValueAvailable
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_noValueAvailable: number = ProcessedLevel.noValueAvailable satisfies ProcessedLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noValueAvailable
 * @constant
 * @type {number}
 */
export
const noValueAvailable: number = ProcessedLevel_noValueAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_raw
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_raw: number = ProcessedLevel.raw satisfies ProcessedLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary raw
 * @constant
 * @type {number}
 */
export
const raw: number = ProcessedLevel_raw; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_intermediate
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_intermediate: number = ProcessedLevel.intermediate satisfies ProcessedLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediate
 * @constant
 * @type {number}
 */
export
const intermediate: number = ProcessedLevel_intermediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_processed
 * @constant
 * @type {number}
 */
export
const ProcessedLevel_processed: number = ProcessedLevel.processed satisfies ProcessedLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary processed
 * @constant
 * @type {number}
 */
export
const processed: number = ProcessedLevel_processed; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProcessedLevel: $.ASN1Decoder<ProcessedLevel> = $._decodeEnumerated;

export
const _encode_ProcessedLevel: $.ASN1Encoder<ProcessedLevel> = $._encodeEnumerated;

/* eslint-enable */
