/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const FlowDirection_downlinkOnly: FlowDirection = FlowDirection.downlinkOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlinkOnly
 * @constant
 * @type {number}
 */
export
const downlinkOnly: FlowDirection = FlowDirection.downlinkOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_uplinkOnly
 * @constant
 * @type {number}
 */
export
const FlowDirection_uplinkOnly: FlowDirection = FlowDirection.uplinkOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uplinkOnly
 * @constant
 * @type {number}
 */
export
const uplinkOnly: FlowDirection = FlowDirection.uplinkOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FlowDirection_dowlinkAndUplink
 * @constant
 * @type {number}
 */
export
const FlowDirection_dowlinkAndUplink: FlowDirection = FlowDirection.dowlinkAndUplink; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dowlinkAndUplink
 * @constant
 * @type {number}
 */
export
const dowlinkAndUplink: FlowDirection = FlowDirection.dowlinkAndUplink; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FlowDirection: $.ASN1Decoder<FlowDirection> = $._decodeEnumerated;
export const _encode_FlowDirection: $.ASN1Encoder<FlowDirection> = $._encodeEnumerated;


/* eslint-enable */
