/* eslint-disable */
import {
    BOOLEAN,
    GraphicString,
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
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
// export { RecordType, RecordType_moCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, moCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_roamingRecord /* IMPORTED_LONG_NAMED_INTEGER */, roamingRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_incGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, incGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_outGatewayRecord /* IMPORTED_LONG_NAMED_INTEGER */, outGatewayRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_transitCallRecord /* IMPORTED_LONG_NAMED_INTEGER */, transitCallRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moSMSIWRecord /* IMPORTED_LONG_NAMED_INTEGER */, moSMSIWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtSMSGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtSMSGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ssActionRecord /* IMPORTED_LONG_NAMED_INTEGER */, ssActionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_hlrIntRecord /* IMPORTED_LONG_NAMED_INTEGER */, hlrIntRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateHLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateHLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_locUpdateVLRRecord /* IMPORTED_LONG_NAMED_INTEGER */, locUpdateVLRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_commonEquipRecord /* IMPORTED_LONG_NAMED_INTEGER */, commonEquipRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, moTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtTraceRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtTraceRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_termCAMELRecord /* IMPORTED_LONG_NAMED_INTEGER */, termCAMELRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnPDPRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnPDPRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMMRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMMRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mtLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, mtLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_moLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, moLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_niLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, niLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMTLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMTLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMOLCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMOLCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnNILCSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnNILCSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4FRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4FRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO4RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO4RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMO1RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMO1RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMOMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMOMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4FRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4FRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1NRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1NRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RtRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RtRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1AFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1AFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR1RRRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR1RRRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMR4RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMR4RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMRMDRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMRMDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1VRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1VRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1URecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1URecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMBx1DRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMBx1DRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7SRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7SRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7CRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7CRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7DRRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7DRRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRqRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRqRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mM7RRsRecord /* IMPORTED_LONG_NAMED_INTEGER */, mM7RRsRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mRFCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mRFCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_bGCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, bGCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aSRecord /* IMPORTED_LONG_NAMED_INTEGER */, aSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eCSCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, eCSCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iBCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, iBCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_aTCFRecord /* IMPORTED_LONG_NAMED_INTEGER */, aTCFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGMORecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSRGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSRGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSHGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSHGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSVGMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSVGMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_lCSGNIRecord /* IMPORTED_LONG_NAMED_INTEGER */, lCSGNIRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sgsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, sgsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ggsnMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, ggsnMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_gwMBMSRecord /* IMPORTED_LONG_NAMED_INTEGER */, gwMBMSRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sUBBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, sUBBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cONTENTBMSCRecord /* IMPORTED_LONG_NAMED_INTEGER */, cONTENTBMSCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, pPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPFRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, sGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pGWRecord /* IMPORTED_LONG_NAMED_INTEGER */, pGWRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tDFRecord /* IMPORTED_LONG_NAMED_INTEGER */, tDFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iPERecord /* IMPORTED_LONG_NAMED_INTEGER */, iPERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_ePDGRecord /* IMPORTED_LONG_NAMED_INTEGER */, ePDGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_tWAGRecord /* IMPORTED_LONG_NAMED_INTEGER */, tWAGRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTelRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTelRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mSCsRVCCRecord /* IMPORTED_LONG_NAMED_INTEGER */, mSCsRVCCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mMTRFRecord /* IMPORTED_LONG_NAMED_INTEGER */, mMTRFRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iCSRegisterRecord /* IMPORTED_LONG_NAMED_INTEGER */, iCSRegisterRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, sCSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFEDRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFEDRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_pFDCRecord /* IMPORTED_LONG_NAMED_INTEGER */, pFDCRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mECORecord /* IMPORTED_LONG_NAMED_INTEGER */, mECORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_mERERecord /* IMPORTED_LONG_NAMED_INTEGER */, mERERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSCERecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_cPDTSNNRecord /* IMPORTED_LONG_NAMED_INTEGER */, cPDTSNNRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCDVTT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCDVTT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_sCSMOT4Record /* IMPORTED_LONG_NAMED_INTEGER */, sCSMOT4Record /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMORecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMORecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_iSMSMTRecord /* IMPORTED_LONG_NAMED_INTEGER */, iSMSMTRecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_eASCERecord /* IMPORTED_LONG_NAMED_INTEGER */, eASCERecord /* IMPORTED_SHORT_NAMED_INTEGER */, RecordType_chargingFunctionRecord /* IMPORTED_LONG_NAMED_INTEGER */, chargingFunctionRecord /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
// export { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
// export { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { LocationChange, _decode_LocationChange, _encode_LocationChange } from "../CSChargingDataTypes/LocationChange.ta.mjs";
// export { LocationChange, _decode_LocationChange, _encode_LocationChange } from "../CSChargingDataTypes/LocationChange.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
// export { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { TransparencyInd, _decode_TransparencyInd, _encode_TransparencyInd, _enum_for_TransparencyInd } from "../CSChargingDataTypes/TransparencyInd.ta.mjs";
// export { TransparencyInd, _enum_for_TransparencyInd, TransparencyInd_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, TransparencyInd_nonTransparent /* IMPORTED_LONG_ENUMERATION_ITEM */, nonTransparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TransparencyInd, _encode_TransparencyInd } from "../CSChargingDataTypes/TransparencyInd.ta.mjs";
import { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
// export { ChangeOfService, _decode_ChangeOfService, _encode_ChangeOfService } from "../CSChargingDataTypes/ChangeOfService.ta.mjs";
import { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
// export { SuppServiceUsed, _decode_SuppServiceUsed, _encode_SuppServiceUsed } from "../CSChargingDataTypes/SuppServiceUsed.ta.mjs";
import { AOCParameters, _decode_AOCParameters, _encode_AOCParameters } from "../CSChargingDataTypes/AOCParameters.ta.mjs";
// export { AOCParameters, _decode_AOCParameters, _encode_AOCParameters } from "../CSChargingDataTypes/AOCParameters.ta.mjs";
import { AOCParmChange, _decode_AOCParmChange, _encode_AOCParmChange } from "../CSChargingDataTypes/AOCParmChange.ta.mjs";
// export { AOCParmChange, _decode_AOCParmChange, _encode_AOCParmChange } from "../CSChargingDataTypes/AOCParmChange.ta.mjs";
import { ChangeOfClassmark, _decode_ChangeOfClassmark, _encode_ChangeOfClassmark } from "../CSChargingDataTypes/ChangeOfClassmark.ta.mjs";
// export { ChangeOfClassmark, _decode_ChangeOfClassmark, _encode_ChangeOfClassmark } from "../CSChargingDataTypes/ChangeOfClassmark.ta.mjs";
import { RadioChanRequested, _decode_RadioChanRequested, _encode_RadioChanRequested, _enum_for_RadioChanRequested } from "../CSChargingDataTypes/RadioChanRequested.ta.mjs";
// export { RadioChanRequested, _enum_for_RadioChanRequested, RadioChanRequested_halfRateChannel /* IMPORTED_LONG_ENUMERATION_ITEM */, halfRateChannel /* IMPORTED_SHORT_ENUMERATION_ITEM */, RadioChanRequested_fullRateChannel /* IMPORTED_LONG_ENUMERATION_ITEM */, fullRateChannel /* IMPORTED_SHORT_ENUMERATION_ITEM */, RadioChanRequested_dualHalfRatePreferred /* IMPORTED_LONG_ENUMERATION_ITEM */, dualHalfRatePreferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, RadioChanRequested_dualFullRatePreferred /* IMPORTED_LONG_ENUMERATION_ITEM */, dualFullRatePreferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RadioChanRequested, _encode_RadioChanRequested } from "../CSChargingDataTypes/RadioChanRequested.ta.mjs";
import { TrafficChannel, _decode_TrafficChannel, _encode_TrafficChannel, _enum_for_TrafficChannel } from "../CSChargingDataTypes/TrafficChannel.ta.mjs";
// export { TrafficChannel, _enum_for_TrafficChannel, TrafficChannel_fullRate /* IMPORTED_LONG_ENUMERATION_ITEM */, fullRate /* IMPORTED_SHORT_ENUMERATION_ITEM */, TrafficChannel_halfRate /* IMPORTED_LONG_ENUMERATION_ITEM */, halfRate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TrafficChannel, _encode_TrafficChannel } from "../CSChargingDataTypes/TrafficChannel.ta.mjs";
import { ChangeOfRadioChannel, _decode_ChangeOfRadioChannel, _encode_ChangeOfRadioChannel } from "../CSChargingDataTypes/ChangeOfRadioChannel.ta.mjs";
// export { ChangeOfRadioChannel, _decode_ChangeOfRadioChannel, _encode_ChangeOfRadioChannel } from "../CSChargingDataTypes/ChangeOfRadioChannel.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
// export { CauseForTerm, CauseForTerm_normalRelease /* IMPORTED_LONG_NAMED_INTEGER */, normalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_partialRecord /* IMPORTED_LONG_NAMED_INTEGER */, partialRecord /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_partialRecordCallReestablishment /* IMPORTED_LONG_NAMED_INTEGER */, partialRecordCallReestablishment /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unsuccessfulCallAttempt /* IMPORTED_LONG_NAMED_INTEGER */, unsuccessfulCallAttempt /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_cAMELInitCallRelease /* IMPORTED_LONG_NAMED_INTEGER */, cAMELInitCallRelease /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unauthorizedRequestingNetwork /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedRequestingNetwork /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unauthorizedLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unauthorizedLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_positionMethodFailure /* IMPORTED_LONG_NAMED_INTEGER */, positionMethodFailure /* IMPORTED_SHORT_NAMED_INTEGER */, CauseForTerm_unknownOrUnreachableLCSClient /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrUnreachableLCSClient /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
// export { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { AdditionalChgInfo, _decode_AdditionalChgInfo, _encode_AdditionalChgInfo } from "../CSChargingDataTypes/AdditionalChgInfo.ta.mjs";
// export { AdditionalChgInfo, _decode_AdditionalChgInfo, _encode_AdditionalChgInfo } from "../CSChargingDataTypes/AdditionalChgInfo.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
// export { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { CAMELInitCFIndicator, _decode_CAMELInitCFIndicator, _encode_CAMELInitCFIndicator, _enum_for_CAMELInitCFIndicator } from "../CSChargingDataTypes/CAMELInitCFIndicator.ta.mjs";
// export { CAMELInitCFIndicator, _enum_for_CAMELInitCFIndicator, CAMELInitCFIndicator_noCAMELCallForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, noCAMELCallForwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, CAMELInitCFIndicator_cAMELCallForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, cAMELCallForwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CAMELInitCFIndicator, _encode_CAMELInitCFIndicator } from "../CSChargingDataTypes/CAMELInitCFIndicator.ta.mjs";
import { DefaultCallHandling, _decode_DefaultCallHandling, _encode_DefaultCallHandling, _enum_for_DefaultCallHandling } from "../CSChargingDataTypes/DefaultCallHandling.ta.mjs";
// export { DefaultCallHandling, _enum_for_DefaultCallHandling, DefaultCallHandling_continueCall /* IMPORTED_LONG_ENUMERATION_ITEM */, continueCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultCallHandling_releaseCall /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultCallHandling, _encode_DefaultCallHandling } from "../CSChargingDataTypes/DefaultCallHandling.ta.mjs";
import { HSCSDParmsChange, _decode_HSCSDParmsChange, _encode_HSCSDParmsChange } from "../CSChargingDataTypes/HSCSDParmsChange.ta.mjs";
// export { HSCSDParmsChange, _decode_HSCSDParmsChange, _encode_HSCSDParmsChange } from "../CSChargingDataTypes/HSCSDParmsChange.ta.mjs";
import { Fnur, _decode_Fnur, _encode_Fnur, _enum_for_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";
// export { Fnur, _enum_for_Fnur, Fnur_fnurNotApplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, fnurNotApplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur9600_BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur9600_BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur14400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur14400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur19200BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur19200BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur28800BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur28800BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur38400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur38400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur48000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur48000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur56000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur56000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur64000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur64000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur33600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur33600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur32000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur32000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, Fnur_fnur31200BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, fnur31200BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Fnur, _encode_Fnur } from "../CSChargingDataTypes/Fnur.ta.mjs";
import { AiurRequested, _decode_AiurRequested, _encode_AiurRequested, _enum_for_AiurRequested } from "../CSChargingDataTypes/AiurRequested.ta.mjs";
// export { AiurRequested, _enum_for_AiurRequested, AiurRequested_aiur09600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur09600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur14400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur14400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur19200BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur19200BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur28800BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur28800BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur38400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur38400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur43200BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur43200BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur57600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur57600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur38400BitsPerSecond1 /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur38400BitsPerSecond1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur38400BitsPerSecond2 /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur38400BitsPerSecond2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur38400BitsPerSecond3 /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur38400BitsPerSecond3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AiurRequested_aiur38400BitsPerSecond4 /* IMPORTED_LONG_ENUMERATION_ITEM */, aiur38400BitsPerSecond4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AiurRequested, _encode_AiurRequested } from "../CSChargingDataTypes/AiurRequested.ta.mjs";
import { ChannelCoding, _decode_ChannelCoding, _encode_ChannelCoding, _enum_for_ChannelCoding } from "../CSChargingDataTypes/ChannelCoding.ta.mjs";
// export { ChannelCoding, _enum_for_ChannelCoding, ChannelCoding_tchF4800 /* IMPORTED_LONG_ENUMERATION_ITEM */, tchF4800 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChannelCoding_tchF9600 /* IMPORTED_LONG_ENUMERATION_ITEM */, tchF9600 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChannelCoding_tchF14400 /* IMPORTED_LONG_ENUMERATION_ITEM */, tchF14400 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChannelCoding, _encode_ChannelCoding } from "../CSChargingDataTypes/ChannelCoding.ta.mjs";
import { MOCallRecord_levelOfCAMELService, _decode_MOCallRecord_levelOfCAMELService, _encode_MOCallRecord_levelOfCAMELService } from "../CSChargingDataTypes/MOCallRecord-levelOfCAMELService.ta.mjs";
// export { MOCallRecord_levelOfCAMELService, MOCallRecord_levelOfCAMELService_basic /* IMPORTED_LONG_NAMED_BIT */, basic /* IMPORTED_SHORT_NAMED_BIT */, MOCallRecord_levelOfCAMELService_callDurationSupervision /* IMPORTED_LONG_NAMED_BIT */, callDurationSupervision /* IMPORTED_SHORT_NAMED_BIT */, MOCallRecord_levelOfCAMELService_onlineCharging /* IMPORTED_LONG_NAMED_BIT */, onlineCharging /* IMPORTED_SHORT_NAMED_BIT */, _decode_MOCallRecord_levelOfCAMELService, _encode_MOCallRecord_levelOfCAMELService } from "../CSChargingDataTypes/MOCallRecord-levelOfCAMELService.ta.mjs";
import { CAMELInformation, _decode_CAMELInformation, _encode_CAMELInformation } from "../CSChargingDataTypes/CAMELInformation.ta.mjs";
// export { CAMELInformation, _decode_CAMELInformation, _encode_CAMELInformation } from "../CSChargingDataTypes/CAMELInformation.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
// export { SystemType, _enum_for_SystemType, SystemType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, SystemType_iuUTRAN /* IMPORTED_LONG_ENUMERATION_ITEM */, iuUTRAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, SystemType_gERAN /* IMPORTED_LONG_ENUMERATION_ITEM */, gERAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SystemType, _encode_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { MOCallRecord_lrnSoInd, _decode_MOCallRecord_lrnSoInd, _encode_MOCallRecord_lrnSoInd } from "../CSChargingDataTypes/MOCallRecord-lrnSoInd.ta.mjs";
// export { MOCallRecord_lrnSoInd, MOCallRecord_lrnSoInd_lRN_NP_Database /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnSoInd_switchingSystemData /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnSoInd_incomingsignaling /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnSoInd_unknown /* IMPORTED_LONG_NAMED_INTEGER */, _decode_MOCallRecord_lrnSoInd, _encode_MOCallRecord_lrnSoInd } from "../CSChargingDataTypes/MOCallRecord-lrnSoInd.ta.mjs";
import { MOCallRecord_lrnQuryStatus, _decode_MOCallRecord_lrnQuryStatus, _encode_MOCallRecord_lrnQuryStatus } from "../CSChargingDataTypes/MOCallRecord-lrnQuryStatus.ta.mjs";
// export { MOCallRecord_lrnQuryStatus, MOCallRecord_lrnQuryStatus_successfulQuery /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnQuryStatus_noQueryResponseMsg /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnQuryStatus_queryProtocolErr /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnQuryStatus_queryResponseDataErr /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnQuryStatus_queryRejected /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnQuryStatus_queryNotPerformed /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_lrnQuryStatus_queryUnsuccessful /* IMPORTED_LONG_NAMED_INTEGER */, _decode_MOCallRecord_lrnQuryStatus, _encode_MOCallRecord_lrnQuryStatus } from "../CSChargingDataTypes/MOCallRecord-lrnQuryStatus.ta.mjs";
import { MOCallRecord_jIPSoInd, _decode_MOCallRecord_jIPSoInd, _encode_MOCallRecord_jIPSoInd } from "../CSChargingDataTypes/MOCallRecord-jIPSoInd.ta.mjs";
// export { MOCallRecord_jIPSoInd, MOCallRecord_jIPSoInd_lRN_NP_Database /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPSoInd_switchingSystemData /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPSoInd_incomingsignaling /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPSoInd_unknown /* IMPORTED_LONG_NAMED_INTEGER */, _decode_MOCallRecord_jIPSoInd, _encode_MOCallRecord_jIPSoInd } from "../CSChargingDataTypes/MOCallRecord-jIPSoInd.ta.mjs";
import { MOCallRecord_jIPQuryStatus, _decode_MOCallRecord_jIPQuryStatus, _encode_MOCallRecord_jIPQuryStatus } from "../CSChargingDataTypes/MOCallRecord-jIPQuryStatus.ta.mjs";
// export { MOCallRecord_jIPQuryStatus, MOCallRecord_jIPQuryStatus_successfulQuery /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPQuryStatus_noQueryResponseMsg /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPQuryStatus_queryProtocolErr /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPQuryStatus_queryResponseDataErr /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPQuryStatus_queryRejected /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPQuryStatus_queryNotPerformed /* IMPORTED_LONG_NAMED_INTEGER */, MOCallRecord_jIPQuryStatus_queryUnsuccessful /* IMPORTED_LONG_NAMED_INTEGER */, _decode_MOCallRecord_jIPQuryStatus, _encode_MOCallRecord_jIPQuryStatus } from "../CSChargingDataTypes/MOCallRecord-jIPQuryStatus.ta.mjs";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType, _enum_for_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";
// export { PartialRecordType, _enum_for_PartialRecordType, PartialRecordType_timeLimit /* IMPORTED_LONG_ENUMERATION_ITEM */, timeLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_serviceChange /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_locationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, locationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_classmarkChange /* IMPORTED_LONG_ENUMERATION_ITEM */, classmarkChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_aocParmChange /* IMPORTED_LONG_ENUMERATION_ITEM */, aocParmChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_radioChannelChange /* IMPORTED_LONG_ENUMERATION_ITEM */, radioChannelChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_hSCSDParmChange /* IMPORTED_LONG_ENUMERATION_ITEM */, hSCSDParmChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_changeOfCAMELDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, changeOfCAMELDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartialRecordType, _encode_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";
import { GuaranteedBitRate, _decode_GuaranteedBitRate, _encode_GuaranteedBitRate, _enum_for_GuaranteedBitRate } from "../CSChargingDataTypes/GuaranteedBitRate.ta.mjs";
// export { GuaranteedBitRate, _enum_for_GuaranteedBitRate, GuaranteedBitRate_gbr14400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr14400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuaranteedBitRate_gbr28800BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr28800BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuaranteedBitRate_gbr32000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr32000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuaranteedBitRate_gbr33600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr33600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuaranteedBitRate_gbr56000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr56000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuaranteedBitRate_gbr57600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr57600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, GuaranteedBitRate_gbr64000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, gbr64000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GuaranteedBitRate, _encode_GuaranteedBitRate } from "../CSChargingDataTypes/GuaranteedBitRate.ta.mjs";
import { MaximumBitRate, _decode_MaximumBitRate, _encode_MaximumBitRate, _enum_for_MaximumBitRate } from "../CSChargingDataTypes/MaximumBitRate.ta.mjs";
// export { MaximumBitRate, _enum_for_MaximumBitRate, MaximumBitRate_mbr14400BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, mbr14400BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, MaximumBitRate_mbr28800BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, mbr28800BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, MaximumBitRate_mbr32000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, mbr32000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, MaximumBitRate_mbr33600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, mbr33600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, MaximumBitRate_mbr56000BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, mbr56000BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, MaximumBitRate_mbr57600BitsPerSecond /* IMPORTED_LONG_ENUMERATION_ITEM */, mbr57600BitsPerSecond /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MaximumBitRate, _encode_MaximumBitRate } from "../CSChargingDataTypes/MaximumBitRate.ta.mjs";
import { ReasonForServiceChange, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange, _enum_for_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";
// export { ReasonForServiceChange, _enum_for_ReasonForServiceChange, ReasonForServiceChange_msubInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, msubInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForServiceChange_mscInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, mscInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForServiceChange_callSetupFallBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callSetupFallBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForServiceChange_callSetupChangeOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, callSetupChangeOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReasonForServiceChange, _encode_ReasonForServiceChange } from "../CSChargingDataTypes/ReasonForServiceChange.ta.mjs";


/**
 * @summary MOCallRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord ::= SET {
 *    recordType                [0] IMPLICIT RecordType,
 *    servedIMSI                [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ) OPTIONAL,
 *    servedIMEI                [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN              [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    callingNumber             [4] IMPLICIT OCTET STRING OPTIONAL,
 *    calledNumber              [5] IMPLICIT OCTET STRING OPTIONAL,
 *    translatedNumber          [6] IMPLICIT OCTET STRING OPTIONAL,
 *    connectedNumber           [7] IMPLICIT OCTET STRING OPTIONAL,
 *    roamingNumber             [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity           [9] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    mscIncomingTKGP           [10] TrunkGroup OPTIONAL,
 *    mscOutgoingTKGP           [11] TrunkGroup OPTIONAL,
 *    location                  [12] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    changeOfLocation          [13] IMPLICIT SEQUENCE  OF
 *       LocationChange OPTIONAL,
 *    basicService              [14] BasicService OPTIONAL,
 *    transparencyIndicator     [15] IMPLICIT TransparencyInd OPTIONAL,
 *    changeOfService           [16] IMPLICIT SEQUENCE  OF
 *       ChangeOfService OPTIONAL,
 *    supplServicesUsed         [17] IMPLICIT SEQUENCE  OF
 *       SuppServiceUsed OPTIONAL,
 *    aocParameters             [18] IMPLICIT AOCParameters OPTIONAL,
 *    changeOfAOCParms          [19] IMPLICIT SEQUENCE  OF
 *       AOCParmChange OPTIONAL,
 *    msClassmark               [20] IMPLICIT OCTET STRING OPTIONAL,
 *    changeOfClassmark         [21] IMPLICIT ChangeOfClassmark OPTIONAL,
 *    seizureTime               [22] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime                [23] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime               [24] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration              [25] IMPLICIT INTEGER,
 *    dataVolume                [26] IMPLICIT INTEGER OPTIONAL,
 *    radioChanRequested        [27] IMPLICIT RadioChanRequested OPTIONAL,
 *    radioChanUsed             [28] IMPLICIT TrafficChannel OPTIONAL,
 *    changeOfRadioChan         [29] IMPLICIT ChangeOfRadioChannel OPTIONAL,
 *    causeForTerm              [30] IMPLICIT CauseForTerm,
 *    diagnostics               [31] HLRIntResult OPTIONAL,
 *    callReference             [32] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ),
 *    sequenceNumber            [33] IMPLICIT INTEGER OPTIONAL,
 *    additionalChgInfo         [34] IMPLICIT AdditionalChgInfo OPTIONAL,
 *    recordExtensions          [35] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    gsm-SCFAddress            [36] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey                [37] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    networkCallReference      [38] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    mSCAddress                [39] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    cAMELInitCFIndicator      [40] IMPLICIT CAMELInitCFIndicator OPTIONAL,
 *    defaultCallHandling       [41] IMPLICIT DefaultCallHandling OPTIONAL,
 *    hSCSDChanRequested        [42] IMPLICIT INTEGER OPTIONAL,
 *    hSCSDChanAllocated        [43] IMPLICIT INTEGER OPTIONAL,
 *    changeOfHSCSDParms        [44] IMPLICIT SEQUENCE  OF
 *       HSCSDParmsChange OPTIONAL,
 *    fnur                      [45] IMPLICIT Fnur OPTIONAL,
 *    aiurRequested             [46] IMPLICIT AiurRequested OPTIONAL,
 *    chanCodingsAcceptable     [47] IMPLICIT SEQUENCE  OF
 *       ChannelCoding OPTIONAL,
 *    chanCodingUsed            [48] IMPLICIT ChannelCoding OPTIONAL,
 *    speechVersionSupported    [49] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    speechVersionUsed         [50] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    numberOfDPEncountered     [51] IMPLICIT INTEGER OPTIONAL,
 *    levelOfCAMELService       [52] IMPLICIT BIT STRING {
 *       basic  (0 ),
 *       callDurationSupervision  (1 ),
 *       onlineCharging  (2 )} OPTIONAL,
 *    freeFormatData            [53] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    cAMELCallLegInformation   [54] IMPLICIT SEQUENCE  OF
 *       CAMELInformation OPTIONAL,
 *    freeFormatDataAppend      [55] IMPLICIT BOOLEAN OPTIONAL,
 *    defaultCallHandling-2     [56] IMPLICIT DefaultCallHandling OPTIONAL,
 *    gsm-SCFAddress-2          [57] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    serviceKey-2              [58] IMPLICIT INTEGER ( 0 .. 2147483647 ) OPTIONAL,
 *    freeFormatData-2          [59] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    freeFormatDataAppend-2    [60] IMPLICIT BOOLEAN OPTIONAL,
 *    systemType                [61] IMPLICIT SystemType OPTIONAL,
 *    rateIndication            [62] IMPLICIT OCTET STRING ( SIZE( 1 ) ) OPTIONAL,
 *    locationRoutNum           [63] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    lrnSoInd                  [64] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    lrnQuryStatus             [65] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    jIPPara                   [66] IMPLICIT OCTET STRING ( SIZE( 5 ) ) OPTIONAL,
 *    jIPSoInd                  [67] IMPLICIT INTEGER {
 *       lRN-NP-Database        ( 1 ),
 *       switchingSystemData    ( 2 ),
 *       incomingsignaling      ( 3 ),
 *       unknown                ( 9 )} OPTIONAL,
 *    jIPQuryStatus             [68] IMPLICIT INTEGER {
 *       successfulQuery         ( 1 ),
 *       noQueryResponseMsg      ( 2 ),
 *       queryProtocolErr        ( 4 ),
 *       queryResponseDataErr    ( 5 ),
 *       queryRejected           ( 6 ),
 *       queryNotPerformed       ( 9 ),
 *       queryUnsuccessful       ( 99 )} OPTIONAL,
 *    partialRecordType         [69] IMPLICIT PartialRecordType OPTIONAL,
 *    guaranteedBitRate         [70] IMPLICIT GuaranteedBitRate OPTIONAL,
 *    maximumBitRate            [71] IMPLICIT MaximumBitRate OPTIONAL,
 *    redial                    [72] IMPLICIT BOOLEAN OPTIONAL,
 *    reasonForServiceChange    [73] IMPLICIT ReasonForServiceChange OPTIONAL,
 *    serviceChangeInitiator    [74] IMPLICIT BOOLEAN OPTIONAL,
 *    iCSI2ActiveFlag           [75] IMPLICIT NULL OPTIONAL,
 *    iMS-Charging-Identifier   [76] IMPLICIT OCTET STRING OPTIONAL,
 *    privateUserID             [77] IMPLICIT GraphicString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MOCallRecord {
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
     * @summary `servedIMEI`.
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `calledNumber`.
     * @public
     * @readonly
     */
    readonly calledNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `translatedNumber`.
     * @public
     * @readonly
     */
    readonly translatedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `connectedNumber`.
     * @public
     * @readonly
     */
    readonly connectedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingNumber`.
     * @public
     * @readonly
     */
    readonly roamingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordingEntity`.
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `mscIncomingTKGP`.
     * @public
     * @readonly
     */
    readonly mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `location`.
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `changeOfLocation`.
     * @public
     * @readonly
     */
    readonly changeOfLocation: OPTIONAL<LocationChange[]>;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `transparencyIndicator`.
     * @public
     * @readonly
     */
    readonly transparencyIndicator: OPTIONAL<TransparencyInd>;
    /**
     * @summary `changeOfService`.
     * @public
     * @readonly
     */
    readonly changeOfService: OPTIONAL<ChangeOfService[]>;
    /**
     * @summary `supplServicesUsed`.
     * @public
     * @readonly
     */
    readonly supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    /**
     * @summary `aocParameters`.
     * @public
     * @readonly
     */
    readonly aocParameters: OPTIONAL<AOCParameters>;
    /**
     * @summary `changeOfAOCParms`.
     * @public
     * @readonly
     */
    readonly changeOfAOCParms: OPTIONAL<AOCParmChange[]>;
    /**
     * @summary `msClassmark`.
     * @public
     * @readonly
     */
    readonly msClassmark: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `changeOfClassmark`.
     * @public
     * @readonly
     */
    readonly changeOfClassmark: OPTIONAL<ChangeOfClassmark>;
    /**
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @public
     * @readonly
     */
    readonly callDuration: INTEGER;
    /**
     * @summary `dataVolume`.
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `radioChanRequested`.
     * @public
     * @readonly
     */
    readonly radioChanRequested: OPTIONAL<RadioChanRequested>;
    /**
     * @summary `radioChanUsed`.
     * @public
     * @readonly
     */
    readonly radioChanUsed: OPTIONAL<TrafficChannel>;
    /**
     * @summary `changeOfRadioChan`.
     * @public
     * @readonly
     */
    readonly changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>;
    /**
     * @summary `causeForTerm`.
     * @public
     * @readonly
     */
    readonly causeForTerm: CauseForTerm;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<HLRIntResult>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OCTET_STRING;
    /**
     * @summary `sequenceNumber`.
     * @public
     * @readonly
     */
    readonly sequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `additionalChgInfo`.
     * @public
     * @readonly
     */
    readonly additionalChgInfo: OPTIONAL<AdditionalChgInfo>;
    /**
     * @summary `recordExtensions`.
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `gsm_SCFAddress`.
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: OPTIONAL<INTEGER>;
    /**
     * @summary `networkCallReference`.
     * @public
     * @readonly
     */
    readonly networkCallReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mSCAddress`.
     * @public
     * @readonly
     */
    readonly mSCAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELInitCFIndicator`.
     * @public
     * @readonly
     */
    readonly cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    /**
     * @summary `defaultCallHandling`.
     * @public
     * @readonly
     */
    readonly defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `hSCSDChanRequested`.
     * @public
     * @readonly
     */
    readonly hSCSDChanRequested: OPTIONAL<INTEGER>;
    /**
     * @summary `hSCSDChanAllocated`.
     * @public
     * @readonly
     */
    readonly hSCSDChanAllocated: OPTIONAL<INTEGER>;
    /**
     * @summary `changeOfHSCSDParms`.
     * @public
     * @readonly
     */
    readonly changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>;
    /**
     * @summary `fnur`.
     * @public
     * @readonly
     */
    readonly fnur: OPTIONAL<Fnur>;
    /**
     * @summary `aiurRequested`.
     * @public
     * @readonly
     */
    readonly aiurRequested: OPTIONAL<AiurRequested>;
    /**
     * @summary `chanCodingsAcceptable`.
     * @public
     * @readonly
     */
    readonly chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>;
    /**
     * @summary `chanCodingUsed`.
     * @public
     * @readonly
     */
    readonly chanCodingUsed: OPTIONAL<ChannelCoding>;
    /**
     * @summary `speechVersionSupported`.
     * @public
     * @readonly
     */
    readonly speechVersionSupported: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `speechVersionUsed`.
     * @public
     * @readonly
     */
    readonly speechVersionUsed: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `numberOfDPEncountered`.
     * @public
     * @readonly
     */
    readonly numberOfDPEncountered: OPTIONAL<INTEGER>;
    /**
     * @summary `levelOfCAMELService`.
     * @public
     * @readonly
     */
    readonly levelOfCAMELService: OPTIONAL<MOCallRecord_levelOfCAMELService>;
    /**
     * @summary `freeFormatData`.
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELCallLegInformation`.
     * @public
     * @readonly
     */
    readonly cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    /**
     * @summary `freeFormatDataAppend`.
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `defaultCallHandling_2`.
     * @public
     * @readonly
     */
    readonly defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    /**
     * @summary `gsm_SCFAddress_2`.
     * @public
     * @readonly
     */
    readonly gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `serviceKey_2`.
     * @public
     * @readonly
     */
    readonly serviceKey_2: OPTIONAL<INTEGER>;
    /**
     * @summary `freeFormatData_2`.
     * @public
     * @readonly
     */
    readonly freeFormatData_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `freeFormatDataAppend_2`.
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    /**
     * @summary `systemType`.
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `rateIndication`.
     * @public
     * @readonly
     */
    readonly rateIndication: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `locationRoutNum`.
     * @public
     * @readonly
     */
    readonly locationRoutNum: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lrnSoInd`.
     * @public
     * @readonly
     */
    readonly lrnSoInd: OPTIONAL<MOCallRecord_lrnSoInd>;
    /**
     * @summary `lrnQuryStatus`.
     * @public
     * @readonly
     */
    readonly lrnQuryStatus: OPTIONAL<MOCallRecord_lrnQuryStatus>;
    /**
     * @summary `jIPPara`.
     * @public
     * @readonly
     */
    readonly jIPPara: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `jIPSoInd`.
     * @public
     * @readonly
     */
    readonly jIPSoInd: OPTIONAL<MOCallRecord_jIPSoInd>;
    /**
     * @summary `jIPQuryStatus`.
     * @public
     * @readonly
     */
    readonly jIPQuryStatus: OPTIONAL<MOCallRecord_jIPQuryStatus>;
    /**
     * @summary `partialRecordType`.
     * @public
     * @readonly
     */
    readonly partialRecordType: OPTIONAL<PartialRecordType>;
    /**
     * @summary `guaranteedBitRate`.
     * @public
     * @readonly
     */
    readonly guaranteedBitRate: OPTIONAL<GuaranteedBitRate>;
    /**
     * @summary `maximumBitRate`.
     * @public
     * @readonly
     */
    readonly maximumBitRate: OPTIONAL<MaximumBitRate>;
    /**
     * @summary `redial`.
     * @public
     * @readonly
     */
    readonly redial: OPTIONAL<BOOLEAN>;
    /**
     * @summary `reasonForServiceChange`.
     * @public
     * @readonly
     */
    readonly reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    /**
     * @summary `serviceChangeInitiator`.
     * @public
     * @readonly
     */
    readonly serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iCSI2ActiveFlag`.
     * @public
     * @readonly
     */
    readonly iCSI2ActiveFlag: OPTIONAL<NULL>;
    /**
     * @summary `iMS_Charging_Identifier`.
     * @public
     * @readonly
     */
    readonly iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `privateUserID`.
     * @public
     * @readonly
     */
    readonly privateUserID: OPTIONAL<GraphicString>;

    constructor (
        recordType: RecordType,
        servedIMSI: OPTIONAL<OCTET_STRING>,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        callingNumber: OPTIONAL<OCTET_STRING>,
        calledNumber: OPTIONAL<OCTET_STRING>,
        translatedNumber: OPTIONAL<OCTET_STRING>,
        connectedNumber: OPTIONAL<OCTET_STRING>,
        roamingNumber: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        mscIncomingTKGP: OPTIONAL<TrunkGroup>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        location: OPTIONAL<LocationAreaAndCell>,
        changeOfLocation: OPTIONAL<LocationChange[]>,
        basicService: OPTIONAL<BasicService>,
        transparencyIndicator: OPTIONAL<TransparencyInd>,
        changeOfService: OPTIONAL<ChangeOfService[]>,
        supplServicesUsed: OPTIONAL<SuppServiceUsed[]>,
        aocParameters: OPTIONAL<AOCParameters>,
        changeOfAOCParms: OPTIONAL<AOCParmChange[]>,
        msClassmark: OPTIONAL<OCTET_STRING>,
        changeOfClassmark: OPTIONAL<ChangeOfClassmark>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: INTEGER,
        dataVolume: OPTIONAL<INTEGER>,
        radioChanRequested: OPTIONAL<RadioChanRequested>,
        radioChanUsed: OPTIONAL<TrafficChannel>,
        changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>,
        causeForTerm: CauseForTerm,
        diagnostics: OPTIONAL<HLRIntResult>,
        callReference: OCTET_STRING,
        sequenceNumber: OPTIONAL<INTEGER>,
        additionalChgInfo: OPTIONAL<AdditionalChgInfo>,
        recordExtensions: OPTIONAL<ManagementExtension[]>,
        gsm_SCFAddress: OPTIONAL<OCTET_STRING>,
        serviceKey: OPTIONAL<INTEGER>,
        networkCallReference: OPTIONAL<OCTET_STRING>,
        mSCAddress: OPTIONAL<OCTET_STRING>,
        cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>,
        defaultCallHandling: OPTIONAL<DefaultCallHandling>,
        hSCSDChanRequested: OPTIONAL<INTEGER>,
        hSCSDChanAllocated: OPTIONAL<INTEGER>,
        changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>,
        fnur: OPTIONAL<Fnur>,
        aiurRequested: OPTIONAL<AiurRequested>,
        chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>,
        chanCodingUsed: OPTIONAL<ChannelCoding>,
        speechVersionSupported: OPTIONAL<OCTET_STRING>,
        speechVersionUsed: OPTIONAL<OCTET_STRING>,
        numberOfDPEncountered: OPTIONAL<INTEGER>,
        levelOfCAMELService: OPTIONAL<MOCallRecord_levelOfCAMELService>,
        freeFormatData: OPTIONAL<OCTET_STRING>,
        cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>,
        freeFormatDataAppend: OPTIONAL<BOOLEAN>,
        defaultCallHandling_2: OPTIONAL<DefaultCallHandling>,
        gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>,
        serviceKey_2: OPTIONAL<INTEGER>,
        freeFormatData_2: OPTIONAL<OCTET_STRING>,
        freeFormatDataAppend_2: OPTIONAL<BOOLEAN>,
        systemType: OPTIONAL<SystemType>,
        rateIndication: OPTIONAL<OCTET_STRING>,
        locationRoutNum: OPTIONAL<OCTET_STRING>,
        lrnSoInd: OPTIONAL<MOCallRecord_lrnSoInd>,
        lrnQuryStatus: OPTIONAL<MOCallRecord_lrnQuryStatus>,
        jIPPara: OPTIONAL<OCTET_STRING>,
        jIPSoInd: OPTIONAL<MOCallRecord_jIPSoInd>,
        jIPQuryStatus: OPTIONAL<MOCallRecord_jIPQuryStatus>,
        partialRecordType: OPTIONAL<PartialRecordType>,
        guaranteedBitRate: OPTIONAL<GuaranteedBitRate>,
        maximumBitRate: OPTIONAL<MaximumBitRate>,
        redial: OPTIONAL<BOOLEAN>,
        reasonForServiceChange: OPTIONAL<ReasonForServiceChange>,
        serviceChangeInitiator: OPTIONAL<BOOLEAN>,
        iCSI2ActiveFlag: OPTIONAL<NULL>,
        iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>,
        privateUserID: OPTIONAL<GraphicString>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.callingNumber = callingNumber;
        this.calledNumber = calledNumber;
        this.translatedNumber = translatedNumber;
        this.connectedNumber = connectedNumber;
        this.roamingNumber = roamingNumber;
        this.recordingEntity = recordingEntity;
        this.mscIncomingTKGP = mscIncomingTKGP;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.location = location;
        this.changeOfLocation = changeOfLocation;
        this.basicService = basicService;
        this.transparencyIndicator = transparencyIndicator;
        this.changeOfService = changeOfService;
        this.supplServicesUsed = supplServicesUsed;
        this.aocParameters = aocParameters;
        this.changeOfAOCParms = changeOfAOCParms;
        this.msClassmark = msClassmark;
        this.changeOfClassmark = changeOfClassmark;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.radioChanRequested = radioChanRequested;
        this.radioChanUsed = radioChanUsed;
        this.changeOfRadioChan = changeOfRadioChan;
        this.causeForTerm = causeForTerm;
        this.diagnostics = diagnostics;
        this.callReference = callReference;
        this.sequenceNumber = sequenceNumber;
        this.additionalChgInfo = additionalChgInfo;
        this.recordExtensions = recordExtensions;
        this.gsm_SCFAddress = gsm_SCFAddress;
        this.serviceKey = serviceKey;
        this.networkCallReference = networkCallReference;
        this.mSCAddress = mSCAddress;
        this.cAMELInitCFIndicator = cAMELInitCFIndicator;
        this.defaultCallHandling = defaultCallHandling;
        this.hSCSDChanRequested = hSCSDChanRequested;
        this.hSCSDChanAllocated = hSCSDChanAllocated;
        this.changeOfHSCSDParms = changeOfHSCSDParms;
        this.fnur = fnur;
        this.aiurRequested = aiurRequested;
        this.chanCodingsAcceptable = chanCodingsAcceptable;
        this.chanCodingUsed = chanCodingUsed;
        this.speechVersionSupported = speechVersionSupported;
        this.speechVersionUsed = speechVersionUsed;
        this.numberOfDPEncountered = numberOfDPEncountered;
        this.levelOfCAMELService = levelOfCAMELService;
        this.freeFormatData = freeFormatData;
        this.cAMELCallLegInformation = cAMELCallLegInformation;
        this.freeFormatDataAppend = freeFormatDataAppend;
        this.defaultCallHandling_2 = defaultCallHandling_2;
        this.gsm_SCFAddress_2 = gsm_SCFAddress_2;
        this.serviceKey_2 = serviceKey_2;
        this.freeFormatData_2 = freeFormatData_2;
        this.freeFormatDataAppend_2 = freeFormatDataAppend_2;
        this.systemType = systemType;
        this.rateIndication = rateIndication;
        this.locationRoutNum = locationRoutNum;
        this.lrnSoInd = lrnSoInd;
        this.lrnQuryStatus = lrnQuryStatus;
        this.jIPPara = jIPPara;
        this.jIPSoInd = jIPSoInd;
        this.jIPQuryStatus = jIPQuryStatus;
        this.partialRecordType = partialRecordType;
        this.guaranteedBitRate = guaranteedBitRate;
        this.maximumBitRate = maximumBitRate;
        this.redial = redial;
        this.reasonForServiceChange = reasonForServiceChange;
        this.serviceChangeInitiator = serviceChangeInitiator;
        this.iCSI2ActiveFlag = iCSI2ActiveFlag;
        this.iMS_Charging_Identifier = iMS_Charging_Identifier;
        this.privateUserID = privateUserID;
    
        if (this.servedIMSI !== undefined && (this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MOCallRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MOCallRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.servedMSISDN violates SIZE constraint");
        }
        if (this.roamingNumber !== undefined && (this.roamingNumber.length < 1 || this.roamingNumber.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.roamingNumber violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MOCallRecord.recordingEntity violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("MOCallRecord.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("MOCallRecord.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("MOCallRecord.releaseTime violates SIZE constraint");
        }
        if ((this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("MOCallRecord.callReference violates SIZE constraint");
        }
        if (this.gsm_SCFAddress !== undefined && (this.gsm_SCFAddress.length < 1 || this.gsm_SCFAddress.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.gsm_SCFAddress violates SIZE constraint");
        }
        if (this.serviceKey !== undefined && ((typeof this.serviceKey === "bigint" ? Number(this.serviceKey) : this.serviceKey) < 0 || (typeof this.serviceKey === "bigint" ? Number(this.serviceKey) : this.serviceKey) > 2147483647)) {
            throw new ASN1OverflowError("MOCallRecord.serviceKey violates INTEGER range");
        }
        if (this.networkCallReference !== undefined && (this.networkCallReference.length < 1 || this.networkCallReference.length > 8)) {
            throw new ASN1SizeError("MOCallRecord.networkCallReference violates SIZE constraint");
        }
        if (this.mSCAddress !== undefined && (this.mSCAddress.length < 1 || this.mSCAddress.length > 20)) {
            throw new ASN1SizeError("MOCallRecord.mSCAddress violates SIZE constraint");
        }
        if (this.speechVersionSupported !== undefined && (this.speechVersionSupported.length !== 1)) {
            throw new ASN1SizeError("MOCallRecord.speechVersionSupported violates SIZE constraint");
        }
        if (this.speechVersionUsed !== undefined && (this.speechVersionUsed.length !== 1)) {
            throw new ASN1SizeError("MOCallRecord.speechVersionUsed violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("MOCallRecord.freeFormatData violates SIZE constraint");
        }
        if (this.gsm_SCFAddress_2 !== undefined && (this.gsm_SCFAddress_2.length < 1 || this.gsm_SCFAddress_2.length > 9)) {
            throw new ASN1SizeError("MOCallRecord.gsm_SCFAddress_2 violates SIZE constraint");
        }
        if (this.serviceKey_2 !== undefined && ((typeof this.serviceKey_2 === "bigint" ? Number(this.serviceKey_2) : this.serviceKey_2) < 0 || (typeof this.serviceKey_2 === "bigint" ? Number(this.serviceKey_2) : this.serviceKey_2) > 2147483647)) {
            throw new ASN1OverflowError("MOCallRecord.serviceKey_2 violates INTEGER range");
        }
        if (this.freeFormatData_2 !== undefined && (this.freeFormatData_2.length < 1 || this.freeFormatData_2.length > 160)) {
            throw new ASN1SizeError("MOCallRecord.freeFormatData_2 violates SIZE constraint");
        }
        if (this.rateIndication !== undefined && (this.rateIndication.length !== 1)) {
            throw new ASN1SizeError("MOCallRecord.rateIndication violates SIZE constraint");
        }
        if (this.locationRoutNum !== undefined && (this.locationRoutNum.length !== 5)) {
            throw new ASN1SizeError("MOCallRecord.locationRoutNum violates SIZE constraint");
        }
        if (this.jIPPara !== undefined && (this.jIPPara.length !== 5)) {
            throw new ASN1SizeError("MOCallRecord.jIPPara violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MOCallRecord
     * @description
     * 
     * This takes an `object` and converts it to a `MOCallRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOCallRecord`.
     * @returns {MOCallRecord}
     */
    public static _from_object (_o: { [_K in keyof (MOCallRecord)]: (MOCallRecord)[_K] }): MOCallRecord {
        return new MOCallRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.callingNumber, _o.calledNumber, _o.translatedNumber, _o.connectedNumber, _o.roamingNumber, _o.recordingEntity, _o.mscIncomingTKGP, _o.mscOutgoingTKGP, _o.location, _o.changeOfLocation, _o.basicService, _o.transparencyIndicator, _o.changeOfService, _o.supplServicesUsed, _o.aocParameters, _o.changeOfAOCParms, _o.msClassmark, _o.changeOfClassmark, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.radioChanRequested, _o.radioChanUsed, _o.changeOfRadioChan, _o.causeForTerm, _o.diagnostics, _o.callReference, _o.sequenceNumber, _o.additionalChgInfo, _o.recordExtensions, _o.gsm_SCFAddress, _o.serviceKey, _o.networkCallReference, _o.mSCAddress, _o.cAMELInitCFIndicator, _o.defaultCallHandling, _o.hSCSDChanRequested, _o.hSCSDChanAllocated, _o.changeOfHSCSDParms, _o.fnur, _o.aiurRequested, _o.chanCodingsAcceptable, _o.chanCodingUsed, _o.speechVersionSupported, _o.speechVersionUsed, _o.numberOfDPEncountered, _o.levelOfCAMELService, _o.freeFormatData, _o.cAMELCallLegInformation, _o.freeFormatDataAppend, _o.defaultCallHandling_2, _o.gsm_SCFAddress_2, _o.serviceKey_2, _o.freeFormatData_2, _o.freeFormatDataAppend_2, _o.systemType, _o.rateIndication, _o.locationRoutNum, _o.lrnSoInd, _o.lrnQuryStatus, _o.jIPPara, _o.jIPSoInd, _o.jIPQuryStatus, _o.partialRecordType, _o.guaranteedBitRate, _o.maximumBitRate, _o.redial, _o.reasonForServiceChange, _o.serviceChangeInitiator, _o.iCSI2ActiveFlag, _o.iMS_Charging_Identifier, _o.privateUserID);
    }

        /**
         * @summary The enum used as the type of the component `transparencyIndicator`
         * @public
         * @static
         */

    public static _enum_for_transparencyIndicator = _enum_for_TransparencyInd;        /**
         * @summary The enum used as the type of the component `radioChanRequested`
         * @public
         * @static
         */

    public static _enum_for_radioChanRequested = _enum_for_RadioChanRequested;        /**
         * @summary The enum used as the type of the component `radioChanUsed`
         * @public
         * @static
         */

    public static _enum_for_radioChanUsed = _enum_for_TrafficChannel;        /**
         * @summary The enum used as the type of the component `cAMELInitCFIndicator`
         * @public
         * @static
         */

    public static _enum_for_cAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;        /**
         * @summary The enum used as the type of the component `defaultCallHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `fnur`
         * @public
         * @static
         */

    public static _enum_for_fnur = _enum_for_Fnur;        /**
         * @summary The enum used as the type of the component `aiurRequested`
         * @public
         * @static
         */

    public static _enum_for_aiurRequested = _enum_for_AiurRequested;        /**
         * @summary The enum used as the type of the component `chanCodingUsed`
         * @public
         * @static
         */

    public static _enum_for_chanCodingUsed = _enum_for_ChannelCoding;        /**
         * @summary The enum used as the type of the component `defaultCallHandling_2`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling_2 = _enum_for_DefaultCallHandling;        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;        /**
         * @summary The enum used as the type of the component `partialRecordType`
         * @public
         * @static
         */

    public static _enum_for_partialRecordType = _enum_for_PartialRecordType;        /**
         * @summary The enum used as the type of the component `guaranteedBitRate`
         * @public
         * @static
         */

    public static _enum_for_guaranteedBitRate = _enum_for_GuaranteedBitRate;        /**
         * @summary The enum used as the type of the component `maximumBitRate`
         * @public
         * @static
         */

    public static _enum_for_maximumBitRate = _enum_for_MaximumBitRate;        /**
         * @summary The enum used as the type of the component `reasonForServiceChange`
         * @public
         * @static
         */

    public static _enum_for_reasonForServiceChange = _enum_for_ReasonForServiceChange;
}

/**
 * @summary The Leading Root Component Types of MOCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOCallRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calledNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("translatedNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("connectedNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("roamingNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mscIncomingTKGP", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("changeOfLocation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("transparencyIndicator", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("changeOfService", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("supplServicesUsed", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("aocParameters", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("changeOfAOCParms", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("msClassmark", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("changeOfClassmark", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("callDuration", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("radioChanRequested", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("radioChanUsed", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("changeOfRadioChan", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("causeForTerm", false, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 31)),
    new $.ComponentSpec("callReference", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("sequenceNumber", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("additionalChgInfo", true, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("gsm-SCFAddress", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("serviceKey", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("networkCallReference", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("mSCAddress", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("cAMELInitCFIndicator", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("defaultCallHandling", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("hSCSDChanRequested", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("hSCSDChanAllocated", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("changeOfHSCSDParms", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("fnur", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("aiurRequested", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("chanCodingsAcceptable", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("chanCodingUsed", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("speechVersionSupported", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("speechVersionUsed", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("numberOfDPEncountered", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("levelOfCAMELService", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("cAMELCallLegInformation", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("freeFormatDataAppend", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("defaultCallHandling-2", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("gsm-SCFAddress-2", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("serviceKey-2", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("freeFormatData-2", true, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("freeFormatDataAppend-2", true, $.hasTag(_TagClass.context, 60)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("rateIndication", true, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("locationRoutNum", true, $.hasTag(_TagClass.context, 63)),
    new $.ComponentSpec("lrnSoInd", true, $.hasTag(_TagClass.context, 64)),
    new $.ComponentSpec("lrnQuryStatus", true, $.hasTag(_TagClass.context, 65)),
    new $.ComponentSpec("jIPPara", true, $.hasTag(_TagClass.context, 66)),
    new $.ComponentSpec("jIPSoInd", true, $.hasTag(_TagClass.context, 67)),
    new $.ComponentSpec("jIPQuryStatus", true, $.hasTag(_TagClass.context, 68)),
    new $.ComponentSpec("partialRecordType", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("guaranteedBitRate", true, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("maximumBitRate", true, $.hasTag(_TagClass.context, 71)),
    new $.ComponentSpec("redial", true, $.hasTag(_TagClass.context, 72)),
    new $.ComponentSpec("reasonForServiceChange", true, $.hasTag(_TagClass.context, 73)),
    new $.ComponentSpec("serviceChangeInitiator", true, $.hasTag(_TagClass.context, 74)),
    new $.ComponentSpec("iCSI2ActiveFlag", true, $.hasTag(_TagClass.context, 75)),
    new $.ComponentSpec("iMS-Charging-Identifier", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("privateUserID", true, $.hasTag(_TagClass.context, 77))
];

/**
 * @summary The Trailing Root Component Types of MOCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOCallRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOCallRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MOCallRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOCallRecord: $.ASN1Decoder<MOCallRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOCallRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOCallRecord (el: _Element): MOCallRecord {
    if (!_cached_decoder_for_MOCallRecord) { _cached_decoder_for_MOCallRecord = function (el: _Element): MOCallRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI: OPTIONAL<OCTET_STRING>;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let callingNumber: OPTIONAL<OCTET_STRING>;
    let calledNumber: OPTIONAL<OCTET_STRING>;
    let translatedNumber: OPTIONAL<OCTET_STRING>;
    let connectedNumber: OPTIONAL<OCTET_STRING>;
    let roamingNumber: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let mscIncomingTKGP: OPTIONAL<TrunkGroup>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let location: OPTIONAL<LocationAreaAndCell>;
    let changeOfLocation: OPTIONAL<LocationChange[]>;
    let basicService: OPTIONAL<BasicService>;
    let transparencyIndicator: OPTIONAL<TransparencyInd>;
    let changeOfService: OPTIONAL<ChangeOfService[]>;
    let supplServicesUsed: OPTIONAL<SuppServiceUsed[]>;
    let aocParameters: OPTIONAL<AOCParameters>;
    let changeOfAOCParms: OPTIONAL<AOCParmChange[]>;
    let msClassmark: OPTIONAL<OCTET_STRING>;
    let changeOfClassmark: OPTIONAL<ChangeOfClassmark>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration!: INTEGER;
    let dataVolume: OPTIONAL<INTEGER>;
    let radioChanRequested: OPTIONAL<RadioChanRequested>;
    let radioChanUsed: OPTIONAL<TrafficChannel>;
    let changeOfRadioChan: OPTIONAL<ChangeOfRadioChannel>;
    let causeForTerm!: CauseForTerm;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let callReference!: OCTET_STRING;
    let sequenceNumber: OPTIONAL<INTEGER>;
    let additionalChgInfo: OPTIONAL<AdditionalChgInfo>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let gsm_SCFAddress: OPTIONAL<OCTET_STRING>;
    let serviceKey: OPTIONAL<INTEGER>;
    let networkCallReference: OPTIONAL<OCTET_STRING>;
    let mSCAddress: OPTIONAL<OCTET_STRING>;
    let cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    let defaultCallHandling: OPTIONAL<DefaultCallHandling>;
    let hSCSDChanRequested: OPTIONAL<INTEGER>;
    let hSCSDChanAllocated: OPTIONAL<INTEGER>;
    let changeOfHSCSDParms: OPTIONAL<HSCSDParmsChange[]>;
    let fnur: OPTIONAL<Fnur>;
    let aiurRequested: OPTIONAL<AiurRequested>;
    let chanCodingsAcceptable: OPTIONAL<ChannelCoding[]>;
    let chanCodingUsed: OPTIONAL<ChannelCoding>;
    let speechVersionSupported: OPTIONAL<OCTET_STRING>;
    let speechVersionUsed: OPTIONAL<OCTET_STRING>;
    let numberOfDPEncountered: OPTIONAL<INTEGER>;
    let levelOfCAMELService: OPTIONAL<MOCallRecord_levelOfCAMELService>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let cAMELCallLegInformation: OPTIONAL<CAMELInformation[]>;
    let freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    let defaultCallHandling_2: OPTIONAL<DefaultCallHandling>;
    let gsm_SCFAddress_2: OPTIONAL<OCTET_STRING>;
    let serviceKey_2: OPTIONAL<INTEGER>;
    let freeFormatData_2: OPTIONAL<OCTET_STRING>;
    let freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    let systemType: OPTIONAL<SystemType>;
    let rateIndication: OPTIONAL<OCTET_STRING>;
    let locationRoutNum: OPTIONAL<OCTET_STRING>;
    let lrnSoInd: OPTIONAL<MOCallRecord_lrnSoInd>;
    let lrnQuryStatus: OPTIONAL<MOCallRecord_lrnQuryStatus>;
    let jIPPara: OPTIONAL<OCTET_STRING>;
    let jIPSoInd: OPTIONAL<MOCallRecord_jIPSoInd>;
    let jIPQuryStatus: OPTIONAL<MOCallRecord_jIPQuryStatus>;
    let partialRecordType: OPTIONAL<PartialRecordType>;
    let guaranteedBitRate: OPTIONAL<GuaranteedBitRate>;
    let maximumBitRate: OPTIONAL<MaximumBitRate>;
    let redial: OPTIONAL<BOOLEAN>;
    let reasonForServiceChange: OPTIONAL<ReasonForServiceChange>;
    let serviceChangeInitiator: OPTIONAL<BOOLEAN>;
    let iCSI2ActiveFlag: OPTIONAL<NULL>;
    let iMS_Charging_Identifier: OPTIONAL<OCTET_STRING>;
    let privateUserID: OPTIONAL<GraphicString>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "translatedNumber": (_el: _Element): void => { translatedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "connectedNumber": (_el: _Element): void => { connectedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingNumber": (_el: _Element): void => { roamingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscIncomingTKGP": (_el: _Element): void => { mscIncomingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "changeOfLocation": (_el: _Element): void => { changeOfLocation = $._decode_implicit<LocationChange[]>(() => $._decodeSequenceOf<LocationChange>(() => _decode_LocationChange))(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "transparencyIndicator": (_el: _Element): void => { transparencyIndicator = $._decode_implicit<TransparencyInd>(() => _decode_TransparencyInd)(_el); },
        "changeOfService": (_el: _Element): void => { changeOfService = $._decode_implicit<ChangeOfService[]>(() => $._decodeSequenceOf<ChangeOfService>(() => _decode_ChangeOfService))(_el); },
        "supplServicesUsed": (_el: _Element): void => { supplServicesUsed = $._decode_implicit<SuppServiceUsed[]>(() => $._decodeSequenceOf<SuppServiceUsed>(() => _decode_SuppServiceUsed))(_el); },
        "aocParameters": (_el: _Element): void => { aocParameters = $._decode_implicit<AOCParameters>(() => _decode_AOCParameters)(_el); },
        "changeOfAOCParms": (_el: _Element): void => { changeOfAOCParms = $._decode_implicit<AOCParmChange[]>(() => $._decodeSequenceOf<AOCParmChange>(() => _decode_AOCParmChange))(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "changeOfClassmark": (_el: _Element): void => { changeOfClassmark = $._decode_implicit<ChangeOfClassmark>(() => _decode_ChangeOfClassmark)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "radioChanRequested": (_el: _Element): void => { radioChanRequested = $._decode_implicit<RadioChanRequested>(() => _decode_RadioChanRequested)(_el); },
        "radioChanUsed": (_el: _Element): void => { radioChanUsed = $._decode_implicit<TrafficChannel>(() => _decode_TrafficChannel)(_el); },
        "changeOfRadioChan": (_el: _Element): void => { changeOfRadioChan = $._decode_implicit<ChangeOfRadioChannel>(() => _decode_ChangeOfRadioChannel)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sequenceNumber": (_el: _Element): void => { sequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "additionalChgInfo": (_el: _Element): void => { additionalChgInfo = $._decode_implicit<AdditionalChgInfo>(() => _decode_AdditionalChgInfo)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "gsm-SCFAddress": (_el: _Element): void => { gsm_SCFAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "networkCallReference": (_el: _Element): void => { networkCallReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mSCAddress": (_el: _Element): void => { mSCAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELInitCFIndicator": (_el: _Element): void => { cAMELInitCFIndicator = $._decode_implicit<CAMELInitCFIndicator>(() => _decode_CAMELInitCFIndicator)(_el); },
        "defaultCallHandling": (_el: _Element): void => { defaultCallHandling = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "hSCSDChanRequested": (_el: _Element): void => { hSCSDChanRequested = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "hSCSDChanAllocated": (_el: _Element): void => { hSCSDChanAllocated = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeOfHSCSDParms": (_el: _Element): void => { changeOfHSCSDParms = $._decode_implicit<HSCSDParmsChange[]>(() => $._decodeSequenceOf<HSCSDParmsChange>(() => _decode_HSCSDParmsChange))(_el); },
        "fnur": (_el: _Element): void => { fnur = $._decode_implicit<Fnur>(() => _decode_Fnur)(_el); },
        "aiurRequested": (_el: _Element): void => { aiurRequested = $._decode_implicit<AiurRequested>(() => _decode_AiurRequested)(_el); },
        "chanCodingsAcceptable": (_el: _Element): void => { chanCodingsAcceptable = $._decode_implicit<ChannelCoding[]>(() => $._decodeSequenceOf<ChannelCoding>(() => _decode_ChannelCoding))(_el); },
        "chanCodingUsed": (_el: _Element): void => { chanCodingUsed = $._decode_implicit<ChannelCoding>(() => _decode_ChannelCoding)(_el); },
        "speechVersionSupported": (_el: _Element): void => { speechVersionSupported = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "speechVersionUsed": (_el: _Element): void => { speechVersionUsed = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberOfDPEncountered": (_el: _Element): void => { numberOfDPEncountered = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "levelOfCAMELService": (_el: _Element): void => { levelOfCAMELService = $._decode_implicit<MOCallRecord_levelOfCAMELService>(() => _decode_MOCallRecord_levelOfCAMELService)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELCallLegInformation": (_el: _Element): void => { cAMELCallLegInformation = $._decode_implicit<CAMELInformation[]>(() => $._decodeSequenceOf<CAMELInformation>(() => _decode_CAMELInformation))(_el); },
        "freeFormatDataAppend": (_el: _Element): void => { freeFormatDataAppend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "defaultCallHandling-2": (_el: _Element): void => { defaultCallHandling_2 = $._decode_implicit<DefaultCallHandling>(() => _decode_DefaultCallHandling)(_el); },
        "gsm-SCFAddress-2": (_el: _Element): void => { gsm_SCFAddress_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceKey-2": (_el: _Element): void => { serviceKey_2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "freeFormatData-2": (_el: _Element): void => { freeFormatData_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatDataAppend-2": (_el: _Element): void => { freeFormatDataAppend_2 = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "rateIndication": (_el: _Element): void => { rateIndication = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "locationRoutNum": (_el: _Element): void => { locationRoutNum = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lrnSoInd": (_el: _Element): void => { lrnSoInd = $._decode_implicit<MOCallRecord_lrnSoInd>(() => _decode_MOCallRecord_lrnSoInd)(_el); },
        "lrnQuryStatus": (_el: _Element): void => { lrnQuryStatus = $._decode_implicit<MOCallRecord_lrnQuryStatus>(() => _decode_MOCallRecord_lrnQuryStatus)(_el); },
        "jIPPara": (_el: _Element): void => { jIPPara = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jIPSoInd": (_el: _Element): void => { jIPSoInd = $._decode_implicit<MOCallRecord_jIPSoInd>(() => _decode_MOCallRecord_jIPSoInd)(_el); },
        "jIPQuryStatus": (_el: _Element): void => { jIPQuryStatus = $._decode_implicit<MOCallRecord_jIPQuryStatus>(() => _decode_MOCallRecord_jIPQuryStatus)(_el); },
        "partialRecordType": (_el: _Element): void => { partialRecordType = $._decode_implicit<PartialRecordType>(() => _decode_PartialRecordType)(_el); },
        "guaranteedBitRate": (_el: _Element): void => { guaranteedBitRate = $._decode_implicit<GuaranteedBitRate>(() => _decode_GuaranteedBitRate)(_el); },
        "maximumBitRate": (_el: _Element): void => { maximumBitRate = $._decode_implicit<MaximumBitRate>(() => _decode_MaximumBitRate)(_el); },
        "redial": (_el: _Element): void => { redial = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "reasonForServiceChange": (_el: _Element): void => { reasonForServiceChange = $._decode_implicit<ReasonForServiceChange>(() => _decode_ReasonForServiceChange)(_el); },
        "serviceChangeInitiator": (_el: _Element): void => { serviceChangeInitiator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iCSI2ActiveFlag": (_el: _Element): void => { iCSI2ActiveFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iMS-Charging-Identifier": (_el: _Element): void => { iMS_Charging_Identifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "privateUserID": (_el: _Element): void => { privateUserID = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MOCallRecord,
        _extension_additions_list_spec_for_MOCallRecord,
        _root_component_type_list_2_spec_for_MOCallRecord,
        undefined,
    );
    return new MOCallRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        callingNumber,
        calledNumber,
        translatedNumber,
        connectedNumber,
        roamingNumber,
        recordingEntity,
        mscIncomingTKGP,
        mscOutgoingTKGP,
        location,
        changeOfLocation,
        basicService,
        transparencyIndicator,
        changeOfService,
        supplServicesUsed,
        aocParameters,
        changeOfAOCParms,
        msClassmark,
        changeOfClassmark,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        radioChanRequested,
        radioChanUsed,
        changeOfRadioChan,
        causeForTerm,
        diagnostics,
        callReference,
        sequenceNumber,
        additionalChgInfo,
        recordExtensions,
        gsm_SCFAddress,
        serviceKey,
        networkCallReference,
        mSCAddress,
        cAMELInitCFIndicator,
        defaultCallHandling,
        hSCSDChanRequested,
        hSCSDChanAllocated,
        changeOfHSCSDParms,
        fnur,
        aiurRequested,
        chanCodingsAcceptable,
        chanCodingUsed,
        speechVersionSupported,
        speechVersionUsed,
        numberOfDPEncountered,
        levelOfCAMELService,
        freeFormatData,
        cAMELCallLegInformation,
        freeFormatDataAppend,
        defaultCallHandling_2,
        gsm_SCFAddress_2,
        serviceKey_2,
        freeFormatData_2,
        freeFormatDataAppend_2,
        systemType,
        rateIndication,
        locationRoutNum,
        lrnSoInd,
        lrnQuryStatus,
        jIPPara,
        jIPSoInd,
        jIPQuryStatus,
        partialRecordType,
        guaranteedBitRate,
        maximumBitRate,
        redial,
        reasonForServiceChange,
        serviceChangeInitiator,
        iCSI2ActiveFlag,
        iMS_Charging_Identifier,
        privateUserID
    );
}; }
    return _cached_decoder_for_MOCallRecord(el);
}

let _cached_encoder_for_MOCallRecord: $.ASN1Encoder<MOCallRecord> | null = null;

/**
 * @summary Encodes a(n) MOCallRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOCallRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MOCallRecord (value: MOCallRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOCallRecord) { _cached_encoder_for_MOCallRecord = function (value: MOCallRecord, _elGetter: $.ASN1Encoder<MOCallRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    if (value.servedIMSI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    }
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    if (value.callingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.callingNumber, $.BER));
    }
    if (value.calledNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.calledNumber, $.BER));
    }
    if (value.translatedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.translatedNumber, $.BER));
    }
    if (value.connectedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.connectedNumber, $.BER));
    }
    if (value.roamingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.roamingNumber, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.mscIncomingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_TrunkGroup, $.BER)(value.mscIncomingTKGP, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    if (value.changeOfLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<LocationChange>(() => _encode_LocationChange, $.BER), $.BER)(value.changeOfLocation, $.BER));
    }
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    if (value.transparencyIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_TransparencyInd, $.BER)(value.transparencyIndicator, $.BER));
    }
    if (value.changeOfService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeSequenceOf<ChangeOfService>(() => _encode_ChangeOfService, $.BER), $.BER)(value.changeOfService, $.BER));
    }
    if (value.supplServicesUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeSequenceOf<SuppServiceUsed>(() => _encode_SuppServiceUsed, $.BER), $.BER)(value.supplServicesUsed, $.BER));
    }
    if (value.aocParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_AOCParameters, $.BER)(value.aocParameters, $.BER));
    }
    if (value.changeOfAOCParms !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => $._encodeSequenceOf<AOCParmChange>(() => _encode_AOCParmChange, $.BER), $.BER)(value.changeOfAOCParms, $.BER));
    }
    if (value.msClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    }
    if (value.changeOfClassmark !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_ChangeOfClassmark, $.BER)(value.changeOfClassmark, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 22, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 23, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    if (value.radioChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_RadioChanRequested, $.BER)(value.radioChanRequested, $.BER));
    }
    if (value.radioChanUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 28, () => _encode_TrafficChannel, $.BER)(value.radioChanUsed, $.BER));
    }
    if (value.changeOfRadioChan !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ChangeOfRadioChannel, $.BER)(value.changeOfRadioChan, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 30, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 31, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 32, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    if (value.sequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 33, () => $._encodeInteger, $.BER)(value.sequenceNumber, $.BER));
    }
    if (value.additionalChgInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 34, () => _encode_AdditionalChgInfo, $.BER)(value.additionalChgInfo, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 35, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.gsm_SCFAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 36, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress, $.BER));
    }
    if (value.serviceKey !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 37, () => $._encodeInteger, $.BER)(value.serviceKey, $.BER));
    }
    if (value.networkCallReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 38, () => $._encodeOctetString, $.BER)(value.networkCallReference, $.BER));
    }
    if (value.mSCAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 39, () => $._encodeOctetString, $.BER)(value.mSCAddress, $.BER));
    }
    if (value.cAMELInitCFIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 40, () => _encode_CAMELInitCFIndicator, $.BER)(value.cAMELInitCFIndicator, $.BER));
    }
    if (value.defaultCallHandling !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 41, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling, $.BER));
    }
    if (value.hSCSDChanRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 42, () => $._encodeInteger, $.BER)(value.hSCSDChanRequested, $.BER));
    }
    if (value.hSCSDChanAllocated !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 43, () => $._encodeInteger, $.BER)(value.hSCSDChanAllocated, $.BER));
    }
    if (value.changeOfHSCSDParms !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 44, () => $._encodeSequenceOf<HSCSDParmsChange>(() => _encode_HSCSDParmsChange, $.BER), $.BER)(value.changeOfHSCSDParms, $.BER));
    }
    if (value.fnur !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => _encode_Fnur, $.BER)(value.fnur, $.BER));
    }
    if (value.aiurRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 46, () => _encode_AiurRequested, $.BER)(value.aiurRequested, $.BER));
    }
    if (value.chanCodingsAcceptable !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => $._encodeSequenceOf<ChannelCoding>(() => _encode_ChannelCoding, $.BER), $.BER)(value.chanCodingsAcceptable, $.BER));
    }
    if (value.chanCodingUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => _encode_ChannelCoding, $.BER)(value.chanCodingUsed, $.BER));
    }
    if (value.speechVersionSupported !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => $._encodeOctetString, $.BER)(value.speechVersionSupported, $.BER));
    }
    if (value.speechVersionUsed !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 50, () => $._encodeOctetString, $.BER)(value.speechVersionUsed, $.BER));
    }
    if (value.numberOfDPEncountered !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 51, () => $._encodeInteger, $.BER)(value.numberOfDPEncountered, $.BER));
    }
    if (value.levelOfCAMELService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 52, () => _encode_MOCallRecord_levelOfCAMELService, $.BER)(value.levelOfCAMELService, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 53, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.cAMELCallLegInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 54, () => $._encodeSequenceOf<CAMELInformation>(() => _encode_CAMELInformation, $.BER), $.BER)(value.cAMELCallLegInformation, $.BER));
    }
    if (value.freeFormatDataAppend !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 55, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend, $.BER));
    }
    if (value.defaultCallHandling_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 56, () => _encode_DefaultCallHandling, $.BER)(value.defaultCallHandling_2, $.BER));
    }
    if (value.gsm_SCFAddress_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 57, () => $._encodeOctetString, $.BER)(value.gsm_SCFAddress_2, $.BER));
    }
    if (value.serviceKey_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 58, () => $._encodeInteger, $.BER)(value.serviceKey_2, $.BER));
    }
    if (value.freeFormatData_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 59, () => $._encodeOctetString, $.BER)(value.freeFormatData_2, $.BER));
    }
    if (value.freeFormatDataAppend_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend_2, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 61, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.rateIndication !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 62, () => $._encodeOctetString, $.BER)(value.rateIndication, $.BER));
    }
    if (value.locationRoutNum !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 63, () => $._encodeOctetString, $.BER)(value.locationRoutNum, $.BER));
    }
    if (value.lrnSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 64, () => _encode_MOCallRecord_lrnSoInd, $.BER)(value.lrnSoInd, $.BER));
    }
    if (value.lrnQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 65, () => _encode_MOCallRecord_lrnQuryStatus, $.BER)(value.lrnQuryStatus, $.BER));
    }
    if (value.jIPPara !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 66, () => $._encodeOctetString, $.BER)(value.jIPPara, $.BER));
    }
    if (value.jIPSoInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 67, () => _encode_MOCallRecord_jIPSoInd, $.BER)(value.jIPSoInd, $.BER));
    }
    if (value.jIPQuryStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 68, () => _encode_MOCallRecord_jIPQuryStatus, $.BER)(value.jIPQuryStatus, $.BER));
    }
    if (value.partialRecordType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 69, () => _encode_PartialRecordType, $.BER)(value.partialRecordType, $.BER));
    }
    if (value.guaranteedBitRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 70, () => _encode_GuaranteedBitRate, $.BER)(value.guaranteedBitRate, $.BER));
    }
    if (value.maximumBitRate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 71, () => _encode_MaximumBitRate, $.BER)(value.maximumBitRate, $.BER));
    }
    if (value.redial !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 72, () => $._encodeBoolean, $.BER)(value.redial, $.BER));
    }
    if (value.reasonForServiceChange !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 73, () => _encode_ReasonForServiceChange, $.BER)(value.reasonForServiceChange, $.BER));
    }
    if (value.serviceChangeInitiator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 74, () => $._encodeBoolean, $.BER)(value.serviceChangeInitiator, $.BER));
    }
    if (value.iCSI2ActiveFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 75, () => $._encodeNull, $.BER)(value.iCSI2ActiveFlag, $.BER));
    }
    if (value.iMS_Charging_Identifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 76, () => $._encodeOctetString, $.BER)(value.iMS_Charging_Identifier, $.BER));
    }
    if (value.privateUserID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 77, () => $._encodeGraphicString, $.BER)(value.privateUserID, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MOCallRecord(value, elGetter);
}


/* eslint-enable */
