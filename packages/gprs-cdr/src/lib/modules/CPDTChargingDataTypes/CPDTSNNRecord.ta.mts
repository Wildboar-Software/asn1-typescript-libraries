/* eslint-disable */
import {
    type IA5String,
    type INTEGER,
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../CPDTChargingDataTypes/RecordType.ta.mjs";
import { type ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../CPDTChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../CPDTChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { NIDDsubmission, _decode_NIDDsubmission, _encode_NIDDsubmission } from "../CPDTChargingDataTypes/NIDDsubmission.ta.mjs";
import { type CPCauseForRecClosing, _decode_CPCauseForRecClosing, _encode_CPCauseForRecClosing } from "../CPDTChargingDataTypes/CPCauseForRecClosing.ta.mjs";
import { type Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CPDTChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CPDTChargingDataTypes/ManagementExtension.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../CPDTChargingDataTypes/SubscriptionID.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../CPDTChargingDataTypes/APNRateControl.ta.mjs";


/**
 * @summary CPDTSNNRecord
 * @description
 *
 * Serving-network Control Plane data transfer CDR (CPDT-SNN-CDR). If
 * enabled, one record is produced for each PDN connection at the
 * IWK-SCEF or the MME. MME support is optional.
 *
 * IWK-SCEF: opened at PDN connection creation and on mobility to this
 * IWK-SCEF (PLMN change). A NIDD submission container is added on NIDD
 * submit-response receipt or on NIDD submit-response sending. Closed on
 * PDN connection release (termination, PLMN change, or abnormal
 * release) or for a partial-record reason: data volume limit, time
 * limit, maximum number of NIDD submissions, MME change, Serving PLMN
 * Rate Control change, RAT type change, or management intervention.
 *
 * MME: opened on PDN connection creation and on mobility to this MME.
 * A NIDD submission container is added on NIDD submit-response receipt,
 * NIDD delivery to the UE, NIDD submission timeout, or an error on NIDD
 * delivery from the UE. Closed on PDN connection release (termination,
 * MME change, or abnormal release) or for a partial-record reason: data
 * volume limit, time limit, maximum number of NIDD submissions, Serving
 * PLMN Rate Control change, RAT type change, or management intervention.
 *
 * Partial-record thresholds are the Charging Characteristics profile
 * (Annex A). If the PDN connection stays active, a further record is
 * opened with an incremented record sequence number.
 *
 * Inter-RAT mobility between NB-IoT and another RAT is not supported
 * in this release. Table 6.1.3.3.1 does not list External Identifier or
 * APN Rate Control; both are present in this ASN.1 type. APN Rate
 * Control is SCEF-only on the Rf Charging Data Request (table 6.3.2.1).
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.3, 5.2.3.4, and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPDTSNNRecord ::= SET {
 *    recordType                  [0] IMPLICIT RecordType, 
 *    retransmission              [1] IMPLICIT NULL OPTIONAL, 
 *    servedIMSI                  [2] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL, 
 *    servedMSISDN                [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL, 
 *    chargingID                  [4] IMPLICIT INTEGER ( 0 .. 4294967295 ), 
 *    serviceContextID            [5] IMPLICIT UTF8String OPTIONAL, 
 *    nodeID                      [6] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL, 
 *    recordOpeningTime           [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ), 
 *    duration                    [8] IMPLICIT INTEGER, 
 *    accessPointNameNI           [9] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL, 
 *    sCEFID                      [10] IMPLICIT OCTET STRING OPTIONAL, 
 *    chargingCharacteristics     [11] IMPLICIT OCTET STRING ( SIZE( 2 ) ), 
 *    chChSelectionMode           [12] IMPLICIT ChChSelectionMode OPTIONAL, 
 *    servingNodeIdentity         [13] IMPLICIT OCTET STRING OPTIONAL, 
 *    servingPLMNRateControl      [14] IMPLICIT ServingPLMNRateControl OPTIONAL, 
 *    listOfNIDDsubmission        [15] IMPLICIT SEQUENCE  OF
 *       NIDDsubmission OPTIONAL, 
 *    causeForRecClosing          [16] IMPLICIT CPCauseForRecClosing, 
 *    diagnostics                 [17] Diagnostics OPTIONAL, 
 *    localSequenceNumber         [18] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL, 
 *    recordSequenceNumber        [19] IMPLICIT INTEGER OPTIONAL, 
 *    recordExtensions            [20] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL, 
 *    externalIdentifier          [21] IMPLICIT SubscriptionID OPTIONAL, 
 *    aPNRateControl              [22] IMPLICIT APNRateControl OPTIONAL, 
 *    rATType                     [23] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL, 
 *    servingNodePLMNIdentifier   [24] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL, 
 *    servedIMEI                  [25] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CPDTSNNRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Identifies this record as an IWK-SCEF or MME serving-network
     * Control Plane data transfer CDR. The value is `cPDTSNNRecord`
     * (106).
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.18.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @description
     *
     * When present, information from retransmitted Accounting Requests
     * has been used in this CDR.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.19.
     *
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * IMSI of the served party, if available. Clause 5.1 requires the
     * charging information to identify the subscriber by IMSI. The
     * structure of the IMSI is defined in TS 23.003.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1 and table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.21.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * Primary MSISDN of the subscriber, if available. In case of
     * multi-numbering the MSISDN stored is the primary MSISDN. On Rf
     * this is carried as a Subscription-Id, together with the IMSI.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1 and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.22.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingID`.
     * @description
     *
     * Charging identifier of this PDN connection, used to correlate the
     * CDRs produced by the SCEF, the IWK-SCEF, and the MME. Every PDN
     * connection is assigned one. The SCEF generates it when the PDN
     * connection is created and forwards it to the MME and, in roaming,
     * to the IWK-SCEF. Together with the SCEF identity it identifies the
     * PDN connection. It is transferred to the new MME when the MME
     * changes. Different SCEFs allocate values independently and may
     * reuse the same numbers.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, clause 5.2.1, and
     * table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.7.
     *
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * Indicates that the CDR applies to the Control Plane data transfer
     * service. Taken from the Diameter Service-Context-Id when Rf
     * accounting was used and the AVP was included. The contents are
     * described in TS 32.299.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1 and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * Name of the recording entity. Operator configurable. It may or may
     * not be the DNS host name of the node. On Rf this is the Node-Id.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1 and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.13.
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * Time stamp when the CDF opened this record: at PDN connection
     * start for this IWK-SCEF or MME, or when a subsequent partial
     * record was opened. There is no separate record-opening-reason
     * field. A missing record sequence number, or a sequence number of
     * one, means the PDN connection to the SCEF was activated for this
     * serving node.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.16.
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @description
     *
     * Duration of this record in the serving-network node (IWK-SCEF or
     * MME), in seconds, from record opening to record closure. For a
     * partial record this is the duration of that partial record, not
     * the cumulative PDN-connection duration. Clause 5.1 counts
     * PDN-connection usage as the interval from activation to
     * deactivation.
     *
     * A fraction of a second may be rounded or truncated. A duration of
     * zero seconds is accepted when the transferred data volume is
     * greater than zero. The same rounding or truncation method applies
     * to both single and partial records.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1 and table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.9.
     *
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * Logical name of the access point connected to the external packet
     * data network: the network-identifier part of the APN, written in
     * dot notation. The format is specified in TS 23.003. MME selection
     * of the APN for SCEF-based non-IP delivery is specified in
     * TS 23.682. Clause 5.1 uses the APN, together with the SCEF
     * address, as the destination of the PDN connection. On Rf this is
     * the Called-Station-Id.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, table 6.1.3.3.1, and
     * table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `sCEFID`.
     * @description
     *
     * Diameter identity of the SCEF serving this PDN connection.
     * Table 6.1.3.3.1 lists the field as mandatory. With `chargingID`
     * it identifies the PDN connection across CPCN records, including
     * correlation of
     * a VPLMN IWK-SCEF CDR with the HPLMN SCEF CDR. On Rf this is the
     * SCEF-Id inside CPDT-Information.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.2.1, table 6.1.3.3.1,
     * clause 6.3.1.2, and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.20.
     *
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingCharacteristics`.
     * @description
     *
     * Charging Characteristics applied to the PDN connection. The HSS
     * supplies them to the MME with the subscription. On a non-IP PDN
     * connection to an APN with the "Invoke SCEF Selection" indicator,
     * the MME forwards them to the SCEF and, in roaming, to the
     * IWK-SCEF. A subscriber may have them on the subscription and/or
     * on subscribed APNs. A CPCN may apply the HSS value or ignore it
     * and apply a pre-provisioned default.
     *
     * The value is a 16-bit string. Each bit, when set to 1, selects an
     * operator-defined behaviour configured in the CPCN. The format is
     * specified in TS 32.298. Behaviours are not standardised. Annex A
     * gives as an example, for both the CPDT-SCE-CDR and this CDR:
     * activate or deactivate CDRs, a time limit, a data volume limit,
     * and a maximum number of NIDD submissions. A CDF/CGF address may
     * also be included. Those thresholds are the partial-record
     * triggers. Separate values per profile can be defined for data
     * volume limit, time limit, and maximum number of NIDD submissions
     * (clause 5.2.2.1).
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.2.2.1, table 6.1.3.3.1, and
     * Annex A.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.5.
     *
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `chChSelectionMode`.
     * @description
     *
     * How the Charging Characteristics applied to this record were
     * selected. Annex A allows the network to apply the value from the
     * HSS, the home default when the MME is in the HPLMN, or the roaming
     * default when the MME is in the VPLMN. TS 32.298 further limits the
     * values: the MME may use home default, roaming default, APN
     * specific, or subscription specific; the SCEF and IWK-SCEF may use
     * home default, roaming default, or serving-node supplied.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1 and Annex A.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.6.
     *
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `servingNodeIdentity`.
     * @description
     *
     * Diameter identity of the MME connected during this record.
     * Table 6.1.3.3.1 lists the field as mandatory. On Rf this is
     * Serving-Node-Identity inside
     * CPDT-Information.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1, clause 6.3.1.2, and
     * table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.23.
     *
     * @public
     * @readonly
     */
    readonly servingNodeIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingPLMNRateControl`.
     * @description
     *
     * Serving PLMN Rate Control used by the MME during this record.
     * Clause 5.1 charges radio usage per NIDD submission under the
     * authorized Serving PLMN and APN rate controls. A change of this
     * value closes the CDR; a new one is opened if the PDN connection
     * is still active. TS 32.298 specifies the contents by reference to
     * TS 29.128. TS 32.253 does not define the two integer components.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, clause 5.2.1, and
     * table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.25.
     *
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `listOfNIDDsubmission`.
     * @description
     *
     * NIDD submission containers for this PDN connection. Each container
     * is time stamped and holds the volume submitted, the submission
     * result, and the reason it was added. See `NIDDsubmission`.
     *
     * The IWK-SCEF adds a container on receipt of a NIDD submit
     * response or on sending of a NIDD submit response
     * (clause 5.2.3.3.2). The MME adds one on receipt of a NIDD submit
     * response, on NIDD delivery to the UE, on NIDD submission timeout,
     * or on an error receiving NIDD delivery from the UE
     * (clause 5.2.3.4.2).
     *
     * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.3.2 and 5.2.3.4.2,
     * table 6.1.3.3.1, and clause 6.1.3.4.
     *
     * @public
     * @readonly
     */
    readonly listOfNIDDsubmission: OPTIONAL<NIDDsubmission[]>;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * Reason this serving-network node released the record. See
     * `CPCauseForRecClosing`. On Rf it is taken from the PS-Information
     * Change-Condition AVP. `diagnostics` may give a more detailed
     * reason for PDN connection release when a single cause applies.
     *
     * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.3.3 and 5.2.3.4.3,
     * table 6.1.3.3.1, and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.4.
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CPCauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @description
     *
     * More detailed reason for release of the PDN connection, when a
     * single cause applies. Complements `causeForRecClosing`. The
     * diagnostics may also carry manufacturer-specific and
     * network-specific information. On Rf this is the Diagnostics AVP.
     * TS 32.253 does not define the choice alternatives.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1, clause 6.3.1.1, and
     * table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.8.
     *
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * Consecutive record number created by this node. Allocated
     * sequentially across all CDR types, so post-processing can detect
     * missing records. Unique within the node identified by `nodeID` or
     * by the MME identity. Table 6.4.1 does not bind this field to an
     * Rf AVP.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1 and table 6.4.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.12.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * Partial-record sequence number for one PDN connection in this
     * IWK-SCEF or MME, identified by the same Charging Id and SCEF Id.
     * Present only for partial records. Starts at one. Absent when this
     * node produced only one record for the connection. When a partial
     * record is closed and the PDN connection stays active, the next
     * record uses the next sequence number. Table 6.4.1 does not bind
     * this field to an Rf AVP.
     *
     * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.3.3 and 5.2.3.4.3, and
     * table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.17.
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Network-operator or manufacturer extensions to the record, present
     * only when such an extension exists. Each element is a management
     * extension as defined in ITU-T X.721. TS 32.253 does not define
     * any extension.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.15.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `externalIdentifier`.
     * @description
     *
     * External identifier of the served party associated with the IMSI,
     * if available, as specified in TS 23.003. Table 6.1.3.3.1 does not
     * list this field on the CPDT-SNN-CDR. It is present on the Rf CPDT
     * Information for the MME, IWK-SCEF, and SCEF (table 6.3.2.1) and in
     * this ASN.1 type.
     *
     * 3GPP TS 32.253 V19.0.0 clause 6.3.1.2 and table 6.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.10.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<SubscriptionID>;
    /**
     * @summary `aPNRateControl`.
     * @description
     *
     * APN Rate Control enforced in the SCEF. Table 6.1.3.3.1 does not
     * list this field on the CPDT-SNN-CDR, and table 6.3.2.1 does not
     * allow it on the MME or IWK-SCEF Charging Data Request. An APN Rate
     * Control change closes only the SCEF CDR (clause 5.2.1). The field
     * is present in this ASN.1 type. TS 32.298 specifies the contents
     * by reference to TS 29.128.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.2.1 and table 6.3.2.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.3.
     *
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;
    /**
     * @summary `rATType`.
     * @description
     *
     * Radio Access Technology (RAT) type currently used by the UE, as
     * defined in TS 29.061, when available. Clause 5.1 collects radio
     * usage per NIDD submission per RAT type. A RAT-type change closes
     * the CDR. Inter-RAT mobility between NB-IoT and another RAT is not
     * supported in this release. On Rf this is 3GPP-RAT-Type.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, clauses 5.2.3.3.3 and 5.2.3.4.3,
     * and table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.14.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @description
     *
     * PLMN identifier (MCC and MNC) serving the UE during this record.
     * Clause 5.1 collects the location as HPLMN or VPLMN, plus optional
     * higher-accuracy location information, which this field does not
     * carry. On Rf this is 3GPP-SGSN-MCC-MNC. A PLMN change releases the
     * IWK-SCEF CDR; the MME closure table does not list PLMN change.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, clause 5.2.3.3.3, and
     * table 6.1.3.3.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.4.24.
     *
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIMEI`.
     * @description
     *
     * IMEI or IMEISV of the ME, if available. Clause 5.1 collects the
     * subscriber equipment number (IMEISV) used for the PDN connection.
     * On Rf this is User-Equipment-Info.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, table 6.1.3.3.1, and
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingID: INTEGER,
        serviceContextID: OPTIONAL<UTF8String>,
        nodeID: OPTIONAL<IA5String>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        accessPointNameNI: OPTIONAL<IA5String>,
        sCEFID: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        servingNodeIdentity: OPTIONAL<OCTET_STRING>,
        servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>,
        listOfNIDDsubmission: OPTIONAL<NIDDsubmission[]>,
        causeForRecClosing: CPCauseForRecClosing,
        diagnostics?: OPTIONAL<Diagnostics>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        externalIdentifier?: OPTIONAL<SubscriptionID>,
        aPNRateControl?: OPTIONAL<APNRateControl>,
        rATType?: OPTIONAL<INTEGER>,
        servingNodePLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        servedIMEI?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.retransmission = retransmission;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.chargingID = chargingID;
        this.serviceContextID = serviceContextID;
        this.nodeID = nodeID;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.accessPointNameNI = accessPointNameNI;
        this.sCEFID = sCEFID;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.servingNodeIdentity = servingNodeIdentity;
        this.servingPLMNRateControl = servingPLMNRateControl;
        this.listOfNIDDsubmission = listOfNIDDsubmission;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.localSequenceNumber = localSequenceNumber;
        this.recordSequenceNumber = recordSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.externalIdentifier = externalIdentifier;
        this.aPNRateControl = aPNRateControl;
        this.rATType = rATType;
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.servedIMEI = servedIMEI;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("CPDTSNNRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("CPDTSNNRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("CPDTSNNRecord.chargingID violates INTEGER range");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("CPDTSNNRecord.nodeID violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("CPDTSNNRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("CPDTSNNRecord.accessPointNameNI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("CPDTSNNRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("CPDTSNNRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("CPDTSNNRecord.rATType violates INTEGER range");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("CPDTSNNRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("CPDTSNNRecord.servedIMEI violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CPDTSNNRecord
     * @description
     * 
     * This takes an `object` and converts it to a `CPDTSNNRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPDTSNNRecord`.
     * @returns {CPDTSNNRecord}
     */
    public static _from_object (_o: { [_K in keyof (CPDTSNNRecord)]: (CPDTSNNRecord)[_K] }): CPDTSNNRecord {
        return new CPDTSNNRecord(_o.recordType, _o.retransmission, _o.servedIMSI, _o.servedMSISDN, _o.chargingID, _o.serviceContextID, _o.nodeID, _o.recordOpeningTime, _o.duration, _o.accessPointNameNI, _o.sCEFID, _o.chargingCharacteristics, _o.chChSelectionMode, _o.servingNodeIdentity, _o.servingPLMNRateControl, _o.listOfNIDDsubmission, _o.causeForRecClosing, _o.diagnostics, _o.localSequenceNumber, _o.recordSequenceNumber, _o.recordExtensions, _o.externalIdentifier, _o.aPNRateControl, _o.rATType, _o.servingNodePLMNIdentifier, _o.servedIMEI);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode: typeof _enum_for_ChChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of CPDTSNNRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CPDTSNNRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("sCEFID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("servingNodeIdentity", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servingPLMNRateControl", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("listOfNIDDsubmission", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("aPNRateControl", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 25))
];

/**
 * @summary The Trailing Root Component Types of CPDTSNNRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CPDTSNNRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CPDTSNNRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CPDTSNNRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CPDTSNNRecord: $.ASN1Decoder<CPDTSNNRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPDTSNNRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPDTSNNRecord (el: _Element): CPDTSNNRecord {
    if (!_cached_decoder_for_CPDTSNNRecord) { _cached_decoder_for_CPDTSNNRecord = function (el: _Element): CPDTSNNRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let retransmission: OPTIONAL<NULL>;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingID!: INTEGER;
    let serviceContextID: OPTIONAL<UTF8String>;
    let nodeID: OPTIONAL<IA5String>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let sCEFID: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let servingNodeIdentity: OPTIONAL<OCTET_STRING>;
    let servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    let listOfNIDDsubmission: OPTIONAL<NIDDsubmission[]>;
    let causeForRecClosing!: CPCauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let externalIdentifier: OPTIONAL<SubscriptionID>;
    let aPNRateControl: OPTIONAL<APNRateControl>;
    let rATType: OPTIONAL<INTEGER>;
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "servingNodeIdentity": (_el: _Element): void => { servingNodeIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingPLMNRateControl": (_el: _Element): void => { servingPLMNRateControl = $._decode_implicit<ServingPLMNRateControl>(() => _decode_ServingPLMNRateControl)(_el); },
        "listOfNIDDsubmission": (_el: _Element): void => { listOfNIDDsubmission = $._decode_implicit<NIDDsubmission[]>(() => $._decodeSequenceOf<NIDDsubmission>(() => _decode_NIDDsubmission))(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CPCauseForRecClosing>(() => _decode_CPCauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "aPNRateControl": (_el: _Element): void => { aPNRateControl = $._decode_implicit<APNRateControl>(() => _decode_APNRateControl)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CPDTSNNRecord,
        _extension_additions_list_spec_for_CPDTSNNRecord,
        _root_component_type_list_2_spec_for_CPDTSNNRecord,
        undefined,
    );
    return new CPDTSNNRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        retransmission,
        servedIMSI,
        servedMSISDN,
        chargingID,
        serviceContextID,
        nodeID,
        recordOpeningTime,
        duration,
        accessPointNameNI,
        sCEFID,
        chargingCharacteristics,
        chChSelectionMode,
        servingNodeIdentity,
        servingPLMNRateControl,
        listOfNIDDsubmission,
        causeForRecClosing,
        diagnostics,
        localSequenceNumber,
        recordSequenceNumber,
        recordExtensions,
        externalIdentifier,
        aPNRateControl,
        rATType,
        servingNodePLMNIdentifier,
        servedIMEI
    );
}; }
    return _cached_decoder_for_CPDTSNNRecord(el);
}

let _cached_encoder_for_CPDTSNNRecord: $.ASN1Encoder<CPDTSNNRecord> | null = null;

/**
 * @summary Encodes a(n) CPDTSNNRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPDTSNNRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CPDTSNNRecord (value: CPDTSNNRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPDTSNNRecord) { _cached_encoder_for_CPDTSNNRecord = function (value: CPDTSNNRecord, _elGetter: $.ASN1Encoder<CPDTSNNRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.sCEFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.sCEFID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.servingNodeIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.servingNodeIdentity, $.BER));
    }
    if (value.servingPLMNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_ServingPLMNRateControl, $.BER)(value.servingPLMNRateControl, $.BER));
    }
    if (value.listOfNIDDsubmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<NIDDsubmission>(() => _encode_NIDDsubmission, $.BER), $.BER)(value.listOfNIDDsubmission, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => _encode_CPCauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 17, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.externalIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_SubscriptionID, $.BER)(value.externalIdentifier, $.BER));
    }
    if (value.aPNRateControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => _encode_APNRateControl, $.BER)(value.aPNRateControl, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CPDTSNNRecord(value, elGetter);
}


/* eslint-enable */
