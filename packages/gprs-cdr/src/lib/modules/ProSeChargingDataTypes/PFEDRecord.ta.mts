/* eslint-disable */
import {
    type INTEGER,
    NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../ProSeChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ProSeChargingDataTypes/IPAddress.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../ProSeChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ProSeChargingDataTypes/ManagementExtension.ta.mjs";
import { ProSeUERole, _decode_ProSeUERole, _encode_ProSeUERole, _enum_for_ProSeUERole } from "../ProSeChargingDataTypes/ProSeUERole.ta.mjs";
import { RangeClass, _decode_RangeClass, _encode_RangeClass, _enum_for_RangeClass } from "../ProSeChargingDataTypes/RangeClass.ta.mjs";
import { ProximityAlertIndication, _decode_ProximityAlertIndication, _encode_ProximityAlertIndication, _enum_for_ProximityAlertIndication } from "../ProSeChargingDataTypes/ProximityAlertIndication.ta.mjs";
import { ReasonforCancellation, _decode_ReasonforCancellation, _encode_ReasonforCancellation, _enum_for_ReasonforCancellation } from "../ProSeChargingDataTypes/ReasonforCancellation.ta.mjs";
import { ProSeCauseForRecClosing, _decode_ProSeCauseForRecClosing, _encode_ProSeCauseForRecClosing, _enum_for_ProSeCauseForRecClosing } from "../ProSeChargingDataTypes/ProSeCauseForRecClosing.ta.mjs";
import { ProximityRequestRenewalInfoBlock, _decode_ProximityRequestRenewalInfoBlock, _encode_ProximityRequestRenewalInfoBlock } from "../ProSeChargingDataTypes/ProximityRequestRenewalInfoBlock.ta.mjs";


/**
 * @summary PFEDRecord
 * @description
 *
 * ProSe Function EPC-level Discovery CDR (PF-ED-CDR). When enabled, the ProSe
 * Function produces one record for each EPC-level discovery request for a
 * specific user received from a ProSe-enabled UE. Renewal requests for that
 * user are written into the same CDR as the initial request.
 *
 * A Proximity Request opens the CDR and captures the requestor's EPC ProSe user
 * ID, the application-layer user IDs, the application ID, the time window, the
 * range class, and the UE location. A Proximity Request Renewal updates that
 * CDR. A Proximity Request Reject closes it and records the reject cause. A
 * Proximity Request Cancellation closes it and records whether a proximity
 * alert was sent.
 *
 * EPC-level Discovery is not supported in 5GS.
 *
 * Field categories follow TS 32.240 clause 5.4 and are copied from table
 * 6.1.3.3.1.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.2, 5.2.1.1, 5.2.1.3, and 6.1.3.3.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFEDRecord ::= SET {
 *    recordType                             [0] IMPLICIT RecordType,
 *    retransmission                         [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID                       [2] IMPLICIT UTF8String OPTIONAL,
 *    servedIMSI                             [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    proSeFunctionIPAddress                 [4] IPAddress OPTIONAL,
 *    chargingCharacteristics                [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode                      [6] IMPLICIT ChChSelectionMode OPTIONAL,
 *    recordExtensions                       [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    proSeRequestTimestamp                  [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    roleofUE                               [9] IMPLICIT ProSeUERole OPTIONAL,
 *    pCThreeEPCControlProtocolCause         [10] IMPLICIT INTEGER OPTIONAL,
 *    proseFunctionPLMNIdentifier            [11] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    proseFunctionId                        [12] IMPLICIT UTF8String OPTIONAL,
 *    recordOpeningTime                      [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    recordClosureTime                      [14] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    applicationID                          [15] IMPLICIT UTF8String OPTIONAL,
 *    requestorApplicationLayerUserID        [16] IMPLICIT UTF8String OPTIONAL,
 *    wLANLinkLayerID                        [17] IMPLICIT UTF8String OPTIONAL,
 *    requestorEPCProSeUserID                [18] IMPLICIT UTF8String OPTIONAL,
 *    requestedApplicationLayerUserID        [19] IMPLICIT UTF8String OPTIONAL,
 *    requestedPLMNIdentifier                [20] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    timeWindow                             [21] IMPLICIT INTEGER OPTIONAL,
 *    rangeClass                             [22] IMPLICIT RangeClass OPTIONAL,
 *    uELocation                             [23] IMPLICIT OCTET STRING OPTIONAL,
 *    proximityAlertIndication               [24] IMPLICIT ProximityAlertIndication OPTIONAL,
 *    proximityAlertTimestamp                [25] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    proximityCancellationTimestamp         [26] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    reasonforCancellation                  [27] IMPLICIT ReasonforCancellation OPTIONAL,
 *    causeForRecClosing                     [28] IMPLICIT ProSeCauseForRecClosing,
 *    proximityRequestRenewalInfoBlockList   [29] IMPLICIT SEQUENCE  OF
 *       ProximityRequestRenewalInfoBlock OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PFEDRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. ProSe Function EPC-level Discovery record. Set this to
     * `pFEDRecord`.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
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
     * Category Oc. Present when information from retransmitted Accounting
     * Requests was used in this CDR.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
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
     * Table 6.1.3.3.1 does not list this field.
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
     * Category C. IMSI of the served party, the mobile subscriber using
     * EPC-level Discovery.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and table 6.1.3.3.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
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
     * Category M. The Charging Characteristics applied to the ProSe EPC-level
     * discovery. The HSS supplies them to the HPLMN ProSe Function with the
     * subscription. The ProSe Function uses the profile to choose online or
     * offline charging. The VPLMN and local PLMN ProSe Functions only support
     * offline charging for the UE, and do not need Charging Characteristics. If
     * the HSS supplies none, the ProSe Function applies a pre-configured
     * default: home default behaviour when a subscriber of its PLMN uses ProSe
     * in the HPLMN, or roaming default behaviour when that subscriber uses
     * ProSe in another PLMN. Different parameters may be configured for
     * different ProSe services. Examples are in TS 32.251 annex A.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1 and annex A.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1 and annex A.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `proSeRequestTimestamp`.
     * @description
     *
     * Category Oc. Time the first ProSe proximity request was received from the
     * UE. Each renewal has its own timestamp in
     * `proximityRequestRenewalInfoBlockList`.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.22.
     *
     * @public
     * @readonly
     */
    readonly proSeRequestTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roleofUE`.
     * @description
     *
     * Category Oc. Role of the UE using ProSe. For EPC-level Discovery the
     * roles are requestor UE and requested UE.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly roleofUE: OPTIONAL<ProSeUERole>;
    /**
     * @summary `pCThreeEPCControlProtocolCause`.
     * @description
     *
     * Category Oc. Reason the ProSe Function rejected a Proximity Request from
     * the UE. A Proximity Request Reject closes the CDR and captures this
     * cause. TS 32.277 does not list the integer values.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly pCThreeEPCControlProtocolCause: OPTIONAL<INTEGER>;
    /**
     * @summary `proseFunctionPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the ProSe Function.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly proseFunctionId: OPTIONAL<UTF8String>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * Table 6.1.3.3.1 does not describe this field.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordClosureTime`.
     * @description
     *
     * Table 6.1.3.3.1 does not describe this field.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
     *
     * @public
     * @readonly
     */
    readonly recordClosureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `applicationID`.
     * @description
     *
     * Category Oc. Globally unique identifier of a specific 3rd party
     * application. Captured when the Proximity Request opens the CDR.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.3.
     *
     * @public
     * @readonly
     */
    readonly applicationID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestorApplicationLayerUserID`.
     * @description
     *
     * Category Oc. User identifier assigned in the 3rd party application for
     * the user who initiated the EPC-level ProSe discovery request. Captured
     * when the Proximity Request opens the CDR.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.33.
     *
     * @public
     * @readonly
     */
    readonly requestorApplicationLayerUserID: OPTIONAL<UTF8String>;
    /**
     * @summary `wLANLinkLayerID`.
     * @description
     *
     * Category Oc. WLAN link layer ID. Clause 5.1.2.2 collects WLAN direct
     * communication assistance information, and its timestamps, when that
     * assistance applies. TS 32.277 does not further define this identifier.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly wLANLinkLayerID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestorEPCProSeUserID`.
     * @description
     *
     * Category Oc. Identifier the ProSe Function generated for the UE that
     * initiated the EPC-level ProSe discovery request. Captured when the
     * Proximity Request opens the CDR.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.34.
     *
     * @public
     * @readonly
     */
    readonly requestorEPCProSeUserID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestedApplicationLayerUserID`.
     * @description
     *
     * Category Oc. User identifier assigned in the 3rd party application for
     * the user targeted by the proximity request.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.31.
     *
     * @public
     * @readonly
     */
    readonly requestedApplicationLayerUserID: OPTIONAL<UTF8String>;
    /**
     * @summary `requestedPLMNIdentifier`.
     * @description
     *
     * Category Oc. PLMN identifier of the user targeted by the proximity
     * request.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.32.
     *
     * @public
     * @readonly
     */
    readonly requestedPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeWindow`.
     * @description
     *
     * Category Oc. Time interval, in minutes, during which the first proximity
     * request is valid. This is the duration of EPC-level Discovery authorized
     * for the UE. A renewal carries its own window in
     * `proximityRequestRenewalInfoBlockList`.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.39 limits a time window to 1-1440
     * minutes.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly timeWindow: OPTIONAL<INTEGER>;
    /**
     * @summary `rangeClass`.
     * @description
     *
     * Category Oc. Range class of the first proximity request: the discovery
     * range authorized for the UE, for example a geographic limit. A renewal
     * carries its own range class in `proximityRequestRenewalInfoBlockList`.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.28.
     *
     * @public
     * @readonly
     */
    readonly rangeClass: OPTIONAL<RangeClass>;
    /**
     * @summary `uELocation`.
     * @description
     *
     * Category Oc. UE location, at the best known accuracy, when the first
     * proximity request was received. A Cell ID or geo-location coordinates are
     * examples.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.40 sets UE Location to the 28-bit
     * cell identity of the ECGI, taken from the UE's lower layers.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly uELocation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proximityAlertIndication`.
     * @description
     *
     * Category Oc. Whether a proximity alert was sent before the proximity
     * request was cancelled. Recorded when a Proximity Request Cancellation
     * closes the CDR.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.24.
     *
     * @public
     * @readonly
     */
    readonly proximityAlertIndication: OPTIONAL<ProximityAlertIndication>;
    /**
     * @summary `proximityAlertTimestamp`.
     * @description
     *
     * Category Oc. Time a proximity alert was sent, indicating that the two UEs
     * are in proximity.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.2 and table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.25.
     *
     * @public
     * @readonly
     */
    readonly proximityAlertTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `proximityCancellationTimestamp`.
     * @description
     *
     * Category Oc. Time cancellation of the proximity request was requested.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.26.
     *
     * @public
     * @readonly
     */
    readonly proximityCancellationTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `reasonforCancellation`.
     * @description
     *
     * Category Oc. Why the EPC-level discovery request was cancelled: proximity
     * alerted, time expired with no renewal, or the requestor cancelled it.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly reasonforCancellation: OPTIONAL<ReasonforCancellation>;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * Category M. Reason this ProSe Function released the record.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.3.1.
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: ProSeCauseForRecClosing;
    /**
     * @summary `proximityRequestRenewalInfoBlockList`.
     * @description
     *
     * Category Oc. One block for each Proximity Request Renewal captured in
     * this CDR. A renewal updates the open CDR for the initial request with a
     * new UE location, time window, and range class. Each block is table
     * 6.1.3.3.2.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.3 and 6.1.3.3.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.27.
     *
     * @public
     * @readonly
     */
    readonly proximityRequestRenewalInfoBlockList: OPTIONAL<ProximityRequestRenewalInfoBlock[]>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        proSeFunctionIPAddress: OPTIONAL<IPAddress>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        proSeRequestTimestamp: OPTIONAL<OCTET_STRING>,
        roleofUE: OPTIONAL<ProSeUERole>,
        pCThreeEPCControlProtocolCause: OPTIONAL<INTEGER>,
        proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        proseFunctionId: OPTIONAL<UTF8String>,
        recordOpeningTime: OPTIONAL<OCTET_STRING>,
        recordClosureTime: OPTIONAL<OCTET_STRING>,
        applicationID: OPTIONAL<UTF8String>,
        requestorApplicationLayerUserID: OPTIONAL<UTF8String>,
        wLANLinkLayerID: OPTIONAL<UTF8String>,
        requestorEPCProSeUserID: OPTIONAL<UTF8String>,
        requestedApplicationLayerUserID: OPTIONAL<UTF8String>,
        requestedPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        timeWindow: OPTIONAL<INTEGER>,
        rangeClass: OPTIONAL<RangeClass>,
        uELocation: OPTIONAL<OCTET_STRING>,
        proximityAlertIndication: OPTIONAL<ProximityAlertIndication>,
        proximityAlertTimestamp: OPTIONAL<OCTET_STRING>,
        proximityCancellationTimestamp: OPTIONAL<OCTET_STRING>,
        reasonforCancellation: OPTIONAL<ReasonforCancellation>,
        causeForRecClosing: ProSeCauseForRecClosing,
        proximityRequestRenewalInfoBlockList?: OPTIONAL<ProximityRequestRenewalInfoBlock[]>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.serviceContextID = serviceContextID;
        this.servedIMSI = servedIMSI;
        this.proSeFunctionIPAddress = proSeFunctionIPAddress;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.recordExtensions = recordExtensions;
        this.proSeRequestTimestamp = proSeRequestTimestamp;
        this.roleofUE = roleofUE;
        this.pCThreeEPCControlProtocolCause = pCThreeEPCControlProtocolCause;
        this.proseFunctionPLMNIdentifier = proseFunctionPLMNIdentifier;
        this.proseFunctionId = proseFunctionId;
        this.recordOpeningTime = recordOpeningTime;
        this.recordClosureTime = recordClosureTime;
        this.applicationID = applicationID;
        this.requestorApplicationLayerUserID = requestorApplicationLayerUserID;
        this.wLANLinkLayerID = wLANLinkLayerID;
        this.requestorEPCProSeUserID = requestorEPCProSeUserID;
        this.requestedApplicationLayerUserID = requestedApplicationLayerUserID;
        this.requestedPLMNIdentifier = requestedPLMNIdentifier;
        this.timeWindow = timeWindow;
        this.rangeClass = rangeClass;
        this.uELocation = uELocation;
        this.proximityAlertIndication = proximityAlertIndication;
        this.proximityAlertTimestamp = proximityAlertTimestamp;
        this.proximityCancellationTimestamp = proximityCancellationTimestamp;
        this.reasonforCancellation = reasonforCancellation;
        this.causeForRecClosing = causeForRecClosing;
        this.proximityRequestRenewalInfoBlockList = proximityRequestRenewalInfoBlockList;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PFEDRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PFEDRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.proSeRequestTimestamp !== undefined && (this.proSeRequestTimestamp.length !== 9)) {
            throw new ASN1SizeError("PFEDRecord.proSeRequestTimestamp violates SIZE constraint");
        }
        if (this.proseFunctionPLMNIdentifier !== undefined && (this.proseFunctionPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFEDRecord.proseFunctionPLMNIdentifier violates SIZE constraint");
        }
        if (this.recordOpeningTime !== undefined && (this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("PFEDRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.recordClosureTime !== undefined && (this.recordClosureTime.length !== 9)) {
            throw new ASN1SizeError("PFEDRecord.recordClosureTime violates SIZE constraint");
        }
        if (this.requestedPLMNIdentifier !== undefined && (this.requestedPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFEDRecord.requestedPLMNIdentifier violates SIZE constraint");
        }
        if (this.proximityAlertTimestamp !== undefined && (this.proximityAlertTimestamp.length !== 9)) {
            throw new ASN1SizeError("PFEDRecord.proximityAlertTimestamp violates SIZE constraint");
        }
        if (this.proximityCancellationTimestamp !== undefined && (this.proximityCancellationTimestamp.length !== 9)) {
            throw new ASN1SizeError("PFEDRecord.proximityCancellationTimestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PFEDRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PFEDRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFEDRecord`.
     * @returns {PFEDRecord}
     */
    public static _from_object (_o: { [_K in keyof (PFEDRecord)]: (PFEDRecord)[_K] }): PFEDRecord {
        return new PFEDRecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.servedIMSI, _o.proSeFunctionIPAddress, _o.chargingCharacteristics, _o.chChSelectionMode, _o.recordExtensions, _o.proSeRequestTimestamp, _o.roleofUE, _o.pCThreeEPCControlProtocolCause, _o.proseFunctionPLMNIdentifier, _o.proseFunctionId, _o.recordOpeningTime, _o.recordClosureTime, _o.applicationID, _o.requestorApplicationLayerUserID, _o.wLANLinkLayerID, _o.requestorEPCProSeUserID, _o.requestedApplicationLayerUserID, _o.requestedPLMNIdentifier, _o.timeWindow, _o.rangeClass, _o.uELocation, _o.proximityAlertIndication, _o.proximityAlertTimestamp, _o.proximityCancellationTimestamp, _o.reasonforCancellation, _o.causeForRecClosing, _o.proximityRequestRenewalInfoBlockList);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;        /**
         * @summary The enum used as the type of the component `roleofUE`
         * @public
         * @static
         */

    public static _enum_for_roleofUE = _enum_for_ProSeUERole;        /**
         * @summary The enum used as the type of the component `rangeClass`
         * @public
         * @static
         */

    public static _enum_for_rangeClass = _enum_for_RangeClass;        /**
         * @summary The enum used as the type of the component `proximityAlertIndication`
         * @public
         * @static
         */

    public static _enum_for_proximityAlertIndication = _enum_for_ProximityAlertIndication;        /**
         * @summary The enum used as the type of the component `reasonforCancellation`
         * @public
         * @static
         */

    public static _enum_for_reasonforCancellation = _enum_for_ReasonforCancellation;        /**
         * @summary The enum used as the type of the component `causeForRecClosing`
         * @public
         * @static
         */

    public static _enum_for_causeForRecClosing = _enum_for_ProSeCauseForRecClosing;
}

/**
 * @summary The Leading Root Component Types of PFEDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFEDRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("proSeFunctionIPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("proSeRequestTimestamp", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("roleofUE", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("pCThreeEPCControlProtocolCause", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("proseFunctionPLMNIdentifier", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("proseFunctionId", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordOpeningTime", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordClosureTime", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("requestorApplicationLayerUserID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("wLANLinkLayerID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("requestorEPCProSeUserID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("requestedApplicationLayerUserID", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("requestedPLMNIdentifier", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("timeWindow", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("rangeClass", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("uELocation", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("proximityAlertIndication", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("proximityAlertTimestamp", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("proximityCancellationTimestamp", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("reasonforCancellation", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("proximityRequestRenewalInfoBlockList", true, $.hasTag(_TagClass.context, 29))
];

/**
 * @summary The Trailing Root Component Types of PFEDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFEDRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFEDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFEDRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFEDRecord: $.ASN1Decoder<PFEDRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFEDRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFEDRecord (el: _Element): PFEDRecord {
    if (!_cached_decoder_for_PFEDRecord) { _cached_decoder_for_PFEDRecord = function (el: _Element): PFEDRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let serviceContextID: OPTIONAL<UTF8String>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let proSeFunctionIPAddress: OPTIONAL<IPAddress>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let proSeRequestTimestamp: OPTIONAL<OCTET_STRING>;
    let roleofUE: OPTIONAL<ProSeUERole>;
    let pCThreeEPCControlProtocolCause: OPTIONAL<INTEGER>;
    let proseFunctionPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let proseFunctionId: OPTIONAL<UTF8String>;
    let recordOpeningTime: OPTIONAL<OCTET_STRING>;
    let recordClosureTime: OPTIONAL<OCTET_STRING>;
    let applicationID: OPTIONAL<UTF8String>;
    let requestorApplicationLayerUserID: OPTIONAL<UTF8String>;
    let wLANLinkLayerID: OPTIONAL<UTF8String>;
    let requestorEPCProSeUserID: OPTIONAL<UTF8String>;
    let requestedApplicationLayerUserID: OPTIONAL<UTF8String>;
    let requestedPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let timeWindow: OPTIONAL<INTEGER>;
    let rangeClass: OPTIONAL<RangeClass>;
    let uELocation: OPTIONAL<OCTET_STRING>;
    let proximityAlertIndication: OPTIONAL<ProximityAlertIndication>;
    let proximityAlertTimestamp: OPTIONAL<OCTET_STRING>;
    let proximityCancellationTimestamp: OPTIONAL<OCTET_STRING>;
    let reasonforCancellation: OPTIONAL<ReasonforCancellation>;
    let causeForRecClosing!: ProSeCauseForRecClosing;
    let proximityRequestRenewalInfoBlockList: OPTIONAL<ProximityRequestRenewalInfoBlock[]>;
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
        "proSeRequestTimestamp": (_el: _Element): void => { proSeRequestTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roleofUE": (_el: _Element): void => { roleofUE = $._decode_implicit<ProSeUERole>(() => _decode_ProSeUERole)(_el); },
        "pCThreeEPCControlProtocolCause": (_el: _Element): void => { pCThreeEPCControlProtocolCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "proseFunctionPLMNIdentifier": (_el: _Element): void => { proseFunctionPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proseFunctionId": (_el: _Element): void => { proseFunctionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordClosureTime": (_el: _Element): void => { recordClosureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestorApplicationLayerUserID": (_el: _Element): void => { requestorApplicationLayerUserID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "wLANLinkLayerID": (_el: _Element): void => { wLANLinkLayerID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestorEPCProSeUserID": (_el: _Element): void => { requestorEPCProSeUserID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestedApplicationLayerUserID": (_el: _Element): void => { requestedApplicationLayerUserID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "requestedPLMNIdentifier": (_el: _Element): void => { requestedPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeWindow": (_el: _Element): void => { timeWindow = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rangeClass": (_el: _Element): void => { rangeClass = $._decode_implicit<RangeClass>(() => _decode_RangeClass)(_el); },
        "uELocation": (_el: _Element): void => { uELocation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proximityAlertIndication": (_el: _Element): void => { proximityAlertIndication = $._decode_implicit<ProximityAlertIndication>(() => _decode_ProximityAlertIndication)(_el); },
        "proximityAlertTimestamp": (_el: _Element): void => { proximityAlertTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "proximityCancellationTimestamp": (_el: _Element): void => { proximityCancellationTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "reasonforCancellation": (_el: _Element): void => { reasonforCancellation = $._decode_implicit<ReasonforCancellation>(() => _decode_ReasonforCancellation)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<ProSeCauseForRecClosing>(() => _decode_ProSeCauseForRecClosing)(_el); },
        "proximityRequestRenewalInfoBlockList": (_el: _Element): void => { proximityRequestRenewalInfoBlockList = $._decode_implicit<ProximityRequestRenewalInfoBlock[]>(() => $._decodeSequenceOf<ProximityRequestRenewalInfoBlock>(() => _decode_ProximityRequestRenewalInfoBlock))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PFEDRecord,
        _extension_additions_list_spec_for_PFEDRecord,
        _root_component_type_list_2_spec_for_PFEDRecord,
        undefined,
    );
    return new PFEDRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        serviceContextID,
        servedIMSI,
        proSeFunctionIPAddress,
        chargingCharacteristics,
        chChSelectionMode,
        recordExtensions,
        proSeRequestTimestamp,
        roleofUE,
        pCThreeEPCControlProtocolCause,
        proseFunctionPLMNIdentifier,
        proseFunctionId,
        recordOpeningTime,
        recordClosureTime,
        applicationID,
        requestorApplicationLayerUserID,
        wLANLinkLayerID,
        requestorEPCProSeUserID,
        requestedApplicationLayerUserID,
        requestedPLMNIdentifier,
        timeWindow,
        rangeClass,
        uELocation,
        proximityAlertIndication,
        proximityAlertTimestamp,
        proximityCancellationTimestamp,
        reasonforCancellation,
        causeForRecClosing,
        proximityRequestRenewalInfoBlockList
    );
}; }
    return _cached_decoder_for_PFEDRecord(el);
}

let _cached_encoder_for_PFEDRecord: $.ASN1Encoder<PFEDRecord> | null = null;

/**
 * @summary Encodes a(n) PFEDRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFEDRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PFEDRecord (value: PFEDRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFEDRecord) { _cached_encoder_for_PFEDRecord = function (value: PFEDRecord, _elGetter: $.ASN1Encoder<PFEDRecord>): _Element {
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
    if (value.proSeRequestTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.proSeRequestTimestamp, $.BER));
    }
    if (value.roleofUE !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_ProSeUERole, $.BER)(value.roleofUE, $.BER));
    }
    if (value.pCThreeEPCControlProtocolCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.pCThreeEPCControlProtocolCause, $.BER));
    }
    if (value.proseFunctionPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.proseFunctionPLMNIdentifier, $.BER));
    }
    if (value.proseFunctionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.proseFunctionId, $.BER));
    }
    if (value.recordOpeningTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    }
    if (value.recordClosureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.recordClosureTime, $.BER));
    }
    if (value.applicationID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.applicationID, $.BER));
    }
    if (value.requestorApplicationLayerUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeUTF8String, $.BER)(value.requestorApplicationLayerUserID, $.BER));
    }
    if (value.wLANLinkLayerID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.wLANLinkLayerID, $.BER));
    }
    if (value.requestorEPCProSeUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeUTF8String, $.BER)(value.requestorEPCProSeUserID, $.BER));
    }
    if (value.requestedApplicationLayerUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeUTF8String, $.BER)(value.requestedApplicationLayerUserID, $.BER));
    }
    if (value.requestedPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.requestedPLMNIdentifier, $.BER));
    }
    if (value.timeWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeInteger, $.BER)(value.timeWindow, $.BER));
    }
    if (value.rangeClass !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_RangeClass, $.BER)(value.rangeClass, $.BER));
    }
    if (value.uELocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.uELocation, $.BER));
    }
    if (value.proximityAlertIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ProximityAlertIndication, $.BER)(value.proximityAlertIndication, $.BER));
    }
    if (value.proximityAlertTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.proximityAlertTimestamp, $.BER));
    }
    if (value.proximityCancellationTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.proximityCancellationTimestamp, $.BER));
    }
    if (value.reasonforCancellation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_ReasonforCancellation, $.BER)(value.reasonforCancellation, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => _encode_ProSeCauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.proximityRequestRenewalInfoBlockList !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeSequenceOf<ProximityRequestRenewalInfoBlock>(() => _encode_ProximityRequestRenewalInfoBlock, $.BER), $.BER)(value.proximityRequestRenewalInfoBlockList, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PFEDRecord(value, elGetter);
}


/* eslint-enable */
