/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScheduledCommunicationType
 * @description
 * 
 * Indicates that the Scheduled Communication Type is Downlink only or Uplink
 * only or Bi-directional.
 *
 * 3GPP TS 33.128, clause 7.7.5.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates that the Scheduled Communication Type is Downlink only or Uplink
 * only or Bi-directional.
 *
 * 3GPP TS 33.128, clause 7.7.5.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates that the Scheduled Communication Type is Downlink only or Uplink
 * only or Bi-directional.
 *
 * 3GPP TS 33.128, clause 7.7.5.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
export const _decode_ScheduledCommunicationType: $.ASN1Decoder<ScheduledCommunicationType> = $._decodeEnumerated;
export const _encode_ScheduledCommunicationType: $.ASN1Encoder<ScheduledCommunicationType> = $._encodeEnumerated;


/* eslint-enable */
