/* eslint-disable */
import {
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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfMBMSCondition, _decode_ChangeOfMBMSCondition, _encode_ChangeOfMBMSCondition } from "../GPRSChargingDataTypes/ChangeOfMBMSCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { MBMSInformation, _decode_MBMSInformation, _encode_MBMSInformation } from "../GPRSChargingDataTypes/MBMSInformation.ta.mjs";


/**
 * @summary SGSNMBMSRecord
 * @description
 *
 * S-MB-CDR. MBMS bearer-context charging data collected by the SGSN
 * (clause 5.2.3.7 and table 6.1.10.1). The record is opened at MBMS bearer
 * context creation. List of Traffic Data Volumes counts downlink volume
 * and shall include the required bearer capabilities (QoS Negotiated). A
 * container is added on tariff time change and on CDR closure. The first
 * container is the volume since the record was opened. The SGSN closes the
 * CDR when the MBMS bearer context ends, including an inter-SGSN routing
 * area update when the last UE using the context leaves the routing area,
 * or on any abnormal release, or for a partial-record reason (volume
 * limit, time limit, change in the list of downstream nodes, or management
 * intervention). Charging Characteristics are not used for MBMS CDR
 * generation (clause 5.2.3.0). If the context remains active, the next CDR
 * uses an incremented sequence number.
 *
 * 3GPP TS 32.251 V19.0.0.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNMBMSRecord ::= SET {
 *    recordType             [0] IMPLICIT RecordType,
 *    ggsnAddress            [1] GSNAddress,
 *    chargingID             [2] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    listofRAs              [3] IMPLICIT SEQUENCE  OF
 *       OCTET STRING ( SIZE( 6 ) ) OPTIONAL,
 *    accessPointNameNI      [4] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    servedPDPAddress       [5] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes   [6] IMPLICIT SEQUENCE  OF
 *       ChangeOfMBMSCondition OPTIONAL,
 *    recordOpeningTime      [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration               [8] IMPLICIT INTEGER,
 *    causeForRecClosing     [9] IMPLICIT CauseForRecClosing,
 *    diagnostics            [10] Diagnostics OPTIONAL,
 *    recordSequenceNumber   [11] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                 [12] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions       [13] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber    [14] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    sgsnPLMNIdentifier     [15] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    numberofReceivingUE    [16] IMPLICIT INTEGER OPTIONAL,
 *    mbmsInformation        [17] IMPLICIT MBMSInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SGSNMBMSRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record e.g. S-CDR, SGW-CDR, PGW-CDR,
     * M-CDR, S-SMO-CDR, TDF-CDR, IPE-CDR and S-SMT-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.51.
     *
     * S-MB-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `ggsnAddress`.
     * @description
     *
     * This field is the current serving GGSN/P-GW IP Address for the Control
     * Plane. If both an IPv4 and an IPv6 address of the GGSN/P-GW are available,
     * the SGSN shall include the IPv4 address in the CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.16.
     *
     * Table 6.1.10.1 lists SGSN Address used for the S-MB-CDR and does not
     * list a GGSN address. The description above is the TS 32.298 definition
     * of this component.
     *
     * @public
     * @readonly
     */
    readonly ggsnAddress: GSNAddress;
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
     * S-MB-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `listofRAs`.
     * @description
     *
     * List of routeing areas receiving data used during this record.
     * equivalent to the list of RAs defined in TS 23.246 [207].
     *
     * S-MB-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly listofRAs: OPTIONAL<OCTET_STRING[]>;
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * The logical name of the connected access point to the BM-SC (network
     * identifier part of APN).
     *
     * S-MB-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `servedPDPAddress`.
     * @description
     *
     * This field contains the PDP address of the served IMSI. This is a network
     * layer address i.e. of type IPv4 address or IPv6 prefix. The address for
     * each PDP type is allocated either temporarily or permanently (see "Dynamic
     * Address Flag"). This parameter shall be present except when both the PDP
     * type is PPP and dynamic PDP address assignment is used.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.63.
     *
     * S-MB-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly servedPDPAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @description
     *
     * This list applicable in S-CDR, SGW-CDR, IPE-CDR, ePDG-CDR and TWAG-CDR,
     * includes one or more containers. This list applicable in PGW-CDR when
     * charging per IP-CAN session is active and IP-CAN bearer charging is being
     * performed for the session. In SGW-CDR, PGW-CDR, IPE-CDR, ePDG-CDR and
     * TWAG-CDR, containers are per QCI/ARP pair. This means that if QoS control
     * within one IP-CAN bearer is applicable in S-GW, P-GW, ePDG and TWAG, there
     * can be several containers open at same time one per each applied QCI/ARP
     * pair. Each container includes the following fields: In S-CDR first
     * container includes following optional fields: QoS Requested and QoS
     * Negotiated. In following containers QoS Negotiated is present if previous
     * change condition is "QoS change". In addition to the QoS Negotiated
     * parameter the QoS Requested parameter is present in following containers
     * if the change condition is "QoS change" and the QoS change was initiated
     * by the MS via a IP-CAN bearer modification procedure. Table 5.1.2.2.25.1
     * illustrates an example for S-CDR but same principles are applicable also
     * for SGW-CDR, PGW-CDR, IPE-CDR, ePDG-CDR and TWAG-CDR. There are five
     * containers (sets of volume counts) caused by one QoS change, one location
     * change, one tariff time change and one Direct Tunnel establishment (direct
     * tunnel change applicable in S-CDR only). When CDR is opened the subscriber
     * is in CGI1.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.25.
     *
     * S-MB-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * This field contains the time stamp when the MS is attached to a SGSN
     * (M-CDR) or IP-CAN bearer is activated in SGSN/S-GW/P-GW (S-CDR, SGW-CDR,
     * PGW-CDR) or TDF session is established, or IP-CAN session is established
     * (IPE-CDR), or record opening time on subsequent partial records (see TS
     * 32.250 [4] for exact format). Record opening reason does not have a
     * separate field. For SGW/PGW/TDF/IPE -CDRs and M-CDR it can be derived from
     * the field "Sequence number"; i.e. either a missing field or a value one
     * (1) means activation of IP-CAN bearer (SGW/PGW-CDR) or GPRS attachment
     * (M-CDR) or TDF session establishment (TDF-CDR), or IP-CAN session
     * establishment (IPE-CDR). For the S-CDR the field "SGSN change" also needs
     * to be taken into account.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.49.
     *
     * S-MB-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @description
     *
     * This field contains the relevant duration in seconds for IP-CAN bearer
     * (S-CDR, SGW-CDR, PGW-CDR), IP-CAN session (IPE-CDR), and attachment
     * (M-CDR). In case of TDF-CDR, this field contains the relevant duration in
     * seconds for TDF session. It is the duration from Record Opening Time to
     * record closure. For partial records this is the duration of the individual
     * partial record and not the cumulative duration. It should be noted that
     * the internal time measurements may be expressed in terms of tenths of
     * seconds or even milliseconds and, as a result, the calculation of the
     * duration may result in the rounding or truncation of the measured duration
     * to a whole number of seconds. Whether or not rounding or truncation is to
     * be used is considered to be outside the scope of the present document
     * subject to the following restrictions:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.12.
     *
     * S-MB-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * This field contains a reason for the release of the CDR. In case of Rf
     * interface is used, it is derived from Change-Condition AVP at
     * PS-information AVP level defined in TS 32.299 [40], when received. The
     * following is included: VoLTE bearer abnormal release: It corresponds to
     * "VoLTE Bearer Abnormal Release" in Change-Condition AVP. A more detailed
     * reason may be found in the diagnostics field or Enhanced Diagnostics
     * field.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.5.
     *
     * S-MB-CDR field category M (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
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
     * S-MB-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * This field contains a running sequence number employed to link the partial
     * records generated in the SGSN/SGW/PGW for a particular MM context or
     * IP-CAN bearer, or IP-CAN session, or TDF session (characterised with the
     * same Charging ID and PGW address pair). For M-CDR or S-CDR the sequence
     * number always restarts from one (1) after an inter-SGSN routing area
     * update, see field "SGSN change". The Record Sequence Number is missing if
     * the record is the only one produced in the SGSN/SGW/PGW/TDF/IP-Edge (e.g.
     * inter-SGSN routing area update can result to two M-CDR or two S-CDRs
     * without sequence number and field "SGSN change" present in the second
     * record).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.50.
     *
     * S-MB-CDR field category C (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * This field contains an optional, operator configurable, identifier string
     * for the node that had generated the CDR. The Node ID may or may not be the
     * DNS host name of the node.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.36.
     *
     * S-MB-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * This field enables network operators and/or manufacturers to add their own
     * recommended extensions to the standard record definitions. This field
     * contains a set of "management extensions" as defined in X.721 [305]. This
     * is conditioned upon the existence of an extension.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.48.
     *
     * S-MB-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * This field includes a unique record number created by this node. The
     * number is allocated sequentially for each partial CDR (or whole CDR)
     * including all CDR types. The number is unique within one node, which is
     * identified either by field Node ID or by record-dependent node address
     * (SGSN address, S-/P-GW address, TDF address, IP-Edge Address, Recording
     * Entity). The field can be used e.g. to identify missing records in post
     * processing system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.26.
     *
     * S-MB-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `sgsnPLMNIdentifier`.
     * @description
     *
     * Table 6.1.10.1 does not list this field. On the other SGSN CDRs the
     * serving-node PLMN identifier is the MCC and MNC of the PLMN serving the
     * UE, and only one value is included when the node supports multiple PLMN
     * identifiers (tables 6.1.1.1, 6.1.4.1, 6.1.5.1, 6.1.6.1, 6.1.7.1,
     * 6.1.8.1, and 6.1.9.1).
     *
     * @public
     * @readonly
     */
    readonly sgsnPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `numberofReceivingUE`.
     * @description
     *
     * Indicates the number of UEs receiving the MBMS bearer service
     *
     * S-MB-CDR field category OC (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly numberofReceivingUE: OPTIONAL<INTEGER>;
    /**
     * @summary `mbmsInformation`.
     * @description
     *
     * MBMS related information related to MBMS bearer context being charged,
     * defined in TS 32.273 [33].
     *
     * S-MB-CDR field category OM (3GPP TS 32.251 V19.0.0 table 6.1.10.1).
     *
     * @public
     * @readonly
     */
    readonly mbmsInformation: OPTIONAL<MBMSInformation>;

    constructor (
        recordType: RecordType,
        ggsnAddress: GSNAddress,
        chargingID: INTEGER,
        listofRAs: OPTIONAL<OCTET_STRING[]>,
        accessPointNameNI: OPTIONAL<IA5String>,
        servedPDPAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CauseForRecClosing,
        diagnostics?: OPTIONAL<Diagnostics>,
        recordSequenceNumber?: OPTIONAL<INTEGER>,
        nodeID?: OPTIONAL<IA5String>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        sgsnPLMNIdentifier?: OPTIONAL<OCTET_STRING>,
        numberofReceivingUE?: OPTIONAL<INTEGER>,
        mbmsInformation?: OPTIONAL<MBMSInformation>
    ) {
        this.recordType = recordType;
        this.ggsnAddress = ggsnAddress;
        this.chargingID = chargingID;
        this.listofRAs = listofRAs;
        this.accessPointNameNI = accessPointNameNI;
        this.servedPDPAddress = servedPDPAddress;
        this.listOfTrafficVolumes = listOfTrafficVolumes;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.recordSequenceNumber = recordSequenceNumber;
        this.nodeID = nodeID;
        this.recordExtensions = recordExtensions;
        this.localSequenceNumber = localSequenceNumber;
        this.sgsnPLMNIdentifier = sgsnPLMNIdentifier;
        this.numberofReceivingUE = numberofReceivingUE;
        this.mbmsInformation = mbmsInformation;
    
        if ((this.chargingID < 0 || this.chargingID > 4294967295)) {
            throw new ASN1OverflowError("SGSNMBMSRecord.chargingID violates INTEGER range");
        }
        if (this.listofRAs !== undefined && this.listofRAs) {
            for (const _item of this.listofRAs) {
                if (_item.length !== 6) {
                    throw new ASN1SizeError("SGSNMBMSRecord.listofRAs element violates SIZE constraint");
                }
            }
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SGSNMBMSRecord.accessPointNameNI violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SGSNMBMSRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SGSNMBMSRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SGSNMBMSRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.sgsnPLMNIdentifier !== undefined && (this.sgsnPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("SGSNMBMSRecord.sgsnPLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SGSNMBMSRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SGSNMBMSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SGSNMBMSRecord`.
     * @returns {SGSNMBMSRecord}
     */
    public static _from_object (_o: { [_K in keyof (SGSNMBMSRecord)]: (SGSNMBMSRecord)[_K] }): SGSNMBMSRecord {
        return new SGSNMBMSRecord(_o.recordType, _o.ggsnAddress, _o.chargingID, _o.listofRAs, _o.accessPointNameNI, _o.servedPDPAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.sgsnPLMNIdentifier, _o.numberofReceivingUE, _o.mbmsInformation);
    }


}

/**
 * @summary The Leading Root Component Types of SGSNMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SGSNMBMSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ggsnAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("listofRAs", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servedPDPAddress", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sgsnPLMNIdentifier", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("numberofReceivingUE", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("mbmsInformation", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of SGSNMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SGSNMBMSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SGSNMBMSRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SGSNMBMSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SGSNMBMSRecord: $.ASN1Decoder<SGSNMBMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SGSNMBMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SGSNMBMSRecord (el: _Element): SGSNMBMSRecord {
    if (!_cached_decoder_for_SGSNMBMSRecord) { _cached_decoder_for_SGSNMBMSRecord = function (el: _Element): SGSNMBMSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let ggsnAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let listofRAs: OPTIONAL<OCTET_STRING[]>;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let servedPDPAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfMBMSCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let sgsnPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let numberofReceivingUE: OPTIONAL<INTEGER>;
    let mbmsInformation: OPTIONAL<MBMSInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "ggsnAddress": (_el: _Element): void => { ggsnAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "listofRAs": (_el: _Element): void => { listofRAs = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "servedPDPAddress": (_el: _Element): void => { servedPDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfMBMSCondition[]>(() => $._decodeSequenceOf<ChangeOfMBMSCondition>(() => _decode_ChangeOfMBMSCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sgsnPLMNIdentifier": (_el: _Element): void => { sgsnPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberofReceivingUE": (_el: _Element): void => { numberofReceivingUE = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mbmsInformation": (_el: _Element): void => { mbmsInformation = $._decode_implicit<MBMSInformation>(() => _decode_MBMSInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SGSNMBMSRecord,
        _extension_additions_list_spec_for_SGSNMBMSRecord,
        _root_component_type_list_2_spec_for_SGSNMBMSRecord,
        undefined,
    );
    return new SGSNMBMSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        ggsnAddress,
        chargingID,
        listofRAs,
        accessPointNameNI,
        servedPDPAddress,
        listOfTrafficVolumes,
        recordOpeningTime,
        duration,
        causeForRecClosing,
        diagnostics,
        recordSequenceNumber,
        nodeID,
        recordExtensions,
        localSequenceNumber,
        sgsnPLMNIdentifier,
        numberofReceivingUE,
        mbmsInformation
    );
}; }
    return _cached_decoder_for_SGSNMBMSRecord(el);
}

let _cached_encoder_for_SGSNMBMSRecord: $.ASN1Encoder<SGSNMBMSRecord> | null = null;

/**
 * @summary Encodes a(n) SGSNMBMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SGSNMBMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SGSNMBMSRecord (value: SGSNMBMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SGSNMBMSRecord) { _cached_encoder_for_SGSNMBMSRecord = function (value: SGSNMBMSRecord, _elGetter: $.ASN1Encoder<SGSNMBMSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GSNAddress, $.BER)(value.ggsnAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.listofRAs !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.listofRAs, $.BER));
    }
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.servedPDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_PDPAddress, $.BER)(value.servedPDPAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ChangeOfMBMSCondition>(() => _encode_ChangeOfMBMSCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.sgsnPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.sgsnPLMNIdentifier, $.BER));
    }
    if (value.numberofReceivingUE !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.numberofReceivingUE, $.BER));
    }
    if (value.mbmsInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_MBMSInformation, $.BER)(value.mbmsInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SGSNMBMSRecord(value, elGetter);
}


/* eslint-enable */
