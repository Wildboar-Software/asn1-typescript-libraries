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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { updateLocation } from "../MAP-MobileServiceOperations/updateLocation.oa.mjs";
import { cancelLocation } from "../MAP-MobileServiceOperations/cancelLocation.oa.mjs";
import { cancelVcsgLocation } from "../MAP-MobileServiceOperations/cancelVcsgLocation.oa.mjs";
import { purgeMS } from "../MAP-MobileServiceOperations/purgeMS.oa.mjs";
import { sendIdentification } from "../MAP-MobileServiceOperations/sendIdentification.oa.mjs";
import { updateGprsLocation } from "../MAP-MobileServiceOperations/updateGprsLocation.oa.mjs";
import { updateVcsgLocation } from "../MAP-MobileServiceOperations/updateVcsgLocation.oa.mjs";
import { prepareHandover } from "../MAP-MobileServiceOperations/prepareHandover.oa.mjs";
import { sendEndSignal } from "../MAP-MobileServiceOperations/sendEndSignal.oa.mjs";
import { processAccessSignalling } from "../MAP-MobileServiceOperations/processAccessSignalling.oa.mjs";
import { forwardAccessSignalling } from "../MAP-MobileServiceOperations/forwardAccessSignalling.oa.mjs";
import { prepareSubsequentHandover } from "../MAP-MobileServiceOperations/prepareSubsequentHandover.oa.mjs";
import { sendAuthenticationInfo } from "../MAP-MobileServiceOperations/sendAuthenticationInfo.oa.mjs";
import { authenticationFailureReport } from "../MAP-MobileServiceOperations/authenticationFailureReport.oa.mjs";
import { checkIMEI } from "../MAP-MobileServiceOperations/checkIMEI.oa.mjs";
import { insertSubscriberData } from "../MAP-MobileServiceOperations/insertSubscriberData.oa.mjs";
import { deleteSubscriberData } from "../MAP-MobileServiceOperations/deleteSubscriberData.oa.mjs";
import { reset } from "../MAP-MobileServiceOperations/reset.oa.mjs";
import { forwardCheckSS_Indication } from "../MAP-MobileServiceOperations/forwardCheckSS-Indication.oa.mjs";
import { restoreData } from "../MAP-MobileServiceOperations/restoreData.oa.mjs";
import { provideSubscriberInfo } from "../MAP-MobileServiceOperations/provideSubscriberInfo.oa.mjs";
import { anyTimeInterrogation } from "../MAP-MobileServiceOperations/anyTimeInterrogation.oa.mjs";
import { anyTimeSubscriptionInterrogation } from "../MAP-MobileServiceOperations/anyTimeSubscriptionInterrogation.oa.mjs";
import { anyTimeModification } from "../MAP-MobileServiceOperations/anyTimeModification.oa.mjs";
import { sendRoutingInfoForGprs } from "../MAP-MobileServiceOperations/sendRoutingInfoForGprs.oa.mjs";
import { failureReport } from "../MAP-MobileServiceOperations/failureReport.oa.mjs";
import { noteMsPresentForGprs } from "../MAP-MobileServiceOperations/noteMsPresentForGprs.oa.mjs";
import { noteMM_Event } from "../MAP-MobileServiceOperations/noteMM-Event.oa.mjs";
import { noteSubscriberDataModified } from "../MAP-MobileServiceOperations/noteSubscriberDataModified.oa.mjs";
import { activateTraceMode } from "../MAP-OperationAndMaintenanceOperations/activateTraceMode.oa.mjs";
import { deactivateTraceMode } from "../MAP-OperationAndMaintenanceOperations/deactivateTraceMode.oa.mjs";
import { sendIMSI } from "../MAP-OperationAndMaintenanceOperations/sendIMSI.oa.mjs";
import { sendRoutingInfo } from "../MAP-CallHandlingOperations/sendRoutingInfo.oa.mjs";
import { provideRoamingNumber } from "../MAP-CallHandlingOperations/provideRoamingNumber.oa.mjs";
import { resumeCallHandling } from "../MAP-CallHandlingOperations/resumeCallHandling.oa.mjs";
import { setReportingState } from "../MAP-CallHandlingOperations/setReportingState.oa.mjs";
import { statusReport } from "../MAP-CallHandlingOperations/statusReport.oa.mjs";
import { remoteUserFree } from "../MAP-CallHandlingOperations/remoteUserFree.oa.mjs";
import { ist_Alert } from "../MAP-CallHandlingOperations/ist-Alert.oa.mjs";
import { ist_Command } from "../MAP-CallHandlingOperations/ist-Command.oa.mjs";
import { registerSS } from "../MAP-SupplementaryServiceOperations/registerSS.oa.mjs";
import { eraseSS } from "../MAP-SupplementaryServiceOperations/eraseSS.oa.mjs";
import { activateSS } from "../MAP-SupplementaryServiceOperations/activateSS.oa.mjs";
import { deactivateSS } from "../MAP-SupplementaryServiceOperations/deactivateSS.oa.mjs";
import { interrogateSS } from "../MAP-SupplementaryServiceOperations/interrogateSS.oa.mjs";
import { processUnstructuredSS_Request } from "../MAP-SupplementaryServiceOperations/processUnstructuredSS-Request.oa.mjs";
import { unstructuredSS_Request } from "../MAP-SupplementaryServiceOperations/unstructuredSS-Request.oa.mjs";
import { unstructuredSS_Notify } from "../MAP-SupplementaryServiceOperations/unstructuredSS-Notify.oa.mjs";
import { registerPassword } from "../MAP-SupplementaryServiceOperations/registerPassword.oa.mjs";
import { getPassword } from "../MAP-SupplementaryServiceOperations/getPassword.oa.mjs";
import { ss_InvocationNotification } from "../MAP-SupplementaryServiceOperations/ss-InvocationNotification.oa.mjs";
import { registerCC_Entry } from "../MAP-SupplementaryServiceOperations/registerCC-Entry.oa.mjs";
import { eraseCC_Entry } from "../MAP-SupplementaryServiceOperations/eraseCC-Entry.oa.mjs";
import { sendRoutingInfoForSM } from "../MAP-ShortMessageServiceOperations/sendRoutingInfoForSM.oa.mjs";
import { mo_ForwardSM } from "../MAP-ShortMessageServiceOperations/mo-ForwardSM.oa.mjs";
import { mt_ForwardSM } from "../MAP-ShortMessageServiceOperations/mt-ForwardSM.oa.mjs";
import { reportSM_DeliveryStatus } from "../MAP-ShortMessageServiceOperations/reportSM-DeliveryStatus.oa.mjs";
import { alertServiceCentre } from "../MAP-ShortMessageServiceOperations/alertServiceCentre.oa.mjs";
import { informServiceCentre } from "../MAP-ShortMessageServiceOperations/informServiceCentre.oa.mjs";
import { readyForSM } from "../MAP-ShortMessageServiceOperations/readyForSM.oa.mjs";
import { prepareGroupCall } from "../MAP-Group-Call-Operations/prepareGroupCall.oa.mjs";
import { processGroupCallSignalling } from "../MAP-Group-Call-Operations/processGroupCallSignalling.oa.mjs";
import { forwardGroupCallSignalling } from "../MAP-Group-Call-Operations/forwardGroupCallSignalling.oa.mjs";
import { sendGroupCallEndSignal } from "../MAP-Group-Call-Operations/sendGroupCallEndSignal.oa.mjs";
import { provideSubscriberLocation } from "../MAP-LocationServiceOperations/provideSubscriberLocation.oa.mjs";
import { sendRoutingInfoForLCS } from "../MAP-LocationServiceOperations/sendRoutingInfoForLCS.oa.mjs";
import { subscriberLocationReport } from "../MAP-LocationServiceOperations/subscriberLocationReport.oa.mjs";
import { releaseResources } from "../MAP-CallHandlingOperations/releaseResources.oa.mjs";
import { mt_ForwardSM_VGCS } from "../MAP-ShortMessageServiceOperations/mt-ForwardSM-VGCS.oa.mjs";
import { sendGroupCallInfo } from "../MAP-Group-Call-Operations/sendGroupCallInfo.oa.mjs";


