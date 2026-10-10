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

/**
 * @summary Decodes an ASN.1 element into a(n) FlowDirection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FlowDirection = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FlowDirection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FlowDirection, encoded as an ASN.1 Element.
 */
export const _encode_FlowDirection = $._encodeEnumerated;


/* eslint-enable */
