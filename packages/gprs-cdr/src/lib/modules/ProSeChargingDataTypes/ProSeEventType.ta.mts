/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeEventType
 * @description
 *
 * The ProSe charging event that caused this message. The open values are Model
 * A Direct Discovery: announcing, monitoring, and match report. The restricted
 * values cover restricted announcing, monitoring, and match report, and Model B
 * restricted discovery request and discovery reporting.
 *
 * A Monitoring UE sends a Match Report when a received ProSe Application Code
 * matches a discovery filter and the UE does not already have the ProSe
 * Application ID for that code stored locally.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1, 5.2.1.2, 5.2.2.1.1, and 6.1.3.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.16.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventType  ::=  ENUMERATED {
 *    openAnnouncing                  ( 0 ),
 *    openMonitoring                  ( 1 ),
 *    openMatchReport                 ( 2 ),
 *    restrictedAnnouncing            ( 3 ),
 *    restrictedMonitoring            ( 4 ),
 *    restrictedMatchReport           ( 5 ),
 *    restrictedDiscoveryRequest      ( 6 ),
 *    restrictedDiscoveryReporting    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProSeEventType {
    openAnnouncing = 0,
    openMonitoring = 1,
    openMatchReport = 2,
    restrictedAnnouncing = 3,
    restrictedMonitoring = 4,
    restrictedMatchReport = 5,
    restrictedDiscoveryRequest = 6,
    restrictedDiscoveryReporting = 7,
}

/**
 * @summary ProSeEventType
 * @description
 *
 * The ProSe charging event that caused this message. The open values are Model
 * A Direct Discovery: announcing, monitoring, and match report. The restricted
 * values cover restricted announcing, monitoring, and match report, and Model B
 * restricted discovery request and discovery reporting.
 *
 * A Monitoring UE sends a Match Report when a received ProSe Application Code
 * matches a discovery filter and the UE does not already have the ProSe
 * Application ID for that code stored locally.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1, 5.2.1.2, 5.2.2.1.1, and 6.1.3.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.16.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventType  ::=  ENUMERATED {
 *    openAnnouncing                  ( 0 ),
 *    openMonitoring                  ( 1 ),
 *    openMatchReport                 ( 2 ),
 *    restrictedAnnouncing            ( 3 ),
 *    restrictedMonitoring            ( 4 ),
 *    restrictedMatchReport           ( 5 ),
 *    restrictedDiscoveryRequest      ( 6 ),
 *    restrictedDiscoveryReporting    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeEventType = _enum_for_ProSeEventType;

/**
 * @summary ProSeEventType
 * @description
 *
 * The ProSe charging event that caused this message. The open values are Model
 * A Direct Discovery: announcing, monitoring, and match report. The restricted
 * values cover restricted announcing, monitoring, and match report, and Model B
 * restricted discovery request and discovery reporting.
 *
 * A Monitoring UE sends a Match Report when a received ProSe Application Code
 * matches a discovery filter and the UE does not already have the ProSe
 * Application ID for that code stored locally.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1, 5.2.1.2, 5.2.2.1.1, and 6.1.3.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.16.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeEventType  ::=  ENUMERATED {
 *    openAnnouncing                  ( 0 ),
 *    openMonitoring                  ( 1 ),
 *    openMatchReport                 ( 2 ),
 *    restrictedAnnouncing            ( 3 ),
 *    restrictedMonitoring            ( 4 ),
 *    restrictedMatchReport           ( 5 ),
 *    restrictedDiscoveryRequest      ( 6 ),
 *    restrictedDiscoveryReporting    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProSeEventType = _enum_for_ProSeEventType;

/**
 * @summary ProSeEventType_openAnnouncing
 * @description
 *
 * Open Direct Discovery Model A announce. A PF-DD-CDR is generated when an
 * Announce Request is received by the Announcing UE's HPLMN ProSe Function, by
 * the VPLMN ProSe Function when roaming, or by the other PLMN's ProSe Function
 * for inter-PLMN transmission.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_openAnnouncing: ProSeEventType = ProSeEventType.openAnnouncing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary openAnnouncing
 * @description
 *
 * Open announcing. See `ProSeEventType_openAnnouncing`.
 *
 * @constant
 * @type {number}
 */
export
const openAnnouncing: ProSeEventType = ProSeEventType.openAnnouncing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_openMonitoring
 * @description
 *
 * Open Direct Discovery Model A monitor. A PF-DD-CDR is generated when a
 * Monitor Request is received by the Monitoring UE's HPLMN ProSe Function, or
 * by the ProSe Function of the PLMN that provides the Discovery Filter.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_openMonitoring: ProSeEventType = ProSeEventType.openMonitoring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary openMonitoring
 * @description
 *
 * Open monitoring. See `ProSeEventType_openMonitoring`.
 *
 * @constant
 * @type {number}
 */
export
const openMonitoring: ProSeEventType = ProSeEventType.openMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_openMatchReport
 * @description
 *
 * Open Direct Discovery match report. A PF-DD-CDR is generated for a Match
 * Report Request at the Monitoring UE's HPLMN ProSe Function and at the
 * Announcing UE's HPLMN ProSe Function, and for Match Report Info at the
 * Announcing UE's VPLMN ProSe Function when roaming.
 *
 * 3GPP TS 32.277 V19.2.0 clause 5.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_openMatchReport: ProSeEventType = ProSeEventType.openMatchReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary openMatchReport
 * @description
 *
 * Open match report. See `ProSeEventType_openMatchReport`.
 *
 * @constant
 * @type {number}
 */
export
const openMatchReport: ProSeEventType = ProSeEventType.openMatchReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedAnnouncing
 * @description
 *
 * Restricted Direct Discovery announce. The same Announce Request chargeable
 * events as open announcing apply.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1 and 5.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedAnnouncing: ProSeEventType = ProSeEventType.restrictedAnnouncing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedAnnouncing
 * @description
 *
 * Restricted announcing. See `ProSeEventType_restrictedAnnouncing`.
 *
 * @constant
 * @type {number}
 */
export
const restrictedAnnouncing: ProSeEventType = ProSeEventType.restrictedAnnouncing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedMonitoring
 * @description
 *
 * Restricted Direct Discovery monitor. The same Monitor Request chargeable
 * events as open monitoring apply.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1 and 5.2.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedMonitoring: ProSeEventType = ProSeEventType.restrictedMonitoring; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedMonitoring
 * @description
 *
 * Restricted monitoring. See `ProSeEventType_restrictedMonitoring`.
 *
 * @constant
 * @type {number}
 */
export
const restrictedMonitoring: ProSeEventType = ProSeEventType.restrictedMonitoring; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedMatchReport
 * @description
 *
 * Restricted Direct Discovery match report.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.2 and 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedMatchReport: ProSeEventType = ProSeEventType.restrictedMatchReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedMatchReport
 * @description
 *
 * Restricted match report. See `ProSeEventType_restrictedMatchReport`.
 *
 * @constant
 * @type {number}
 */
export
const restrictedMatchReport: ProSeEventType = ProSeEventType.restrictedMatchReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedDiscoveryRequest
 * @description
 *
 * Model B restricted discovery request. The Discoveree UE or the Discoverer UE
 * sends it to be authorised for discovery resources. A PF-DD-CDR is generated
 * for a discovery query at the Discoverer UE's HPLMN, VPLMN, or other PLMN, and
 * for a discovery response at the Discoveree UE's HPLMN, VPLMN, or other PLMN.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.2 and 5.2.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedDiscoveryRequest: ProSeEventType = ProSeEventType.restrictedDiscoveryRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedDiscoveryRequest
 * @description
 *
 * Model B restricted discovery request. See
 * `ProSeEventType_restrictedDiscoveryRequest`.
 *
 * @constant
 * @type {number}
 */
export
const restrictedDiscoveryRequest: ProSeEventType = ProSeEventType.restrictedDiscoveryRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeEventType_restrictedDiscoveryReporting
 * @description
 *
 * Model B restricted discovery reporting. A PF-DD-CDR is generated when the
 * Discoverer UE's HPLMN ProSe Function receives the Match Report Request.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.2 and 5.2.2.1.6.
 *
 * @constant
 * @type {number}
 */
export
const ProSeEventType_restrictedDiscoveryReporting: ProSeEventType = ProSeEventType.restrictedDiscoveryReporting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedDiscoveryReporting
 * @description
 *
 * Model B discovery reporting. See
 * `ProSeEventType_restrictedDiscoveryReporting`.
 *
 * @constant
 * @type {number}
 */
export
const restrictedDiscoveryReporting: ProSeEventType = ProSeEventType.restrictedDiscoveryReporting; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeEventType: $.ASN1Decoder<ProSeEventType> = $._decodeEnumerated;

export
const _encode_ProSeEventType: $.ASN1Encoder<ProSeEventType> = $._encodeEnumerated;

/* eslint-enable */
