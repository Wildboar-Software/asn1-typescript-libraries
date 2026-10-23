/* eslint-disable */
import {
    IA5String,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CHFChargingDataTypes/RecordType.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../CHFChargingDataTypes/SubscriptionID.ta.mjs";
import { NetworkFunctionInformation, _decode_NetworkFunctionInformation, _encode_NetworkFunctionInformation } from "../CHFChargingDataTypes/NetworkFunctionInformation.ta.mjs";
import { Trigger, _decode_Trigger, _encode_Trigger } from "../CHFChargingDataTypes/Trigger.ta.mjs";
import { MultipleUnitUsage, _decode_MultipleUnitUsage, _encode_MultipleUnitUsage } from "../CHFChargingDataTypes/MultipleUnitUsage.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../CHFChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CHFChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CHFChargingDataTypes/ManagementExtension.ta.mjs";
import { PDUSessionChargingInformation, _decode_PDUSessionChargingInformation, _encode_PDUSessionChargingInformation } from "../CHFChargingDataTypes/PDUSessionChargingInformation.ta.mjs";
import { RoamingQBCInformation, _decode_RoamingQBCInformation, _encode_RoamingQBCInformation } from "../CHFChargingDataTypes/RoamingQBCInformation.ta.mjs";
import { SMSChargingInformation, _decode_SMSChargingInformation, _encode_SMSChargingInformation } from "../CHFChargingDataTypes/SMSChargingInformation.ta.mjs";


/**
 * @summary ChargingRecord
 * @description
 *
 * If enabled, CHF records shall be produced for chargeable events, with or
 * without quota management. A CHF-CDR shall be opened when the CHF receives
 * Charging Data Request [Initial]. As an alternative to the default CHF
 * behaviour, the "Individual Partial record" mechanism can be used based on
 * Operator's policy configured in the CHF. In this case a new CDR shall be
 * opened for each Charging Data Request [Initial, Update, Termination],
 * charging information shall be added and the CDR shall then be closed. The
 * Sequence Number will be incremented for each Charging Data Request
 * [Initial, Update, Termination] received by the CHF. The generic fields in
 * the record are specified in table 5.1.5.0.1. The NF specific parts will be
 * concatenated to this e.g. the PDU Session Information, PDU Container
 * Information and Roaming QBC Information are concatenated for the SMF.
 * Table 5.1.5.0.1: CHF record (CHF-CDR)
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.5.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingRecord ::= SET {
 *    recordType                        [0] IMPLICIT RecordType,
 *    recordingNetworkFunctionID        [1] IMPLICIT IA5String  ( SIZE( 1 .. 36 ) ),
 *    subscriberIdentifier              [2] IMPLICIT SubscriptionID OPTIONAL,
 *    nFunctionConsumerInformation      [3] IMPLICIT NetworkFunctionInformation,
 *    triggers                          [4] IMPLICIT SEQUENCE  OF
 *       Trigger OPTIONAL,
 *    listOfMultipleUnitUsage           [5] IMPLICIT SEQUENCE  OF
 *       MultipleUnitUsage OPTIONAL,
 *    recordOpeningTime                 [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                          [7] IMPLICIT INTEGER,
 *    recordSequenceNumber              [8] IMPLICIT INTEGER OPTIONAL,
 *    causeForRecClosing                [9] IMPLICIT CauseForRecClosing,
 *    diagnostics                       [10] Diagnostics OPTIONAL,
 *    localRecordSequenceNumber         [11] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions                  [12] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    pDUSessionChargingInformation     [13] IMPLICIT PDUSessionChargingInformation OPTIONAL,
 *    roamingQBCInformation             [14] IMPLICIT RoamingQBCInformation OPTIONAL,
 *    sMSChargingInformation            [15] IMPLICIT SMSChargingInformation OPTIONAL,
 *    chargingSessionIdentifier         [16] IMPLICIT OCTET STRING OPTIONAL,
 *    serviceSpecificationInformation   [17] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChargingRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * The field identifies the type of the record i.e. CHF-CDR.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.10.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `recordingNetworkFunctionID`.
     * @description
     *
     * This field contains the UUID of the Network Function Instance ID assigned
     * to the instance that produced the record. For further details see TS
     * 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.11.
     *
     * @public
     * @readonly
     */
    readonly recordingNetworkFunctionID: IA5String;
    /**
     * @summary `subscriberIdentifier`.
     * @description
     *
     * This field contains the 5G Subscription Permanent Identifier (SUPI) of the
     * served party, if available. For further details see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.13.
     *
     * @public
     * @readonly
     */
    readonly subscriberIdentifier: OPTIONAL<SubscriptionID>;
    /**
     * @summary `nFunctionConsumerInformation`.
     * @description
     *
     * This field contains the information about the NF that used the charging
     * service. It includes the following fields: NF Functionality includes the
     * functionality provided by the NF. NF Name contains the UUID of the NF. NF
     * Address contains the IP-address and/or FQDN of the NF NF PLMN ID holds the
     * PLMN id of the NF For further details see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.6.
     *
     * @public
     * @readonly
     */
    readonly nFunctionConsumerInformation: NetworkFunctionInformation;
    /**
     * @summary `triggers`.
     * @public
     * @readonly
     */
    readonly triggers: OPTIONAL<Trigger[]>;
    /**
     * @summary `listOfMultipleUnitUsage`.
     * @description
     *
     * This list applicable in CHF-CDR and includes one or more containers. Each
     * container includes the following fields:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.4.
     *
     * @public
     * @readonly
     */
    readonly listOfMultipleUnitUsage: OPTIONAL<MultipleUnitUsage[]>;
    /**
     * @summary `recordOpeningTime`.
     * @description
     *
     * This field contains the time stamp when the request Charging Data Request
     * [Initial] is received in the CHF from the NF or Charging Data Request
     * [Update] in the case of a partial record.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.8.
     *
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @description
     *
     * This field contains the relevant duration in seconds from Record Opening
     * Time to record closure. For partial records this is the duration of the
     * individual partial record and not the cumulative duration. It should be
     * noted that the internal time measurements may be expressed in terms of
     * tenths of seconds or even milliseconds and, as a result, the calculation
     * of the duration may result in the rounding or truncation of the measured
     * duration to a whole number of seconds. Whether or not rounding/truncation
     * is to be used is considered outside the scope of the present document,
     * however it is subject to the following restrictions:
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.3.
     *
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `recordSequenceNumber`.
     * @description
     *
     * This field contains a running sequence number employed to link the partial
     * records generated in the CHF.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.9.
     *
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `causeForRecClosing`.
     * @description
     *
     * This field contains a reason for the close of the CDR, in CHF case
     * reception of either Charging Data Request [Termination] or Charging Data
     * Request [Update] in the case of an individual partial record.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.2.
     *
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `localRecordSequenceNumber`.
     * @description
     *
     * This field includes a unique record number created by this network
     * function. The number is allocated sequentially for each partial CDR (or
     * whole CDR) including all CDR types. The number is unique within one
     * network function, which is identified by field Recording Network Function
     * ID. The field can be used to identify missing records in post processing
     * system.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.5.
     *
     * @public
     * @readonly
     */
    readonly localRecordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * This field enables network operators and/or manufacturers to add their own
     * recommended extensions to the standard record definitions. This field
     * contains a set of "management extensions" as defined in X.721 [305]. This
     * is conditioned upon the existence of an extension. This field may contain
     * the specific information for converged charging (e.g. with quota
     * management).
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.12.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `pDUSessionChargingInformation`.
     * @description
     *
     * This field holds the 5G data connectivity specific information described
     * in TS 32.255 [15]
     *
     * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
     *
     * @public
     * @readonly
     */
    readonly pDUSessionChargingInformation: OPTIONAL<PDUSessionChargingInformation>;
    /**
     * @summary `roamingQBCInformation`.
     * @description
     *
     * This field holds the roaming 5G data connectivity specific information
     * described in TS 32.255 [15]
     *
     * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
     *
     * @public
     * @readonly
     */
    readonly roamingQBCInformation: OPTIONAL<RoamingQBCInformation>;
    /**
     * @summary `sMSChargingInformation`.
     * @description
     *
     * This field holds the SMS specific information described in TS 32.274 [34].
     *
     * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
     *
     * @public
     * @readonly
     */
    readonly sMSChargingInformation: OPTIONAL<SMSChargingInformation>;
    /**
     * @summary `chargingSessionIdentifier`.
     * @description
     *
     * This field holds the Session Identifier described in TS 32.290 [57].
     *
     * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
     *
     * @public
     * @readonly
     */
    readonly chargingSessionIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceSpecificationInformation`.
     * @description
     *
     * This field contains the Service Specification Information, e.g. the
     * service specific document ('middle tier' TS) and 3GPP release the service
     * specific document is based upon.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.16.
     *
     * @public
     * @readonly
     */
    readonly serviceSpecificationInformation: OPTIONAL<OCTET_STRING>;

    constructor (
        recordType: RecordType,
        recordingNetworkFunctionID: IA5String,
        subscriberIdentifier: OPTIONAL<SubscriptionID>,
        nFunctionConsumerInformation: NetworkFunctionInformation,
        triggers: OPTIONAL<Trigger[]>,
        listOfMultipleUnitUsage: OPTIONAL<MultipleUnitUsage[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        causeForRecClosing: CauseForRecClosing,
        diagnostics?: OPTIONAL<Diagnostics>,
        localRecordSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        pDUSessionChargingInformation?: OPTIONAL<PDUSessionChargingInformation>,
        roamingQBCInformation?: OPTIONAL<RoamingQBCInformation>,
        sMSChargingInformation?: OPTIONAL<SMSChargingInformation>,
        chargingSessionIdentifier?: OPTIONAL<OCTET_STRING>,
        serviceSpecificationInformation?: OPTIONAL<OCTET_STRING>
    ) {
        this.recordType = recordType;
        this.recordingNetworkFunctionID = recordingNetworkFunctionID;
        this.subscriberIdentifier = subscriberIdentifier;
        this.nFunctionConsumerInformation = nFunctionConsumerInformation;
        this.triggers = triggers;
        this.listOfMultipleUnitUsage = listOfMultipleUnitUsage;
        this.recordOpeningTime = recordOpeningTime;
        this.duration = duration;
        this.recordSequenceNumber = recordSequenceNumber;
        this.causeForRecClosing = causeForRecClosing;
        this.diagnostics = diagnostics;
        this.localRecordSequenceNumber = localRecordSequenceNumber;
        this.recordExtensions = recordExtensions;
        this.pDUSessionChargingInformation = pDUSessionChargingInformation;
        this.roamingQBCInformation = roamingQBCInformation;
        this.sMSChargingInformation = sMSChargingInformation;
        this.chargingSessionIdentifier = chargingSessionIdentifier;
        this.serviceSpecificationInformation = serviceSpecificationInformation;
    
        if ((this.recordingNetworkFunctionID.length < 1 || this.recordingNetworkFunctionID.length > 36)) {
            throw new ASN1SizeError("ChargingRecord.recordingNetworkFunctionID violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("ChargingRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.localRecordSequenceNumber !== undefined && (this.localRecordSequenceNumber < 0 || this.localRecordSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ChargingRecord.localRecordSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a ChargingRecord
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingRecord`.
     * @returns {ChargingRecord}
     */
    public static _from_object (_o: { [_K in keyof (ChargingRecord)]: (ChargingRecord)[_K] }): ChargingRecord {
        return new ChargingRecord(_o.recordType, _o.recordingNetworkFunctionID, _o.subscriberIdentifier, _o.nFunctionConsumerInformation, _o.triggers, _o.listOfMultipleUnitUsage, _o.recordOpeningTime, _o.duration, _o.recordSequenceNumber, _o.causeForRecClosing, _o.diagnostics, _o.localRecordSequenceNumber, _o.recordExtensions, _o.pDUSessionChargingInformation, _o.roamingQBCInformation, _o.sMSChargingInformation, _o.chargingSessionIdentifier, _o.serviceSpecificationInformation);
    }


}

