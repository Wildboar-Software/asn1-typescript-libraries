/* eslint-disable */
import {
    type IA5String,
    type INTEGER,
    NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../ProSeChargingDataTypes/RecordType.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../ProSeChargingDataTypes/IPAddress.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../ProSeChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../ProSeChargingDataTypes/ManagementExtension.ta.mjs";
import { ProSeUERole, _decode_ProSeUERole, _encode_ProSeUERole, _enum_for_ProSeUERole } from "../ProSeChargingDataTypes/ProSeUERole.ta.mjs";
import { ProSeFunctionRole, _decode_ProSeFunctionRole, _encode_ProSeFunctionRole, _enum_for_ProSeFunctionRole } from "../ProSeChargingDataTypes/ProSeFunctionRole.ta.mjs";
import { ProSeEventType, _decode_ProSeEventType, _encode_ProSeEventType, _enum_for_ProSeEventType } from "../ProSeChargingDataTypes/ProSeEventType.ta.mjs";
import { PC5RadioTechnology, _decode_PC5RadioTechnology, _encode_PC5RadioTechnology, _enum_for_PC5RadioTechnology } from "../ProSeChargingDataTypes/PC5RadioTechnology.ta.mjs";


/**
 * @summary PFDDRecord
 * @description
 *
 * ProSe Function Direct Discovery CDR (PF-DD-CDR). When collection is enabled,
 * the ProSe Function makes this charging data available for a direct discovery
 * request. Each chargeable event produces a record.
 *
 * Those events are a Monitor Request at the Monitoring UE's HPLMN ProSe
 * Function or at the ProSe Function that provides the Discovery Filter; an
 * Announce Request at the Announcing UE's HPLMN, at its VPLMN when roaming, or
 * at another PLMN for inter-PLMN transmission; a discovery query at the
 * Discoverer UE's HPLMN, VPLMN, or other PLMN; a discovery response at the
 * Discoveree UE's HPLMN, VPLMN, or other PLMN; a Match Report Request at the
 * Monitoring, Discoverer, or Announcing UE's HPLMN; and Match Report Info at
 * the Announcing UE's VPLMN when roaming.
 *
 * HPLMN, VPLMN, and local PLMN ProSe Functions collect the events, and
 * inter-operator charging is supported. Local PLMN collection does not apply to
 * WLAN-based ProSe Direct Discovery. Charging Data Request[Event] is sent after
 * a successful Discovery Response, Announce Authorization acknowledgement,
 * Monitor response, or Match Report acknowledgement.
 *
 * The HPLMN can collect online and offline charging for open Model A and for
 * restricted Model A and Model B. The VPLMN collects offline charging for
 * Announce. The VPLMN and local PLMN collect offline charging for Monitor and
 * Match.
 *
 * Field categories follow TS 32.240 clause 5.4 and are copied from table
 * 6.1.3.2.1.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.1, 5.2.1.2, 5.2.2.1.1, and
 * 6.1.3.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDDRecord ::= SET {
 *    recordType                    [0] IMPLICIT RecordType,
 *    retransmission                [1] IMPLICIT NULL OPTIONAL,
 *    serviceContextID              [2] IMPLICIT UTF8String OPTIONAL,
 *    servedIMSI                    [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    proSeFunctionIPAddress        [4] IPAddress OPTIONAL,
 *    chargingCharacteristics       [5] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode             [6] IMPLICIT ChChSelectionMode OPTIONAL,
 *    recordExtensions              [7] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    proSeRequestTimestamp         [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    roleofUE                      [9] IMPLICIT ProSeUERole OPTIONAL,
 *    pCThreeControlProtocolCause   [10] IMPLICIT INTEGER OPTIONAL,
 *    roleofProSeFunction           [11] IMPLICIT ProSeFunctionRole OPTIONAL,
 *    proSeApplicationID            [12] IMPLICIT UTF8String OPTIONAL,
 *    proSeEventType                [13] IMPLICIT ProSeEventType OPTIONAL,
 *    nodeID                        [14] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    proseFunctionId               [15] IMPLICIT UTF8String OPTIONAL,
 *    announcingUEHPLMNIdentifier   [16] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    announcingUEVPLMNIdentifier   [17] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    monitoringUEHPLMNIdentifier   [18] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    monitoringUEVPLMNIdentifier   [19] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    monitoredPLMNIdentifier       [20] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    applicationID                 [21] IMPLICIT UTF8String OPTIONAL,
 *    directDiscoveryModel          [22] IMPLICIT UTF8String OPTIONAL,
 *    validityPeriod                [23] IMPLICIT INTEGER OPTIONAL,
 *    monitoringUEIdentifier        [24] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    discovererUEHPLMNIdentifier   [25] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    discovererUEVPLMNIdentifier   [26] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    discovereeUEHPLMNIdentifier   [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    discovereeUEVPLMNIdentifier   [28] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    announcingPLMNID              [29] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    pc5RadioTechnology            [30] IMPLICIT PC5RadioTechnology OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PFDDRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Category M. ProSe Direct Discovery record. Set this to `pFDDRecord`.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
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
     * Table 6.1.3.2.1 does not list this field.
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
     * Category C. IMSI of the served party, the mobile subscriber using ProSe
     * Direct Discovery.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1 and table 6.1.3.2.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
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
     * Category M. The Charging Characteristics applied to the ProSe direct
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1 and annex A.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1 and annex A.1.
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
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `proSeRequestTimestamp`.
     * @description
     *
     * Category Oc. Time the ProSe Request was received from the UE.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
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
     * Category Oc. Role of the UE using ProSe. For Direct Discovery the roles
     * are Announcing UE, Monitoring UE, Discoveree UE, and Discoverer UE.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1 and table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly roleofUE: OPTIONAL<ProSeUERole>;
    /**
     * @summary `pCThreeControlProtocolCause`.
     * @description
     *
     * Category Oc. Reason the ProSe Function rejected a DISCOVERY_REQUEST or
     * Match_Report from the UE on PC3. TS 32.277 does not list the integer
     * values.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 6.1.3.2 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly pCThreeControlProtocolCause: OPTIONAL<INTEGER>;
    /**
     * @summary `roleofProSeFunction`.
     * @description
     *
     * Category OM. PLMN in which this ProSe Function resides: HPLMN, VPLMN, or
     * local PLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1 and clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly roleofProSeFunction: OPTIONAL<ProSeFunctionRole>;
    /**
     * @summary `proSeApplicationID`.
     * @description
     *
     * Category Oc. Identity used for ProSe Direct Discovery, identifying
     * application-related information for the ProSe-enabled UE. On the CDR
     * generated for the announcing UE in a match report, this holds the ProSe
     * application ID name.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1, including the table note, and
     * clause 6.3.1.2.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.15.
     *
     * @public
     * @readonly
     */
    readonly proSeApplicationID: OPTIONAL<UTF8String>;
    /**
     * @summary `proSeEventType`.
     * @description
     *
     * Category Oc. Event that triggered delivery of the charging message, for
     * example open announcing, open monitoring, open match report, or
     * restricted announcing.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.16.
     *
     * @public
     * @readonly
     */
    readonly proSeEventType: OPTIONAL<ProSeEventType>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * Category Oc. Identifier of the ProSe Function. The FQDN of that ProSe
     * Function is `proseFunctionId`. TS 32.298 also describes Node ID as an
     * operator-configurable identifier of the node that generated the CDR,
     * which may or may not be the DNS host name.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.7.12, applied under clause 5.1.4.7.
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `proseFunctionId`.
     * @description
     *
     * Category Oc. FQDN that identifies the ProSe Function.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly proseFunctionId: OPTIONAL<UTF8String>;
    /**
     * @summary `announcingUEHPLMNIdentifier`.
     * @description
     *
     * Category OM. PLMN identity of the Announcing UE's HPLMN. In a monitor or
     * match report this is the HPLMN of the UE that was requested to be
     * monitored.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1 and clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly announcingUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `announcingUEVPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the Announcing UE's VPLMN. In a match
     * report this corresponds to the Monitored PLMN ID of TS 23.303 clause
     * 5.3.4, and it is the same identifier as the Announcing UE HPLMN when the
     * UE is not roaming.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1 and clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly announcingUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringUEHPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the Monitoring UE's HPLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly monitoringUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoringUEVPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the Monitoring UE's VPLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly monitoringUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `monitoredPLMNIdentifier`.
     * @description
     *
     * Category OC. Monitored PLMN ID from the Match Report request, as defined
     * in TS 23.303 clause 5.3.4. It is the Announcing UE VPLMN Identifier when
     * the announcing UE is roaming, and the Announcing UE HPLMN Identifier when
     * it is not.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.8.
     *
     * @public
     * @readonly
     */
    readonly monitoredPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `applicationID`.
     * @description
     *
     * Category Oc. Globally unique identifier of a specific 3rd party
     * application.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.3.
     *
     * @public
     * @readonly
     */
    readonly applicationID: OPTIONAL<UTF8String>;
    /**
     * @summary `directDiscoveryModel`.
     * @description
     *
     * Category Oc. Direct Discovery model the UE used, for example Model A or
     * Model B. Open discovery is Model A. Restricted discovery is Model A or
     * Model B.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.1.2.1, and table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.5.
     *
     * @public
     * @readonly
     */
    readonly directDiscoveryModel: OPTIONAL<UTF8String>;
    /**
     * @summary `validityPeriod`.
     * @description
     *
     * Category Oc. Time interval during which the user is authorized to use
     * ProSe Direct Discovery, for example announcing, monitoring, or match
     * reporting. For an Announcing UE this is the validity period of the
     * allocated ProSe Application Code. For a Monitoring UE this is the maximum
     * validity period of the Discovery Filters.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.41 gives the interval as a duration
     * in minutes.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1 and table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly validityPeriod: OPTIONAL<INTEGER>;
    /**
     * @summary `monitoringUEIdentifier`.
     * @description
     *
     * Category Oc. Identifier of the party that initiated the monitor or match
     * report. It is an IMSI and corresponds to the UE Identifier in the monitor
     * or match report request defined in TS 23.303.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.10.
     *
     * @public
     * @readonly
     */
    readonly monitoringUEIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovererUEHPLMNIdentifier`.
     * @description
     *
     * Category OM. PLMN identity of the Discoverer UE's HPLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly discovererUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovererUEVPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the Discoverer UE's VPLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly discovererUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovereeUEHPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the Discoveree UE's HPLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly discovereeUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `discovereeUEVPLMNIdentifier`.
     * @description
     *
     * Category OC. PLMN identity of the Discoveree UE's VPLMN.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly discovereeUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `announcingPLMNID`.
     * @description
     *
     * Category OC. PLMN identity of the serving PLMN that signalled the carrier
     * frequency, when that serving PLMN is neither the HPLMN nor the VPLMN, if
     * it is available.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.0A.
     *
     * @public
     * @readonly
     */
    readonly announcingPLMNID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pc5RadioTechnology`.
     * @description
     *
     * Category OM. PC5 radio technology the UE used for this ProSe Direct
     * Discovery: E-UTRA, WLAN, or both. When this field is absent, the
     * technology is E-UTRA. Local PLMN charging does not apply to WLAN-based
     * Direct Discovery.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1 and table 6.1.3.2.1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.14A.
     *
     * @public
     * @readonly
     */
    readonly pc5RadioTechnology: OPTIONAL<PC5RadioTechnology>;

    constructor (
        recordType: RecordType,
        retransmission: OPTIONAL<NULL>,
        serviceContextID: OPTIONAL<UTF8String>,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        proSeFunctionIPAddress: OPTIONAL<IPAddress>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode?: OPTIONAL<ChChSelectionMode>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        proSeRequestTimestamp?: OPTIONAL<OCTET_STRING>,
        roleofUE?: OPTIONAL<ProSeUERole>,
        pCThreeControlProtocolCause?: OPTIONAL<INTEGER>,
        roleofProSeFunction?: OPTIONAL<ProSeFunctionRole>,
        proSeApplicationID?: OPTIONAL<UTF8String>,
        proSeEventType?: OPTIONAL<ProSeEventType>,
        nodeID?: OPTIONAL<IA5String>,
        proseFunctionId?: OPTIONAL<UTF8String>,
        announcingUEHPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        announcingUEVPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        monitoringUEHPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        monitoringUEVPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        monitoredPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        applicationID?: OPTIONAL<UTF8String>,
        directDiscoveryModel?: OPTIONAL<UTF8String>,
        validityPeriod?: OPTIONAL<INTEGER>,
        monitoringUEIdentifier?: OPTIONAL<OCTET_STRING>,
        discovererUEHPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        discovererUEVPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        discovereeUEHPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        discovereeUEVPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        announcingPLMNID?: OPTIONAL<OCTET_STRING>,
        pc5RadioTechnology?: OPTIONAL<PC5RadioTechnology>
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
        this.pCThreeControlProtocolCause = pCThreeControlProtocolCause;
        this.roleofProSeFunction = roleofProSeFunction;
        this.proSeApplicationID = proSeApplicationID;
        this.proSeEventType = proSeEventType;
        this.nodeID = nodeID;
        this.proseFunctionId = proseFunctionId;
        this.announcingUEHPLMNIdentifier = announcingUEHPLMNIdentifier;
        this.announcingUEVPLMNIdentifier = announcingUEVPLMNIdentifier;
        this.monitoringUEHPLMNIdentifier = monitoringUEHPLMNIdentifier;
        this.monitoringUEVPLMNIdentifier = monitoringUEVPLMNIdentifier;
        this.monitoredPLMNIdentifier = monitoredPLMNIdentifier;
        this.applicationID = applicationID;
        this.directDiscoveryModel = directDiscoveryModel;
        this.validityPeriod = validityPeriod;
        this.monitoringUEIdentifier = monitoringUEIdentifier;
        this.discovererUEHPLMNIdentifier = discovererUEHPLMNIdentifier;
        this.discovererUEVPLMNIdentifier = discovererUEVPLMNIdentifier;
        this.discovereeUEHPLMNIdentifier = discovereeUEHPLMNIdentifier;
        this.discovereeUEVPLMNIdentifier = discovereeUEVPLMNIdentifier;
        this.announcingPLMNID = announcingPLMNID;
        this.pc5RadioTechnology = pc5RadioTechnology;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("PFDDRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("PFDDRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.proSeRequestTimestamp !== undefined && (this.proSeRequestTimestamp.length !== 9)) {
            throw new ASN1SizeError("PFDDRecord.proSeRequestTimestamp violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("PFDDRecord.nodeID violates SIZE constraint");
        }
        if (this.announcingUEHPLMNIdentifier !== undefined && (this.announcingUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.announcingUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.announcingUEVPLMNIdentifier !== undefined && (this.announcingUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.announcingUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoringUEHPLMNIdentifier !== undefined && (this.monitoringUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.monitoringUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoringUEVPLMNIdentifier !== undefined && (this.monitoringUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.monitoringUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoredPLMNIdentifier !== undefined && (this.monitoredPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.monitoredPLMNIdentifier violates SIZE constraint");
        }
        if (this.monitoringUEIdentifier !== undefined && (this.monitoringUEIdentifier.length < 3 || this.monitoringUEIdentifier.length > 8)) {
            throw new ASN1SizeError("PFDDRecord.monitoringUEIdentifier violates SIZE constraint");
        }
        if (this.discovererUEHPLMNIdentifier !== undefined && (this.discovererUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovererUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.discovererUEVPLMNIdentifier !== undefined && (this.discovererUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovererUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.discovereeUEHPLMNIdentifier !== undefined && (this.discovereeUEHPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovereeUEHPLMNIdentifier violates SIZE constraint");
        }
        if (this.discovereeUEVPLMNIdentifier !== undefined && (this.discovereeUEVPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.discovereeUEVPLMNIdentifier violates SIZE constraint");
        }
        if (this.announcingPLMNID !== undefined && (this.announcingPLMNID.length !== 3)) {
            throw new ASN1SizeError("PFDDRecord.announcingPLMNID violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PFDDRecord
     * @description
     * 
     * This takes an `object` and converts it to a `PFDDRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PFDDRecord`.
     * @returns {PFDDRecord}
     */
    public static _from_object (_o: { [_K in keyof (PFDDRecord)]: (PFDDRecord)[_K] }): PFDDRecord {
        return new PFDDRecord(_o.recordType, _o.retransmission, _o.serviceContextID, _o.servedIMSI, _o.proSeFunctionIPAddress, _o.chargingCharacteristics, _o.chChSelectionMode, _o.recordExtensions, _o.proSeRequestTimestamp, _o.roleofUE, _o.pCThreeControlProtocolCause, _o.roleofProSeFunction, _o.proSeApplicationID, _o.proSeEventType, _o.nodeID, _o.proseFunctionId, _o.announcingUEHPLMNIdentifier, _o.announcingUEVPLMNIdentifier, _o.monitoringUEHPLMNIdentifier, _o.monitoringUEVPLMNIdentifier, _o.monitoredPLMNIdentifier, _o.applicationID, _o.directDiscoveryModel, _o.validityPeriod, _o.monitoringUEIdentifier, _o.discovererUEHPLMNIdentifier, _o.discovererUEVPLMNIdentifier, _o.discovereeUEHPLMNIdentifier, _o.discovereeUEVPLMNIdentifier, _o.announcingPLMNID, _o.pc5RadioTechnology);
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
         * @summary The enum used as the type of the component `roleofProSeFunction`
         * @public
         * @static
         */

    public static _enum_for_roleofProSeFunction = _enum_for_ProSeFunctionRole;        /**
         * @summary The enum used as the type of the component `proSeEventType`
         * @public
         * @static
         */

    public static _enum_for_proSeEventType = _enum_for_ProSeEventType;        /**
         * @summary The enum used as the type of the component `pc5RadioTechnology`
         * @public
         * @static
         */

    public static _enum_for_pc5RadioTechnology = _enum_for_PC5RadioTechnology;
}

/**
 * @summary The Leading Root Component Types of PFDDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PFDDRecord: $.ComponentSpec[] = [
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
    new $.ComponentSpec("pCThreeControlProtocolCause", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("roleofProSeFunction", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("proSeApplicationID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("proSeEventType", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("proseFunctionId", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("announcingUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("announcingUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("monitoringUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("monitoringUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("monitoredPLMNIdentifier", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("applicationID", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("directDiscoveryModel", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("validityPeriod", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("monitoringUEIdentifier", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("discovererUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("discovererUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("discovereeUEHPLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("discovereeUEVPLMNIdentifier", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("announcingPLMNID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("pc5RadioTechnology", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of PFDDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PFDDRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PFDDRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PFDDRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PFDDRecord: $.ASN1Decoder<PFDDRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDDRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDDRecord (el: _Element): PFDDRecord {
    if (!_cached_decoder_for_PFDDRecord) { _cached_decoder_for_PFDDRecord = function (el: _Element): PFDDRecord {
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
    let pCThreeControlProtocolCause: OPTIONAL<INTEGER>;
    let roleofProSeFunction: OPTIONAL<ProSeFunctionRole>;
    let proSeApplicationID: OPTIONAL<UTF8String>;
    let proSeEventType: OPTIONAL<ProSeEventType>;
    let nodeID: OPTIONAL<IA5String>;
    let proseFunctionId: OPTIONAL<UTF8String>;
    let announcingUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let announcingUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let monitoringUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let monitoringUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let monitoredPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let applicationID: OPTIONAL<UTF8String>;
    let directDiscoveryModel: OPTIONAL<UTF8String>;
    let validityPeriod: OPTIONAL<INTEGER>;
    let monitoringUEIdentifier: OPTIONAL<OCTET_STRING>;
    let discovererUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let discovererUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let discovereeUEHPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let discovereeUEVPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let announcingPLMNID: OPTIONAL<OCTET_STRING>;
    let pc5RadioTechnology: OPTIONAL<PC5RadioTechnology>;
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
        "pCThreeControlProtocolCause": (_el: _Element): void => { pCThreeControlProtocolCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "roleofProSeFunction": (_el: _Element): void => { roleofProSeFunction = $._decode_implicit<ProSeFunctionRole>(() => _decode_ProSeFunctionRole)(_el); },
        "proSeApplicationID": (_el: _Element): void => { proSeApplicationID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "proSeEventType": (_el: _Element): void => { proSeEventType = $._decode_implicit<ProSeEventType>(() => _decode_ProSeEventType)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "proseFunctionId": (_el: _Element): void => { proseFunctionId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "announcingUEHPLMNIdentifier": (_el: _Element): void => { announcingUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "announcingUEVPLMNIdentifier": (_el: _Element): void => { announcingUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringUEHPLMNIdentifier": (_el: _Element): void => { monitoringUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoringUEVPLMNIdentifier": (_el: _Element): void => { monitoringUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "monitoredPLMNIdentifier": (_el: _Element): void => { monitoredPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationID": (_el: _Element): void => { applicationID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "directDiscoveryModel": (_el: _Element): void => { directDiscoveryModel = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "validityPeriod": (_el: _Element): void => { validityPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "monitoringUEIdentifier": (_el: _Element): void => { monitoringUEIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovererUEHPLMNIdentifier": (_el: _Element): void => { discovererUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovererUEVPLMNIdentifier": (_el: _Element): void => { discovererUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovereeUEHPLMNIdentifier": (_el: _Element): void => { discovereeUEHPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "discovereeUEVPLMNIdentifier": (_el: _Element): void => { discovereeUEVPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "announcingPLMNID": (_el: _Element): void => { announcingPLMNID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pc5RadioTechnology": (_el: _Element): void => { pc5RadioTechnology = $._decode_implicit<PC5RadioTechnology>(() => _decode_PC5RadioTechnology)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PFDDRecord,
        _extension_additions_list_spec_for_PFDDRecord,
        _root_component_type_list_2_spec_for_PFDDRecord,
        undefined,
    );
    return new PFDDRecord( /* SET_CONSTRUCTOR_CALL */
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
        pCThreeControlProtocolCause,
        roleofProSeFunction,
        proSeApplicationID,
        proSeEventType,
        nodeID,
        proseFunctionId,
        announcingUEHPLMNIdentifier,
        announcingUEVPLMNIdentifier,
        monitoringUEHPLMNIdentifier,
        monitoringUEVPLMNIdentifier,
        monitoredPLMNIdentifier,
        applicationID,
        directDiscoveryModel,
        validityPeriod,
        monitoringUEIdentifier,
        discovererUEHPLMNIdentifier,
        discovererUEVPLMNIdentifier,
        discovereeUEHPLMNIdentifier,
        discovereeUEVPLMNIdentifier,
        announcingPLMNID,
        pc5RadioTechnology
    );
}; }
    return _cached_decoder_for_PFDDRecord(el);
}

let _cached_encoder_for_PFDDRecord: $.ASN1Encoder<PFDDRecord> | null = null;

/**
 * @summary Encodes a(n) PFDDRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDDRecord, encoded as an ASN.1 Element.
 */
export
function _encode_PFDDRecord (value: PFDDRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDDRecord) { _cached_encoder_for_PFDDRecord = function (value: PFDDRecord, _elGetter: $.ASN1Encoder<PFDDRecord>): _Element {
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
    if (value.pCThreeControlProtocolCause !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.pCThreeControlProtocolCause, $.BER));
    }
    if (value.roleofProSeFunction !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ProSeFunctionRole, $.BER)(value.roleofProSeFunction, $.BER));
    }
    if (value.proSeApplicationID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeUTF8String, $.BER)(value.proSeApplicationID, $.BER));
    }
    if (value.proSeEventType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ProSeEventType, $.BER)(value.proSeEventType, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.proseFunctionId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeUTF8String, $.BER)(value.proseFunctionId, $.BER));
    }
    if (value.announcingUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.announcingUEHPLMNIdentifier, $.BER));
    }
    if (value.announcingUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.announcingUEVPLMNIdentifier, $.BER));
    }
    if (value.monitoringUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeOctetString, $.BER)(value.monitoringUEHPLMNIdentifier, $.BER));
    }
    if (value.monitoringUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.monitoringUEVPLMNIdentifier, $.BER));
    }
    if (value.monitoredPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.monitoredPLMNIdentifier, $.BER));
    }
    if (value.applicationID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => $._encodeUTF8String, $.BER)(value.applicationID, $.BER));
    }
    if (value.directDiscoveryModel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeUTF8String, $.BER)(value.directDiscoveryModel, $.BER));
    }
    if (value.validityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER)(value.validityPeriod, $.BER));
    }
    if (value.monitoringUEIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.monitoringUEIdentifier, $.BER));
    }
    if (value.discovererUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.discovererUEHPLMNIdentifier, $.BER));
    }
    if (value.discovererUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeOctetString, $.BER)(value.discovererUEVPLMNIdentifier, $.BER));
    }
    if (value.discovereeUEHPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.discovereeUEHPLMNIdentifier, $.BER));
    }
    if (value.discovereeUEVPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.discovereeUEVPLMNIdentifier, $.BER));
    }
    if (value.announcingPLMNID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.announcingPLMNID, $.BER));
    }
    if (value.pc5RadioTechnology !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_PC5RadioTechnology, $.BER)(value.pc5RadioTechnology, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_PFDDRecord(value, elGetter);
}


/* eslint-enable */
