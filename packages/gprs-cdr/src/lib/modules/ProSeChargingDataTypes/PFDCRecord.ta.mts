/* eslint-disable */
import {
    type IA5String,
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../ProSeChargingDataTypes/RecordType.ta.mjs";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ProSeChargingDataTypes/IPAddress.ta.mjs";
import { type ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../ProSeChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ProSeChargingDataTypes/ManagementExtension.ta.mjs";
import { CoverageInfo, _decode_CoverageInfo, _encode_CoverageInfo } from "../ProSeChargingDataTypes/CoverageInfo.ta.mjs";
import { RadioParameterSetInfo, _decode_RadioParameterSetInfo, _encode_RadioParameterSetInfo } from "../ProSeChargingDataTypes/RadioParameterSetInfo.ta.mjs";
import { TransmitterInfo, _decode_TransmitterInfo, _encode_TransmitterInfo } from "../ProSeChargingDataTypes/TransmitterInfo.ta.mjs";
import { ChangeOfProSeCondition, _decode_ChangeOfProSeCondition, _encode_ChangeOfProSeCondition } from "../ProSeChargingDataTypes/ChangeOfProSeCondition.ta.mjs";
import { ProSeCauseForRecClosing, _decode_ProSeCauseForRecClosing, _encode_ProSeCauseForRecClosing, _enum_for_ProSeCauseForRecClosing } from "../ProSeChargingDataTypes/ProSeCauseForRecClosing.ta.mjs";


/**
 * @summary PFDCRecord
 * @description
 *
 * ProSe Function Direct Communication CDR (PF-DC-CDR). The HPLMN ProSe Function
 * produces it from usage information the UE reports over PC3. Clause 5.2.3.1.1
 * uses one CDR to collect charging information for ProSe Direct Communication
 * of a specific group, and the CDR can hold several containers. Clause 5.2.1.4
 * also generates a PF-DC-CDR for one-to-one Direct Communication and for Direct
 * Communication via a ProSe UE-to-Network Relay.
 *
 * Event-based or session-based charging is selected by ProSe Function and CDF
 * configuration. The charging session is not a group-communication session: TS
 * 23.303 defines no session for the group communication.
 *
 * A usage report for a group opens a PF-DC-CDR when none is already open for
 * that group. One UE report can describe several groups, and each group is
 * charged on its own. For event-based charging the CDR is closed when that
 * report is received. For session-based charging it stays open across reports
 * and closes when an operator-configured maximum number of reports or maximum
 * time limit is reached; the next report for the group opens another CDR.
 *
 * Out of E-UTRAN coverage the UE stores the reports in a secure environment and
 * sends them after it returns to coverage. For Public Safety the UE can keep
 * using Direct Communication when usage collection or reporting fails. The
 * network configures which usage elements the UE includes.
 *
 * Field categories follow TS 32.240 clause 5.4 and are copied from table
 * 6.1.3.4.1.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.3, 5.1.2.4, 5.2.1.4, 5.2.2.3.1,
 * and 5.2.3.1.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDCRecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    retransmission                 [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID               [2] IMPLICIT UTF8String OPTIONAL,
 *    servedIMSI                     [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    proSeFunctionIPAddress         [4] IPAddress OPTIONAL,
 *    chargingCharacteristics        [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode              [6] IMPLICIT ChChSelectionMode OPTIONAL,
 *    recordExtensions               [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    nodeID                         [8] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    proseFunctionPLMNIdentifier    [9] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    proseFunctionId                [10] IMPLICIT UTF8String OPTIONAL,
 *    recordOpeningTime              [11] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime              [12] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    listOfCoverageInfo             [13] IMPLICIT SEQUENCE  OF
 *       CoverageInfo OPTIONAL,
 *    listOfRadioParameterSet        [14] IMPLICIT SEQUENCE  OF
 *       RadioParameterSetInfo OPTIONAL,
 *    proSeUEID                      [15] IMPLICIT OCTET STRING OPTIONAL,
 *    sourceIPaddress                [16] IPAddress OPTIONAL,
 *    layerTwoGroupID                [17] IMPLICIT OCTET STRING OPTIONAL,
 *    proSeGroupIPmulticastaddress   [18] IPAddress OPTIONAL,
 *    timeOfFirstTransmission        [19] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfFirstReception           [20] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    listOfTransmitters             [21] IMPLICIT SEQUENCE  OF
 *       TransmitterInfo OPTIONAL,
 *    listOfTransmissionData         [22] IMPLICIT SEQUENCE  OF
 *       ChangeOfProSeCondition OPTIONAL,
 *    listOfReceptionData            [23] IMPLICIT SEQUENCE  OF
 *       ChangeOfProSeCondition OPTIONAL,
 *    causeForRecClosing             [24] IMPLICIT ProSeCauseForRecClosing,
 *    listOfAppSpecificData          [25] IMPLICIT SEQUENCE  OF
 *       OCTET STRING,
 *    targetIPaddress                [26] IPAddress OPTIONAL,
 *    relayIPaddress                 [27] IPAddress OPTIONAL,
 *    proSeUEtoNetworkRelayUEID      [28] IMPLICIT OCTET STRING OPTIONAL,
 *    proSeTargetLayerTwoID          [29] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PFDCRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. ProSe Direct Communication record. Set this to `pFDCRecord`.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.30.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @description
     *
     * Category Oc. Present when information from a retransmitted Charging Data
     * Request was used in this CDR.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * Service Context Id from Diameter Accounting, present when Diameter
     * Accounting was used and the accounting message included it. It identifies
     * the service, subsystem, or domain, and the release, that the CDR applies
     * to. The contents are described in TS 32.299.
     *
     * Table 6.1.3.4.1 does not list this field.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * Category C. IMSI of the served party. The UE includes its identity, for
     * example the IMSI, in the usage information report.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeFunctionIPAddress`.
     * @description
     *
     * Category Oc. IP address of the ProSe Function.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.18.
     *
     * @public
     * @readonly
     */
    readonly proSeFunctionIPAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `chargingCharacteristics`.
     * @description
     *
     * Category M. The Charging Characteristics applied to the ProSe group
     * communication. The HSS supplies them to the HPLMN ProSe Function with the
     * subscription. The ProSe Function uses the profile to choose online or
     * offline charging. The VPLMN and local PLMN ProSe Functions only support
     * offline charging for the UE, and do not need Charging Characteristics. If
     * the HSS supplies none, the ProSe Function applies a pre-configured
     * default: home default behaviour when a subscriber of its PLMN uses ProSe
     * in the HPLMN, or roaming default behaviour when that subscriber uses
     * ProSe in another PLMN. Different parameters may be configured for
     * different ProSe services. Examples are in TS 32.251 annex A.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1 and annex A.1.
     *
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `chChSelectionMode`.
     * @description
     *
     * Category OM. How the Charging Characteristics were selected. Annex A
     * names the home default and roaming default behaviours used when the HSS
     * does not supply Charging Characteristics. The value comes from the shared
     * `ChChSelectionMode` enumeration; TS 32.277 does not define those values.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1 and annex A.1.
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Category Oc. Network operator or manufacturer specific extensions to the
     * record. Present when such an extension exists.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * Category Oc. Identifier of the ProSe Function. The FQDN of that ProSe
     * Function is `proseFunctionId`. TS 32.298 also describes Node ID as an
     * operator-configurable identifier of the node that generated the CDR,
     * which may or may not be the DNS host name.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.7.12, applied under clause 5.1.4.7.
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `proseFunctionPLMNIdentifier`.
     * @description
     *
     * Category OM. PLMN identity of the HPLMN ProSe Function. Direct
     * Communication CDRs are produced from usage reports sent to that HPLMN
     * ProSe Function.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.4 and table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proseFunctionId`.
     * @description
     *
     * Category Oc. FQDN that identifies the ProSe Function.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly proseFunctionId: OPTIONAL<UTF8String>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * Category M. Timestamp when the CDR was opened. A CDR is opened when a
     * usage information report arrives for a group that has no open PF-DC-CDR.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.1 and table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordClosureTime`.
     * @description
     *
     * Table 6.1.3.4.1 does not describe this field. That table does define
     * Record Opening Time and Cause for Record Closing.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.1.3.4.
     *
     * @public
     * @readonly
     */
    readonly recordClosureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfCoverageInfo`.
     * @description
     *
     * Category Oc. Coverage status changes, each with a timestamp. While the UE
     * is in E-UTRAN coverage, a container also includes ECGI changes and their
     * timestamps. On receipt of a usage information report these containers are
     * added to every open group PF-DC-CDR, if the UE was configured to include
     * them.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2 and table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.6B.
     *
     * @public
     * @readonly
     */
    readonly listOfCoverageInfo: OPTIONAL<CoverageInfo[]>;
    /**
     * @summary `listOfRadioParameterSet`.
     * @description
     *
     * Category Oc. Radio parameter sets configured in the UE for direct
     * communication, as defined in TS 24.333. Each set carries the time it
     * became active. A newly active set is added to every open group PF-DC-CDR
     * when the ProSe Function receives it in a usage information report.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2 and table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly listOfRadioParameterSet: OPTIONAL<RadioParameterSetInfo[]>;
    /**
     * @summary `proSeUEID`.
     * @description
     *
     * Category Oc. Link-layer identifier assigned by the EPS that uniquely
     * represents this UE in ProSe Direct Communication.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly proSeUEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sourceIPaddress`.
     * @description
     *
     * Category Oc. IP address the UE used as the source address for ProSe
     * Direct Communication. That covers one-to-many communication, one-to-one
     * communication, and communication via a ProSe UE-to-Network Relay.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly sourceIPaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `layerTwoGroupID`.
     * @description
     *
     * Category Oc. Identifier of a ProSe communication group. It uniquely
     * represents one one-to-many ProSe Direct Communication, and it is included
     * in the CDR of each participant in that group.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.6.
     *
     * @public
     * @readonly
     */
    readonly layerTwoGroupID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeGroupIPmulticastaddress`.
     * @description
     *
     * Category Oc. IP multicast address used to perform the ProSe Direct
     * Communication.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly proSeGroupIPmulticastaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `timeOfFirstTransmission`.
     * @description
     *
     * Category Oc. When collection of transmission data started for the group
     * in this CDR, which is the first one-to-many transmission. Clause 6.3.1.2
     * describes the corresponding information element as the UTC time of the
     * first IP packet transmitted. The network can configure the UE to leave
     * this timestamp out.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.38B.
     *
     * @public
     * @readonly
     */
    readonly timeOfFirstTransmission: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfFirstReception`.
     * @description
     *
     * Category Oc. When collection of reception data started for the group in
     * this CDR, which is the first one-to-many reception. Clause 6.3.1.2
     * describes the corresponding information element as the UTC time of the
     * first IP packet received. The network can configure the UE to leave this
     * timestamp out.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.38A.
     *
     * @public
     * @readonly
     */
    readonly timeOfFirstReception: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfTransmitters`.
     * @description
     *
     * Category Oc. Transmitters detected for the group. Each entry is a source
     * IP address and a ProSe UE ID. A transmitter is added to the CDR of the
     * group that has usage to report, when the UE detects it and the ProSe
     * Function receives it in a usage information report.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2 and table 6.1.3.4.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.7A.
     *
     * @public
     * @readonly
     */
    readonly listOfTransmitters: OPTIONAL<TransmitterInfo[]>;
    /**
     * @summary `listOfTransmissionData`.
     * @description
     *
     * Category OM. Changes of charging condition for transmission in this ProSe
     * group communication, such as a cell change, leaving coverage, or
     * returning to coverage. Each change is timestamped, and the condition
     * categorizes transmitted volume, for example volume per coverage-status
     * period. Containers are added when a usage information report arrives for
     * a group that has usage to report, if the UE was configured to include
     * them.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2 and table 6.1.3.4.1. Container
     * layout is table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly listOfTransmissionData: OPTIONAL<ChangeOfProSeCondition[]>;
    /**
     * @summary `listOfReceptionData`.
     * @description
     *
     * Category Oc. Changes of charging condition for reception in this ProSe
     * group communication, such as a cell change, leaving coverage, or
     * returning to coverage. Each change is timestamped, and the condition
     * categorizes received volume, for example volume per coverage-status
     * period. Containers are added on the same usage-report trigger as
     * `listOfTransmissionData`.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2 and table 6.1.3.4.1. Container
     * layout is table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly listOfReceptionData: OPTIONAL<ChangeOfProSeCondition[]>;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * Category M. Reason this ProSe Function closed the record. For event-based
     * charging the CDR closes when the usage information report for the group
     * is received. For session-based charging it closes when the
     * operator-configured maximum number of reports or maximum time limit is
     * reached.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.2.3.1.2, 5.2.3.1.3, and table
     * 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: ProSeCauseForRecClosing;
    /**
     * @summary `listOfAppSpecificData`.
     * @description
     *
     * Category Oc. Data blocks from the application in the UE. Each block's
     * content is defined by the application. When the UE sends a block, it is
     * added to every open group CDR. The content should identify which groups
     * it applies to and should identify the chargeable events, so the billing
     * domain charges it once. Examples are application-specific session floor
     * control information and the application-layer user IDs of group members.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3, 5.2.3.1.2, and table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly listOfAppSpecificData: OCTET_STRING[];
    /**
     * @summary `targetIPaddress`.
     * @description
     *
     * Category Oc. IP unicast address the target UE used for non-relay ProSe
     * one-to-one Direct Communication.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly targetIPaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `relayIPaddress`.
     * @description
     *
     * Category Oc. IP address used as the ProSe UE-to-Network Relay UE address
     * for Direct Communication via a UE-to-Network Relay.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly relayIPaddress: OPTIONAL<IPAddress>;
    /**
     * @summary `proSeUEtoNetworkRelayUEID`.
     * @description
     *
     * Category Oc. Link-layer identifier that uniquely represents the ProSe
     * UE-to-Network Relay UE in Direct Communication via that relay.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly proSeUEtoNetworkRelayUEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proSeTargetLayerTwoID`.
     * @description
     *
     * Category Oc. Identifier of the target UE. It uniquely represents one
     * one-to-one ProSe Direct Communication.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.1.
     *
     * @public
     * @readonly
     */
    readonly proSeTargetLayerTwoID: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        proSeFunctionIPAddress: OPTIONAL<IPAddress>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        nodeID: OPTIONAL<IA5String>,
        proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        proseFunctionId: OPTIONAL<UTF8String>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        listOfCoverageInfo: OPTIONAL<CoverageInfo[]>,
        listOfRadioParameterSet: OPTIONAL<RadioParameterSetInfo[]>,
        proSeUEID: OPTIONAL<OCTET_STRING>,
        sourceIPaddress: OPTIONAL<IPAddress>,
        layerTwoGroupID: OPTIONAL<OCTET_STRING>,
        proSeGroupIPmulticastaddress: OPTIONAL<IPAddress>,
        timeOfFirstTransmission: OPTIONAL<OCTET_STRING>,
        timeOfFirstReception: OPTIONAL<OCTET_STRING>,
        listOfTransmitters: OPTIONAL<TransmitterInfo[]>,
        listOfTransmissionData: OPTIONAL<ChangeOfProSeCondition[]>,
        listOfReceptionData: OPTIONAL<ChangeOfProSeCondition[]>,
        causeForRecClosing: ProSeCauseForRecClosing,
        listOfAppSpecificData: OCTET_STRING[],
        targetIPaddress?: OPTIONAL<IPAddress>,
        relayIPaddress?: OPTIONAL<IPAddress>,
        proSeUEtoNetworkRelayUEID?: OPTIONAL<OCTET_STRING>,
        proSeTargetLayerTwoID?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.servedIMSI = servedIMSI;
        this.proSeFunctionIPAddress = proSeFunctionIPAddress;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.recordExtensions = recordExtensions;
        this.nodeID = nodeID;
        this.proseFunctionPLMNIdentifier = proseFunctionPLMNIdentifier;
        this.proseFunctionId = proseFunctionId;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.listOfCoverageInfo = listOfCoverageInfo;
        this.listOfRadioParameterSet = listOfRadioParameterSet;
        this.proSeUEID = proSeUEID;
        this.sourceIPaddress = sourceIPaddress;
        this.layerTwoGroupID = layerTwoGroupID;
        this.proSeGroupIPmulticastaddress = proSeGroupIPmulticastaddress;
        this.timeOfFirstTransmission = timeOfFirstTransmission;
        this.timeOfFirstReception = timeOfFirstReception;
        this.listOfTransmitters = listOfTransmitters;
        this.listOfTransmissionData = listOfTransmissionData;
        this.listOfReceptionData = listOfReceptionData;
        this.causeForRecClosing = causeForRecClosing;
        this.listOfAppSpecificData = listOfAppSpecificData;
        this.targetIPaddress = targetIPaddress;
        this.relayIPaddress = relayIPaddress;
        this.proSeUEtoNetworkRelayUEID = proSeUEtoNetworkRelayUEID;
        this.proSeTargetLayerTwoID = proSeTargetLayerTwoID;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PFDCRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PFDCRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("PFDCRecord.nodeID violates SIZE constraint");
        }
        if (this.proseFunctionPLMNIdentifier !== undefined && (this.proseFunctionPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDCRecord.proseFunctionPLMNIdentifier violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.timeOfFirstTransmission !== undefined && (this.timeOfFirstTransmission.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.timeOfFirstTransmission violates SIZE constraint");
        }
        if (this.timeOfFirstReception !== undefined && (this.timeOfFirstReception.length !== 9)) {
            throw new ASN1SizeError("PFDCRecord.timeOfFirstReception violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PFDCRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PFDCRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDCRecord`.
     * @returns {PFDCRecord}
     */
    public static _from_object (_o: { [_K in keyof (PFDCRecord)]: (PFDCRecord)[_K] }): PFDCRecord {
        return new PFDCRecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.servedIMSI, _o.proSeFunctionIPAddress, _o.chargingCharacteristics, _o.chChSelectionMode, _o.recordExtensions, _o.nodeID, _o.proseFunctionPLMNIdentifier, _o.proseFunctionId, _o.recordOpeningTime, _o.recordClosureTime, _o.listOfCoverageInfo, _o.listOfRadioParameterSet, _o.proSeUEID, _o.sourceIPaddress, _o.layerTwoGroupID, _o.proSeGroupIPmulticastaddress, _o.timeOfFirstTransmission, _o.timeOfFirstReception, _o.listOfTransmitters, _o.listOfTransmissionData, _o.listOfReceptionData, _o.causeForRecClosing, _o.listOfAppSpecificData, _o.targetIPaddress, _o.relayIPaddress, _o.proSeUEtoNetworkRelayUEID, _o.proSeTargetLayerTwoID);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `causeForRecClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecClosing = _enum_for_ProSeCauseForRecClosing;
}

/**
 * @summary The Leading Root Component Types of PFDCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDCRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("proSeFunctionIPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("proseFunctionPLMNIdentifier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("proseFunctionId", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("listOfCoverageInfo", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("listOfRadioParameterSet", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("proSeUEID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sourceIPaddress", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("layerTwoGroupID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("proSeGroupIPmulticastaddress", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("timeOfFirstTransmission", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("timeOfFirstReception", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("listOfTransmitters", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("listOfTransmissionData", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("listOfReceptionData", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("listOfAppSpecificData", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("targetIPaddress", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("relayIPaddress", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("proSeUEtoNetworkRelayUEID", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("proSeTargetLayerTwoID", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of PFDCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDCRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDCRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDCRecord: $.ASN1Decoder<PFDCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDCRecord (el: _Element): PFDCRecord {
    if (!_cached_decoder_for_PFDCRecord) { _cached_decoder_for_PFDCRecord = function (el: _Element): PFDCRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let proSeFunctionIPAddress: OPTIONAL<IPAddress>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let nodeID: OPTIONAL<IA5String>;
    let proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let proseFunctionId: OPTIONAL<UTF8String>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let listOfCoverageInfo: OPTIONAL<CoverageInfo[]>;
    let listOfRadioParameterSet: OPTIONAL<RadioParameterSetInfo[]>;
    let proSeUEID: OPTIONAL<OCTET_STRING>;
    let sourceIPaddress: OPTIONAL<IPAddress>;
    let layerTwoGroupID: OPTIONAL<OCTET_STRING>;
    let proSeGroupIPmulticastaddress: OPTIONAL<IPAddress>;
    let timeOfFirstTransmission: OPTIONAL<OCTET_STRING>;
    let timeOfFirstReception: OPTIONAL<OCTET_STRING>;
    let listOfTransmitters: OPTIONAL<TransmitterInfo[]>;
    let listOfTransmissionData: OPTIONAL<ChangeOfProSeCondition[]>;
    let listOfReceptionData: OPTIONAL<ChangeOfProSeCondition[]>;
    let causeForRecClosing!: ProSeCauseForRecClosing;
    let listOfAppSpecificData!: OCTET_STRING[];
    let targetIPaddress: OPTIONAL<IPAddress>;
    let relayIPaddress: OPTIONAL<IPAddress>;
    let proSeUEtoNetworkRelayUEID: OPTIONAL<OCTET_STRING>;
    let proSeTargetLayerTwoID: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeFunctionIPAddress": (_el: _Element): void => { proSeFunctionIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "proseFunctionPLMNIdentifier": (_el: _Element): void => { proseFunctionPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proseFunctionId": (_el: _Element): void => { proseFunctionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfCoverageInfo": (_el: _Element): void => { listOfCoverageInfo = $._decode_implicit<CoverageInfo[]>(() => $._decodeSequenceOf<CoverageInfo>(() => _decode_CoverageInfo))(_el); },
        "listOfRadioParameterSet": (_el: _Element): void => { listOfRadioParameterSet = $._decode_implicit<RadioParameterSetInfo[]>(() => $._decodeSequenceOf<RadioParameterSetInfo>(() => _decode_RadioParameterSetInfo))(_el); },
        "proSeUEID": (_el: _Element): void => { proSeUEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sourceIPaddress": (_el: _Element): void => { sourceIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "layerTwoGroupID": (_el: _Element): void => { layerTwoGroupID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeGroupIPmulticastaddress": (_el: _Element): void => { proSeGroupIPmulticastaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "timeOfFirstTransmission": (_el: _Element): void => { timeOfFirstTransmission = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfFirstReception": (_el: _Element): void => { timeOfFirstReception = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfTransmitters": (_el: _Element): void => { listOfTransmitters = $._decode_implicit<TransmitterInfo[]>(() => $._decodeSequenceOf<TransmitterInfo>(() => _decode_TransmitterInfo))(_el); },
        "listOfTransmissionData": (_el: _Element): void => { listOfTransmissionData = $._decode_implicit<ChangeOfProSeCondition[]>(() => $._decodeSequenceOf<ChangeOfProSeCondition>(() => _decode_ChangeOfProSeCondition))(_el); },
        "listOfReceptionData": (_el: _Element): void => { listOfReceptionData = $._decode_implicit<ChangeOfProSeCondition[]>(() => $._decodeSequenceOf<ChangeOfProSeCondition>(() => _decode_ChangeOfProSeCondition))(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<ProSeCauseForRecClosing>(() => _decode_ProSeCauseForRecClosing)(_el); },
        "listOfAppSpecificData": (_el: _Element): void => { listOfAppSpecificData = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "targetIPaddress": (_el: _Element): void => { targetIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "relayIPaddress": (_el: _Element): void => { relayIPaddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "proSeUEtoNetworkRelayUEID": (_el: _Element): void => { proSeUEtoNetworkRelayUEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proSeTargetLayerTwoID": (_el: _Element): void => { proSeTargetLayerTwoID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PFDCRecord,
        _extension_additions_list_spec_for_PFDCRecord,
        _root_component_type_list_2_spec_for_PFDCRecord,
        undefined,
    );
    return new PFDCRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        servedIMSI,
        proSeFunctionIPAddress,
        chargingCharacteristics,
        chChSelectionMode,
        recordExtensions,
        nodeID,
        proseFunctionPLMNIdentifier,
        proseFunctionId,
        recordOpeningTime,
        recordClosureTime,
        listOfCoverageInfo,
        listOfRadioParameterSet,
        proSeUEID,
        sourceIPaddress,
        layerTwoGroupID,
        proSeGroupIPmulticastaddress,
        timeOfFirstTransmission,
        timeOfFirstReception,
        listOfTransmitters,
        listOfTransmissionData,
        listOfReceptionData,
        causeForRecClosing,
        listOfAppSpecificData,
        targetIPaddress,
        relayIPaddress,
        proSeUEtoNetworkRelayUEID,
        proSeTargetLayerTwoID
    );
}; }
    return _cached_decoder_for_PFDCRecord(el);
}

let _cached_encoder_for_PFDCRecord: $.ASN1Encoder<PFDCRecord> | null = null;

/**
 * @summary Encodes a(n) PFDCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PFDCRecord (value: PFDCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDCRecord) { _cached_encoder_for_PFDCRecord = function (value: PFDCRecord, _elGetter: $.ASN1Encoder<PFDCRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.proSeFunctionIPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.proSeFunctionIPAddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.proseFunctionPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.proseFunctionPLMNIdentifier, $.BER));
    }
    if (value.proseFunctionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.proseFunctionId, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.listOfCoverageInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<CoverageInfo>(() => _encode_CoverageInfo, $.BER), $.BER)(value.listOfCoverageInfo, $.BER));
    }
    if (value.listOfRadioParameterSet !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<RadioParameterSetInfo>(() => _encode_RadioParameterSetInfo, $.BER), $.BER)(value.listOfRadioParameterSet, $.BER));
    }
    if (value.proSeUEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.proSeUEID, $.BER));
    }
    if (value.sourceIPaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_IPAddress, $.BER)(value.sourceIPaddress, $.BER));
    }
    if (value.layerTwoGroupID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.layerTwoGroupID, $.BER));
    }
    if (value.proSeGroupIPmulticastaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 18, () => _encode_IPAddress, $.BER)(value.proSeGroupIPmulticastaddress, $.BER));
    }
    if (value.timeOfFirstTransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.timeOfFirstTransmission, $.BER));
    }
    if (value.timeOfFirstReception !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.timeOfFirstReception, $.BER));
    }
    if (value.listOfTransmitters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeSequenceOf<TransmitterInfo>(() => _encode_TransmitterInfo, $.BER), $.BER)(value.listOfTransmitters, $.BER));
    }
    if (value.listOfTransmissionData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeSequenceOf<ChangeOfProSeCondition>(() => _encode_ChangeOfProSeCondition, $.BER), $.BER)(value.listOfTransmissionData, $.BER));
    }
    if (value.listOfReceptionData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeSequenceOf<ChangeOfProSeCondition>(() => _encode_ChangeOfProSeCondition, $.BER), $.BER)(value.listOfReceptionData, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => _encode_ProSeCauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.listOfAppSpecificData, $.BER));
    if (value.targetIPaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 26, () => _encode_IPAddress, $.BER)(value.targetIPaddress, $.BER));
    }
    if (value.relayIPaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 27, () => _encode_IPAddress, $.BER)(value.relayIPaddress, $.BER));
    }
    if (value.proSeUEtoNetworkRelayUEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.proSeUEtoNetworkRelayUEID, $.BER));
    }
    if (value.proSeTargetLayerTwoID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.proSeTargetLayerTwoID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PFDCRecord(value, elGetter);
}


/* eslint-enable */
