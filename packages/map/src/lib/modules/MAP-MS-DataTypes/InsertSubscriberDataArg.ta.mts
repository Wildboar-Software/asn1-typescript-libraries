/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { SubscriberData, _decode_SubscriberData, _encode_SubscriberData } from "../MAP-MS-DataTypes/SubscriberData.ta.mjs";
// export { SubscriberData, _decode_SubscriberData, _encode_SubscriberData } from "../MAP-MS-DataTypes/SubscriberData.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { NAEA_PreferredCI, _decode_NAEA_PreferredCI, _encode_NAEA_PreferredCI } from "../MAP-CommonDataTypes/NAEA-PreferredCI.ta.mjs";
// export { NAEA_PreferredCI, _decode_NAEA_PreferredCI, _encode_NAEA_PreferredCI } from "../MAP-CommonDataTypes/NAEA-PreferredCI.ta.mjs";
import { GPRSSubscriptionData, _decode_GPRSSubscriptionData, _encode_GPRSSubscriptionData } from "../MAP-MS-DataTypes/GPRSSubscriptionData.ta.mjs";
// export { GPRSSubscriptionData, _decode_GPRSSubscriptionData, _encode_GPRSSubscriptionData } from "../MAP-MS-DataTypes/GPRSSubscriptionData.ta.mjs";
import { NetworkAccessMode, _enum_for_NetworkAccessMode, NetworkAccessMode_packetAndCircuit /* IMPORTED_LONG_ENUMERATION_ITEM */, packetAndCircuit /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkAccessMode_onlyCircuit /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyCircuit /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkAccessMode_onlyPacket /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyPacket /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkAccessMode, _encode_NetworkAccessMode } from "../MAP-MS-DataTypes/NetworkAccessMode.ta.mjs";
// export { NetworkAccessMode, _enum_for_NetworkAccessMode, NetworkAccessMode_packetAndCircuit /* IMPORTED_LONG_ENUMERATION_ITEM */, packetAndCircuit /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkAccessMode_onlyCircuit /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyCircuit /* IMPORTED_SHORT_ENUMERATION_ITEM */, NetworkAccessMode_onlyPacket /* IMPORTED_LONG_ENUMERATION_ITEM */, onlyPacket /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NetworkAccessMode, _encode_NetworkAccessMode } from "../MAP-MS-DataTypes/NetworkAccessMode.ta.mjs";
import { LSAInformation, _decode_LSAInformation, _encode_LSAInformation } from "../MAP-MS-DataTypes/LSAInformation.ta.mjs";
// export { LSAInformation, _decode_LSAInformation, _encode_LSAInformation } from "../MAP-MS-DataTypes/LSAInformation.ta.mjs";
import { LCSInformation, _decode_LCSInformation, _encode_LCSInformation } from "../MAP-MS-DataTypes/LCSInformation.ta.mjs";
// export { LCSInformation, _decode_LCSInformation, _encode_LCSInformation } from "../MAP-MS-DataTypes/LCSInformation.ta.mjs";
import { IST_AlertTimerValue, _decode_IST_AlertTimerValue, _encode_IST_AlertTimerValue } from "../MAP-MS-DataTypes/IST-AlertTimerValue.ta.mjs";
// export { IST_AlertTimerValue, _decode_IST_AlertTimerValue, _encode_IST_AlertTimerValue } from "../MAP-MS-DataTypes/IST-AlertTimerValue.ta.mjs";
import { AgeIndicator, _decode_AgeIndicator, _encode_AgeIndicator } from "../MAP-MS-DataTypes/AgeIndicator.ta.mjs";
// export { AgeIndicator, _decode_AgeIndicator, _encode_AgeIndicator } from "../MAP-MS-DataTypes/AgeIndicator.ta.mjs";
import { MC_SS_Info, _decode_MC_SS_Info, _encode_MC_SS_Info } from "../MAP-CommonDataTypes/MC-SS-Info.ta.mjs";
// export { MC_SS_Info, _decode_MC_SS_Info, _encode_MC_SS_Info } from "../MAP-CommonDataTypes/MC-SS-Info.ta.mjs";
import { CS_AllocationRetentionPriority, _decode_CS_AllocationRetentionPriority, _encode_CS_AllocationRetentionPriority } from "../MAP-MS-DataTypes/CS-AllocationRetentionPriority.ta.mjs";
// export { CS_AllocationRetentionPriority, _decode_CS_AllocationRetentionPriority, _encode_CS_AllocationRetentionPriority } from "../MAP-MS-DataTypes/CS-AllocationRetentionPriority.ta.mjs";
import { SGSN_CAMEL_SubscriptionInfo, _decode_SGSN_CAMEL_SubscriptionInfo, _encode_SGSN_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/SGSN-CAMEL-SubscriptionInfo.ta.mjs";
// export { SGSN_CAMEL_SubscriptionInfo, _decode_SGSN_CAMEL_SubscriptionInfo, _encode_SGSN_CAMEL_SubscriptionInfo } from "../MAP-MS-DataTypes/SGSN-CAMEL-SubscriptionInfo.ta.mjs";
import { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
// export { ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../MAP-MS-DataTypes/ChargingCharacteristics.ta.mjs";
import { AccessRestrictionData, AccessRestrictionData_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_geranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, geranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ganNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ganNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_i_hspa_evolutionNotAllowed /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolutionNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_wb_e_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, wb_e_utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ho_toNon3GPP_AccessNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_nb_iotNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nb_iotNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_enhancedCoverageNotAllowed /* IMPORTED_LONG_NAMED_BIT */, enhancedCoverageNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessRestrictionData, _encode_AccessRestrictionData } from "../MAP-MS-DataTypes/AccessRestrictionData.ta.mjs";
// export { AccessRestrictionData, AccessRestrictionData_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_geranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, geranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ganNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ganNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_i_hspa_evolutionNotAllowed /* IMPORTED_LONG_NAMED_BIT */, i_hspa_evolutionNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_wb_e_utranNotAllowed /* IMPORTED_LONG_NAMED_BIT */, wb_e_utranNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_ho_toNon3GPP_AccessNotAllowed /* IMPORTED_LONG_NAMED_BIT */, ho_toNon3GPP_AccessNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_nb_iotNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nb_iotNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, AccessRestrictionData_enhancedCoverageNotAllowed /* IMPORTED_LONG_NAMED_BIT */, enhancedCoverageNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessRestrictionData, _encode_AccessRestrictionData } from "../MAP-MS-DataTypes/AccessRestrictionData.ta.mjs";
import { EPS_SubscriptionData, _decode_EPS_SubscriptionData, _encode_EPS_SubscriptionData } from "../MAP-MS-DataTypes/EPS-SubscriptionData.ta.mjs";
// export { EPS_SubscriptionData, _decode_EPS_SubscriptionData, _encode_EPS_SubscriptionData } from "../MAP-MS-DataTypes/EPS-SubscriptionData.ta.mjs";
import { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";
// export { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";
// export { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";
import { SubscribedPeriodicRAUTAUtimer, _decode_SubscribedPeriodicRAUTAUtimer, _encode_SubscribedPeriodicRAUTAUtimer } from "../MAP-MS-DataTypes/SubscribedPeriodicRAUTAUtimer.ta.mjs";
// export { SubscribedPeriodicRAUTAUtimer, _decode_SubscribedPeriodicRAUTAUtimer, _encode_SubscribedPeriodicRAUTAUtimer } from "../MAP-MS-DataTypes/SubscribedPeriodicRAUTAUtimer.ta.mjs";
import { SubscribedPeriodicLAUtimer, _decode_SubscribedPeriodicLAUtimer, _encode_SubscribedPeriodicLAUtimer } from "../MAP-MS-DataTypes/SubscribedPeriodicLAUtimer.ta.mjs";
// export { SubscribedPeriodicLAUtimer, _decode_SubscribedPeriodicLAUtimer, _encode_SubscribedPeriodicLAUtimer } from "../MAP-MS-DataTypes/SubscribedPeriodicLAUtimer.ta.mjs";
import { VPLMN_CSG_SubscriptionDataList, _decode_VPLMN_CSG_SubscriptionDataList, _encode_VPLMN_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/VPLMN-CSG-SubscriptionDataList.ta.mjs";
// export { VPLMN_CSG_SubscriptionDataList, _decode_VPLMN_CSG_SubscriptionDataList, _encode_VPLMN_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/VPLMN-CSG-SubscriptionDataList.ta.mjs";
import { AdjacentAccessRestrictionDataList, _decode_AdjacentAccessRestrictionDataList, _encode_AdjacentAccessRestrictionDataList } from "../MAP-MS-DataTypes/AdjacentAccessRestrictionDataList.ta.mjs";
// export { AdjacentAccessRestrictionDataList, _decode_AdjacentAccessRestrictionDataList, _encode_AdjacentAccessRestrictionDataList } from "../MAP-MS-DataTypes/AdjacentAccessRestrictionDataList.ta.mjs";
import { IMSI_GroupIdList, _decode_IMSI_GroupIdList, _encode_IMSI_GroupIdList } from "../MAP-MS-DataTypes/IMSI-GroupIdList.ta.mjs";
// export { IMSI_GroupIdList, _decode_IMSI_GroupIdList, _encode_IMSI_GroupIdList } from "../MAP-MS-DataTypes/IMSI-GroupIdList.ta.mjs";
import { UE_UsageType, _decode_UE_UsageType, _encode_UE_UsageType } from "../MAP-MS-DataTypes/UE-UsageType.ta.mjs";
// export { UE_UsageType, _decode_UE_UsageType, _encode_UE_UsageType } from "../MAP-MS-DataTypes/UE-UsageType.ta.mjs";
import { DL_Buffering_Suggested_Packet_Count, _decode_DL_Buffering_Suggested_Packet_Count, _encode_DL_Buffering_Suggested_Packet_Count } from "../MAP-MS-DataTypes/DL-Buffering-Suggested-Packet-Count.ta.mjs";
// export { DL_Buffering_Suggested_Packet_Count, _decode_DL_Buffering_Suggested_Packet_Count, _encode_DL_Buffering_Suggested_Packet_Count } from "../MAP-MS-DataTypes/DL-Buffering-Suggested-Packet-Count.ta.mjs";
import { Reset_Id_List, _decode_Reset_Id_List, _encode_Reset_Id_List } from "../MAP-MS-DataTypes/Reset-Id-List.ta.mjs";
// export { Reset_Id_List, _decode_Reset_Id_List, _encode_Reset_Id_List } from "../MAP-MS-DataTypes/Reset-Id-List.ta.mjs";
import { EDRX_Cycle_Length_List, _decode_EDRX_Cycle_Length_List, _encode_EDRX_Cycle_Length_List } from "../MAP-MS-DataTypes/EDRX-Cycle-Length-List.ta.mjs";
// export { EDRX_Cycle_Length_List, _decode_EDRX_Cycle_Length_List, _encode_EDRX_Cycle_Length_List } from "../MAP-MS-DataTypes/EDRX-Cycle-Length-List.ta.mjs";
import { Ext_AccessRestrictionData, Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_AccessRestrictionData, _encode_Ext_AccessRestrictionData } from "../MAP-MS-DataTypes/Ext-AccessRestrictionData.ta.mjs";
// export { Ext_AccessRestrictionData, Ext_AccessRestrictionData_nrAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, nrAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, Ext_AccessRestrictionData_unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_LONG_NAMED_BIT */, unlicensedSpectrumAsSecondaryRATNotAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_Ext_AccessRestrictionData, _encode_Ext_AccessRestrictionData } from "../MAP-MS-DataTypes/Ext-AccessRestrictionData.ta.mjs";
import { Category, _decode_Category, _encode_Category } from "../MAP-MS-DataTypes/Category.ta.mjs";
// export { Category, _decode_Category, _encode_Category } from "../MAP-MS-DataTypes/Category.ta.mjs";
import { SubscriberStatus, _enum_for_SubscriberStatus, SubscriberStatus_serviceGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriberStatus_operatorDeterminedBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorDeterminedBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriberStatus, _encode_SubscriberStatus } from "../MAP-MS-DataTypes/SubscriberStatus.ta.mjs";
// export { SubscriberStatus, _enum_for_SubscriberStatus, SubscriberStatus_serviceGranted /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceGranted /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriberStatus_operatorDeterminedBarring /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorDeterminedBarring /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriberStatus, _encode_SubscriberStatus } from "../MAP-MS-DataTypes/SubscriberStatus.ta.mjs";
import { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
// export { BearerServiceList, _decode_BearerServiceList, _encode_BearerServiceList } from "../MAP-MS-DataTypes/BearerServiceList.ta.mjs";
import { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
// export { TeleserviceList, _decode_TeleserviceList, _encode_TeleserviceList } from "../MAP-MS-DataTypes/TeleserviceList.ta.mjs";
import { Ext_SS_InfoList, _decode_Ext_SS_InfoList, _encode_Ext_SS_InfoList } from "../MAP-MS-DataTypes/Ext-SS-InfoList.ta.mjs";
// export { Ext_SS_InfoList, _decode_Ext_SS_InfoList, _encode_Ext_SS_InfoList } from "../MAP-MS-DataTypes/Ext-SS-InfoList.ta.mjs";
import { ODB_Data, _decode_ODB_Data, _encode_ODB_Data } from "../MAP-MS-DataTypes/ODB-Data.ta.mjs";
// export { ODB_Data, _decode_ODB_Data, _encode_ODB_Data } from "../MAP-MS-DataTypes/ODB-Data.ta.mjs";
import { ZoneCodeList, _decode_ZoneCodeList, _encode_ZoneCodeList } from "../MAP-MS-DataTypes/ZoneCodeList.ta.mjs";
// export { ZoneCodeList, _decode_ZoneCodeList, _encode_ZoneCodeList } from "../MAP-MS-DataTypes/ZoneCodeList.ta.mjs";
import { VBSDataList, _decode_VBSDataList, _encode_VBSDataList } from "../MAP-MS-DataTypes/VBSDataList.ta.mjs";
// export { VBSDataList, _decode_VBSDataList, _encode_VBSDataList } from "../MAP-MS-DataTypes/VBSDataList.ta.mjs";
import { VGCSDataList, _decode_VGCSDataList, _encode_VGCSDataList } from "../MAP-MS-DataTypes/VGCSDataList.ta.mjs";
// export { VGCSDataList, _decode_VGCSDataList, _encode_VGCSDataList } from "../MAP-MS-DataTypes/VGCSDataList.ta.mjs";
import { VlrCamelSubscriptionInfo, _decode_VlrCamelSubscriptionInfo, _encode_VlrCamelSubscriptionInfo } from "../MAP-MS-DataTypes/VlrCamelSubscriptionInfo.ta.mjs";
// export { VlrCamelSubscriptionInfo, _decode_VlrCamelSubscriptionInfo, _encode_VlrCamelSubscriptionInfo } from "../MAP-MS-DataTypes/VlrCamelSubscriptionInfo.ta.mjs";


/**
 * @summary InsertSubscriberDataArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InsertSubscriberDataArg ::= SEQUENCE {
 *     imsi    [0] IMSI    OPTIONAL,
 *     COMPONENTS OF    SubscriberData,
 *     extensionContainer    [14] ExtensionContainer    OPTIONAL,
 *     ... ,    
 *     naea-PreferredCI    [15] NAEA-PreferredCI    OPTIONAL,
 *     -- naea-PreferredCI is included at the discretion of the HLR operator.
 *     gprsSubscriptionData    [16] GPRSSubscriptionData    OPTIONAL,
 *     roamingRestrictedInSgsnDueToUnsupportedFeature [23]    NULL    
 *         OPTIONAL, 
 *     networkAccessMode    [24] NetworkAccessMode    OPTIONAL,
 *     lsaInformation    [25] LSAInformation    OPTIONAL,
 *     lmu-Indicator    [21]    NULL    OPTIONAL,
 *     lcsInformation    [22]    LCSInformation    OPTIONAL,
 *     istAlertTimer    [26] IST-AlertTimerValue    OPTIONAL,
 *     superChargerSupportedInHLR    [27] AgeIndicator    OPTIONAL,
 *     mc-SS-Info    [28] MC-SS-Info    OPTIONAL,
 *     cs-AllocationRetentionPriority    [29] CS-AllocationRetentionPriority    OPTIONAL,
 *     sgsn-CAMEL-SubscriptionInfo    [17] SGSN-CAMEL-SubscriptionInfo    OPTIONAL,
 *     chargingCharacteristics    [18]    ChargingCharacteristics    OPTIONAL,
 *     accessRestrictionData    [19] AccessRestrictionData    OPTIONAL,
 *     ics-Indicator    [20]    BOOLEAN    OPTIONAL,
 *     eps-SubscriptionData    [31]    EPS-SubscriptionData    OPTIONAL,
 *     csg-SubscriptionDataList    [32] CSG-SubscriptionDataList    OPTIONAL,
 *     ue-ReachabilityRequestIndicator    [33]    NULL    OPTIONAL,
 *     sgsn-Number    [34]    ISDN-AddressString    OPTIONAL,
 *     mme-Name    [35]    DiameterIdentity    OPTIONAL,
 *     subscribedPeriodicRAUTAUtimer    [36]    SubscribedPeriodicRAUTAUtimer    OPTIONAL,
 *     vplmnLIPAAllowed    [37]    NULL    OPTIONAL,
 *     mdtUserConsent    [38]    BOOLEAN    OPTIONAL,
 *     subscribedPeriodicLAUtimer    [39]    SubscribedPeriodicLAUtimer    OPTIONAL,
 *     vplmn-Csg-SubscriptionDataList    [40]    VPLMN-CSG-SubscriptionDataList    OPTIONAL,
 *     additionalMSISDN    [41]    ISDN-AddressString    OPTIONAL,
 *     psAndSMS-OnlyServiceProvision    [42]    NULL    OPTIONAL,
 *     smsInSGSNAllowed    [43]    NULL    OPTIONAL,
 *     cs-to-ps-SRVCC-Allowed-Indicator    [44]    NULL    OPTIONAL,
 *     pcscf-Restoration-Request    [45]    NULL    OPTIONAL,
 *     adjacentAccessRestrictionDataList    [46] AdjacentAccessRestrictionDataList    OPTIONAL,
 *     imsi-Group-Id-List    [47] IMSI-GroupIdList    OPTIONAL,
 *     ueUsageType    [48] UE-UsageType    OPTIONAL,
 *     userPlaneIntegrityProtectionIndicator    [49] NULL    OPTIONAL,
 *     dl-Buffering-Suggested-Packet-Count    [50]    DL-Buffering-Suggested-Packet-Count    OPTIONAL,
 *     reset-Id-List    [51]    Reset-Id-List    OPTIONAL,
 *     eDRX-Cycle-Length-List    [52] EDRX-Cycle-Length-List    OPTIONAL,
 *     ext-AccessRestrictionData    [53] Ext-AccessRestrictionData    OPTIONAL,
 *     iab-Operation-Allowed-Indicator    [54]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class InsertSubscriberDataArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString> /* REPLICATED_COMPONENT */,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<Category> /* REPLICATED_COMPONENT */,
        /**
         * @summary `subscriberStatus`.
         * @public
         * @readonly
         */
        readonly subscriberStatus: OPTIONAL<SubscriberStatus> /* REPLICATED_COMPONENT */,
        /**
         * @summary `bearerServiceList`.
         * @public
         * @readonly
         */
        readonly bearerServiceList: OPTIONAL<BearerServiceList> /* REPLICATED_COMPONENT */,
        /**
         * @summary `teleserviceList`.
         * @public
         * @readonly
         */
        readonly teleserviceList: OPTIONAL<TeleserviceList> /* REPLICATED_COMPONENT */,
        /**
         * @summary `provisionedSS`.
         * @public
         * @readonly
         */
        readonly provisionedSS: OPTIONAL<Ext_SS_InfoList> /* REPLICATED_COMPONENT */,
        /**
         * @summary `odb_Data`.
         * @public
         * @readonly
         */
        readonly odb_Data: OPTIONAL<ODB_Data> /* REPLICATED_COMPONENT */,
        /**
         * @summary `roamingRestrictionDueToUnsupportedFeature`.
         * @public
         * @readonly
         */
        readonly roamingRestrictionDueToUnsupportedFeature: OPTIONAL<NULL> /* REPLICATED_COMPONENT */,
        /**
         * @summary `regionalSubscriptionData`.
         * @public
         * @readonly
         */
        readonly regionalSubscriptionData: OPTIONAL<ZoneCodeList> /* REPLICATED_COMPONENT */,
        /**
         * @summary `vbsSubscriptionData`.
         * @public
         * @readonly
         */
        readonly vbsSubscriptionData: OPTIONAL<VBSDataList> /* REPLICATED_COMPONENT */,
        /**
         * @summary `vgcsSubscriptionData`.
         * @public
         * @readonly
         */
        readonly vgcsSubscriptionData: OPTIONAL<VGCSDataList> /* REPLICATED_COMPONENT */,
        /**
         * @summary `vlrCamelSubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly vlrCamelSubscriptionInfo: OPTIONAL<VlrCamelSubscriptionInfo> /* REPLICATED_COMPONENT */,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `naea_PreferredCI`.
         * @public
         * @readonly
         */
        readonly naea_PreferredCI: OPTIONAL<NAEA_PreferredCI>,
        /**
         * @summary `gprsSubscriptionData`.
         * @public
         * @readonly
         */
        readonly gprsSubscriptionData: OPTIONAL<GPRSSubscriptionData>,
        /**
         * @summary `roamingRestrictedInSgsnDueToUnsupportedFeature`.
         * @public
         * @readonly
         */
        readonly roamingRestrictedInSgsnDueToUnsupportedFeature: OPTIONAL<NULL>,
        /**
         * @summary `networkAccessMode`.
         * @public
         * @readonly
         */
        readonly networkAccessMode: OPTIONAL<NetworkAccessMode>,
        /**
         * @summary `lsaInformation`.
         * @public
         * @readonly
         */
        readonly lsaInformation: OPTIONAL<LSAInformation>,
        /**
         * @summary `lmu_Indicator`.
         * @public
         * @readonly
         */
        readonly lmu_Indicator: OPTIONAL<NULL>,
        /**
         * @summary `lcsInformation`.
         * @public
         * @readonly
         */
        readonly lcsInformation: OPTIONAL<LCSInformation>,
        /**
         * @summary `istAlertTimer`.
         * @public
         * @readonly
         */
        readonly istAlertTimer: OPTIONAL<IST_AlertTimerValue>,
        /**
         * @summary `superChargerSupportedInHLR`.
         * @public
         * @readonly
         */
        readonly superChargerSupportedInHLR: OPTIONAL<AgeIndicator>,
        /**
         * @summary `mc_SS_Info`.
         * @public
         * @readonly
         */
        readonly mc_SS_Info: OPTIONAL<MC_SS_Info>,
        /**
         * @summary `cs_AllocationRetentionPriority`.
         * @public
         * @readonly
         */
        readonly cs_AllocationRetentionPriority: OPTIONAL<CS_AllocationRetentionPriority>,
        /**
         * @summary `sgsn_CAMEL_SubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly sgsn_CAMEL_SubscriptionInfo: OPTIONAL<SGSN_CAMEL_SubscriptionInfo>,
        /**
         * @summary `chargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly chargingCharacteristics: OPTIONAL<ChargingCharacteristics>,
        /**
         * @summary `accessRestrictionData`.
         * @public
         * @readonly
         */
        readonly accessRestrictionData: OPTIONAL<AccessRestrictionData>,
        /**
         * @summary `ics_Indicator`.
         * @public
         * @readonly
         */
        readonly ics_Indicator: OPTIONAL<BOOLEAN>,
        /**
         * @summary `eps_SubscriptionData`.
         * @public
         * @readonly
         */
        readonly eps_SubscriptionData: OPTIONAL<EPS_SubscriptionData>,
        /**
         * @summary `csg_SubscriptionDataList`.
         * @public
         * @readonly
         */
        readonly csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>,
        /**
         * @summary `ue_ReachabilityRequestIndicator`.
         * @public
         * @readonly
         */
        readonly ue_ReachabilityRequestIndicator: OPTIONAL<NULL>,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `mme_Name`.
         * @public
         * @readonly
         */
        readonly mme_Name: OPTIONAL<DiameterIdentity>,
        /**
         * @summary `subscribedPeriodicRAUTAUtimer`.
         * @public
         * @readonly
         */
        readonly subscribedPeriodicRAUTAUtimer: OPTIONAL<SubscribedPeriodicRAUTAUtimer>,
        /**
         * @summary `vplmnLIPAAllowed`.
         * @public
         * @readonly
         */
        readonly vplmnLIPAAllowed: OPTIONAL<NULL>,
        /**
         * @summary `mdtUserConsent`.
         * @public
         * @readonly
         */
        readonly mdtUserConsent: OPTIONAL<BOOLEAN>,
        /**
         * @summary `subscribedPeriodicLAUtimer`.
         * @public
         * @readonly
         */
        readonly subscribedPeriodicLAUtimer: OPTIONAL<SubscribedPeriodicLAUtimer>,
        /**
         * @summary `vplmn_Csg_SubscriptionDataList`.
         * @public
         * @readonly
         */
        readonly vplmn_Csg_SubscriptionDataList: OPTIONAL<VPLMN_CSG_SubscriptionDataList>,
        /**
         * @summary `additionalMSISDN`.
         * @public
         * @readonly
         */
        readonly additionalMSISDN: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `psAndSMS_OnlyServiceProvision`.
         * @public
         * @readonly
         */
        readonly psAndSMS_OnlyServiceProvision: OPTIONAL<NULL>,
        /**
         * @summary `smsInSGSNAllowed`.
         * @public
         * @readonly
         */
        readonly smsInSGSNAllowed: OPTIONAL<NULL>,
        /**
         * @summary `cs_to_ps_SRVCC_Allowed_Indicator`.
         * @public
         * @readonly
         */
        readonly cs_to_ps_SRVCC_Allowed_Indicator: OPTIONAL<NULL>,
        /**
         * @summary `pcscf_Restoration_Request`.
         * @public
         * @readonly
         */
        readonly pcscf_Restoration_Request: OPTIONAL<NULL>,
        /**
         * @summary `adjacentAccessRestrictionDataList`.
         * @public
         * @readonly
         */
        readonly adjacentAccessRestrictionDataList: OPTIONAL<AdjacentAccessRestrictionDataList>,
        /**
         * @summary `imsi_Group_Id_List`.
         * @public
         * @readonly
         */
        readonly imsi_Group_Id_List: OPTIONAL<IMSI_GroupIdList>,
        /**
         * @summary `ueUsageType`.
         * @public
         * @readonly
         */
        readonly ueUsageType: OPTIONAL<UE_UsageType>,
        /**
         * @summary `userPlaneIntegrityProtectionIndicator`.
         * @public
         * @readonly
         */
        readonly userPlaneIntegrityProtectionIndicator: OPTIONAL<NULL>,
        /**
         * @summary `dl_Buffering_Suggested_Packet_Count`.
         * @public
         * @readonly
         */
        readonly dl_Buffering_Suggested_Packet_Count: OPTIONAL<DL_Buffering_Suggested_Packet_Count>,
        /**
         * @summary `reset_Id_List`.
         * @public
         * @readonly
         */
        readonly reset_Id_List: OPTIONAL<Reset_Id_List>,
        /**
         * @summary `eDRX_Cycle_Length_List`.
         * @public
         * @readonly
         */
        readonly eDRX_Cycle_Length_List: OPTIONAL<EDRX_Cycle_Length_List>,
        /**
         * @summary `ext_AccessRestrictionData`.
         * @public
         * @readonly
         */
        readonly ext_AccessRestrictionData: OPTIONAL<Ext_AccessRestrictionData>,
        /**
         * @summary `iab_Operation_Allowed_Indicator`.
         * @public
         * @readonly
         */
        readonly iab_Operation_Allowed_Indicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InsertSubscriberDataArg
     * @description
     * 
     * This takes an `object` and converts it to a `InsertSubscriberDataArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InsertSubscriberDataArg`.
     * @returns {InsertSubscriberDataArg}
     */
    public static _from_object (_o: { [_K in keyof (InsertSubscriberDataArg)]: (InsertSubscriberDataArg)[_K] }): InsertSubscriberDataArg {
        return new InsertSubscriberDataArg(_o.imsi, _o.msisdn, _o.category, _o.subscriberStatus, _o.bearerServiceList, _o.teleserviceList, _o.provisionedSS, _o.odb_Data, _o.roamingRestrictionDueToUnsupportedFeature, _o.regionalSubscriptionData, _o.vbsSubscriptionData, _o.vgcsSubscriptionData, _o.vlrCamelSubscriptionInfo, _o.extensionContainer, _o.naea_PreferredCI, _o.gprsSubscriptionData, _o.roamingRestrictedInSgsnDueToUnsupportedFeature, _o.networkAccessMode, _o.lsaInformation, _o.lmu_Indicator, _o.lcsInformation, _o.istAlertTimer, _o.superChargerSupportedInHLR, _o.mc_SS_Info, _o.cs_AllocationRetentionPriority, _o.sgsn_CAMEL_SubscriptionInfo, _o.chargingCharacteristics, _o.accessRestrictionData, _o.ics_Indicator, _o.eps_SubscriptionData, _o.csg_SubscriptionDataList, _o.ue_ReachabilityRequestIndicator, _o.sgsn_Number, _o.mme_Name, _o.subscribedPeriodicRAUTAUtimer, _o.vplmnLIPAAllowed, _o.mdtUserConsent, _o.subscribedPeriodicLAUtimer, _o.vplmn_Csg_SubscriptionDataList, _o.additionalMSISDN, _o.psAndSMS_OnlyServiceProvision, _o.smsInSGSNAllowed, _o.cs_to_ps_SRVCC_Allowed_Indicator, _o.pcscf_Restoration_Request, _o.adjacentAccessRestrictionDataList, _o.imsi_Group_Id_List, _o.ueUsageType, _o.userPlaneIntegrityProtectionIndicator, _o.dl_Buffering_Suggested_Packet_Count, _o.reset_Id_List, _o.eDRX_Cycle_Length_List, _o.ext_AccessRestrictionData, _o.iab_Operation_Allowed_Indicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `subscriberStatus`
         * @public
         * @static
         */

    public static _enum_for_subscriberStatus = _enum_for_SubscriberStatus;        /**
         * @summary The enum used as the type of the component `networkAccessMode`
         * @public
         * @static
         */

    public static _enum_for_networkAccessMode = _enum_for_NetworkAccessMode;
}

/**
 * @summary The Leading Root Component Types of InsertSubscriberDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InsertSubscriberDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("subscriberStatus", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("bearerServiceList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("teleserviceList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("provisionedSS", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("odb-Data", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("roamingRestrictionDueToUnsupportedFeature", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("regionalSubscriptionData", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("vbsSubscriptionData", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("vgcsSubscriptionData", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("vlrCamelSubscriptionInfo", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 14), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InsertSubscriberDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InsertSubscriberDataArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InsertSubscriberDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InsertSubscriberDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("naea-PreferredCI", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("gprsSubscriptionData", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("roamingRestrictedInSgsnDueToUnsupportedFeature", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("networkAccessMode", true, $.hasTag(_TagClass.context, 24), undefined, undefined),
    new $.ComponentSpec("lsaInformation", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("lmu-Indicator", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("lcsInformation", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("istAlertTimer", true, $.hasTag(_TagClass.context, 26), undefined, undefined),
    new $.ComponentSpec("superChargerSupportedInHLR", true, $.hasTag(_TagClass.context, 27), undefined, undefined),
    new $.ComponentSpec("mc-SS-Info", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    new $.ComponentSpec("cs-AllocationRetentionPriority", true, $.hasTag(_TagClass.context, 29), undefined, undefined),
    new $.ComponentSpec("sgsn-CAMEL-SubscriptionInfo", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("chargingCharacteristics", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("accessRestrictionData", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("ics-Indicator", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("eps-SubscriptionData", true, $.hasTag(_TagClass.context, 31), undefined, undefined),
    new $.ComponentSpec("csg-SubscriptionDataList", true, $.hasTag(_TagClass.context, 32), undefined, undefined),
    new $.ComponentSpec("ue-ReachabilityRequestIndicator", true, $.hasTag(_TagClass.context, 33), undefined, undefined),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 34), undefined, undefined),
    new $.ComponentSpec("mme-Name", true, $.hasTag(_TagClass.context, 35), undefined, undefined),
    new $.ComponentSpec("subscribedPeriodicRAUTAUtimer", true, $.hasTag(_TagClass.context, 36), undefined, undefined),
    new $.ComponentSpec("vplmnLIPAAllowed", true, $.hasTag(_TagClass.context, 37), undefined, undefined),
    new $.ComponentSpec("mdtUserConsent", true, $.hasTag(_TagClass.context, 38), undefined, undefined),
    new $.ComponentSpec("subscribedPeriodicLAUtimer", true, $.hasTag(_TagClass.context, 39), undefined, undefined),
    new $.ComponentSpec("vplmn-Csg-SubscriptionDataList", true, $.hasTag(_TagClass.context, 40), undefined, undefined),
    new $.ComponentSpec("additionalMSISDN", true, $.hasTag(_TagClass.context, 41), undefined, undefined),
    new $.ComponentSpec("psAndSMS-OnlyServiceProvision", true, $.hasTag(_TagClass.context, 42), undefined, undefined),
    new $.ComponentSpec("smsInSGSNAllowed", true, $.hasTag(_TagClass.context, 43), undefined, undefined),
    new $.ComponentSpec("cs-to-ps-SRVCC-Allowed-Indicator", true, $.hasTag(_TagClass.context, 44), undefined, undefined),
    new $.ComponentSpec("pcscf-Restoration-Request", true, $.hasTag(_TagClass.context, 45), undefined, undefined),
    new $.ComponentSpec("adjacentAccessRestrictionDataList", true, $.hasTag(_TagClass.context, 46), undefined, undefined),
    new $.ComponentSpec("imsi-Group-Id-List", true, $.hasTag(_TagClass.context, 47), undefined, undefined),
    new $.ComponentSpec("ueUsageType", true, $.hasTag(_TagClass.context, 48), undefined, undefined),
    new $.ComponentSpec("userPlaneIntegrityProtectionIndicator", true, $.hasTag(_TagClass.context, 49), undefined, undefined),
    new $.ComponentSpec("dl-Buffering-Suggested-Packet-Count", true, $.hasTag(_TagClass.context, 50), undefined, undefined),
    new $.ComponentSpec("reset-Id-List", true, $.hasTag(_TagClass.context, 51), undefined, undefined),
    new $.ComponentSpec("eDRX-Cycle-Length-List", true, $.hasTag(_TagClass.context, 52), undefined, undefined),
    new $.ComponentSpec("ext-AccessRestrictionData", true, $.hasTag(_TagClass.context, 53), undefined, undefined),
    new $.ComponentSpec("iab-Operation-Allowed-Indicator", true, $.hasTag(_TagClass.context, 54), undefined, undefined)
];

let _cached_decoder_for_InsertSubscriberDataArg: $.ASN1Decoder<InsertSubscriberDataArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InsertSubscriberDataArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InsertSubscriberDataArg (el: _Element): InsertSubscriberDataArg {
    if (!_cached_decoder_for_InsertSubscriberDataArg) { _cached_decoder_for_InsertSubscriberDataArg = function (el: _Element): InsertSubscriberDataArg {
    let imsi: OPTIONAL<IMSI>;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let category: OPTIONAL<Category>;
    let subscriberStatus: OPTIONAL<SubscriberStatus>;
    let bearerServiceList: OPTIONAL<BearerServiceList>;
    let teleserviceList: OPTIONAL<TeleserviceList>;
    let provisionedSS: OPTIONAL<Ext_SS_InfoList>;
    let odb_Data: OPTIONAL<ODB_Data>;
    let roamingRestrictionDueToUnsupportedFeature: OPTIONAL<NULL>;
    let regionalSubscriptionData: OPTIONAL<ZoneCodeList>;
    let vbsSubscriptionData: OPTIONAL<VBSDataList>;
    let vgcsSubscriptionData: OPTIONAL<VGCSDataList>;
    let vlrCamelSubscriptionInfo: OPTIONAL<VlrCamelSubscriptionInfo>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let naea_PreferredCI: OPTIONAL<NAEA_PreferredCI>;
    let gprsSubscriptionData: OPTIONAL<GPRSSubscriptionData>;
    let roamingRestrictedInSgsnDueToUnsupportedFeature: OPTIONAL<NULL>;
    let networkAccessMode: OPTIONAL<NetworkAccessMode>;
    let lsaInformation: OPTIONAL<LSAInformation>;
    let lmu_Indicator: OPTIONAL<NULL>;
    let lcsInformation: OPTIONAL<LCSInformation>;
    let istAlertTimer: OPTIONAL<IST_AlertTimerValue>;
    let superChargerSupportedInHLR: OPTIONAL<AgeIndicator>;
    let mc_SS_Info: OPTIONAL<MC_SS_Info>;
    let cs_AllocationRetentionPriority: OPTIONAL<CS_AllocationRetentionPriority>;
    let sgsn_CAMEL_SubscriptionInfo: OPTIONAL<SGSN_CAMEL_SubscriptionInfo>;
    let chargingCharacteristics: OPTIONAL<ChargingCharacteristics>;
    let accessRestrictionData: OPTIONAL<AccessRestrictionData>;
    let ics_Indicator: OPTIONAL<BOOLEAN>;
    let eps_SubscriptionData: OPTIONAL<EPS_SubscriptionData>;
    let csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>;
    let ue_ReachabilityRequestIndicator: OPTIONAL<NULL>;
    let sgsn_Number: OPTIONAL<ISDN_AddressString>;
    let mme_Name: OPTIONAL<DiameterIdentity>;
    let subscribedPeriodicRAUTAUtimer: OPTIONAL<SubscribedPeriodicRAUTAUtimer>;
    let vplmnLIPAAllowed: OPTIONAL<NULL>;
    let mdtUserConsent: OPTIONAL<BOOLEAN>;
    let subscribedPeriodicLAUtimer: OPTIONAL<SubscribedPeriodicLAUtimer>;
    let vplmn_Csg_SubscriptionDataList: OPTIONAL<VPLMN_CSG_SubscriptionDataList>;
    let additionalMSISDN: OPTIONAL<ISDN_AddressString>;
    let psAndSMS_OnlyServiceProvision: OPTIONAL<NULL>;
    let smsInSGSNAllowed: OPTIONAL<NULL>;
    let cs_to_ps_SRVCC_Allowed_Indicator: OPTIONAL<NULL>;
    let pcscf_Restoration_Request: OPTIONAL<NULL>;
    let adjacentAccessRestrictionDataList: OPTIONAL<AdjacentAccessRestrictionDataList>;
    let imsi_Group_Id_List: OPTIONAL<IMSI_GroupIdList>;
    let ueUsageType: OPTIONAL<UE_UsageType>;
    let userPlaneIntegrityProtectionIndicator: OPTIONAL<NULL>;
    let dl_Buffering_Suggested_Packet_Count: OPTIONAL<DL_Buffering_Suggested_Packet_Count>;
    let reset_Id_List: OPTIONAL<Reset_Id_List>;
    let eDRX_Cycle_Length_List: OPTIONAL<EDRX_Cycle_Length_List>;
    let ext_AccessRestrictionData: OPTIONAL<Ext_AccessRestrictionData>;
    let iab_Operation_Allowed_Indicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<Category>(() => _decode_Category)(_el); },
        "subscriberStatus": (_el: _Element): void => { subscriberStatus = $._decode_implicit<SubscriberStatus>(() => _decode_SubscriberStatus)(_el); },
        "bearerServiceList": (_el: _Element): void => { bearerServiceList = $._decode_implicit<BearerServiceList>(() => _decode_BearerServiceList)(_el); },
        "teleserviceList": (_el: _Element): void => { teleserviceList = $._decode_implicit<TeleserviceList>(() => _decode_TeleserviceList)(_el); },
        "provisionedSS": (_el: _Element): void => { provisionedSS = $._decode_implicit<Ext_SS_InfoList>(() => _decode_Ext_SS_InfoList)(_el); },
        "odb-Data": (_el: _Element): void => { odb_Data = $._decode_implicit<ODB_Data>(() => _decode_ODB_Data)(_el); },
        "roamingRestrictionDueToUnsupportedFeature": (_el: _Element): void => { roamingRestrictionDueToUnsupportedFeature = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "regionalSubscriptionData": (_el: _Element): void => { regionalSubscriptionData = $._decode_implicit<ZoneCodeList>(() => _decode_ZoneCodeList)(_el); },
        "vbsSubscriptionData": (_el: _Element): void => { vbsSubscriptionData = $._decode_implicit<VBSDataList>(() => _decode_VBSDataList)(_el); },
        "vgcsSubscriptionData": (_el: _Element): void => { vgcsSubscriptionData = $._decode_implicit<VGCSDataList>(() => _decode_VGCSDataList)(_el); },
        "vlrCamelSubscriptionInfo": (_el: _Element): void => { vlrCamelSubscriptionInfo = $._decode_implicit<VlrCamelSubscriptionInfo>(() => _decode_VlrCamelSubscriptionInfo)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "naea-PreferredCI": (_el: _Element): void => { naea_PreferredCI = $._decode_implicit<NAEA_PreferredCI>(() => _decode_NAEA_PreferredCI)(_el); },
        "gprsSubscriptionData": (_el: _Element): void => { gprsSubscriptionData = $._decode_implicit<GPRSSubscriptionData>(() => _decode_GPRSSubscriptionData)(_el); },
        "roamingRestrictedInSgsnDueToUnsupportedFeature": (_el: _Element): void => { roamingRestrictedInSgsnDueToUnsupportedFeature = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "networkAccessMode": (_el: _Element): void => { networkAccessMode = $._decode_implicit<NetworkAccessMode>(() => _decode_NetworkAccessMode)(_el); },
        "lsaInformation": (_el: _Element): void => { lsaInformation = $._decode_implicit<LSAInformation>(() => _decode_LSAInformation)(_el); },
        "lmu-Indicator": (_el: _Element): void => { lmu_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "lcsInformation": (_el: _Element): void => { lcsInformation = $._decode_implicit<LCSInformation>(() => _decode_LCSInformation)(_el); },
        "istAlertTimer": (_el: _Element): void => { istAlertTimer = $._decode_implicit<IST_AlertTimerValue>(() => _decode_IST_AlertTimerValue)(_el); },
        "superChargerSupportedInHLR": (_el: _Element): void => { superChargerSupportedInHLR = $._decode_implicit<AgeIndicator>(() => _decode_AgeIndicator)(_el); },
        "mc-SS-Info": (_el: _Element): void => { mc_SS_Info = $._decode_implicit<MC_SS_Info>(() => _decode_MC_SS_Info)(_el); },
        "cs-AllocationRetentionPriority": (_el: _Element): void => { cs_AllocationRetentionPriority = $._decode_implicit<CS_AllocationRetentionPriority>(() => _decode_CS_AllocationRetentionPriority)(_el); },
        "sgsn-CAMEL-SubscriptionInfo": (_el: _Element): void => { sgsn_CAMEL_SubscriptionInfo = $._decode_implicit<SGSN_CAMEL_SubscriptionInfo>(() => _decode_SGSN_CAMEL_SubscriptionInfo)(_el); },
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<ChargingCharacteristics>(() => _decode_ChargingCharacteristics)(_el); },
        "accessRestrictionData": (_el: _Element): void => { accessRestrictionData = $._decode_implicit<AccessRestrictionData>(() => _decode_AccessRestrictionData)(_el); },
        "ics-Indicator": (_el: _Element): void => { ics_Indicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "eps-SubscriptionData": (_el: _Element): void => { eps_SubscriptionData = $._decode_implicit<EPS_SubscriptionData>(() => _decode_EPS_SubscriptionData)(_el); },
        "csg-SubscriptionDataList": (_el: _Element): void => { csg_SubscriptionDataList = $._decode_implicit<CSG_SubscriptionDataList>(() => _decode_CSG_SubscriptionDataList)(_el); },
        "ue-ReachabilityRequestIndicator": (_el: _Element): void => { ue_ReachabilityRequestIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "mme-Name": (_el: _Element): void => { mme_Name = $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity)(_el); },
        "subscribedPeriodicRAUTAUtimer": (_el: _Element): void => { subscribedPeriodicRAUTAUtimer = $._decode_implicit<SubscribedPeriodicRAUTAUtimer>(() => _decode_SubscribedPeriodicRAUTAUtimer)(_el); },
        "vplmnLIPAAllowed": (_el: _Element): void => { vplmnLIPAAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "mdtUserConsent": (_el: _Element): void => { mdtUserConsent = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "subscribedPeriodicLAUtimer": (_el: _Element): void => { subscribedPeriodicLAUtimer = $._decode_implicit<SubscribedPeriodicLAUtimer>(() => _decode_SubscribedPeriodicLAUtimer)(_el); },
        "vplmn-Csg-SubscriptionDataList": (_el: _Element): void => { vplmn_Csg_SubscriptionDataList = $._decode_implicit<VPLMN_CSG_SubscriptionDataList>(() => _decode_VPLMN_CSG_SubscriptionDataList)(_el); },
        "additionalMSISDN": (_el: _Element): void => { additionalMSISDN = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "psAndSMS-OnlyServiceProvision": (_el: _Element): void => { psAndSMS_OnlyServiceProvision = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "smsInSGSNAllowed": (_el: _Element): void => { smsInSGSNAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "cs-to-ps-SRVCC-Allowed-Indicator": (_el: _Element): void => { cs_to_ps_SRVCC_Allowed_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pcscf-Restoration-Request": (_el: _Element): void => { pcscf_Restoration_Request = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "adjacentAccessRestrictionDataList": (_el: _Element): void => { adjacentAccessRestrictionDataList = $._decode_implicit<AdjacentAccessRestrictionDataList>(() => _decode_AdjacentAccessRestrictionDataList)(_el); },
        "imsi-Group-Id-List": (_el: _Element): void => { imsi_Group_Id_List = $._decode_implicit<IMSI_GroupIdList>(() => _decode_IMSI_GroupIdList)(_el); },
        "ueUsageType": (_el: _Element): void => { ueUsageType = $._decode_implicit<UE_UsageType>(() => _decode_UE_UsageType)(_el); },
        "userPlaneIntegrityProtectionIndicator": (_el: _Element): void => { userPlaneIntegrityProtectionIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "dl-Buffering-Suggested-Packet-Count": (_el: _Element): void => { dl_Buffering_Suggested_Packet_Count = $._decode_implicit<DL_Buffering_Suggested_Packet_Count>(() => _decode_DL_Buffering_Suggested_Packet_Count)(_el); },
        "reset-Id-List": (_el: _Element): void => { reset_Id_List = $._decode_implicit<Reset_Id_List>(() => _decode_Reset_Id_List)(_el); },
        "eDRX-Cycle-Length-List": (_el: _Element): void => { eDRX_Cycle_Length_List = $._decode_implicit<EDRX_Cycle_Length_List>(() => _decode_EDRX_Cycle_Length_List)(_el); },
        "ext-AccessRestrictionData": (_el: _Element): void => { ext_AccessRestrictionData = $._decode_implicit<Ext_AccessRestrictionData>(() => _decode_Ext_AccessRestrictionData)(_el); },
        "iab-Operation-Allowed-Indicator": (_el: _Element): void => { iab_Operation_Allowed_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InsertSubscriberDataArg,
        _extension_additions_list_spec_for_InsertSubscriberDataArg,
        _root_component_type_list_2_spec_for_InsertSubscriberDataArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InsertSubscriberDataArg(
        imsi,
        msisdn,
        category,
        subscriberStatus,
        bearerServiceList,
        teleserviceList,
        provisionedSS,
        odb_Data,
        roamingRestrictionDueToUnsupportedFeature,
        regionalSubscriptionData,
        vbsSubscriptionData,
        vgcsSubscriptionData,
        vlrCamelSubscriptionInfo,
        extensionContainer,
        naea_PreferredCI,
        gprsSubscriptionData,
        roamingRestrictedInSgsnDueToUnsupportedFeature,
        networkAccessMode,
        lsaInformation,
        lmu_Indicator,
        lcsInformation,
        istAlertTimer,
        superChargerSupportedInHLR,
        mc_SS_Info,
        cs_AllocationRetentionPriority,
        sgsn_CAMEL_SubscriptionInfo,
        chargingCharacteristics,
        accessRestrictionData,
        ics_Indicator,
        eps_SubscriptionData,
        csg_SubscriptionDataList,
        ue_ReachabilityRequestIndicator,
        sgsn_Number,
        mme_Name,
        subscribedPeriodicRAUTAUtimer,
        vplmnLIPAAllowed,
        mdtUserConsent,
        subscribedPeriodicLAUtimer,
        vplmn_Csg_SubscriptionDataList,
        additionalMSISDN,
        psAndSMS_OnlyServiceProvision,
        smsInSGSNAllowed,
        cs_to_ps_SRVCC_Allowed_Indicator,
        pcscf_Restoration_Request,
        adjacentAccessRestrictionDataList,
        imsi_Group_Id_List,
        ueUsageType,
        userPlaneIntegrityProtectionIndicator,
        dl_Buffering_Suggested_Packet_Count,
        reset_Id_List,
        eDRX_Cycle_Length_List,
        ext_AccessRestrictionData,
        iab_Operation_Allowed_Indicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InsertSubscriberDataArg(el);
}

let _cached_encoder_for_InsertSubscriberDataArg: $.ASN1Encoder<InsertSubscriberDataArg> | null = null;

/**
 * @summary Encodes a(n) InsertSubscriberDataArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InsertSubscriberDataArg, encoded as an ASN.1 Element.
 */
export
function _encode_InsertSubscriberDataArg (value: InsertSubscriberDataArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InsertSubscriberDataArg) { _cached_encoder_for_InsertSubscriberDataArg = function (value: InsertSubscriberDataArg, elGetter: $.ASN1Encoder<InsertSubscriberDataArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Category, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.subscriberStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SubscriberStatus, $.BER)(value.subscriberStatus, $.BER)),
            /* IF_ABSENT  */ ((value.bearerServiceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_BearerServiceList, $.BER)(value.bearerServiceList, $.BER)),
            /* IF_ABSENT  */ ((value.teleserviceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TeleserviceList, $.BER)(value.teleserviceList, $.BER)),
            /* IF_ABSENT  */ ((value.provisionedSS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Ext_SS_InfoList, $.BER)(value.provisionedSS, $.BER)),
            /* IF_ABSENT  */ ((value.odb_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ODB_Data, $.BER)(value.odb_Data, $.BER)),
            /* IF_ABSENT  */ ((value.roamingRestrictionDueToUnsupportedFeature === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.roamingRestrictionDueToUnsupportedFeature, $.BER)),
            /* IF_ABSENT  */ ((value.regionalSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_ZoneCodeList, $.BER)(value.regionalSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.vbsSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_VBSDataList, $.BER)(value.vbsSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.vgcsSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_VGCSDataList, $.BER)(value.vgcsSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.vlrCamelSubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_VlrCamelSubscriptionInfo, $.BER)(value.vlrCamelSubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.naea_PreferredCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_NAEA_PreferredCI, $.BER)(value.naea_PreferredCI, $.BER)),
            /* IF_ABSENT  */ ((value.gprsSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_GPRSSubscriptionData, $.BER)(value.gprsSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.roamingRestrictedInSgsnDueToUnsupportedFeature === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeNull, $.BER)(value.roamingRestrictedInSgsnDueToUnsupportedFeature, $.BER)),
            /* IF_ABSENT  */ ((value.networkAccessMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_NetworkAccessMode, $.BER)(value.networkAccessMode, $.BER)),
            /* IF_ABSENT  */ ((value.lsaInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_LSAInformation, $.BER)(value.lsaInformation, $.BER)),
            /* IF_ABSENT  */ ((value.lmu_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value.lmu_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.lcsInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_LCSInformation, $.BER)(value.lcsInformation, $.BER)),
            /* IF_ABSENT  */ ((value.istAlertTimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_IST_AlertTimerValue, $.BER)(value.istAlertTimer, $.BER)),
            /* IF_ABSENT  */ ((value.superChargerSupportedInHLR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_AgeIndicator, $.BER)(value.superChargerSupportedInHLR, $.BER)),
            /* IF_ABSENT  */ ((value.mc_SS_Info === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_MC_SS_Info, $.BER)(value.mc_SS_Info, $.BER)),
            /* IF_ABSENT  */ ((value.cs_AllocationRetentionPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_CS_AllocationRetentionPriority, $.BER)(value.cs_AllocationRetentionPriority, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_CAMEL_SubscriptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_SGSN_CAMEL_SubscriptionInfo, $.BER)(value.sgsn_CAMEL_SubscriptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.chargingCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_ChargingCharacteristics, $.BER)(value.chargingCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.accessRestrictionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_AccessRestrictionData, $.BER)(value.accessRestrictionData, $.BER)),
            /* IF_ABSENT  */ ((value.ics_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => $._encodeBoolean, $.BER)(value.ics_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.eps_SubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => _encode_EPS_SubscriptionData, $.BER)(value.eps_SubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.csg_SubscriptionDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 32, () => _encode_CSG_SubscriptionDataList, $.BER)(value.csg_SubscriptionDataList, $.BER)),
            /* IF_ABSENT  */ ((value.ue_ReachabilityRequestIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 33, () => $._encodeNull, $.BER)(value.ue_ReachabilityRequestIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 34, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER)),
            /* IF_ABSENT  */ ((value.mme_Name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 35, () => _encode_DiameterIdentity, $.BER)(value.mme_Name, $.BER)),
            /* IF_ABSENT  */ ((value.subscribedPeriodicRAUTAUtimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 36, () => _encode_SubscribedPeriodicRAUTAUtimer, $.BER)(value.subscribedPeriodicRAUTAUtimer, $.BER)),
            /* IF_ABSENT  */ ((value.vplmnLIPAAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 37, () => $._encodeNull, $.BER)(value.vplmnLIPAAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.mdtUserConsent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 38, () => $._encodeBoolean, $.BER)(value.mdtUserConsent, $.BER)),
            /* IF_ABSENT  */ ((value.subscribedPeriodicLAUtimer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 39, () => _encode_SubscribedPeriodicLAUtimer, $.BER)(value.subscribedPeriodicLAUtimer, $.BER)),
            /* IF_ABSENT  */ ((value.vplmn_Csg_SubscriptionDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 40, () => _encode_VPLMN_CSG_SubscriptionDataList, $.BER)(value.vplmn_Csg_SubscriptionDataList, $.BER)),
            /* IF_ABSENT  */ ((value.additionalMSISDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 41, () => _encode_ISDN_AddressString, $.BER)(value.additionalMSISDN, $.BER)),
            /* IF_ABSENT  */ ((value.psAndSMS_OnlyServiceProvision === undefined) ? undefined : $._encode_implicit(_TagClass.context, 42, () => $._encodeNull, $.BER)(value.psAndSMS_OnlyServiceProvision, $.BER)),
            /* IF_ABSENT  */ ((value.smsInSGSNAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 43, () => $._encodeNull, $.BER)(value.smsInSGSNAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.cs_to_ps_SRVCC_Allowed_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 44, () => $._encodeNull, $.BER)(value.cs_to_ps_SRVCC_Allowed_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.pcscf_Restoration_Request === undefined) ? undefined : $._encode_implicit(_TagClass.context, 45, () => $._encodeNull, $.BER)(value.pcscf_Restoration_Request, $.BER)),
            /* IF_ABSENT  */ ((value.adjacentAccessRestrictionDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 46, () => _encode_AdjacentAccessRestrictionDataList, $.BER)(value.adjacentAccessRestrictionDataList, $.BER)),
            /* IF_ABSENT  */ ((value.imsi_Group_Id_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 47, () => _encode_IMSI_GroupIdList, $.BER)(value.imsi_Group_Id_List, $.BER)),
            /* IF_ABSENT  */ ((value.ueUsageType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 48, () => _encode_UE_UsageType, $.BER)(value.ueUsageType, $.BER)),
            /* IF_ABSENT  */ ((value.userPlaneIntegrityProtectionIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 49, () => $._encodeNull, $.BER)(value.userPlaneIntegrityProtectionIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.dl_Buffering_Suggested_Packet_Count === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_DL_Buffering_Suggested_Packet_Count, $.BER)(value.dl_Buffering_Suggested_Packet_Count, $.BER)),
            /* IF_ABSENT  */ ((value.reset_Id_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => _encode_Reset_Id_List, $.BER)(value.reset_Id_List, $.BER)),
            /* IF_ABSENT  */ ((value.eDRX_Cycle_Length_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_EDRX_Cycle_Length_List, $.BER)(value.eDRX_Cycle_Length_List, $.BER)),
            /* IF_ABSENT  */ ((value.ext_AccessRestrictionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => _encode_Ext_AccessRestrictionData, $.BER)(value.ext_AccessRestrictionData, $.BER)),
            /* IF_ABSENT  */ ((value.iab_Operation_Allowed_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 54, () => $._encodeNull, $.BER)(value.iab_Operation_Allowed_Indicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InsertSubscriberDataArg(value, elGetter);
}


/* eslint-enable */
