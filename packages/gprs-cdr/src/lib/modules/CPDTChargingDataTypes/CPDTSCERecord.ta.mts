/* eslint-disable */
import {
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CPDTChargingDataTypes/RecordType.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../CPDTChargingDataTypes/ChChSelectionMode.ta.mjs";
import { ServingPLMNRateControl, _decode_ServingPLMNRateControl, _encode_ServingPLMNRateControl } from "../CPDTChargingDataTypes/ServingPLMNRateControl.ta.mjs";
import { NIDDsubmission, _decode_NIDDsubmission, _encode_NIDDsubmission } from "../CPDTChargingDataTypes/NIDDsubmission.ta.mjs";
import { CPCauseForRecClosing, _decode_CPCauseForRecClosing, _encode_CPCauseForRecClosing } from "../CPDTChargingDataTypes/CPCauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CPDTChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CPDTChargingDataTypes/ManagementExtension.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../CPDTChargingDataTypes/SubscriptionID.ta.mjs";
import { APNRateControl, _decode_APNRateControl, _encode_APNRateControl } from "../CPDTChargingDataTypes/APNRateControl.ta.mjs";


/**
 * @summary CPDTSCERecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPDTSCERecord ::= SET {
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
class CPDTSCERecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `serviceContextID`.
     * @public
     * @readonly
     */
    readonly serviceContextID: OPTIONAL<UTF8String>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordOpeningTime`.
     * @public
     * @readonly
     */
    readonly recordOpeningTime: OCTET_STRING;
    /**
     * @summary `duration`.
     * @public
     * @readonly
     */
    readonly duration: INTEGER;
    /**
     * @summary `accessPointNameNI`.
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `sCEFID`.
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `chargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly chargingCharacteristics: OCTET_STRING;
    /**
     * @summary `chChSelectionMode`.
     * @public
     * @readonly
     */
    readonly chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    /**
     * @summary `servingNodeIdentity`.
     * @public
     * @readonly
     */
    readonly servingNodeIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingPLMNRateControl`.
     * @public
     * @readonly
     */
    readonly servingPLMNRateControl: OPTIONAL<ServingPLMNRateControl>;
    /**
     * @summary `listOfNIDDsubmission`.
     * @public
     * @readonly
     */
    readonly listOfNIDDsubmission: OPTIONAL<NIDDsubmission[]>;
    /**
     * @summary `causeForRecClosing`.
     * @public
     * @readonly
     */
    readonly causeForRecClosing: CPCauseForRecClosing;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<Diagnostics>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `externalIdentifier`.
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<SubscriptionID>;
    /**
     * @summary `aPNRateControl`.
     * @public
     * @readonly
     */
    readonly aPNRateControl: OPTIONAL<APNRateControl>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIMEI`.
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
        diagnostics: OPTIONAL<Diagnostics>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        externalIdentifier: OPTIONAL<SubscriptionID>,
        aPNRateControl: OPTIONAL<APNRateControl>,
        rATType: OPTIONAL<INTEGER>,
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>
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
            throw new ASN1SizeError("CPDTSCERecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("CPDTSCERecord.servedMSISDN violates SIZE constraint");
        }
        if (((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("CPDTSCERecord.chargingID violates INTEGER range");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("CPDTSCERecord.nodeID violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("CPDTSCERecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("CPDTSCERecord.accessPointNameNI violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("CPDTSCERecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("CPDTSCERecord.localSequenceNumber violates INTEGER range");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("CPDTSCERecord.rATType violates INTEGER range");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("CPDTSCERecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("CPDTSCERecord.servedIMEI violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CPDTSCERecord
     * @description
     * 
     * This takes an `object` and converts it to a `CPDTSCERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPDTSCERecord`.
     * @returns {CPDTSCERecord}
     */
    public static _from_object (_o: { [_K in keyof (CPDTSCERecord)]: (CPDTSCERecord)[_K] }): CPDTSCERecord {
        return new CPDTSCERecord(_o.recordType, _o.retransmission, _o.servedIMSI, _o.servedMSISDN, _o.chargingID, _o.serviceContextID, _o.nodeID, _o.recordOpeningTime, _o.duration, _o.accessPointNameNI, _o.sCEFID, _o.chargingCharacteristics, _o.chChSelectionMode, _o.servingNodeIdentity, _o.servingPLMNRateControl, _o.listOfNIDDsubmission, _o.causeForRecClosing, _o.diagnostics, _o.localSequenceNumber, _o.recordSequenceNumber, _o.recordExtensions, _o.externalIdentifier, _o.aPNRateControl, _o.rATType, _o.servingNodePLMNIdentifier, _o.servedIMEI);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of CPDTSCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CPDTSCERecord: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of CPDTSCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CPDTSCERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CPDTSCERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CPDTSCERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CPDTSCERecord: $.ASN1Decoder<CPDTSCERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPDTSCERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPDTSCERecord (el: _Element): CPDTSCERecord {
    if (!_cached_decoder_for_CPDTSCERecord) { _cached_decoder_for_CPDTSCERecord = function (el: _Element): CPDTSCERecord {
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
        _root_component_type_list_1_spec_for_CPDTSCERecord,
        _extension_additions_list_spec_for_CPDTSCERecord,
        _root_component_type_list_2_spec_for_CPDTSCERecord,
        undefined,
    );
    return new CPDTSCERecord( /* SET_CONSTRUCTOR_CALL */
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
    return _cached_decoder_for_CPDTSCERecord(el);
}

let _cached_encoder_for_CPDTSCERecord: $.ASN1Encoder<CPDTSCERecord> | null = null;

/**
 * @summary Encodes a(n) CPDTSCERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPDTSCERecord, encoded as an ASN.1 Element.
 */
export
function _encode_CPDTSCERecord (value: CPDTSCERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPDTSCERecord) { _cached_encoder_for_CPDTSCERecord = function (value: CPDTSCERecord, _elGetter: $.ASN1Encoder<CPDTSCERecord>): _Element {
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
    return _cached_encoder_for_CPDTSCERecord(value, elGetter);
}


/* eslint-enable */
