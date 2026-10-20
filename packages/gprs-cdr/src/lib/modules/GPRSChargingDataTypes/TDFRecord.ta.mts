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
import { CauseForRecClosing, _decode_CauseForRecClosing, _encode_CauseForRecClosing } from "../GPRSChargingDataTypes/CauseForRecClosing.ta.mjs";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../GPRSChargingDataTypes/Diagnostics.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../GPRSChargingDataTypes/ManagementExtension.ta.mjs";
import { APNSelectionMode, _decode_APNSelectionMode, _encode_APNSelectionMode, _enum_for_APNSelectionMode } from "../GPRSChargingDataTypes/APNSelectionMode.ta.mjs";
import { ChChSelectionMode, _decode_ChChSelectionMode, _encode_ChChSelectionMode, _enum_for_ChChSelectionMode } from "../GPRSChargingDataTypes/ChChSelectionMode.ta.mjs";
import { PSFurnishChargingInformation, _decode_PSFurnishChargingInformation, _encode_PSFurnishChargingInformation } from "../GPRSChargingDataTypes/PSFurnishChargingInformation.ta.mjs";
import { ChangeOfServiceCondition, _decode_ChangeOfServiceCondition, _encode_ChangeOfServiceCondition } from "../GPRSChargingDataTypes/ChangeOfServiceCondition.ta.mjs";
import { ServingNodeType, _decode_ServingNodeType, _encode_ServingNodeType } from "../GPRSChargingDataTypes/ServingNodeType.ta.mjs";
import { SubscriptionID, _decode_SubscriptionID, _encode_SubscriptionID } from "../GPRSChargingDataTypes/SubscriptionID.ta.mjs";
import { UserCSGInformation, _decode_UserCSGInformation, _encode_UserCSGInformation } from "../GPRSChargingDataTypes/UserCSGInformation.ta.mjs";
import { TWANUserLocationInfo, _decode_TWANUserLocationInfo, _encode_TWANUserLocationInfo } from "../GPRSChargingDataTypes/TWANUserLocationInfo.ta.mjs";
import { AccessLineIdentifier, _decode_AccessLineIdentifier, _encode_AccessLineIdentifier } from "../GPRSChargingDataTypes/AccessLineIdentifier.ta.mjs";
import { FixedUserLocationInformation, _decode_FixedUserLocationInformation, _encode_FixedUserLocationInformation } from "../GPRSChargingDataTypes/FixedUserLocationInformation.ta.mjs";