/**
 * @summary Supported_MAP_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Supported-MAP-Operations OPERATION ::= {updateLocation | cancelLocation | cancelVcsgLocation | 
 * purgeMS | 
 * sendIdentification | updateGprsLocation | updateVcsgLocation | prepareHandover | sendEndSignal | 
 * processAccessSignalling | forwardAccessSignalling | prepareSubsequentHandover | 
 * sendAuthenticationInfo | authenticationFailureReport | checkIMEI | insertSubscriberData | 
 * deleteSubscriberData | reset | forwardCheckSS-Indication | restoreData | provideSubscriberInfo | 
 * anyTimeInterrogation | anyTimeSubscriptionInterrogation | anyTimeModification | 
 * sendRoutingInfoForGprs | failureReport |noteMsPresentForGprs | noteMM-Event | 
 * noteSubscriberDataModified | activateTraceMode | deactivateTraceMode | sendIMSI | 
 * sendRoutingInfo | provideRoamingNumber | resumeCallHandling | setReportingState | statusReport | 
 * remoteUserFree | ist-Alert | 
 * ist-Command | registerSS | eraseSS | activateSS | deactivateSS | interrogateSS | 
 * processUnstructuredSS-Request | unstructuredSS-Request | unstructuredSS-Notify | 
 * registerPassword | getPassword | ss-InvocationNotification | registerCC-Entry | eraseCC-Entry | 
 * sendRoutingInfoForSM | mo-ForwardSM | mt-ForwardSM | reportSM-DeliveryStatus | 
 * alertServiceCentre | informServiceCentre | readyForSM | prepareGroupCall | 
 * processGroupCallSignalling | forwardGroupCallSignalling | sendGroupCallEndSignal |
 * provideSubscriberLocation | sendRoutingInfoForLCS | subscriberLocationReport | 
 * releaseResources | mt-ForwardSM-VGCS | sendGroupCallInfo }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Supported_MAP_Operations: (OPERATION)[] = [ updateLocation, cancelLocation, cancelVcsgLocation, purgeMS, sendIdentification, updateGprsLocation, updateVcsgLocation, prepareHandover, sendEndSignal, processAccessSignalling, forwardAccessSignalling, prepareSubsequentHandover, sendAuthenticationInfo, authenticationFailureReport, checkIMEI, insertSubscriberData, deleteSubscriberData, reset, forwardCheckSS_Indication, restoreData, provideSubscriberInfo, anyTimeInterrogation, anyTimeSubscriptionInterrogation, anyTimeModification, sendRoutingInfoForGprs, failureReport, noteMsPresentForGprs, noteMM_Event, noteSubscriberDataModified, activateTraceMode, deactivateTraceMode, sendIMSI, sendRoutingInfo, provideRoamingNumber, resumeCallHandling, setReportingState, statusReport, remoteUserFree, ist_Alert, ist_Command, registerSS, eraseSS, activateSS, deactivateSS, interrogateSS, processUnstructuredSS_Request, unstructuredSS_Request, unstructuredSS_Notify, registerPassword, getPassword, ss_InvocationNotification, registerCC_Entry, eraseCC_Entry, sendRoutingInfoForSM, mo_ForwardSM, mt_ForwardSM, reportSM_DeliveryStatus, alertServiceCentre, informServiceCentre, readyForSM, prepareGroupCall, processGroupCallSignalling, forwardGroupCallSignalling, sendGroupCallEndSignal, provideSubscriberLocation, sendRoutingInfoForLCS, subscriberLocationReport, releaseResources, mt_ForwardSM_VGCS, sendGroupCallInfo, ];

/* eslint-enable */
