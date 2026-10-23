/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChangeCondition, _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";
import { EPCQoSInformation, _decode_EPCQoSInformation, _encode_EPCQoSInformation } from "../GPRSChargingDataTypes/EPCQoSInformation.ta.mjs";
import { PresenceReportingAreaStatus, _decode_PresenceReportingAreaStatus, _encode_PresenceReportingAreaStatus, _enum_for_PresenceReportingAreaStatus } from "../GPRSChargingDataTypes/PresenceReportingAreaStatus.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { UWANUserLocationInfo, _decode_UWANUserLocationInfo, _encode_UWANUserLocationInfo } from "../GPRSChargingDataTypes/UWANUserLocationInfo.ta.mjs";
import { RelatedChangeOfCharCondition, _decode_RelatedChangeOfCharCondition, _encode_RelatedChangeOfCharCondition } from "../GPRSChargingDataTypes/RelatedChangeOfCharCondition.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../GPRSChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../GPRSChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../GPRSChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../GPRSChargingDataTypes/APNRateControl.ta.mjs";


/**
 * @summary ChangeOfCharCondition
 * @description
 * 
 * One container in a List of Traffic Data Volumes. The SGSN, S-GW, ePDG,
 * TWAG and, when charging per IP-CAN session is active, the P-GW and the
 * IP-Edge [PCEF] add a container when a charging condition is met and then
 * start a new count (clauses 5.2.3.1, 5.2.3.3, 5.2.3.8, 5.2.3.10,
 * 5.2.3.11, and annex D). Uplink and downlink octets are counted
 * separately and reflect data delivered to and from the user (clause
 * 5.1.1). The first container of a bearer holds the volume since the
 * bearer was opened; later containers hold the volume accrued since the
 * previous container closed. On CDR closure, changeCondition is omitted,
 * except when closure is due to the maximum number of charging-condition
 * changes, in which case the original condition is present. Table 6.1.3.2
 * is the field handling used in a PGW-CDR when charging per IP-CAN session
 * is active. In the S-GW, ePDG, TWAG, and IP-Edge the containers are per
 * QCI/ARP or per QoS.
 * 
 * 3GPP TS 32.251 V19.0.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfCharCondition ::= SEQUENCE {
 *    qosRequested                             [1] IMPLICIT OCTET STRING ( SIZE( 4 .. 255 ) ) OPTIONAL,
 *    qosNegotiated                            [2] IMPLICIT OCTET STRING ( SIZE( 4 .. 255 ) ) OPTIONAL,
 *    dataVolumeGPRSUplink                     [3] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeGPRSDownlink                   [4] IMPLICIT INTEGER OPTIONAL,
 *    changeCondition                          [5] IMPLICIT ChangeCondition,
 *    changeTime                               [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    userLocationInformation                  [8] IMPLICIT OCTET STRING OPTIONAL,
 *    ePCQoSInformation                        [9] IMPLICIT EPCQoSInformation OPTIONAL,
 *    chargingID                               [10] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    presenceReportingAreaStatus              [11] IMPLICIT PresenceReportingAreaStatus OPTIONAL,
 *    userCSGInformation                       [12] IMPLICIT UserCSGInformation OPTIONAL,
 *    diagnostics                              [13] Diagnostics OPTIONAL,
 *    enhancedDiagnostics                      [14] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    rATType                                  [15] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    accessAvailabilityChangeReason           [16] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    uWANUserLocationInformation              [17] IMPLICIT UWANUserLocationInfo OPTIONAL,
 *    relatedChangeOfCharCondition             [18] IMPLICIT RelatedChangeOfCharCondition OPTIONAL,
 *    cPCIoTEPSOptimisationIndicator           [19] IMPLICIT BOOLEAN OPTIONAL,
 *    servingPLMNRateControl                   [20] IMPLICIT ServingPLMNRateControl OPTIONAL,
 *    threeGPPPSDataOffStatus                  [21] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL,
 *    listOfPresenceReportingAreaInformation   [22] IMPLICIT SEQUENCE  OF
 *       PresenceReportingAreaInfo OPTIONAL,
 *    aPNRateControl                           [23] IMPLICIT APNRateControl OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfCharCondition {
    /**
     * @summary `qosRequested`.
     * @description
     *
     * QoS captured in this traffic-volume container. List of Traffic Data
     * Volumes includes the initial and subsequently changed QoS (tables
     * 6.1.1.1 and 6.1.2.1). TS 32.251 does not further define how the
     * requested profile is distinguished from the negotiated profile.
     *
     * @public
     * @readonly
     */
    readonly qosRequested: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qosNegotiated`.
     * @description
     *
     * QoS captured in this traffic-volume container. For an MBMS bearer the
     * volume list shall include the required bearer capabilities (QoS
     * Negotiated) (tables 6.1.10.1, 6.1.11.1, and 6.1.12.1). For an IP-CAN
     * bearer the list includes the initial and subsequently changed QoS
     * (tables 6.1.1.1 and 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly qosNegotiated: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolumeGPRSUplink`.
     * @description
     *
     * This field includes the number of octets transmitted during the use of
     * the packet data services in the uplink direction.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeGPRSDownlink`.
     * @description
     *
     * This field includes the number of octets transmitted during the use of
     * the packet data services in the downlink direction.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `changeCondition`.
     * @description
     *
     * Reason this volume container was closed. Present for the
     * charging-condition triggers in clause 5.2.3. Omitted when the container
     * is added because the CDR is closing, except when closure is due to the
     * maximum number of charging-condition changes, in which case the original
     * condition is kept (clauses 5.2.3.3.1, 5.2.3.8.1, 5.2.3.10.2, and
     * 5.2.3.11.1).
     *
     * PGW-CDR traffic-volume container field category M (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly changeCondition: ChangeCondition;
    /**
     * @summary `changeTime`.
     * @description
     *
     * This field is a time stamp, which defines the moment when the volume
     * container is closed.
     *
     * PGW-CDR traffic-volume container field category M (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * This field contains the User Location Information as described in TS
     * 29.060 [215] for GTP case (e.g. CGI, SAI, RAI), TS 29.274 [223] for eGTP
     * case (e.g. CGI, SAI, RAI TAI and ECGI) and TS 29.275 [224] for PMIP case.
     * The field is provided by the SGSN/MME and transferred to the S-GW/P-GW/TDF
     * during the IP-CAN bearer activation/modification and/or TDF session
     * establishment/modification.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.75.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `ePCQoSInformation`.
     * @description
     *
     * This field contains the APN-AMBR for the IP-CAN session. It is used in the
     * PGW-CDR only when charging per IP-CAN session is active.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13B.
     *
     * That description is the session-level QoS Information. In this
     * traffic-volume container, table 6.1.3.2 defines the component as the
     * authorized bearer QoS:
     *
     * This field contains the authorized QoS for the IP-CAN bearer. First
     * container for each QCI/ARP pair includes this field. In following
     * containers this field is present if previous change condition is "QoS
     * change". This field includes: QCI and ARP. For GBR QCI values, this
     * field also includes GBR for the downlink and uplink direction. If the
     * MBR is different than the GBR, then this field also includes the MBR for
     * the downlink and uplink direction. This field does not include the
     * APN-AMBR, which is contained in a separate field in the CDR for the
     * IP-CAN session.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    /**
     * @summary `chargingID`.
     * @description
     *
     * This field is a charging identifier, which can be used together with P-GW
     * address to identify all records produced in SGSN(s), S-GW and P-GW
     * involved in a single IP-CAN bearer. Charging ID is generated by P-GW at
     * IP-CAN bearer activation and transferred to bearer requesting SGSN/S-GW.
     * At inter-SGSN/S-GW change the charging ID is transferred to the new
     * SGSN/S-GW as part of each active IP-CAN bearer. In case of PMIP-based
     * connectivity, the Charging Id is generated per PDN connection. Different
     * P-GWs allocate the charging ID independently of each other and may
     * allocate the same numbers. The CGF and/or BS may check the uniqueness of
     * each charging ID together with the P-GWs address and optionally (if still
     * ambiguous) with the record opening time stamp.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.9.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly chargingID: OPTIONAL<INTEGER>;
    /**
     * @summary `presenceReportingAreaStatus`.
     * @description
     *
     * This field contains the status of the UE presence in Presence Reporting
     * Area. This field is not applicable to multiple PRA(s).
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    /**
     * @summary `userCSGInformation`.
     * @description
     *
     * This field contains the "User CSG Information" status of the user
     * accessing a CSG cell: it comprises CSG ID within the PLMN, Access mode and
     * indication on CSG membership for the user when hybrid access applies, as
     * defined in TS 29.060 [215] for GPRS case, and in TS 29.274 [223] for EPC
     * case.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.74.
     *
     * User CSG information in force for this container: CSG ID, access mode,
     * and, for a hybrid cell, the CSG membership indication. When the change
     * condition is user CSG information change and the user enters a CSG cell
     * or a hybrid cell, these elements are present. When the user leaves, they
     * are omitted unless the user is entering another CSG cell or hybrid cell
     * (clause 5.2.3.3.1).
     *
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `diagnostics`.
     * @description
     *
     * This field includes a more detailed technical reason for the releases of
     * the connection. The diagnostics may also be extended to include
     * manufacturer and network specific information.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.11.
     *
     * PGW-CDR traffic-volume container field category OM (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `enhancedDiagnostics`.
     * @description
     *
     * This field includes a more detailed technical reason with a set of causes
     * for the release of the connection and may contain the following: RAN/NAS
     * cause from TS 29.274 [223]; NOTE: The Enhanced Diagnostics is defined to
     * allow extensions to other types of release causes in the future.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.13Aa.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
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
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `accessAvailabilityChangeReason`.
     * @description
     *
     * This field indicates the reason why the availability of an access is
     * changed by the PCEF, i.e. RAN rule indication or Access usable/unusable as
     * defined in TS 29.212 [220].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.0aA.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly accessAvailabilityChangeReason: OPTIONAL<INTEGER>;
    /**
     * @summary `uWANUserLocationInformation`.
     * @description
     *
     * This field contains the UE location in an Untrusted Wireless Access
     * Network (UWAN) which includes the UE local IP address and optionally
     * either UDP source port number (if NAT is detected) or TCP source port
     * number. It may also include WLAN location information the ePDG may have
     * received from the 3GPP AAA server about the UE, as TWAN Identifier defined
     * in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.77.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    /**
     * @summary `relatedChangeOfCharCondition`.
     * @description
     *
     * This field indicates the change condition associated with an alternate
     * access of a multi-access PDN connection that indirectly caused closure
     * of the container. This field includes optional supplemental information
     * associated with the change event (e.g., user location information).
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly relatedChangeOfCharCondition: OPTIONAL<RelatedChangeOfCharCondition>;
    /**
     * @summary `cPCIoTEPSOptimisationIndicator`.
     * @description
     *
     * Whether Control Plane CIoT EPS Optimisation was used for the traffic in
     * this container (Control Plane NAS PDU via S11-U between S-GW and MME)
     * rather than the user plane via S1-U. A change in the user plane to the
     * UE closes the open volume containers and opens a new one (clause
     * 5.2.3.3.1 and table 6.1.2.1).
     *
     * @public
     * @readonly
     */
    readonly cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
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
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @description
     *
     * This field contains the status of the UE’s 3GPP PS Data off Status.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    /**
     * @summary `listOfPresenceReportingAreaInformation`.
     * @description
     *
     * This field contains a list of Presence Reporting Area Identifier(s) for
     * the UE PDN connection, and the Presence Reporting Area(s) status (UE
     * presence or not, inactive), differentiated between PCRF and OCS
     * subscription.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;
    /**
     * @summary `aPNRateControl`.
     * @description
     *
     * This field contains the APN Rate Control as specified in TS 23.401 [245],
     * which is used during the record for the PDN connection to the PGW.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.1A.
     *
     * PGW-CDR traffic-volume container field category OC (3GPP TS 32.251
     * V19.0.0 table 6.1.3.2).
     *
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;

    constructor (
        qosRequested: OPTIONAL<OCTET_STRING>,
        qosNegotiated: OPTIONAL<OCTET_STRING>,
        dataVolumeGPRSUplink: OPTIONAL<INTEGER>,
        dataVolumeGPRSDownlink: OPTIONAL<INTEGER>,
        changeCondition: ChangeCondition,
        changeTime: OCTET_STRING,
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        ePCQoSInformation?: OPTIONAL<EPCQoSInformation>,
        chargingID?: OPTIONAL<INTEGER>,
        presenceReportingAreaStatus?: OPTIONAL<PresenceReportingAreaStatus>,
        userCSGInformation?: OPTIONAL<UserCSGInformation>,
        diagnostics?: OPTIONAL<Diagnostics>,
        enhancedDiagnostics?: OPTIONAL<EnhancedDiagnostics>,
        rATType?: OPTIONAL<INTEGER>,
        accessAvailabilityChangeReason?: OPTIONAL<INTEGER>,
        uWANUserLocationInformation?: OPTIONAL<UWANUserLocationInfo>,
        relatedChangeOfCharCondition?: OPTIONAL<RelatedChangeOfCharCondition>,
        cPCIoTEPSOptimisationIndicator?: OPTIONAL<BOOLEAN>,
        servingPLMNRateControl?: OPTIONAL<ServingPLMNRateControl>,
        threeGPPPSDataOffStatus?: OPTIONAL<ThreeGPPPSDataOffStatus>,
        listOfPresenceReportingAreaInformation?: OPTIONAL<PresenceReportingAreaInfo[]>,
        aPNRateControl?: OPTIONAL<APNRateControl>
    ) {
        this.qosRequested = qosRequested;
        this.qosNegotiated = qosNegotiated;
        this.dataVolumeGPRSUplink = dataVolumeGPRSUplink;
        this.dataVolumeGPRSDownlink = dataVolumeGPRSDownlink;
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.userLocationInformation = userLocationInformation;
        this.ePCQoSInformation = ePCQoSInformation;
        this.chargingID = chargingID;
        this.presenceReportingAreaStatus = presenceReportingAreaStatus;
        this.userCSGInformation = userCSGInformation;
        this.diagnostics = diagnostics;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.rATType = rATType;
        this.accessAvailabilityChangeReason = accessAvailabilityChangeReason;
        this.uWANUserLocationInformation = uWANUserLocationInformation;
        this.relatedChangeOfCharCondition = relatedChangeOfCharCondition;
        this.cPCIoTEPSOptimisationIndicator = cPCIoTEPSOptimisationIndicator;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
        this.listOfPresenceReportingAreaInformation = listOfPresenceReportingAreaInformation;
        this.aPNRateControl = aPNRateControl;
    
        if (this.qosRequested !== undefined && (this.qosRequested.length < 4 || this.qosRequested.length > 255)) {
            throw new ASN1SizeError("ChangeOfCharCondition.qosRequested violates SIZE constraint");
        }
        if (this.qosNegotiated !== undefined && (this.qosNegotiated.length < 4 || this.qosNegotiated.length > 255)) {
            throw new ASN1SizeError("ChangeOfCharCondition.qosNegotiated violates SIZE constraint");
        }
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ChangeOfCharCondition.changeTime violates SIZE constraint");
        }
        if (this.chargingID !== undefined && (this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfCharCondition.chargingID violates INTEGER range");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("ChangeOfCharCondition.rATType violates INTEGER range");
        }
        if (this.accessAvailabilityChangeReason !== undefined && (this.accessAvailabilityChangeReason < 0 || this.accessAvailabilityChangeReason > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfCharCondition.accessAvailabilityChangeReason violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfCharCondition
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfCharCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfCharCondition`.
     * @returns {ChangeOfCharCondition}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfCharCondition)]: (ChangeOfCharCondition)[_K] }): ChangeOfCharCondition {
        return new ChangeOfCharCondition(_o.qosRequested, _o.qosNegotiated, _o.dataVolumeGPRSUplink, _o.dataVolumeGPRSDownlink, _o.changeCondition, _o.changeTime, _o.userLocationInformation, _o.ePCQoSInformation, _o.chargingID, _o.presenceReportingAreaStatus, _o.userCSGInformation, _o.diagnostics, _o.enhancedDiagnostics, _o.rATType, _o.accessAvailabilityChangeReason, _o.uWANUserLocationInformation, _o.relatedChangeOfCharCondition, _o.cPCIoTEPSOptimisationIndicator, _o.servingPLMNRateControl, _o.threeGPPPSDataOffStatus, _o.listOfPresenceReportingAreaInformation, _o.aPNRateControl);
    }

        /**
         * @summary The enum used as the type of the component `changeCondition`
         * @public
         * @static
         */

    public static _enum_for_changeCondition = _enum_for_ChangeCondition;        /**
         * @summary The enum used as the type of the component `presenceReportingAreaStatus`
         * @public
         * @static
         */

    public static _enum_for_presenceReportingAreaStatus = _enum_for_PresenceReportingAreaStatus;        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfCharCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("qosRequested", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qosNegotiated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeGPRSUplink", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataVolumeGPRSDownlink", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("changeCondition", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("ePCQoSInformation", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("chargingID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("presenceReportingAreaStatus", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("accessAvailabilityChangeReason", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("uWANUserLocationInformation", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("relatedChangeOfCharCondition", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("cPCIoTEPSOptimisationIndicator", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("listOfPresenceReportingAreaInformation", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 23))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfCharCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfCharCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfCharCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfCharCondition: $.ASN1Decoder<ChangeOfCharCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfCharCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfCharCondition (el: _Element): ChangeOfCharCondition {
    if (!_cached_decoder_for_ChangeOfCharCondition) { _cached_decoder_for_ChangeOfCharCondition = function (el: _Element): ChangeOfCharCondition {
    let qosRequested: OPTIONAL<OCTET_STRING>;
    let qosNegotiated: OPTIONAL<OCTET_STRING>;
    let dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    let dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    let changeCondition!: ChangeCondition;
    let changeTime!: OCTET_STRING;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let ePCQoSInformation: OPTIONAL<EPCQoSInformation>;
    let chargingID: OPTIONAL<INTEGER>;
    let presenceReportingAreaStatus: OPTIONAL<PresenceReportingAreaStatus>;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let diagnostics: OPTIONAL<Diagnostics>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let rATType: OPTIONAL<INTEGER>;
    let accessAvailabilityChangeReason: OPTIONAL<INTEGER>;
    let uWANUserLocationInformation: OPTIONAL<UWANUserLocationInfo>;
    let relatedChangeOfCharCondition: OPTIONAL<RelatedChangeOfCharCondition>;
    let cPCIoTEPSOptimisationIndicator: OPTIONAL<BOOLEAN>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    let listOfPresenceReportingAreaInformation: OPTIONAL<PresenceReportingAreaInfo[]>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    const callbacks: $.DecodingMap = {
        "qosRequested": (_el: _Element): void => { qosRequested = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "qosNegotiated": (_el: _Element): void => { qosNegotiated = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolumeGPRSUplink": (_el: _Element): void => { dataVolumeGPRSUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeGPRSDownlink": (_el: _Element): void => { dataVolumeGPRSDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeCondition": (_el: _Element): void => { changeCondition = $._decode_implicit<ChangeCondition>(() => _decode_ChangeCondition)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ePCQoSInformation": (_el: _Element): void => { ePCQoSInformation = $._decode_implicit<EPCQoSInformation>(() => _decode_EPCQoSInformation)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "presenceReportingAreaStatus": (_el: _Element): void => { presenceReportingAreaStatus = $._decode_implicit<PresenceReportingAreaStatus>(() => _decode_PresenceReportingAreaStatus)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessAvailabilityChangeReason": (_el: _Element): void => { accessAvailabilityChangeReason = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "uWANUserLocationInformation": (_el: _Element): void => { uWANUserLocationInformation = $._decode_implicit<UWANUserLocationInfo>(() => _decode_UWANUserLocationInfo)(_el); },
        "relatedChangeOfCharCondition": (_el: _Element): void => { relatedChangeOfCharCondition = $._decode_implicit<RelatedChangeOfCharCondition>(() => _decode_RelatedChangeOfCharCondition)(_el); },
        "cPCIoTEPSOptimisationIndicator": (_el: _Element): void => { cPCIoTEPSOptimisationIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); },
        "listOfPresenceReportingAreaInformation": (_el: _Element): void => { listOfPresenceReportingAreaInformation = $._decode_implicit<PresenceReportingAreaInfo[]>(() => $._decodeSequenceOf<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo))(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfCharCondition,
        _extension_additions_list_spec_for_ChangeOfCharCondition,
        _root_component_type_list_2_spec_for_ChangeOfCharCondition,
        undefined,
    );
    return new ChangeOfCharCondition(
        qosRequested,
        qosNegotiated,
        dataVolumeGPRSUplink,
        dataVolumeGPRSDownlink,
        changeCondition,
        changeTime,
        userLocationInformation,
        ePCQoSInformation,
        chargingID,
        presenceReportingAreaStatus,
        userCSGInformation,
        diagnostics,
        enhancedDiagnostics,
        rATType,
        accessAvailabilityChangeReason,
        uWANUserLocationInformation,
        relatedChangeOfCharCondition,
        cPCIoTEPSOptimisationIndicator,
        servingPLMNRateControl,
        threeGPPPSDataOffStatus,
        listOfPresenceReportingAreaInformation,
        aPNRateControl
    );
}; }
    return _cached_decoder_for_ChangeOfCharCondition(el);
}

let _cached_encoder_for_ChangeOfCharCondition: $.ASN1Encoder<ChangeOfCharCondition> | null = null;

/**
 * @summary Encodes a(n) ChangeOfCharCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfCharCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfCharCondition (value: ChangeOfCharCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfCharCondition) { _cached_encoder_for_ChangeOfCharCondition = function (value: ChangeOfCharCondition, _elGetter: $.ASN1Encoder<ChangeOfCharCondition>): _Element {
    const _components: _Element[] = [];
    if (value.qosRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.qosRequested, $.BER));
    }
    if (value.qosNegotiated !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.qosNegotiated, $.BER));
    }
    if (value.dataVolumeGPRSUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSUplink, $.BER));
    }
    if (value.dataVolumeGPRSDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSDownlink, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_ChangeCondition, $.BER)(value.changeCondition, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.ePCQoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_EPCQoSInformation, $.BER)(value.ePCQoSInformation, $.BER));
    }
    if (value.chargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    }
    if (value.presenceReportingAreaStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_PresenceReportingAreaStatus, $.BER)(value.presenceReportingAreaStatus, $.BER));
    }
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.accessAvailabilityChangeReason !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.accessAvailabilityChangeReason, $.BER));
    }
    if (value.uWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_UWANUserLocationInfo, $.BER)(value.uWANUserLocationInformation, $.BER));
    }
    if (value.relatedChangeOfCharCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_RelatedChangeOfCharCondition, $.BER)(value.relatedChangeOfCharCondition, $.BER));
    }
    if (value.cPCIoTEPSOptimisationIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeBoolean, $.BER)(value.cPCIoTEPSOptimisationIndicator, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    if (value.listOfPresenceReportingAreaInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<PresenceReportingAreaInfo>(() => _encode_PresenceReportingAreaInfo, $.BER), $.BER)(value.listOfPresenceReportingAreaInformation, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfCharCondition(value, elGetter);
}


/* eslint-enable */
