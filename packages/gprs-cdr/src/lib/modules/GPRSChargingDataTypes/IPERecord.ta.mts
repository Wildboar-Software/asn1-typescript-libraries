/* eslint-disable */
import {
    BOOLEAN,
    IA5String,
    INTEGER,
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../GPRSChargingDataTypes/RecordType.ta.mjs";
import { GSNAddress, _decode_GSNAddress, _encode_GSNAddress } from "../GPRSChargingDataTypes/GSNAddress.ta.mjs";
import { PDPAddress, _decode_PDPAddress, _encode_PDPAddress } from "../GPRSChargingDataTypes/PDPAddress.ta.mjs";
import { ChangeOfCharCondition, _decode_ChangeOfCharCondition, _encode_ChangeOfCharCondition } from "../GPRSChargingDataTypes/ChangeOfCharCondition.ta.mjs";
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
import { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";
import { FixedUserLocationInformation, _decode_FixedUserLocationInformation, _encode_FixedUserLocationInformation } from "../GPRSChargingDataTypes/FixedUserLocationInformation.ta.mjs";


/**
 * @summary IPERecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPERecord ::= SET {
 *    recordType                     [0] IMPLICIT RecordType,
 *    servedIMSI                     [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    iPEdgeAddress                  [4] GSNAddress,
 *    chargingID                     [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessPointNameNI              [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    iPCANsessionType               [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedIPCANsessionAddress      [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag             [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes           [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime              [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                       [14] IMPLICIT INTEGER,
 *    causeForRecClosing             [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                    [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber           [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                         [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions               [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber            [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedMSISDN                   [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics        [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode              [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    pSFurnishChargingInformation   [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                     [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    listOfServiceData              [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servedMNNAI                    [36] IMPLICIT SubscriptionID OPTIONAL,
 *    iPEdgeOperatorIdentifier       [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                      [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                       [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    servedIPCANsessionAddressExt   [45] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt          [47] IMPLICIT BOOLEAN OPTIONAL,
 *    iPEdgeiPv6AddressUsed          [50] GSNAddress OPTIONAL,
 *    retransmission                 [52] IMPLICIT NULL OPTIONAL,
 *    servedFixedSubsID              [55] IMPLICIT OCTET STRING OPTIONAL,
 *    accessLineIdentifier           [56] IMPLICIT AccessLineIdentifier OPTIONAL,
 *    fixedUserLocationInformation   [57] IMPLICIT FixedUserLocationInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class IPERecord {
    /**
     * @summary `recordType`.
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @public
     * @readonly
     */
    readonly servedIMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPEdgeAddress`.
     * @public
     * @readonly
     */
    readonly iPEdgeAddress: GSNAddress;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: INTEGER;
    /**
     * @summary `accessPointNameNI`.
     * @public
     * @readonly
     */
    readonly accessPointNameNI: OPTIONAL<IA5String>;
    /**
     * @summary `iPCANsessionType`.
     * @public
     * @readonly
     */
    readonly iPCANsessionType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIPCANsessionAddress`.
     * @public
     * @readonly
     */
    readonly servedIPCANsessionAddress: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlag`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `listOfTrafficVolumes`.
     * @public
     * @readonly
     */
    readonly listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
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
     * @summary `causeForRecClosing`.
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
     * @summary `recordSequenceNumber`.
     * @public
     * @readonly
     */
    readonly recordSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `nodeID`.
     * @public
     * @readonly
     */
    readonly nodeID: OPTIONAL<IA5String>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `localSequenceNumber`.
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
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
     * @summary `pSFurnishChargingInformation`.
     * @public
     * @readonly
     */
    readonly pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    /**
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfServiceData`.
     * @public
     * @readonly
     */
    readonly listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    /**
     * @summary `servedMNNAI`.
     * @public
     * @readonly
     */
    readonly servedMNNAI: OPTIONAL<SubscriptionID>;
    /**
     * @summary `iPEdgeOperatorIdentifier`.
     * @public
     * @readonly
     */
    readonly iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `stopTime`.
     * @public
     * @readonly
     */
    readonly stopTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedIPCANsessionAddressExt`.
     * @public
     * @readonly
     */
    readonly servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlagExt`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iPEdgeiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `servedFixedSubsID`.
     * @public
     * @readonly
     */
    readonly servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `accessLineIdentifier`.
     * @public
     * @readonly
     */
    readonly accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    /**
     * @summary `fixedUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        iPEdgeAddress: GSNAddress,
        chargingID: INTEGER,
        accessPointNameNI: OPTIONAL<IA5String>,
        iPCANsessionType: OPTIONAL<OCTET_STRING>,
        servedIPCANsessionAddress: OPTIONAL<PDPAddress>,
        dynamicAddressFlag: OPTIONAL<BOOLEAN>,
        listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>,
        recordOpeningTime: OCTET_STRING,
        duration: INTEGER,
        causeForRecClosing: CauseForRecClosing,
        diagnostics: OPTIONAL<Diagnostics>,
        recordSequenceNumber: OPTIONAL<INTEGER>,
        nodeID: OPTIONAL<IA5String>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        localSequenceNumber: OPTIONAL<INTEGER>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servedMNNAI: OPTIONAL<SubscriptionID>,
        iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>,
        retransmission: OPTIONAL<NULL>,
        servedFixedSubsID: OPTIONAL<OCTET_STRING>,
        accessLineIdentifier: OPTIONAL<AccessLineIdentifier>,
        fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.iPEdgeAddress = iPEdgeAddress;
        this.chargingID = chargingID;
        this.accessPointNameNI = accessPointNameNI;
        this.iPCANsessionType = iPCANsessionType;
        this.servedIPCANsessionAddress = servedIPCANsessionAddress;
        this.dynamicAddressFlag = dynamicAddressFlag;
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
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.listOfServiceData = listOfServiceData;
        this.servedMNNAI = servedMNNAI;
        this.iPEdgeOperatorIdentifier = iPEdgeOperatorIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.servedIPCANsessionAddressExt = servedIPCANsessionAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.iPEdgeiPv6AddressUsed = iPEdgeiPv6AddressUsed;
        this.retransmission = retransmission;
        this.servedFixedSubsID = servedFixedSubsID;
        this.accessLineIdentifier = accessLineIdentifier;
        this.fixedUserLocationInformation = fixedUserLocationInformation;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("IPERecord.servedIMSI violates SIZE constraint");
        }
        if (((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("IPERecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("IPERecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.iPCANsessionType !== undefined && (this.iPCANsessionType.length !== 2)) {
            throw new ASN1SizeError("IPERecord.iPCANsessionType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("IPERecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("IPERecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("IPERecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("IPERecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("IPERecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("IPERecord.servedIMEI violates SIZE constraint");
        }
        if (this.iPEdgeOperatorIdentifier !== undefined && (this.iPEdgeOperatorIdentifier.length !== 3)) {
            throw new ASN1SizeError("IPERecord.iPEdgeOperatorIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("IPERecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("IPERecord.stopTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a IPERecord
     * @description
     * 
     * This takes an `object` and converts it to a `IPERecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPERecord`.
     * @returns {IPERecord}
     */
    public static _from_object (_o: { [_K in keyof (IPERecord)]: (IPERecord)[_K] }): IPERecord {
        return new IPERecord(_o.recordType, _o.servedIMSI, _o.iPEdgeAddress, _o.chargingID, _o.accessPointNameNI, _o.iPCANsessionType, _o.servedIPCANsessionAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.listOfServiceData, _o.servedMNNAI, _o.iPEdgeOperatorIdentifier, _o.startTime, _o.stopTime, _o.servedIPCANsessionAddressExt, _o.dynamicAddressFlagExt, _o.iPEdgeiPv6AddressUsed, _o.retransmission, _o.servedFixedSubsID, _o.accessLineIdentifier, _o.fixedUserLocationInformation);
    }

        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPERecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iPEdgeAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iPCANsessionType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedIPCANsessionAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("listOfTrafficVolumes", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("recordOpeningTime", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("causeForRecClosing", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("recordSequenceNumber", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("nodeID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("iPEdgeOperatorIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("servedIPCANsessionAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("iPEdgeiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("servedFixedSubsID", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("accessLineIdentifier", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("fixedUserLocationInformation", true, $.hasTag(_TagClass.context, 57))
];

/**
 * @summary The Trailing Root Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPERecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPERecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPERecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPERecord: $.ASN1Decoder<IPERecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPERecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPERecord (el: _Element): IPERecord {
    if (!_cached_decoder_for_IPERecord) { _cached_decoder_for_IPERecord = function (el: _Element): IPERecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let iPEdgeAddress!: GSNAddress;
    let chargingID!: INTEGER;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let iPCANsessionType: OPTIONAL<OCTET_STRING>;
    let servedIPCANsessionAddress: OPTIONAL<PDPAddress>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    let listOfTrafficVolumes: OPTIONAL<ChangeOfCharCondition[]>;
    let recordOpeningTime!: OCTET_STRING;
    let duration!: INTEGER;
    let causeForRecClosing!: CauseForRecClosing;
    let diagnostics: OPTIONAL<Diagnostics>;
    let recordSequenceNumber: OPTIONAL<INTEGER>;
    let nodeID: OPTIONAL<IA5String>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let iPEdgeOperatorIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let servedIPCANsessionAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let iPEdgeiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    let accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    let fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPEdgeAddress": (_el: _Element): void => { iPEdgeAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "iPCANsessionType": (_el: _Element): void => { iPCANsessionType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIPCANsessionAddress": (_el: _Element): void => { servedIPCANsessionAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfTrafficVolumes": (_el: _Element): void => { listOfTrafficVolumes = $._decode_implicit<ChangeOfCharCondition[]>(() => $._decodeSequenceOf<ChangeOfCharCondition>(() => _decode_ChangeOfCharCondition))(_el); },
        "recordOpeningTime": (_el: _Element): void => { recordOpeningTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "causeForRecClosing": (_el: _Element): void => { causeForRecClosing = $._decode_implicit<CauseForRecClosing>(() => _decode_CauseForRecClosing)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<Diagnostics>(() => _decode_Diagnostics)(_el); },
        "recordSequenceNumber": (_el: _Element): void => { recordSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nodeID": (_el: _Element): void => { nodeID = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "iPEdgeOperatorIdentifier": (_el: _Element): void => { iPEdgeOperatorIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIPCANsessionAddressExt": (_el: _Element): void => { servedIPCANsessionAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iPEdgeiPv6AddressUsed": (_el: _Element): void => { iPEdgeiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "servedFixedSubsID": (_el: _Element): void => { servedFixedSubsID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessLineIdentifier": (_el: _Element): void => { accessLineIdentifier = $._decode_implicit<AccessLineIdentifier>(() => _decode_AccessLineIdentifier)(_el); },
        "fixedUserLocationInformation": (_el: _Element): void => { fixedUserLocationInformation = $._decode_implicit<FixedUserLocationInformation>(() => _decode_FixedUserLocationInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_IPERecord,
        _extension_additions_list_spec_for_IPERecord,
        _root_component_type_list_2_spec_for_IPERecord,
        undefined,
    );
    return new IPERecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        iPEdgeAddress,
        chargingID,
        accessPointNameNI,
        iPCANsessionType,
        servedIPCANsessionAddress,
        dynamicAddressFlag,
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
        chargingCharacteristics,
        chChSelectionMode,
        pSFurnishChargingInformation,
        servedIMEI,
        listOfServiceData,
        servedMNNAI,
        iPEdgeOperatorIdentifier,
        startTime,
        stopTime,
        servedIPCANsessionAddressExt,
        dynamicAddressFlagExt,
        iPEdgeiPv6AddressUsed,
        retransmission,
        servedFixedSubsID,
        accessLineIdentifier,
        fixedUserLocationInformation
    );
}; }
    return _cached_decoder_for_IPERecord(el);
}

let _cached_encoder_for_IPERecord: $.ASN1Encoder<IPERecord> | null = null;

/**
 * @summary Encodes a(n) IPERecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPERecord, encoded as an ASN.1 Element.
 */
export
function _encode_IPERecord (value: IPERecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPERecord) { _cached_encoder_for_IPERecord = function (value: IPERecord, _elGetter: $.ASN1Encoder<IPERecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.iPEdgeAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.iPCANsessionType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.iPCANsessionType, $.BER));
    }
    if (value.servedIPCANsessionAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_PDPAddress, $.BER)(value.servedIPCANsessionAddress, $.BER));
    }
    if (value.dynamicAddressFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlag, $.BER));
    }
    if (value.listOfTrafficVolumes !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<ChangeOfCharCondition>(() => _encode_ChangeOfCharCondition, $.BER), $.BER)(value.listOfTrafficVolumes, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.recordOpeningTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.duration, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_CauseForRecClosing, $.BER)(value.causeForRecClosing, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 16, () => _encode_Diagnostics, $.BER)(value.diagnostics, $.BER));
    }
    if (value.recordSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeInteger, $.BER)(value.recordSequenceNumber, $.BER));
    }
    if (value.nodeID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeIA5String, $.BER)(value.nodeID, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.listOfServiceData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeSequenceOf<ChangeOfServiceCondition>(() => _encode_ChangeOfServiceCondition, $.BER), $.BER)(value.listOfServiceData, $.BER));
    }
    if (value.servedMNNAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SubscriptionID, $.BER)(value.servedMNNAI, $.BER));
    }
    if (value.iPEdgeOperatorIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.iPEdgeOperatorIdentifier, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    if (value.servedIPCANsessionAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedIPCANsessionAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.iPEdgeiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.iPEdgeiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.servedFixedSubsID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.servedFixedSubsID, $.BER));
    }
    if (value.accessLineIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_AccessLineIdentifier, $.BER)(value.accessLineIdentifier, $.BER));
    }
    if (value.fixedUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_FixedUserLocationInformation, $.BER)(value.fixedUserLocationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_IPERecord(value, elGetter);
}


/* eslint-enable */