/**
 * @summary TDFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDFRecord ::= SET {
 *    recordType                         [0] IMPLICIT RecordType,
 *    servedIMSI                         [3] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    p-GWAddress                        [4] GSNAddress,
 *    servingNodeAddress                 [6] IMPLICIT SEQUENCE  OF
 *       GSNAddress,
 *    accessPointNameNI                  [7] IMPLICIT IA5String  ( SIZE( 1 .. 63 ) ) OPTIONAL,
 *    pdpPDNType                         [8] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    servedPDPPDNAddress                [9] PDPAddress OPTIONAL,
 *    dynamicAddressFlag                 [11] IMPLICIT BOOLEAN OPTIONAL,
 *    recordOpeningTime                  [13] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    duration                           [14] IMPLICIT INTEGER,
 *    causeForRecClosing                 [15] IMPLICIT CauseForRecClosing,
 *    diagnostics                        [16] Diagnostics OPTIONAL,
 *    recordSequenceNumber               [17] IMPLICIT INTEGER OPTIONAL,
 *    nodeID                             [18] IMPLICIT IA5String  ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    recordExtensions                   [19] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    localSequenceNumber                [20] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    apnSelectionMode                   [21] IMPLICIT APNSelectionMode OPTIONAL,
 *    servedMSISDN                       [22] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    chargingCharacteristics            [23] IMPLICIT OCTET STRING ( SIZE( 2 ) ),
 *    chChSelectionMode                  [24] IMPLICIT ChChSelectionMode OPTIONAL,
 *    servingNodePLMNIdentifier          [27] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    pSFurnishChargingInformation       [28] IMPLICIT PSFurnishChargingInformation OPTIONAL,
 *    servedIMEI                         [29] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    rATType                            [30] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    mSTimeZone                         [31] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    userLocationInformation            [32] IMPLICIT OCTET STRING OPTIONAL,
 *    listOfServiceData                  [34] IMPLICIT SEQUENCE  OF
 *       ChangeOfServiceCondition OPTIONAL,
 *    servingNodeType                    [35] IMPLICIT SEQUENCE  OF
 *       ServingNodeType,
 *    servedMNNAI                        [36] IMPLICIT SubscriptionID OPTIONAL,
 *    p-GWPLMNIdentifier                 [37] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    startTime                          [38] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    stopTime                           [39] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    served3gpp2MEID                    [40] IMPLICIT OCTET STRING OPTIONAL,
 *    pDNConnectionChargingID            [41] IMPLICIT INTEGER ( 0 .. 4294967295 ),
 *    userCSGInformation                 [43] IMPLICIT UserCSGInformation OPTIONAL,
 *    threeGPP2UserLocationInformation   [44] IMPLICIT OCTET STRING OPTIONAL,
 *    servedPDPPDNAddressExt             [45] PDPAddress OPTIONAL,
 *    dynamicAddressFlagExt              [47] IMPLICIT BOOLEAN OPTIONAL,
 *    servingNodeiPv6Address             [49] IMPLICIT SEQUENCE  OF
 *       GSNAddress OPTIONAL,
 *    p-GWiPv6AddressUsed                [50] GSNAddress OPTIONAL,
 *    tWANUserLocationInformation        [51] IMPLICIT TWANUserLocationInfo OPTIONAL,
 *    retransmission                     [52] IMPLICIT NULL OPTIONAL,
 *    tDFAddress                         [53] GSNAddress,
 *    tDFiPv6AddressUsed                 [54] GSNAddress OPTIONAL,
 *    tDFPLMNIdentifier                  [55] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL,
 *    servedFixedSubsID                  [56] IMPLICIT OCTET STRING OPTIONAL,
 *    accessLineIdentifier               [57] IMPLICIT AccessLineIdentifier OPTIONAL,
 *    fixedUserLocationInformation       [59] IMPLICIT FixedUserLocationInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class TDFRecord {
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
     * @summary `p_GWAddress`.
     * @public
     * @readonly
     */
    readonly p_GWAddress: GSNAddress;
    /**
     * @summary `servingNodeAddress`.
     * @public
     * @readonly
     */
    readonly servingNodeAddress: GSNAddress[];
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
     * @summary `servingNodePLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
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
     * @summary `rATType`.
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `mSTimeZone`.
     * @public
     * @readonly
     */
    readonly mSTimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `userLocationInformation`.
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfServiceData`.
     * @public
     * @readonly
     */
    readonly listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    /**
     * @summary `servingNodeType`.
     * @public
     * @readonly
     */
    readonly servingNodeType: ServingNodeType[];
    /**
     * @summary `servedMNNAI`.
     * @public
     * @readonly
     */
    readonly servedMNNAI: OPTIONAL<SubscriptionID>;
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
     * @summary `served3gpp2MEID`.
     * @public
     * @readonly
     */
    readonly served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `pDNConnectionChargingID`.
     * @public
     * @readonly
     */
    readonly pDNConnectionChargingID: INTEGER;
    /**
     * @summary `userCSGInformation`.
     * @public
     * @readonly
     */
    readonly userCSGInformation: OPTIONAL<UserCSGInformation>;
    /**
     * @summary `threeGPP2UserLocationInformation`.
     * @public
     * @readonly
     */
    readonly threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
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
     * @summary `servingNodeiPv6Address`.
     * @public
     * @readonly
     */
    readonly servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    /**
     * @summary `p_GWiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `tWANUserLocationInformation`.
     * @public
     * @readonly
     */
    readonly tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    /**
     * @summary `retransmission`.
     * @public
     * @readonly
     */
    readonly retransmission: OPTIONAL<NULL>;
    /**
     * @summary `tDFAddress`.
     * @public
     * @readonly
     */
    readonly tDFAddress: GSNAddress;
    /**
     * @summary `tDFiPv6AddressUsed`.
     * @public
     * @readonly
     */
    readonly tDFiPv6AddressUsed: OPTIONAL<GSNAddress>;
    /**
     * @summary `tDFPLMNIdentifier`.
     * @public
     * @readonly
     */
    readonly tDFPLMNIdentifier: OPTIONAL<OCTET_STRING>;
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
        p_GWAddress: GSNAddress,
        servingNodeAddress: GSNAddress[],
        accessPointNameNI: OPTIONAL<IA5String>,
        pdpPDNType: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddress: OPTIONAL<PDPAddress>,
        dynamicAddressFlag: OPTIONAL<BOOLEAN>,
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
        servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>,
        pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        rATType: OPTIONAL<INTEGER>,
        mSTimeZone: OPTIONAL<OCTET_STRING>,
        userLocationInformation: OPTIONAL<OCTET_STRING>,
        listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>,
        servingNodeType: ServingNodeType[],
        servedMNNAI: OPTIONAL<SubscriptionID>,
        p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        startTime: OPTIONAL<OCTET_STRING>,
        stopTime: OPTIONAL<OCTET_STRING>,
        served3gpp2MEID: OPTIONAL<OCTET_STRING>,
        pDNConnectionChargingID: INTEGER,
        userCSGInformation: OPTIONAL<UserCSGInformation>,
        threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>,
        servedPDPPDNAddressExt: OPTIONAL<PDPAddress>,
        dynamicAddressFlagExt: OPTIONAL<BOOLEAN>,
        servingNodeiPv6Address: OPTIONAL<GSNAddress[]>,
        p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>,
        tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>,
        retransmission: OPTIONAL<NULL>,
        tDFAddress: GSNAddress,
        tDFiPv6AddressUsed: OPTIONAL<GSNAddress>,
        tDFPLMNIdentifier: OPTIONAL<OCTET_STRING>,
        servedFixedSubsID: OPTIONAL<OCTET_STRING>,
        accessLineIdentifier: OPTIONAL<AccessLineIdentifier>,
        fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.p_GWAddress = p_GWAddress;
        this.servingNodeAddress = servingNodeAddress;
        this.accessPointNameNI = accessPointNameNI;
        this.pdpPDNType = pdpPDNType;
        this.servedPDPPDNAddress = servedPDPPDNAddress;
        this.dynamicAddressFlag = dynamicAddressFlag;
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
        this.servingNodePLMNIdentifier = servingNodePLMNIdentifier;
        this.pSFurnishChargingInformation = pSFurnishChargingInformation;
        this.servedIMEI = servedIMEI;
        this.rATType = rATType;
        this.mSTimeZone = mSTimeZone;
        this.userLocationInformation = userLocationInformation;
        this.listOfServiceData = listOfServiceData;
        this.servingNodeType = servingNodeType;
        this.servedMNNAI = servedMNNAI;
        this.p_GWPLMNIdentifier = p_GWPLMNIdentifier;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.served3gpp2MEID = served3gpp2MEID;
        this.pDNConnectionChargingID = pDNConnectionChargingID;
        this.userCSGInformation = userCSGInformation;
        this.threeGPP2UserLocationInformation = threeGPP2UserLocationInformation;
        this.servedPDPPDNAddressExt = servedPDPPDNAddressExt;
        this.dynamicAddressFlagExt = dynamicAddressFlagExt;
        this.servingNodeiPv6Address = servingNodeiPv6Address;
        this.p_GWiPv6AddressUsed = p_GWiPv6AddressUsed;
        this.tWANUserLocationInformation = tWANUserLocationInformation;
        this.retransmission = retransmission;
        this.tDFAddress = tDFAddress;
        this.tDFiPv6AddressUsed = tDFiPv6AddressUsed;
        this.tDFPLMNIdentifier = tDFPLMNIdentifier;
        this.servedFixedSubsID = servedFixedSubsID;
        this.accessLineIdentifier = accessLineIdentifier;
        this.fixedUserLocationInformation = fixedUserLocationInformation;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("TDFRecord.servedIMSI violates SIZE constraint");
        }
        if (this.accessPointNameNI !== undefined && (this.accessPointNameNI.length < 1 || this.accessPointNameNI.length > 63)) {
            throw new ASN1SizeError("TDFRecord.accessPointNameNI violates SIZE constraint");
        }
        if (this.pdpPDNType !== undefined && (this.pdpPDNType.length !== 2)) {
            throw new ASN1SizeError("TDFRecord.pdpPDNType violates SIZE constraint");
        }
        if ((this.recordOpeningTime.length !== 9)) {
            throw new ASN1SizeError("TDFRecord.recordOpeningTime violates SIZE constraint");
        }
        if (this.nodeID !== undefined && (this.nodeID.length < 1 || this.nodeID.length > 20)) {
            throw new ASN1SizeError("TDFRecord.nodeID violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && ((typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) < 0 || (typeof this.localSequenceNumber === "bigint" ? Number(this.localSequenceNumber) : this.localSequenceNumber) > 4294967295)) {
            throw new ASN1OverflowError("TDFRecord.localSequenceNumber violates INTEGER range");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("TDFRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.chargingCharacteristics.length !== 2)) {
            throw new ASN1SizeError("TDFRecord.chargingCharacteristics violates SIZE constraint");
        }
        if (this.servingNodePLMNIdentifier !== undefined && (this.servingNodePLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TDFRecord.servingNodePLMNIdentifier violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("TDFRecord.servedIMEI violates SIZE constraint");
        }
        if (this.rATType !== undefined && ((typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) < 0 || (typeof this.rATType === "bigint" ? Number(this.rATType) : this.rATType) > 255)) {
            throw new ASN1OverflowError("TDFRecord.rATType violates INTEGER range");
        }
        if (this.mSTimeZone !== undefined && (this.mSTimeZone.length !== 2)) {
            throw new ASN1SizeError("TDFRecord.mSTimeZone violates SIZE constraint");
        }
        if (this.p_GWPLMNIdentifier !== undefined && (this.p_GWPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TDFRecord.p_GWPLMNIdentifier violates SIZE constraint");
        }
        if (this.startTime !== undefined && (this.startTime.length !== 9)) {
            throw new ASN1SizeError("TDFRecord.startTime violates SIZE constraint");
        }
        if (this.stopTime !== undefined && (this.stopTime.length !== 9)) {
            throw new ASN1SizeError("TDFRecord.stopTime violates SIZE constraint");
        }
        if (((typeof this.pDNConnectionChargingID === "bigint" ? Number(this.pDNConnectionChargingID) : this.pDNConnectionChargingID) < 0 || (typeof this.pDNConnectionChargingID === "bigint" ? Number(this.pDNConnectionChargingID) : this.pDNConnectionChargingID) > 4294967295)) {
            throw new ASN1OverflowError("TDFRecord.pDNConnectionChargingID violates INTEGER range");
        }
        if (this.tDFPLMNIdentifier !== undefined && (this.tDFPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("TDFRecord.tDFPLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a TDFRecord
     * @description
     * 
     * This takes an `object` and converts it to a `TDFRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TDFRecord`.
     * @returns {TDFRecord}
     */
    public static _from_object (_o: { [_K in keyof (TDFRecord)]: (TDFRecord)[_K] }): TDFRecord {
        return new TDFRecord(_o.recordType, _o.servedIMSI, _o.p_GWAddress, _o.servingNodeAddress, _o.accessPointNameNI, _o.pdpPDNType, _o.servedPDPPDNAddress, _o.dynamicAddressFlag, _o.recordOpeningTime, _o.duration, _o.causeForRecClosing, _o.diagnostics, _o.recordSequenceNumber, _o.nodeID, _o.recordExtensions, _o.localSequenceNumber, _o.apnSelectionMode, _o.servedMSISDN, _o.chargingCharacteristics, _o.chChSelectionMode, _o.servingNodePLMNIdentifier, _o.pSFurnishChargingInformation, _o.servedIMEI, _o.rATType, _o.mSTimeZone, _o.userLocationInformation, _o.listOfServiceData, _o.servingNodeType, _o.servedMNNAI, _o.p_GWPLMNIdentifier, _o.startTime, _o.stopTime, _o.served3gpp2MEID, _o.pDNConnectionChargingID, _o.userCSGInformation, _o.threeGPP2UserLocationInformation, _o.servedPDPPDNAddressExt, _o.dynamicAddressFlagExt, _o.servingNodeiPv6Address, _o.p_GWiPv6AddressUsed, _o.tWANUserLocationInformation, _o.retransmission, _o.tDFAddress, _o.tDFiPv6AddressUsed, _o.tDFPLMNIdentifier, _o.servedFixedSubsID, _o.accessLineIdentifier, _o.fixedUserLocationInformation);
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
 * @summary The Leading Root Component Types of TDFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TDFRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("p-GWAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("servingNodeAddress", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessPointNameNI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pdpPDNType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("servedPDPPDNAddress", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("dynamicAddressFlag", true, $.hasTag(_TagClass.context, 11)),
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
    new $.ComponentSpec("servingNodePLMNIdentifier", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("pSFurnishChargingInformation", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("mSTimeZone", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("listOfServiceData", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("servingNodeType", false, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("servedMNNAI", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("p-GWPLMNIdentifier", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("stopTime", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("served3gpp2MEID", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("pDNConnectionChargingID", false, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("userCSGInformation", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("threeGPP2UserLocationInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("servedPDPPDNAddressExt", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("dynamicAddressFlagExt", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("servingNodeiPv6Address", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("p-GWiPv6AddressUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("tWANUserLocationInformation", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("retransmission", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("tDFAddress", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("tDFiPv6AddressUsed", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("tDFPLMNIdentifier", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("servedFixedSubsID", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("accessLineIdentifier", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("fixedUserLocationInformation", true, $.hasTag(_TagClass.context, 59))
];

/**
 * @summary The Trailing Root Component Types of TDFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TDFRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TDFRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TDFRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TDFRecord: $.ASN1Decoder<TDFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDFRecord (el: _Element): TDFRecord {
    if (!_cached_decoder_for_TDFRecord) { _cached_decoder_for_TDFRecord = function (el: _Element): TDFRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let p_GWAddress!: GSNAddress;
    let servingNodeAddress!: GSNAddress[];
    let accessPointNameNI: OPTIONAL<IA5String>;
    let pdpPDNType: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddress: OPTIONAL<PDPAddress>;
    let dynamicAddressFlag: OPTIONAL<BOOLEAN>;
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
    let servingNodePLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let pSFurnishChargingInformation: OPTIONAL<PSFurnishChargingInformation>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let rATType: OPTIONAL<INTEGER>;
    let mSTimeZone: OPTIONAL<OCTET_STRING>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let listOfServiceData: OPTIONAL<ChangeOfServiceCondition[]>;
    let servingNodeType!: ServingNodeType[];
    let servedMNNAI: OPTIONAL<SubscriptionID>;
    let p_GWPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let startTime: OPTIONAL<OCTET_STRING>;
    let stopTime: OPTIONAL<OCTET_STRING>;
    let served3gpp2MEID: OPTIONAL<OCTET_STRING>;
    let pDNConnectionChargingID!: INTEGER;
    let userCSGInformation: OPTIONAL<UserCSGInformation>;
    let threeGPP2UserLocationInformation: OPTIONAL<OCTET_STRING>;
    let servedPDPPDNAddressExt: OPTIONAL<PDPAddress>;
    let dynamicAddressFlagExt: OPTIONAL<BOOLEAN>;
    let servingNodeiPv6Address: OPTIONAL<GSNAddress[]>;
    let p_GWiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let tWANUserLocationInformation: OPTIONAL<TWANUserLocationInfo>;
    let retransmission: OPTIONAL<NULL>;
    let tDFAddress!: GSNAddress;
    let tDFiPv6AddressUsed: OPTIONAL<GSNAddress>;
    let tDFPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    let servedFixedSubsID: OPTIONAL<OCTET_STRING>;
    let accessLineIdentifier: OPTIONAL<AccessLineIdentifier>;
    let fixedUserLocationInformation: OPTIONAL<FixedUserLocationInformation>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "p-GWAddress": (_el: _Element): void => { p_GWAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "servingNodeAddress": (_el: _Element): void => { servingNodeAddress = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "accessPointNameNI": (_el: _Element): void => { accessPointNameNI = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "pdpPDNType": (_el: _Element): void => { pdpPDNType = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddress": (_el: _Element): void => { servedPDPPDNAddress = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlag": (_el: _Element): void => { dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
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
        "servingNodePLMNIdentifier": (_el: _Element): void => { servingNodePLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pSFurnishChargingInformation": (_el: _Element): void => { pSFurnishChargingInformation = $._decode_implicit<PSFurnishChargingInformation>(() => _decode_PSFurnishChargingInformation)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mSTimeZone": (_el: _Element): void => { mSTimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfServiceData": (_el: _Element): void => { listOfServiceData = $._decode_implicit<ChangeOfServiceCondition[]>(() => $._decodeSequenceOf<ChangeOfServiceCondition>(() => _decode_ChangeOfServiceCondition))(_el); },
        "servingNodeType": (_el: _Element): void => { servingNodeType = $._decode_implicit<ServingNodeType[]>(() => $._decodeSequenceOf<ServingNodeType>(() => _decode_ServingNodeType))(_el); },
        "servedMNNAI": (_el: _Element): void => { servedMNNAI = $._decode_implicit<SubscriptionID>(() => _decode_SubscriptionID)(_el); },
        "p-GWPLMNIdentifier": (_el: _Element): void => { p_GWPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "stopTime": (_el: _Element): void => { stopTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "served3gpp2MEID": (_el: _Element): void => { served3gpp2MEID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pDNConnectionChargingID": (_el: _Element): void => { pDNConnectionChargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "userCSGInformation": (_el: _Element): void => { userCSGInformation = $._decode_implicit<UserCSGInformation>(() => _decode_UserCSGInformation)(_el); },
        "threeGPP2UserLocationInformation": (_el: _Element): void => { threeGPP2UserLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedPDPPDNAddressExt": (_el: _Element): void => { servedPDPPDNAddressExt = $._decode_explicit<PDPAddress>(() => _decode_PDPAddress)(_el); },
        "dynamicAddressFlagExt": (_el: _Element): void => { dynamicAddressFlagExt = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "servingNodeiPv6Address": (_el: _Element): void => { servingNodeiPv6Address = $._decode_implicit<GSNAddress[]>(() => $._decodeSequenceOf<GSNAddress>(() => _decode_GSNAddress))(_el); },
        "p-GWiPv6AddressUsed": (_el: _Element): void => { p_GWiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tWANUserLocationInformation": (_el: _Element): void => { tWANUserLocationInformation = $._decode_implicit<TWANUserLocationInfo>(() => _decode_TWANUserLocationInfo)(_el); },
        "retransmission": (_el: _Element): void => { retransmission = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "tDFAddress": (_el: _Element): void => { tDFAddress = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tDFiPv6AddressUsed": (_el: _Element): void => { tDFiPv6AddressUsed = $._decode_explicit<GSNAddress>(() => _decode_GSNAddress)(_el); },
        "tDFPLMNIdentifier": (_el: _Element): void => { tDFPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedFixedSubsID": (_el: _Element): void => { servedFixedSubsID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "accessLineIdentifier": (_el: _Element): void => { accessLineIdentifier = $._decode_implicit<AccessLineIdentifier>(() => _decode_AccessLineIdentifier)(_el); },
        "fixedUserLocationInformation": (_el: _Element): void => { fixedUserLocationInformation = $._decode_implicit<FixedUserLocationInformation>(() => _decode_FixedUserLocationInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TDFRecord,
        _extension_additions_list_spec_for_TDFRecord,
        _root_component_type_list_2_spec_for_TDFRecord,
        undefined,
    );
    return new TDFRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        p_GWAddress,
        servingNodeAddress,
        accessPointNameNI,
        pdpPDNType,
        servedPDPPDNAddress,
        dynamicAddressFlag,
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
        servingNodePLMNIdentifier,
        pSFurnishChargingInformation,
        servedIMEI,
        rATType,
        mSTimeZone,
        userLocationInformation,
        listOfServiceData,
        servingNodeType,
        servedMNNAI,
        p_GWPLMNIdentifier,
        startTime,
        stopTime,
        served3gpp2MEID,
        pDNConnectionChargingID,
        userCSGInformation,
        threeGPP2UserLocationInformation,
        servedPDPPDNAddressExt,
        dynamicAddressFlagExt,
        servingNodeiPv6Address,
        p_GWiPv6AddressUsed,
        tWANUserLocationInformation,
        retransmission,
        tDFAddress,
        tDFiPv6AddressUsed,
        tDFPLMNIdentifier,
        servedFixedSubsID,
        accessLineIdentifier,
        fixedUserLocationInformation
    );
}; }
    return _cached_decoder_for_TDFRecord(el);
}

let _cached_encoder_for_TDFRecord: $.ASN1Encoder<TDFRecord> | null = null;

/**
 * @summary Encodes a(n) TDFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_TDFRecord (value: TDFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDFRecord) { _cached_encoder_for_TDFRecord = function (value: TDFRecord, _elGetter: $.ASN1Encoder<TDFRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_GSNAddress, $.BER)(value.p_GWAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeAddress, $.BER));
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
    if (value.servingNodePLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.servingNodePLMNIdentifier, $.BER));
    }
    if (value.pSFurnishChargingInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_PSFurnishChargingInformation, $.BER)(value.pSFurnishChargingInformation, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.mSTimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 31, () => $._encodeOctetString, $.BER)(value.mSTimeZone, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.listOfServiceData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => $._encodeSequenceOf<ChangeOfServiceCondition>(() => _encode_ChangeOfServiceCondition, $.BER), $.BER)(value.listOfServiceData, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSequenceOf<ServingNodeType>(() => _encode_ServingNodeType, $.BER), $.BER)(value.servingNodeType, $.BER));
    if (value.servedMNNAI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => _encode_SubscriptionID, $.BER)(value.servedMNNAI, $.BER));
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
    if (value.served3gpp2MEID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => $._encodeOctetString, $.BER)(value.served3gpp2MEID, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 41, () => $._encodeInteger, $.BER)(value.pDNConnectionChargingID, $.BER));
    if (value.userCSGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => _encode_UserCSGInformation, $.BER)(value.userCSGInformation, $.BER));
    }
    if (value.threeGPP2UserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeOctetString, $.BER)(value.threeGPP2UserLocationInformation, $.BER));
    }
    if (value.servedPDPPDNAddressExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 45, () => _encode_PDPAddress, $.BER)(value.servedPDPPDNAddressExt, $.BER));
    }
    if (value.dynamicAddressFlagExt !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeBoolean, $.BER)(value.dynamicAddressFlagExt, $.BER));
    }
    if (value.servingNodeiPv6Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeSequenceOf<GSNAddress>(() => _encode_GSNAddress, $.BER), $.BER)(value.servingNodeiPv6Address, $.BER));
    }
    if (value.p_GWiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 50, () => _encode_GSNAddress, $.BER)(value.p_GWiPv6AddressUsed, $.BER));
    }
    if (value.tWANUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => _encode_TWANUserLocationInfo, $.BER)(value.tWANUserLocationInformation, $.BER));
    }
    if (value.retransmission !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.retransmission, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 53, () => _encode_GSNAddress, $.BER)(value.tDFAddress, $.BER));
    if (value.tDFiPv6AddressUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 54, () => _encode_GSNAddress, $.BER)(value.tDFiPv6AddressUsed, $.BER));
    }
    if (value.tDFPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeOctetString, $.BER)(value.tDFPLMNIdentifier, $.BER));
    }
    if (value.servedFixedSubsID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => $._encodeOctetString, $.BER)(value.servedFixedSubsID, $.BER));
    }
    if (value.accessLineIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => _encode_AccessLineIdentifier, $.BER)(value.accessLineIdentifier, $.BER));
    }
    if (value.fixedUserLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => _encode_FixedUserLocationInformation, $.BER)(value.fixedUserLocationInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_TDFRecord(value, elGetter);
}


/* eslint-enable */
