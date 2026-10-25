/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     dowlinkAndUplink(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FlowDirection {
    downlinkOnly = 1,
    uplinkOnly = 2,
    dowlinkAndUplink = 3,
}

/**
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     dowlinkAndUplink(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FlowDirection = _enum_for_FlowDirection;

/**
 * @summary FlowDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FlowDirection  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     dowlinkAndUplink(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FlowDirection = _enum_for_FlowDirection;

/**
 * @summary FlowDirection_downlinkOnly
 * @constant
 * @type {number}
 */
export
const FlowDirection_downlinkOnly = FlowDirection.downlinkOnly satisfies FlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlinkOnly
 * @constant
 * @type {number}
 */
export
const downlinkOnly = FlowDirection.downlinkOnly satisfies FlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_uplinkOnly
 * @constant
 * @type {number}
 */
export
const FlowDirection_uplinkOnly = FlowDirection.uplinkOnly satisfies FlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uplinkOnly
 * @constant
 * @type {number}
 */
export
const uplinkOnly = FlowDirection.uplinkOnly satisfies FlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_dowlinkAndUplink
 * @constant
 * @type {number}
 */
export
const FlowDirection_dowlinkAndUplink = FlowDirection.dowlinkAndUplink satisfies FlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dowlinkAndUplink
 * @constant
 * @type {number}
 */
export
const dowlinkAndUplink = FlowDirection.dowlinkAndUplink satisfies FlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FlowDirection: $.ASN1Decoder<FlowDirection> = $._decodeEnumerated;
export const _encode_FlowDirection: $.ASN1Encoder<FlowDirection> = $._encodeEnumerated;


/* eslint-enable */
