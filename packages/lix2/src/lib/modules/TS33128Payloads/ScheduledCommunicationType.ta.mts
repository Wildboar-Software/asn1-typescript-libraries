/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScheduledCommunicationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScheduledCommunicationType  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     bidirectional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ScheduledCommunicationType {
    downlinkOnly = 1,
    uplinkOnly = 2,
    bidirectional = 3,
}

/**
 * @summary ScheduledCommunicationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScheduledCommunicationType  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     bidirectional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ScheduledCommunicationType = _enum_for_ScheduledCommunicationType;

/**
 * @summary ScheduledCommunicationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScheduledCommunicationType  ::=  ENUMERATED
 * {
 *     downlinkOnly(1),
 *     uplinkOnly(2),
 *     bidirectional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ScheduledCommunicationType = _enum_for_ScheduledCommunicationType;

/**
 * @summary ScheduledCommunicationType_downlinkOnly
 * @constant
 * @type {number}
 */
export
const ScheduledCommunicationType_downlinkOnly: ScheduledCommunicationType = ScheduledCommunicationType.downlinkOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlinkOnly
 * @constant
 * @type {number}
 */
export
const downlinkOnly: ScheduledCommunicationType = ScheduledCommunicationType.downlinkOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScheduledCommunicationType_uplinkOnly
 * @constant
 * @type {number}
 */
export
const ScheduledCommunicationType_uplinkOnly: ScheduledCommunicationType = ScheduledCommunicationType.uplinkOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uplinkOnly
 * @constant
 * @type {number}
 */
export
const uplinkOnly: ScheduledCommunicationType = ScheduledCommunicationType.uplinkOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScheduledCommunicationType_bidirectional
 * @constant
 * @type {number}
 */
export
const ScheduledCommunicationType_bidirectional: ScheduledCommunicationType = ScheduledCommunicationType.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export
const bidirectional: ScheduledCommunicationType = ScheduledCommunicationType.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ScheduledCommunicationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ScheduledCommunicationType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ScheduledCommunicationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScheduledCommunicationType, encoded as an ASN.1 Element.
 */
export const _encode_ScheduledCommunicationType = $._encodeEnumerated;


/* eslint-enable */
