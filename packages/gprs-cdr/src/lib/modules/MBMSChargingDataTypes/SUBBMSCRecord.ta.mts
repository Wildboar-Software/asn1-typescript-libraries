/* eslint-disable */
import {
    type IA5String,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../MBMSChargingDataTypes/RecordType.ta.mjs";
import { type IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MBMSChargingDataTypes/IPAddress.ta.mjs";
import { type PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../MBMSChargingDataTypes/PDPAddress.ta.mjs";
import { ListOfTrafficVolumes, _decode_ListOfTrafficVolumes, _encode_ListOfTrafficVolumes } from "../MBMSChargingDataTypes/ListOfTrafficVolumes.ta.mjs";
import { type SUBBMSCRecord_causeForRecClosing, _decode_SUBBMSCRecord_causeForRecClosing, _encode_SUBBMSCRecord_causeForRecClosing } from "../MBMSChargingDataTypes/SUBBMSCRecord-causeForRecClosing.ta.mjs";
import { type Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../MBMSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../MBMSChargingDataTypes/ManagementExtension.ta.mjs";
import { BearerServiceDescription, _decode_BearerServiceDescription, _encode_BearerServiceDescription } from "../MBMSChargingDataTypes/BearerServiceDescription.ta.mjs";
import { MBMSInformation, _decode_MBMSInformation, _encode_MBMSInformation } from "../MBMSChargingDataTypes/MBMSInformation.ta.mjs";


/**
 * @summary SUBBMSCRecord
 * @description
 *
 * Subscriber BM-SC CDR (S-BMSC-CDR). The BM-SC produces one record
 * for each MBMS bearer service used by a subscriber. The record
 * opens at UE activation, when the BM-SC sends Charging Data
 * Request [Start] (ACR [Start] in clause 5.2.3.1.1). Volume is
 * counted in the downlink direction.
 *
 * For GPRS subscriber charging, Charging Data Request [Start] is
 * mandatory when the UE is authorized for a multicast bearer, and
 * configurable on the first Session Start Response from any GGSN
 * for a broadcast bearer. Charging Data Request [Stop] is mandatory
 * on a Leave Indication from the UE (multicast) and configurable on
 * the first Session Stop Response from any GGSN (broadcast) and on
 * implementation-dependent termination of the MBMS user service.
 * User-service event charging is configurable and implementation
 * dependent. Full triggers, including interim reports, are in
 * table 5.2.1.1.
 *
 * Traffic-volume containers are added on the triggers in clause
 * 5.2.3.1.2. The record closes on the triggers in clause 5.2.3.1.3.
 * Field categories follow TS 32.240 clause 5.4, as applied by
 * clause 6.1.3.0.
 *
 * 3GPP TS 32.273 V19.0.0 clauses 5.2.1 and 5.2.3.1, and
 * table 6.1.3.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUBBMSCRecord ::= SET {
 *    recordType                 [0] IMPLICIT RecordType,
 *    servedIMSI                 [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    ggsnAddress                [2] IPAddress OPTIONAL,
 *    accessPointNameNI          [3] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    servedPDPAddress           [4] PDPAddress OPTIONAL,
 *    listOfTrafficVolumes       [5] IMPLICIT SEQUENCE  OF
 *       ListOfTrafficVolumes OPTIONAL,
 *    recordOpeningTime          [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                   [7] IMPLICIT INTEGER,
 *    causeForRecClosing         [8] IMPLICIT INTEGER {
 *       normalRelease                 ( 0 ),
 *       abnormalRelease               ( 4 ),
 *       volumeLimit                   ( 16 ),
 *       timeLimit                     ( 17 ),
 *       maxChangeCond                 ( 19 ),
 *       managementIntervention        ( 20 ),
 *       listofDownstreamNodeChange    ( 59 )},
 *    diagnostics                [9] Diagnostics OPTIONAL,
 *    recordSequenceNumber       [10] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                     [11] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions           [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber        [13] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedMSISDN               [14] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    bearerServiceDescription   [15] IMPLICIT BearerServiceDescription OPTIONAL,
 *    mbmsInformation            [16] IMPLICIT MBMSInformation OPTIONAL,
 *    serviceContextID           [17] IMPLICIT UTF8String OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SUBBMSCRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * Identifies this record as an S-BM-SC record. Mandatory. The
     * MBMS Charged Party information element is bound to the record
     * type.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * IMSI of the served party. Mandatory. May be taken from the
     * Subscription-Id of the Charging Data Request when that
     * identifier is of type IMSI. Bound from Subscription-Id.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `ggsnAddress`.
     * @description
     *
     * Control-plane IP address of the GGSN used for MBMS UE context
     * activation. Conditional: present only for multicast. Bound
     * from GGSN-Address.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly ggsnAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `accessPointNameNI`.
     * @description
     *
     * Network-identifier part of the APN: the logical name of the
     * access point connected to the external packet data network.
     * Category OC. Present only for multicast. Bound from
     * Called-Station-Id.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `servedPDPAddress`.
     * @description
     *
     * IP multicast address associated with the MBMS bearer context.
     * Category OM.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1.
     *
     * @public
     * @readonly
     */
    readonly servedPDPAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @description
     *
     * Changes in charging conditions for this MBMS bearer service,
     * including MBMS UE context modifications. Each change is time
     * stamped. Conditions categorize volume, for example per tariff
     * period. Initial QoS, later QoS, and the matching data volumes
     * are included. Category OM.
     *
     * MBMS charging counts downlink volume only. This list shall not
     * count uplink volume.
     *
     * A new container is added on tariff time change (all active
     * containers), and may be added on MBMS Session Start, MBMS
     * Session Stop, or MBMS UE context modification. On CDR closure,
     * every active container is added. The start time of a new
     * container is the later of the first Session Start Response,
     * MBMS UE context activation, and closure of the last partial
     * CDR. Inter-system change is one cause of MBMS UE context
     * modification; the UE stays IDLE as seen by the core network,
     * so the change is not reported at the moment it happens.
     *
     * 3GPP TS 32.273 V19.0.0 clause 5.2.3.1.2 and table 6.1.3.1.1.
     *
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ListOfTrafficVolumes[]>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * Time at which UE activation occurred, or the opening time of a
     * subsequent partial record. Mandatory. Generated at the CDF.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and the note to
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @description
     *
     * Duration of this record. Mandatory. Generated at the CDF.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and the note to
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * Reason the record was released. Mandatory. See
     * `SUBBMSCRecord_causeForRecClosing`. Bound from
     * Change-Condition. A more detailed reason may be in
     * `diagnostics`.
     *
     * 3GPP TS 32.273 V19.0.0 clause 5.2.3.1.3, table 6.1.3.1.1, and
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: SUBBMSCRecord_causeForRecClosing;
    /**
     * @summary `diagnostics`.
     * @description
     *
     * More detailed reason for release of the connection. Category
     * OM. In the service information it complements Change-Condition
     * and gives a more detailed reason for release of the MBMS
     * bearer. Bound from the Diagnostics AVP.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1, clause 6.3.1.1, and
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * Partial-record sequence number. Conditional: present only when
     * the record is a partial record. Generated at the CDF.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and the note to
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @description
     *
     * Name of the recording entity. Category OM. Bound from Node-Id.
     * The service-information definition of Node Id is in TS 32.251.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1, clause 6.3.1.1, and
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Network-operator or manufacturer extensions to the record.
     * Category OC. Present when an extension exists.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * Consecutive record number created by this node. Allocated
     * sequentially across all CDR types. Category OM. Generated at
     * the CDF.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and the note to
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * Primary MSISDN of the subscriber. Category OM. May be taken
     * from the Subscription-Id of the Charging Data Request when that
     * identifier is of type E.164. Bound from Subscription-Id.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `bearerServiceDescription`.
     * @description
     *
     * Session portion of the SDP exchanged between the BM-SC and the
     * UE during notification. Category OC. Carried in IMS
     * Information. The SDP session description and SDP media
     * components are specified in TS 32.260.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1, clause 6.3.1.1, and
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly bearerServiceDescription: OPTIONAL<BearerServiceDescription>;
    /**
     * @summary `mbmsInformation`.
     * @description
     *
     * MBMS-specific parameters. Category OM. The structure is defined
     * in clause 6.3.1.2.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1 and clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly mbmsInformation: OPTIONAL<MBMSInformation>;
    /**
     * @summary `serviceContextID`.
     * @description
     *
     * Context to which this CDR belongs. Category OM. In the common
     * CDR syntax this is the Diameter service context: the service,
     * subsystem or domain, and the release the CDR applies to. The
     * contents are described in TS 32.299.
     *
     * 3GPP TS 32.273 V19.0.0 table 6.1.3.1.1.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.1.2.
     *
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        ggsnAddress: OPTIONAL<IPAddress>,
        accessPointNameNI: OPTIONAL<IA5String>,
        servedPDPAddress: OPTIONAL<PDPAddress>,
        listOfTrafficVolumes: OPTIONAL<ListOfTrafficVolumes[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: SUBBMSCRecord_causeForRecClosing,
        diagnostics?: OPTIONAL<Diagnostics>,
        recordSequenceNumber?: OPTIONAL<INTEGER>,
        nodeID?: OPTIONAL<IA5String>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        servedMSISDN?: OPTIONAL<OCTET_STRING>,
        bearerServiceDescription?: OPTIONAL<BearerServiceDescription>,
        mbmsInformation?: OPTIONAL<MBMSInformation>,
        serviceContextID?: OPTIONAL<UTF8String>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.ggsnAddress = ggsnAddress;
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
        this.servedMSISDN = servedMSISDN;
        this.bearerServiceDescription = bearerServiceDescription;
        this.mbmsInformation = mbmsInformation;
        this.serviceContextID = serviceContextID;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("SUBBMSCRecord.servedIMSI violates SIZE constraint");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("SUBBMSCRecord.accessPointNameNI violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("SUBBMSCRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("SUBBMSCRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SUBBMSCRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("SUBBMSCRecord.servedMSISDN violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SUBBMSCRecord
     * @description
     * 
     * This takes an `object` and converts it to a `SUBBMSCRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SUBBMSCRecord`.
     * @returns {SUBBMSCRecord}
     */
    public static _from_object (_o: { [_K in keyof (SUBBMSCRecord)]: (SUBBMSCRecord)[_K] }): SUBBMSCRecord {
        return new SUBBMSCRecord(_o.recordType, _o.servedIMSI, _o.ggsnAddress, _o.accessPointNameNI, _o.servedPDPAddress, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.servedMSISDN, _o.bearerServiceDescription, _o.mbmsInformation, _o.serviceContextID);
    }


}

/**
 * @summary The Leading Root Component Types of SUBBMSCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SUBBMSCRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ggsnAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedPDPAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bearerServiceDescription", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mbmsInformation", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceContextID", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of SUBBMSCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SUBBMSCRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SUBBMSCRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SUBBMSCRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SUBBMSCRecord: $.ASN1Decoder<SUBBMSCRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUBBMSCRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUBBMSCRecord (el: _Element): SUBBMSCRecord {
    if (!_cached_decoder_for_SUBBMSCRecord) { _cached_decoder_for_SUBBMSCRecord = function (el: _Element): SUBBMSCRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let ggsnAddress: OPTIONAL<IPAddress>;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let servedPDPAddress: OPTIONAL<PDPAddress>;
    let listOfTrafficVolumes: OPTIONAL<ListOfTrafficVolumes[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: SUBBMSCRecord_causeForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let bearerServiceDescription: OPTIONAL<BearerServiceDescription>;
    let mbmsInformation: OPTIONAL<MBMSInformation>;
    let serviceContextID: OPTIONAL<UTF8String>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ggsnAddress": (_el: _Element): void => { ggsnAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "servedPDPAddress": (_el: _Element): void => { servedPDPAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ListOfTrafficVolumes[]>(() => $._decodeSequenceOf<ListOfTrafficVolumes>(() => _decode_ListOfTrafficVolumes))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<SUBBMSCRecord_causeForRecClosing>(() => _decode_SUBBMSCRecord_causeForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "bearerServiceDescription": (_el: _Element): void => { bearerServiceDescription = $._decode_implicit<BearerServiceDescription>(() => _decode_BearerServiceDescription)(_el); },
        "mbmsInformation": (_el: _Element): void => { mbmsInformation = $._decode_implicit<MBMSInformation>(() => _decode_MBMSInformation)(_el); },
        "serviceContextID": (_el: _Element): void => { serviceContextID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SUBBMSCRecord,
        _extension_additions_list_spec_for_SUBBMSCRecord,
        _root_component_type_list_2_spec_for_SUBBMSCRecord,
        undefined,
    );
    return new SUBBMSCRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        ggsnAddress,
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
        servedMSISDN,
        bearerServiceDescription,
        mbmsInformation,
        serviceContextID
    );
}; }
    return _cached_decoder_for_SUBBMSCRecord(el);
}

let _cached_encoder_for_SUBBMSCRecord: $.ASN1Encoder<SUBBMSCRecord> | null = null;

/**
 * @summary Encodes a(n) SUBBMSCRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUBBMSCRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SUBBMSCRecord (value: SUBBMSCRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUBBMSCRecord) { _cached_encoder_for_SUBBMSCRecord = function (value: SUBBMSCRecord, _elGetter: $.ASN1Encoder<SUBBMSCRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.ggsnAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.ggsnAddress, $.BER));
    }
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.servedPDPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_PDPAddress, $.BER)(value.servedPDPAddress, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ListOfTrafficVolumes>(() => _encode_ListOfTrafficVolumes, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_SUBBMSCRecord_causeForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.bearerServiceDescription !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_BearerServiceDescription, $.BER)(value.bearerServiceDescription, $.BER));
    }
    if (value.mbmsInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_MBMSInformation, $.BER)(value.mbmsInformation, $.BER));
    }
    if (value.serviceContextID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeUTF8String, $.BER)(value.serviceContextID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SUBBMSCRecord(value, elGetter);
}


/* eslint-enable */