/**
 * @summary The Leading Root Component Types of ChargingRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("recordingNetworkFunctionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriberIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nFunctionConsumerInformation", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("triggers", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("listOfMultipleUnitUsage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("localRecordSequenceNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("pDUSessionChargingInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("roamingQBCInformation", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("sMSChargingInformation", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("chargingSessionIdentifier", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceSpecificationInformation", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of ChargingRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingRecord: $.ASN1Decoder<ChargingRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingRecord (el: _Element): ChargingRecord {
    if (!_cached_decoder_for_ChargingRecord) { _cached_decoder_for_ChargingRecord = function (el: _Element): ChargingRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let recordingNetworkFunctionID!: IA5String;
    let subscriberIdentifier: OPTIONAL<SubscriptionID>;
    let nFunctionConsumerInformation!: NetworkFunctionInformation;
    let triggers: OPTIONAL<Trigger[]>;
    let listOfMultipleUnitUsage: OPTIONAL<MultipleUnitUsage[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let localRecordSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let pDUSessionChargingInformation: OPTIONAL<PDUSessionChargingInformation>;
    let roamingQBCInformation: OPTIONAL<RoamingQBCInformation>;
    let sMSChargingInformation: OPTIONAL<SMSChargingInformation>;
    let chargingSessionIdentifier: OPTIONAL<OCTET_STRING>;
    let serviceSpecificationInformation: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "recordingNetworkFunctionID": (_el: _Element): void => { recordingNetworkFunctionID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "subscriberIdentifier": (_el: _Element): void => { subscriberIdentifier = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "nFunctionConsumerInformation": (_el: _Element): void => { nFunctionConsumerInformation = $._decode_implicit<NetworkFunctionInformation>(() => _decode_NetworkFunctionInformation)(_el); },
        "triggers": (_el: _Element): void => { triggers = $._decode_implicit<Trigger[]>(() => $._decodeSequenceOf<Trigger>(() => _decode_Trigger))(_el); },
        "listOfMultipleUnitUsage": (_el: _Element): void => { listOfMultipleUnitUsage = $._decode_implicit<MultipleUnitUsage[]>(() => $._decodeSequenceOf<MultipleUnitUsage>(() => _decode_MultipleUnitUsage))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "localRecordSequenceNumber": (_el: _Element): void => { localRecordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "pDUSessionChargingInformation": (_el: _Element): void => { pDUSessionChargingInformation = $._decode_implicit<PDUSessionChargingInformation>(() => _decode_PDUSessionChargingInformation)(_el); },
        "roamingQBCInformation": (_el: _Element): void => { roamingQBCInformation = $._decode_implicit<RoamingQBCInformation>(() => _decode_RoamingQBCInformation)(_el); },
        "sMSChargingInformation": (_el: _Element): void => { sMSChargingInformation = $._decode_implicit<SMSChargingInformation>(() => _decode_SMSChargingInformation)(_el); },
        "chargingSessionIdentifier": (_el: _Element): void => { chargingSessionIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceSpecificationInformation": (_el: _Element): void => { serviceSpecificationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingRecord,
        _extension_additions_list_spec_for_ChargingRecord,
        _root_component_type_list_2_spec_for_ChargingRecord,
        undefined,
    );
    return new ChargingRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        recordingNetworkFunctionID,
        subscriberIdentifier,
        nFunctionConsumerInformation,
        triggers,
        listOfMultipleUnitUsage,
        recordOpeningTime,
        duration,
        recordSequenceNumber,
        causeForRecClosing,
        diagnostics,
        localRecordSequenceNumber,
        recordExtensions,
        pDUSessionChargingInformation,
        roamingQBCInformation,
        sMSChargingInformation,
        chargingSessionIdentifier,
        serviceSpecificationInformation
    );
}; }
    return _cached_decoder_for_ChargingRecord(el);
}

let _cached_encoder_for_ChargingRecord: $.ASN1Encoder<ChargingRecord> | null = null;

/**
 * @summary Encodes a(n) ChargingRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingRecord, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingRecord (value: ChargingRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingRecord) { _cached_encoder_for_ChargingRecord = function (value: ChargingRecord, _elGetter: $.ASN1Encoder<ChargingRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER)(value.recordingNetworkFunctionID, $.BER));
    if (value.subscriberIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SubscriptionID, $.BER)(value.subscriberIdentifier, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NetworkFunctionInformation, $.BER)(value.nFunctionConsumerInformation, $.BER));
    if (value.triggers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Trigger>(() => _encode_Trigger, $.BER), $.BER)(value.triggers, $.BER));
    }
    if (value.listOfMultipleUnitUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<MultipleUnitUsage>(() => _encode_MultipleUnitUsage, $.BER), $.BER)(value.listOfMultipleUnitUsage, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.localRecordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.localRecordSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.pDUSessionChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_PDUSessionChargingInformation, $.BER)(value.pDUSessionChargingInformation, $.BER));
    }
    if (value.roamingQBCInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_RoamingQBCInformation, $.BER)(value.roamingQBCInformation, $.BER));
    }
    if (value.sMSChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_SMSChargingInformation, $.BER)(value.sMSChargingInformation, $.BER));
    }
    if (value.chargingSessionIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.chargingSessionIdentifier, $.BER));
    }
    if (value.serviceSpecificationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeOctetString, $.BER)(value.serviceSpecificationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ChargingRecord(value, elGetter);
}


/* eslint-enable */
