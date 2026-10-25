/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { type CommonEquipRecord_equipmentType, _decode_CommonEquipRecord_equipmentType, _encode_CommonEquipRecord_equipmentType } from "../CSChargingDataTypes/CommonEquipRecord-equipmentType.ta.mjs";
import { type BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { type SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";


/**
 * @summary CommonEquipRecord
 * @description
 *
 * Common-equipment usage CDR. When enabled, the VMSC creates one to record
 * how long a subscriber used shared equipment, for example a conference
 * circuit. The served party is the subscriber who seized the equipment.
 *
 * For multi-party, the conference originator gets this record for the
 * conference bridge. It records the whole conference duration, independent
 * of parties added or removed later. An action that affects the conference
 * as a whole may be recorded here or in an SS-action record (clause
 * 5.1.3.5). The only equipment type named by this module is the conference
 * bridge.
 *
 * `seizureTime` is when the equipment was seized. `releaseTime` is when it
 * was released. There is no answer timestamp. Table 6.1.3.17 also
 * lists partial record type. This SET does not contain that component.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.5 and 6.1.3.17.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonEquipRecord ::= SET {
 *    recordType          [0] IMPLICIT RecordType,
 *    equipmentType       [1] IMPLICIT INTEGER {
 *       conferenceBridge    ( 0 )},
 *    equipmentId         [2] IMPLICIT INTEGER,
 *    servedIMSI          [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN        [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity     [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    basicService        [6] BasicService OPTIONAL,
 *    changeOfService     [7] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed   [8] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    seizureTime         [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    releaseTime         [10] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration        [11] IMPLICIT INTEGER,
 *    callReference       [12] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber      [13] IMPLICIT INTEGER OPTIONAL,
 *    recordExtensions    [14] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    systemType          [15] IMPLICIT SystemType OPTIONAL,
 *    rateIndication      [16] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    fnur                [17] IMPLICIT Fnur OPTIONAL}
 * ```
 * @class
 */
export
class CommonEquipRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. Common equipment usage record.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * The field identifies the type of the record e.g. mobile originated,
     * mobile terminated etc.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.72.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `equipmentType`.
     * @description
     *
     * 2G and 3G mandatory. e.g. Conference circuit.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field contains the type of common equipment employed e.g. conference
     * circuit for multi-party service.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.23.
     *
     * @public
     * @readonly
     */
    readonly equipmentType: CommonEquipRecord_equipmentType;
    /**
     * @summary `equipmentId`.
     * @description
     *
     * 2G and 3G conditional. The local id. Of the equipment employed.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field contains a local identifier used to distinguish between
     * equipment of the same equipment type e.g. the number of the conference
     * circuit employed if more than one is available.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.22.
     *
     * @public
     * @readonly
     */
    readonly equipmentId: INTEGER;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G and 3G mandatory. The IMSI of the party responsible for the seizure of
     * the equipment..
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This fields contains the international mobile subscriber identity (IMSI)
     * of the served party. The term "served" party is used to describe the
     * mobile subscriber involved in the transaction recorded e.g. the calling
     * subscriber in case of an MOC record. The structure of the IMSI is defined
     * in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.79.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The primary MSISDN of the
     * served party..
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This fields contains the mobile station ISDN number (MSISDN) of the
     * served party. The term "served" party is used to describe the mobile
     * subscriber involved in the transaction recorded e.g. the called
     * subscriber in case of an MTC record. In case of multi-numbering the
     * MSISDN stored in a MOC record will be the primary MSISDN of the calling
     * party. The structure of the MSISDN is defined in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.80.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 number of the MSC in which the equipment
     * is located.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field contains the E.164 [308] number assigned to the entity (MSC,
     * VLR, HLR etc.) that produced the record. For further details concerning
     * the structure of MSC and location register numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.73.
     *
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `basicService`.
     * @description
     *
     * 2G and 3G conditional. Bearer or teleservice employed, if appropriate.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `changeOfService`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A list of changes of basic
     * service during a connection each time-stamped.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * @public
     * @readonly
     */
    readonly changeOfService: OPTIONAL<ChangeOfService[]>;
    /**
     * @summary `supplServicesUsed`.
     * @description
     *
     * 2G and 3G conditional. Supplementary services invoked in connection with
     * this equipment.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `seizureTime`.
     * @description
     *
     * 2G and 3G mandatory. The time at which the equipment was seized.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * @public
     * @readonly
     */
    readonly seizureTime: OCTET_STRING;
    /**
     * @summary `releaseTime`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The time at which the
     * equipment was released.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @description
     *
     * 2G and 3G mandatory. The total duration of the usage of the equipment.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field contains the relevant call duration in seconds. For incomplete
     * calls (call attempts) the relevant duration is the call holding time from
     * the seizure to the release of the traffic channel. For complete
     * (answered) calls this is the chargeable duration from answer to release
     * of the traffic channel. For partial records this is the duration of the
     * individual partial record and not the cumulative duration of the call. It
     * should be noted that the time stamps may be expressed in terms of tenths
     * of seconds or even milliseconds and, as a result, the calculation of the
     * call duration may result in the rounding or truncation of the measured
     * duration to a whole number of seconds. Whether or not rounding or
     * truncation is to be used is considered to be outside the scope of the
     * present document subject to the following restrictions: If CAMEL is
     * invoked for the call and a control relationship is existing, the call
     * might continue after a RELEASE or a DISCONNECT from the called party side
     * received by the gsmSSF. The call duration of the incoming leg is stored
     * in the main body of the call record. For each outgoing leg the call
     * duration is stored in the respective 'CAMELInformation' module. If a call
     * leg does not reach answer status and attempt charging is enabled a
     * 'CAMELInformation' module containing the holding time is generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.4.
     *
     * @public
     * @readonly
     */
    readonly callDuration: INTEGER;
    /**
     * @summary `callReference`.
     * @description
     *
     * 2G and 3G mandatory. A local identifier distinguishing between
     * transactions.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field uniquely identifies a call or transaction on one side of the
     * interface (i.e. 'A' or 'B' side) and is derived from the transaction
     * identifier of TS 24.008 [208]. It is also used to identify all partial
     * records and transactions belonging to the same connection. For the
     * avoidance of doubt, there is no global call reference defined within GSM
     * and the call reference field cannot be used to combine, for example, the
     * MOC and MTC records of a mobiletomobile connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
    /**
     * @summary `sequenceNumber`.
     * @description
     *
     * 2G and 3G conditional. Partial record sequence number if applicable.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field contains a running sequence number employed to link the
     * partial records generated for a particular connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.77.
     *
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * The field enables network operators and/ or manufacturers to add their
     * own extensions to the standard record definitions.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.71.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `systemType`.
     * @description
     *
     * 2G not applicable, 3G mandatory. This field indicates the use of GERAN,
     * UTRAN (or a value of unknown). This field is present when either the
     * UTRAN or GERAN air-interface is used on call set-up. For an open CDR in a
     * 2G NE (responsible for the CDR), the field is not present (even if the
     * call is handed off to a 3G air interface). For a CDR in a 3G NE
     * (responsible for the CDR), the value unknown shall be used after
     * handover.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This field indicates the use of GERAN, UTRAN (or a value of unknown).
     * This field is present when either the UTRAN or GERAN air-interface is
     * used on call set-up. For an open CDR in a 2G NE (responsible for the
     * CDR), the field is not present (even if the call is handed off to a 3G
     * air interface). For a CDR in a 3G NE (responsible for the CDR), the value
     * unknown shall be used after handover.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.91.
     *
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `rateIndication`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Present if "rate adaption"
     * parameters for the basic service were signalled between the MS/UE and the
     * network, see 3GPP TS 24.008 [208].
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * This parameter specifies the rate adaptation that was used for the
     * connection. The field is constructed from the information in the
     * parameters "rate adaptation" and "other rate adaptation" signalled
     * between the MS/UE and the network, see TS 24.008 [208]. The format of
     * this field is a single octet with the following format: Bits 0-1: the
     * Rate Adaptation field as defined in TS 24.008 [208]; Bits 2-3: the Other
     * Rate Adaptation field as defined in TS 24.008 [208]; Bits 4-7: not used.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.69.
     *
     * @public
     * @readonly
     */
    readonly rateIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `fnur`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Indicates the user data
     * rate applied for the connection in the fixed network. Shall only be
     * present for 2G HSCSD connections and for UMTS data connections.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.17.
     *
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;

    constructor (
        recordType: RecordType,
        equipmentType: CommonEquipRecord_equipmentType,
        equipmentId: INTEGER,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        basicService: OPTIONAL<BasicService>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        seizureTime: OCTET_STRING,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        callReference: OCTET_STRING,
        sequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        systemType?: OPTIONAL<SystemType>,
        rateIndication?: OPTIONAL<OCTET_STRING>,
        fnur?: OPTIONAL<Fnur>
    ) {
        this.recordType = recordType;
        this.equipmentType = equipmentType;
        this.equipmentId = equipmentId;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.basicService = basicService;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.seizureTime = seizureTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.recordExtensions = recordExtensions;
        this.systemType = systemType;
        this.rateIndication = rateIndication;
        this.fnur = fnur;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("CommonEquipRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("CommonEquipRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("CommonEquipRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("CommonEquipRecord.seizureTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("CommonEquipRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("CommonEquipRecord.callReference violates SIZE constraint");
        }
        if (this.rateIndication !== undefined && (this.rateIndication.length !== 1)) {
            throw new ASN1SizeError("CommonEquipRecord.rateIndication violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CommonEquipRecord
     * @description
     *
     * This takes an `object` and converts it to a `CommonEquipRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonEquipRecord`.
     * @returns {CommonEquipRecord}
     */
    public static _from_object (_o: { [_K in keyof (CommonEquipRecord)]: (CommonEquipRecord)[_K] }): CommonEquipRecord {
        return new CommonEquipRecord(_o.recordType, _o.equipmentType, _o.equipmentId, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.basicService, _o.changeOfService, _o.supplServicesUsed, _o.seizureTime, _o.releaseTime, _o.callDuration, _o.callReference, _o.sequenceNumber, _o.recordExtensions, _o.systemType, _o.rateIndication, _o.fnur);
    }

        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;
}

/**
 * @summary The Leading Root Component Types of CommonEquipRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("equipmentType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("equipmentId", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("seizureTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of CommonEquipRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonEquipRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonEquipRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonEquipRecord: $.ASN1Decoder<CommonEquipRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonEquipRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonEquipRecord (el: _Element): CommonEquipRecord {
    if (!_cached_decoder_for_CommonEquipRecord) { _cached_decoder_for_CommonEquipRecord = function (el: _Element): CommonEquipRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let equipmentType!: CommonEquipRecord_equipmentType;
    let equipmentId!: INTEGER;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let basicService: OPTIONAL<BasicService>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let seizureTime!: OCTET_STRING;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let systemType: OPTIONAL<SystemType>;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let fnur: OPTIONAL<Fnur>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "equipmentType": (_el: _Element): void => { equipmentType = $._decode_implicit<CommonEquipRecord_equipmentType>(() => _decode_CommonEquipRecord_equipmentType)(_el); },
        "equipmentId": (_el: _Element): void => { equipmentId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CommonEquipRecord,
        _extension_additions_list_spec_for_CommonEquipRecord,
        _root_component_type_list_2_spec_for_CommonEquipRecord,
        undefined,
    );
    return new CommonEquipRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        equipmentType,
        equipmentId,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        basicService,
        changeOfService,
        supplServicesUsed,
        seizureTime,
        releaseTime,
        callDuration,
        callReference,
        sequenceNumber,
        recordExtensions,
        systemType,
        rateIndication,
        fnur
    );
}; }
    return _cached_decoder_for_CommonEquipRecord(el);
}

let _cached_encoder_for_CommonEquipRecord: $.ASN1Encoder<CommonEquipRecord> | null = null;

/**
 * @summary Encodes a(n) CommonEquipRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonEquipRecord, encoded as an ASN.1 Element.
 */
export
function _encode_CommonEquipRecord (value: CommonEquipRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonEquipRecord) { _cached_encoder_for_CommonEquipRecord = function (value: CommonEquipRecord, _elGetter: $.ASN1Encoder<CommonEquipRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommonEquipRecord_equipmentType, $.BER)(value.equipmentType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.equipmentId, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CommonEquipRecord(value, elGetter);
}


/* eslint-enable */
