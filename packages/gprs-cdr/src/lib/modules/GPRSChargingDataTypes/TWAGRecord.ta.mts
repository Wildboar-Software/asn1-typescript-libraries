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
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { EnhancedDiagnostics, _decode_EnhancedDiagnostics, _encode_EnhancedDiagnostics } from "../GPRSChargingDataTypes/EnhancedDiagnostics.ta.mjs";
import { TWANUserLocationInfo, _decode_TWANUserLocationInfo, _encode_TWANUserLocationInfo } from "../GPRSChargingDataTypes/TWANUserLocationInfo.ta.mjs";


/**
 * @summary TWAGRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TWAGRecord ::= SET {
 *    recordType                    [0] IMPLICIT RecordType,
 *    servedIMSI                    [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    tWAGAddressUsed               [4] GSNAddress,
 *    chargingID                    [5] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    accessPointNameNI             [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                    [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress           [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag            [11] IMPLICIT BOOLEAN OPTIONAL,
 *    listOfTrafficVolumes          [12] IMPLICIT SEQUENCE  OF
 *       ChangeOfCharCondition OPTIONAL,
 *    recordOpeningTime             [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                      [14] IMPLICIT INTEGER,
 *    causeForRecClosing            [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                   [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber          [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                        [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions              [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber           [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode              [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                  [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics       [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode             [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    servedIMEI                    [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                       [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    sGWChange                     [34] IMPLICIT BOOLEAN OPTIONAL,
 *    p-GWAddressUsed               [36] GSNAddress OPTIONAL,
 *    p-GWPLMNIdentifier            [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                     [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                      [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    pDNConnectionChargingID       [40] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    servedPDPPDNAddressExt        [43] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt         [47] IMPLICIT BOOLEAN OPTIONAL,
 *    tWAGiPv6AddressUsed           [48] GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed           [50] GSNAddress OPTIONAL,
 *    retransmission                [51] IMPLICIT NULL OPTIONAL,
 *    enhancedDiagnostics           [52] IMPLICIT EnhancedDiagnostics OPTIONAL,
 *    tWANUserLocationInformation   [53] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    iMSIunauthenticatedFlag       [54] IMPLICIT NULL OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TWAGRecord {
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
     * @summary `tWAGAddressUsed`.
     * @public
     * @readonly
     */
    readonly tWAGAddressUsed: GSNAddress;
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
     * @summary `pdpPDNType`.
     * @public
     * @readonly
     */
    readonly pdpPDNType: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedPDPPDNAddress`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddress: OPTIONAL<PDPAddress>;
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
     * @summary `apnSelectionMode`.
     * @public
     * @readonly
     */
    readonly apnSelectionMode: OPTIONAL<APNSelectionMode>;
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
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `sGWChange`.
     * @public
     * @readonly
     */
    readonly sGWChange: OPTIONAL<BOOLEAN>;
    /**
     * @summary `p_GWAddressUsed`.
     * @public
     * @readonly
     */
    readonly p_GWAddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `p_GWPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
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
     * @summary `pDNConnectionChargingID`.
     * @public
     * @readonly
     */
    readonly pDNConnectionChargingID: OPTIONAL<INTEGER>;
    /**
     * @summary `servedPDPPDNAddressExt`.
     * @public
     * @readonly
     */
    readonly servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    /**
     * @summary `dynamicAddressFlagExt`.
     * @public
     * @readonly
     */
    readonly dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    /**
     * @summary `tWAGiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly tWAGiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `p_GWiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `enhancedDiagnostics`.
     * @public
     * @readonly
     */
    readonly enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    /**
     * @summary `tWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    /**
     * @summary `iMSIunauthenticatedFlag`.
     * @public
     * @readonly
     */
    readonly iMSIunauthenticatedFlag: OPTIONAL<NULL>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        tWAGAddressUsed: GSNAddress,
        chargingID: INTEGER,
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpPDNType: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddress: OPTIONAL<PDPAddress>,
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
        apnSelectionMode: OPTIONAL<APNSelectionMode>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        chargingCharacteristics: OCTET_STRING,
        chChSelectionMode: OPTIONAL<ChChSelectionMode>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        sGWChange: OPTIONAL<BOOLEAN>,
        p_GWAddressUsed: OPTIONAL<GSNAddress>,
        p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID: OPTIONAL<INTEGER>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        tWAGiPv6AddressUsed: OPTIONAL<GSNAddress>,
        p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>,
        retransmission: OPTIONAL<NULL>,
        enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>,
        tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>,
        iMSIunauthenticatedFlag: OPTIONAL<NULL>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.tWAGAddressUsed = tWAGAddressUsed;
        this.chargingID = chargingID;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpPDNType = pdpPDNType;
        this.servedPDPPDNAddress = servedPDPPDNAddress;
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
        this.apnSelectionMode = apnSelectionMode;
        this.servedMSISDN = servedMSISDN;
        this.chargingCharacteristics = chargingCharacteristics;
        this.chChSelectionMode = chChSelectionMode;
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.sGWChange = sGWChange;
        this.p_GWAddressUsed = p_GWAddressUsed;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.tWAGiPv6AddressUsed = tWAGiPv6AddressUsed;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.retransmission = retransmission;
        this.enhancedDiagnostics = enhancedDiagnostics;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.iMSIunauthenticatedFlag = iMSIunauthenticatedFlag;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("TWAGRecord.servedIMSI violates SIZE constraint");
        }
        if (((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("TWAGRecord.chargingID violates INTEGER range");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("TWAGRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("TWAGRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("TWAGRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("TWAGRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("TWAGRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("TWAGRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("TWAGRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("TWAGRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("TWAGRecord.rATType violates INTEGER range");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TWAGRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("TWAGRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("TWAGRecord.stopTime violates SIZE constraint");
        }
        if (this.pDNConnectionChargingID !== undefined && ((typeof this.pDNConnectionChargingID === "bigint" ? Number(this.pDNConnectionChargingID) : this.pDNConnectionChargingID) < 0 || (typeof this.pDNConnectionChargingID === "bigint" ? Number(this.pDNConnectionChargingID) : this.pDNConnectionChargingID) > 4294967295)) {
            throw new ASN1OverflowError("TWAGRecord.pDNConnectionChargingID violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a TWAGRecord
     * @description
     * 
     * This takes an `object` and converts it to a `TWAGRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TWAGRecord`.
     * @returns {TWAGRecord}
     */
    public static _from_object (_o: { [_K in keyof (TWAGRecord)]: (TWAGRecord)[_K] }): TWAGRecord {
        return new TWAGRecord(_o.recordType, _o.servedIMSI, _o.tWAGAddressUsed, _o.chargingID, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.listOfTrafficVolumes, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.servedIMEI, _o.rATType, _o.sGWChange, _o.p_GWAddressUsed, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.pDNConnectionChargingID, _o.servedPDPPDNAddressExt, _o.dynamicAddressFlagExt, _o.tWAGiPv6AddressUsed, _o.p_GWiPv6AddressUsed, _o.retransmission, _o.enhancedDiagnostics, _o.tWANUserLocationInformation, _o.iMSIunauthenticatedFlag);
    }

        /**
         * @summary The enum used as the type of the component `apnSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_apnSelectionMode = _enum_for_APNSelectionMode;        /**
         * @summary The enum used as the type of the component `chChSelectionMode`
         * @public
         * @static
         */

    public static _enum_for_chChSelectionMode = _enum_for_ChChSelectionMode;
}

/**
 * @summary The Leading Root Component Types of TWAGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TWAGRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tWAGAddressUsed", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("chargingID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pdpPDNType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedPDPPDNAddress", true, $.hasTag(_TagClass.context, 9)),
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
    new $.ComponentSpec("apnSelectionMode", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("chChSelectionMode", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("sGWChange", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("p-GWAddressUsed", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("pDNConnectionChargingID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("tWAGiPv6AddressUsed", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("enhancedDiagnostics", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("iMSIunauthenticatedFlag", true, $.hasTag(_TagClass.context, 54))
];

/**
 * @summary The Trailing Root Component Types of TWAGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TWAGRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TWAGRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TWAGRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TWAGRecord: $.ASN1Decoder<TWAGRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TWAGRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TWAGRecord (el: _Element): TWAGRecord {
    if (!_cached_decoder_for_TWAGRecord) { _cached_decoder_for_TWAGRecord = function (el: _Element): TWAGRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let tWAGAddressUsed!: GSNAddress;
    let chargingID!: INTEGER;
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpPDNType: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddress: OPTIONAL<PDPAddress>;
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
    let apnSelectionMode: OPTIONAL<APNSelectionMode>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let chargingCharacteristics!: OCTET_STRING;
    let chChSelectionMode: OPTIONAL<ChChSelectionMode>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let sGWChange: OPTIONAL<BOOLEAN>;
    let p_GWAddressUsed: OPTIONAL<GSNAddress>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID: OPTIONAL<INTEGER>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let tWAGiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let retransmission: OPTIONAL<NULL>;
    let enhancedDiagnostics: OPTIONAL<EnhancedDiagnostics>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let iMSIunauthenticatedFlag: OPTIONAL<NULL>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tWAGAddressUsed": (_el: _Element): void => { tWAGAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpPDNType": (_el: _Element): void => { pdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddress": (_el: _Element): void => { servedPDPPDNAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
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
        "apnSelectionMode": (_el: _Element): void => { apnSelectionMode = $._decode_implicit<APNSelectionMode>(() => _decode_APNSelectionMode)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "chChSelectionMode": (_el: _Element): void => { chChSelectionMode = $._decode_implicit<ChChSelectionMode>(() => _decode_ChChSelectionMode)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sGWChange": (_el: _Element): void => { sGWChange = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "p-GWAddressUsed": (_el: _Element): void => { p_GWAddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "tWAGiPv6AddressUsed": (_el: _Element): void => { tWAGiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "enhancedDiagnostics": (_el: _Element): void => { enhancedDiagnostics = $._decode_implicit<EnhancedDiagnostics>(() => _decode_EnhancedDiagnostics)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "iMSIunauthenticatedFlag": (_el: _Element): void => { iMSIunauthenticatedFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TWAGRecord,
        _extension_additions_list_spec_for_TWAGRecord,
        _root_component_type_list_2_spec_for_TWAGRecord,
        undefined,
    );
    return new TWAGRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        tWAGAddressUsed,
        chargingID,
        accessPointNameNI,
        pdpPDNType,
        servedPDPPDNAddress,
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
        apnSelectionMode,
        servedMSISDN,
        chargingCharacteristics,
        chChSelectionMode,
        servedIMEI,
        rATType,
        sGWChange,
        p_GWAddressUsed,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        pDNConnectionChargingID,
        servedPDPPDNAddressExt,
        dynamicAddressFlagExt,
        tWAGiPv6AddressUsed,
        p_GWiPv6AddressUsed,
        retransmission,
        enhancedDiagnostics,
        tWANUserLocationInformation,
        iMSIunauthenticatedFlag
    );
}; }
    return _cached_decoder_for_TWAGRecord(el);
}

let _cached_encoder_for_TWAGRecord: $.ASN1Encoder<TWAGRecord> | null = null;

/**
 * @summary Encodes a(n) TWAGRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TWAGRecord, encoded as an ASN.1 Element.
 */
export
function _encode_TWAGRecord (value: TWAGRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TWAGRecord) { _cached_encoder_for_TWAGRecord = function (value: TWAGRecord, _elGetter: $.ASN1Encoder<TWAGRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.tWAGAddressUsed, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    if (value.accessPointNameNI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeIA5String, $.BER)(value.accessPointNameNI, $.BER));
    }
    if (value.pdpPDNType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.pdpPDNType, $.BER));
    }
    if (value.servedPDPPDNAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddress, $.BER));
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
    if (value.apnSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_APNSelectionMode, $.BER)(value.apnSelectionMode, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.chargingCharacteristics, $.BER));
    if (value.chChSelectionMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => _encode_ChChSelectionMode, $.BER)(value.chChSelectionMode, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.sGWChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeBoolean, $.BER)(value.sGWChange, $.BER));
    }
    if (value.p_GWAddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 36, () => _encode_GSNAddress, $.BER)(value.p_GWAddressUsed, $.BER));
    }
    if (value.p_GWPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeOctetString, $.BER)(value.p_GWPLMNIdentifier, $.BER));
    }
    if (value.startTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.startTime, $.BER));
    }
    if (value.stopTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.stopTime, $.BER));
    }
    if (value.pDNConnectionChargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 43, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.tWAGiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 48, () => _encode_GSNAddress, $.BER)(value.tWAGiPv6AddressUsed, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    if (value.enhancedDiagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => _encode_EnhancedDiagnostics, $.BER)(value.enhancedDiagnostics, $.BER));
    }
    if (value.tWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => _encode_TWANUserLocationInfo, $.BER)(value.tWANUserLocationInformation, $.BER));
    }
    if (value.iMSIunauthenticatedFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeNull, $.BER)(value.iMSIunauthenticatedFlag, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TWAGRecord(value, elGetter);
}


/* eslint-enable */
