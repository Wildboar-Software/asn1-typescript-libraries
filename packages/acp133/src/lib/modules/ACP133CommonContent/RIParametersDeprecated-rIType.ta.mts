/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RIParametersDeprecated_rIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED {
 *     normal(0),
 *     off-line(1),
 *     partTimeTerminal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RIParametersDeprecated_rIType {
    normal = 0,
    off_line = 1,
    partTimeTerminal = 2,
}

/**
 * @summary RIParametersDeprecated_rIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED {
 *     normal(0),
 *     off-line(1),
 *     partTimeTerminal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RIParametersDeprecated_rIType = _enum_for_RIParametersDeprecated_rIType;

/**
 * @summary RIParametersDeprecated_rIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParametersDeprecated-rIType ::= ENUMERATED {
 *     normal(0),
 *     off-line(1),
 *     partTimeTerminal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RIParametersDeprecated_rIType = _enum_for_RIParametersDeprecated_rIType;

/**
 * @summary RIParametersDeprecated_rIType_normal
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_normal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RIParametersDeprecated_rIType_off_line
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_off_line: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.off_line; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary off_line
 * @constant
 * @type {number}
 */
export
const off_line: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.off_line; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RIParametersDeprecated_rIType_partTimeTerminal
 * @constant
 * @type {number}
 */
export
const RIParametersDeprecated_rIType_partTimeTerminal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.partTimeTerminal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary partTimeTerminal
 * @constant
 * @type {number}
 */
export
const partTimeTerminal: RIParametersDeprecated_rIType = RIParametersDeprecated_rIType.partTimeTerminal; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RIParametersDeprecated_rIType = $._decodeEnumerated;
export const _encode_RIParametersDeprecated_rIType = $._encodeEnumerated;


/* eslint-enable */
