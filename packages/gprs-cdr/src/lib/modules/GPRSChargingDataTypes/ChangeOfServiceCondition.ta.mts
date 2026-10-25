/* eslint-disable */
import {
    type BOOLEAN,
    type IA5String,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ServiceConditionChange, _decode_ServiceConditionChange, _encode_ServiceConditionChange } from "../GPRSChargingDataTypes/ServiceConditionChange.ta.mjs";
import { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
import { type GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { AFRecordInformation, _decode_AFRecordInformation, _encode_AFRecordInformation } from "../GPRSChargingDataTypes/AFRecordInformation.ta.mjs";
import { EventBasedChargingInformation, _decode_EventBasedChargingInformation, _encode_EventBasedChargingInformation } from "../GPRSChargingDataTypes/EventBasedChargingInformation.ta.mjs";
import { TimeQuotaMechanism, _decode_TimeQuotaMechanism, _encode_TimeQuotaMechanism } from "../GPRSChargingDataTypes/TimeQuotaMechanism.ta.mjs";
import { ServiceSpecificInfo, _decode_ServiceSpecificInfo, _encode_ServiceSpecificInfo } from "../GPRSChargingDataTypes/ServiceSpecificInfo.ta.mjs";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { RelatedChangeOfServiceCondition, _decode_RelatedChangeOfServiceCondition, _encode_RelatedChangeOfServiceCondition } from "../GPRSChargingDataTypes/RelatedChangeOfServiceCondition.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";
import { type ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { TWANUserLocationInfo, _decode_TWANUserLocationInfo, _encode_TWANUserLocationInfo } from "../GPRSChargingDataTypes/TWANUserLocationInfo.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";


/**
 * @summary ChangeOfServiceCondition
 * @description
 *
 * One container in a List of Service Data of a PGW-CDR, TDF-CDR, or
 * IPE-CDR. It counts volume, elapsed time, and/or events for one rating
 * group, one rating group and service id, or, when sponsored connectivity
 * reporting is active, one rating group, sponsor identity, and application
 * service provider identity (clauses 5.2.1.3 and 5.2.1.9). A container
 * opens when matching traffic is detected and no active container exists,
 * and closes when the last matching service data flow or application
 * ends. Containers are also closed on bearer or session modification,
 * tariff time change, failure handling, usage limits or quota events, and
 * CDR closure (tables 5.2.3.4.1.1, 5.2.3.9.2.1, and 5.2.3.10.2.2).
 * `serviceConditionChange` is omitted when the container is added because
 * of CDR closure, except when closure is due to the maximum number of
 * charging-condition changes. Only completed time envelopes are added;
 * those triggers do not apply to envelope reporting, and an incomplete
 * envelope is carried into the next partial CDR (clause 5.2.3.4.1). Table
 * 6.1.3.3 is the field handling when charging per IP-CAN session is
 * active. Where that table only refers to TS 32.298, the field description
 * is left to that specification.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfServiceCondition ::= SEQUENCE {
 *    ratingGroup                              [1] IMPLICIT INTEGER,
 *    chargingRuleBaseName                     [2] IMPLICIT IA5String  OPTIONAL,
 *    resultCode                               [3] IMPLICIT INTEGER OPTIONAL,
 *    localSequenceNumber                      [4] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    timeOfFirstUsage                         [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfLastUsage                          [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeUsage                                [7] IMPLICIT INTEGER OPTIONAL,
 *    serviceConditionChange                   [8] IMPLICIT ServiceConditionChange,
 *    qoSInformationNeg                        [9] IMPLICIT EPCQoSInformation OPTIONAL,
 *    servingNodeAddress                       [10] GSNAddress OPTIONAL,
 *    datavolumeFBCUplink                      [12] IMPLICIT INTEGER OPTIONAL,
 *    datavolumeFBCDownlink                    [13] IMPLICIT INTEGER OPTIONAL,
 *    timeOfReport                             [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    failureHandlingContinue                  [16] IMPLICIT BOOLEAN OPTIONAL,
 *    serviceIdentifier                        [17] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    pSFurnishChargingInformation             [18] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    aFRecordInformation                      [19] IMPLICIT SEQUENCE  OF
 *       AFRecordInformation OPTIONAL,
 *    userLocationInformation                  [20] IMPLICIT OCTET STRING OPTIONAL,
 *    eventBasedChargingInformation            [21] IMPLICIT EventBasedChargingInformation OPTIONAL,
 *    timeQuotaMechanism                       [22] IMPLICIT TimeQuotaMechanism OPTIONAL,
 *    serviceSpecificInfo                      [23] IMPLICIT SEQUENCE  OF
 *       ServiceSpecificInfo OPTIONAL,
 *    threeGPP2UserLocationInformation         [24] IMPLICIT OCTET STRING OPTIONAL,
 *    sponsorIdentity                          [25] IMPLICIT OCTET STRING OPTIONAL,
 *    applicationServiceProviderIdentity       [26] IMPLICIT OCTET STRING OPTIONAL,
 *    aDCRuleBaseName                          [27] IMPLICIT IA5String  OPTIONAL,
 *    presenceReportingAreaStatus              [28] IMPLICIT PresenceReportingAreaStatus OPTIONAL,
 *    userCSGInformation                       [29] IMPLICIT UserCSGInformation OPTIONAL,
 *    rATType                                  [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    uWANUserLocationInformation              [32] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    relatedChangeOfServiceCondition          [33] IMPLICIT RelatedChangeOfServiceCondition OPTIONAL,
 *    servingPLMNRateControl                   [35] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    aPNRateControl                           [36] IMPLICIT APNRateControl OPTIONAL,
 *    threeGPPPSDataOffStatus                  [37] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    trafficSteeringPolicyIDDownlink          [38] IMPLICIT OCTET STRING OPTIONAL,
 *    trafficSteeringPolicyIDUplink            [39] IMPLICIT OCTET STRING OPTIONAL,
 *    tWANUserLocationInformation              [40] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    listOfPresenceReportingAreaInformation   [41] IMPLICIT SEQUENCE  OF
 *       PresenceReportingAreaInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfServiceCondition {
    /**
     * @summary `ratingGroup`.
     * @description
     *
     * Rating Group is the identifier of rating group. This field is mandatory.
     * The parameter corresponds to the Charging Key as specified in TS 23.203
     * [203].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category M (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly ratingGroup: INTEGER;
    /**
     * @summary `chargingRuleBaseName`.
     * @description
     *
     * Charging Rule Base Name is the reference to group of PCC rules predefined
     * at the PCEF. This field is included if any of the PCC rules, which usage
     * is reported within this service data container, was activated by using the
     * Charging Rule Base Name as specified in TS 29.212 [220]. In case multiple
     * Charging Rule Base Names activate PCC rules, which usage is reported
     * within this service data container, the P-GW/IPE-CDR shall include only
     * one occurrence to the service data container.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly chargingRuleBaseName: OPTIONAL<IA5String>;
    /**
     * @summary `resultCode`.
     * @description
     *
     * Result Code contains the result code after the interconnection with the
     * OCS. This field may be added to the service data container if online and
     * offline charging are both used for same rating group. The result code in
     * service data container is the value of the Result-Code AVP received within
     * last CCA message in corresponding MSCC AVP to this service data container.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly resultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * Local Sequence Number is a service data container sequence number. It
     * starts from 1 and is increased by 1 for each service date container
     * generated within the lifetime of this IP-CAN bearer/TDF session.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfFirstUsage`.
     * @description
     *
     * Time of First Usage is the time stamp for the first IP packet to be
     * transmitted and mapped to the current service data container. For envelope
     * reporting controlled by the Time Quota Mechanism, this indicates the time
     * stamp for the first IP packet to be transmitted that causes an envelope to
     * be opened - see TS 32.299 [50].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfLastUsage`.
     * @description
     *
     * Time of Last Usage is the time stamp for the last IP packet to be
     * transmitted and mapped to the current service data container. For envelope
     * reporting, controlled by the Time Quota Mechanism, this indicates the time
     * stamp for an envelope to be closed - see TS 32.299 [50] for conditions for
     * envelope closure.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeUsage`.
     * @description
     *
     * Time Usage contains the effective used time within the service data
     * container recording interval.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly timeUsage: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceConditionChange`.
     * @description
     *
     * Service Condition Change defines the reason for closing the service data
     * container (see TS 32.251 [11]), such as tariff time change, IP-CAN bearer
     * modification (e.g. QoS change, S-GW change, user location change, user CSG
     * information change), access change of service data flow, indirect service
     * condition change, service usage thresholds, service idled out, termination
     * or failure handling procedure. When one of the "CGI/SAI, ECGI or TAI or
     * RAI Change" are reported as user location change, the dedicated value in
     * service Condition Change is set instead of the generic "user location
     * change" value. This field is specified as bitmask for support of multiple
     * change trigger (e.g. S-GW and QoS change). This field is derived from
     * Change-Condition AVP at Service-Data-Container AVP level defined in TS
     * 32.299 [50] when received on Rf.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * Reason this service-data container was closed. Table 6.1.3.3 points at
     * "clause 5.3.2.X" for the permitted values; that is not a clause number
     * in this specification. The recording triggers are in tables 5.2.3.4.1.1,
     * 5.2.3.9.2.1, and 5.2.3.10.2.2. The field is omitted when the container
     * is added because the CDR is closing, except when closure is due to the
     * maximum number of charging-condition changes, in which case the original
     * condition is kept (clause 5.2.3.4.1).
     *
     * PGW-CDR service-data container field category M (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly serviceConditionChange: ServiceConditionChange;
    /**
     * @summary `qoSInformationNeg`.
     * @description
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * This field contains the authorized QoS for the IP-CAN bearer that is
     * first reported for the Rating Group or Rating Group Service Identifier
     * in the container. If traffic from multiple bearers is included in the
     * report for the container, only one field is included. This field
     * includes: QCI and ARP. For non-GBR QCI values, this field also includes
     * the MBR for the downlink and uplink direction. For GBR QCI values, this
     * field also includes GBR for the downlink and uplink direction. If the
     * MBR is different than the GBR, then this field also includes the MBR for
     * the downlink and uplink direction. This field does not include the
     * APN-AMBR, which is contained in a separate field in the CDR for the
     * IP-CAN session.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly qoSInformationNeg: OPTIONAL<EPCQoSInformation>;
    /**
     * @summary `servingNodeAddress`.
     * @description
     *
     * Serving Node Address contains the valid serving node (e.g. SGSN/S-GW)
     * control plane IP address during the service data container recording
     * interval.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly servingNodeAddress: OPTIONAL<GSNAddress>;
    /**
     * @summary `datavolumeFBCUplink`.
     * @description
     *
     * Data Volume Uplink.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly datavolumeFBCUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `datavolumeFBCDownlink`.
     * @description
     *
     * Data Volume Downlink.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly datavolumeFBCDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `timeOfReport`.
     * @description
     *
     * Report Time.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category M (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly timeOfReport: OCTET_STRING;
    /**
     * @summary `failureHandlingContinue`.
     * @description
     *
     * Present when the P-GW or TDF has triggered the Failure-Handling
     * procedure. The List of Service Data indicates the scenario (Continue or
     * Retry&Terminate or Terminate, for a new or ongoing session) and the
     * instant the failure action is triggered (tables 6.1.3.1 and 6.1.14.1,
     * clause 5.3.1.4, and annex B). If the user is only online charged,
     * Failure Handling Continue opens a new PGW-CDR or TDF-CDR.
     *
     * @public
     * @readonly
     */
    readonly failureHandlingContinue: OPTIONAL<BOOLEAN>;
    /**
     * @summary `serviceIdentifier`.
     * @description
     *
     * Service Identifier is an identifier for a service. The service identifier
     * may designate an end user service, a part of an end user service or an
     * arbitrarily formed group thereof. This field is only included if reporting
     * is per combination of the rating group and service id.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly serviceIdentifier: OPTIONAL<INTEGER>;
    /**
     * @summary `pSFurnishChargingInformation`.
     * @description
     *
     * PS Furnish Charging Information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    /**
     * @summary `aFRecordInformation`.
     * @description
     *
     * AF-Record-Information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly aFRecordInformation: OPTIONAL<AFRecordInformation[]>;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * user location information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventBasedChargingInformation`.
     * @description
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly eventBasedChargingInformation: OPTIONAL<EventBasedChargingInformation>;
    /**
     * @summary `timeQuotaMechanism`.
     * @description
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly timeQuotaMechanism: OPTIONAL<TimeQuotaMechanism>;
    /**
     * @summary `serviceSpecificInfo`.
     * @description
     *
     * Service Specific Info holds service specific data for a pre-defined PCC or
     * a predefined ADC rule that is used for enhanced packet filtering.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @description
     *
     * 3GPP2 User Location Information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sponsorIdentity`.
     * @description
     *
     * Sponsor Identity identifies the sponsor willing to pay for the operator's
     * charge for connectivity.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly sponsorIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `applicationServiceProviderIdentity`.
     * @description
     *
     * Application service provider identity used when sponsored connectivity
     * reporting is active. Together with the rating group and the sponsor
     * identity it identifies the reporting level for the service data flow
     * (clause 5.2.1.3). A PCC rule may carry this identity for offline
     * charging.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aDCRuleBaseName`.
     * @description
     *
     * Name of a pre-defined group of ADC rules. Used for TDF application based
     * charging (table 6.3.1.2.1). Table 6.1.3.3 says this field is not
     * applicable to the PGW-CDR.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly aDCRuleBaseName: OPTIONAL<IA5String>;
    /**
     * @summary `presenceReportingAreaStatus`.
     * @description
     *
     * Presence Reporting Area Status contains the status of the UE presence
     * (i.e. indication on whether the UE is inside or outside) in the Presence
     * Reporting Area(s) identified by "Presence Reporting Area identifier(s)"
     * contained in PGW-CDR main level. This is included in the service data
     * container when the initial status is reported after opening of PGW-CDR, or
     * if previous container's change condition is "Presence in Presence
     * Reporting Area Change". This field is not applicable in multiple PRA(s).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    /**
     * @summary `userCSGInformation`.
     * @description
     *
     * User CSG information contains the status of the user accessing a CSG cell
     * (CSG ID within the PLMN, Access mode and indication on CSG membership)
     * during the service data container recording interval. This is included in
     * the service data container only if previous container's change condition
     * is "user CSG information change". Note the "user CSG information" in
     * PGW-CDR main level contains the "user CSG information" when PGW-CDR was
     * opened.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * User CSG information captured with this service-data container. On a
     * user CSG information change, entry to a CSG cell or a hybrid cell
     * includes the CSG ID, access mode, and, for hybrid, the membership
     * indication. Leaving such a cell omits them unless the user is entering
     * another one (clause 5.2.3.4.1).
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Holds the value of RAT Type, as provided to S-GW and P-GW, specified in TS
     * 29.061 [216] and also provided to the TDF as specified in TS 29.212 [220].
     * The field is provided by the SGSN/MME and transferred to the S-GW/P-GW
     * during the IP-CAN bearer activation/modification and transferred to the
     * TDF during the TDF session establishment/modification.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.47.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @description
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * This field contains the UE location in an Untrusted Wireless Access
     * Network (UWAN) which includes the UE local IP address and optionally UDP
     * or TCP source port number (if NAT is detected) as defined in TS 29.274
     * [210]. It may also include WLAN location information the ePDG may have
     * received from the 3GPP AAA server about the UE as "WLAN location
     * information" defined in TS 29.274 [210].
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `relatedChangeOfServiceCondition`.
     * @description
     *
     * Related Change of Service Condition indicates the reason a related
     * container was closed when the current container is indirectly closed and
     * the supplemental information for the event. This information is applicable
     * when charging per IP-CAN session is active for a multi-access PDN
     * connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly relatedChangeOfServiceCondition: OPTIONAL<RelatedChangeOfServiceCondition>;
    /**
     * @summary `servingPLMNRateControl`.
     * @description
     *
     * This field contains the Serving PLMN Rate Control as specified in TS
     * 23.401 [245], which is used during the record for the PDN connection to
     * the PGW.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.68A.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `aPNRateControl`.
     * @description
     *
     * This field contains the APN Rate Control as specified in TS 23.401 [245],
     * which is used during the record for the PDN connection to the PGW.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.1A.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @description
     *
     * This field contains the status of the UE’s 3GPP PS Data Off Status.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `trafficSteeringPolicyIDDownlink`.
     * @description
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * This field contains the traffic steering policy identifier in the
     * downlink direction.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly trafficSteeringPolicyIDDownlink: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `trafficSteeringPolicyIDUplink`.
     * @description
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * This field contains the traffic steering policy identifier in the uplink
     * direction.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly trafficSteeringPolicyIDUplink: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tWANUserLocationInformation`.
     * @description
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * Table 6.1.3.3 does not list TWAN User Location Information on the
     * service-data container. On the CDR tables that do include it, the field
     * is the UE location in a Trusted WLAN Access Network, if available: the
     * TWAN identifier for S2a GTP (TS 29.274), or the Access Network
     * Identifier Option IE for S2a PMIP (TS 29.275).
     *
     * @public
     * @readonly
     */
    readonly tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    /**
     * @summary `listOfPresenceReportingAreaInformation`.
     * @description
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
     *
     * This field contains a list of Presence Reporting Area Identifier(s) for
     * the UE PDN connection, and the Presence Reporting Area(s) status (UE
     * presence or not, inactive), differentiated between PCRF and OCS
     * subscription.
     *
     * PGW-CDR service-data container field category OC (3GPP TS 32.251 V19.0.0
     * table 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;

    constructor (
        ratingGroup: INTEGER,
        chargingRuleBaseName: OPTIONAL<IA5String>,
        resultCode: OPTIONAL<INTEGER>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        timeOfFirstUsage: OPTIONAL<OCTET_STRING>,
        timeOfLastUsage: OPTIONAL<OCTET_STRING>,
        timeUsage: OPTIONAL<INTEGER>,
        serviceConditionChange: ServiceConditionChange,
        qoSInformationNeg: OPTIONAL<EPCQoSInformation>,
        servingNodeAddress: OPTIONAL<GSNAddress>,
        datavolumeFBCUplink: OPTIONAL<INTEGER>,
        datavolumeFBCDownlink: OPTIONAL<INTEGER>,
        timeOfReport: OCTET_STRING,
        failureHandlingContinue?: OPTIONAL<BOOLEAN>,
        serviceIdentifier?: OPTIONAL<INTEGER>,
        pSFurnishChargingInformation?: OPTIONAL<PSFurnishChargingInformation>,
        aFRecordInformation?: OPTIONAL<AFRecordInformation[]>,
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        eventBasedChargingInformation?: OPTIONAL<EventBasedChargingInformation>,
        timeQuotaMechanism?: OPTIONAL<TimeQuotaMechanism>,
        serviceSpecificInfo?: OPTIONAL<ServiceSpecificInfo[]>,
        threeGPP2UserLocationInformation?: OPTIONAL<OCTET_STRING>,
        sponsorIdentity?: OPTIONAL<OCTET_STRING>,
        applicationServiceProviderIdentity?: OPTIONAL<OCTET_STRING>,
        aDCRuleBaseName?: OPTIONAL<IA5String>,
        presenceReportingAreaStatus?: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        rATType?: OPTIONAL<INTEGER>,
        uWANUserLocationInformation?: OPTIONAL<UWANUserLocationInfo>,
        relatedChangeOfServiceCondition?: OPTIONAL<RelatedChangeOfServiceCondition>,
        servingPLMNRateControl?: OPTIONAL<ServingPLMNRateControl>,
        aPNRateControl?: OPTIONAL<APNRateControl>,
        threeGPPPSDataOffStatus?: OPTIONAL<ThreeGPPPSDataOffStatus>,
        trafficSteeringPolicyIDDownlink?: OPTIONAL<OCTET_STRING>,
        trafficSteeringPolicyIDUplink?: OPTIONAL<OCTET_STRING>,
        tWANUserLocationInformation?: OPTIONAL<TWANUserLocationInfo>,
        listOfPresenceReportingAreaInformation?: OPTIONAL<PresenceReportingAreaInfo[]>
    ) {
        this.ratingGroup = ratingGroup;
        this.chargingRuleBaseName = chargingRuleBaseName;
        this.resultCode = resultCode;
        this.localSequenceNumber = localSequenceNumber;
        this.timeOfFirstUsage = timeOfFirstUsage;
        this.timeOfLastUsage = timeOfLastUsage;
        this.timeUsage = timeUsage;
        this.serviceConditionChange = serviceConditionChange;
        this.qoSInformationNeg = qoSInformationNeg;
        this.servingNodeAddress = servingNodeAddress;
        this.datavolumeFBCUplink = datavolumeFBCUplink;
        this.datavolumeFBCDownlink = datavolumeFBCDownlink;
        this.timeOfReport = timeOfReport;
        this.failureHandlingContinue = failureHandlingContinue;
        this.serviceIdentifier = serviceIdentifier;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.aFRecordInformation = aFRecordInformation;
        this.userLocationInformation = userLocationInformation;
        this.eventBasedChargingInformation = eventBasedChargingInformation;
        this.timeQuotaMechanism = timeQuotaMechanism;
        this.serviceSpecificInfo = serviceSpecificInfo;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.sponsorIdentity = sponsorIdentity;
        this.applicationServiceProviderIdentity = applicationServiceProviderIdentity;
        this.aDCRuleBaseName = aDCRuleBaseName;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.rATType = rATType;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.relatedChangeOfServiceCondition = relatedChangeOfServiceCondition;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.aPNRateControl = aPNRateControl;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.trafficSteeringPolicyIDDownlink = trafficSteeringPolicyIDDownlink;
        this.trafficSteeringPolicyIDUplink = trafficSteeringPolicyIDUplink;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.listOfPresenceReportingAreaInformation = listOfPresenceReportingAreaInformation;
    
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfServiceCondition.localSequenceNumber violates INTEGER range");
        }
        if (this.timeOfFirstUsage !== undefined && (this.timeOfFirstUsage.length !== 9)) {
            throw new ASN1SizeError("ChangeOfServiceCondition.timeOfFirstUsage violates SIZE constraint");
        }
        if (this.timeOfLastUsage !== undefined && (this.timeOfLastUsage.length !== 9)) {
            throw new ASN1SizeError("ChangeOfServiceCondition.timeOfLastUsage violates SIZE constraint");
        }
        if ((this.timeOfReport.length !== 9)) {
            throw new ASN1SizeError("ChangeOfServiceCondition.timeOfReport violates SIZE constraint");
        }
        if (this.serviceIdentifier !== undefined && (this.serviceIdentifier < 0 || this.serviceIdentifier > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfServiceCondition.serviceIdentifier violates INTEGER range");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("ChangeOfServiceCondition.rATType violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfServiceCondition
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfServiceCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfServiceCondition`.
     * @returns {ChangeOfServiceCondition}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfServiceCondition)]: (ChangeOfServiceCondition)[_K] }): ChangeOfServiceCondition {
        return new ChangeOfServiceCondition(_o.ratingGroup, _o.chargingRuleBaseName, _o.resultCode, _o.localSequenceNumber, _o.timeOfFirstUsage, _o.timeOfLastUsage, _o.timeUsage, _o.serviceConditionChange, _o.qoSInformationNeg, _o.servingNodeAddress, _o.datavolumeFBCUplink, _o.datavolumeFBCDownlink, _o.timeOfReport, _o.failureHandlingContinue, _o.serviceIdentifier, _o.pSFurnishChargingInformation, _o.aFRecordInformation, _o.userLocationInformation, _o.eventBasedChargingInformation, _o.timeQuotaMechanism, _o.serviceSpecificInfo, _o.threeGPP2UserLocationInformation, _o.sponsorIdentity, _o.applicationServiceProviderIdentity, _o.aDCRuleBaseName, _o.presenceReportingAreaStatus, _o.userCSGInformation, _o.rATType, _o.uWANUserLocationInformation, _o.relatedChangeOfServiceCondition, _o.servingPLMNRateControl, _o.aPNRateControl, _o.threeGPPPSDataOffStatus, _o.trafficSteeringPolicyIDDownlink, _o.trafficSteeringPolicyIDUplink, _o.tWANUserLocationInformation, _o.listOfPresenceReportingAreaInformation);
    }

        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus: typeof _enum_for_PresenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus: typeof _enum_for_ThreeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfServiceCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("ratingGroup", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargingRuleBaseName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resultCode", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfFirstUsage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("timeOfLastUsage", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("timeUsage", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceConditionChange", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("qoSInformationNeg", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("servingNodeAddress", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("datavolumeFBCUplink", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("datavolumeFBCDownlink", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("timeOfReport", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("failureHandlingContinue", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceIdentifier", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("aFRecordInformation", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("eventBasedChargingInformation", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("timeQuotaMechanism", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("serviceSpecificInfo", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("sponsorIdentity", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("applicationServiceProviderIdentity", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("aDCRuleBaseName", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("relatedChangeOfServiceCondition", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("trafficSteeringPolicyIDDownlink", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("trafficSteeringPolicyIDUplink", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("listOfPresenceReportingAreaInformation", true, $.hasTag(_TagClass.context, 41))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfServiceCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfServiceCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfServiceCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfServiceCondition: $.ASN1Decoder<ChangeOfServiceCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfServiceCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfServiceCondition (el: _Element): ChangeOfServiceCondition {
    if (!_cached_decoder_for_ChangeOfServiceCondition) { _cached_decoder_for_ChangeOfServiceCondition = function (el: _Element): ChangeOfServiceCondition {
    let ratingGroup!: INTEGER;
    let chargingRuleBaseName: OPTIONAL<IA5String>;
    let resultCode: OPTIONAL<INTEGER>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    let timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    let timeUsage: OPTIONAL<INTEGER>;
    let serviceConditionChange!: ServiceConditionChange;
    let qoSInformationNeg: OPTIONAL<EPCQoSInformation>;
    let servingNodeAddress: OPTIONAL<GSNAddress>;
    let datavolumeFBCUplink: OPTIONAL<INTEGER>;
    let datavolumeFBCDownlink: OPTIONAL<INTEGER>;
    let timeOfReport!: OCTET_STRING;
    let failureHandlingContinue: OPTIONAL<BOOLEAN>;
    let serviceIdentifier: OPTIONAL<INTEGER>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let aFRecordInformation: OPTIONAL<AFRecordInformation[]>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let eventBasedChargingInformation: OPTIONAL<EventBasedChargingInformation>;
    let timeQuotaMechanism: OPTIONAL<TimeQuotaMechanism>;
    let serviceSpecificInfo: OPTIONAL<ServiceSpecificInfo[]>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let sponsorIdentity: OPTIONAL<OCTET_STRING>;
    let applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>;
    let aDCRuleBaseName: OPTIONAL<IA5String>;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let rATType: OPTIONAL<INTEGER>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let relatedChangeOfServiceCondition: OPTIONAL<RelatedChangeOfServiceCondition>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let trafficSteeringPolicyIDDownlink: OPTIONAL<OCTET_STRING>;
    let trafficSteeringPolicyIDUplink: OPTIONAL<OCTET_STRING>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;
    const callbacks: $.DecodingMap = {
        "ratingGroup": (_el: _Element): void => { ratingGroup = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargingRuleBaseName": (_el: _Element): void => { chargingRuleBaseName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "resultCode": (_el: _Element): void => { resultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfFirstUsage": (_el: _Element): void => { timeOfFirstUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfLastUsage": (_el: _Element): void => { timeOfLastUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeUsage": (_el: _Element): void => { timeUsage = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceConditionChange": (_el: _Element): void => { serviceConditionChange = $._decode_implicit<ServiceConditionChange>(() => _decode_ServiceConditionChange)(_el); },
        "qoSInformationNeg": (_el: _Element): void => { qoSInformationNeg = $._decode_implicit<EPCQoSInformation>(() => _decode_EPCQoSInformation)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "datavolumeFBCUplink": (_el: _Element): void => { datavolumeFBCUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "datavolumeFBCDownlink": (_el: _Element): void => { datavolumeFBCDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeOfReport": (_el: _Element): void => { timeOfReport = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "failureHandlingContinue": (_el: _Element): void => { failureHandlingContinue = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "serviceIdentifier": (_el: _Element): void => { serviceIdentifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "aFRecordInformation": (_el: _Element): void => { aFRecordInformation = $._decode_implicit<AFRecordInformation[]>(() => $._decodeSequenceOf<AFRecordInformation>(() => _decode_AFRecordInformation))(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventBasedChargingInformation": (_el: _Element): void => { eventBasedChargingInformation = $._decode_implicit<EventBasedChargingInformation>(() => _decode_EventBasedChargingInformation)(_el); },
        "timeQuotaMechanism": (_el: _Element): void => { timeQuotaMechanism = $._decode_implicit<TimeQuotaMechanism>(() => _decode_TimeQuotaMechanism)(_el); },
        "serviceSpecificInfo": (_el: _Element): void => { serviceSpecificInfo = $._decode_implicit<ServiceSpecificInfo[]>(() => $._decodeSequenceOf<ServiceSpecificInfo>(() => _decode_ServiceSpecificInfo))(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sponsorIdentity": (_el: _Element): void => { sponsorIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationServiceProviderIdentity": (_el: _Element): void => { applicationServiceProviderIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aDCRuleBaseName": (_el: _Element): void => { aDCRuleBaseName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaStatus>(() => _decode_PresenceReportingAreaStatus)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "relatedChangeOfServiceCondition": (_el: _Element): void => { relatedChangeOfServiceCondition = $._decode_implicit<RelatedChangeOfServiceCondition>(() => _decode_RelatedChangeOfServiceCondition)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "trafficSteeringPolicyIDDownlink": (_el: _Element): void => { trafficSteeringPolicyIDDownlink = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "trafficSteeringPolicyIDUplink": (_el: _Element): void => { trafficSteeringPolicyIDUplink = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "listOfPresenceReportingAreaInformation": (_el: _Element): void => { listOfPresenceReportingAreaInformation = $._decode_implicit<PresenceReportingAreaInfo[]>(() => $._decodeSequenceOf<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfServiceCondition,
        _extension_additions_list_spec_for_ChangeOfServiceCondition,
        _root_component_type_list_2_spec_for_ChangeOfServiceCondition,
        undefined,
    );
    return new ChangeOfServiceCondition(
        ratingGroup,
        chargingRuleBaseName,
        resultCode,
        localSequenceNumber,
        timeOfFirstUsage,
        timeOfLastUsage,
        timeUsage,
        serviceConditionChange,
        qoSInformationNeg,
        servingNodeAddress,
        datavolumeFBCUplink,
        datavolumeFBCDownlink,
        timeOfReport,
        failureHandlingContinue,
        serviceIdentifier,
        pSFurnishChargingInformation,
        aFRecordInformation,
        userLocationInformation,
        eventBasedChargingInformation,
        timeQuotaMechanism,
        serviceSpecificInfo,
        threeGPP2UserLocationInformation,
        sponsorIdentity,
        applicationServiceProviderIdentity,
        aDCRuleBaseName,
        presenceReportingAreaStatus,
        userCSGInformation,
        rATType,
        uWANUserLocationInformation,
        relatedChangeOfServiceCondition,
        servingPLMNRateControl,
        aPNRateControl,
        threeGPPPSDataOffStatus,
        trafficSteeringPolicyIDDownlink,
        trafficSteeringPolicyIDUplink,
        tWANUserLocationInformation,
        listOfPresenceReportingAreaInformation
    );
}; }
    return _cached_decoder_for_ChangeOfServiceCondition(el);
}

let _cached_encoder_for_ChangeOfServiceCondition: $.ASN1Encoder<ChangeOfServiceCondition> | null = null;

/**
 * @summary Encodes a(n) ChangeOfServiceCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfServiceCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfServiceCondition (value: ChangeOfServiceCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfServiceCondition) { _cached_encoder_for_ChangeOfServiceCondition = function (value: ChangeOfServiceCondition, _elGetter: $.ASN1Encoder<ChangeOfServiceCondition>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.ratingGroup, $.BER));
    if (value.chargingRuleBaseName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER)(value.chargingRuleBaseName, $.BER));
    }
    if (value.resultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.resultCode, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.timeOfFirstUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.timeOfFirstUsage, $.BER));
    }
    if (value.timeOfLastUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.timeOfLastUsage, $.BER));
    }
    if (value.timeUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.timeUsage, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceConditionChange, $.BER)(value.serviceConditionChange, $.BER));
    if (value.qoSInformationNeg !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_EPCQoSInformation, $.BER)(value.qoSInformationNeg, $.BER));
    }
    if (value.servingNodeAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_GSNAddress, $.BER)(value.servingNodeAddress, $.BER));
    }
    if (value.datavolumeFBCUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.datavolumeFBCUplink, $.BER));
    }
    if (value.datavolumeFBCDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.datavolumeFBCDownlink, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.timeOfReport, $.BER));
    if (value.failureHandlingContinue !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.failureHandlingContinue, $.BER));
    }
    if (value.serviceIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.serviceIdentifier, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.aFRecordInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<AFRecordInformation>(() => _encode_AFRecordInformation, $.BER), $.BER)(value.aFRecordInformation, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.eventBasedChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_EventBasedChargingInformation, $.BER)(value.eventBasedChargingInformation, $.BER));
    }
    if (value.timeQuotaMechanism !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_TimeQuotaMechanism, $.BER)(value.timeQuotaMechanism, $.BER));
    }
    if (value.serviceSpecificInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<ServiceSpecificInfo>(() => _encode_ServiceSpecificInfo, $.BER), $.BER)(value.serviceSpecificInfo, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.sponsorIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.sponsorIdentity, $.BER));
    }
    if (value.applicationServiceProviderIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.applicationServiceProviderIdentity, $.BER));
    }
    if (value.aDCRuleBaseName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeIA5String, $.BER)(value.aDCRuleBaseName, $.BER));
    }
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PresenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.relatedChangeOfServiceCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => _encode_RelatedChangeOfServiceCondition, $.BER)(value.relatedChangeOfServiceCondition, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.trafficSteeringPolicyIDDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.trafficSteeringPolicyIDDownlink, $.BER));
    }
    if (value.trafficSteeringPolicyIDUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.trafficSteeringPolicyIDUplink, $.BER));
    }
    if (value.tWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_TWANUserLocationInfo, $.BER)(value.tWANUserLocationInformation, $.BER));
    }
    if (value.listOfPresenceReportingAreaInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => $._encodeSequenceOf<PresenceReportingAreaInfo>(() => _encode_PresenceReportingAreaInfo, $.BER), $.BER)(value.listOfPresenceReportingAreaInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfServiceCondition(value, elGetter);
}


/* eslint-enable */
