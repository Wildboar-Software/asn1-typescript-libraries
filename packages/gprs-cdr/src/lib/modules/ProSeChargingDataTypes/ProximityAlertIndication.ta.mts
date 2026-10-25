/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProximityAlertIndication
 * @description
 *
 * Whether a proximity alert was sent before the EPC-level proximity request was
 * cancelled. The PF-ED-CDR records this when a Proximity Request Cancellation
 * closes the CDR.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityAlertIndication  ::=  ENUMERATED {
 *    alerted     ( 0 ),
 *    noAlert     ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProximityAlertIndication {
    alerted = 0,
    noAlert = 1,
}

/**
 * @summary ProximityAlertIndication
 * @description
 *
 * Whether a proximity alert was sent before the EPC-level proximity request was
 * cancelled. The PF-ED-CDR records this when a Proximity Request Cancellation
 * closes the CDR.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityAlertIndication  ::=  ENUMERATED {
 *    alerted     ( 0 ),
 *    noAlert     ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProximityAlertIndication = _enum_for_ProximityAlertIndication;

/**
 * @summary ProximityAlertIndication
 * @description
 *
 * Whether a proximity alert was sent before the EPC-level proximity request was
 * cancelled. The PF-ED-CDR records this when a Proximity Request Cancellation
 * closes the CDR.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProximityAlertIndication  ::=  ENUMERATED {
 *    alerted     ( 0 ),
 *    noAlert     ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProximityAlertIndication = _enum_for_ProximityAlertIndication;

/**
 * @summary ProximityAlertIndication_alerted
 * @description
 *
 * A proximity alert was sent before the proximity request was cancelled. The
 * alert tells the UEs that they are in proximity.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ProximityAlertIndication_alerted = ProximityAlertIndication.alerted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alerted
 * @description
 *
 * Proximity alert was sent. See `ProximityAlertIndication_alerted`.
 *
 * @constant
 * @type {number}
 */
export
const alerted = ProximityAlertIndication.alerted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProximityAlertIndication_noAlert
 * @description
 *
 * No proximity alert was sent before the proximity request was cancelled.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ProximityAlertIndication_noAlert = ProximityAlertIndication.noAlert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAlert
 * @description
 *
 * No proximity alert was sent. See `ProximityAlertIndication_noAlert`.
 *
 * @constant
 * @type {number}
 */
export
const noAlert = ProximityAlertIndication.noAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProximityAlertIndication: $.ASN1Decoder<ProximityAlertIndication> = $._decodeEnumerated;

export
const _encode_ProximityAlertIndication: $.ASN1Encoder<ProximityAlertIndication> = $._encodeEnumerated;

/* eslint-enable */
