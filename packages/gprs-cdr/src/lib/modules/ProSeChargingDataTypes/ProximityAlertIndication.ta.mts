/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProximityAlertIndication
 * @description
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
 * @constant
 * @type {number}
 */
export
const ProximityAlertIndication_alerted: ProximityAlertIndication = ProximityAlertIndication.alerted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alerted
 * @constant
 * @type {number}
 */
export
const alerted: ProximityAlertIndication = ProximityAlertIndication.alerted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProximityAlertIndication_noAlert
 * @constant
 * @type {number}
 */
export
const ProximityAlertIndication_noAlert: ProximityAlertIndication = ProximityAlertIndication.noAlert; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAlert
 * @constant
 * @type {number}
 */
export
const noAlert: ProximityAlertIndication = ProximityAlertIndication.noAlert; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProximityAlertIndication: $.ASN1Decoder<ProximityAlertIndication> = $._decodeEnumerated;

export
const _encode_ProximityAlertIndication: $.ASN1Encoder<ProximityAlertIndication> = $._encodeEnumerated;

/* eslint-enable */
